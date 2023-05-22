import { Request, Response } from 'express';
import { UpdateAppointmentUseCase } from './UpdateAppointmentUseCase';

export class UpdateAppointmentController {
	constructor(private updateAppointmentUseCase: UpdateAppointmentUseCase) {}

	async handle(req: Request, res: Response) {
		const { id, name, phone, hour } = req.body;

		const appointment = await this.updateAppointmentUseCase.execute({
			id,
			name,
			phone,
			hour: new Date(hour),
		});

		res.status(200).json({
			message: 'Agendamento atualizado com sucesso!',
			data: appointment,
		});
	}
}
