import { sliceVertical } from './slice_vertical.js';

const batch4Steps = [
    ['publicwifi_step_3', 'publicwifi_step_4', 'camera_step_1'],
    ['camera_step_2', 'camera_step_3', 'camera_step_4'],
    ['video_step_1', 'video_step_2', 'video_step_3']
];

async function run() {
    await sliceVertical('batch4_vertical.png', batch4Steps);
}

run();
