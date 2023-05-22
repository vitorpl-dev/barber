import { postgresRepository } from '../../handler/postgres';
import { DeleteAppointmentController } from './DeleteAppointmentController';
import { DeleteAppointmentUseCase } from './DeleteAppointmentUseCase';

const deleteAppointmentUseCase = new DeleteAppointmentUseCase(postgresRepository);

const deleteAppointmentController = new DeleteAppointmentController(deleteAppointmentUseCase);

export { deleteAppointmentUseCase, deleteAppointmentController };
