/* eslint-disable import/first */
// eslint-disable-next-line @typescript-eslint/dot-notation
process.env['NODE_CONFIG_DIR'] = `${__dirname}/config`;

import 'reflect-metadata';

import { resolve } from 'path';
import { register } from 'tsconfig-paths';

import { compilerOptions } from '../tsconfig.json';

const baseUrl = resolve(__dirname, '../', compilerOptions.baseUrl);

register({
  baseUrl,
  paths: compilerOptions.paths,
});
