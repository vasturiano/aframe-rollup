import nodeResolve from 'rollup-plugin-node-resolve';

export default {
    entry: 'index.js',
    dest: 'build.js',
    format: 'umd',
    plugins: [ nodeResolve() ]
};