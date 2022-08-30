// import axios from 'axios';

export default async function handler(req, res) {
	if (req.method === 'POST') {
		try {
			// const response = await axios.get(uri);
			res.status(200).json(req.body);
		} catch (error) {
			console.log(e);
			res.status(500).json(e);
		}
	}
}