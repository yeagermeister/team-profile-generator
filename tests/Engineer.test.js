const Engineer = require("../lib/Engineer")

describe('Engineer', () => {
    describe("getGithub", () => {
        it("Should return the github username of the engineer", () => {
            const github = "yeagermeister"

            const result = new Engineer("John", "02", "NA", github).getGithub();
            expect(result).toEqual(github);
        })
    })
});