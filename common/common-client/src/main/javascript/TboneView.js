define(function (require) {
    "use strict";
    var Marionette = require("marionette");
    var ViewFeatures = require("common/view/ViewFeatures");
    var PromiseRegion = require("common/view/PromiseRegion");

    /**
     * @class TboneView
     * @extends Marionette.LayoutView
     */
    return Marionette.LayoutView.extend({
        constructor: function (options) {
            Marionette.LayoutView.prototype.constructor.call(this, options);

            if (options && options.controller) {
                this.controller = options.controller;
            }

            ViewFeatures.all(this);
        },

        regionClass: PromiseRegion
    });
});