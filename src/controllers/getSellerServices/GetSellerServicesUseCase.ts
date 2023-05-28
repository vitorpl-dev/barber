import { IRepository } from '../../repository/IRepository';

export class GetSellerServicesUseCase {
	constructor(private repository: IRepository) {}

	async execute() {
		const services = await this.repository.getAllServices();

		if (!services) throw new Error('Nenhum serviço cadastrado!');

		return services;
	}
}
