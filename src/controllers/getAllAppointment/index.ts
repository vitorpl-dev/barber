import { postgresRepository } from '../../handler/postgres';
import { GetAllAppointmentController } from './GetAllAppointmentControllet';
import { GetAllAppointmentUseCase } from './GetAllAppointmentUseCase';

const getAllAppointmentsUseCase = new GetAllAppointmentUseCase(postgresRepository);

const getAllAppointmentsController = new GetAllAppointmentController(getAllAppointmentsUseCase);

export { getAllAppointmentsUseCase, getAllAppointmentsController };
