const axios=require('axios')
const express = require('express')
const app = express()
app.use(express.json())
var body = require("body-parser")
const { response } = require('express')
app.use(body.urlencoded({extended:true}))
async function getChatGPTResponse(prompt) {
  try {
    const response = await axios.post('https://api.openai.com/v1/completions', {
        prompt:prompt,
        max_tokens:2048,
        model:"text-davinci-003"
    },{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer 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`
          }
    });
    return response.data.choices[0].text;
  } catch (error) {
    console.error(error);
  }
}
app.post('/api/chatGPT2answer',async(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    const quest = req.body.prompt;
    let answer = null;
    await getChatGPTResponse(quest).then(result =>{
        answer=result;
    });
    res.send({
      answer
    }) 
})
app.listen(3000, () => {
    console.log('http://localhost:3000')
})

