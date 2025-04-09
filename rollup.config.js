import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default {
    input: 'src/components/ui/index.ts',
    output: [
        { file: 'dist/index.js', format: 'cjs', sourcemap: true },
        { file: 'dist/index.esm.js', format: 'esm', sourcemap: true },
    ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        babel({
            exclude: 'node_modules/**',
            presets: ['@babel/preset-env', '@babel/preset-react'],
        }),
    ],
};