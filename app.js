const express = require('express')
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

app.get('*', (request, response) => {
	response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(PORT)