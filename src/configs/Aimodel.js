// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

import {
  GoogleGenAI,
} from '@google/genai';

async function main() {
  const ai = new GoogleGenAI({
    apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
  });
  const tools = [
    {
      googleSearch: {
      }
    },
  ];
  const config = {
    thinkingConfig: {
      thinkingBudget: -1,
    },
    tools,
  };
  const model = 'gemini-2.5-pro';
  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: `Write a script to generate 30 seconds video on topic :interesting historical story along with AI imagge prompt i Realistic format for each scene and give me resut in JSON format with imagePrompt and ContextText as feild
`,
        },
      ],
    },
    {
      role: 'model',
      parts: [
        {
          text: `**Uncovering Historical Narratives**

I've begun delving into history, hunting for a compelling, overlooked story with vivid scenes. The goal is to find something easily visualized. I'm currently focused on identifying a narrative structure that lends itself to a scene-by-scene breakdown. It needs a good flow.


**Developing Scene Sequences**

I'm now zeroing in on a potential historical narrative. The focus is on a story with clear scene delineation suitable for visual storytelling, with an eye towards a scene-by-scene breakdown. I aim to create a narrative that flows naturally within a concise 30-second timeframe.


**Examining Historical Anomalies**

I've been sifting through fascinating historical oddities. Currently, I'm immersed in "The Great Emu War," grasping its context, key events, and bizarre outcome. I have details on the weaponry and strategies employed. I am also investigating the strange "Dancing Plague of 1518". These unusual historical events are proving to be rich with potential insights.


**Outlining War Scenarios**

I've outlined scenes for "The Great Emu War," drafting context text and image prompts. Leveraging initial research, I'm confident in completing the JSON formatting, foregoing further searches. The details from the search are proving to be well-suited to the requested format. I am also planning to include information about the weaponry and strategies employed in the "The Great Emu War".


`,
        },
        {
          text: `\`\`\`json
{
  "videoTitle": "The Great Emu War of 1932",
  "scenes": [
    {
      "scene": 1,
      "imagePrompt": "A realistic, wide-angle shot of a vast, sun-scorched Australian wheat field in 1932. The golden wheat is trampled and eaten in several areas. In the distance, a massive flock of hundreds of large, flightless emus are pecking at the crops. The sky is a harsh, bright blue. The overall mood is one of devastation and agricultural crisis. 1930s color photography style.",
      "ContextText": "In 1932, Western Australia faced an unusual threat. 20,000 emus, driven by drought, invaded farmlands, devastating crops and sparking a desperate plea for help. [3, 15, 17]"
    },
    {
      "scene": 2,
      "imagePrompt": "A realistic, eye-level shot of three Australian soldiers in 1930s military attire, armed with two Lewis machine guns. They are standing in the back of a rickety, open-topped truck, bouncing along a dusty track through the outback. Their expressions are a mix of determination and bewilderment. The sun is low, casting long shadows. 1930s color photography style.",
      "ContextText": "The Australian government responded with military force. Major G.P.W. Meredith led a small contingent of soldiers armed with machine guns to wage war on the feathered invaders. [3, 5, 16]"
    },
    {
      "scene": 3,
      "imagePrompt": "A realistic, action shot from a low angle, showing the emus outmaneuvering the soldiers. The emus are a blur of feathers and long legs, scattering in all directions with surprising speed and agility. The soldiers in the background are struggling to aim their heavy machine guns, their faces etched with frustration. Dust and feathers fill the air. 1930s color photography style.",
      "ContextText": "But the emus proved to be surprisingly formidable opponents. Their erratic movements and speed made them difficult targets for the machine guns. [15, 17]"
    },
    {
      "scene": 4,
      "imagePrompt": "A realistic, close-up shot of a Lewis machine gun that has jammed. A soldier is frantically trying to clear the stoppage, his hands greasy and his face showing immense frustration under the hot sun. In the background, the emus can be seen disappearing over a ridge, victorious. 1930s color photography style.",
      "ContextText": "The soldiers' equipment was no match for the resilient birds. The guns jammed at crucial moments, and the military's initial efforts were largely a failure. [17]"
    },
    {
      "scene": 5,
      "imagePrompt": "A realistic, humorous shot of a lone emu standing proudly in a wheat field, looking inquisitively at the camera. In the background, a defeated-looking soldier leans against the truck, his helmet in his hands. The scene conveys a sense of comical defeat for the military. 1930s color photography style.",
      "ContextText": "After several weeks and thousands of rounds of ammunition, the 'Great Emu War' ended in a surprising victory... for the emus. The military withdrew, leaving the farmers to find other solutions. [16, 17]"
    },
    {
      "scene": 6,
      "imagePrompt": "A realistic shot of a sturdy, high fence stretching across the Australian landscape. On one side, the wheat fields are green and thriving. On the other side, a few emus can be seen in the distance, unable to cross. The sun is setting, casting a warm glow over the scene of agricultural peace. 1930s color photography style.",
      "ContextText": "Ultimately, exclusion fences proved more effective than machine guns, bringing an end to the bizarre conflict and securing the crops. [3, 17]"
    }
  ]
}
\`\`\``,
        },
      ],
    },
    {
      role: 'user',
      parts: [
        {
          text: `INSERT_INPUT_HERE`,
        },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });
  let fileIndex = 0;
  for await (const chunk of response) {
    console.log(chunk.text);
  }
}

main();
