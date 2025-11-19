import chalk from 'chalk';
import boxen from 'boxen';
import { printRoutes } from './printRoutes';
import express from "express"
import { getStartupLogBuffer } from './logger';

export const showBanner = (port: number, app: express.Express) => {
  const title = chalk.bold.blueBright('Boutique');
  const link = chalk.green(`http://localhost:${port}`);
  const divider = chalk.gray('─'.repeat(40));

  const logLines = getStartupLogBuffer()
    .map((line) => chalk.green('' + line))
    .join('');

  const routes = printRoutes(app)

  const msg = `
${title}

${chalk.bold('Available Routes:')}
${routes.join('\n')}

${chalk.bold('Docs/Info:')}
  ${chalk.cyan('ENV')}   ${process.env.NODE_ENV}
  ${chalk.cyan('PORT')}  ${port}
${chalk.bold('Server Ready At:')} ${link}

${chalk.bold('Startup Logs:')}
${logLines || chalk.gray('(no logs)')}



${divider}
`;

  const box = boxen(msg, {
    padding: 0,
    margin: 0,
    borderStyle: 'round',
    borderColor: 'green',
    backgroundColor: process.env.NODE_ENV === 'production' ? undefined : '#1e1e1e',
  });

  console.log(box);
};
