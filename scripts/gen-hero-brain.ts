import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';

async function main() {
  console.log('Generating hero brain artwork...');
  const zai = await ZAI.create();
  
  const prompt = `Premium medical-editorial anatomical visualization of a human brain with visible cerebral arteries, elegant blood-flow vascular detail in deep crimson, a few medication capsules integrated naturally into the composition, subtle neural synapse activity, very faint molecular structures in the background, soft ivory and clinical white background with muted teal and graphite accents, high-detail realistic sophisticated style, plenty of negative space on the left side, no neon, no cyberpunk, no generic AI-tech aesthetic, looks like premium medical education platform artwork`;
  
  const res = await zai.images.generations.create({
    prompt,
    size: '1152x864'
  });
  
  const buf = Buffer.from(res.data[0].base64, 'base64');
  fs.writeFileSync('/home/z/my-project/public/artwork/hero-brain.png', buf);
  console.log(`OK saved hero-brain.png (${buf.length} bytes)`);
}

main().catch(e => console.error('ERROR:', e.message));
