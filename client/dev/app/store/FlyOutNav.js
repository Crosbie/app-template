Ext.define('AppTemplate.store.FlyOutNav', {
    extend: 'Ext.data.Store',
    config: {
        model: 'AppTemplate.model.FlyOutNav',
        data: [{
            title: 'Home',
            iconUrl: 'home',
            group: '1',
            panelPath: 'AppTemplate.view.Home',
            position: 1,
            name: 'home'
        }, {
            title: 'Profile',
            iconUrl: 'user',
            group: '2',
            panelPath: 'AppTemplate.view.Profile',
            position: 2,
            modal: true,
            name: 'profile'
        },{
            title: 'My List',
            group: '2',
            iconUrl: 'doc',
            panelPath: 'AppTemplate.view.MyList',
            position: 4,
            name: 'myList'
        }, {
            title: 'Quick Tour',
            iconUrl: 'doc2',
            group: '3',
            panelPath: 'AppTemplate.view.QuickTour',
            position: 6,
            name: 'quickTour'
        }, {
            title: 'Communication',
            iconUrl: 'comms',
            group: '3',
            panelPath: 'AppTemplate.view.Communication',
            position: 7,
            name: 'Communication',
        },{
            title: 'About',
            iconUrl: 'about',
            group: '3',
            panelPath: 'AppTemplate.view.About',
            position: 9,
            name: 'about'
        }

        ],
    }

});