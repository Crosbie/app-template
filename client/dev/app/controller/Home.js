Ext.define('AppTemplate.controller.Home', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            mainContainer: 'main',
            cardPanel: 'panel[id=mainCardPanel]',
            homeView: 'home',
            globalToolbar: 'titlebar[id=globalToolbar]',
            dashboardBtn: 'button[action=homeNav]',
            homeBtn: 'button[id=homeBtn]'
        },
        control: {
            mainContainer: {
                activeitemchange: 'handleContainerActiveItemChange'
            },
            cardPanel: {
                activeitemchange: 'handleCardActiveItemChange'
            },
            dashboardBtn: {
                tap: 'handleDashboardButton'
            }
        }
    },
    /*
        Manages Switching of Card Panel
    */
    switchCard: function(selectedView, title) {
        var me = this,
            cardPanel = this.getCardPanel(),
            activeItem = cardPanel.getActiveItem(),
            view,
            toolbar = this.getGlobalToolbar();
            homeBtn = this.getHomeBtn();

            toolbar.titleComponent.innerElement.dom.style.fontSize = '80%';
        if (activeItem.activeViewName !== selectedView && selectedView !== 'AppTemplate.view.Home') {
            view = Ext.create(selectedView);
            view.activeViewName = selectedView;
            toolbar.setTitle(title);
            homeBtn.show();
        }
        if (selectedView === 'AppTemplate.view.Home') {
            view = this.getHomeView();
            toolbar.setTitle("");
            homeBtn.hide();

        }
        cardPanel.setActiveItem(view);

    },
    /*
        Manages Home View Button Taps.
    */
    handleDashboardButton: function(button) {
        var view, title;
        var self = this;

        switch (button.id) {
            case "dash_standardsLibrary":
                view = "AppTemplate.view.AppTemplateLibrary";
                title = 'Disciplines';
                break;
            case "dash_downloadedAppTemplate":
                view = "AppTemplate.view.DownloadedAppTemplate";
                title = 'Downloaded AppTemplate';
                break;
            case "dash_favouriteAndRecent":
                view = "AppTemplate.view.FavouriteAndRecent";
                title = 'Favourites';
                break;
            case "dash_profile":
                view = "AppTemplate.view.Profile";
                title = 'Profile';
                break;
            case "homeBtn":
                view = "AppTemplate.view.Home";
                title = 'AppTemplate';
                break;

        }
        this.switchCard(view, title);
    },
    /*
        This only destroys old card Views
    */
    handleCardActiveItemChange: function(container, value, oldValue, eOpts) {
        setTimeout(function() {
            if (oldValue && oldValue.id !== 'homeView') {
                container.remove(oldValue, true);
            }
        }, 250);
    }

});