import { z } from 'zod';

export const AddHourSellerSchema = z.object({
	id: z.string().uuid(),
	hour: z.string().regex(/^(?:[01]\d|2[0-3]):[0-5]\d$/),
});

export type AddHourSellerDTO = z.infer<typeof AddHourSellerSchema>;
