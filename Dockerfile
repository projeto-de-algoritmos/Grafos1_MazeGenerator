FROM node:14

WORKDIR app

RUN npm install -g http-serve

ADD index.html .

ADD src/ src/

CMD ["http-serve", "-p", "3000", "."]