const Hapi = require('hapi');
const faker = require('faker');

const serverIP = process.env.OPENSHIFT_NODEJS_IP || process.env.IP;
const serverPORT = process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT;

const server = new Hapi.Server();
server.connection({
    host: serverIP,
    port: serverPORT 
});

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        const person = {
            email: faker.internet.email(),
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            findName: faker.name.findName(),
            jobTitle: faker.name.jobTitle(),
            prefix: faker.name.prefix(),
            suffix: faker.name.suffix(),
            title: faker.name.title(),
            jobDescriptor: faker.name.jobDescriptor(),
            jobArea: faker.name.jobArea(),
            jobType: faker.name.jobType()
        };
        
        reply(person);
    }
});

server.route({
    method: 'GET',
    path: '/health',
    handler: function(request, reply) {
        reply();
    }
});

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});