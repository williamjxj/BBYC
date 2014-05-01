var app = app || {};

(function() {
    'use strict';

    app.bbyc_product_collection = Backbone.Collection.extend({

        initialize: function(opts) {
            this.cateId = opts.cateId;
            this.urlRoot = 'http://www.bestbuy.ca/api/v2/json/';
            this.fetch({
                success: function(data) {
                    var $img = $('img.waiting');
                    if ($img.is(":visible")) {
                        $img.hide();
                    }
                },
                error: function(response) {
                    console.log('ERROR:', response);
                },
                reset: true
            });

            var products_view = new app.bbyc_products_view();
            this.on('reset',products_view.render, products_view);
        },
        url: function() {
            return  this.urlRoot + 'search?categoryid=' + this.cateId;
        },
        sync: function(method, model, options) {
            var params = _.extend({
                url: this.url(),
                type: 'GET',
                dataType: 'jsonp',
                crossDomain: true,
                beforeSend: function() {
                    $('<img/>')
                        .addClass("waiting")
                        .attr('src', "images/spinner.gif")
                        .appendTo('#main-show-list')
                        .css({'vertical-align':'middle', 'align': 'center', 'margin': 'auto'})
                        .show();
                }
            }, options);

            return $.ajax(params);
        },
        parse: function(data) {
            //console.log('[collections:parse]', data);
            return data;
        }
    });

})();