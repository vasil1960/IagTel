/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
 Ext.define('IagTel.view.iag.IagController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.iag',

    // onItemSelected: function (sender, record) {
    //     Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    // },

    // onConfirm: function (choice) {
    //     if (choice === 'yes') {
    //         //
    //     }
    // },

    onCall: function(list, info) {
        var record = info.record;
        document.location.href = 'tel:'+record.data.tel;

        // Ext.Msg.alert('Избери', record.get('ime') + ' ' + record.get('fam') + ' ' + record.get('tel')) ;
    },

    onMessage: function(list, info) {
        var record = info.record;
        document.location.href = 'sms:'+record.data.tel;
        // window.open('tel:+1-800-555-1234');
    },

    onEmail: function(list, info) {
        var record = info.record;
        document.location.href = 'mailto:'+record.data.email;
    }
});