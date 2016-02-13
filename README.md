
# Readme


## Install

> requires Node.js > 4.0.0

```bash
npm install
cp api/config.example.json api/config.json
```

## Build client

```bash
npm install
npm run build:production

# if you changed default api port
APIPORT=7001 npm run build:production
```

Build artifacts places in `/dist`


## Run server

```bash
npm install --production    # install only server's packages
npm run server
# with port
APIPORT=7000 npm run server
```

Run server in [pm2](https://www.npmjs.com/package/pm2)

```bash
npm install --global pm2
npm start
# with port
APIPORT=7001 npm start
```


## Development

```bash
npm run watch          # one command for client and server
# change ports
APIPORT=7000 npm run watch

npm run watch:client
npm run watch:server
npm run clean          # clean directory after build
npm run build          # build client in development env
```

