Ext.define('AppTemplate.view.About', {
    extend: 'Ext.Container',
    xtype: 'about',
    config: {
        scrollable: {
            direction: 'vertical',
            directionLock: true
        },

        items:[{
            xtype:'panel',
            padding:10,
            maxWidth:320,
            id: 'aboutView',
        html: ['<div class="container">',
                    '<div>',
                        '<h1>',
                        'Hello World',
                        '</h1>',
                    '</div>',
                '</div>'
        ].join("")
        }]

    }
});