/* eslint-disable @typescript-eslint/await-thenable */
import { Test } from '@nestjs/testing';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

describe('ProductController', () => {
  let productController: ProductController;
  let productService: ProductService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [ProductService],
    }).compile();

    productService = moduleRef.get(ProductService);
    productController = moduleRef.get(ProductController);
  });

  describe('findAll', () => {
    it('should return an array of products', async () => {
      const mockData = [
        {
          id: 1,
          name: 'test',
          price: 1,
        },
      ];

      jest.spyOn(productService, 'findAll').mockImplementation(() => mockData);

      const result = productController.findAll();

      expect(result).toBe(mockData);
    });
  });
});
