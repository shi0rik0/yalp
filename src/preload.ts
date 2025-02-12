// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('eAPI', {
  openFile: () => ipcRenderer.invoke('open-file'),
  loadFile: (filePath: string) => ipcRenderer.invoke('load-file', filePath),
})
