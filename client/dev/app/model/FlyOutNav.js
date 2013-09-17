Ext.define('AppTemplate.model.FlyOutNav', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'title',
            'id',
            'group',
            'iconUrl',
            'panelPath',
            'showBy',
            'selectable',
            'position',
            'name',
            'modal',
            'ifHome',
            'url'
        ]
    }
});