Ext.define('abp.component.form.AbpFormCtl',{
    extend:'Ext.app.ViewController',
    alias: 'controller.abpformctl',
    control:{
          'button[action]':{
            click:'onActionButtonClick',
        }
    },
    onActionButtonClick:function(actionBtn){
        var me=this;
        var actionName=actionBtn.action;
        var view=me.getView();
        var actionFunName=Ext.String.format('on{0}_excute',actionName);
        if(Ext.isFunction(view[actionFunName])){
            var fun=view[actionFunName];
            fun.call(view);
            return;
        }
        if(Ext.isFunction(me[actionFunName])){
            var fun=me[actionFunName];
            fun.call(me);
            return;
        }
        console.log(Ext.String.format('未找到对应的actionfunname:{0}',actionFunName));
    },

    onback_excute:function(){
        console.log('back',this);
        this.getView().fireEvent('switchPage',0);
    }
});