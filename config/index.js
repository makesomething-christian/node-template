import * as config from './config.dev.json';

export default {
  getServerConfig: () => config.server,
  getDbConfig: () => config.db,
};
