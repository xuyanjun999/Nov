//包含左边树以及右侧高级查询的List页面
Ext.define('abp.view.main.Form', {
    extend: 'abp.component.page.FormPage',
    xtype: 'widget.mainform',
    form: {
        xtype:'form',
        tbar:[{
            text:'返回',
            handler:'onBack'
        }],
        items:[{
            xtype:'textfield',
            name:'name',
            fieldLabel:'姓名',
            value:'xuyanjun'
        }]
    }, //form
});