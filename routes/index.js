const router = require('express').Router();
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid')

const apiRouter = require('./apiRoutes');
const htmlRouter = require('./htmlRoutes');

router.use('/api', apiRouter);
router.use('/', htmlRouter)

module.exports = router;