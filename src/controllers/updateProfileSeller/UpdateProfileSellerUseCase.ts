import { IRepository } from '../../repository/IRepository';
import { UpdateProfileSellerDTO, UpdateProfileSellerSchema } from './UpdateProfileSellerDTO';

export class UpdateProfileSellerUseCase {
	constructor(private repository: IRepository) {}

	async execute(props: UpdateProfileSellerDTO) {
		const data = UpdateProfileSellerSchema.parse(props);

		const seller = await this.repository.updateProfileSeller(data);

		if (!seller) throw new Error('Vendedor não encontrado!');

		return seller;
	}
}
