Ext.define('AppTemplate.view.Home', {
    requires: ['Ext.Label'],
    extend: 'Ext.Panel',
    xtype: 'home',
    id: 'homeView',
    config: {
        items: [{
            xtype: 'label',
            html: 'AppTemplate',
            cls:'homePageTitle'
        },{
                xtype: 'panel',
                layout: {
                    type: 'hbox',
                    pack: 'center'
                },
                items: [{
                        xtype: 'button',
                        cls: 'dashboardBtn',
                        iconCls: 'home',
                        iconMask: true,
                        ui: 'action-round',
                        id: 'dash_btn1',
                        action: 'homeNav'
                    }, {
                        xtype: 'button',
                        cls: 'dashboardBtn',
                        iconCls: 'home',
                        iconMask: true,
                        ui: 'action-round',
                        id: 'dash_btn2',
                        action: 'homeNav'
                    }, {
                        xtype: 'label',
                        html: 'Page 1',
                        cls: 'homePageLabel left1',
                        height: '20px',
                        width: 'auto',
                        position: 'relative'
                    }, {
                        xtype: 'label',
                        html: 'Page 2',
                        cls: 'homePageLabel right1',
                        height: '20px',
                        width: 'auto',
                        position: 'relative'
                    }, {
                        xtype: 'label',
                        html: 'Page 3',
                        cls: 'homePageLabel left2',
                        height: '20px',
                        width: 'auto',
                        position: 'relative'
                    }, {
                        xtype: 'label',
                        html: 'Profile',
                        cls: 'homePageLabel right2',
                        height: '20px',
                        width: 'auto',
                        position: 'relative'
                    }
                ]
            }, {
                xtype: 'spacer',
                height: '5%'
            }, {
                xtype: 'panel',
                layout: {
                    type: 'hbox',
                    pack: 'center'
                },
                items: [{
                        xtype: 'button',
                        cls: 'dashboardBtn',
                        iconCls: 'star',
                        iconMask: true,
                        ui: 'action-round',
                        id: 'dash_btn3',
                        action: 'homeNav'
                    }, {
                        xtype: 'button',
                        cls: 'dashboardBtn',
                        iconCls: 'user',
                        iconMask: true,
                        ui: 'action-round',
                        id: 'dash_profile',
                        action: 'homeNav'
                    }
                ]
            }
        ]
    }
});