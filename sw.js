//install service Worker
self.addEventListener('install', evt => {
  console.log('service worker has been installed');
});
//activate service Worker
self.addEventListener('activate', evt => {
  console.log('service worker has been activated');
});
