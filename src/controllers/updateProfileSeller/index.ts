import { postgresRepository } from '../../handler/postgres';
import { UpdateProfileSellerController } from './UpdateProfileSellerController';
import { UpdateProfileSellerUseCase } from './UpdateProfileSellerUseCase';

const updateProfileSellerUseCase = new UpdateProfileSellerUseCase(postgresRepository);

const updateProfileSellerController = new UpdateProfileSellerController(updateProfileSellerUseCase);

export { updateProfileSellerUseCase, updateProfileSellerController };
