import express from 'express';
import register from 'ignore-styles';
import config from './config/serverConfig';

register(['.css']);
const app = express();
app.use(express.static('public'));

app.set('view engine', 'ejs');


app.use('/', (req, res) => {
  res.render('index');
});

app.listen(config.port, function listenHandler() {
  console.info(`Running on ${config.port}...`);
});
