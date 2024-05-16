let canDataManagerVariable = null;

class SuspensionTest
{
    constructor(canDataManager) 
    {
        if (canDataManager != null)
        {
            canDataManagerVariable = canDataManager;
        }

        console.log(canDataManagerVariable.CanDataManagerMessage());
    }
}

module.exports = SuspensionTest;
