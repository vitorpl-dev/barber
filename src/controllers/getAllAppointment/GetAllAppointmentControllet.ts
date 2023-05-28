import { Request, Response } from 'express';
import { GetAllAppointmentUseCase } from './GetAllAppointmentUseCase';

export class GetAllAppointmentController {
	constructor(private getAllAppointmentUseCase: GetAllAppointmentUseCase) {}

	async handle(req: Request, res: Response) {
		const appointments = await this.getAllAppointmentUseCase.execute();

		res.status(200).json({
			message: 'Todos os agendamentos resgatados com sucesso',
			data: appointments,
		});
	}
}
