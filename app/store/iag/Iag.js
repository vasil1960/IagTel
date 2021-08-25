Ext.define('IagTel.store.iag.Iag', {
    extend: 'Ext.data.Store',

    alias: 'store.iag',

    // model: 'IagTel.model.Iag',

    autoLoad: true,
    // id: 'IagStore',
    

    proxy: {
        type: 'jsonp',
        url: 'https://vasil.iag.bg/tel/allusers/iag',
        // url: 'https://system.iag.bg/iagSys/resources/php/iagusers.php',
        reader: {
            type: 'json',
            rootProperty: 'records'
        }
    }
});