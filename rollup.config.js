import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import { readFileSync } from 'fs';
import copy from 'rollup-plugin-copy';
// Read dependencies from package.json to make them external
const pkg = JSON.parse(readFileSync('./package.json', 'utf8'));
const deps = Object.keys(pkg.dependencies || {});
const peerDeps = Object.keys(pkg.peerDependencies || {});
const external = [...deps, ...peerDeps];

export default {
    input: 'src/index.ts', // Entry point
    output: [
        {
            file: 'dist/index.js',
            format: 'cjs',
            sourcemap: false,
        },
        {
            file: 'dist/index.esm.js',
            format: 'esm',
            sourcemap: false,
        },
    ],
    plugins: [
        json(),
        typescript({
            tsconfig: './tsconfig.json',
            declaration: true,
            declarationDir: 'dist',
            rootDir: 'src',
        }),
        peerDepsExternal(), // Excludes peer dependencies like React
        resolve(), // Resolves node_modules imports
        commonjs(), // Converts CommonJS modules
        babel({
            exclude: 'node_modules/**',
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
            babelHelpers: 'bundled',
        }),
        postcss({
            extract: 'index.css', // Outputs CSS to dist/index.css
            minimize: true, // Minifies CSS
            sourceMap: true,
        }),
        copy({
            targets: [
                { src: 'src/assets/fonts/*', dest: 'dist/fonts' } // Copy fonts from src to dist
            ]
        }),
    ],
    external: id => external.some(dep => id === dep || id.startsWith(`${dep}/`)),
};