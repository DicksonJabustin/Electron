let timeoutCallbackFunctionVariable = null;
let dataReceivedCallback = null;
let stopSignal = false;
let min = 10;
let max = 500;

class CanDataManager 
{
    constructor() 
    {
        this.message = "Hello from CanDataManager!";
    }
    
    CanDataManagerMessage() 
    {
        return this.message;
    }

    RegisterTimeoutOccuredCallback(callback)
    {
        timeoutCallbackFunctionVariable = callback;
        setTimeout(timeoutCallbackFunctionVariable, 5000);
    }
    
    RegisterDataReceivedCallback(callback)
    {
        dataReceivedCallback = callback;
        this.generateRandomNumber(min, max);
    }

    generateRandomNumber(min, max)
    {
        if (!stopSignal)
        {
            const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            dataReceivedCallback(randomNumber);
            setTimeout(() => this.generateRandomNumber(min, max), 100);
        }
        else
        {
            console.log("Stop signal received. Stopping random number generation.");
        }
    }
}

module.exports = CanDataManager;
