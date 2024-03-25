odoo.define('disable_pos_buttons.NumpadWidget', function (require) {
    'use strict';

    const NumpadWidget = require('point_of_sale.NumpadWidget');
    const Registries = require('point_of_sale.Registries');

const DisablePosButtonsNumpadWidget = (NumpadWidget) =>
        class extends NumpadWidget {};
       NumpadWidget.defaultProps = {
       ...NumpadWidget.defaultProps,
       isDisable: false
       }
    Registries.Component.extend(NumpadWidget, DisablePosButtonsNumpadWidget);
    return NumpadWidget;
});
