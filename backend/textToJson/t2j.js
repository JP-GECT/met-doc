const OpenAI = require("openai")

const addPromptToText = (text) => {
    const query = `This is a speech to text format of a virtual meeting.  Convert the text into a json format of the following manner.
an array of text called tasks that contains various tasks to be done.
an array of text named issues that include the issues faced.
A text block that contains the summary.
A array of text called assigned that contains each individual and his assigned task and the constraints on that task and time estimate.
A array of text named scope that contains the projected starting and ending date.
a variable that give estimated cost.
A text variable that contains the risks
make sure the result is given in json format
The json results must be clear and no need for unwanted adjectives`

    const prompt = text + " " + query;
    return prompt




}

const text2json = async (text) => {
    try{
        const prompt = addPromptToText(text)
        const openai = new OpenAI({
            apiKey : process.env.OPENAI_API_KEY
        });
        const response = await openai.completions.create({
            model: 'gpt-3.5-turbo-instruct',
            prompt : prompt,
            temperature: 0,
            max_tokens: 500
        });
        console.log(response)
        return response 
    }
    catch (error) {
        console.error('Error sending message:', error)
    }
}

module.exports = text2json;
