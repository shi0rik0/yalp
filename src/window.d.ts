interface API {
  openFile: () => Promise<string>
  loadFile: (filePath: string) => Promise<Uint8Array>
}

declare interface Window {
  eAPI: API
}
