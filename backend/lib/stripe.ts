import Stripe from "stripe";
import { accessEnv } from "./accessEnv";

const stripeConfig = new Stripe(accessEnv("STRIPE_SECRET", "stripe secret key"), {
  apiVersion: "2020-08-27",
});

export default stripeConfig;
