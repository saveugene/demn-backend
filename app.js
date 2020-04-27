const express = require('express');
const mongoose = require('mongoose');
const config = require('config');

const app = express()
const port = config.get('port');

app.use(express.json());

app.get('/', function (req, res) {
    res.send('Hello world')
});


async function main() {
    try {
        await mongoose.connect(config.get('mongoURI'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        console.log("Database connection successful");

        app.listen(port, () => {
            console.log(`Express listening at http://localhost:${port}`);
        });

    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

main();