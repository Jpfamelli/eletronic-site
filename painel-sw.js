/* Service worker do painel — existe só para as notificações de pedido novo.
   O Chrome do Android não aceita `new Notification()` na página: exige mostrar pela
   registration.showNotification(). Não intercepta nenhuma requisição (sem cache, sem fetch). */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));

self.addEventListener('notificationclick', (e) => {
  e.notification.close();
  const id = e.notification.data && e.notification.data.id;
  e.waitUntil((async () => {
    const abertas = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    const painel = abertas.find((c) => c.url.includes('painel.html'));
    if (painel) {
      await painel.focus();
      if (id) painel.postMessage({ tipo: 'abrir-pedido', id });
      return;
    }
    await self.clients.openWindow('painel.html' + (id ? '#pedido=' + id : ''));
  })());
});
