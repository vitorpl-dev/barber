import { socketProvider } from '../../handler/socket';
import { IRepository } from '../../repository/IRepository';
import { CreateAppointmentDTO, CreateAppointmentSchema } from './CreateAppointmentDTO';

export class CreateAppointmentUseCase {
	constructor(private repository: IRepository) {}

	async execute(props: CreateAppointmentDTO) {
		const data = CreateAppointmentSchema.parse(props);

		const services = await this.repository.getServicesByIds({
			ids: data.services,
		});

		if (!services) throw new Error('Nenhum serviço encontrado!');

		const hour = String(data.hour.getHours()).padStart(2, '0');
		const minutes = String(data.hour.getMinutes()).padStart(2, '0');

		const hourExists = await this.repository.getSellerHours({
			hour: `${hour}:${minutes}`,
		});

		if (!hourExists) throw new Error('Horário não disponível!');

		const appointment = await this.repository.createAppointment({
			appointment: {
				name: data.name,
				phone: data.phone,
				hour: data.hour,
			},
			services: services,
		});

		if (!appointment) throw new Error('Erro ao criar o agendamento!');

		await socketProvider.sendEvent({
			from: 'notification',
			data: {
				title: `Novo agendamento do cliente ${data.name}`,
				description: `${data.name} marcou um horário para ${hour}:${minutes}`,
			},
		});

		return appointment;
	}
}
