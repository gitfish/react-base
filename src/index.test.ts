import "./index";

describe("index", () => {
    test("index import", () => {
        return import("./index");
    });
});