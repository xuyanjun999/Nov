Ext.define('abp.component.page.FormPageCtl', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.formpagectl',

    onBack: function () {
        console.log('i am listpagectl,my apppage is :',this.getView().appPage);
        this.getView().fireEvent('switchPage',0);
    }
});