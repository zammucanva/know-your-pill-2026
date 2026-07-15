import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';

async function main() {
  const zai = await ZAI.create();
  console.log('Generating inhalants...');
  const res = await zai.images.generations.create({
    prompt: 'Minimalist illustration of an aerosol spray paint can with colorful vapor fumes coming out, clean modern flat design style, white background, centered, no text, professional medical education artwork',
    size: '1024x1024'
  });
  const buf = Buffer.from(res.data[0].base64, 'base64');
  fs.writeFileSync('/home/z/my-project/public/artwork/inhalants.png', buf);
  console.log(`OK saved (${buf.length} bytes)`);
}
main().catch(e => console.error(e));
