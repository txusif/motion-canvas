import { makeProject } from '@motion-canvas/core';

// import { humidity, wind } from './scenes';
// import audio from "../audio/voice.mp3";

// import postioning from './scenes/postioning?scene';

// import { humidity, map, thermometer, wind } from './weather-scenes';
// import weatherDataAudio from "../audio/weather-data-audio.mp3"

import { scene1, scene2, scene3 } from './training-data';
import trainingDataAudio from "../audio/taining-data-audio/training-data.mp3"

export default makeProject({
  // scenes: [humidity, wind],
  // scenes: [postioning],
  // scenes: [map, thermometer, humidity, wind],
  scenes: [scene1, scene2, scene3],
  audio: trainingDataAudio
});
