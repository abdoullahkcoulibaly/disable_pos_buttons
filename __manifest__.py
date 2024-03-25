{
    'depends': ['point_of_sale'],
    'installable': True,
    'application': True,
    'assets': {
        'point_of_sale.assets': [
            'disable_pos_buttons/static/src/js/NumpadWidget.js',
            'disable_pos_buttons/static/src/js/ActionpadWidget.js',
            'disable_pos_buttons/static/src/js/TicketScreen.js',

        ], 'web.assets_qweb': [
            'disable_pos_buttons/static/src/xml/TicketScreen.xml',
            'disable_pos_buttons/static/src/xml/NumpadWidget.xml',
            'disable_pos_buttons/static/src/xml/ActionpadWidget.xml',

        ]
    }

}
