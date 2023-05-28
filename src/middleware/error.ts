import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';

export function errorHandle(err: Error, req: Request, res: Response, next: NextFunction) {
	console.log(err.name);

	if (err instanceof ZodError) {
		return res.status(400).json({
			error: JSON.parse(err.message) ?? 'Erro inesperado.',
		});
	}
	if (err instanceof PrismaClientKnownRequestError) {
		console.log('Debug...');

		if (err.code === 'P2002') {
			return res.status(400).json({
				error: err.meta ?? 'Erro inesperado.',
			});
		}
	}

	return res.status(400).json({
		error: err.message ?? 'Erro inesperado.',
	});
}
