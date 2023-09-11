(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
/*
  Traffic Simulator
  Created By: Triston Stuart

  main.js is the entry point for the file structure
*/
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const version = "0.0.1";
console.log(`Traffic Simulator (V${version}) Loading...`);
// Imports
const Renderer = __importStar(require("./renderer"));
// Get game canvas
const gameCanvas = document.getElementById("render");
// Set canvas size and add event listener for page resize
Renderer.updateCanvasSize(gameCanvas);
document.body.addEventListener("resize", function () {
    Renderer.updateCanvasSize(gameCanvas);
});
document.body.onresize = function () {
    Renderer.updateCanvasSize(gameCanvas);
};

},{"./renderer":2}],2:[function(require,module,exports){
"use strict";
// Render
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCanvasSize = void 0;
function updateCanvasSize(canvasElm) {
    canvasElm.style.width = String(document.body.clientWidth);
    canvasElm.style.height = String(document.body.clientHeight);
    canvasElm.width = document.body.clientWidth;
    canvasElm.height = document.body.clientHeight;
}
exports.updateCanvasSize = updateCanvasSize;

},{}]},{},[1]);
