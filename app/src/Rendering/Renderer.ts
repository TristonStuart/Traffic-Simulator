// Render

import { RenderPipeline } from "./renderPipeline";

/**
 * Pixel position can be off depending on canvas size, this will correct.
 * @param n Pixel position
 * @returns Corrected pixel position
 */
function pixelCorrect(n: number){
  return Math.round(n) + 0.5;
}

/**
 * Scale based on canvas size
 * @param n Number to scale
 * @param canvasElm Target canvas element
 * @returns Scaled number
 */
function scale(n: number, canvasElm: HTMLCanvasElement){
  return n * (Math.min(canvasElm.width, canvasElm.height) / 1000);
}

class RenderProcess{
  canvas: HTMLCanvasElement;
  pipeline: RenderPipeline;

  constructor(canvas: HTMLCanvasElement, pipeline: RenderPipeline){
    this.canvas = canvas;
    this.pipeline = pipeline;
  }

  render(){
    // Force render now
  }
}