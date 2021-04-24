import express, {Express} from 'express';
import bodyParser from 'body-parser';
import path from 'path';

const app: Express = express();
const PORT = 8080;

// Service client files
app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.json());

// Start Express server
app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
});
