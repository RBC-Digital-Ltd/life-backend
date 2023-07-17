import http from "node:http";
import logger from "./utils/logger";

const port = process.env.PORT ?? 4000;
const server = http.createServer();

const onError = (error: NodeJS.ErrnoException) => {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof port === "string" ? `Pipe ${port}` : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES": {
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
    }
    // eslint-disable-next-line no-fallthrough
    case "EADDRINUSE": {
      console.error(`${bind} is already in use`);
      process.exit(1);
    }
    // eslint-disable-next-line no-fallthrough
    default: {
      throw error;
    }
  }
};

const onListening = () => {
  const addr = server.address();

  if (addr === null) {
    return;
  }

  const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;

  logger.debug(`Listening on ${bind}`);
};

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);
