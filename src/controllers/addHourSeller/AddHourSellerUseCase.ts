import { IRepository } from '../../repository/IRepository';
import { AddHourSellerDTO, AddHourSellerSchema } from './AddHourSellerDTO';

export class AddHourSellerUseCase {
	constructor(private repository: IRepository) {}

	async execute(props: AddHourSellerDTO) {
		const data = AddHourSellerSchema.parse(props);

		const seller = await this.repository.addSellerHour(data);

		if (!seller) throw new Error('Vendedor não encontrado!');

		return seller;
	}
}
