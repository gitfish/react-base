const contains = (...values) => {
    return filename => {
        return values.some(value => {
            return filename.indexOf(value) >= 0;
        });
    };
};

const some = (...p) => {
    return filename => {
        return p.some(e => e(filename));
    };
};

const every = (...p) => {
    return filename => {
        return p.every(e => e(filename));
    };
};

const endsWith = (...extensions) => {
    return (filename) => {
        return extensions.some(ext => {
            return filename.endsWith(ext);
        });
    };
};

const isNodeModuleFile = contains("node_modules");

class GeneratorPlugin {
    _generator;
    _filename;

    constructor(options) {
        this._generator = options.generator;
        this._filename = options.filename;
    }

    apply(compiler) {
        const generator = this._generator;
        const filename = this._filename;
        compiler.plugin("emit", function(compilation, callback) {
            const generatorOptions = {
                compilation: compilation,
                webpack: compilation.getStats().toJson(),
                webpackConfig: compilation.options,
                filename: this._filename
            };
            compilation.assets[filename] = new RawSource(generator(generatorOptions));
            callback();
        });
    }
}

module.exports = {
    contains,
    some,
    every,
    endsWith,
    isNodeModuleFile,
    GeneratorPlugin
};