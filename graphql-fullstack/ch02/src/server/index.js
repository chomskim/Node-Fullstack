const express = require('express');
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');
const compress = require('compression');
const services = require('./services/index');
require('dotenv').config();

const root = path.join(__dirname, '../../');
const app = express();

if (process.env.NODE_ENV === 'production') {
  app.use(helmet());
  app.use(helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "*.amazonaws.com"],
    },
  }));
  app.use(compress());
  app.use(cors());
}
app.use(helmet.referrerPolicy({ policy: 'same-origin' }));

app.use('/', express.static(path.join(root, 'dist/client')));
app.use('/uploads', express.static(path.join(root, 'uploads')));

const serviceNames = Object.keys(services);
for (let i = 0; i < serviceNames.length; i += 1) {
  const name = serviceNames[i];
  if (name === 'graphql') {
    services[name].applyMiddleware({ app });
  } else {
    app.use(`/${name}`, services[name]);
  }
}

app.get('/', (req, res) => {
  res.sendFile(path.join(root, '/dist/client/index.html'));
});
app.listen(8000, () => console.log('Listening on port 8000!'));
