import { sliceVertical } from './slice_vertical.js';

const batch10Steps = [
    ['magnifier_step_1', 'magnifier_step_2', 'magnifier_step_3'],
    ['magnifier_step_4', 'voice_step_1', 'voice_step_2'],
    ['voice_step_3', 'voice_step_4', 'call_step_1']
];

async function run() {
    await sliceVertical('batch10_vertical_retry.png', batch10Steps);
}

run();
