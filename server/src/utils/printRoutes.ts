import express from 'express';
import chalk from "chalk"

export const cleanPath = (...parts: string[]) => { // Cleans double slashes
  return parts
    .map((p) => p.replace(/\/+$/, '').replace(/^\/+/, '')) 
    .filter(Boolean)
    .join('/')
    .replace(/\/+/g, '/');
};


export function printRoutes(app: express.Express) {
  const routes: { method: string; path: string }[] = [];

  const extractRoutes = (stack: any[], basePath = '') => {
    stack.forEach((layer) => {
      if (layer.route) {
        const path = cleanPath('/', basePath, layer.route.path);
        const methods = Object.keys(layer.route.methods);
        methods.forEach((method) => {
          routes.push({ method: method.toUpperCase(), path });
        });
      } else if (layer.name === 'router' && layer.handle.stack) {
        const match = layer.regexp?.toString().match(/\/\^\\(.*)\\\/\?\(\?\=\\\/\|\$\)\/i/);
        const subPath = match?.[1].replace(/\\\//g, '/') || '';
        extractRoutes(layer.handle.stack, cleanPath(basePath, subPath));
      }
    });
  };

  extractRoutes(app._router.stack);
  let routeString = []
  routes.forEach((r) => {
    routeString.push(`${chalk.bgBlue.whiteBright(r.method.padEnd(6))} ${chalk.whiteBright.underline("/" + r.path)}`);
  });

  return routeString
}