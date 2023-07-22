import { Controller, Get } from '@nestjs/common';
import { CrawlService } from './crawl.service';
import { writeFile } from 'fs';
@Controller('crawl')
export class CrawlController {
  constructor(private readonly scraperService: CrawlService) {}

  @Get()
  async scrapeData() {
    const browser = await this.scraperService.startBrowser();
    if (!browser) {
      return 'Không thể khởi tạo trình duyệt.';
    }

    const url = 'https://phongtro123.com/';
    const indexs = [1, 2, 3, 4, 5];
    const dataFiles = [
      './data_test/chothuephongtro.json',
      './data_test/nhachothue.json',
      './data_test/chothuecanho.json',
      './data_test/chothuematbang.json',
      './data_test/timnguoioghep.json',
    ];

    try {
      const categories = await this.scraperService.scrapeCategories(
        browser,
        url,
      );

      const selectedCategories = categories.filter((_, index) =>
        indexs.includes(index),
      );

      for (let i = 0; i < selectedCategories.length; i++) {
        const category = selectedCategories[i];
        const result = await this.scraperService.scrapeData(
          browser,
          category.link,
        );

        writeFile(dataFiles[i], JSON.stringify(result), (err) => {
          if (err) console.log('Ghi data vào file JSON thất bại: ' + err);
          else console.log('Ghi data vào file JSON thành công!');
        });
      }
      return 'Dữ liệu đã được cào thành công.';
    } catch (e) {
      console.log('Lỗi trong quá trình cạo dữ liệu: ' + e);
      return 'Lỗi trong quá trình cạo dữ liệu: ' + e;
    } finally {
      await browser.close();
    }
  }
}
