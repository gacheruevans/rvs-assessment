import { Injectable } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from './product.dto';
import { Product } from './product.entity';

@Injectable()
export class ProductRepository {
  private products: Product[] = [];
  private idCounter = 1;

  findAll(): Product[] {
    return this.products;
  }

  findById(id: number): Product | undefined {
    return this.products.find((p) => p.id === id);
  }

  create(dto: CreateProductDto): Product {
    const newProduct: Product = { id: this.idCounter++, ...dto };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, dto: UpdateProductDto): Product {
    const index = this.products.findIndex((p) => p.id === id);
    if (index === -1) throw new Error('Product not found');
    this.products[index] = { ...this.products[index], ...dto };
    return this.products[index];
  }

  delete(id: number): Product {
    const index = this.products.findIndex((p) => p.id === id);
    if (index === -1) throw new Error('Product not found');
    return this.products.splice(index, 1)[0];
  }
}
