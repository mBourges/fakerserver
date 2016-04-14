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
    path: '/person',
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
    path: '/company',
    handler: function (request, reply) {
        const company = {
            suffixes: faker.company.suffixes(),
            companyName: faker.company.companyName(),
            companySuffix: faker.company.companySuffix(),
            catchPhrase: faker.company.catchPhrase()
        };
        
        reply(company);
    }
});

server.route({
    method: 'GET',
    path: '/commerce',
    handler: function (request, reply) {
        const commerce = {
            color: faker.commerce.color(),
            department: faker.commerce.department(),
            productName: faker.commerce.productName(),
            price: faker.commerce.price(),
            productAdjective: faker.commerce.productAdjective(),
            productMaterial: faker.commerce.productMaterial(),
            product: faker.commerce.product()
        };
        
        reply(commerce);
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