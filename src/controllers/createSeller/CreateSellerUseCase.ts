import { IRepository } from '../../repository/IRepository';
import { CreateSellerDTO, CreateSellerSchema } from './CreateSellerDTO';

export class CreateSellerUseCase {
	constructor(private repository: IRepository) {}

	async execute(props: CreateSellerDTO) {
		const data = CreateSellerSchema.parse(props);

		const seller = await this.repository.createSeller({
			seller: data.seller,
			services: data.services,
			hours: data.hours,
		});

		if (!seller) throw new Error('Não foi possivel criar o vendedor');

		return seller;
	}
}
