import { Request, Response } from 'express';
import { UpdateSellerUseCase } from './UpdateSellerUseCase';

export class UpdateSellerController {
	constructor(private updateSellerUseCase: UpdateSellerUseCase) {}

	async handle(req: Request, res: Response) {
		const { id, name, phone, lat, long } = req.body;

		const seller = await this.updateSellerUseCase.execute({
			id,
			name,
			phone,
			lat,
			long,
		});

		res.status(200).json({
			message: 'Informações do vendedor atualizadas com sucesso!',
			data: seller,
		});
	}
}
