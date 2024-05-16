const DeviceManager = require("./DeviceManager");

class BluetoothDeviceManager extends DeviceManager
{
    constructor()
    {
        super();

        this.RegisterDataReceivedCallback(DataReceivedReceived)
    }
}

function DataReceivedReceived()
{
    console.log("log inside bluetooth device manager");
}

module.exports = BluetoothDeviceManager;