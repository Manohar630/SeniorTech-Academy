import { sliceVertical } from './slice_vertical.js';

const batch2Steps = [
    ['scam_step_1', 'scam_step_2', 'scam_step_3'],
    ['scam_step_4', 'pin_step_1', 'pin_step_2'],
    ['pin_step_3', 'pin_step_4', 'sos_step_1']
];

async function run() {
    await sliceVertical('batch2_vertical.png', batch2Steps);
}

run();
