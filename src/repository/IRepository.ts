import { Appointment, AvailableHour, Seller, Service } from '@prisma/client';

export interface ICreateSeller {
	seller: Omit<Seller, 'id' | 'createdAt' | 'status'>;
	services: Omit<Service, 'id' | 'createdAt' | 'sellerId'>[];
	hours: Omit<AvailableHour, 'id' | 'createdAt' | 'sellerId'>[];
}

export interface ICreateAppointment {
	appointment: Omit<Appointment, 'id' | 'createdAt'>;
	services: Service[];
}

export interface IUpdateSeller {
	id: string;
	seller: Partial<Seller>;
}

export interface IUpdateProfileSeller {
	id: string;
	profile: string;
}

export interface IUpdateAppointment {
	id: string;
	appointment: Partial<Appointment>;
}

export interface IGetAppointmentBetweenDate {
	initial: Date;
	final: Date;
}

export interface IGetSeller {
	seller: Partial<Omit<Seller, 'lat' | 'long' | 'profile' | 'status' | 'createdAt'>>;
}

export interface IGetServicesByIds {
	ids: string[];
}

export interface IGetSellerHours {
	hour: string;
}

export interface IAddSellerHour {
	id: string;
	hour: string;
}

export interface IAddSellerService {
	id: string;
	service: Omit<Service, 'id' | 'createdAt' | 'sellerId'>;
}

export interface ISetSellerStatus {
	id: string;
	status: boolean;
}

export interface IDeleteAppointmentById {
	id: string;
}

export interface IRepository {
	createSeller(props: ICreateSeller): Promise<Seller | null>;
	createAppointment(props: ICreateAppointment): Promise<Appointment | null>;

	updateSeller(props: IUpdateSeller): Promise<Seller | null>;
	updateProfileSeller(props: IUpdateProfileSeller): Promise<Seller | null>;
	updateAppointment(props: IUpdateAppointment): Promise<Appointment | null>;

	getAllAppointments(): Promise<Appointment[] | null>;
	getAppointmentsBetweenDate(props: IGetAppointmentBetweenDate): Promise<Appointment[] | null>;
	getSeller(): Promise<Seller[] | null>;

	getServicesByIds(props: IGetServicesByIds): Promise<Service[] | null>;
	getSellerHours(props: IGetSellerHours): Promise<AvailableHour | null>;

	getAllAvaliableHours(): Promise<AvailableHour[] | null>;
	getAllServices(): Promise<Service[] | null>;

	addSellerHour(props: IAddSellerHour): Promise<Seller | null>;
	addSellerService(props: IAddSellerService): Promise<Seller | null>;

	setSellerStatus(props: ISetSellerStatus): Promise<Seller | null>;

	deleteAppointmentById(props: IDeleteAppointmentById): Promise<void>;
}
