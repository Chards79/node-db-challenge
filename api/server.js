const express = require('express');
const helmet = require('helmet');
const server = express();
const db = require('../data/dbConfig');

const resourcesRouter = require('../routers/resources-router');
const projectsRouter = require('../routers/projects-router');
const tasksRouter = require('../routers/tasks-router');

server.use(helmet());
server.use(express.json());
server.use('/api/routers/resources', resourcesRouter);
server.use('/api/routers/projects', projectsRouter);
server.use('/api/routers/tasks', tasksRouter);
server.use('/api/routers', db);

module.exports = server;
