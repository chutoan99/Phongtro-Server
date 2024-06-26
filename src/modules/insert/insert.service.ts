import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'
import * as bcrypt from 'bcryptjs'

import { dataPrice, dataArea, categories, dataPost } from '../../utils/data'
import { getNumberFromString, getNumberFromStringV2 } from '../../utils/comom'

import generateCode from 'src/utils/generateCode'

import { AreaEntity } from '../area/area.entity'
import { AttributeEntity } from '../attribute/attribute.entity'
import { CategoryEntity } from '../category/category.entity'
import { ImageEntity } from '../image/image.entity'
import { LabelEntity } from '../label/label.entity'
import { OverviewEntity } from '../overview/overview.entity'
import { PostEntity } from '../post/post.entity'
import { PriceEntity } from '../price/price.entity'
import { ProvinceEntity } from '../province/province.entity'
import { UserEntity } from '../user/user.entity'
interface ProvinceCode {
	code: string
	value: string
}
interface LabelCode {
	code: string
	value: string
}
@Injectable()
export class InsertService {
	constructor(
		@InjectRepository(AreaEntity)
		private readonly _areaRepository: Repository<AreaEntity>,

		@InjectRepository(CategoryEntity)
		private readonly _categoryRepository: Repository<CategoryEntity>,

		@InjectRepository(ProvinceEntity)
		private readonly _provinceRepository: Repository<ProvinceEntity>,

		@InjectRepository(PriceEntity)
		private readonly _priceRepository: Repository<PriceEntity>,

		@InjectRepository(AttributeEntity)
		private readonly _attributeRepository: Repository<AttributeEntity>,

		@InjectRepository(LabelEntity)
		private readonly _labelRepository: Repository<LabelEntity>,

		@InjectRepository(PostEntity)
		private readonly _postRepository: Repository<PostEntity>,

		@InjectRepository(ImageEntity)
		private readonly _imageRepository: Repository<ImageEntity>,

		@InjectRepository(OverviewEntity)
		private readonly _overviewRepository: Repository<OverviewEntity>,

		@InjectRepository(UserEntity)
		private readonly _userRepository: Repository<UserEntity>
	) {}

	async insertData() {
		try {
			const hashPassWord = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(12)) // HASH PASSWORD
			const labelCodes: LabelCode[] = []
			const provinceCodes: ProvinceCode[] = []

			await Promise.all(
				dataPost.map(async (dataBody) => {
					for (const item of dataBody.content) {
						// tạo và kiểm tra labelCode
						const labelCode = generateCode(item?.header?.class?.classType).trim()

						if (labelCodes.every((item) => item?.code !== labelCode)) {
							labelCodes.push({
								code: generateCode(item?.header?.class?.classType).trim(),
								value: item?.header?.class?.classType?.trim()
							})
						}

						// tạo và kiểm tra provinceCode
						const provinceCode = generateCode(item?.header?.address.split(',').slice(-1)[0].trim())

						if (provinceCodes.every((item) => item?.code !== provinceCode)) {
							provinceCodes.push({
								code: generateCode(item?.header?.address.split(',').slice(-1)[0].trim()),
								value: item?.header?.address?.split(',')?.slice(-1)[0].trim()
							})
						}

						const postId = uuidv4()
						const attributesId = uuidv4()
						const userId = uuidv4()
						const imagesId = uuidv4()
						const overviewId = uuidv4()
						const currentArea = getNumberFromString(item?.header?.attributes?.acreage)
						const currentPrice = getNumberFromString(item?.header?.attributes?.price)
						const description = JSON.stringify(item?.mainContent?.content)

						await this._userRepository.save({
							id: userId,
							name: item?.contact?.content.find((i) => i.name === 'Liên hệ:')?.content,
							password: hashPassWord('123456'),
							phone: item?.contact?.content.find((i) => i.name === 'Điện thoại:')?.content,
							zalo: item?.contact?.content.find((i) => i.name === 'Zalo')?.content,
							avatar: 'https://phongtro123.com/images/default-user.png',
							isActive: true
						})

						await this._attributeRepository.save({
							id: attributesId,
							price: item?.header?.attributes?.price,
							acreage: item?.header?.attributes?.acreage,
							published: item?.header?.attributes?.published,
							hashtag: item?.header?.attributes?.hashtag,
							isActive: true
						})

						await this._imageRepository.save({
							id: imagesId,
							image: JSON.stringify(item?.images),
							postImg: item?.images[0],
							total: item?.images.length,
							isActive: true
						})

						await this._overviewRepository.save({
							id: overviewId,
							code: item?.overview?.content.find((i) => i.name === 'Mã tin:')?.content,
							area: item?.overview?.content.find((i) => i.name === 'Khu vực')?.content,
							type: item?.overview?.content.find((i) => i.name === 'Loại tin rao:')?.content,
							target: item?.overview?.content.find((i) => i.name === 'Đối tượng thuê:')?.content,
							bonus: item?.overview?.content.find((i) => i.name === 'Gói tin:')?.content,
							created: item?.overview?.content.find((i) => i.name === 'Ngày đăng:')?.content,
							expired: item?.overview?.content.find((i) => i.name === 'Ngày hết hạn:')?.content,
							isActive: true
						})
						await this._postRepository.save({
							id: postId,
							title: item?.header?.title,
							start: item?.header?.star,
							address: item?.header?.address,
							description: description,
							userId: userId,
							labelCode: labelCode,
							provinceCode: provinceCode,
							categoryCode: dataBody.code,
							attributesId: attributesId,
							overviewId: overviewId,
							imagesId: imagesId,
							isActive: true,
							areaCode: dataArea.find((area) => area.max > currentArea && area.min <= currentArea)?.code,
							priceCode: dataPrice.find((area) => area.max > currentPrice && area.min <= currentPrice)
								?.code,
							priceNumber: getNumberFromStringV2(item?.header?.attributes?.price),
							areaNumber: getNumberFromStringV2(item?.header?.attributes?.acreage)
						})
					}
				})
			)
			for (const item of provinceCodes) {
				const foundItem = await this._provinceRepository.findOne({
					where: { code: item.code }
				})
				if (!foundItem) {
					await this._provinceRepository.save({
						code: item?.code,
						value: item?.value,
						isActive: true
					})
				}
			}

			for (const item of labelCodes) {
				const foundItem = await this._labelRepository.findOne({
					where: { code: item.code }
				})

				if (!foundItem) {
					await this._labelRepository.save({
						code: item?.code,
						value: item?.value,
						isActive: true
					})
				}
			}

			await this._areaRepository.save(
				dataArea.map((area, index) => ({
					order: index + 1,
					code: area.code,
					value: area.value,
					isActive: true
				}))
			)

			await this._categoryRepository.save(
				categories.map((item) => ({
					code: item.code,
					value: item.value,
					header: item.content.title,
					subHeader: item.content.description,
					path: item.path,
					isActive: true
				}))
			)

			await this._priceRepository.save(
				dataPrice.map((item, index) => ({
					order: index + 1,
					code: item?.code,
					value: item?.value,
					isActive: true
				}))
			)

			return 'Data inserted successfully'
		} catch (error) {
			console.error('Error inserting data:', error)
			throw new Error('Data insertion failed')
		}
	}
}
