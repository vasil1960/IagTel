/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 */
Ext.define('IagTel.view.main.Main', {
    extend: 'Ext.navigation.View',
    xtype: 'app-main',

    // requires: [
    //     'Ext.MessageBox',
    //     'Ext.layout.Fit',

    //     'IagTel.view.iag.Iag',
    //     'IagTel.view.home.Home',
    //     // 'IagTel.view.home.Home',
    //     // 'IagTel.view.iag.IagController',
    //     // 'IagTel.view.iag.IagModel'
    // ],

    requires: [
        // 'Tel.view.MainMenuPanel',
        'IagTel.view.home.Home',
        'IagTel.view.iag.Iag',
        // 'IagTel.view.main.MainController'
        // 'Ext.Panel'
    ],

    config: {
        // id: 'main',
        // itemId: 'main',
        // defaultBackButtonText: '<--',
        defaultButtonUI : 'default',
        layout: {
            type: 'card',
            animation: 'fade'
        },
        items: [
            
            {
                // title:'fgfg',
                xtype: 'home',
                // title: 'Изпълнителна агенция по горите'
            }
        ]
    },

    controller: 'main',
    // viewModel: 'main',

    // defaults: {
    //     tab: {
    //         iconAlign: 'top'
    //     }
    // },

    // tabBarPosition: 'bottom',
    // layout:'card',
    // items: [
        
        // TODO - Replace the content of this view to suit the needs of your application.
        // {
        //     // title: 'Home',
        //     // iconCls: 'x-fa fa-home',
        //     layout: 'fit',
        //     // The following grid shares a store with the classic version's grid as well!
        //     items: [{
        //         // title: 'Изпълнителна агенция по горите',
        //         // xtype: 'home'
        //     }]
        // },
        // {
        //     title: 'ИАГ',
        //     iconCls: 'x-fa fa-user',
        //     // bind: {
        //     //     html: '{loremIpsum}'
        //     // }
            
        //     items: [
        //         {
        //             xtype: 'titlebar',
        //             docked: 'top',
        //             title: 'Служители в ИАГ',
        //         },{
        //             xtype: 'iaglist'
        //         }
        //     ]
        // },{
        //     title: 'РДГ',
        //     iconCls: 'x-fa fa-user',
        //     // bind: {
        //     //     html: '{loremIpsum}'
        //     // }
            
        //     items: [
        //         {
        //             xtype: 'titlebar',
        //             docked: 'top',
        //             title: 'Служители в ИАГ',
        //         },{
        //             xtype: 'navigationview'
        //         }
        //     ]
        // }

    // ]
});
