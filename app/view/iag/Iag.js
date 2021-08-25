/**
 * This view is an example list of people.
 */
Ext.define('IagTel.view.iag.Iag', {
    extend: 'Ext.dataview.List',
    xtype: 'iaglist',

    requires: [
        'IagTel.store.iag.Iag',
        'IagTel.view.iag.IagController',
        'IagTel.view.iag.IagModel'
    ],
    // id:'vasil',
    // title: 'Personnel',

    store: {
        type: 'iag'
    },
    // store:'IagTel.store.Personell',
    // fullscreen: false,
    // itemTpl: '<h3>{ime} {fam} </h3>'

    controller: 'iag',
    viewModel: 'iag',

    itemTpl: [
        '<table>',
        '    <tr>',
        '        <td style="padding:5px"><img src="https://vasil.iag.bg/upload/{glav_pod}/{picture}" width="80" heigh="80"></img></td>',
        '        <td>',
        '            <table style="margin-left:30px">',
        '                <tr>',
        '                    <td><h3>{titla} {ime} {fam}</h3></td>',
        '                </tr> ',
        '                <tr>',
        '                    <td>{pod}</td>',
        '                </tr>',
        '                <tr>',
        '                    <td>{tel}</td>',
        '                </tr>',
        '                <tr>',
        '                    <td>{email}</td>',
        '                </tr>',
        '                <tr>',
        '                    <td>{dlagnost}</td>',
        '                </tr>',
        '                <tr>',
        // '                    <td>{egn}</td>',
        '                </tr>',
        '            </table>',
        '            ',
        '            ',
        '        </td>',
        '         ',
        '    </tr>',
        '</table>'
    ],

    plugins: {
        listswiper: {
            defaults: {
                ui: 'action'
            },

            left: [{
                iconCls: 'x-fa fa-phone',
                text: 'Обади се',
                commit: 'onCall'
            }],

            right: [
                // {
                //     iconCls: 'x-fa fa-envelope',
                //     ui: 'alt confirm',
                //     text: 'SMS',
                //     commit: 'onMessage'
                // }, 
                {
                    iconCls: 'x-fa fa-cog',
                    text: 'Ел. поща',
                    commit: 'onEmail'
                }
            ]
        },
        
            // pluginId: 'myplugin',
            // autoPaging: true,
            // loadMoreText: 'Зареждам още ...',
            // noMoreRecordsText: 'Няма повече записи',
            // type: 'listpaging'
        
        
        

    },


    // listeners: {
    //     commit: 'onMessage'
    // }
    // listeners: {
    //     select: 'onItemSelected'
    // }
});
