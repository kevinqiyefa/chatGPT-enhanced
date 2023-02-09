import openai from './chatgpt';

const queryApi = async (prompt: string, chatId: string, model: string) => {
  const res = await openai
    .createCompletion({
      prompt,
      model,
      temperature: 0, // Higher values means the model will take more risks.
      max_tokens: 1000, // The maximum number of tokens to generate in the completion. Most models have a context length of 2048 tokens (except for the newest models, which support 4096).
      top_p: 1, // alternative to sampling with temperature, called nucleus sampling
      frequency_penalty: 0.5, // Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.
      presence_penalty: 0, // Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.
    })
    .then((res) => res.data.choices[0].text)
    .catch(
      (err) => `ChatGPT was unable to find an answer for that! (Error: ${err?.message}`
    );

  return res;
};

export default queryApi;
