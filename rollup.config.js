import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import babel from 'rollup-plugin-babel';
import { uglify } from "rollup-plugin-uglify";

const config = {
  input: 'src/kode.js',
  output: {
    format: 'umd',
    name: 'Kode',
    sourcemap: true,
    globals: {
      react: 'React',
      'highlight.js': 'hljs',
      'prop-types': 'PropTypes',
    },
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        'node_modules/prop-types/index.js': [ 'PropTypes' ]
      }
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify( 'production' )
    }),
    uglify(),
  ],
  external: [
    'react',
    'highlight.js',
  ],
};
export default config;
