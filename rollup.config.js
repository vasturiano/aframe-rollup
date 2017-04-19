import nodeResolve from 'rollup-plugin-node-resolve';

export default {
    format: 'umd',
    plugins: [ nodeResolve() ]
};