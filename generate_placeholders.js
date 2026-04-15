import fs from 'fs';
import path from 'path';
import { createCanvas } from 'canvas';
import { LESSONS } from './src/lessons.js';

const OUTPUT_DIR = './public/images/steps';

// Ensure directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

function generatePlaceholder(text, filePath, color) {
  const width = 800;
  const height = 600;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Background
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, width, height);

  // Text setup
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 24px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  // Wrap text
  const words = text.split(' ');
  let line = '';
  let lines = [];
  const maxWidth = width - 80;

  for (let n = 0; n < words.length; n++) {
    let testLine = line + words[n] + ' ';
    let metrics = ctx.measureText(testLine);
    let testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      lines.push(line);
      line = words[n] + ' ';
    } else {
      line = testLine;
    }
  }
  lines.push(line);

  // Draw lines
  let y = height / 2 - (lines.length * 30) / 2;
  lines.forEach((line) => {
    ctx.fillText(line.trim(), width / 2, y);
    y += 40;
  });

  // Border
  ctx.strokeStyle = '#000000';
  ctx.lineWidth = 10;
  ctx.strokeRect(5, 5, width - 10, height - 10);

  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(filePath, buffer);
  console.log(`Generated: ${filePath}`);
}

const colors = [
  '#2563eb', // Blue
  '#16a34a', // Green
  '#dc2626', // Red
  '#d97706', // Orange
  '#7c3aed', // Purple
  '#0891b2', // Cyan
  '#db2777', // Pink
];

LESSONS.forEach((lesson, lIdx) => {
  const color = colors[lIdx % colors.length];
  lesson.steps.forEach((step, sIdx) => {
    const fileName = `lesson_${lesson.id}_step_${sIdx + 1}.png`;
    const filePath = path.join(OUTPUT_DIR, fileName);
    generatePlaceholder(step.prompt, filePath, color);
  });
});

console.log('All placeholders generated!');
