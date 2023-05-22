import { Appointment, AvailableHour, Seller, Service } from '@prisma/client';
import { prisma } from '../../database/client';
import { IAddSellerHour, IAddSellerService, ICreateAppointment, ICreateSeller, IDeleteAppointmentById, IGetAppointmentBetweenDate, IGetSellerHours, IGetServicesByIds, IRepository, ISetSellerStatus, IUpdateAppointment, IUpdateProfileSeller, IUpdateSeller } from '../IRepository';

export class PostgresRepository implements IRepository {
	async createSeller(props: ICreateSeller): Promise<Seller | null> {
		const seller = await prisma.seller.create({
			data: {
				name: props.seller.name,
				phone: props.seller.phone,
				lat: props.seller.lat,
				long: props.seller.long,
				profile: props.seller.profile,
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
				services: {
					connect: props.services,
				},
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

	async updateProfileSeller(props: IUpdateProfileSeller): Promise<Seller | null> {
		const seller = await prisma.seller.update({
			where: {
				id: props.id,
			},
			data: {
				profile: props.profile,
			},
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

	async getServicesByIds(props: IGetServicesByIds): Promise<Service[] | null> {
		const services = await prisma.service.findMany({
			where: {
				id: {
					in: props.ids,
				},
			},
		});

		return services;
	}

	async getSellerHours(props: IGetSellerHours): Promise<AvailableHour | null> {
		const hour = await prisma.availableHour.findFirst({
			where: {
				hour: props.hour,
			},
		});

		return hour;
	}

	async addSellerHour(props: IAddSellerHour): Promise<Seller | null> {
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

	async addSellerService(props: IAddSellerService): Promise<Seller | null> {
		const seller = await prisma.seller.update({
			where: {
				id: props.id,
			},
			data: {
				services: {
					create: props.service,
				},
			},
			include: {
				services: true,
				hours: true,
			},
		});

		return seller;
	}

	async setSellerStatus(props: ISetSellerStatus): Promise<Seller | null> {
		const seller = await prisma.seller.update({
			where: {
				id: props.id,
			},
			data: {
				status: props.status,
			},
			include: {
				services: true,
				hours: true,
			},
		});

		return seller;
	}

	async deleteAppointmentById(props: IDeleteAppointmentById): Promise<void> {
		await prisma.appointment.delete({
			where: {
				id: props.id,
			},
		});
	}
}
