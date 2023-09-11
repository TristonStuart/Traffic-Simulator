/**
 * Resize a canvas element to fit page
 * @param canvasElm Canvas HTML Element to be sized
 */
export function updateCanvasSize(canvasElm: HTMLCanvasElement){
  canvasElm.style.width = String(document.body.clientWidth);
  canvasElm.style.height = String(document.body.clientHeight);
  canvasElm.width = document.body.clientWidth;
  canvasElm.height = document.body.clientHeight;
}