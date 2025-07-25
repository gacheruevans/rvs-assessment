import { Injectable } from '@nestjs/common';
import { ProductRepository } from './product.repository';
import { CreateProductDto, UpdateProductDto } from './product.dto';

@Injectable()
export class ProductService {
  constructor(private readonly productRepo: ProductRepository) {}

  findAll() {
    return this.productRepo.findAll();
  }

  findOne(id: number) {
    return this.productRepo.findById(id);
  }

  create(dto: CreateProductDto) {
    return this.productRepo.create(dto);
  }

  update(id: number, dto: UpdateProductDto) {
    return this.productRepo.update(id, dto);
  }

  delete(id: number) {
    return this.productRepo.delete(id);
  }
}
