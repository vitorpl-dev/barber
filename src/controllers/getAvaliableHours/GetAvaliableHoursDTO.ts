import { z } from 'zod';

export const GetAvaliableHoursSchema = z.object({
	day: z.date(),
});

export type GetAvaliableHoursDTO = z.infer<typeof GetAvaliableHoursSchema>;
