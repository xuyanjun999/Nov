/**
 * This view is an example list of people.
 */
Ext.define('abp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'abp.store.Personnel'
    ],

    title: 'Personnel',

    store: {
        type: 'personnel'
    },
    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 }
    ],
    tbar:[{
        text:'创建',
        xtype:'button',
        shadow:false
    },{
        text:'编辑',
        style:'-webkit-box-shadow: none;box-shadow: none;'
    }],
    listeners: {
        select: 'onItemSelected'
    }
});
