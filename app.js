const express = require('express')
const es6Renderer = require('express-es6-template-engine')
const app = express()
const port = 3002
const db = require('./Model/db')
// console.log(db)

const indexRouter = require('./routes/index');
const showsRouter = require('./routes/shows');



app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');


// Routes

app.use('/', indexRouter);
app.use('/shows', showsRouter);

// End Routes

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})