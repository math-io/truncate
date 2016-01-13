'use strict';

// MODULES //

var test = require( 'tape' );
var trunc = require( './../lib' );


// TESTS //

test( 'main export is a function', function test( t ) {
	t.ok( typeof trunc === 'function', 'main export is a function' );
	t.end();
});

test( 'the function round a numeric value toward 0', function test( t ) {
	t.equal( trunc( -4.2 ), -4, 'equals -4' );
	t.equal( trunc( 9.99999 ), 9, 'equals 9' );
	t.equal( trunc( 0 ), 0, 'equals 0' );
	t.end();
});

test( 'the function returns `NaN` if provided a `NaN`', function test( t ) {
	var val = trunc( NaN );
	t.ok( val !== val, 'returns NaN' );
	t.end();
});

test( 'the function returns `+infinity` if provided a `+infinity`', function test( t ) {
	var val = trunc( Number.POSITIVE_INFINITY );
	t.equal( val, Number.POSITIVE_INFINITY, 'returns +infinity' );
	t.end();
});

test( 'the function returns `-infinity` if provided a `-infinity`', function test( t ) {
	var val = trunc( Number.NEGATIVE_INFINITY );
	t.equal( val, Number.NEGATIVE_INFINITY, 'returns -infinity' );
	t.end();
});
