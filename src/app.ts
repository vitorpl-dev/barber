import ejs from 'ejs';
import express from 'express';
import http from 'http';
import socket from 'socket.io';
import { errorHandle } from './middleware/error';
import { onSocket } from './middleware/socket';
import { router } from './routes';

const app = express();
const server = http.createServer(app);
const io = new socket.Server(server);

app.engine('html', ejs.renderFile);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);

app.use(
	express.static('public', {
		setHeaders: function (res, path, stat) {
			if (path.endsWith('.css')) {
				res.set('Content-Type', 'text/css');
			}
			if (path.endsWith('.js')) {
				res.set('Content-Type', 'application/javascript');
			}
		},
	})
);

io.on('connection', onSocket);

app.use(errorHandle);

export { server };
