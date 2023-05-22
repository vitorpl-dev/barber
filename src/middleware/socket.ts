import { Socket } from 'socket.io';
import { socketProvider } from '../handler/socket';

export async function onSocket(client: Socket) {
	await socketProvider.setSocket(client);

	client.on('disconnect', async () => {
		await socketProvider.setSocket(undefined);
	});
}
