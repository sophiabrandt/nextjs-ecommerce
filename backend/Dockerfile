FROM node:14.16-alpine3.10 AS deps

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

ARG PORT=7771
ENV PORT $PORT

# Set env variables as build args
ARG CLOUDINARY_CLOUD_NAME="cloudinary"
ENV CLOUDINARY_CLOUD_NAME $CLOUDINARY_CLOUD_NAME
ARG CLOUDINARY_KEY="key"
ENV CLOUDINARY_KEY $CLOUDINARY_KEY
ARG CLOUDINARY_SECRET="secret"
ENV CLOUDINARY_SECRET $CLOUDINARY_SECRET
ARG COOKIE_SECRET="PLEASE CHANGE ME OH PLEASE CHANGE ME"
ENV COOKIE_SECRET $COOKIE_SECRET
ARG DATABASE_URL="mongodb://root:password@localhost:23086/admin"
ENV DATABASE_URL $DATABASE_URL
ARG STRIPE_SECRET="sk_test_nahhhh"
ENV STRIPE_SECRET $STRIPE_SECRET
ARG MAIL_HOST="smtp.ethereal.email"
ENV MAIL_HOST $MAIL_HOST
ARG MAIL_PORT="587"
ENV MAIL_PORT $MAIL_PORT
ARG MAIL_USER="get-one-from- http://ethereal.email"
ENV MAIL_USER $MAIL_USER
ARG MAIL_PASS="get-one-from- http://ethereal.email"
ENV MAIL_PASS $MAIL_PASS
ARG DEPLOY_PREV_URL="localhost"
ENV DEPLOY_PREV_URL $DEPLOY_PREV_URL
ARG PROD_URL="https://change-me.vercel.app"
ENV PROD_URL $PROD_URL

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Rebuild the source code only when needed
FROM node:14.16-alpine3.10 AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN yarn build

# Production image, copy all the files and run next
FROM node:14.16-alpine3.10 AS runner
WORKDIR /app

RUN addgroup -g 1001 -S nodejs
RUN adduser -S keystonejs -u 1001
USER keystonejs

COPY --from=builder --chown=keystonejs:nodejs /app/.keystone ./.keystone
COPY --from=builder --chown=keystonejs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=keystonejs:nodejs /app/package.json ./package.json

EXPOSE 7771

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
# RUN npx next telemetry disable

CMD ["yarn", "start"]
