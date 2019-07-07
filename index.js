const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send({ hi: 'test' });
});

//Step 1 Heroku: dynamic port binding
const PORT = process.env.PORT || 5000;
app.listen(PORT);
