import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';

async function main() {
  console.log('Generating portrait brain artwork...');
  const zai = await ZAI.create();
  
  const prompt = `Premium medical-editorial anatomical visualization of a complete human brain, full brain visible from side lateral view, showing both cerebral hemispheres, brainstem and cerebellum, visible cerebral arteries in deep crimson, elegant blood-flow vascular detail, a few medication capsules integrated naturally near the bottom, subtle neural synapse activity, very faint molecular structures in the background, soft ivory and clinical white background with muted teal and graphite accents, high-detail realistic sophisticated style, the entire brain must be fully visible and not cropped, centered vertically, negative space at top and bottom, no neon, no cyberpunk, premium medical education platform artwork`;
  
  const res = await zai.images.generations.create({
    prompt,
    size: '768x1344'
  });
  
  const buf = Buffer.from(res.data[0].base64, 'base64');
  fs.writeFileSync('/home/z/my-project/public/artwork/hero-brain.png', buf);
  console.log(`OK saved hero-brain.png (${buf.length} bytes)`);
}

main().catch(e => console.error('ERROR:', e.message));
