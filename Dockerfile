# This stage installs our modules
FROM mhart/alpine-node:14.14.0
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3000
CMD ["node", "./lib/index.js"]
