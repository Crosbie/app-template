Ext.define("AppTemplate.view.FlyOutNav", {
    extend: 'Ext.List',
    xtype: 'sidebar',
    config: {
        id: 'flyOutNav',
        scrollable:true,
        xtype: 'panel',
        store: 'FlyOutNav',
        docked:'left',
        width: 0,
        itemTpl: new Ext.XTemplate(
            '<div><i class="listIcn {iconUrl}" name="{name}"></i>{title}</div>'
        )
    }
});