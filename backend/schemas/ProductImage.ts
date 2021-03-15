import "dotenv/config";
import { accessEnv } from "../lib";
import { list } from "@keystone-next/keystone/schema";
import { relationship, text } from "@keystone-next/fields";
import { cloudinaryImage } from "@keystone-next/cloudinary";

export const cloudinary = {
  cloudName: accessEnv(<string>"CLOUDINARY_CLOUD_NAME"),
  apiKey: accessEnv(<string>"CLOUDINARY_KEY"),
  apiSecret: accessEnv(<string>"CLOUDINARY_SECRET"),
  folder: "nextjs-ecommerce",
};

export const ProductImage = list({
  fields: {
    image: cloudinaryImage({
      cloudinary,
      label: "Source",
    }),
    altText: text({}),
    product: relationship({ ref: "Product.photo" }),
  },
  ui: {
    listView: {
      initialColumns: ["image", "altText", "product"],
    },
  },
});
