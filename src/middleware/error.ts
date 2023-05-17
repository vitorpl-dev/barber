import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';

export function errorHandle(err: Error, req: Request, res: Response, next: NextFunction) {
	console.log(err.stack);

	if (err instanceof ZodError) {
		return res.status(400).json({
			error: JSON.parse(err.message) ?? 'Unexpected error',
		});
	}
	if (err instanceof PrismaClientKnownRequestError) {
		if (err.code === 'P2002') {
			return res.status(400).json({
				error: err.meta ?? 'Unexpected error',
			});
		}
	}

	return res.status(400).json({
		error: err.message ?? 'Unexpected error',
	});
}
