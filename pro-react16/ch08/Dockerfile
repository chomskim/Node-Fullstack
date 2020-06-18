FROM node:12.18.0

RUN mkdir -p /usr/src/ch08

COPY build /usr/src/ch08/build

COPY authMiddleware.js /usr/src/ch08/
COPY productionData.json /usr/src/ch08/
COPY server.js /usr/src/ch08/
COPY deploy-package.json /usr/src/ch08/package.json

COPY serverQueriesSchema.graphql /usr/src/ch08/
COPY serverQueriesResolver.js /usr/src/ch08/
COPY serverMutationsSchema.graphql /usr/src/ch08/
COPY serverMutationsResolver.js /usr/src/ch08/

WORKDIR /usr/src/ch08

RUN echo 'package-lock=false' >> .npmrc

RUN npm install

EXPOSE 80

CMD ["node", "server.js", "./productionData.json", "80"]
