Ext.define('AppTemplate.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    requires: ['Ext.TitleBar'],
    config: {
        id: 'mainContainer',
        autoDestroy: false,
        fullscreen: true,
        items: [{
            xtype: 'titlebar',
            id: 'globalToolbar',
            docked: 'top',
            items: [{
                xtype: 'button',
                iconCls: 'list',
                iconMask: true,
                align: 'left',
                id: 'navBtnFlyOutNav'
            }, {
                xtype: 'button',
                text: 'Home',
                align: 'right',
                id: 'homeBtn',
                action: 'homeNav',
                hidden: true
            }]
        }, {
            xtype: 'panel',
            id: 'mainCardPanel',
            height: '100%',
            layout: {
                type: 'card'
            },
            items: [{
                xtype: 'home'
            }]
        }],
        listeners: {
            initialize: function() {
                Ext.getCmp('globalToolbar').titleComponent.innerElement.dom.style.fontSize = '80%';
            }
        }
    }
});