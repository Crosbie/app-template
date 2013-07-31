Ext.define('appTemplate.store.FlyOutNav', {
    extend: 'Ext.data.Store',
    config: {
        model: 'appTemplate.model.FlyOutNav',
        data: [{
                title: 'Home',
                group: '1'
            }, {
                title: 'Edit Profile',
                group: '2'
            }
        ],
        grouper: {
            groupFn: function(record) {
                var text = record.get('group');
                if (text == '1') {
                    text = "Group 1";
                } else if (text == '2') {
                    text = "Group 2";
                } else if (text == '3') {
                    text = "Group 3";
                } else if (text == '4') {
                    text = "Group 4";
                }
                return text;
            },
            sortProperty: 'type',
            direction: 'DESC'
        }
    }

});