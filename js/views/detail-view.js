var app = app || {};

(function ($) {
    'use strict';

    app.bbyc_detail_view = Backbone.View.extend({

        el: '#myModal',
        initialize: function() {
            //this.listenTo(this.model, 'sync', this.render);
            //_.bindAll(this, 'render');
            this.template =  $('#show_detail').html();
        },

        render: function(data) {
            var ts = _.template(this.template, {detail: data.attributes});
            this.$el.find('div.modal-body').html(ts);
            this.$el.modal();
            return this;
        }
    });

})(jQuery);
