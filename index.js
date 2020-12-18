const app = require('./server/app');
const port = 8080;

app.listen(process.env.PORT || port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
