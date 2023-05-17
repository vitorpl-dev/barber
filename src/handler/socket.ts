import { Socket } from 'socket.io';

export function onSocket(client: Socket) {
	console.log(`Client: [${client.id}] connected!`);

	client.on('add', () => {});

	client.on('send', () => {});

	client.on('disconnect', async () => {
		console.log(`Client: [${client.id}] disconnected!`);
	});
}
