import { IRepository } from '../../repository/IRepository';

export class GetAllAppointmentUseCase {
	constructor(private repository: IRepository) {}

	async execute() {
		const appointments = await this.repository.getAllAppointments();

		if (!appointments) throw new Error('Nenhum agendamento registrado!');

		return appointments;
	}
}
