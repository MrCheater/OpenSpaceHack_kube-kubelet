# This stage installs our modules
FROM mhart/alpine-node:14.14.0

COPY . .
RUN npm install && npm run prepare
EXPOSE 8080
CMD ["node", "./lib/index.js"]
