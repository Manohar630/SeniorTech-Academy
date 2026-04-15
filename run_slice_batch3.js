import { sliceVertical } from './slice_vertical.js';

const batch3Steps = [
    ['sos_step_2', 'sos_step_3', 'sos_step_4'],
    ['findmy_step_1', 'findmy_step_2', 'findmy_step_3'],
    ['findmy_step_4', 'publicwifi_step_1', 'publicwifi_step_2']
];

async function run() {
    await sliceVertical('batch3_vertical.png', batch3Steps);
}

run();
