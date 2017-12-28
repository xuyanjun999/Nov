Ext.define('abp.component.page.ListPageCtl', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.listpagectl',

    onCreate: function () {
        console.log('i am listpagectl,my apppage is :',this.getView().appPage);
        this.getView().fireEvent('switchPage',1);
    }
});