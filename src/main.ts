import { error } from 'console';
import { app, BrowserWindow } from 'electron';

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  win.loadFile('index.html').catch(err => {
    error(err);
  });
  win.webContents.openDevTools();
};

app
  .whenReady()
  .then(() => {
    createWindow();
  })
  .catch(err => {
    error(err);
  });
