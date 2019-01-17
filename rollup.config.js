import babel from 'rollup-plugin-babel';
import { uglify } from "rollup-plugin-uglify";

const config = {
  input: 'src/kode.js',
  output: {
    format: 'umd',
    name: 'react-kode',
    globals: {
      react: 'React',
      'highlight.js': 'hljs',
    },
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    uglify(),
  ],
  external: [
    'react',
    'highlight.js',
  ],
};
export default config;
