import fs from 'fs';
import path from 'path';
import StyleDictionary from 'style-dictionary';
import { LightColors, LightFontFamily, LightFontWeight, /*Dark,*/ Dimensions } from './style-dictionary.config.js';
import { registerExtensions } from './style-dictionary-extensions.js';

registerExtensions();

const verbosity = 'verbose';
const log = { verbosity }

const dimensions = new StyleDictionary({ ...Dimensions, log });
const lightColors = new StyleDictionary({ ...LightColors, log });
const lightFontFamily = new StyleDictionary({ ...LightFontFamily, log });
const lightFontWeight = new StyleDictionary({ ...LightFontWeight, log });
// const darkColors = new StyleDictionary(Dark);

await dimensions.buildAllPlatforms()
await lightColors.buildAllPlatforms()
await lightFontFamily.buildAllPlatforms()
await lightFontWeight.buildAllPlatforms()
// await darkColors.buildAllPlatforms()

// Merge
// const lightPath = 'build/css/light/vars.css';
// const darkPath = 'build/css/dark/vars.css';
// const outputPath = 'build/css/vars.css';

// const lightCSS = fs.readFileSync(lightPath, 'utf8');

// // Replace :root with [data-theme="dark"]
// const darkCSS = fs
//     .readFileSync(darkPath, 'utf8')
//     .replace(':root', '[data-theme="dark"]');

// const merged = `${lightCSS}\n\n${darkCSS}`;

// fs.mkdirSync(path.dirname(outputPath), { recursive: true });
// fs.writeFileSync(outputPath, merged);
