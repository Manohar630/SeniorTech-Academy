import { sliceVertical } from './slice_vertical.js';

const batch7Steps = [
    ['searching_step_2', 'searching_step_3', 'searching_step_4'],
    ['bookmark_step_1', 'bookmark_step_2', 'bookmark_step_3'],
    ['bookmark_step_4', 'email_step_1', 'email_step_2']
];

async function run() {
    await sliceVertical('batch7_vertical.png', batch7Steps);
}

run();
