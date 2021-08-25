Ext.define('IagTel.view.home.Home', {
    extend: 'Ext.Panel',
    xtype: 'home',
    // alias: 'widget.home',

    requires: [
        'Ext.Panel',
        'Ext.Img',
        'Ext.Button',
        'Ext.Spacer'
    ],

    config: {
        layout: 'vbox',
        items: [
            {
                xtype: 'panel',
                flex: 1,
                layout: 'fit',
                items: [
                    {
                        xtype: 'image',
                        src: 'resources/images/main.png'
                    }
                ]
            },
            {
                xtype: 'panel',
                flex: 1,
                margin: 20,
                layout: 'vbox',
                items: [
                    {
                        xtype: 'panel',
                        flex: 1,
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'button',
                                flex: 1,
                                ui:'action',
                                // id: 'iagBtn',
                                margin: '',
                                icon: 'true',
                                iconAlign: 'top',
                                iconCls: 'x-fa fa-user',
                                text: 'ИАГ',
                                handler: 'onIagBtnTap'
                            },
                            {
                                xtype: 'spacer',
                                width: 10
                            },
                            {
                                xtype: 'button',
                                flex: 1,
                                ui:'action',
                                disabled: false,
                                // id: 'rdgBtn',
                                iconAlign: 'top',
                                iconCls: 'team',
                                text: 'РДГ/ДП/ДПП/ДЛС'
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        flex: 1,
                        margin: '10 0',
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'button',
                                flex: 1,
                                ui:'action',
                                // id: 'dgsBtn',
                                iconAlign: 'top',
                                iconCls: 'team',
                                text: 'ДГС / ДЛС'
                            },
                            {
                                xtype: 'spacer',
                                width: 10
                            },
                            {
                                xtype: 'button',
                                flex: 1,
                                ui:'action',
                                // id: 'searchBtn',
                                iconAlign: 'top',
                                iconCls: 'search',
                                text: 'Търсене'
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        flex: 1,
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'button',
                                flex: 1,
                                ui:'action',
                                disabled: false,
                                // id: 'dpBtn',
                                iconAlign: 'top',
                                iconCls: 'team',
                                text: 'ДП'
                            },
                            {
                                xtype: 'spacer',
                                width: 10
                            },
                            {
                                xtype: 'button',
                                flex: 1,
                                ui:'action',
                                // id: 'aboutBtn',
                                icon: 'true',
                                iconAlign: 'top',
                                iconCls: 'compose',
                                text: 'За приложението'
                            }
                        ]
                    },
                    // {
                    //     xtype: 'panel',
                    //     flex: 1,
                    //     margin: '10 0',
                    //     layout: 'hbox',
                    //     items: [
                    //         {
                    //             xtype: 'button',
                    //             flex: 1,
                    //             ui:'action',
                    //             id: 'iagpodBtn',
                    //             iconAlign: 'top',
                    //             iconCls: 'team',
                    //             text: 'ИАГ поделения'
                    //         },
                    //         {
                    //             xtype: 'spacer',
                    //             width: 10
                    //         },
                    //         {
                    //             xtype: 'button',
                    //             flex: 1,
                    //             ui:'action',
                    //             disabled: true
                    //         }
                    //     ]
                    // }
                ]
            }
        ]
    }

});