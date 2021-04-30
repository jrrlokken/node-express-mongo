import * as express from 'express';
import * as mongoose from 'mongoose';

const app = express();
const PORT = 8080;
const url = 'mongodb://localhost:27017/test'

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
  .then(result => app.listen(PORT, () => console.log(`Server listening on port ${PORT}`)))
  .catch(error => console.error(error));
  
app.get('/', (req: express.Request, res: express.Response) => {
  res.setHeader('Content-Type', 'text/html')
  res.end('<h1>Hello, World!</h1>')
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
