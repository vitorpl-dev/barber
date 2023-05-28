import { IRepository } from '../../repository/IRepository';
import { GetAvaliableHoursDTO, GetAvaliableHoursSchema } from './GetAvaliableHoursDTO';

export class GetAvaliableHoursUseCase {
	constructor(private repository: IRepository) {}

	async execute(props: GetAvaliableHoursDTO) {
		const data = GetAvaliableHoursSchema.parse(props);

		const initial = new Date();
		initial.setFullYear(data.day.getFullYear());
		initial.setMonth(data.day.getMonth());
		initial.setDate(data.day.getDate());
		initial.setHours(0, 0, 0, 0);

		const final = new Date();
		final.setFullYear(data.day.getFullYear());
		final.setMonth(data.day.getMonth());
		final.setDate(data.day.getDate());
		final.setHours(23, 59, 59, 99);

		const currentTime = new Date();
		currentTime.setDate(currentTime.getDate());
		currentTime.setHours(currentTime.getHours() - 3);

		const hours = await this.repository.getAllAvaliableHours();

		if (!hours) throw new Error('Nenhum horário padrão cadastrado!');

		const appointments = await this.repository.getAppointmentsBetweenDate({
			initial,
			final,
		});

		const avaliableHours = hours.filter((hour) => {
			if (data.day <= currentTime) {
				const [currentHour, currentMinutes] = hour.hour.split(':');
				const compareHour = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate(), parseInt(currentHour), parseInt(currentMinutes));
				return compareHour > currentTime;
			}

			return !appointments?.some((appointment) => {
				const currentHour = appointment.hour.getHours().toString().padStart(2, '0');
				const currentMinutes = appointment.hour.getMinutes().toString().padStart(2, '0');
				const formattedAppointmentHour = `${currentHour}:${currentMinutes}`;

				return hour.hour === formattedAppointmentHour;
			});
		});

		return avaliableHours;
	}
}
