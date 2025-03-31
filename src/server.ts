import app from './app';
import config from './config/config';

process.on('uncaughtException', (err: Error) => {
  console.error('UNCAUGHT EXCEPTION! SHUTTING DOWN...', { meta: err });
  process.exit(1);
});

const PORT = config.PORT || 3000;

const server = app.listen(PORT);

(() => {
  try {
    // Application Status
    console.info(`APPLICATION_STARTED`, {
      meta: {
        PORT: config.PORT,
        SERVER_URL: config.SERVER_URL
      }
    });
  } catch (error) {
    console.error(`APPLICATION_ERROR`, { meta: error });

    server.close((error) => {
      if (error) {
        console.error(`APPLICATION_ERROR`, { meta: error });
      }
      process.exit(1);
    });
  }
})();

process.on('unhandledRejection', (err: Error) => {
  console.error('UNHANDLER REJECTION! SHUTTING DOWN...', { meta: err });
  server.close(() => {
    process.exit(1);
  });
});
