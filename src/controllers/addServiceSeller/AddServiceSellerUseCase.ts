import { IRepository } from '../../repository/IRepository';
import { AddServiceSellerDTO, AddServiceSellerSchema } from './AddServiceSellerDTO';

export class AddServiceSellerUseCase {
	constructor(private repository: IRepository) {}

	async execute(props: AddServiceSellerDTO) {
		const { id, ...data } = AddServiceSellerSchema.parse(props);

		const seller = await this.repository.addSellerService({
			id,
			service: data,
		});

		if (!seller) throw new Error('Vendedor não encontrado!');

		return seller;
	}
}
