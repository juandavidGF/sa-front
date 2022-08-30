const axios = require('axios').default;

const uri = http://3.234.151.75:5555/predict?msg=

export default async function handler(req, res) {
	if (req.method === 'GET') {
		try {
			// const response = await axios.get(uri);
			res.status(200).json(req.body);
		} catch (error) {
			console.log(e);
			res.status(500).json(e);
		}
	}
}