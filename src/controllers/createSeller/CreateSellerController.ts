import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import { CreateSellerUseCase } from './CreateSellerUseCase';

export class CreateSellerController {
	constructor(private createSellerUseCase: CreateSellerUseCase) {}

	async handle(req: Request, res: Response) {
		const { name, phone, lat, long, hours, services } = req.body;

		const profile: Buffer = await fs.readFileSync(path.resolve(__dirname, '../../assets/default.png'));

		const seller = await this.createSellerUseCase.execute({
			seller: {
				name,
				phone,
				lat,
				long,
				profile: profile.toString('base64'),
			},
			hours,
			services,
		});

		res.status(201).json({
			message: 'Vendedor criado com sucesso!',
			data: seller,
		});
	}
}
