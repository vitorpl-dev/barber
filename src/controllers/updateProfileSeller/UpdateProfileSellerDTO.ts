import { z } from 'zod';

export const UpdateProfileSellerSchema = z.object({
	id: z.string().uuid(),
	profile: z.string(),
});

export type UpdateProfileSellerDTO = z.infer<typeof UpdateProfileSellerSchema>;
