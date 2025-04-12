import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';

export default {
    input: 'src/index.ts', // Entry point
    output: [
        {
            file: 'dist/index.js',
            format: 'cjs',
            sourcemap: true,
        },
        {
            file: 'dist/index.esm.js',
            format: 'esm',
            sourcemap: true,
        },
    ],
    plugins: [
        json(),
        typescript({
            tsconfig: './tsconfig.json',
            // declaration: true,
            // declarationDir: 'dist',
        }),
        peerDepsExternal(), // Excludes peer dependencies like React
        resolve(), // Resolves node_modules imports
        commonjs(), // Converts CommonJS modules
        babel({
            exclude: 'node_modules/**',
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
        }),
        postcss({
            extract: 'index.css', // Outputs CSS to dist/index.css
            minimize: true, // Minifies CSS
            sourceMap: true,
        }),
    ],
    external: [
        'react',
        'react-dom',
        '@radix-ui/react-direction', // Externalize Radix dependencies
        'sonner', // Externalize sonner (for toast)
        // Add other external dependencies as needed
    ],
};