const DeviceManager = require("./DeviceManager");

class AuxDeviceManager extends DeviceManager
{
    constructor()
    {
        super();

        this.RegisterDataReceivedCallback(DataReceivedReceived)
    }
}

function DataReceivedReceived()
{
    console.log("log inside aux data manager");
}

module.exports = AuxDeviceManager;