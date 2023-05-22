import { z } from 'zod';

export const SetSellerStatusSchema = z.object({
	id: z.string().uuid(),
	status: z.boolean(),
});

export type SetSellerStatusDTO = z.infer<typeof SetSellerStatusSchema>;
