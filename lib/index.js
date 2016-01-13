'use strict';

// MODULES //

var floor = require( 'math-floor' );
var ceil = require( 'math-ceil' );


// TRUNC //

/**
* FUNCTION: trunc( x )
*	Rounds a numeric value toward zero.
*
* @param {Number} x - input value
* @returns {Number} rounded value
*/
function trunc( x ) {
	if ( x < 0 ) {
		return ceil( x );
	}
	return floor( x );
} // end FUNCTION trunc()


// EXPORTS //

module.exports = trunc;
