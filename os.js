const os = require('os');  
const dotenv = require('dotenv');  

dotenv.config();

function getOSInfo() {  
    console.log('Информация об операционной системе:');  
    console.log(`Платформа: ${os.platform()}`);  
    console.log(`Свободная память: ${os.freemem()} байт`);  
    console.log(`Домашняя директория: ${os.homedir()}`);  
    console.log(`Имя хоста: ${os.hostname()}`);  
    console.log(`Сетевые интерфейсы: ${JSON.stringify(os.networkInterfaces())}`);  
}  

function checkFreeMemory() {  
    const freeMemory = os.freemem();  
    const minMemory = 4 * 1024 * 1024 * 1024; 
    return freeMemory > minMemory;  
}  

function runWithAccessControl(callback) {  
    const mode = process.env.MODE;  

    if (mode === 'admin') {  
        callback();  
    } else {  
        console.log('Недостаточно прав для выполнения этой операции.');  
    }  
}  


runWithAccessControl(getOSInfo);  

if (checkFreeMemory()) {  
    console.log('Свободной памяти больше 4GB.');  
} else {  
    console.log('Свободной памяти недостаточно (меньше 4GB).');  
}  