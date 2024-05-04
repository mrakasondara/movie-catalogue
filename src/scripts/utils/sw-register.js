import {Workbox} from 'workbox-window'
const swRegister = async () => {
  if (!("serviceWorker" in navigator)) {
    console.log("Service Worker Not supported in the browser");
    return;
  }
  const wb = new Workbox('./sw.bundle.js')
  try {
    await wb.register();
    console.log("Service Worker registered");
  } catch (e) {
    console.log("Failed to register service worket", e);
  }
};
export default swRegister;
