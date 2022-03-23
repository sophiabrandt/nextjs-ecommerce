import "dotenv/config";

const cache: { [key: string]: string } = {};

export const accessEnv = (key: string, defaultValue?: string): string => {
  if (cache[key]) return cache[key];

  if (!(key in process.env) || typeof process.env[key] === undefined) {
    if (defaultValue) return defaultValue;
    throw new Error(`${key} not found in process.env!`);
  }

  if (!(key in cache)) {
    cache[key] = <string>process.env[key];
  }

  return cache[key];
};
