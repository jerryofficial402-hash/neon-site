// Renders the still poster shown before/without WebGL: node tools/j3/poster.mjs
import puppeteer from 'puppeteer';
import sharp from 'sharp';
const b = await puppeteer.launch({ headless: true, args: ['--enable-unsafe-swiftshader', '--use-angle=swiftshader', '--ignore-gpu-blocklist'] });
const p = await b.newPage();
await p.setViewport({ width: 1280, height: 640, deviceScaleFactor: 1 });
await p.goto('http://localhost:4173/tools/j3/test.html?s=0', { waitUntil: 'networkidle2' });
await new Promise(r => setTimeout(r, 6000));
const el = await p.$('.nx-j3-gl canvas');
const buf = await el.screenshot({ type: 'png' });
await sharp(buf).resize(1240).webp({ quality: 72 }).toFile('images/3d/poster.webp');
await b.close(); console.log('poster ok');
