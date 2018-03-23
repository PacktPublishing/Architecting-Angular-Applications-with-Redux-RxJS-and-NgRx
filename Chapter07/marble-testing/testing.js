const { hot, cold } = require("jasmine-marbles");

describe("marble test", () => {
  it("test marble", () => {
    var e1 = hot("----a--^--b-------c--|");
    var e2 = hot("---d-^--e---------f-----|");
    var expected = "---(be)----c-f-----|";

    expectObservable(e1.merge(e2)).toBe(expected);
  });
});
