/**
 * Tiny preset color-picker (minified < 1K)
 */
(function($) {
    var
        NAME = 'preset-picker',
        CHECKMARK = '&#10004;',
        COLORS = '#C00000,#FF0000,#FFC000,#92D050,#00B050,#00B0F0,#0070C0,#7030A0,#000000';

    $.fn.presetpicker = function(options) {
        $input = $(this);

        if (!$input.data(NAME)) {
            $input.data(NAME, true).css('display', 'none');

            $div = $input.wrap('<div/>').parent().addClass(NAME);

            var colors = ($input.attr('data-colors') || COLORS).split(',');

            function _select($span) {
                $div.find('i').html('');
                $span.find('i').html(CHECKMARK);
                $input.val($span.data('color'));
            }

            $.each(colors, function(i,c) {
                var $span = $('<span><i style="background:'+c+'"></i></span>');
                $span.data('color', c);
                if (c == $input.val()) {
                    _select($span);
                }
                $div.append($span);
            });

            $div.append($('<span><i style="background:white"></i></span>').data('color',''));

            $div.append('<br style="clear:both"/>'); // clearfix

            $div.on('click', 'span', function(e) {
                _select($(this));
            });
        }

        return this;
    };
})(jQuery);

TemplateDecorator = {
    init: function($) {
        $('#badge_color').presetpicker();
    }
};

jQuery(function($) { TemplateDecorator.init($); });
