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
  @EventPattern('product_created')
  async hello(product: {
    id: number;
    title: string;
    image: string;
    likes: number;
  }) {
    await this.productService.create(product);
  }
}
