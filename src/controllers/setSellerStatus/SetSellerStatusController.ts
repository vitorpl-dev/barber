import { Request, Response } from 'express';
import { SetSellerStatusUseCase } from './SetSellerStatusUseCase';

export class SetSellerStatusController {
	constructor(private setSellerStatusUseCase: SetSellerStatusUseCase) {}

	async handle(req: Request, res: Response) {
		const { id, status } = req.body;

		const seller = await this.setSellerStatusUseCase.execute({
			id,
			status,
		});

		res.status(200).json({
			message: 'Status alterado com sucesso!',
			data: seller,
		});
	}
}
