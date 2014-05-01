var app = app || {};

(function() {
    'use strict';

    var bbyc_router = Backbone.Router.extend({

        routes: {
            "sku/:sku" : 'getDetailBySku',
            'cateId/:cateId':  "searchProductsByCatId",
            "search/:query":        "search",  // #search/kiwis
            "search/:query/p:page": "search"   // #search/kiwis/p7
        },

        searchProductsByCatId: function(cateId) {
            new app.bbyc_product_collection({cateId: cateId});
        },

        getDetailBySku: function(sku) {
            new app.bbyc_detail_model({sku: sku});
        },

        search: function(query, page) {
            console.log(query, page);
        }
    });

    app.bbyc_router = new bbyc_router();

    Backbone.history.start();
})();