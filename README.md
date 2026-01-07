# Demoing Style Dictionary

Uses https://github.com/style-dictionary/style-dictionary to convert from JSON to CSS.

The JSON format of the design tokens is that recognised by [W3C](https://www.w3.org/)'s [Design Token Community Group](https://www.w3.org/community/design-tokens/) (DTCG), whose goal is to “provide standards upon which products and design tools can rely for sharing stylistic pieces of a design system at scale”.

## Pre-requisites

You have `node` installed. Get it [here](https://nodejs.org/en/download).

## Using the Demo

1. Clone the repo.
2. Run the command `npm install`
3. Run `npm run build`

You'll find the CSS output written `build/css/vars.css`.

You can play around with the demo by replacing the content of the following files:

tokens/
├─ primitives.json
├─ semantics.json
└─ semantics-dark.json

The JSON can be exported from Figma in [DTCG](https://www.w3.org/community/design-tokens/) standard format using the [Prism Token Exporter - W3C Token JSON](https://www.figma.com/community/plugin/1479197616943612145/prism-token-exporter-w3c-token-json).

(The build script assumes all primitives are namespaced under `primitives`, such as `primitives.color.gray.100`. If primitives are namespaced differently in your Figma designs, the build script must be updated accordingly.)

Style Dictionary provides an [online tool](https://styledictionary.com) to convert from JSON or a ZIP of tokens into DTCG format.
