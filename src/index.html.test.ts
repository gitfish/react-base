import indexHtml from "./index.html";

describe("index.html", () => {
    test("generate index html", () => {
        // create our fake params (including webpack config stuff we use and so on)
        const params = {
            webpackConfig: {
                output: {
                    publicPath: "/test/public/path/"
                }
            },
            htmlWebpackPlugin: {
                options: {
                    title: "Test"
                }
            }
        };

        const markup = indexHtml(params);

        expect(markup).toBeTruthy();
    });
});