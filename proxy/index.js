const createProxy = require('micro-proxy')
const proxy = createProxy([{
    'pathname': '/books',
    'method': ['GET', 'POST', 'OPTIONS'],
    'dest': 'http://localhost:57202'
  },
  {
    'pathname': '/names',
    'method': ['GET', 'POST', 'OPTIONS'],
    'dest': 'http://localhost:57202'
  },
  {
    'pathname': '/database',
    'dest': 'http://localhost:27017'
  },
  {
    'pathname': '/**',
    'dest': 'http://localhost:27017'
  }
])

proxy.listen(9000, (err) => {
  if (err) {
    throw err
  }
  console.log(`> Ready on http://localhost:9000`)
})