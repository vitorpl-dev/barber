import { IRepository } from '../../repository/IRepository';

export class GetSellerUseCase {
	constructor(private repository: IRepository) {}

	async execute() {
		const seller = await this.repository.getSeller();

		if (!seller) throw new Error('Nenhum vendedor encontrado!');

		return seller[0];
	}
}
