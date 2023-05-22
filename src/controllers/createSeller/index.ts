import { postgresRepository } from '../../handler/postgres';
import { CreateSellerController } from './CreateSellerController';
import { CreateSellerUseCase } from './CreateSellerUseCase';

const createSellerUseCase = new CreateSellerUseCase(postgresRepository);

const createSellerController = new CreateSellerController(createSellerUseCase);

export { createSellerUseCase, createSellerController };
