import fs from 'fs';
import path from 'path';
import StyleDictionary from 'style-dictionary';
import { Light, Dark } from './style-dictionary.config.js';

const sdLight = new StyleDictionary(Light);
const sdDark = new StyleDictionary(Dark);

// Build both themes
await sdLight.buildAllPlatforms()
await sdDark.buildAllPlatforms()

// Merge
const lightPath = 'build/css/light/vars.css';
const darkPath = 'build/css/dark/vars.css';
const outputPath = 'build/css/vars.css';

const lightCSS = fs.readFileSync(lightPath, 'utf8');

// Replace :root with [data-theme="dark"]
const darkCSS = fs
    .readFileSync(darkPath, 'utf8')
    .replace(':root', '[data-theme="dark"]');

const merged = `${lightCSS}\n\n${darkCSS}`;

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, merged);
