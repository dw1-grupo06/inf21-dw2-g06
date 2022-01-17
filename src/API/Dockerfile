FROM node:17
ENV NODE_ENV=production
WORKDIR /app
COPY . .
RUN npm install -g npm@8.3.1
RUN npm i -g @loopback/cli
RUN npm install --production -silent
RUN chown -R node /app
EXPOSE 3000
USER node
CMD ["npm", "start"]