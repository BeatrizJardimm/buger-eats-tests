var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            wpp: '41999999999',
            address: {
                postalcode: '87303220',
                street: 'Rua Rocha Pombo',
                number: '2393',
                details: 'Casa',
                district: 'Centro',
                city_state: 'Campo Mourão/PR'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data
    }
}