FROM node:8

WORKDIR /app

ADD . .
RUN npm install --no-optional
RUN ls
CMD ["npm", "run", "dev"]