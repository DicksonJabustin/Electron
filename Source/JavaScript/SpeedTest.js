let canDataManagerVariable = null;

function callbackFunction()
{
    console.log("Callback invoked from can from both timeout and button");
}

function SpeedDataReceived(data)
{
    console.log("Data received");
    console.log(data);
}

class SpeedTest
{
    constructor(canDataManager)
    {
        if (canDataManager != null)
        {
            canDataManagerVariable = canDataManager;
            canDataManagerVariable.RegisterTimeoutOccuredCallback(callbackFunction);
            canDataManagerVariable.RegisterDataReceivedCallback(SpeedDataReceived);
        }
    }

    GetData()
    {
        console.log("GetData function called from preloader");
        this.InvokeCanDataManagerMessage()
    }

    InvokeCanDataManagerMessage()
    {
        console.log(canDataManagerVariable.CanDataManagerMessage());
    }
}

// document.addEventListener("DOMContentLoaded", () => {
//     const button = document.getElementById("myButton");

//     button.addEventListener("click", () => {
//         canDataManagerVariable.ButtonClickedResponse();
//     });
// });

module.exports = SpeedTest;
