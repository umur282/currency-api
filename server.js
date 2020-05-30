const express = require('express');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static('./dist/currency-app'));

app.get('/*', (req, res) => {
  res.sendFile('index.html', { root: 'dist/currency-app/'});
});

app.listen(port, () => {
	console.log(`Server is up on port ${port}.`);
});