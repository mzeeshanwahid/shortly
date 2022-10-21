FROM node:14.20-alpine
WORKDIR /home/app
COPY package.json package-lock.json ./
RUN npm ci
COPY . ./
RUN npm run build --production
# CMD ["npm", "start"]
RUN npm install -g serve
EXPOSE 3000
# Run application
#CMD [ "npm", "start" ]
CMD serve -s build