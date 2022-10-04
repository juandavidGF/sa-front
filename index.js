const url = 'api/sa/predict?msg=';

async function predict() {
  var text = document.getElementById('text').value;
  if (!text) alert('debe ingresar una oración')
  const headers = {
                    'Access-Control-Allow-Headers': 'Content-Type',
                    'Access-Control-Allow-Origin':'*',
                    'Access-Control-Allow-Methods':'*'
                  }
  try {
    document.getElementById('prediction').innerText = "Processing ...";
		const response = await fetch(url+text);
    // const response = await fetch(url, {
		//     method : "POST",
		//     headers: headers,
		// 		body: JSON.stringify(text)
		// });
		// console.log("response.headers: ", response.headers);
		// console.log("response.text: ", response.text());
		const data = await response.json();
		// console.log(data)
    if (data.prediction > 0.5) {
      document.getElementById('prediction').innerText = "😄 Sentimiento Positivo: " + data.prediction.toFixed(4);
    } else {
      document.getElementById('prediction').innerText = "😔 Sentimiento Negativo: " + data.prediction.toFixed(4);
    }

    // console.log(data);
  } catch (error) {
    document.getElementById('prediction').innerText = "There was an error";
    console.log(error);
  }
}
