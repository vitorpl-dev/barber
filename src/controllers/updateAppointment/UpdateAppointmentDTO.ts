import { z } from 'zod';

export const UpdateAppointmentSchema = z.object({
	id: z.string().uuid(),
	name: z.string().optional(),
	phone: z
		.string()
		.regex(/^(?:(?:\+|00)55\s?)?(?:(?:\([1-9]{2}\)|[1-9]{2})\s?)?(?:9[1-9]|[2-9])\d{3}\-\d{4}$/)
		.optional(),
	hour: z.date().optional(),
});

export type UpdateAppointmentDTO = z.infer<typeof UpdateAppointmentSchema>;
