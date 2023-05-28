import { postgresRepository } from '../../handler/postgres';
import { GetAvaliableHoursController } from './GetAvaliableHoursController';
import { GetAvaliableHoursUseCase } from './GetAvaliableHoursUseCase';

const getAvaliableHoursUseCase = new GetAvaliableHoursUseCase(postgresRepository);

const getAvaliableHoursController = new GetAvaliableHoursController(getAvaliableHoursUseCase);

export { getAvaliableHoursUseCase, getAvaliableHoursController };
