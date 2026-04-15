import { sliceVertical } from './slice_vertical.js';

const batch6Steps = [
    ['edit_step_1', 'edit_step_2', 'edit_step_3'],
    ['edit_step_4', 'wifi_step_1', 'wifi_step_2'],
    ['wifi_step_3', 'wifi_step_4', 'searching_step_1']
];

async function run() {
    await sliceVertical('batch6_vertical.png', batch6Steps);
}

run();
