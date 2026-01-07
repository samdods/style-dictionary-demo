
export const Light = {
    source: ['tokens/primitives.json', 'tokens/semantics.json'],
    platforms: {
        css: {
            transformGroup: 'css',
            buildPath: 'build/css/light/',
            files: [
                {
                    destination: 'vars.css',
                    format: 'css/variables',
                    filter: token => token.path[0] !== 'primitives'
                }
            ]
        }
    }
};

export const Dark = {
    source: ['tokens/primitives.json', 'tokens/semantics-dark.json'],
    platforms: {
        css: {
            transformGroup: 'css',
            buildPath: 'build/css/dark/',
            files: [
                {
                    destination: 'vars.css',
                    format: 'css/variables',
                    filter: token => token.path[0] !== 'primitives'
                }
            ]
        }
    }
};