import { sliceVertical } from './slice_vertical.js';

const batch8Steps = [
    ['email_step_3', 'email_step_4', 'data_step_1'],
    ['data_step_2', 'data_step_3', 'data_step_4'],
    ['alarm_step_1', 'alarm_step_2', 'alarm_step_3']
];

async function run() {
    await sliceVertical('batch8_vertical_retry.png', batch8Steps);
}

run();
