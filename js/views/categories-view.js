var app = app || {};

(function ($) {
    'use strict';

    app.bbyc_categories_view = Backbone.View.extend({
        el: '#nav-show-top',

        events: {
            //'click a.category': 'searchProductsByCatId'
        },

        initialize: function() {
            //this.listenTo(app.bbyc_category_collection, 'all', this.render);
            //_.bindAll(this, 'render');

            // Only renders when the 'reset'
            // event is triggered at the end of the fetch.
            var messages = app.bbyc_category_collection.fetch({
                success: function(data) {
                    var $img = $('img.waiting');
                    if($img.is(":visible")) {
                        $img.hide();
                    }
                },
                error: function(error) {
                    console.log('Error: ', error);
                },
                dataType: 'jsonp',
                reset: true
            });

            app.bbyc_category_collection.on('reset',this.render, this);
        },

        template:   $('#show-top').html(),

        render: function(data) {
            var cates = [], cates_title = {};
            _.forEach(data.models, function(model) {
                cates_title = {
                    'brand': model.get('Brand'),
                    'name': model.get('name'),
                    'id': model.get('id')
                };
                cates=model.get('subCategories');
            });
            //console.log('[categories-view: render', cates_title, cates.length);

            var ts = _.template(this.template, {cates: cates, title: cates_title});
            this.$el.hide().html(ts).fadeIn(500);
            return this;
        },

        searchProductsByCatId: function(ev) {
            //console.log('------ searchProductsByCatId: ------', $(ev.target).attr('href'));
            var cateId = $(ev.target).attr('href');
            new app.bbyc_product_collection({cateId: cateId});

            return false;
        }
    });

})(jQuery);
