import { createServer } from "node:http";

const port = Number(process.env.PORT ?? 4321);
const server = createServer((request, response) => {
  if (request.url === "/health") {
    response.writeHead(200, { "content-type": "application/json" });
    response.end(JSON.stringify({ ok: true, recipe: 2 }));
    return;
  }
  response.writeHead(200, { "content-type": "text/html; charset=utf-8" });
  response.end(`<!doctype html>
    <html><body style="font-family:system-ui;padding:48px">
      <h1>Setup agent learned this application</h1>
      <p>Recipe version two uses the new serve command and verifies this page.</p>
      <p>TryCase retained v1 until this replacement passed a clean replay.</p>
      <p>A later PR bot is now consuming verified recipe v2.</p>
    </body></html>`);
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Dogfood app listening on http://0.0.0.0:${port}`);
});
