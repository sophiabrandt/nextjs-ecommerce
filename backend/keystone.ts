import "dotenv/config";
import { config, createSchema } from "@keystone-next/keystone/schema";
import { accessEnv } from "./lib";

const databaseURL = accessEnv(process.env.DATABASE_URL, "mongodb://localhost/keystone");

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // How long they stay signed in?
  secret: process.env.COOKIE_SECRET,
};

export default config({
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
  },
  db: {
    adapter: "mongoose",
    url: databaseURL,
    async onConnect(keystone) {
      console.log("Connected to the database!");
    },
  },
  lists: createSchema({}),
  ui: {},
});
