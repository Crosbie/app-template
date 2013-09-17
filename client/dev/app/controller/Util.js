Ext.define('AppTemplate.controller.Util', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {},
        control: {}
    },
    showLoadMask: function(msg) {
        Ext.Viewport.setMasked({
            xtype: 'loadmask',
            message: msg,
            indicator: true
        });
    },
    hideLoadMask: function() {
        Ext.Viewport.setMasked(false);
    },
    saveLocalStorage: function(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    },
    loadLocalStorage: function(key, callback) {
        var response = localStorage.getItem(key);
        return callback(JSON.parse(response));
    },
    removeLocalStorage: function(key) {
        localStorage.removeItem(key);
    },

    doAct: function(actName, reqObj, callback) {
        $fh.act({
            act: actName,
            req: reqObj
        }, function(res) {
            return callback(null, res);
        }, function(msg, err) {
            return callback({
                msg: msg,
                err: err
            }, null);
        });
    }
});