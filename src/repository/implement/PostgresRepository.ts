import { Appointment, Seller } from '@prisma/client';
import { prisma } from '../../database/client';
import { IAddSellerHours, ICreateAppointment, ICreateSeller, IGetAppointmentBetweenDate, IRepository, IUpdateAppointment, IUpdateSeller } from '../IRepository';

export class PostgresRepository implements IRepository {
	async createSeller(props: ICreateSeller): Promise<Seller | null> {
		const seller = await prisma.seller.create({
			data: {
				name: props.seller.name,
				phone: props.seller.phone,
				lat: props.seller.lat,
				long: props.seller.long,
				services: {
					createMany: {
						data: props.services,
					},
				},
				hours: {
					createMany: {
						data: props.hours,
					},
				},
			},
			include: {
				services: true,
				hours: true,
			},
		});

		return seller;
	}

	async createAppointment(props: ICreateAppointment): Promise<Appointment | null> {
		const appointment = await prisma.appointment.create({
			data: {
				name: props.appointment.name,
				phone: props.appointment.phone,
				hour: props.appointment.hour,
				services: props.services,
			},
		});

		return appointment;
	}

	async updateSeller(props: IUpdateSeller): Promise<Seller | null> {
		const seller = await prisma.seller.update({
			where: {
				id: props.id,
			},
			data: props.seller,
			include: {
				services: true,
				hours: true,
			},
		});

		return seller;
	}

	async updateAppointment(props: IUpdateAppointment): Promise<Appointment | null> {
		const appointment = await prisma.appointment.update({
			where: {
				id: props.id,
			},
			data: props.appointment,
		});

		return appointment;
	}

	async getAppointmentsBetweenDate(props: IGetAppointmentBetweenDate): Promise<Appointment[] | null> {
		const appointments = await prisma.appointment.findMany({
			where: {
				hour: {
					gte: props.initial,
					lt: props.final,
				},
			},
		});

		return appointments;
	}

	async getAllAppointments(): Promise<Appointment[] | null> {
		const appointments = await prisma.appointment.findMany();

		return appointments;
	}

	async addSellerHours(props: IAddSellerHours): Promise<Seller | null> {
		const seller = await prisma.seller.update({
			where: {
				id: props.id,
			},
			data: {
				hours: {
					create: {
						hour: props.hour,
					},
				},
			},
			include: {
				services: true,
				hours: true,
			},
		});

		return seller;
	}
}
