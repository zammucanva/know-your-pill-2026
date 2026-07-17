import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';

const STYLE = "modern medical illustration, clean minimalist design, soft gradient background from white to light blue, professional healthcare aesthetic, 3D rendered style with soft shadows, centered composition, no text, high quality, detailed";

const items = [
  { name: 'cannabis', prompt: `A stylized green cannabis leaf with visible veins, ${STYLE}` },
  { name: 'barbiturate', prompt: `Several blue and white sleeping pill capsules scattered with a crescent moon symbol, ${STYLE}` },
  { name: 'inhalants', prompt: `An aerosol spray can releasing a colorful chemical vapor cloud, ${STYLE}` },
  { name: 'withdrawal', prompt: `A human brain with visible cracks and glitch effect showing neurotransmitter chaos, ${STYLE}` },
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
