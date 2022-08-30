// import axios from 'axios';

export default async function handler(req, res) {
	if (req.method === 'POST') {
		try {
			// const response = await axios.get(uri);
			// const text = JSON.parse(req.body);
			res.status(200).json(text);
		} catch (e) {
			console.log(e);
			res.status(500).json(e);
		}
	}
}