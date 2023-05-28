import { Request, Response } from 'express';
import { GetAvaliableHoursUseCase } from './GetAvaliableHoursUseCase';

export class GetAvaliableHoursController {
	constructor(private getAvaliableHoursUseCase: GetAvaliableHoursUseCase) {}

	async handle(req: Request, res: Response) {
		const { day } = req.body;

		const avaliableHours = await this.getAvaliableHoursUseCase.execute({
			day: new Date(day),
		});

		res.status(200).json({
			message: 'Horários disponíveis resgatados com sucesso!',
			data: avaliableHours,
		});
	}
}
