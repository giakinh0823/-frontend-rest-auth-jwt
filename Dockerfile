FROM node:12.18.1
ENV NODE_ENV=production

WORKDIR /app/frontend
COPY package.json /app/frontend/
RUN npm install --production

EXPOSE 3000
CMD ["npm", "start"]


