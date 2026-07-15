import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';

const molecules = [
  {
    name: 'cannabis',
    prompt: 'Chemical molecular structure diagram of THC tetrahydrocannabinol, clean black ink lines on pure white background, scientific illustration style, minimal, centered, no text, no labels, no decoration, crisp precise lines, professional chemistry textbook quality, high resolution'
  },
  {
    name: 'barbiturate',
    prompt: 'Chemical molecular structure diagram of phenobarbital barbiturate molecule, clean black ink lines on pure white background, scientific illustration style, minimal, centered, no text, no labels, no decoration, crisp precise lines, professional chemistry textbook quality, high resolution'
  },
  {
    name: 'inhalants',
    prompt: 'Chemical molecular structure diagram of toluene molecule, benzene ring with methyl group, clean black ink lines on pure white background, scientific illustration style, minimal, centered, no text, no decoration, crisp precise lines, professional chemistry textbook quality'
  },
  {
    name: 'withdrawal',
    prompt: 'Minimalist scientific illustration of brain synapse with neurotransmitter imbalance, neurons and synaptic cleft, clean black ink lines on pure white background, medical textbook style, centered, no text, professional, high resolution'
  }
];

async function main() {
  const zai = await ZAI.create();

  for (const mol of molecules) {
    try {
      console.log(`Generating ${mol.name}...`);
      const response = await zai.images.generations.create({
        prompt: mol.prompt,
        size: '1024x1024'
      });

      const base64 = response.data[0].base64;
      const buffer = Buffer.from(base64, 'base64');
      const path = `/home/z/my-project/public/artwork/${mol.name}.png`;
      fs.writeFileSync(path, buffer);
      console.log(`  OK saved ${path} (${buffer.length} bytes)`);
    } catch (err) {
      console.error(`  FAILED ${mol.name}: ${err.message}`);
    }
  }
  console.log('Done!');
}

main();
