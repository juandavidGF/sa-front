// import axios from 'axios';

export default async function handler(req, res) {
	if (req.method === 'POST') {
		try {
			// const response = await axios.get(uri);
			// const text = JSON.parse(req.body);
			// var response = {
			// 	"msg": "hola es un excelente dia, pero he estado tan triste, tan desolado",
			// 	"prediction": 0.2301264852285385,
			// 	"success": true
			// }
			console.log(req.body)
			res.status(200).json(req.body);
		} catch (e) {
			console.log(e);
			res.status(500).json(e);
		}
	}
}