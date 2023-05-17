import { Appointment, AvailableHour, Seller, Service } from '@prisma/client';

export interface ICreateSeller {
	seller: Omit<Seller, 'id' | 'createdAt' | 'status'>;
	services: Omit<Service, 'id' | 'createdAt'>[];
	hours: Omit<AvailableHour, 'id' | 'createdAt'>[];
}

export interface ICreateAppointment {
	appointment: Omit<Appointment, 'id' | 'createdAt'>;
	services: string[];
}

export interface IUpdateSeller {
	id: string;
	seller: Partial<Seller>;
}

export interface IUpdateAppointment {
	id: string;
	appointment: Partial<Appointment>;
}

export interface IGetAppointmentBetweenDate {
	initial: Date;
	final: Date;
}

export interface IAddSellerHours {
	id: string;
	hour: string;
}

export interface IRepository {
	createSeller(props: ICreateSeller): Promise<Seller | null>;
	createAppointment(props: ICreateAppointment): Promise<Appointment | null>;

	updateSeller(props: IUpdateSeller): Promise<Seller | null>;
	updateAppointment(props: IUpdateAppointment): Promise<Appointment | null>;

	getAllAppointments(): Promise<Appointment[] | null>;
	getAppointmentsBetweenDate(props: IGetAppointmentBetweenDate): Promise<Appointment[] | null>;

	addSellerHours(props: IAddSellerHours): Promise<Seller | null>;
}
