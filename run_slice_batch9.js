import { sliceVertical } from './slice_vertical.js';

const batch9Steps = [
    ['alarm_step_4', 'calculator_step_1', 'calculator_step_2'],
    ['calculator_step_3', 'calculator_step_4', 'brightness_step_1'],
    ['brightness_step_2', 'brightness_step_3', 'brightness_step_4']
];

async function run() {
    await sliceVertical('batch9_vertical_retry.png', batch9Steps);
}

run();
