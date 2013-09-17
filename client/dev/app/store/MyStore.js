Ext.define('AppTemplate.store.MyStore', {
    extend: 'Ext.data.Store',
    config: {
        model: 'AppTemplate.model.MyListModel',
        data: [{
            name: 'Feed Henry',
            email: 'feed@hen.ry'
        }, {
            name: 'Bob Hope',
            email: 'bob@hope.ie'
        }, {
            name: 'Paddy Murphy',
            email: 'paddy@murp.hy'
        }
        ],
    }

});