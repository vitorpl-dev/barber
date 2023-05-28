import { postgresRepository } from '../../handler/postgres';
import { GetSellerController } from './GetSellerCotroller';
import { GetSellerUseCase } from './GetSellerUseCase';

const getSellerUseCase = new GetSellerUseCase(postgresRepository);

const getSellerController = new GetSellerController(getSellerUseCase);

export { getSellerUseCase, getSellerController };
