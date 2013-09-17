Ext.define('AppTemplate.view.QuickTour', {
    extend: 'Ext.Panel',
    xtype: 'quicktour',

    config: {
        iconCls: 'home',
        style: 'background-color: #ffffff',
        cls: 'cards',

        layout: {
            type: 'vbox',
            align: 'stretch'
        },

        defaults: {
            flex: 1
        },

        items: [{
            xtype: 'carousel',
            items: [{
                html: "<p>Card 1</p>",
                cls: 'card'
            }, {
                html: "<p>Card 2</p>",
                cls: 'card'
            }]
        }]
    }
});