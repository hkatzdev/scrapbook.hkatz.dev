import { serve } from "https://deno.land/std@0.57.0/http/server.ts";
const s = serve({ port: 8080 });
for await (const req of s) {
  req.respond({
    status: 301,
    headers: new Headers({
      "Location": "https://scrap.hkatz.dev",
    }),
  });
}
//# sourceMappingURL=file:///home/runner/scrapbookhkatzdev/.deno/gen/file/home/runner/scrapbookhkatzdev/mod.ts.js.map
