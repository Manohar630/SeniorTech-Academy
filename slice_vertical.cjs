const sharp = require('sharp');
const path = require('path');

async function sliceGrid(inputPath, outputDir, fileNames, gridSize) {
    const mainImage = sharp(inputPath);
    const metadata = await mainImage.metadata();
    const { width, height } = metadata;

    const cellWidth = Math.floor(width / gridSize);
    const cellHeight = Math.floor(height / gridSize);

    for (let i = 0; i < fileNames.length; i++) {
        const row = Math.floor(i / gridSize);
        const col = i % gridSize;

        await sharp(inputPath)
            .extract({
                left: col * cellWidth,
                top: row * cellHeight,
                width: cellWidth,
                height: cellHeight
            })
            .toFile(path.join(outputDir, fileNames[i]));
    }
}

// BLOCK & LOCATION 2x2
const blockInput = 'C:/Users/siras/.gemini/antigravity/brain/8967cb8f-3d8f-4ec1-85a6-eb84d4f3a21a/lesson_block_location_2x2_1776173587000_png_1776173013955.png';
const blockFiles = [
    'lesson_block_step_1.png', 'lesson_block_step_2.png', 
    'lesson_location_step_1.png', 'lesson_location_step_2.png'
];

sliceGrid(blockInput, 'public/images/steps', blockFiles, 2)
    .then(() => console.log('Blocking & Location Sliced Successfully!'));
