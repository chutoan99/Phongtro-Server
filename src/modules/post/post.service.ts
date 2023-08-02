import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostEntity } from './model/post.entity';
import {
  Repository,
  Between,
  FindOperator,
  OrderByCondition,
  ILike,
} from 'typeorm';
import { InputPost } from './args/input_post.args';
import { InputCreatePost } from './args/input_create_post.args';
import { InputUpdatePost } from './args/input_update_post.args';
import { v4 as uuidv4 } from 'uuid';
import generaDate from 'src/utils/generateDate';
import generateCode from 'src/utils/generateCode';
import { AttributeEntity } from '../attribute/model/attribute.entity';
import { ImageEntity } from '../image/model/image.entity';
import { OverviewEntity } from '../overview/model/overview.entity';
import { ProvinceEntity } from '../province/model/province.entity';
import { LabelEntity } from '../label/model/label.entity';
import * as moment from 'moment';
@Injectable()
export class PostService {
  constructor(
    @InjectRepository(ProvinceEntity)
    private readonly provinceRepository: Repository<ProvinceEntity>,

    @InjectRepository(AttributeEntity)
    private readonly attributeRepository: Repository<AttributeEntity>,

    @InjectRepository(LabelEntity)
    private readonly labelRepository: Repository<LabelEntity>,

    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>,

    @InjectRepository(ImageEntity)
    private readonly imageRepository: Repository<ImageEntity>,

    @InjectRepository(OverviewEntity)
    private readonly overviewRepository: Repository<OverviewEntity>,
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

    const order: OrderByCondition = {
      [orderBy || defaultOrderBy]:
        columnToOrderCondition[direction || defaultDirection],
    };

    const limit = pageSize;
    const offset = pageSize * (pageNumber - 1);
    const [data, totalCount] = await this.postRepository.findAndCount({
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
    const response = await this.postRepository.findOne({
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
      const post = this.postRepository.create({
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
      await this.postRepository.save(post);

      // Create Attribute
      const attribute = this.attributeRepository.create({
        id: attributesId,
        price,
        acreage: `${areaNumber} m2`,
        published: moment(new Date()).format('DD/MM/YYYY'),
        hashtag: `#${hashtag}`,
      });
      await this.attributeRepository.save(attribute);

      // Create Image
      const image = this.imageRepository.create({
        id: imagesId,
        image: JSON.stringify(images),
        postImg: images[0],
        total: images.length,
      });
      await this.imageRepository.save(image);

      // Create Overview
      const overview = this.overviewRepository.create({
        id: overviewId,
        code: `#${hashtag}`,
        area: label,
        type: type,
        target: target,
        bonus: 'Tin thường',
        created: currentDate.today,
        expired: currentDate.expireDay,
      });
      await this.overviewRepository.save(overview);

      // Create or find Province
      const provinceRecord = await this.provinceRepository.findOne({
        where: [
          { value: province.replace('Thành phố', '') },
          { value: province.replace('Tỉnh', '') },
        ],
      });
      let provinceEntity: ProvinceEntity;
      if (provinceRecord) {
        provinceEntity = provinceRecord;
      } else {
        provinceEntity = this.provinceRepository.create({
          code: province.includes('Thành phố')
            ? generateCode(province.replace('Thành phố', ''))
            : generateCode(province.replace('Tỉnh', '')),
          value: province.includes('Thành phố')
            ? province.replace('Thành phố', '')
            : province.replace('Tỉnh', ''),
        });
        await this.provinceRepository.save(provinceEntity);
      }

      // Create or find Label
      const labelRecord = await this.labelRepository.findOne({
        where: { code: labelCode },
      });
      let labelEntity: LabelEntity;
      if (labelRecord) {
        labelEntity = labelRecord;
      } else {
        labelEntity = this.labelRepository.create({
          code: labelCode,
          value: label,
        });
        await this.labelRepository.save(labelEntity);
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
      const postPromise = this.postRepository.update(id, {
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
      await this.postRepository.update(id, {
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
