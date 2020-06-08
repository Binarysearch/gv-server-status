import { StatusServer } from "@piros/status";

const server = new StatusServer(<any>process.env.PIROS_STATUS_SERVER_PORT);