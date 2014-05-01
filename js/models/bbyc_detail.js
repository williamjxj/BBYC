var app = app || {};

(function() {
    'use strict';

    app.bbyc_detail_model = Backbone.Model.extend({

        defaults: {
            sku: '',
            thumbnailImage: '',
            name: '',
            salePrice: '',
            shortDescription: ''
        },

        initialize: function(opts) {
            this.sku = opts.sku;
            this.urlRoot = 'http://www.bestbuy.ca/api/v2/json/';
            this.fetch({
                success: function(data) {
                    var $img = $('img.waiting');
                    if ($img.length && $img.is(":visible")) {
                        $img.hide();
                    }
                },
                error: function(response) {
                    console.log('ERROR:', response);
                },
                reset: true
            });
        },

        url: function() {
            return  this.urlRoot + 'product/' + this.sku;
        },
        sync: function(method, model, options) {
            var params = _.extend({
                url: this.url(),
                type: 'GET',
                dataType: 'jsonp',
                crossDomain: true
            }, options);

            return $.ajax(params);
        },
        parse: function(data) {
            //console.log('[model:parse]', data, data.model);

            var detail_view = new app.bbyc_detail_view();
            this.on('change',detail_view.render, detail_view);
            return data;
        }
    });

})();