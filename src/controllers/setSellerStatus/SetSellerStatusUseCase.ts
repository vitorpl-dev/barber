import { IRepository } from '../../repository/IRepository';
import { SetSellerStatusDTO, SetSellerStatusSchema } from './SetSellerStatusDTO';

export class SetSellerStatusUseCase {
	constructor(private repository: IRepository) {}

	async execute(props: SetSellerStatusDTO) {
		const data = SetSellerStatusSchema.parse(props);

		const seller = await this.repository.setSellerStatus(data);

		if (!seller) throw new Error('Vendedor não encontrado!');

		return seller;
	}
}
