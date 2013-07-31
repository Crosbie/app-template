Ext.define("appTemplate.view.Sidebar", {
    extend: 'Ext.List',
    xtype: 'sidebar',
    config: {
        scrollable:true,
        id:'flyOutNav',
        xtype: 'panel',
        store: 'FlyOutNav',
        grouped: true,
        docked:'left',
        width: 0,
        itemTpl: new Ext.XTemplate(
            '<div><i name="{name}"></i>{title}</div>'
        )
    }
});