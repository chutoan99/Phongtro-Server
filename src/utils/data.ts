import * as chothuecanho from '../data/chothuecanho.json';
import * as chothuematbang from '../data/chothuematbang.json';
import * as chothuephongtro from '../data/chothuephongtro.json';
import * as nhachothue from '../data/nhachothue.json';
import * as timnguoioghep from '../data/timnguoioghep.json';
import generateCode from './generateCode';
interface Category {
  code: string;
  value: string;
  content: { title: string; description: string };
  path: string;
}
interface Price {
  min: number;
  max: number;
  value: string;
}
interface Area {
  min: number;
  max: number;
  value: string;
}
interface Data {
  code: string;
  content: any;
}
const prices: Price[] = [
  {
    min: 0,
    max: 1,
    value: 'Dưới 1 triệu',
  },
  {
    min: 1,
    max: 2,
    value: 'Từ 1 - 2 triệu',
  },
  {
    min: 2,
    max: 3,
    value: 'Từ 2 - 3 triệu',
  },
  {
    min: 3,
    max: 5,
    value: 'Từ 3 - 5 triệu',
  },
  {
    min: 5,
    max: 7,
    value: 'Từ 5 - 7 triệu',
  },
  {
    min: 7,
    max: 10,
    value: 'Từ 7 - 10 triệu',
  },
  {
    min: 10,
    max: 15,
    value: 'Từ 10 - 15 triệu',
  },
  {
    min: 15,
    max: 999999,
    value: 'Trên 15 triệu',
  },
];
const areas: Area[] = [
  {
    min: 0,
    max: 20,
    value: 'Dưới 20m',
  },
  {
    min: 20,
    max: 30,
    value: 'Từ 20m - 30m',
  },
  {
    min: 30,
    max: 50,
    value: 'Từ 30m - 50m',
  },
  {
    min: 50,
    max: 70,
    value: 'Từ 50m - 70m',
  },
  {
    min: 70,
    max: 90,
    value: 'Từ 70m - 90m',
  },
  {
    min: 90,
    max: 9999999,
    value: 'Trên 90m',
  },
];
export const dataPrice = prices.map((item) => ({
  ...item,
  code: generateCode(item.value),
}));
export const dataArea = areas.map((item) => ({
  ...item,
  code: generateCode(item.value),
}));

export const categories: Category[] = [
  {
    code: 'CTCH',
    value: 'Cho Thuê Căn Hộ',
    content: chothuecanho?.header,
    path: 'rental-apartment',
  },
  {
    code: 'CTMB',
    value: 'Cho Thuê Mặt Bằng',
    content: chothuematbang?.header,
    path: 'rental-ground',
  },
  {
    code: 'CTPT',
    value: 'Cho Thuê Phòng Trọ',
    content: chothuephongtro?.header,
    path: 'rental-motel',
  },
  {
    code: 'NCT',
    value: 'Nhà cho thuê',
    content: nhachothue?.header,
    path: 'rental-house',
  },
  {
    code: 'TNOG',
    value: 'Tìm Người Ở Ghép',
    content: timnguoioghep?.header,
    path: 'roommate',
  },
  {
    code: 'BLOG',
    value: 'Blog',
    content: { title: '', description: '' },
    path: 'blog',
  },
  {
    code: 'HUDA',
    value: 'Hướng Dẫn',
    content: { title: '', description: '' },
    path: 'user-manal',
  },
  {
    code: 'NATI',
    value: 'Nạp Tiền',
    content: { title: '', description: '' },
    path: 'money',
  },
  {
    code: 'BAGI',
    value: 'Bảng Giá',
    content: { title: '', description: '' },
    path: 'price',
  },
];

export const dataPost: Data[] = [
  {
    code: 'CTCH',
    content: chothuecanho?.body,
  },
  {
    code: 'CTMB',
    content: chothuematbang?.body,
  },
  {
    code: 'CTPT',
    content: chothuephongtro?.body,
  },
  {
    code: 'NCT',
    content: nhachothue?.body,
  },
  {
    code: 'TNOG',
    content: timnguoioghep?.body,
  },
];
