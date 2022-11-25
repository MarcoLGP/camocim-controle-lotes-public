import { app, dialog, ipcMain } from 'electron';
import serve from 'electron-serve';
import { writeXLSX } from './excel/exceljs';
import { autoUpdater } from "electron-updater"
import { createWindow } from './helpers';

const isProd: boolean = process.env.NODE_ENV === 'production';

if (isProd) {
  serve({ directory: 'app' });
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`);
}

(async () => {
  await app.whenReady();

  const mainWindow = createWindow('main', {
    autoHideMenuBar: true,
    height: 650,
    width: 1280,
    minWidth: 1230,
    fullscreenable: true,
    transparent: true,
    frame: false
  });

  if (isProd) {
    await mainWindow.loadURL('app://./index.html');

  } else {
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}/`);
  }

  mainWindow.setSize(1280, 650)
  mainWindow.center()

  ipcMain.on("write-xlsx", (e, arg) => {
    const date = new Date().toLocaleDateString().replaceAll("/", "-")
    dialog.showSaveDialog(mainWindow, {
      title: "Caminho para salvar o relatório",
      defaultPath: `Relatório controle de lotes ${date}`
    }).then(({ filePath }) => {
      try {
        writeXLSX(filePath, arg.coffes)
        e.reply("done")
      } catch (error) {
        console.log(error)
      }
    })
  })

  ipcMain.on("minimize_window", () => {
    mainWindow.minimize()
  })

})();

let statusUpdater: string

ipcMain.handle("check-updates", () => {
  autoUpdater.autoDownload = true
  autoUpdater.checkForUpdates()
})

autoUpdater.on("error", () => {
  statusUpdater = "Ocorreu um problema"
})

autoUpdater.on("checking-for-update", () => {
  statusUpdater = "Verificando atualizações"
})

autoUpdater.on("update-not-available", () => {
  statusUpdater = "Sistema atualizado"
})

autoUpdater.on("update-available", () => {
  statusUpdater = "Atualização disponível"
})

autoUpdater.on("update-downloaded", () => {
  statusUpdater = "Download finalizado"
})

ipcMain.handle("update-check", () => {
  return statusUpdater;
})

ipcMain.handle("get-version-update", () => {
  return autoUpdater.currentVersion.version
})

ipcMain.handle("quit-and-install-update", () => {
  autoUpdater.quitAndInstall()
})

app.on('window-all-closed', () => {
  app.quit();
});

ipcMain.on("close_window", () => {
  app.quit()
})