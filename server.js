const express = require('express');
const server = express();
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const actionRouter = require('./data/Routers/actions.js');
const projectRouter = require('./data/Routers/projects.js');



server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(morgan('dev'));

server.use('/api/actions', actionRouter);
server.use('/api/projects', projectRouter);


server.get('/', (req, res) => {
    res.send({api: "Server is doin its thaaannngg kid!!!"})
});


const port = 5000;
server.listen(port, () => console.log('API Running on port 5000'));

