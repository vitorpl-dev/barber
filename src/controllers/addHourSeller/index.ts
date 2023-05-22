import { postgresRepository } from '../../handler/postgres';
import { AddHourSellerController } from './AddHourSellerController';
import { AddHourSellerUseCase } from './AddHourSellerUseCase';

const addHourSellerUseCase = new AddHourSellerUseCase(postgresRepository);

const addHourSellerController = new AddHourSellerController(addHourSellerUseCase);

export { addHourSellerUseCase, addHourSellerController };
