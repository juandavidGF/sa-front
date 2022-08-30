const https = require('https');

export default async function handler(req, res) {
	if (req.method === 'POST') {
		try {
			https.request("http://3.234.151.75:5555/predict?msg=", (resp) => {
				console.log(resp)

			})
			// const response = await axios.get(uri);
			// const text = JSON.parse(req.body);
			// var response = {
			// 	"msg": "hola es un excelente dia, pero he estado tan triste, tan desolado",
			// 	"prediction": 0.2301264852285385,
			// 	"success": true
			// }
			var msj = req.body.text

			// console.log(req.body.text)
			res.status(200).json(req.body.text);
		} catch (e) {
			console.log(e);
			res.status(500).json(e);
		}
	}
}