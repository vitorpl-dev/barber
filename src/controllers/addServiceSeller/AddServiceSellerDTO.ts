import { z } from 'zod';

export const AddServiceSellerSchema = z.object({
	id: z.string().uuid(),
	name: z.string(),
	description: z.string(),
	value: z.number(),
});

export type AddServiceSellerDTO = z.infer<typeof AddServiceSellerSchema>;
