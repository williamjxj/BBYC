test( "Hello BBYC", function() {
    ok( 1 == "1", "Passed!" );
});

// in js/models/bbyc.js:
module( "BBYC Model Tests" );
test("Can be instantiated with correct default values", function() {
    // Instantiate Local Contact Backbone Model Object
    var detail = new app.bbyc_detail_model ({sku: '12345'});

    // Number of Assertions we Expect
    expect( 5 );

    // Default Attribute Value Assertions
    equal( detail.get("sku"), "12345" );
    equal( detail.get("thumbnailImage"), "" );
    equal( detail.get("name"), "" );
    equal( detail.get("salePrice"), "" );
    equal( detail.get("shortDescription"), "" );
});
