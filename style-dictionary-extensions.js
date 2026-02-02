import StyleDictionary from 'style-dictionary';

export function registerExtensions() {

    StyleDictionary.registerTransform({
        name: 'name/no-colour-prefix',
        type: 'name',
        transform: token => {
            // Remove 'colour' prefix
            const nameWithoutPrefix = token.name
                .replace(/^colour/, '')
            // Lowercase the first character
            return (nameWithoutPrefix.charAt(0).toLowerCase() + nameWithoutPrefix.slice(1))
                // Then remove unecessary duplication within the name
                .replace(/^backgroundsBackground/, 'background')
                .replace(/^fillFill/, 'fill')
                .replace(/^fillFunctionalFill/, 'fill')
                .replace(/^iconsFunctionalIcons/, 'icon')
                .replace(/^iconsIcons/, 'icon')
                .replace(/^icons/, 'icon')
                .replace(/^strokeStroke/, 'stroke')
                .replace(/^textText/, 'text')
                .replace(/^textFunctionalText/, 'text')
                .replace(/^fillSupporting.Fill/, 'fillSupporting')
                .replace(/^textSupporting.Text/, 'textSupporting');
        },
    });


    StyleDictionary.registerTransform({
        name: 'value/font_constants',
        type: 'value',
        transform: token => {
            // Replace hyphen with underscore
            const inValue = `${token.$value}`
                .replace(/-/, '_')
            return `ThemeFontConstants.${inValue}`
        },
    });

    StyleDictionary.registerTransform({
        name: 'name/type_double',
        type: 'name',
        transform: token => {
            // Add 'double' type
            const inName = token.name
            return `double ${inName}`
        },
    });
}