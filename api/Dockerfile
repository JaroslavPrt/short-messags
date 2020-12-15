FROM node:14-alpine as base
ENV NODE_ENV=production
RUN apk update && apk add --no-cache tini
EXPOSE 3000
WORKDIR /usr/src/app
RUN chown -R node:node /usr/src/app
USER node
COPY --chown=node:node package.json package-lock*.json ./

FROM base as source
COPY --chown=node:node . .

FROM source as build
ENV NODE_ENV=development
RUN npm ci
RUN npm run prebuild && npm run build

FROM base as prod
ENV NODE_ENV=production
RUN npm ci --production && npm cache clean --force
COPY --from=build /usr/src/app/dist/ ./dist
# ENTRYPOINT ["tini", "--"]
# CMD ["node", "./dist/src/main.js"]