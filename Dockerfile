FROM node:14.15.0-alpine3.12 AS build
WORKDIR /usr/src

COPY package*.json ./
RUN npm ci

COPY . .
ENV NODE_ENV=production
RUN npm run build

FROM node:14.15.0-alpine3.12 AS distribution
WORKDIR /usr/src
COPY --from=build /usr/src/.next ./
COPY --from=build /usr/src/public ./public
COPY --from=build /usr/src/package.json ./
RUN npm install --only=production

CMD ["npm", "start"]
