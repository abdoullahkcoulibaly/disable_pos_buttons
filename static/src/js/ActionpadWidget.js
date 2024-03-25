odoo.define('disable_pos_buttons.ActionpadWidget', function(require) {
    'use strict';

    const ActionpadWidget = require('point_of_sale.ActionpadWidget');
    const Registries = require('point_of_sale.Registries');

  const DisablePosButtonsActionpadWidget = (ActionpadWidget) =>
        class extends ActionpadWidget {};

      ActionpadWidget.defaultProps = {
       ...ActionpadWidget.defaultProps,
       isDisable: false
       }

   Registries.Component.extend(ActionpadWidget, DisablePosButtonsActionpadWidget);
    return ActionpadWidget;
});
