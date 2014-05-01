var app = app || {};

(function() {
    'use strict';

    var bbyc_category_collection = Backbone.Collection.extend({
        url: function() {
            return  this.urlRoot + 'category/Departments';
        },
        initialize: function() {
            this.urlRoot = 'http://www.bestbuy.ca/api/v2/json/';
        },
        sync: function(method, model, options) {
            var params = _.extend({
                type: 'GET',
                dataType: 'jsonp',
                url: this.url(),
                crossDomain: true
            }, options);

            return $.ajax(params);
        },
        parse: function(data) {
            //console.log('[collections:parse]', data);
            return data;
        }
    });

    app.bbyc_category_collection = new bbyc_category_collection();
})();