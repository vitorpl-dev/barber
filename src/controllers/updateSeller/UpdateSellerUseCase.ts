import { IRepository } from '../../repository/IRepository';
import { UpdateSellerDTO, UpdateSellerSchema } from './UpdateSellerDTO';

export class UpdateSellerUseCase {
	constructor(private repository: IRepository) {}

	async execute(props: UpdateSellerDTO) {
		const { id, ...data } = UpdateSellerSchema.parse(props);

		const seller = await this.repository.updateSeller({
			id: id,
			seller: data,
		});

		if (!seller) throw new Error('Vendedor não encontrado!');

		return seller;
	}
}
