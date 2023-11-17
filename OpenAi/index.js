import dotenv from "dotenv";
dotenv.config();

import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.My_api_Key
});

// async function main() {
//   const completion = await openai.chat.completions.create({
//     messages: [{ role: "system", content: "You are a helpful assistant." }],
//     model: "gpt-3.5-turbo",
//   });

//   console.log(completion.choices[0]);
// }

// main();



async function main() {
  const response = await openai.chat.completions.create({
    model: "gpt-4-vision-preview",
    messages: [
      {
        role: "user",
        content: [
          { type: "text", text: "What’s in this image?" },
          {
            type: "image_url",
            image_url:"https://wallpaperaccess.com/full/1672441.png"
          },
        ],
      },
    ],
  });
  console.log(response.choices[0]);
}
main();



//   import OpenAI from 'openai';

// const openai = new OpenAI({
//     apiKey: process.env.OPENAI_API_KEY // This is also the default, can be omitted
//   });