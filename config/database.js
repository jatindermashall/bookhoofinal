module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "strapi-mongoose",
      settings: {
        client: "mongo",
        host: env(
          "DATABASE_HOST",
          "bpvzm7zjkfyqslq-mongodb.services.clever-cloud.com"
        ),
        port: env.int("DATABASE_PORT", 27017),
        database: env("DATABASE_NAME", "bpvzm7zjkfyqslq"),
        username: env("DATABASE_USERNAME", "u0hpg0tqe91swgpznvpv"),
        password: env("DATABASE_PASSWORD", "83gXcMOKwzulsRqVHNkP"),
        ssl: env.bool("DATABASE_SSL", false),
      },
      options: {
        authenticationDatabase: "bpvzm7zjkfyqslq",
        ssl: false,
      },
    },
  },
});
