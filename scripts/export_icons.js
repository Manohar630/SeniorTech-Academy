import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const sizes = [48,72,96,128,192,512];
const publicDir = path.resolve(process.cwd(), 'public');
const svgPath = path.join(publicDir, 'logo.svg');

if (!fs.existsSync(svgPath)) {
  console.error('logo.svg not found at', svgPath);
  process.exit(1);
}

async function run(){
  for (const s of sizes) {
    const out = path.join(publicDir, `logo-${s}.png`);
    await sharp(svgPath).resize(s, s).png().toFile(out);
    console.log('Wrote', out);
  }
  // favicon 64
  const favOut = path.join(publicDir, 'favicon-64.png');
  await sharp(svgPath).resize(64,64).png().toFile(favOut);
  console.log('Wrote', favOut);
}

run().catch(e=>{console.error(e); process.exit(1);});
