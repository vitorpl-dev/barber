import { server } from './app';
import { port } from './config';

server.listen(port, () => {
	console.log(`Server running in http://localhost:${port}`);
});
