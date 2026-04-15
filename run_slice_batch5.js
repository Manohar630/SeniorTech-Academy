import { sliceVertical } from './slice_vertical.js';

const batch5Steps = [
    ['video_step_4', 'gallery_step_1', 'gallery_step_2'],
    ['gallery_step_3', 'gallery_step_4', 'whatsapp_step_1'],
    ['whatsapp_step_2', 'whatsapp_step_3', 'whatsapp_step_4']
];

async function run() {
    await sliceVertical('batch5_vertical.png', batch5Steps);
}

run();
