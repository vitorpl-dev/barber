import 'express-async-errors';

import { Request, Response, Router } from 'express';
import multer from 'multer';
import path from 'path';
import { addHourSellerController } from './controllers/addHourSeller';
import { addServiceSellerController } from './controllers/addServiceSeller';
import { createAppointmentController } from './controllers/createAppointment';
import { createSellerController } from './controllers/createSeller';
import { deleteAppointmentController } from './controllers/deleteAppointment';
import { getAllAppointmentsController } from './controllers/getAllAppointment';
import { getAvaliableHoursController } from './controllers/getAvaliableHours';
import { getSellerController } from './controllers/getSeller';
import { getSellerServicesController } from './controllers/getSellerServices';
import { setSellerStatusController } from './controllers/setSellerStatus';
import { updateAppointmentController } from './controllers/updateAppointment';
import { updateProfileSellerController } from './controllers/updateProfileSeller';
import { updateSellerController } from './controllers/updateSeller';

const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = Router();

router.get('/', (req: Request, res: Response) => {
	res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

router.get('/seller/get', (req: Request, res: Response) => {
	return getSellerController.handle(req, res);
});

router.post('/seller/create', (req: Request, res: Response) => {
	return createSellerController.handle(req, res);
});

router.post('/seller/service/add', (req: Request, res: Response) => {
	return addServiceSellerController.handle(req, res);
});

router.post('/seller/hour/add', (req: Request, res: Response) => {
	return addHourSellerController.handle(req, res);
});

router.post('/seller/status/set', (req: Request, res: Response) => {
	return setSellerStatusController.handle(req, res);
});

router.post('/seller/update', (req: Request, res: Response) => {
	return updateSellerController.handle(req, res);
});

router.post('/seller/profile/update', upload.single('profile'), (req: Request, res: Response) => {
	return updateProfileSellerController.handle(req, res);
});

router.get('/appointment/all', (req: Request, res: Response) => {
	return getAllAppointmentsController.handle(req, res);
});

router.post('/appointment/create', (req: Request, res: Response) => {
	return createAppointmentController.handle(req, res);
});

router.post('/appointment/update', (req: Request, res: Response) => {
	return updateAppointmentController.handle(req, res);
});

router.delete('/appointment/delete', (req: Request, res: Response) => {
	return deleteAppointmentController.handle(req, res);
});

router.post('/hours/avaliable', (req: Request, res: Response) => {
	return getAvaliableHoursController.handle(req, res);
});

router.get('/services', (req: Request, res: Response) => {
	return getSellerServicesController.handle(req, res);
});

export { router };
