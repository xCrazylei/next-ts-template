import { IEnv } from "models/env";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export const env: IEnv = {
  HOST: publicRuntimeConfig.env.HOST,
  HOST_NAME: publicRuntimeConfig.env.HOSTNAME,
  PORT: publicRuntimeConfig.env.PORT,
};
