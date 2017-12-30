
Ext.define('apb.util.AbpUtil', {
    extend:'Ext.Base',
    ajax: function (opt) {
        var _success = opt.success;
        var _failure = opy.failure
        delete opt.success;
        delete opt.failure;
        Ext.apply(opt, {
            success: function (response, opts) {
                var obj = Ext.decode(response.responseText);
                if (_success) _success(obj, response, opts);
            },
            failure: function (response, opts) {
                if (_failure) _failure(response, opts);
            }
        });
        Ext.Ajax.request(opt);
    },

});