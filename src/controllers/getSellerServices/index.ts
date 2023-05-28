import { postgresRepository } from '../../handler/postgres';
import { GetSellerServicesController } from './GetSellerServicesController';
import { GetSellerServicesUseCase } from './GetSellerServicesUseCase';

const getSellerServicesUseCase = new GetSellerServicesUseCase(postgresRepository);

const getSellerServicesController = new GetSellerServicesController(getSellerServicesUseCase);

export { getSellerServicesUseCase, getSellerServicesController };
