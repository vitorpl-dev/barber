import { postgresRepository } from '../../handler/postgres';
import { SetSellerStatusController } from './SetSellerStatusController';
import { SetSellerStatusUseCase } from './SetSellerStatusUseCase';

const setSellerStatusUseCase = new SetSellerStatusUseCase(postgresRepository);

const setSellerStatusController = new SetSellerStatusController(setSellerStatusUseCase);

export { setSellerStatusUseCase, setSellerStatusController };
