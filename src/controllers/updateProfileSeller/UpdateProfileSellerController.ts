import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import { UpdateProfileSellerUseCase } from './UpdateProfileSellerUseCase';

export class UpdateProfileSellerController {
	constructor(private updateProfileSellerUseCase: UpdateProfileSellerUseCase) {}

	async handle(req: Request, res: Response) {
		const { id } = req.body;

		const profile: Buffer = req.file?.buffer ?? (await fs.readFileSync(path.resolve(__dirname, '../../assets/default.png')));

		const seller = await this.updateProfileSellerUseCase.execute({
			id,
			profile: profile.toString('base64'),
		});

		res.status(200).json({
			message: 'Foto de perfil atualizada com sucesso!',
			data: seller,
		});
	}
}
