/**
 * Data Changed Event - Simple jQuery plugin to trigger 'dataChanged' event when a data attribute is changed
 * Example: $('#element').on('dataChange', function (e, field, data) {...});
 * Date: 13/07/2015
 * @author maca134
 * @version 0.1
 */
(function ($, undefined) {
    "use strict";
    $.fn['dataOrig'] = $.fn.data;
    $.fn['data'] = function (field, data) {
        var obj = $(this);
        if (data == undefined) {
            return obj.dataOrig(field);
        } else {
            var current = obj.dataOrig(field);
            if (current != data) {
                obj.trigger('dataChange', [field, data]);
            }
            return obj.dataOrig(field, data);
        }
    };
})(jQuery);