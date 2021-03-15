import { createAuth } from "@keystone-next/auth";
import { config, createSchema } from "@keystone-next/keystone/schema";
import { statelessSessions, withItemData } from "@keystone-next/keystone/session";
import "dotenv/config";
import { accessEnv } from "./lib";
import { User, Product, ProductImage } from "./schemas";

const databaseURL = accessEnv(<string>"DATABASE_URL", "mongodb://localhost/keystone");
const frontendURL = accessEnv(<string>"FRONTEND_URL", "http://localhost:7777");
const sessionSecret = accessEnv(
  <string>"COOKIE_SECRET",
  "8r5a4LVRBiZtz8Uca7jfnHjll31ctXnZVIxOHWhqQLlVOWUGGc3lxVGQjFqVgD9uUboRWCDqoKbl4Zp4GOC7lFAURatavdUMucOLzi0Ps6PI9Ho0LGViDeejX99VLn0G"
);

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // How long they stay signed in?
  secret: sessionSecret,
};

const { withAuth } = createAuth({
  listKey: "User",
  identityField: "email",
  secretField: "password",
  initFirstItem: {
    fields: ["name", "email", "password"],
  },
});

export default withAuth(
  config({
    server: {
      cors: {
        origin: [frontendURL],
        credentials: true,
      },
    },
    db: {
      adapter: "mongoose",
      url: databaseURL,
      async onConnect() {
        console.log("Connected to the database!");
      },
    },
    lists: createSchema({ User, Product, ProductImage }),
    ui: {
      isAccessAllowed: ({ session }) => Boolean(session?.data),
    },
    session: withItemData(statelessSessions(sessionConfig), {
      User: `id`,
    }),
  })
);
