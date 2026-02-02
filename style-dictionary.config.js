const srcFontSizeStressTest = 'tokens/FontSizeStressTest Default.json';
const srcPrimitives = 'tokens/Primitives Mode 1.json';
const srcBrandEULight = 'tokens/Brand EU-Light.json'
const srcDeviceMobile = 'tokens/Device Mobile.json'

const transformFlutter = 'flutter'
const formatFlutter = 'flutter/class.dart'

export const LightColors = {
    source: [srcFontSizeStressTest, srcPrimitives, srcBrandEULight],
    platforms: {
        flutter: {
            transformGroup: transformFlutter,
            transforms: ['name/no-colour-prefix'],
            buildPath: 'build/dart/light/',
            files: [
                {
                    destination: 'theme_colors.dart',
                    format: formatFlutter,
                    options: { className: 'ThemeColors' },
                    filter: token => {
                        // console.log(token)
                        return token.filePath === 'tokens/Brand EU-Light.json'
                            && !token.key.includes('NOT FINAL')
                            && token.$type === 'color'
                    }
                }
            ]
        }
    }
};

export const LightFontWeight = {
    source: [srcFontSizeStressTest, srcPrimitives, srcBrandEULight],
    platforms: {
        flutter: {
            transformGroup: transformFlutter,
            transforms: ['value/font_constants'],
            buildPath: 'build/dart/light/',
            files: [
                {
                    destination: 'theme_font_weight.dart',
                    format: formatFlutter,
                    options: { className: 'ThemeFontWeight' },
                    filter: token => {
                        // console.log(token)
                        return token.filePath === 'tokens/Brand EU-Light.json'
                            && !token.key.includes('NOT FINAL')
                            && !token.key.includes('BrandString')
                            && !token.key.includes('Illustrations')
                            && token.$type === 'fontWeight'
                    }
                }
            ]
        }
    }
};
export const LightFontFamily = {
    source: [srcFontSizeStressTest, srcPrimitives, srcBrandEULight],
    platforms: {
        flutter: {
            transformGroup: transformFlutter,
            transforms: ['value/font_constants'],
            buildPath: 'build/dart/light/',
            files: [
                {
                    destination: 'theme_font_family.dart',
                    format: formatFlutter,
                    options: { className: 'ThemeFontFamily' },
                    filter: token => {
                        // console.log(token)
                        return token.filePath === 'tokens/Brand EU-Light.json'
                            && !token.key.includes('NOT FINAL')
                            && !token.key.includes('BrandString')
                            && !token.key.includes('Illustrations')
                            && token.$type === 'fontFamily'
                    }
                }
            ]
        }
    }
};

export const Dimensions = {
    source: [srcFontSizeStressTest, srcPrimitives, srcDeviceMobile],
    platforms: {
        flutter: {
            transformGroup: transformFlutter,
            transforms: ['name/type_double'],
            buildPath: 'build/dart/device/',
            files: [
                {
                    destination: 'theme_dimensions.dart',
                    format: formatFlutter,
                    options: { className: 'ThemeDimensions' },
                    filter: token => {
                        // console.log(token)
                        return token.filePath === 'tokens/Device Mobile.json'
                            && !token.key.includes('NOT FINAL')
                            && token.key !== '{String.Breakpoint}'
                    }
                }
            ]
        }
    }
};


// export const Dark = {
//     source: [srcPrimitives, 'tokens/semantics-dark.json'],
//     platforms: {
//         flutter: {
//             transformGroup: 'css',
//             buildPath: 'build/css/dark/',
//             files: [
//                 {
//                     destination: 'vars.css',
//                     format: 'css/variables',
//                     filter: token => token.path[0] !== 'primitives'
//                 }
//             ]
//         }
//     }
// };
