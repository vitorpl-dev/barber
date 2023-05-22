import { IRepository } from '../../repository/IRepository';
import { UpdateAppointmentDTO, UpdateAppointmentSchema } from './UpdateAppointmentDTO';

export class UpdateAppointmentUseCase {
	constructor(private repository: IRepository) {}

	async execute(props: UpdateAppointmentDTO) {
		const { id, ...data } = UpdateAppointmentSchema.parse(props);

		if (data.hour) {
			const hour = String(data.hour.getHours()).padStart(2, '0');
			const minutes = String(data.hour.getMinutes()).padStart(2, '0');

			const hourExists = await this.repository.getSellerHours({
				hour: `${hour}:${minutes}`,
			});

			if (!hourExists) throw new Error('Horário não disponível!');
		}

		const appointment = await this.repository.updateAppointment({
			id: id,
			appointment: data,
		});

		if (!appointment) throw new Error('Agendamento não encontrado!');

		return appointment;
	}
}
