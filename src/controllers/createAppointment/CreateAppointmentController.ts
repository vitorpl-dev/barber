import { Request, Response } from 'express';
import { CreateAppointmentUseCase } from './CreateAppointmentUseCase';

export class CreateAppointmentController {
	constructor(private createAppointmentUseCase: CreateAppointmentUseCase) {}

	async handle(req: Request, res: Response) {
		const { name, phone, hour, services } = req.body;

		const appointment = await this.createAppointmentUseCase.execute({
			name,
			phone,
			hour: new Date(hour),
			services,
		});

		res.status(201).json({
			message: 'Agendamento criado com sucesso',
			data: appointment,
		});
	}
}
