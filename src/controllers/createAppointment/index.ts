import { postgresRepository } from '../../handler/postgres';
import { CreateAppointmentController } from './CreateAppointmentController';
import { CreateAppointmentUseCase } from './CreateAppointmentUseCase';

const createAppointmentUseCase = new CreateAppointmentUseCase(postgresRepository);

const createAppointmentController = new CreateAppointmentController(createAppointmentUseCase);

export { createAppointmentUseCase, createAppointmentController };
