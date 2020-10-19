const ioHook = require('iohook');

const MapKeys = require("./src/MapKeys");

ioHook.on('keydown', e =>{

    MapKeys.getKeyName(e);

});

ioHook.start();