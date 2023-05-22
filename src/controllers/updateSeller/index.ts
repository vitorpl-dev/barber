import { postgresRepository } from '../../handler/postgres';
import { UpdateSellerController } from './UpdateSellerController';
import { UpdateSellerUseCase } from './UpdateSellerUseCase';

const updateSellerUseCase = new UpdateSellerUseCase(postgresRepository);

const updateSellerController = new UpdateSellerController(updateSellerUseCase);

export { updateSellerUseCase, updateSellerController };
