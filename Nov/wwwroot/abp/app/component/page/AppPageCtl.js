Ext.define('abp.component.page.AppPageCtl', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.apppagectl',
    control: {
        '*': {
            switchPage: 'onSwitchPage'
        },
     
    },
   
    onSwitchPage: function (item) {
        var view = this.getView();
        var layout = view.getLayout();
        layout.setActiveItem(item);
    }
});