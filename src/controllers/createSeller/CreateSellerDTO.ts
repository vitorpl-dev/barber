import { z } from 'zod';

export const CreateSellerSchema = z.object({
	seller: z.object({
		name: z.string(),
		phone: z.string().regex(/^(?:(?:\+|00)55\s?)?(?:(?:\([1-9]{2}\)|[1-9]{2})\s?)?(?:9[1-9]|[2-9])\d{3}\-\d{4}$/),
		lat: z.number(),
		long: z.number(),
		profile: z.string(),
	}),
	services: z.array(
		z.object({
			name: z.string(),
			description: z.string(),
			value: z.number(),
		})
	),
	hours: z.array(
		z.object({
			hour: z.string().regex(/^(?:[01]\d|2[0-3]):[0-5]\d$/),
		})
	),
});

export type CreateSellerDTO = z.infer<typeof CreateSellerSchema>;
