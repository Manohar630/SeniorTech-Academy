import fs from 'fs';
import path from 'path';
import { createCanvas } from 'canvas';
import { LESSONS } from './src/lessons.js';

const OUTPUT_DIR = './public/images/steps';

// Ensure directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const CATEGORY_COLORS = {
    Essentials: { start: '#002D5B', end: '#1A538E', text: '#FFFFFF' },
    Safety: { start: '#B91C1C', end: '#EF4444', text: '#FFFFFF' },
    Media: { start: '#7C3AED', end: '#A78BFA', text: '#FFFFFF' },
    Internet: { start: '#0D9488', end: '#2DD4BF', text: '#FFFFFF' },
    Tools: { start: '#D97706', end: '#FBBF24', text: '#000000' }
};

async function generatePremiumPlaceholder(lesson, step, sIdx, filePath) {
    const width = 800;
    const height = 1200; // Vertical for phone mockup
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');

    const theme = CATEGORY_COLORS[lesson.category] || CATEGORY_COLORS.Essentials;

    // 1. Background Gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, theme.start);
    gradient.addColorStop(1, theme.end);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // 2. Decorative Pattern (Subtle dots)
    ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
    for (let x = 0; x < width; x += 40) {
        for (let y = 0; y < height; y += 40) {
            ctx.beginPath();
            ctx.arc(x, y, 2, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // 3. Lesson Icon (Large and centered)
    ctx.font = '200px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(lesson.icon, width / 2, height / 3);

    // 4. Step Number Badge
    const badgeX = width / 2;
    const badgeY = height / 2 + 50;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.beginPath();
    ctx.roundRect(badgeX - 100, badgeY - 40, 200, 80, 40);
    ctx.fill();
    
    ctx.fillStyle = theme.text;
    ctx.font = 'bold 40px Arial';
    ctx.fillText(`STEP ${sIdx + 1}`, badgeX, badgeY);

    // 5. Instruction Text
    ctx.font = 'bold 48px Arial';
    const words = step.text.split(' ');
    let line = '';
    let lines = [];
    const maxWidth = width - 100;

    for (let n = 0; n < words.length; n++) {
        let testLine = line + words[n] + ' ';
        let metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth && n > 0) {
            lines.push(line);
            line = words[n] + ' ';
        } else {
            line = testLine;
        }
    }
    lines.push(line);

    let y = height / 2 + 200;
    lines.forEach((l) => {
        ctx.fillText(l.trim(), width / 2, y);
        y += 60;
    });

    // 6. "Coming Soon" Label
    ctx.font = 'italic 30px Arial';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.fillText('AI Visualization Loading...', width / 2, height - 100);

    // 7. Border
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 20;
    ctx.strokeRect(10, 10, width - 20, height - 20);

    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(filePath, buffer);
    console.log(`✅ Premium Placeholder: ${filePath}`);
}

async function run() {
    console.log('🚀 Generating Premium Placeholders for 25 Lessons...');
    for (const lesson of LESSONS) {
        for (let i = 0; i < lesson.steps.length; i++) {
            const step = lesson.steps[i];
            const fileName = `lesson_${lesson.id}_step_${i + 1}.png`;
            const filePath = path.join(OUTPUT_DIR, fileName);
            await generatePremiumPlaceholder(lesson, step, i, filePath);
        }
    }
    console.log('✨ All 96 steps now have high-quality placeholders!');
}

run();
