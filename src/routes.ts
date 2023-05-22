import 'express-async-errors';

import { Request, Response, Router } from 'express';
import path from 'path';
import { createSellerController } from './controllers/createSeller';

const router = Router();

router.get('/', (req: Request, res: Response) => {
	res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

router.post('/seller/create', (req: Request, res: Response) => {
	return createSellerController.handle(req, res);
});

export { router };
