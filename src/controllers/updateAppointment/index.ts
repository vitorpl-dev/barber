import { postgresRepository } from '../../handler/postgres';
import { UpdateAppointmentController } from './UpdateAppointmentController';
import { UpdateAppointmentUseCase } from './UpdateAppointmentUseCase';

const updateAppointmentUseCase = new UpdateAppointmentUseCase(postgresRepository);

const updateAppointmentController = new UpdateAppointmentController(updateAppointmentUseCase);

export { updateAppointmentUseCase, updateAppointmentController };
