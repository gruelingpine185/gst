const express = require('express');
const expressLoader = require('./loaders/express');

expressLoader.init({app: express()});
