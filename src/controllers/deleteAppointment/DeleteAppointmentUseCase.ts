import { IRepository } from '../../repository/IRepository';

export class DeleteAppointmentUseCase {
	constructor(private repository: IRepository) {}

	async execute(id: string) {
		await this.repository.deleteAppointmentById({
			id,
		});
	}
}
