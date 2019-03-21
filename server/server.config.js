module.exports = {

  // serverRootDir is the starting point in the file resolution process
  // serverRootDir: 'your/absolute/path/to/server/root/dir', // left default, i.e. CWD

  // siteRootDir relative to serverRootDir
  // siteRootDir: 'your/relative/path/to/site/files', // left default, i.e. 'dist'

  // view, if defined, must be an object with 'engine' and/or view 'dir' specifications. The 'dir' is relative to the serverRootDir.
  view: {
    engine: 'pug',
    dir: 'server/views'
  },

  // 'noHelmet' property can be set to true to get rid of the cli questions about the 'helmet' package
  noHelmet: true, // comment out" this line to see how "the encouragement to use helmet" works ;)

  // available values for middlewares installed by the server are:
  // ['helmet', 'cookies', 'session', 'json', 'urlencoded', 'multipart']
  serverMiddlewares: [
    // 'helmet',
    {
      name: 'cookies',
      options: 'Shh, its a secret!'
    },
    {
      name: 'session',
      options: {
        secret: 'Shh, its a secret!',
        resave: false,
        saveUninitialized: false,
        // "httpOnly: false" is set only to enable you to see the session key in your browser; not recommended in production
        cookie: { httpOnly: false }
      }
    },
    'json',
    {
      name: 'urlencoded',
      options: { extended: false } // just to show option handling
    },
    'multipart'
  ],

  // middlewares / routers to be used prior to the served dynamic and static files
  siteMiddlewaresDir: './server/middlewares',
  siteMiddlewares: [
    {
      routePaths: ['/cookies/:cmd/:name/:value', '/cookies/:cmd/:name', '/cookies/:cmd', '/cookies'],
      middleware: 'cookies-test.js'
    },
    {
      routePaths: '/session',
      middleware: 'session-test.js'
    },
    {
      routePaths: '/form/:type',
      middleware: 'form-test.js'
    }
  ],

  // dedicated files to be served for specified paths
  serveDynamicFiles: [
    {
      routePaths: ['/'],
      fileName: 'index.html'
    },
    {
      routePaths: ['/dyn1', '/dyn2'],
      fileName: 'dynamic1.html'
    },
    {
      routePaths: ['/d1', '/d2'],
      fileName: 'dynamic2.html'
    }
  ],

  // static files to be served from defined root directories with static route paths
  serveStaticFiles: {
    routePaths: '/static', // optional, only if you need url prefix(es) for static resources
    dir: 'dist' // mandatory
    // options: {} // optional, when you want some specific 'serve-static' configuration
  },

  // wrong request handler
  wrongRequestHandler: 'server/middlewares/wrong-request.js'

  // server port to be used
  // port: yourPreferredPort, // here left default, i.e. 3000
}
