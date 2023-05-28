import { z } from 'zod';

export const CreateAppointmentSchema = z.object({
	name: z.string(),
	phone: z.string().regex(/^(?:(?:\+|00)55\s?)?(?:(?:\([1-9]{2}\)|[1-9]{2})\s?)?(?:9[1-9]|[2-9])\d{3}\-\d{4}$/),
	hour: z.date().transform((date) => {
		date.setDate(date.getDate() + 1);

		return date;
	}),
	services: z.array(z.string().uuid()).min(1),
});

export type CreateAppointmentDTO = z.infer<typeof CreateAppointmentSchema>;
