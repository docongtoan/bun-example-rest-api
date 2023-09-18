import { PersonController } from "../../../controllers/person";
import { describe, it, expect } from "bun:test";

describe('file index controller person',()=> {
    it('should have function get list return resolves',()=> {
        expect(PersonController.prototype.getList()).resolves;
    });

    it('should have function get row return resolves',()=> {
        expect(PersonController.prototype.getRow(12)).resolves;
    });
})