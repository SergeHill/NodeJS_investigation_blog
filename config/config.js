var config = {
    production: {},
    default: {
        database: {
            login: 'sa',
            password: 'password',
            options: {
                host: 'AKOSITV',
                port: 1433,
                dialect: 'mssql'
            }
        },
        cache: {
            shouldBeUsed: false
        }
    }
}

exports.get = function get(env) {
    return config[env] || config.default;
}