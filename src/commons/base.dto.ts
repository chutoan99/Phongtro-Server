// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { v4 as uuidv4 } from 'uuid';
// import * as bcrypt from 'bcryptjs';
// import { Area } from '../models/area.entity';
// import { Attribute } from '../models/attribute.entity';
// import { Category } from '../models/category.entity';
// import { Image } from '../models/image.entity';
// import { Label } from '../models/label.entity';
// import { Overview } from '../models/overview.entity';
// import { Post } from '../models/post.entity';
// import { Price } from '../models/price.entity';
// import { Province } from '../models/province.entity';
// import { User } from '../models/user.entity';
// import { dataPrice, dataArea, categories, data } from '../utils/data';
// import { getNumberFromString, getNumberFromStringV2 } from '../utils/comom';

// const hashPassword = (password: string): string => {
//   const salt = bcrypt.genSaltSync(12);
//   return bcrypt.hashSync(password, salt);
// };

// @Injectable()
// export class DataService {
//   constructor(
//     @InjectRepository(Area)
//     private readonly areaRepository: Repository<Area>,
//     @InjectRepository(Attribute)
//     private readonly attributeRepository: Repository<Attribute>,
//     @InjectRepository(Category)
//     private readonly categoryRepository: Repository<Category>,
//     @InjectRepository(Image)
//     private readonly imageRepository: Repository<Image>,
//     @InjectRepository(Label)
//     private readonly labelRepository: Repository<Label>,
//     @InjectRepository(Overview)
//     private readonly overviewRepository: Repository<Overview>,
//     @InjectRepository(Post)
//     private readonly postRepository: Repository<Post>,
//     @InjectRepository(Price)
//     private readonly priceRepository: Repository<Price>,
//     @InjectRepository(Province)
//     private readonly provinceRepository: Repository<Province>,
//     @InjectRepository(User)
//     private readonly userRepository: Repository<User>,
//   ) {}

//   async insertData(): Promise<void> {
//     console.log('Starting data insertion...');

//     // Insert areas
//     await this.areaRepository.save(
//       dataArea.map((area, index) => ({
//         id: uuidv4(),
//         order: index + 1,
//         code: area.code,
//         value: area.value,
//       })),
//     );

//     // Insert prices
//     await this.priceRepository.save(
//       dataPrice.map((price, index) => ({
//         id: uuidv4(),
//         order: index + 1,
//         code: price.code,
//         value: price.value,
//       })),
//     );

//     // Insert categories
//     await this.categoryRepository.save(
//       categories.map((item) => ({
//         code: item.code,
//         value: item.value,
//         header: item.content.title,
//         subHeader: item.content.description,
//         path: item.path,
//       })),
//     );

//     // Insert data
//     for (const dataBody of data) {
//       const provinceCodes = [];
//       const labelCodes = [];

//       for (const item of dataBody.content) {
//         // Create and check labelCode
//         let labelCode = generateCode(item?.header?.class?.classType).trim();
//         if (!labelCodes.some((label) => label.code === labelCode)) {
//           labelCodes.push({
//             code: labelCode,
//             value: item?.header?.class?.classType?.trim(),
//           });
//         }

//         // Create and check provinceCode
//         let provinceCode = generateCode(
//           item?.header?.address.split(',').slice(-1)[0].trim(),
//         );
//         if (!provinceCodes.some((province) => province.code === provinceCode)) {
//           provinceCodes.push({
//             code: provinceCode,
//             value: item?.header?.address?.split(',').slice(-1)[0].trim(),
//           });
//         }

//         const postId = uuidv4();
//         const attributesId = uuidv4();
//         const userId = uuidv4();
//         const imagesId = uuidv4();
//         const overviewId = uuidv4();
//         const currentArea = getNumberFromString(
//           item?.header?.attributes?.acreage,
//         );
//         const currentPrice = getNumberFromString(
//           item?.header?.attributes?.price,
//         );
//         const description = JSON.stringify(item?.mainContent?.content);

//         // Create Post entity
//         const post = new Post();
//         post.id = postId;
//         post.title = item?.header?.title;
//         post.start = item?.header?.star;
//         post.address = item?.header?.address;
//         post.description = description;
//         post.userId = userId;
//         post.labelCode = labelCode;
//         post.provinceCode = provinceCode;
//         post.categoryCode = dataBody.code;
//         post.attributesId = attributesId;
//         post.overviewId = overviewId;
//         post.imagesId = imagesId;
//         post.areaCode = dataArea.find(
//           (area) => area.max > currentArea && area.min <= currentArea,
//         )?.code;
//         post.priceCode = dataPrice.find(
//           (price) => price.max > currentPrice && price.min <= currentPrice,
//         )?.code;
//         post.priceNumber = getNumberFromStringV2(
//           item?.header?.attributes?.price,
//         );
//         post.areaNumber = getNumberFromStringV2(
//           item?.header?.attributes?.acreage,
//         );
//         await this.postRepository.save(post);

//         // Create Attribute entity
//         const attribute = new Attribute();
//         attribute.id = attributesId;
//         attribute.price = item?.header?.attributes?.price;
//         attribute.acreage = item?.header?.attributes?.acreage;
//         attribute.published = item?.header?.attributes?.published;
//         attribute.hashtag = item?.header?.attributes?.hashtag;
//         await this.attributeRepository.save(attribute);

//         // Create Image entity
//         const image = new Image();
//         image.id = imagesId;
//         image.image = JSON.stringify(item?.images);
//         image.postImg = item?.images[0];
//         image.total = item?.images.length;
//         await this.imageRepository.save(image);

//         // Create Overview entity
//         const overview = new Overview();
//         overview.id = overviewId;
//         overview.code = item?.overview?.content.find(
//           (i) => i.name === 'Mã tin:',
//         )?.content;
//         overview.area = item?.overview?.content.find(
//           (i) => i.name === 'Khu vực',
//         )?.content;
//         overview.type = item?.overview?.content.find(
//           (i) => i.name === 'Loại tin rao:',
//         )?.content;
//         overview.target = item?.overview?.content.find(
//           (i) => i.name === 'Đối tượng thuê:',
//         )?.content;
//         overview.bonus = item?.overview?.content.find(
//           (i) => i.name === 'Gói tin:',
//         )?.content;
//         overview.created = item?.overview?.content.find(
//           (i) => i.name === 'Ngày đăng:',
//         )?.content;
//         overview.expired = item?.overview?.content.find(
//           (i) => i.name === 'Ngày hết hạn:',
//         )?.content;
//         await this.overviewRepository.save(overview);

//         // Create User entity
//         const user = new User();
//         user.id = userId;
//         user.name = item?.contact?.content.find(
//           (i) => i.name === 'Liên hệ:',
//         )?.content;
//         user.password = hashPassword('123456');
//         user.phone = item?.contact?.content.find(
//           (i) => i.name === 'Điện thoại:',
//         )?.content;
//         user.zalo = item?.contact?.content.find(
//           (i) => i.name === 'Zalo',
//         )?.content;
//         user.avatar = 'https://phongtro123.com/images/default-user.png';
//         await this.userRepository.save(user);
//       }

//       // Create or update Province entities
//       for (const item of provinceCodes) {
//         await this.provinceRepository.save({
//           code: item?.code,
//           value: item?.value,
//         });
//       }

//       // Create or update Label entities
//       for (const item of labelCodes) {
//         await this.labelRepository.save({
//           code: item?.code,
//           value: item?.value,
//         });
//       }
//     }

//     console.log('Data insertion completed.');
//   }
// }
