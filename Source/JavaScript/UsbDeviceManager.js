const DeviceManager = require("./DeviceManager");

class UsbDeviceManager extends DeviceManager
{
    constructor()
    {
        super();

        this.RegisterDataReceivedCallback(DataReceivedReceived)
    }
}

function DataReceivedReceived()
{
    console.log("log inside Usb device manager");
}

module.exports = UsbDeviceManager;