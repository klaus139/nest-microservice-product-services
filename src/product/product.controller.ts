import { Controller, Get, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { EventPattern } from '@nestjs/microservices';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  async all() {
    return this.productService.all();
  }

  @Post()
  // @EventPattern('product_created')
  // async hello(product: {
  //   id: number;
  //   title: string;
  //   image: string;
  //   likes: number;
  // }) {
  //   await this.productService.create(product);
  // }
  @EventPattern('product_created')
  async hello(product: any) {
    if (!product) {
      return;
    }
    await this.productService.create({
      id: product.id,
      title: product.title,
      image: product.image,
      likes: product.likes,
    });
  }
}

// @Post()
//   async create(@Body('title') title: string, @Body('image') image: string) {
//     const product = await this.productService.create({ title, image });
//     this.client.emit('product_created', product);
//     return product;
//   }