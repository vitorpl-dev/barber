import { Request, Response } from 'express';
import { GetSellerServicesUseCase } from './GetSellerServicesUseCase';

export class GetSellerServicesController {
	constructor(private getSellerServicesUseCase: GetSellerServicesUseCase) {}

	async handle(req: Request, res: Response) {
		const services = await this.getSellerServicesUseCase.execute();

		res.status(200).json({
			message: 'Serviços resgatados com sucesso!',
			data: services,
		});
	}
}
