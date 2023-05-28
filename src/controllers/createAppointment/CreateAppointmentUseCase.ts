import { socketProvider } from '../../handler/socket';
import { IRepository } from '../../repository/IRepository';
import { CreateAppointmentDTO, CreateAppointmentSchema } from './CreateAppointmentDTO';

export class CreateAppointmentUseCase {
	constructor(private repository: IRepository) {}

	async execute(props: CreateAppointmentDTO) {
		const data = CreateAppointmentSchema.parse(props);

		const currentTime = new Date();
		currentTime.setDate(currentTime.getDate() + 1);
		currentTime.setHours(currentTime.getHours() - 3);

		if (data.hour <= currentTime) throw new Error('Horário não disponível');

		const services = await this.repository.getServicesByIds({
			ids: data.services,
		});

		if (!services) throw new Error('Nenhum serviço encontrado!');

		const hour = data.hour.toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit' });
		const date = data.hour.toLocaleDateString([], { day: '2-digit', month: '2-digit', year: '2-digit' });

		const hourExists = await this.repository.getSellerHours({
			hour,
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
				description: `${data.name} marcou um horário em ${date} às ${hour}`,
			},
		});

		return appointment;
	}
}
