import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';

const items = [
  {
    name: 'inhalants',
    prompt: 'Minimalist illustration of a spray paint can with colorful fumes coming out, clean modern flat design style, white background, centered, professional medical education artwork, no text, subtle shadow'
  },
  {
    name: 'withdrawal',
    prompt: 'Minimalist illustration of a brain with visible cracks and imbalance, showing withdrawal concept, clean modern flat design style, white background, centered, professional medical education artwork, no text'
  }
];

async function main() {
  const zai = await ZAI.create();
  for (const item of items) {
    try {
      console.log(`Generating ${item.name}...`);
      const res = await zai.images.generations.create({ prompt: item.prompt, size: '1024x1024' });
      const buf = Buffer.from(res.data[0].base64, 'base64');
      fs.writeFileSync(`/home/z/my-project/public/artwork/${item.name}.png`, buf);
      console.log(`  OK ${item.name}.png (${buf.length} bytes)`);
    } catch (e) {
      console.error(`  FAIL ${item.name}: ${e.message}`);
    }
  }
  console.log('Done!');
}
main();
