const indexHtml = (params : any) => {
    const webpackConfig = params.webpackConfig;
    const options = params.htmlWebpackPlugin.options;
    return (
        `<!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${options.title}</title>
                <script type="text/javascript" src="${webpackConfig.output.publicPath}AppConfig.js"></script>
            </head>
            <body>
            </body>
        </html>`
    );
};

export {
    indexHtml,
    indexHtml as default
}