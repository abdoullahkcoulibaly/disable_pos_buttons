odoo.define('disable_pos_buttons.TicketScreen', function (require) {
    'use strict';


    const TicketScreen = require('point_of_sale.TicketScreen');
    const Registries = require('point_of_sale.Registries');


 const DisablePosButtonsTicketScreen = (TicketScreen) =>
        class extends TicketScreen {
            get hasUserControlRights() {
            const cashier = this.env.pos.get('cashier') || this.env.pos.get_cashier();
            return cashier.role !== 'manager';
            }
        };

    Registries.Component.extend(TicketScreen, DisablePosButtonsTicketScreen);
    return TicketScreen;
});
