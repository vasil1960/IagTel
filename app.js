/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'IagTel.Application',

    name: 'IagTel',

    requires: [
        // This will automatically load all classes in the IagTel namespace
        // so that application classes do not need to require each other.
        'IagTel.*'
    ],

    // The name of the initial view to create.
    mainView: 'IagTel.view.main.Main'
});
