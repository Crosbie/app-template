Ext.define('AppTemplate.controller.FlyOutNav', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            sidebar: 'sidebar',
            mainContainer: 'main',
            navBtn: 'button[id=navBtnFlyOutNav]',
            navList: 'list[id=flyOutNav]',
            mainCardPanel: 'panel[id=mainCardPanel]',
            globalToolbar: 'titlebar[id=globalToolbar]'
        },
        control: {
            navBtn: {
                tap: 'toggleSidebar'
            },
            navList: {
                itemtap: 'onItemSelect'
            }
        }
    },
    initSideBar: function() {
        var mainContainer = this.getMainContainer();
        var sidebar = this.getSidebar();
        if (!sidebar) {
            sidebar = Ext.create('AppTemplate.view.FlyOutNav');
            mainContainer.insert(0, sidebar);
        }
    },
    toggleSidebar: function() {
        var me = this;
        var sidebar = me.getSidebar();
        if (sidebar.getWidth() === 0) {
            me.showSidebar();
        } else {
            me.hideSidebar();
        }
    },
    showSidebar: function() {
        var cardPanel = this.getMainCardPanel();
        var mainContainer = this.getMainContainer();

        var sidebar = this.getSidebar();
        var globalToolbar = this.getGlobalToolbar();
        globalToolbar.addCls('hideTitle');
        sidebar.deselectAll();
        sidebar.setWidth('88%');
        sidebar.width = '88%';
        cardPanel.hide();
    },
    hideSidebar: function() {
        var cardPanel = this.getMainCardPanel();
        cardPanel.show();

        var sidebar = this.getSidebar();
        sidebar.deselectAll();
        sidebar.setWidth(0);
        sidebar.width = 0;
        var globalToolbar = this.getGlobalToolbar();
        globalToolbar.removeCls('hideTitle');
        sidebar.refresh();

    },
    onItemSelect: function(list, index, node, record, event) {
        var me = this;
        var cardPanel = this.getMainCardPanel();
        if (record.get('panelPath') && record.get('panelPath') !== 'webView' && record.get('panelPath') !== 'logout') {
            var panelPath = record.get('panelPath');
            var title = record.get('title');
            // change title to display that you are showing Favourites first
            if(title === 'Favourites &amp; Recent'){
                title = 'Favourites';
            }

            this.getApplication().getController('Home').switchCard(panelPath, title);
        } else if (record.get('panelPath') === 'webView') {
            this.openWebView(record.get('url'), record.get('name'));
        } else if (record.get('panelPath') === 'logout') {
            me.getApplication().getController('Login').doLogout();
        } else {
            var panel = Ext.create('Ext.Panel', {
                layout: 'fit',
                html: record.data.title + ' Panel Added!'
            });
            cardPanel.setActiveItem(panel);
        }
        me.hideSidebar();
    },
    openWebView: function(url, name) {
        var me = this;
        console.log(name);
        
        $fh.webview({
            'act': 'open',
            'url': url,
            'title': name,
            showControls: false
        }, function(res) {
            if (res === "opened") {
                //webview window is now open
            }
            if (res === "closed") {
                //webview window is now closed
            }
        }, function(msg, err) {
            //console.log(msg);
        });
    }
});