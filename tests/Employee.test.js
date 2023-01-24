const Employee = require("../src/Employee");

describe('Employee', () => {
    describe("getName", () => {
        it("Should return the Employee name entered", () => {
            const ename = "John"

            const result = new Employee(ename).getName();
            expect(result).toEqual(ename);
        })
    })
});