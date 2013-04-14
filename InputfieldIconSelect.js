InputfieldIconSelect = {
    init: function($input) {
        $icons = $input.next('.InputfieldIconSelect-icons');

        $icons.on('click', 'img', function() {
            $input.val($(this).attr('data-icon'));
        });
    }
};
