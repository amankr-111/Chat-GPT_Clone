// import express from 'express';
// import cors from 'cors';
// import bodyParser from 'body-parser';
// import dotenv from 'dotenv';
// import { Configuration, OpenAIApi } from 'openai';

// const app = express();

// dotenv.config();
// app.use(cors());
// app.use(bodyParser.json());

// const openaiConfig = new Configuration({
// organization: 'org-vjGtITU72J8uw2THVvaqGuFh',
//   apiKey: process.env.API_KEY
// });

// const openai = new OpenAIApi(openaiConfig);

// app.listen(3080, () => {
//   console.log('listening on port 3080');
// });

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.post('/', async (req, res) => {
//   const { message } = req.body;
//   try {
//     const response = await openai.createCompletion({
//       model: 'text-davinci-003',
//       prompt: `${message}`,
//       max_tokens: 100,
//       temperature: 0.5
//     });
//     res.json({ message: response.data.choices[0].text });
//   } catch (e) {
//     console.log(e);
//     res.status(404).send(e);
//   }
// });
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);
const app = express();
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.status(200).send({
    message:'Hello World!',})
});

app.post('/', async (req, res) => {
  
  try {
    const prompt = req.body.prompt;
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${prompt}`,
      temperature: 0,
      max_tokens: 3000,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0,
    });
    res.status(200).send({
      bot:response.data.choices[0].text
    })
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

app.listen(3080, () => {
  console.log('listening on port 3080');
});

app.listen(5000,()=>{console.log("We areListing at port 5000 http://localhost:5000")})