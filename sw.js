// VamosJuntos · serviço mínimo para o app ser instalável. Não guarda nada em cache: sempre busca a versão nova.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
