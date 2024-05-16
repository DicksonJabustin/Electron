
class DeviceManager
{
    constructor()
    {
        this.dataReceivedCallback = null;        
    }

    RegisterDataReceivedCallback(callback)
    {
        this.dataReceivedCallback = callback;
        setTimeout(this.dataReceivedCallback, 15000);
    }
}

module.exports = DeviceManager;