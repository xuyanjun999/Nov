/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */

Ext.define('abp.view.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'app-main',

    requires: [
        'abp.view.main.MainController',
        'abp.view.main.MainModel',
        'abp.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',
    layout: 'border',

    ui: 'navigation',

    items: [{
        region: 'north',
        height: 30,
        title:'i am north',
        margin:'3px 0px',
    }, {
        region: 'center',
     
        items: [{
            xtype: 'mainlist'
        }]
    }, {
        region: 'west',
        title:'左边树',
        width: 200,
        split:{
            width:'3px'
        },
        layout:'fit',
        items:{
            xtype:'treepanel',
            rootVisible: false,
            lines: false,
            useArrows: true,
            root:{
                text:'菜单',
                children:[{
                    text:'合同管理',
                },{
                    text:'配方管理',
                }]
            },
            dockedItems: [{
                xtype: 'textfield',
                border:false,
                reference: 'navtreeFilter',
                dock: 'top',
                emptyText: 'Search',
        
                triggers: {
                    clear: {
                        cls: 'x-form-clear-trigger',
                        handler: 'onNavFilterClearTriggerClick',
                        hidden: true,
                        scope: 'controller'
                    },
                    search: {
                        cls: 'x-form-search-trigger',
                        weight: 1,
                        handler: 'onNavFilterSearchTriggerClick',
                        scope: 'controller',
                        border:false
                    }
                },
        
                listeners: {
                    change: 'onNavFilterFieldChange',
                    buffer: 300
                }
            }]
        }
    }]
});