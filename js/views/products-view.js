var app = app || {};

(function ($) {
    'use strict';

    app.bbyc_products_view = Backbone.View.extend({
        el: '#main-show-list',

        initialize: function() {
          //this.listenTo(this.collection, 'change', this.render);
        },

        template: $('#show-list').html(),

        render: function(data) {
            var products = [];
            _.forEach(data.models, function(model) {
                products = model.get('products');
            });

            var ts = _.template(this.template, {products: products });
            this.$el.hide().html(ts).fadeIn(500);
            return this;
        }

    });

})(jQuery);
