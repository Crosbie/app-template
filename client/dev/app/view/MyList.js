Ext.define("AppTemplate.view.MyList", {
    extend: 'Ext.List',
    xtype: 'myList',
    config: {
        id: 'myListView',
        scrollable:true,
        xtype: 'panel',
        store: 'MyStore',

        listeners: {
            initialize: function(){
                Ext.getStore('MyStore').clearFilter();
                Ext.getCmp('globalToolbar').titleComponent.innerElement.dom.style.fontSize = '80%';
            }
        }
    },
    getItemTpl: function(recordnode) {
        var str =[
        '<div>{name} - {email}</div>'
        ].join('');
        return str;
    }

});