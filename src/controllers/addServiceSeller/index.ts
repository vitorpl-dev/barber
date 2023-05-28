import { postgresRepository } from '../../handler/postgres';
import { AddServiceSellerController } from './AddServiceSellerController';
import { AddServiceSellerUseCase } from './AddServiceSellerUseCase';

const addServiceSellerUseCase = new AddServiceSellerUseCase(postgresRepository);

const addServiceSellerController = new AddServiceSellerController(addServiceSellerUseCase);

export { addServiceSellerUseCase, addServiceSellerController };
