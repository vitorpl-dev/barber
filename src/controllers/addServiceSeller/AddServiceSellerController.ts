import { Request, Response } from 'express';
import { AddServiceSellerUseCase } from './AddServiceSellerUseCase';

export class AddServiceSellerController {
	constructor(private addServiceSellerUseCase: AddServiceSellerUseCase) {}

	async handle(req: Request, res: Response) {
		const { id, name, description, value } = req.body;

		const seller = await this.addServiceSellerUseCase.execute({
			id,
			name,
			description,
			value,
		});

		res.status(200).json({
			message: 'Serviço adicionado com sucesso!',
			data: seller,
		});
	}
}
