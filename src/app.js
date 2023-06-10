import appFastify from "./infrastructure/API/fastify/routePost.js";
import dbConnector from "./infrastructure/mongoDb/config/connection.js";
import 'dotenv/config';

dbConnector();

appFastify.listen({port: process.env.PORT || 3000}, (err, address) => {
  if (err) {
    appFastify.log.error(err);
    process.exit(1);
  }
  appFastify.log.info(`server listening on ${address}`);
})