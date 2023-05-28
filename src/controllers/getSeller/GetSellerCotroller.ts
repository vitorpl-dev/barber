import { Request, Response } from 'express';
import { GetSellerUseCase } from './GetSellerUseCase';

export class GetSellerController {
	constructor(private getSellerUseCase: GetSellerUseCase) {}

	async handle(req: Request, res: Response) {
		const seller = await this.getSellerUseCase.execute();

		res.status(200).json({
			message: 'Vendedor resgatado com sucesso!',
			data: seller,
		});
	}
}
