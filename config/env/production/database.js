const vars = process.env;

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', vars.DATABASE_HOST),
        srv: env.bool('DATABASE_SRV', false),
        database: env('DATABASE_NAME', 'serveroo'),
        username: env('DATABASE_USERNAME', vars.DATABASE_USERNAME),
        password: env('DATABASE_PASSWORD', vars.DATABASE_PASSWORD),
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
        ssl: env.bool('DATABASE_SSL', true),
      },
    },
  },
});
