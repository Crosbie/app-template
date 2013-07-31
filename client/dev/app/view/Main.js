Ext.define('appTemplate.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        id: 'mainContainer',
        autoDestroy: false,
        fullscreen: true,

        items: [
            {
                xtype: 'sidebar'
            },
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'FeedHenry App Template',
                items: [{
                    xtype: 'button',
                    iconCls: 'list',
                    iconMask: true,
                    align: 'left',
                    action: 'navButton',
                    id: 'navBtnFlyOutNav'
                }]
            },
            {
                xtype: 'panel',
                id: 'mainCardPanel',
                height: '100%',
                layout: {
                    type:'card'
                },
                html:'This is the main card panel.'
            }
        ]
    }
});
