const { app, BrowserWindow } = require("electron");

function createWindow() {
    let mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        autoHideMenuBar: true,
        title: "MateMÁGICA"
    });

    mainWindow.loadFile('./index.html')
}

app.whenReady().then( () => {
    createWindow()

    app.on('activate', function() {
        if(BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', function() {
    app.quit()
    if(process.platform == 'darwin') app.quit()
})