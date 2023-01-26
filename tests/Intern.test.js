const Intern = require("../lib/Intern");

describe('School', () => {
    describe("getSchool", () => {
        it("Should return the school of the intern", () => {
            const school = "UCF"

            const result = new Intern("Pete", "03", "NA", school).getSchool();
            expect(result).toEqual(school);
        })
    })
});