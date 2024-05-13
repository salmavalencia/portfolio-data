module.exports = ({ env }) => ({
    app: {
      keys: env.array('APP_KEYS'),
    },
    url: env('URL'),
    proxy: true
  });