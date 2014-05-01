describe("Hello BBYC", function() {
    it("contains spec with an expectation", function() {
        expect(true).toBe(true);
    });
});

describe("BBYC Model Tests", function() {

    beforeEach(function() {
        this.detail = new app.bbyc_detail_model ({
            sku: '12345'
        });
    });

    it("should expose an sku attribute", function() {
        expect(this.detail.get("sku"))
            .toEqual("12345");
    });

    it("should expose an thumbnailImage attribute", function() {
        expect(this.detail.get("thumbnailImage"))
            .toEqual("");
    });
    it("should expose an name attribute", function() {
        expect(this.detail.get("name"))
            .toEqual("");
    });
    it("should expose an salePrice attribute", function() {
        expect(this.detail.get("salePrice"))
            .toEqual("");
    });
    it("should expose an shortDescription attribute", function() {
        expect(this.detail.get("shortDescription"))
            .toEqual("");
    });

});