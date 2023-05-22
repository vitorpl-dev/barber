import { Request, Response } from 'express';
import { AddHourSellerUseCase } from './AddHourSellerUseCase';

export class AddHourSellerController {
	constructor(private addHourSellerUseCase: AddHourSellerUseCase) {}

	async handle(req: Request, res: Response) {
		const { id, hour } = req.body;

		const seller = await this.addHourSellerUseCase.execute({
			id,
			hour,
		});

		res.status(200).json({
			message: 'Horario adicionado com sucesso!',
			data: seller,
		});
	}
}
