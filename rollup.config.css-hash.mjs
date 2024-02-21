import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';

export default {
	input: 'src/css_hash/index.js',
	output: [
		{
			file: 'dist/css-hash.js',
			format: 'cjs'
		},
		{
			file: 'dist/css-hash.min.js',
			format: 'iife',
			name: 'version',
			plugins: [terser()]
		}
	],
	plugins: [json()]
};