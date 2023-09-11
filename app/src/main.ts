/*
  Traffic Simulator
  Created By: Triston Stuart

  main.js is the entry point for the file structure
*/

const version: String = "0.0.1";

console.log(`Traffic Simulator (V${version}) Loading...`);

// Imports
import * as renderUtils from "./Rendering/renderUtils";

// Get game canvas
const gameCanvas: HTMLCanvasElement = (document.getElementById("render") as HTMLCanvasElement);

// Set canvas size and add event listener for page resize
renderUtils.updateCanvasSize(gameCanvas);
document.body.onresize = function(){
  renderUtils.updateCanvasSize(gameCanvas);
};
