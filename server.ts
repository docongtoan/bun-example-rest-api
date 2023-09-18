import { Router } from "./routers/index.router";
import { ParserService } from "./services/parser.service";

const app = Bun.serve({
  port: Bun.env.PORT,
  hostname: Bun.env.HOST_NAME,
  async fetch(req) {
    const url = new URL(req.url);
    const params = await ParserService.prototype.getAllParam(url) || {};
    let data : any;   
    try {
      data = await req.json();
    } catch (error) {
      data = {};
    }
    const token: string = req.headers.get('Authorization')?.split(' ')[1] || ''; 
    return await Router.prototype.Root(token,url.pathname, {params,data});
  },
  websocket: {
    open(ws) {},
    message(ws, data) { },
    close(ws, code, reason) { },
  },
  error(error) {
    return new Response(`<pre>${error}\n${error.stack}</pre>`, {
      headers: {
        "Content-Type": "text/html",
      },
    });
  },
});

console.log(`Listening on http://localhost:${app.port} ...`);
