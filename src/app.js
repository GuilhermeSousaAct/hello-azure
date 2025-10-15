const express = require("express");

const app = express();

app.get('/', (req, res) => {
	const { name } = req.query;

	if (!name) return res.status(200).json({ message: `Hello ${name}` });

	return res.status(200).json({ message: 'Hello World!' });
});

app.listen(3000, () => console.log('server is running'));
