import { Socket } from 'socket.io';

export interface IEvent {
	from: string;
	data: any;
}
export interface ISocket {
	setSocket(socket: Socket | undefined): Promise<void>;
	getSocket(): Promise<Socket | undefined>;
	sendEvent(event: IEvent): Promise<void>;
}
