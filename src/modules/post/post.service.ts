import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostEntity } from './post.entity';
import { Repository, Between, FindOperator, ILike } from 'typeorm';
import { InputPost } from './input_post.args';
import { InputCreatePost } from './input_create_post.args';
import { InputUpdatePost } from './input_update_post.args';
import { v4 as uuidv4 } from 'uuid';
import generaDate from 'src/utils/generateDate';
import generateCode from 'src/utils/generateCode';
import { AttributeEntity } from '../attribute/attribute.entity';
import { ImageEntity } from '../image/image.entity';
import { OverviewEntity } from '../overview/overview.entity';
import { ProvinceEntity } from '../province/province.entity';
import { LabelEntity } from '../label/label.entity';
import * as moment from 'moment';
@Injectable()
export class PostService {
  constructor(
    @InjectRepository(ProvinceEntity)
    private readonly _provinceRepository: Repository<ProvinceEntity>,

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
  ) {}

  async GetAllPost(input: InputPost) {
    const title = input.title;
    const start = input.start ? parseInt(input.start, 10) : undefined;
    const address = input.address;
    const categoryCode = input.categoryCode;
    const priceNumber = input.priceNumber.length > 1 ? input.priceNumber : null;
    const areaNumber = input.areaNumber.length > 1 ? input.areaNumber : null;
    const provinceCode = input.provinceCode;
    const pageSize = input.pageSize || +process.env.LIMIT;
    const pageNumber = input.pageNumber || 1;
    const orderBy = input.orderBy;
    const direction = input.direction;
    const where = {
      ...(title && { title: ILike(`%${title}%`) }),
      ...(address && { address: ILike(`%${address}%`) }),
      ...(start && { start }),
      ...(categoryCode && { categoryCode }),
      ...(provinceCode && { provinceCode }),
      ...(priceNumber && {
        priceNumber: Array.isArray(priceNumber)
          ? Between(priceNumber[0], priceNumber[1])
          : (priceNumber as FindOperator<number>),
      }),
      ...(areaNumber && {
        areaNumber: Array.isArray(areaNumber)
          ? Between(areaNumber[0], areaNumber[1])
          : (areaNumber as FindOperator<number>),
      }),
    };
    const columnToOrderCondition: { [key: string]: 'ASC' | 'DESC' } = {
      createdAt: 'DESC',
      // Add more column names and their corresponding order conditions here
    };

    const defaultOrderBy = 'createdAt';
    const defaultDirection = 'DESC';

    const order = {
      [orderBy || defaultOrderBy]:
        columnToOrderCondition[direction || defaultDirection],
    };
    console.log(order);

    const limit = pageSize;
    const offset = pageSize * (pageNumber - 1);
    const [data, totalCount] = await this._postRepository.findAndCount({
      where: where,
      take: limit,
      skip: offset,
    });
    const totalPage = Math.ceil(+totalCount / +pageSize);
    return {
      err: data ? 0 : 1,
      msg: data ? 'OK' : 'Failed to get post',
      total: totalCount,
      totalPage: totalPage,
      pageNumber,
      pageSize,
      response: data,
    };
  }

  async GetPostId(id: string) {
    const response = await this._postRepository.findOne({
      where: {
        id,
      },
    });
    return {
      err: response ? 0 : 1,
      msg: response ? 'OK' : 'Failed to get postId',
      response,
    };
  }

  async CreatePost(input: InputCreatePost) {
    try {
      const userid = input.userid;
      const address = input.address;
      const areaCode = input.areaCode;
      const areaNumber = input.areaNumber;
      const categoryCode = input.categoryCode;
      const description = input.description;
      const images = input.images;
      const label = input.label;
      const priceCode = input.priceCode;
      const priceNumber = input.priceNumber;
      const province = input.province;
      const target = input.target;
      const title = input.title;
      const type = input.type;
      const start = input.start;

      const attributesId = uuidv4();
      const imagesId = uuidv4();
      const overviewId = uuidv4();
      const hashtag = `${Math.floor(Math.random() * Math.pow(10, 6))}`;
      const currentDate = generaDate();
      const labelCode = generateCode(label);
      const priceUnit = +priceNumber < 1 ? 'đồng/tháng' : 'triệu/tháng';
      const price = `${
        +priceNumber * (priceUnit === 'đồng/tháng' ? 1000000 : 1)
      } ${priceUnit}`;

      // Create post
      const post = this._postRepository.create({
        id: uuidv4(),
        attributesId,
        labelCode,
        imagesId,
        overviewId,
        title: title || null,
        start: start || 0,
        address: address || null,
        description: JSON.stringify(description) || null,
        userId: userid,
        categoryCode,
        provinceCode: province.includes('Thành phố')
          ? generateCode(province.replace('Thành phố', ''))
          : generateCode(province.replace('Tỉnh', '')),
        areaCode,
        priceCode,
        priceNumber,
        areaNumber,
        isActive: true,
      });
      await this._postRepository.save(post);

      // Create Attribute
      const attribute = this._attributeRepository.create({
        id: attributesId,
        price,
        acreage: `${areaNumber} m2`,
        published: moment(new Date()).format('DD/MM/YYYY'),
        hashtag: `#${hashtag}`,
      });
      await this._attributeRepository.save(attribute);

      // Create Image
      const image = this._imageRepository.create({
        id: imagesId,
        image: JSON.stringify(images),
        postImg: images[0],
        total: images.length,
      });
      await this._imageRepository.save(image);

      // Create Overview
      const overview = this._overviewRepository.create({
        id: overviewId,
        code: `#${hashtag}`,
        area: label,
        type: type,
        target: target,
        bonus: 'Tin thường',
        created: currentDate.today,
        expired: currentDate.expireDay,
      });
      await this._overviewRepository.save(overview);

      // Create or find Province
      const provinceRecord = await this._provinceRepository.findOne({
        where: [
          { value: province.replace('Thành phố', '') },
          { value: province.replace('Tỉnh', '') },
        ],
      });
      let provinceEntity: ProvinceEntity;
      if (provinceRecord) {
        provinceEntity = provinceRecord;
      } else {
        provinceEntity = this._provinceRepository.create({
          code: province.includes('Thành phố')
            ? generateCode(province.replace('Thành phố', ''))
            : generateCode(province.replace('Tỉnh', '')),
          value: province.includes('Thành phố')
            ? province.replace('Thành phố', '')
            : province.replace('Tỉnh', ''),
        });
        await this._provinceRepository.save(provinceEntity);
      }

      // Create or find Label
      const labelRecord = await this._labelRepository.findOne({
        where: { code: labelCode },
      });
      let labelEntity: LabelEntity;
      if (labelRecord) {
        labelEntity = labelRecord;
      } else {
        labelEntity = this._labelRepository.create({
          code: labelCode,
          value: label,
        });
        await this._labelRepository.save(labelEntity);
      }

      return {
        err: 0,
        msg: 'create post success',
      };
    } catch (error) {
      throw error;
    }
  }

  async UpdatePostId(id: string, input: InputUpdatePost) {
    try {
      const { address, title } = input;
      const postPromise = this._postRepository.update(id, {
        title,
        address,
      });

      await Promise.all([postPromise]);
      return {
        err: 0,
        msg: 'edit post success',
      };
    } catch (error) {
      throw error;
    }
  }

  async DeletePostId(id: string) {
    try {
      await this._postRepository.update(id, {
        isActive: false,
      });
      return {
        err: 0,
        msg: 'delete post success',
      };
    } catch (error) {
      throw error;
    }
  }
}
