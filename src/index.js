const app = require('./server');
require('./database');

const routes = require('./routes/index.routes')

app.use('/api/', routes);

app.listen(app.get('PORT'), () => {
  console.log(`Server is listening http://localhost:${app.get('PORT')}/api`);
})