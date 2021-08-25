/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('IagTel.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    // onItemSelected: function (sender, record) {
    //     Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    // },

    // onConfirm: function (choice) {
    //     if (choice === 'yes') {
    //         //
    //     }
    // },

    onIagBtnTap: function(list, info) {
        // var record = info.record;
        // document.location.href = 'tel:'+record.data.tel;

        //Ext.Msg.alert('Избери', record.get('ime') + ' ' + record.get('fam') + ' ' + record.get('tel')) ;

        // var iagstore = Ext.create('IagTel.store.iag.Iag');
        // iagstore.setAutoLoad(true);
        // iagstore.load();
        // var iag = this.getView('');
        // this.getStore().setAutoLoad(true);

        
        this.getView().push({
            xtype: 'iaglist',
            title: 'Служители в ИАГ'
        }) ;
    },
});
