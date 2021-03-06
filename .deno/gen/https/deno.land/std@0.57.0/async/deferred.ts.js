/** Creates a Promise with the `reject` and `resolve` functions
 * placed as methods on the promise object itself. It allows you to do:
 *
 *     const p = deferred<number>();
 *     // ...
 *     p.resolve(42);
 */
export function deferred() {
  let methods;
  const promise = new Promise((resolve, reject) => {
    methods = { resolve, reject };
  });
  return Object.assign(promise, methods);
}
//# sourceMappingURL=file:///home/runner/scrapbookhkatzdev/.deno/gen/https/deno.land/std@0.57.0/async/deferred.ts.js.map
