console.log("Preload js called");

const CanDataManager = require('./Source/JavaScript/CanDataManager');
const SpeedTest = require('./Source/JavaScript/SpeedTest');
const AuxDeviceManager = require('./Source/JavaScript/AuxDeviceManager');
const BluetoothDeviceManager = require('./Source/JavaScript/BluetoothDeviceManager');
const UsbDeviceManager = require('./Source/JavaScript/UsbDeviceManager');

let canDataManager = new CanDataManager();
let speedTest = new SpeedTest(canDataManager);
let usbDeviceManager = new UsbDeviceManager();
let auxDeviceManager = new AuxDeviceManager();
let bluetoothDeviceManager = new BluetoothDeviceManager();
