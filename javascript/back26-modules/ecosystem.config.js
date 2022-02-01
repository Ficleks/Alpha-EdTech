module.exports = {
    apps: [
      {
        script: 'back-end/server.js',
        cwd: 'back-end',
        name: 'Backend',
        watch: true
      },
      {
        script: 'front-end/server.js',
        cwd: 'front-end',
        name: 'Frontend',
        watch: true
      }
    ]
  }