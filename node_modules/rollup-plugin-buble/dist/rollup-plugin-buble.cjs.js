'use strict';

var buble = require('buble');
var rollupPluginutils = require('rollup-pluginutils');

function buble$1 ( options ) {
	if ( !options ) options = {};
	var filter = rollupPluginutils.createFilter( options.include, options.exclude );

	if ( !options.transforms ) options.transforms = {};
	options.transforms.modules = false;

	return {
		name: 'buble',

		transform: function ( code, id ) {
			if ( !filter( id ) ) return null;

			try {
				return buble.transform( code, options );
			} catch (e) {
				e.plugin = 'buble';
				if ( !e.loc ) e.loc = {};
				e.loc.file = id;
				e.frame = e.snippet;
				throw e;
			}
		}
	};
}

module.exports = buble$1;
