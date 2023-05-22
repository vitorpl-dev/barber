import { Request, Response } from 'express';
import { DeleteAppointmentUseCase } from './DeleteAppointmentUseCase';

export class DeleteAppointmentController {
	constructor(private deleteAppointmentUseCase: DeleteAppointmentUseCase) {}

	async handle(req: Request, res: Response) {
		const { id } = req.body;

		await this.deleteAppointmentUseCase.execute(id);

		res.status(200).json({
			message: 'Agendamento deletado com sucesso!',
		});
	}
}
