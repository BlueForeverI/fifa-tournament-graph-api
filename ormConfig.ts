import { ConnectionOptions } from "typeorm";

const connectionOptions: ConnectionOptions = {
  type: "mongodb",
  database: process.env.DB_NAME as string,
  synchronize: true,
  logging: true,
  entities: ["src/entities/**/*.ts"],
  host: process.env.DB_HOST as string,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USER as string,
  password: process.env.DB_PASS as string
};

export = connectionOptions;