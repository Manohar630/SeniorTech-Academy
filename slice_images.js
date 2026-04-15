import fs from 'fs';
import { createCanvas, loadImage } from 'canvas';
import path from 'path';

const IMG_PATH = './batch1.png';
const OUTPUT_DIR = './public/images/steps/';

async function slice() {
  if (!fs.existsSync(IMG_PATH)) return;

  const image = await loadImage(IMG_PATH);
  
  const COLS = 4;
  const ROWS = 4;
  
  const topBuffer = image.height * 0.08; 
  const bottomBuffer = image.height * 0.05;
  const rowBuffer = image.height * 0.05;
  
  const totalGridHeight = image.height - topBuffer - bottomBuffer - (rowBuffer * ROWS);
  const sliceHeight = totalGridHeight / ROWS;
  const sliceWidth = image.width / COLS;

  // Exact naming to match lessons.js
  const names = [
    ['call_step_1', 'call_step_2', 'call_step_3', 'call_step_4'],
    ['text_step_1', 'text_step_2', 'text_step_3', 'text_step_4'],
    ['contacts_step_1', 'contacts_step_2', 'contacts_step_3', 'contacts_step_4'],
    ['block_step_1', 'block_step_2', 'location_step_1', 'location_step_2']
  ];

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (!names[r][c]) continue;
      const canvas = createCanvas(sliceWidth, sliceHeight);
      const ctx = canvas.getContext('2d');
      const startX = c * sliceWidth;
      const startY = topBuffer + (r * (sliceHeight + rowBuffer)) + rowBuffer;
      ctx.drawImage(image, startX, startY, sliceWidth, sliceHeight, 0, 0, sliceWidth, sliceHeight);
      const fileName = `lesson_${names[r][c]}.png`;
      fs.writeFileSync(path.join(OUTPUT_DIR, fileName), canvas.toBuffer('image/png'));
      console.log(`✅ Extracted: ${fileName}`);
    }
  }
}
slice();
