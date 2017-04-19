import nodeResolve from 'rollup-plugin-node-resolve';

export default {
    useStrict: false,   // a-frame 0.5 not 'strict' compatible
    format: 'umd',
    plugins: [ nodeResolve() ]
};