const Manager = require("../lib/Manager");

describe('Manager', () => {
    describe("getOffice", () => {
        it("Should return the Managers office number", () => {
            const office = "1A"

            const result = new Manager("John","01", "NA", office).getOffice();
            expect(result).toEqual(office);
        })
    })
});