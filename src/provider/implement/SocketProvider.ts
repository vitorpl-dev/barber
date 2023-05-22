import { Socket } from 'socket.io';
import { IEvent, ISocket } from '../ISocket';

export class SocketProvider implements ISocket {
	private socket: Socket | undefined;

	async setSocket(socket: Socket | undefined): Promise<void> {
		this.socket = socket;
	}

	async getSocket(): Promise<Socket | undefined> {
		return this.socket;
	}

	async sendEvent(event: IEvent): Promise<void> {
		this.socket?.emit(event.from, event.data);
	}
}
