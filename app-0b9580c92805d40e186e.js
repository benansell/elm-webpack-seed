webpackJsonp([1,0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	(function() {
	    'use strict';
	
	    // elm-css
	    __webpack_require__(2);
	
	    // inject elm
	    var Elm = __webpack_require__(1);
	    Elm.Main.embed(document.getElementById('app'));
	})();


/***/ },
/* 1 */
/***/ function(module, exports) {

	
	(function() {
	'use strict';
	
	function F2(fun)
	{
	  function wrapper(a) { return function(b) { return fun(a,b); }; }
	  wrapper.arity = 2;
	  wrapper.func = fun;
	  return wrapper;
	}
	
	function F3(fun)
	{
	  function wrapper(a) {
	    return function(b) { return function(c) { return fun(a, b, c); }; };
	  }
	  wrapper.arity = 3;
	  wrapper.func = fun;
	  return wrapper;
	}
	
	function F4(fun)
	{
	  function wrapper(a) { return function(b) { return function(c) {
	    return function(d) { return fun(a, b, c, d); }; }; };
	  }
	  wrapper.arity = 4;
	  wrapper.func = fun;
	  return wrapper;
	}
	
	function F5(fun)
	{
	  function wrapper(a) { return function(b) { return function(c) {
	    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
	  }
	  wrapper.arity = 5;
	  wrapper.func = fun;
	  return wrapper;
	}
	
	function F6(fun)
	{
	  function wrapper(a) { return function(b) { return function(c) {
	    return function(d) { return function(e) { return function(f) {
	    return fun(a, b, c, d, e, f); }; }; }; }; };
	  }
	  wrapper.arity = 6;
	  wrapper.func = fun;
	  return wrapper;
	}
	
	function F7(fun)
	{
	  function wrapper(a) { return function(b) { return function(c) {
	    return function(d) { return function(e) { return function(f) {
	    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
	  }
	  wrapper.arity = 7;
	  wrapper.func = fun;
	  return wrapper;
	}
	
	function F8(fun)
	{
	  function wrapper(a) { return function(b) { return function(c) {
	    return function(d) { return function(e) { return function(f) {
	    return function(g) { return function(h) {
	    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
	  }
	  wrapper.arity = 8;
	  wrapper.func = fun;
	  return wrapper;
	}
	
	function F9(fun)
	{
	  function wrapper(a) { return function(b) { return function(c) {
	    return function(d) { return function(e) { return function(f) {
	    return function(g) { return function(h) { return function(i) {
	    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
	  }
	  wrapper.arity = 9;
	  wrapper.func = fun;
	  return wrapper;
	}
	
	function A2(fun, a, b)
	{
	  return fun.arity === 2
	    ? fun.func(a, b)
	    : fun(a)(b);
	}
	function A3(fun, a, b, c)
	{
	  return fun.arity === 3
	    ? fun.func(a, b, c)
	    : fun(a)(b)(c);
	}
	function A4(fun, a, b, c, d)
	{
	  return fun.arity === 4
	    ? fun.func(a, b, c, d)
	    : fun(a)(b)(c)(d);
	}
	function A5(fun, a, b, c, d, e)
	{
	  return fun.arity === 5
	    ? fun.func(a, b, c, d, e)
	    : fun(a)(b)(c)(d)(e);
	}
	function A6(fun, a, b, c, d, e, f)
	{
	  return fun.arity === 6
	    ? fun.func(a, b, c, d, e, f)
	    : fun(a)(b)(c)(d)(e)(f);
	}
	function A7(fun, a, b, c, d, e, f, g)
	{
	  return fun.arity === 7
	    ? fun.func(a, b, c, d, e, f, g)
	    : fun(a)(b)(c)(d)(e)(f)(g);
	}
	function A8(fun, a, b, c, d, e, f, g, h)
	{
	  return fun.arity === 8
	    ? fun.func(a, b, c, d, e, f, g, h)
	    : fun(a)(b)(c)(d)(e)(f)(g)(h);
	}
	function A9(fun, a, b, c, d, e, f, g, h, i)
	{
	  return fun.arity === 9
	    ? fun.func(a, b, c, d, e, f, g, h, i)
	    : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
	}
	
	//import Native.Utils //
	
	var _elm_lang$core$Native_Basics = function() {
	
	function div(a, b)
	{
		return (a / b) | 0;
	}
	function rem(a, b)
	{
		return a % b;
	}
	function mod(a, b)
	{
		if (b === 0)
		{
			throw new Error('Cannot perform mod 0. Division by zero error.');
		}
		var r = a % b;
		var m = a === 0 ? 0 : (b > 0 ? (a >= 0 ? r : r + b) : -mod(-a, -b));
	
		return m === b ? 0 : m;
	}
	function logBase(base, n)
	{
		return Math.log(n) / Math.log(base);
	}
	function negate(n)
	{
		return -n;
	}
	function abs(n)
	{
		return n < 0 ? -n : n;
	}
	
	function min(a, b)
	{
		return _elm_lang$core$Native_Utils.cmp(a, b) < 0 ? a : b;
	}
	function max(a, b)
	{
		return _elm_lang$core$Native_Utils.cmp(a, b) > 0 ? a : b;
	}
	function clamp(lo, hi, n)
	{
		return _elm_lang$core$Native_Utils.cmp(n, lo) < 0
			? lo
			: _elm_lang$core$Native_Utils.cmp(n, hi) > 0
				? hi
				: n;
	}
	
	var ord = ['LT', 'EQ', 'GT'];
	
	function compare(x, y)
	{
		return { ctor: ord[_elm_lang$core$Native_Utils.cmp(x, y) + 1] };
	}
	
	function xor(a, b)
	{
		return a !== b;
	}
	function not(b)
	{
		return !b;
	}
	function isInfinite(n)
	{
		return n === Infinity || n === -Infinity;
	}
	
	function truncate(n)
	{
		return n | 0;
	}
	
	function degrees(d)
	{
		return d * Math.PI / 180;
	}
	function turns(t)
	{
		return 2 * Math.PI * t;
	}
	function fromPolar(point)
	{
		var r = point._0;
		var t = point._1;
		return _elm_lang$core$Native_Utils.Tuple2(r * Math.cos(t), r * Math.sin(t));
	}
	function toPolar(point)
	{
		var x = point._0;
		var y = point._1;
		return _elm_lang$core$Native_Utils.Tuple2(Math.sqrt(x * x + y * y), Math.atan2(y, x));
	}
	
	return {
		div: F2(div),
		rem: F2(rem),
		mod: F2(mod),
	
		pi: Math.PI,
		e: Math.E,
		cos: Math.cos,
		sin: Math.sin,
		tan: Math.tan,
		acos: Math.acos,
		asin: Math.asin,
		atan: Math.atan,
		atan2: F2(Math.atan2),
	
		degrees: degrees,
		turns: turns,
		fromPolar: fromPolar,
		toPolar: toPolar,
	
		sqrt: Math.sqrt,
		logBase: F2(logBase),
		negate: negate,
		abs: abs,
		min: F2(min),
		max: F2(max),
		clamp: F3(clamp),
		compare: F2(compare),
	
		xor: F2(xor),
		not: not,
	
		truncate: truncate,
		ceiling: Math.ceil,
		floor: Math.floor,
		round: Math.round,
		toFloat: function(x) { return x; },
		isNaN: isNaN,
		isInfinite: isInfinite
	};
	
	}();
	//import //
	
	var _elm_lang$core$Native_Utils = function() {
	
	// COMPARISONS
	
	function eq(x, y)
	{
		var stack = [];
		var isEqual = eqHelp(x, y, 0, stack);
		var pair;
		while (isEqual && (pair = stack.pop()))
		{
			isEqual = eqHelp(pair.x, pair.y, 0, stack);
		}
		return isEqual;
	}
	
	
	function eqHelp(x, y, depth, stack)
	{
		if (depth > 100)
		{
			stack.push({ x: x, y: y });
			return true;
		}
	
		if (x === y)
		{
			return true;
		}
	
		if (typeof x !== 'object')
		{
			if (typeof x === 'function')
			{
				throw new Error(
					'Trying to use `(==)` on functions. There is no way to know if functions are "the same" in the Elm sense.'
					+ ' Read more about this at http://package.elm-lang.org/packages/elm-lang/core/latest/Basics#=='
					+ ' which describes why it is this way and what the better version will look like.'
				);
			}
			return false;
		}
	
		if (x === null || y === null)
		{
			return false
		}
	
		if (x instanceof Date)
		{
			return x.getTime() === y.getTime();
		}
	
		if (!('ctor' in x))
		{
			for (var key in x)
			{
				if (!eqHelp(x[key], y[key], depth + 1, stack))
				{
					return false;
				}
			}
			return true;
		}
	
		// convert Dicts and Sets to lists
		if (x.ctor === 'RBNode_elm_builtin' || x.ctor === 'RBEmpty_elm_builtin')
		{
			x = _elm_lang$core$Dict$toList(x);
			y = _elm_lang$core$Dict$toList(y);
		}
		if (x.ctor === 'Set_elm_builtin')
		{
			x = _elm_lang$core$Set$toList(x);
			y = _elm_lang$core$Set$toList(y);
		}
	
		// check if lists are equal without recursion
		if (x.ctor === '::')
		{
			var a = x;
			var b = y;
			while (a.ctor === '::' && b.ctor === '::')
			{
				if (!eqHelp(a._0, b._0, depth + 1, stack))
				{
					return false;
				}
				a = a._1;
				b = b._1;
			}
			return a.ctor === b.ctor;
		}
	
		// check if Arrays are equal
		if (x.ctor === '_Array')
		{
			var xs = _elm_lang$core$Native_Array.toJSArray(x);
			var ys = _elm_lang$core$Native_Array.toJSArray(y);
			if (xs.length !== ys.length)
			{
				return false;
			}
			for (var i = 0; i < xs.length; i++)
			{
				if (!eqHelp(xs[i], ys[i], depth + 1, stack))
				{
					return false;
				}
			}
			return true;
		}
	
		if (!eqHelp(x.ctor, y.ctor, depth + 1, stack))
		{
			return false;
		}
	
		for (var key in x)
		{
			if (!eqHelp(x[key], y[key], depth + 1, stack))
			{
				return false;
			}
		}
		return true;
	}
	
	// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
	// the particular integer values assigned to LT, EQ, and GT.
	
	var LT = -1, EQ = 0, GT = 1;
	
	function cmp(x, y)
	{
		if (typeof x !== 'object')
		{
			return x === y ? EQ : x < y ? LT : GT;
		}
	
		if (x instanceof String)
		{
			var a = x.valueOf();
			var b = y.valueOf();
			return a === b ? EQ : a < b ? LT : GT;
		}
	
		if (x.ctor === '::' || x.ctor === '[]')
		{
			while (x.ctor === '::' && y.ctor === '::')
			{
				var ord = cmp(x._0, y._0);
				if (ord !== EQ)
				{
					return ord;
				}
				x = x._1;
				y = y._1;
			}
			return x.ctor === y.ctor ? EQ : x.ctor === '[]' ? LT : GT;
		}
	
		if (x.ctor.slice(0, 6) === '_Tuple')
		{
			var ord;
			var n = x.ctor.slice(6) - 0;
			var err = 'cannot compare tuples with more than 6 elements.';
			if (n === 0) return EQ;
			if (n >= 1) { ord = cmp(x._0, y._0); if (ord !== EQ) return ord;
			if (n >= 2) { ord = cmp(x._1, y._1); if (ord !== EQ) return ord;
			if (n >= 3) { ord = cmp(x._2, y._2); if (ord !== EQ) return ord;
			if (n >= 4) { ord = cmp(x._3, y._3); if (ord !== EQ) return ord;
			if (n >= 5) { ord = cmp(x._4, y._4); if (ord !== EQ) return ord;
			if (n >= 6) { ord = cmp(x._5, y._5); if (ord !== EQ) return ord;
			if (n >= 7) throw new Error('Comparison error: ' + err); } } } } } }
			return EQ;
		}
	
		throw new Error(
			'Comparison error: comparison is only defined on ints, '
			+ 'floats, times, chars, strings, lists of comparable values, '
			+ 'and tuples of comparable values.'
		);
	}
	
	
	// COMMON VALUES
	
	var Tuple0 = {
		ctor: '_Tuple0'
	};
	
	function Tuple2(x, y)
	{
		return {
			ctor: '_Tuple2',
			_0: x,
			_1: y
		};
	}
	
	function chr(c)
	{
		return new String(c);
	}
	
	
	// GUID
	
	var count = 0;
	function guid(_)
	{
		return count++;
	}
	
	
	// RECORDS
	
	function update(oldRecord, updatedFields)
	{
		var newRecord = {};
		for (var key in oldRecord)
		{
			var value = (key in updatedFields) ? updatedFields[key] : oldRecord[key];
			newRecord[key] = value;
		}
		return newRecord;
	}
	
	
	//// LIST STUFF ////
	
	var Nil = { ctor: '[]' };
	
	function Cons(hd, tl)
	{
		return {
			ctor: '::',
			_0: hd,
			_1: tl
		};
	}
	
	function append(xs, ys)
	{
		// append Strings
		if (typeof xs === 'string')
		{
			return xs + ys;
		}
	
		// append Lists
		if (xs.ctor === '[]')
		{
			return ys;
		}
		var root = Cons(xs._0, Nil);
		var curr = root;
		xs = xs._1;
		while (xs.ctor !== '[]')
		{
			curr._1 = Cons(xs._0, Nil);
			xs = xs._1;
			curr = curr._1;
		}
		curr._1 = ys;
		return root;
	}
	
	
	// CRASHES
	
	function crash(moduleName, region)
	{
		return function(message) {
			throw new Error(
				'Ran into a `Debug.crash` in module `' + moduleName + '` ' + regionToString(region) + '\n'
				+ 'The message provided by the code author is:\n\n    '
				+ message
			);
		};
	}
	
	function crashCase(moduleName, region, value)
	{
		return function(message) {
			throw new Error(
				'Ran into a `Debug.crash` in module `' + moduleName + '`\n\n'
				+ 'This was caused by the `case` expression ' + regionToString(region) + '.\n'
				+ 'One of the branches ended with a crash and the following value got through:\n\n    ' + toString(value) + '\n\n'
				+ 'The message provided by the code author is:\n\n    '
				+ message
			);
		};
	}
	
	function regionToString(region)
	{
		if (region.start.line == region.end.line)
		{
			return 'on line ' + region.start.line;
		}
		return 'between lines ' + region.start.line + ' and ' + region.end.line;
	}
	
	
	// TO STRING
	
	function toString(v)
	{
		var type = typeof v;
		if (type === 'function')
		{
			var name = v.func ? v.func.name : v.name;
			return '<function' + (name === '' ? '' : ':') + name + '>';
		}
	
		if (type === 'boolean')
		{
			return v ? 'True' : 'False';
		}
	
		if (type === 'number')
		{
			return v + '';
		}
	
		if (v instanceof String)
		{
			return '\'' + addSlashes(v, true) + '\'';
		}
	
		if (type === 'string')
		{
			return '"' + addSlashes(v, false) + '"';
		}
	
		if (v === null)
		{
			return 'null';
		}
	
		if (type === 'object' && 'ctor' in v)
		{
			var ctorStarter = v.ctor.substring(0, 5);
	
			if (ctorStarter === '_Tupl')
			{
				var output = [];
				for (var k in v)
				{
					if (k === 'ctor') continue;
					output.push(toString(v[k]));
				}
				return '(' + output.join(',') + ')';
			}
	
			if (ctorStarter === '_Task')
			{
				return '<task>'
			}
	
			if (v.ctor === '_Array')
			{
				var list = _elm_lang$core$Array$toList(v);
				return 'Array.fromList ' + toString(list);
			}
	
			if (v.ctor === '<decoder>')
			{
				return '<decoder>';
			}
	
			if (v.ctor === '_Process')
			{
				return '<process:' + v.id + '>';
			}
	
			if (v.ctor === '::')
			{
				var output = '[' + toString(v._0);
				v = v._1;
				while (v.ctor === '::')
				{
					output += ',' + toString(v._0);
					v = v._1;
				}
				return output + ']';
			}
	
			if (v.ctor === '[]')
			{
				return '[]';
			}
	
			if (v.ctor === 'Set_elm_builtin')
			{
				return 'Set.fromList ' + toString(_elm_lang$core$Set$toList(v));
			}
	
			if (v.ctor === 'RBNode_elm_builtin' || v.ctor === 'RBEmpty_elm_builtin')
			{
				return 'Dict.fromList ' + toString(_elm_lang$core$Dict$toList(v));
			}
	
			var output = '';
			for (var i in v)
			{
				if (i === 'ctor') continue;
				var str = toString(v[i]);
				var c0 = str[0];
				var parenless = c0 === '{' || c0 === '(' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
				output += ' ' + (parenless ? str : '(' + str + ')');
			}
			return v.ctor + output;
		}
	
		if (type === 'object')
		{
			if (v instanceof Date)
			{
				return '<' + v.toString() + '>';
			}
	
			if (v.elm_web_socket)
			{
				return '<websocket>';
			}
	
			var output = [];
			for (var k in v)
			{
				output.push(k + ' = ' + toString(v[k]));
			}
			if (output.length === 0)
			{
				return '{}';
			}
			return '{ ' + output.join(', ') + ' }';
		}
	
		return '<internal structure>';
	}
	
	function addSlashes(str, isChar)
	{
		var s = str.replace(/\\/g, '\\\\')
				  .replace(/\n/g, '\\n')
				  .replace(/\t/g, '\\t')
				  .replace(/\r/g, '\\r')
				  .replace(/\v/g, '\\v')
				  .replace(/\0/g, '\\0');
		if (isChar)
		{
			return s.replace(/\'/g, '\\\'');
		}
		else
		{
			return s.replace(/\"/g, '\\"');
		}
	}
	
	
	return {
		eq: eq,
		cmp: cmp,
		Tuple0: Tuple0,
		Tuple2: Tuple2,
		chr: chr,
		update: update,
		guid: guid,
	
		append: F2(append),
	
		crash: crash,
		crashCase: crashCase,
	
		toString: toString
	};
	
	}();
	var _elm_lang$core$Basics$uncurry = F2(
		function (f, _p0) {
			var _p1 = _p0;
			return A2(f, _p1._0, _p1._1);
		});
	var _elm_lang$core$Basics$curry = F3(
		function (f, a, b) {
			return f(
				{ctor: '_Tuple2', _0: a, _1: b});
		});
	var _elm_lang$core$Basics$flip = F3(
		function (f, b, a) {
			return A2(f, a, b);
		});
	var _elm_lang$core$Basics$snd = function (_p2) {
		var _p3 = _p2;
		return _p3._1;
	};
	var _elm_lang$core$Basics$fst = function (_p4) {
		var _p5 = _p4;
		return _p5._0;
	};
	var _elm_lang$core$Basics$always = F2(
		function (a, _p6) {
			return a;
		});
	var _elm_lang$core$Basics$identity = function (x) {
		return x;
	};
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['<|'] = F2(
		function (f, x) {
			return f(x);
		});
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['|>'] = F2(
		function (x, f) {
			return f(x);
		});
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['>>'] = F3(
		function (f, g, x) {
			return g(
				f(x));
		});
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['<<'] = F3(
		function (g, f, x) {
			return g(
				f(x));
		});
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['++'] = _elm_lang$core$Native_Utils.append;
	var _elm_lang$core$Basics$toString = _elm_lang$core$Native_Utils.toString;
	var _elm_lang$core$Basics$isInfinite = _elm_lang$core$Native_Basics.isInfinite;
	var _elm_lang$core$Basics$isNaN = _elm_lang$core$Native_Basics.isNaN;
	var _elm_lang$core$Basics$toFloat = _elm_lang$core$Native_Basics.toFloat;
	var _elm_lang$core$Basics$ceiling = _elm_lang$core$Native_Basics.ceiling;
	var _elm_lang$core$Basics$floor = _elm_lang$core$Native_Basics.floor;
	var _elm_lang$core$Basics$truncate = _elm_lang$core$Native_Basics.truncate;
	var _elm_lang$core$Basics$round = _elm_lang$core$Native_Basics.round;
	var _elm_lang$core$Basics$not = _elm_lang$core$Native_Basics.not;
	var _elm_lang$core$Basics$xor = _elm_lang$core$Native_Basics.xor;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['||'] = _elm_lang$core$Native_Basics.or;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['&&'] = _elm_lang$core$Native_Basics.and;
	var _elm_lang$core$Basics$max = _elm_lang$core$Native_Basics.max;
	var _elm_lang$core$Basics$min = _elm_lang$core$Native_Basics.min;
	var _elm_lang$core$Basics$compare = _elm_lang$core$Native_Basics.compare;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['>='] = _elm_lang$core$Native_Basics.ge;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['<='] = _elm_lang$core$Native_Basics.le;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['>'] = _elm_lang$core$Native_Basics.gt;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['<'] = _elm_lang$core$Native_Basics.lt;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['/='] = _elm_lang$core$Native_Basics.neq;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['=='] = _elm_lang$core$Native_Basics.eq;
	var _elm_lang$core$Basics$e = _elm_lang$core$Native_Basics.e;
	var _elm_lang$core$Basics$pi = _elm_lang$core$Native_Basics.pi;
	var _elm_lang$core$Basics$clamp = _elm_lang$core$Native_Basics.clamp;
	var _elm_lang$core$Basics$logBase = _elm_lang$core$Native_Basics.logBase;
	var _elm_lang$core$Basics$abs = _elm_lang$core$Native_Basics.abs;
	var _elm_lang$core$Basics$negate = _elm_lang$core$Native_Basics.negate;
	var _elm_lang$core$Basics$sqrt = _elm_lang$core$Native_Basics.sqrt;
	var _elm_lang$core$Basics$atan2 = _elm_lang$core$Native_Basics.atan2;
	var _elm_lang$core$Basics$atan = _elm_lang$core$Native_Basics.atan;
	var _elm_lang$core$Basics$asin = _elm_lang$core$Native_Basics.asin;
	var _elm_lang$core$Basics$acos = _elm_lang$core$Native_Basics.acos;
	var _elm_lang$core$Basics$tan = _elm_lang$core$Native_Basics.tan;
	var _elm_lang$core$Basics$sin = _elm_lang$core$Native_Basics.sin;
	var _elm_lang$core$Basics$cos = _elm_lang$core$Native_Basics.cos;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['^'] = _elm_lang$core$Native_Basics.exp;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['%'] = _elm_lang$core$Native_Basics.mod;
	var _elm_lang$core$Basics$rem = _elm_lang$core$Native_Basics.rem;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['//'] = _elm_lang$core$Native_Basics.div;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['/'] = _elm_lang$core$Native_Basics.floatDiv;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['*'] = _elm_lang$core$Native_Basics.mul;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['-'] = _elm_lang$core$Native_Basics.sub;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['+'] = _elm_lang$core$Native_Basics.add;
	var _elm_lang$core$Basics$toPolar = _elm_lang$core$Native_Basics.toPolar;
	var _elm_lang$core$Basics$fromPolar = _elm_lang$core$Native_Basics.fromPolar;
	var _elm_lang$core$Basics$turns = _elm_lang$core$Native_Basics.turns;
	var _elm_lang$core$Basics$degrees = _elm_lang$core$Native_Basics.degrees;
	var _elm_lang$core$Basics$radians = function (t) {
		return t;
	};
	var _elm_lang$core$Basics$GT = {ctor: 'GT'};
	var _elm_lang$core$Basics$EQ = {ctor: 'EQ'};
	var _elm_lang$core$Basics$LT = {ctor: 'LT'};
	var _elm_lang$core$Basics$Never = function (a) {
		return {ctor: 'Never', _0: a};
	};
	
	//import Native.Utils //
	
	var _elm_lang$core$Native_Debug = function() {
	
	function log(tag, value)
	{
		var msg = tag + ': ' + _elm_lang$core$Native_Utils.toString(value);
		var process = process || {};
		if (process.stdout)
		{
			process.stdout.write(msg);
		}
		else
		{
			console.log(msg);
		}
		return value;
	}
	
	function crash(message)
	{
		throw new Error(message);
	}
	
	return {
		crash: crash,
		log: F2(log)
	};
	
	}();
	var _elm_lang$core$Debug$crash = _elm_lang$core$Native_Debug.crash;
	var _elm_lang$core$Debug$log = _elm_lang$core$Native_Debug.log;
	
	var _elm_lang$core$Maybe$withDefault = F2(
		function ($default, maybe) {
			var _p0 = maybe;
			if (_p0.ctor === 'Just') {
				return _p0._0;
			} else {
				return $default;
			}
		});
	var _elm_lang$core$Maybe$Nothing = {ctor: 'Nothing'};
	var _elm_lang$core$Maybe$oneOf = function (maybes) {
		oneOf:
		while (true) {
			var _p1 = maybes;
			if (_p1.ctor === '[]') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				var _p3 = _p1._0;
				var _p2 = _p3;
				if (_p2.ctor === 'Nothing') {
					var _v3 = _p1._1;
					maybes = _v3;
					continue oneOf;
				} else {
					return _p3;
				}
			}
		}
	};
	var _elm_lang$core$Maybe$andThen = F2(
		function (maybeValue, callback) {
			var _p4 = maybeValue;
			if (_p4.ctor === 'Just') {
				return callback(_p4._0);
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		});
	var _elm_lang$core$Maybe$Just = function (a) {
		return {ctor: 'Just', _0: a};
	};
	var _elm_lang$core$Maybe$map = F2(
		function (f, maybe) {
			var _p5 = maybe;
			if (_p5.ctor === 'Just') {
				return _elm_lang$core$Maybe$Just(
					f(_p5._0));
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		});
	var _elm_lang$core$Maybe$map2 = F3(
		function (func, ma, mb) {
			var _p6 = {ctor: '_Tuple2', _0: ma, _1: mb};
			if (((_p6.ctor === '_Tuple2') && (_p6._0.ctor === 'Just')) && (_p6._1.ctor === 'Just')) {
				return _elm_lang$core$Maybe$Just(
					A2(func, _p6._0._0, _p6._1._0));
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		});
	var _elm_lang$core$Maybe$map3 = F4(
		function (func, ma, mb, mc) {
			var _p7 = {ctor: '_Tuple3', _0: ma, _1: mb, _2: mc};
			if ((((_p7.ctor === '_Tuple3') && (_p7._0.ctor === 'Just')) && (_p7._1.ctor === 'Just')) && (_p7._2.ctor === 'Just')) {
				return _elm_lang$core$Maybe$Just(
					A3(func, _p7._0._0, _p7._1._0, _p7._2._0));
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		});
	var _elm_lang$core$Maybe$map4 = F5(
		function (func, ma, mb, mc, md) {
			var _p8 = {ctor: '_Tuple4', _0: ma, _1: mb, _2: mc, _3: md};
			if (((((_p8.ctor === '_Tuple4') && (_p8._0.ctor === 'Just')) && (_p8._1.ctor === 'Just')) && (_p8._2.ctor === 'Just')) && (_p8._3.ctor === 'Just')) {
				return _elm_lang$core$Maybe$Just(
					A4(func, _p8._0._0, _p8._1._0, _p8._2._0, _p8._3._0));
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		});
	var _elm_lang$core$Maybe$map5 = F6(
		function (func, ma, mb, mc, md, me) {
			var _p9 = {ctor: '_Tuple5', _0: ma, _1: mb, _2: mc, _3: md, _4: me};
			if ((((((_p9.ctor === '_Tuple5') && (_p9._0.ctor === 'Just')) && (_p9._1.ctor === 'Just')) && (_p9._2.ctor === 'Just')) && (_p9._3.ctor === 'Just')) && (_p9._4.ctor === 'Just')) {
				return _elm_lang$core$Maybe$Just(
					A5(func, _p9._0._0, _p9._1._0, _p9._2._0, _p9._3._0, _p9._4._0));
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		});
	
	//import Native.Utils //
	
	var _elm_lang$core$Native_List = function() {
	
	var Nil = { ctor: '[]' };
	
	function Cons(hd, tl)
	{
		return { ctor: '::', _0: hd, _1: tl };
	}
	
	function fromArray(arr)
	{
		var out = Nil;
		for (var i = arr.length; i--; )
		{
			out = Cons(arr[i], out);
		}
		return out;
	}
	
	function toArray(xs)
	{
		var out = [];
		while (xs.ctor !== '[]')
		{
			out.push(xs._0);
			xs = xs._1;
		}
		return out;
	}
	
	
	function range(lo, hi)
	{
		var list = Nil;
		if (lo <= hi)
		{
			do
			{
				list = Cons(hi, list);
			}
			while (hi-- > lo);
		}
		return list;
	}
	
	function foldr(f, b, xs)
	{
		var arr = toArray(xs);
		var acc = b;
		for (var i = arr.length; i--; )
		{
			acc = A2(f, arr[i], acc);
		}
		return acc;
	}
	
	function map2(f, xs, ys)
	{
		var arr = [];
		while (xs.ctor !== '[]' && ys.ctor !== '[]')
		{
			arr.push(A2(f, xs._0, ys._0));
			xs = xs._1;
			ys = ys._1;
		}
		return fromArray(arr);
	}
	
	function map3(f, xs, ys, zs)
	{
		var arr = [];
		while (xs.ctor !== '[]' && ys.ctor !== '[]' && zs.ctor !== '[]')
		{
			arr.push(A3(f, xs._0, ys._0, zs._0));
			xs = xs._1;
			ys = ys._1;
			zs = zs._1;
		}
		return fromArray(arr);
	}
	
	function map4(f, ws, xs, ys, zs)
	{
		var arr = [];
		while (   ws.ctor !== '[]'
			   && xs.ctor !== '[]'
			   && ys.ctor !== '[]'
			   && zs.ctor !== '[]')
		{
			arr.push(A4(f, ws._0, xs._0, ys._0, zs._0));
			ws = ws._1;
			xs = xs._1;
			ys = ys._1;
			zs = zs._1;
		}
		return fromArray(arr);
	}
	
	function map5(f, vs, ws, xs, ys, zs)
	{
		var arr = [];
		while (   vs.ctor !== '[]'
			   && ws.ctor !== '[]'
			   && xs.ctor !== '[]'
			   && ys.ctor !== '[]'
			   && zs.ctor !== '[]')
		{
			arr.push(A5(f, vs._0, ws._0, xs._0, ys._0, zs._0));
			vs = vs._1;
			ws = ws._1;
			xs = xs._1;
			ys = ys._1;
			zs = zs._1;
		}
		return fromArray(arr);
	}
	
	function sortBy(f, xs)
	{
		return fromArray(toArray(xs).sort(function(a, b) {
			return _elm_lang$core$Native_Utils.cmp(f(a), f(b));
		}));
	}
	
	function sortWith(f, xs)
	{
		return fromArray(toArray(xs).sort(function(a, b) {
			var ord = f(a)(b).ctor;
			return ord === 'EQ' ? 0 : ord === 'LT' ? -1 : 1;
		}));
	}
	
	return {
		Nil: Nil,
		Cons: Cons,
		cons: F2(Cons),
		toArray: toArray,
		fromArray: fromArray,
		range: range,
	
		foldr: F3(foldr),
	
		map2: F3(map2),
		map3: F4(map3),
		map4: F5(map4),
		map5: F6(map5),
		sortBy: F2(sortBy),
		sortWith: F2(sortWith)
	};
	
	}();
	var _elm_lang$core$List$sortWith = _elm_lang$core$Native_List.sortWith;
	var _elm_lang$core$List$sortBy = _elm_lang$core$Native_List.sortBy;
	var _elm_lang$core$List$sort = function (xs) {
		return A2(_elm_lang$core$List$sortBy, _elm_lang$core$Basics$identity, xs);
	};
	var _elm_lang$core$List$drop = F2(
		function (n, list) {
			drop:
			while (true) {
				if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
					return list;
				} else {
					var _p0 = list;
					if (_p0.ctor === '[]') {
						return list;
					} else {
						var _v1 = n - 1,
							_v2 = _p0._1;
						n = _v1;
						list = _v2;
						continue drop;
					}
				}
			}
		});
	var _elm_lang$core$List$map5 = _elm_lang$core$Native_List.map5;
	var _elm_lang$core$List$map4 = _elm_lang$core$Native_List.map4;
	var _elm_lang$core$List$map3 = _elm_lang$core$Native_List.map3;
	var _elm_lang$core$List$map2 = _elm_lang$core$Native_List.map2;
	var _elm_lang$core$List$any = F2(
		function (isOkay, list) {
			any:
			while (true) {
				var _p1 = list;
				if (_p1.ctor === '[]') {
					return false;
				} else {
					if (isOkay(_p1._0)) {
						return true;
					} else {
						var _v4 = isOkay,
							_v5 = _p1._1;
						isOkay = _v4;
						list = _v5;
						continue any;
					}
				}
			}
		});
	var _elm_lang$core$List$all = F2(
		function (isOkay, list) {
			return _elm_lang$core$Basics$not(
				A2(
					_elm_lang$core$List$any,
					function (_p2) {
						return _elm_lang$core$Basics$not(
							isOkay(_p2));
					},
					list));
		});
	var _elm_lang$core$List$foldr = _elm_lang$core$Native_List.foldr;
	var _elm_lang$core$List$foldl = F3(
		function (func, acc, list) {
			foldl:
			while (true) {
				var _p3 = list;
				if (_p3.ctor === '[]') {
					return acc;
				} else {
					var _v7 = func,
						_v8 = A2(func, _p3._0, acc),
						_v9 = _p3._1;
					func = _v7;
					acc = _v8;
					list = _v9;
					continue foldl;
				}
			}
		});
	var _elm_lang$core$List$length = function (xs) {
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (_p4, i) {
					return i + 1;
				}),
			0,
			xs);
	};
	var _elm_lang$core$List$sum = function (numbers) {
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (x, y) {
					return x + y;
				}),
			0,
			numbers);
	};
	var _elm_lang$core$List$product = function (numbers) {
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (x, y) {
					return x * y;
				}),
			1,
			numbers);
	};
	var _elm_lang$core$List$maximum = function (list) {
		var _p5 = list;
		if (_p5.ctor === '::') {
			return _elm_lang$core$Maybe$Just(
				A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$max, _p5._0, _p5._1));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	};
	var _elm_lang$core$List$minimum = function (list) {
		var _p6 = list;
		if (_p6.ctor === '::') {
			return _elm_lang$core$Maybe$Just(
				A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$min, _p6._0, _p6._1));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	};
	var _elm_lang$core$List$indexedMap = F2(
		function (f, xs) {
			return A3(
				_elm_lang$core$List$map2,
				f,
				_elm_lang$core$Native_List.range(
					0,
					_elm_lang$core$List$length(xs) - 1),
				xs);
		});
	var _elm_lang$core$List$member = F2(
		function (x, xs) {
			return A2(
				_elm_lang$core$List$any,
				function (a) {
					return _elm_lang$core$Native_Utils.eq(a, x);
				},
				xs);
		});
	var _elm_lang$core$List$isEmpty = function (xs) {
		var _p7 = xs;
		if (_p7.ctor === '[]') {
			return true;
		} else {
			return false;
		}
	};
	var _elm_lang$core$List$tail = function (list) {
		var _p8 = list;
		if (_p8.ctor === '::') {
			return _elm_lang$core$Maybe$Just(_p8._1);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	};
	var _elm_lang$core$List$head = function (list) {
		var _p9 = list;
		if (_p9.ctor === '::') {
			return _elm_lang$core$Maybe$Just(_p9._0);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	};
	var _elm_lang$core$List_ops = _elm_lang$core$List_ops || {};
	_elm_lang$core$List_ops['::'] = _elm_lang$core$Native_List.cons;
	var _elm_lang$core$List$map = F2(
		function (f, xs) {
			return A3(
				_elm_lang$core$List$foldr,
				F2(
					function (x, acc) {
						return A2(
							_elm_lang$core$List_ops['::'],
							f(x),
							acc);
					}),
				_elm_lang$core$Native_List.fromArray(
					[]),
				xs);
		});
	var _elm_lang$core$List$filter = F2(
		function (pred, xs) {
			var conditionalCons = F2(
				function (x, xs$) {
					return pred(x) ? A2(_elm_lang$core$List_ops['::'], x, xs$) : xs$;
				});
			return A3(
				_elm_lang$core$List$foldr,
				conditionalCons,
				_elm_lang$core$Native_List.fromArray(
					[]),
				xs);
		});
	var _elm_lang$core$List$maybeCons = F3(
		function (f, mx, xs) {
			var _p10 = f(mx);
			if (_p10.ctor === 'Just') {
				return A2(_elm_lang$core$List_ops['::'], _p10._0, xs);
			} else {
				return xs;
			}
		});
	var _elm_lang$core$List$filterMap = F2(
		function (f, xs) {
			return A3(
				_elm_lang$core$List$foldr,
				_elm_lang$core$List$maybeCons(f),
				_elm_lang$core$Native_List.fromArray(
					[]),
				xs);
		});
	var _elm_lang$core$List$reverse = function (list) {
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (x, y) {
					return A2(_elm_lang$core$List_ops['::'], x, y);
				}),
			_elm_lang$core$Native_List.fromArray(
				[]),
			list);
	};
	var _elm_lang$core$List$scanl = F3(
		function (f, b, xs) {
			var scan1 = F2(
				function (x, accAcc) {
					var _p11 = accAcc;
					if (_p11.ctor === '::') {
						return A2(
							_elm_lang$core$List_ops['::'],
							A2(f, x, _p11._0),
							accAcc);
					} else {
						return _elm_lang$core$Native_List.fromArray(
							[]);
					}
				});
			return _elm_lang$core$List$reverse(
				A3(
					_elm_lang$core$List$foldl,
					scan1,
					_elm_lang$core$Native_List.fromArray(
						[b]),
					xs));
		});
	var _elm_lang$core$List$append = F2(
		function (xs, ys) {
			var _p12 = ys;
			if (_p12.ctor === '[]') {
				return xs;
			} else {
				return A3(
					_elm_lang$core$List$foldr,
					F2(
						function (x, y) {
							return A2(_elm_lang$core$List_ops['::'], x, y);
						}),
					ys,
					xs);
			}
		});
	var _elm_lang$core$List$concat = function (lists) {
		return A3(
			_elm_lang$core$List$foldr,
			_elm_lang$core$List$append,
			_elm_lang$core$Native_List.fromArray(
				[]),
			lists);
	};
	var _elm_lang$core$List$concatMap = F2(
		function (f, list) {
			return _elm_lang$core$List$concat(
				A2(_elm_lang$core$List$map, f, list));
		});
	var _elm_lang$core$List$partition = F2(
		function (pred, list) {
			var step = F2(
				function (x, _p13) {
					var _p14 = _p13;
					var _p16 = _p14._0;
					var _p15 = _p14._1;
					return pred(x) ? {
						ctor: '_Tuple2',
						_0: A2(_elm_lang$core$List_ops['::'], x, _p16),
						_1: _p15
					} : {
						ctor: '_Tuple2',
						_0: _p16,
						_1: A2(_elm_lang$core$List_ops['::'], x, _p15)
					};
				});
			return A3(
				_elm_lang$core$List$foldr,
				step,
				{
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_List.fromArray(
						[]),
					_1: _elm_lang$core$Native_List.fromArray(
						[])
				},
				list);
		});
	var _elm_lang$core$List$unzip = function (pairs) {
		var step = F2(
			function (_p18, _p17) {
				var _p19 = _p18;
				var _p20 = _p17;
				return {
					ctor: '_Tuple2',
					_0: A2(_elm_lang$core$List_ops['::'], _p19._0, _p20._0),
					_1: A2(_elm_lang$core$List_ops['::'], _p19._1, _p20._1)
				};
			});
		return A3(
			_elm_lang$core$List$foldr,
			step,
			{
				ctor: '_Tuple2',
				_0: _elm_lang$core$Native_List.fromArray(
					[]),
				_1: _elm_lang$core$Native_List.fromArray(
					[])
			},
			pairs);
	};
	var _elm_lang$core$List$intersperse = F2(
		function (sep, xs) {
			var _p21 = xs;
			if (_p21.ctor === '[]') {
				return _elm_lang$core$Native_List.fromArray(
					[]);
			} else {
				var step = F2(
					function (x, rest) {
						return A2(
							_elm_lang$core$List_ops['::'],
							sep,
							A2(_elm_lang$core$List_ops['::'], x, rest));
					});
				var spersed = A3(
					_elm_lang$core$List$foldr,
					step,
					_elm_lang$core$Native_List.fromArray(
						[]),
					_p21._1);
				return A2(_elm_lang$core$List_ops['::'], _p21._0, spersed);
			}
		});
	var _elm_lang$core$List$takeReverse = F3(
		function (n, list, taken) {
			takeReverse:
			while (true) {
				if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
					return taken;
				} else {
					var _p22 = list;
					if (_p22.ctor === '[]') {
						return taken;
					} else {
						var _v23 = n - 1,
							_v24 = _p22._1,
							_v25 = A2(_elm_lang$core$List_ops['::'], _p22._0, taken);
						n = _v23;
						list = _v24;
						taken = _v25;
						continue takeReverse;
					}
				}
			}
		});
	var _elm_lang$core$List$takeTailRec = F2(
		function (n, list) {
			return _elm_lang$core$List$reverse(
				A3(
					_elm_lang$core$List$takeReverse,
					n,
					list,
					_elm_lang$core$Native_List.fromArray(
						[])));
		});
	var _elm_lang$core$List$takeFast = F3(
		function (ctr, n, list) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return _elm_lang$core$Native_List.fromArray(
					[]);
			} else {
				var _p23 = {ctor: '_Tuple2', _0: n, _1: list};
				_v26_5:
				do {
					_v26_1:
					do {
						if (_p23.ctor === '_Tuple2') {
							if (_p23._1.ctor === '[]') {
								return list;
							} else {
								if (_p23._1._1.ctor === '::') {
									switch (_p23._0) {
										case 1:
											break _v26_1;
										case 2:
											return _elm_lang$core$Native_List.fromArray(
												[_p23._1._0, _p23._1._1._0]);
										case 3:
											if (_p23._1._1._1.ctor === '::') {
												return _elm_lang$core$Native_List.fromArray(
													[_p23._1._0, _p23._1._1._0, _p23._1._1._1._0]);
											} else {
												break _v26_5;
											}
										default:
											if ((_p23._1._1._1.ctor === '::') && (_p23._1._1._1._1.ctor === '::')) {
												var _p28 = _p23._1._1._1._0;
												var _p27 = _p23._1._1._0;
												var _p26 = _p23._1._0;
												var _p25 = _p23._1._1._1._1._0;
												var _p24 = _p23._1._1._1._1._1;
												return (_elm_lang$core$Native_Utils.cmp(ctr, 1000) > 0) ? A2(
													_elm_lang$core$List_ops['::'],
													_p26,
													A2(
														_elm_lang$core$List_ops['::'],
														_p27,
														A2(
															_elm_lang$core$List_ops['::'],
															_p28,
															A2(
																_elm_lang$core$List_ops['::'],
																_p25,
																A2(_elm_lang$core$List$takeTailRec, n - 4, _p24))))) : A2(
													_elm_lang$core$List_ops['::'],
													_p26,
													A2(
														_elm_lang$core$List_ops['::'],
														_p27,
														A2(
															_elm_lang$core$List_ops['::'],
															_p28,
															A2(
																_elm_lang$core$List_ops['::'],
																_p25,
																A3(_elm_lang$core$List$takeFast, ctr + 1, n - 4, _p24)))));
											} else {
												break _v26_5;
											}
									}
								} else {
									if (_p23._0 === 1) {
										break _v26_1;
									} else {
										break _v26_5;
									}
								}
							}
						} else {
							break _v26_5;
						}
					} while(false);
					return _elm_lang$core$Native_List.fromArray(
						[_p23._1._0]);
				} while(false);
				return list;
			}
		});
	var _elm_lang$core$List$take = F2(
		function (n, list) {
			return A3(_elm_lang$core$List$takeFast, 0, n, list);
		});
	var _elm_lang$core$List$repeatHelp = F3(
		function (result, n, value) {
			repeatHelp:
			while (true) {
				if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
					return result;
				} else {
					var _v27 = A2(_elm_lang$core$List_ops['::'], value, result),
						_v28 = n - 1,
						_v29 = value;
					result = _v27;
					n = _v28;
					value = _v29;
					continue repeatHelp;
				}
			}
		});
	var _elm_lang$core$List$repeat = F2(
		function (n, value) {
			return A3(
				_elm_lang$core$List$repeatHelp,
				_elm_lang$core$Native_List.fromArray(
					[]),
				n,
				value);
		});
	
	var _elm_lang$core$Result$toMaybe = function (result) {
		var _p0 = result;
		if (_p0.ctor === 'Ok') {
			return _elm_lang$core$Maybe$Just(_p0._0);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	};
	var _elm_lang$core$Result$withDefault = F2(
		function (def, result) {
			var _p1 = result;
			if (_p1.ctor === 'Ok') {
				return _p1._0;
			} else {
				return def;
			}
		});
	var _elm_lang$core$Result$Err = function (a) {
		return {ctor: 'Err', _0: a};
	};
	var _elm_lang$core$Result$andThen = F2(
		function (result, callback) {
			var _p2 = result;
			if (_p2.ctor === 'Ok') {
				return callback(_p2._0);
			} else {
				return _elm_lang$core$Result$Err(_p2._0);
			}
		});
	var _elm_lang$core$Result$Ok = function (a) {
		return {ctor: 'Ok', _0: a};
	};
	var _elm_lang$core$Result$map = F2(
		function (func, ra) {
			var _p3 = ra;
			if (_p3.ctor === 'Ok') {
				return _elm_lang$core$Result$Ok(
					func(_p3._0));
			} else {
				return _elm_lang$core$Result$Err(_p3._0);
			}
		});
	var _elm_lang$core$Result$map2 = F3(
		function (func, ra, rb) {
			var _p4 = {ctor: '_Tuple2', _0: ra, _1: rb};
			if (_p4._0.ctor === 'Ok') {
				if (_p4._1.ctor === 'Ok') {
					return _elm_lang$core$Result$Ok(
						A2(func, _p4._0._0, _p4._1._0));
				} else {
					return _elm_lang$core$Result$Err(_p4._1._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p4._0._0);
			}
		});
	var _elm_lang$core$Result$map3 = F4(
		function (func, ra, rb, rc) {
			var _p5 = {ctor: '_Tuple3', _0: ra, _1: rb, _2: rc};
			if (_p5._0.ctor === 'Ok') {
				if (_p5._1.ctor === 'Ok') {
					if (_p5._2.ctor === 'Ok') {
						return _elm_lang$core$Result$Ok(
							A3(func, _p5._0._0, _p5._1._0, _p5._2._0));
					} else {
						return _elm_lang$core$Result$Err(_p5._2._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p5._1._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p5._0._0);
			}
		});
	var _elm_lang$core$Result$map4 = F5(
		function (func, ra, rb, rc, rd) {
			var _p6 = {ctor: '_Tuple4', _0: ra, _1: rb, _2: rc, _3: rd};
			if (_p6._0.ctor === 'Ok') {
				if (_p6._1.ctor === 'Ok') {
					if (_p6._2.ctor === 'Ok') {
						if (_p6._3.ctor === 'Ok') {
							return _elm_lang$core$Result$Ok(
								A4(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0));
						} else {
							return _elm_lang$core$Result$Err(_p6._3._0);
						}
					} else {
						return _elm_lang$core$Result$Err(_p6._2._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p6._1._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p6._0._0);
			}
		});
	var _elm_lang$core$Result$map5 = F6(
		function (func, ra, rb, rc, rd, re) {
			var _p7 = {ctor: '_Tuple5', _0: ra, _1: rb, _2: rc, _3: rd, _4: re};
			if (_p7._0.ctor === 'Ok') {
				if (_p7._1.ctor === 'Ok') {
					if (_p7._2.ctor === 'Ok') {
						if (_p7._3.ctor === 'Ok') {
							if (_p7._4.ctor === 'Ok') {
								return _elm_lang$core$Result$Ok(
									A5(func, _p7._0._0, _p7._1._0, _p7._2._0, _p7._3._0, _p7._4._0));
							} else {
								return _elm_lang$core$Result$Err(_p7._4._0);
							}
						} else {
							return _elm_lang$core$Result$Err(_p7._3._0);
						}
					} else {
						return _elm_lang$core$Result$Err(_p7._2._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p7._1._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p7._0._0);
			}
		});
	var _elm_lang$core$Result$formatError = F2(
		function (f, result) {
			var _p8 = result;
			if (_p8.ctor === 'Ok') {
				return _elm_lang$core$Result$Ok(_p8._0);
			} else {
				return _elm_lang$core$Result$Err(
					f(_p8._0));
			}
		});
	var _elm_lang$core$Result$fromMaybe = F2(
		function (err, maybe) {
			var _p9 = maybe;
			if (_p9.ctor === 'Just') {
				return _elm_lang$core$Result$Ok(_p9._0);
			} else {
				return _elm_lang$core$Result$Err(err);
			}
		});
	
	//import //
	
	var _elm_lang$core$Native_Platform = function() {
	
	
	// PROGRAMS
	
	function addPublicModule(object, name, main)
	{
		var init = main ? makeEmbed(name, main) : mainIsUndefined(name);
	
		object['worker'] = function worker(flags)
		{
			return init(undefined, flags, false);
		}
	
		object['embed'] = function embed(domNode, flags)
		{
			return init(domNode, flags, true);
		}
	
		object['fullscreen'] = function fullscreen(flags)
		{
			return init(document.body, flags, true);
		};
	}
	
	
	// PROGRAM FAIL
	
	function mainIsUndefined(name)
	{
		return function(domNode)
		{
			var message = 'Cannot initialize module `' + name +
				'` because it has no `main` value!\nWhat should I show on screen?';
			domNode.innerHTML = errorHtml(message);
			throw new Error(message);
		};
	}
	
	function errorHtml(message)
	{
		return '<div style="padding-left:1em;">'
			+ '<h2 style="font-weight:normal;"><b>Oops!</b> Something went wrong when starting your Elm program.</h2>'
			+ '<pre style="padding-left:1em;">' + message + '</pre>'
			+ '</div>';
	}
	
	
	// PROGRAM SUCCESS
	
	function makeEmbed(moduleName, main)
	{
		return function embed(rootDomNode, flags, withRenderer)
		{
			try
			{
				var program = mainToProgram(moduleName, main);
				if (!withRenderer)
				{
					program.renderer = dummyRenderer;
				}
				return makeEmbedHelp(moduleName, program, rootDomNode, flags);
			}
			catch (e)
			{
				rootDomNode.innerHTML = errorHtml(e.message);
				throw e;
			}
		};
	}
	
	function dummyRenderer()
	{
		return { update: function() {} };
	}
	
	
	// MAIN TO PROGRAM
	
	function mainToProgram(moduleName, wrappedMain)
	{
		var main = wrappedMain.main;
	
		if (typeof main.init === 'undefined')
		{
			var emptyBag = batch(_elm_lang$core$Native_List.Nil);
			var noChange = _elm_lang$core$Native_Utils.Tuple2(
				_elm_lang$core$Native_Utils.Tuple0,
				emptyBag
			);
	
			return _elm_lang$virtual_dom$VirtualDom$programWithFlags({
				init: function() { return noChange; },
				view: function() { return main; },
				update: F2(function() { return noChange; }),
				subscriptions: function () { return emptyBag; }
			});
		}
	
		var flags = wrappedMain.flags;
		var init = flags
			? initWithFlags(moduleName, main.init, flags)
			: initWithoutFlags(moduleName, main.init);
	
		return _elm_lang$virtual_dom$VirtualDom$programWithFlags({
			init: init,
			view: main.view,
			update: main.update,
			subscriptions: main.subscriptions,
		});
	}
	
	function initWithoutFlags(moduleName, realInit)
	{
		return function init(flags)
		{
			if (typeof flags !== 'undefined')
			{
				throw new Error(
					'You are giving module `' + moduleName + '` an argument in JavaScript.\n'
					+ 'This module does not take arguments though! You probably need to change the\n'
					+ 'initialization code to something like `Elm.' + moduleName + '.fullscreen()`'
				);
			}
			return realInit();
		};
	}
	
	function initWithFlags(moduleName, realInit, flagDecoder)
	{
		return function init(flags)
		{
			var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
			if (result.ctor === 'Err')
			{
				throw new Error(
					'You are trying to initialize module `' + moduleName + '` with an unexpected argument.\n'
					+ 'When trying to convert it to a usable Elm value, I run into this problem:\n\n'
					+ result._0
				);
			}
			return realInit(result._0);
		};
	}
	
	
	// SETUP RUNTIME SYSTEM
	
	function makeEmbedHelp(moduleName, program, rootDomNode, flags)
	{
		var init = program.init;
		var update = program.update;
		var subscriptions = program.subscriptions;
		var view = program.view;
		var makeRenderer = program.renderer;
	
		// ambient state
		var managers = {};
		var renderer;
	
		// init and update state in main process
		var initApp = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
			var results = init(flags);
			var model = results._0;
			renderer = makeRenderer(rootDomNode, enqueue, view(model));
			var cmds = results._1;
			var subs = subscriptions(model);
			dispatchEffects(managers, cmds, subs);
			callback(_elm_lang$core$Native_Scheduler.succeed(model));
		});
	
		function onMessage(msg, model)
		{
			return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
				var results = A2(update, msg, model);
				model = results._0;
				renderer.update(view(model));
				var cmds = results._1;
				var subs = subscriptions(model);
				dispatchEffects(managers, cmds, subs);
				callback(_elm_lang$core$Native_Scheduler.succeed(model));
			});
		}
	
		var mainProcess = spawnLoop(initApp, onMessage);
	
		function enqueue(msg)
		{
			_elm_lang$core$Native_Scheduler.rawSend(mainProcess, msg);
		}
	
		var ports = setupEffects(managers, enqueue);
	
		return ports ? { ports: ports } : {};
	}
	
	
	// EFFECT MANAGERS
	
	var effectManagers = {};
	
	function setupEffects(managers, callback)
	{
		var ports;
	
		// setup all necessary effect managers
		for (var key in effectManagers)
		{
			var manager = effectManagers[key];
	
			if (manager.isForeign)
			{
				ports = ports || {};
				ports[key] = manager.tag === 'cmd'
					? setupOutgoingPort(key)
					: setupIncomingPort(key, callback);
			}
	
			managers[key] = makeManager(manager, callback);
		}
	
		return ports;
	}
	
	function makeManager(info, callback)
	{
		var router = {
			main: callback,
			self: undefined
		};
	
		var tag = info.tag;
		var onEffects = info.onEffects;
		var onSelfMsg = info.onSelfMsg;
	
		function onMessage(msg, state)
		{
			if (msg.ctor === 'self')
			{
				return A3(onSelfMsg, router, msg._0, state);
			}
	
			var fx = msg._0;
			switch (tag)
			{
				case 'cmd':
					return A3(onEffects, router, fx.cmds, state);
	
				case 'sub':
					return A3(onEffects, router, fx.subs, state);
	
				case 'fx':
					return A4(onEffects, router, fx.cmds, fx.subs, state);
			}
		}
	
		var process = spawnLoop(info.init, onMessage);
		router.self = process;
		return process;
	}
	
	function sendToApp(router, msg)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
		{
			router.main(msg);
			callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
		});
	}
	
	function sendToSelf(router, msg)
	{
		return A2(_elm_lang$core$Native_Scheduler.send, router.self, {
			ctor: 'self',
			_0: msg
		});
	}
	
	
	// HELPER for STATEFUL LOOPS
	
	function spawnLoop(init, onMessage)
	{
		var andThen = _elm_lang$core$Native_Scheduler.andThen;
	
		function loop(state)
		{
			var handleMsg = _elm_lang$core$Native_Scheduler.receive(function(msg) {
				return onMessage(msg, state);
			});
			return A2(andThen, handleMsg, loop);
		}
	
		var task = A2(andThen, init, loop);
	
		return _elm_lang$core$Native_Scheduler.rawSpawn(task);
	}
	
	
	// BAGS
	
	function leaf(home)
	{
		return function(value)
		{
			return {
				type: 'leaf',
				home: home,
				value: value
			};
		};
	}
	
	function batch(list)
	{
		return {
			type: 'node',
			branches: list
		};
	}
	
	function map(tagger, bag)
	{
		return {
			type: 'map',
			tagger: tagger,
			tree: bag
		}
	}
	
	
	// PIPE BAGS INTO EFFECT MANAGERS
	
	function dispatchEffects(managers, cmdBag, subBag)
	{
		var effectsDict = {};
		gatherEffects(true, cmdBag, effectsDict, null);
		gatherEffects(false, subBag, effectsDict, null);
	
		for (var home in managers)
		{
			var fx = home in effectsDict
				? effectsDict[home]
				: {
					cmds: _elm_lang$core$Native_List.Nil,
					subs: _elm_lang$core$Native_List.Nil
				};
	
			_elm_lang$core$Native_Scheduler.rawSend(managers[home], { ctor: 'fx', _0: fx });
		}
	}
	
	function gatherEffects(isCmd, bag, effectsDict, taggers)
	{
		switch (bag.type)
		{
			case 'leaf':
				var home = bag.home;
				var effect = toEffect(isCmd, home, taggers, bag.value);
				effectsDict[home] = insert(isCmd, effect, effectsDict[home]);
				return;
	
			case 'node':
				var list = bag.branches;
				while (list.ctor !== '[]')
				{
					gatherEffects(isCmd, list._0, effectsDict, taggers);
					list = list._1;
				}
				return;
	
			case 'map':
				gatherEffects(isCmd, bag.tree, effectsDict, {
					tagger: bag.tagger,
					rest: taggers
				});
				return;
		}
	}
	
	function toEffect(isCmd, home, taggers, value)
	{
		function applyTaggers(x)
		{
			var temp = taggers;
			while (temp)
			{
				x = temp.tagger(x);
				temp = temp.rest;
			}
			return x;
		}
	
		var map = isCmd
			? effectManagers[home].cmdMap
			: effectManagers[home].subMap;
	
		return A2(map, applyTaggers, value)
	}
	
	function insert(isCmd, newEffect, effects)
	{
		effects = effects || {
			cmds: _elm_lang$core$Native_List.Nil,
			subs: _elm_lang$core$Native_List.Nil
		};
		if (isCmd)
		{
			effects.cmds = _elm_lang$core$Native_List.Cons(newEffect, effects.cmds);
			return effects;
		}
		effects.subs = _elm_lang$core$Native_List.Cons(newEffect, effects.subs);
		return effects;
	}
	
	
	// PORTS
	
	function checkPortName(name)
	{
		if (name in effectManagers)
		{
			throw new Error('There can only be one port named `' + name + '`, but your program has multiple.');
		}
	}
	
	
	// OUTGOING PORTS
	
	function outgoingPort(name, converter)
	{
		checkPortName(name);
		effectManagers[name] = {
			tag: 'cmd',
			cmdMap: outgoingPortMap,
			converter: converter,
			isForeign: true
		};
		return leaf(name);
	}
	
	var outgoingPortMap = F2(function cmdMap(tagger, value) {
		return value;
	});
	
	function setupOutgoingPort(name)
	{
		var subs = [];
		var converter = effectManagers[name].converter;
	
		// CREATE MANAGER
	
		var init = _elm_lang$core$Native_Scheduler.succeed(null);
	
		function onEffects(router, cmdList, state)
		{
			while (cmdList.ctor !== '[]')
			{
				var value = converter(cmdList._0);
				for (var i = 0; i < subs.length; i++)
				{
					subs[i](value);
				}
				cmdList = cmdList._1;
			}
			return init;
		}
	
		effectManagers[name].init = init;
		effectManagers[name].onEffects = F3(onEffects);
	
		// PUBLIC API
	
		function subscribe(callback)
		{
			subs.push(callback);
		}
	
		function unsubscribe(callback)
		{
			var index = subs.indexOf(callback);
			if (index >= 0)
			{
				subs.splice(index, 1);
			}
		}
	
		return {
			subscribe: subscribe,
			unsubscribe: unsubscribe
		};
	}
	
	
	// INCOMING PORTS
	
	function incomingPort(name, converter)
	{
		checkPortName(name);
		effectManagers[name] = {
			tag: 'sub',
			subMap: incomingPortMap,
			converter: converter,
			isForeign: true
		};
		return leaf(name);
	}
	
	var incomingPortMap = F2(function subMap(tagger, finalTagger)
	{
		return function(value)
		{
			return tagger(finalTagger(value));
		};
	});
	
	function setupIncomingPort(name, callback)
	{
		var sentBeforeInit = [];
		var subs = _elm_lang$core$Native_List.Nil;
		var converter = effectManagers[name].converter;
		var currentOnEffects = preInitOnEffects;
		var currentSend = preInitSend;
	
		// CREATE MANAGER
	
		var init = _elm_lang$core$Native_Scheduler.succeed(null);
	
		function preInitOnEffects(router, subList, state)
		{
			var postInitResult = postInitOnEffects(router, subList, state);
	
			for(var i = 0; i < sentBeforeInit.length; i++)
			{
				postInitSend(sentBeforeInit[i]);
			}
	
			sentBeforeInit = null; // to release objects held in queue
			currentSend = postInitSend;
			currentOnEffects = postInitOnEffects;
			return postInitResult;
		}
	
		function postInitOnEffects(router, subList, state)
		{
			subs = subList;
			return init;
		}
	
		function onEffects(router, subList, state)
		{
			return currentOnEffects(router, subList, state);
		}
	
		effectManagers[name].init = init;
		effectManagers[name].onEffects = F3(onEffects);
	
		// PUBLIC API
	
		function preInitSend(value)
		{
			sentBeforeInit.push(value);
		}
	
		function postInitSend(incomingValue)
		{
			var result = A2(_elm_lang$core$Json_Decode$decodeValue, converter, incomingValue);
			if (result.ctor === 'Err')
			{
				throw new Error('Trying to send an unexpected type of value through port `' + name + '`:\n' + result._0);
			}
	
			var value = result._0;
			var temp = subs;
			while (temp.ctor !== '[]')
			{
				callback(temp._0(value));
				temp = temp._1;
			}
		}
	
		function send(incomingValue)
		{
			currentSend(incomingValue);
		}
	
		return { send: send };
	}
	
	return {
		// routers
		sendToApp: F2(sendToApp),
		sendToSelf: F2(sendToSelf),
	
		// global setup
		mainToProgram: mainToProgram,
		effectManagers: effectManagers,
		outgoingPort: outgoingPort,
		incomingPort: incomingPort,
		addPublicModule: addPublicModule,
	
		// effect bags
		leaf: leaf,
		batch: batch,
		map: F2(map)
	};
	
	}();
	
	//import Native.Utils //
	
	var _elm_lang$core$Native_Scheduler = function() {
	
	var MAX_STEPS = 10000;
	
	
	// TASKS
	
	function succeed(value)
	{
		return {
			ctor: '_Task_succeed',
			value: value
		};
	}
	
	function fail(error)
	{
		return {
			ctor: '_Task_fail',
			value: error
		};
	}
	
	function nativeBinding(callback)
	{
		return {
			ctor: '_Task_nativeBinding',
			callback: callback,
			cancel: null
		};
	}
	
	function andThen(task, callback)
	{
		return {
			ctor: '_Task_andThen',
			task: task,
			callback: callback
		};
	}
	
	function onError(task, callback)
	{
		return {
			ctor: '_Task_onError',
			task: task,
			callback: callback
		};
	}
	
	function receive(callback)
	{
		return {
			ctor: '_Task_receive',
			callback: callback
		};
	}
	
	
	// PROCESSES
	
	function rawSpawn(task)
	{
		var process = {
			ctor: '_Process',
			id: _elm_lang$core$Native_Utils.guid(),
			root: task,
			stack: null,
			mailbox: []
		};
	
		enqueue(process);
	
		return process;
	}
	
	function spawn(task)
	{
		return nativeBinding(function(callback) {
			var process = rawSpawn(task);
			callback(succeed(process));
		});
	}
	
	function rawSend(process, msg)
	{
		process.mailbox.push(msg);
		enqueue(process);
	}
	
	function send(process, msg)
	{
		return nativeBinding(function(callback) {
			rawSend(process, msg);
			callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
		});
	}
	
	function kill(process)
	{
		return nativeBinding(function(callback) {
			var root = process.root;
			if (root.ctor === '_Task_nativeBinding' && root.cancel)
			{
				root.cancel();
			}
	
			process.root = null;
	
			callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
		});
	}
	
	function sleep(time)
	{
		return nativeBinding(function(callback) {
			var id = setTimeout(function() {
				callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
			}, time);
	
			return function() { clearTimeout(id); };
		});
	}
	
	
	// STEP PROCESSES
	
	function step(numSteps, process)
	{
		while (numSteps < MAX_STEPS)
		{
			var ctor = process.root.ctor;
	
			if (ctor === '_Task_succeed')
			{
				while (process.stack && process.stack.ctor === '_Task_onError')
				{
					process.stack = process.stack.rest;
				}
				if (process.stack === null)
				{
					break;
				}
				process.root = process.stack.callback(process.root.value);
				process.stack = process.stack.rest;
				++numSteps;
				continue;
			}
	
			if (ctor === '_Task_fail')
			{
				while (process.stack && process.stack.ctor === '_Task_andThen')
				{
					process.stack = process.stack.rest;
				}
				if (process.stack === null)
				{
					break;
				}
				process.root = process.stack.callback(process.root.value);
				process.stack = process.stack.rest;
				++numSteps;
				continue;
			}
	
			if (ctor === '_Task_andThen')
			{
				process.stack = {
					ctor: '_Task_andThen',
					callback: process.root.callback,
					rest: process.stack
				};
				process.root = process.root.task;
				++numSteps;
				continue;
			}
	
			if (ctor === '_Task_onError')
			{
				process.stack = {
					ctor: '_Task_onError',
					callback: process.root.callback,
					rest: process.stack
				};
				process.root = process.root.task;
				++numSteps;
				continue;
			}
	
			if (ctor === '_Task_nativeBinding')
			{
				process.root.cancel = process.root.callback(function(newRoot) {
					process.root = newRoot;
					enqueue(process);
				});
	
				break;
			}
	
			if (ctor === '_Task_receive')
			{
				var mailbox = process.mailbox;
				if (mailbox.length === 0)
				{
					break;
				}
	
				process.root = process.root.callback(mailbox.shift());
				++numSteps;
				continue;
			}
	
			throw new Error(ctor);
		}
	
		if (numSteps < MAX_STEPS)
		{
			return numSteps + 1;
		}
		enqueue(process);
	
		return numSteps;
	}
	
	
	// WORK QUEUE
	
	var working = false;
	var workQueue = [];
	
	function enqueue(process)
	{
		workQueue.push(process);
	
		if (!working)
		{
			setTimeout(work, 0);
			working = true;
		}
	}
	
	function work()
	{
		var numSteps = 0;
		var process;
		while (numSteps < MAX_STEPS && (process = workQueue.shift()))
		{
			if (process.root)
			{
				numSteps = step(numSteps, process);
			}
		}
		if (!process)
		{
			working = false;
			return;
		}
		setTimeout(work, 0);
	}
	
	
	return {
		succeed: succeed,
		fail: fail,
		nativeBinding: nativeBinding,
		andThen: F2(andThen),
		onError: F2(onError),
		receive: receive,
	
		spawn: spawn,
		kill: kill,
		sleep: sleep,
		send: F2(send),
	
		rawSpawn: rawSpawn,
		rawSend: rawSend
	};
	
	}();
	var _elm_lang$core$Platform$hack = _elm_lang$core$Native_Scheduler.succeed;
	var _elm_lang$core$Platform$sendToSelf = _elm_lang$core$Native_Platform.sendToSelf;
	var _elm_lang$core$Platform$sendToApp = _elm_lang$core$Native_Platform.sendToApp;
	var _elm_lang$core$Platform$Program = {ctor: 'Program'};
	var _elm_lang$core$Platform$Task = {ctor: 'Task'};
	var _elm_lang$core$Platform$ProcessId = {ctor: 'ProcessId'};
	var _elm_lang$core$Platform$Router = {ctor: 'Router'};
	
	var _elm_lang$core$Platform_Cmd$batch = _elm_lang$core$Native_Platform.batch;
	var _elm_lang$core$Platform_Cmd$none = _elm_lang$core$Platform_Cmd$batch(
		_elm_lang$core$Native_List.fromArray(
			[]));
	var _elm_lang$core$Platform_Cmd_ops = _elm_lang$core$Platform_Cmd_ops || {};
	_elm_lang$core$Platform_Cmd_ops['!'] = F2(
		function (model, commands) {
			return {
				ctor: '_Tuple2',
				_0: model,
				_1: _elm_lang$core$Platform_Cmd$batch(commands)
			};
		});
	var _elm_lang$core$Platform_Cmd$map = _elm_lang$core$Native_Platform.map;
	var _elm_lang$core$Platform_Cmd$Cmd = {ctor: 'Cmd'};
	
	var _elm_lang$core$Platform_Sub$batch = _elm_lang$core$Native_Platform.batch;
	var _elm_lang$core$Platform_Sub$none = _elm_lang$core$Platform_Sub$batch(
		_elm_lang$core$Native_List.fromArray(
			[]));
	var _elm_lang$core$Platform_Sub$map = _elm_lang$core$Native_Platform.map;
	var _elm_lang$core$Platform_Sub$Sub = {ctor: 'Sub'};
	
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$youtube_square = 'youtube-square';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$youtube_play = 'youtube-play';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$youtube = 'youtube';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$yoast = 'yoast';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$yelp = 'yelp';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$yc_square = 'yc-square';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$yc = 'yc';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$yahoo = 'yahoo';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$y_combinator_square = 'y-combinator-square';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$y_combinator = 'y-combinator';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$xing_square = 'xing-square';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$xing = 'xing';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$wpforms = 'wpforms';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$wpbeginner = 'wpbeginner';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$wordpress = 'wordpress';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$windows = 'windows';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$wikipedia_w = 'wikipedia-w';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$whatsapp = 'whatsapp';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$weixin = 'weixin';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$weibo = 'weibo';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$wechat = 'wechat';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$vk = 'vk';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$vine = 'vine';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$vimeo_square = 'vimeo-square';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$vimeo = 'vimeo';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$viadeo_square = 'viadeo-square';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$viadeo = 'viadeo';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$viacoin = 'viacoin';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$usb = 'usb';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$twitter_square = 'twitter-square';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$twitter = 'twitter';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$twitch = 'twitch';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$tumblr_square = 'tumblr-square';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$tumblr = 'tumblr';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$tripadvisor = 'tripadvisor';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$trello = 'trello';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$themeisle = 'themeisle';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$tencent_weibo = 'tencent-weibo';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$stumbleupon_circle = 'stumbleupon-circle';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$stumbleupon = 'stumbleupon';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$steam_square = 'steam-square';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$steam = 'steam';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$stack_overflow = 'stack-overflow';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$stack_exchange = 'stack-exchange';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$spotify = 'spotify';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$soundcloud = 'soundcloud';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$snapchat_square = 'snapchat-square';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$snapchat_ghost = 'snapchat-ghost';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$snapchat = 'snapchat';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$slideshare = 'slideshare';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$slack = 'slack';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$skype = 'skype';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$skyatlas = 'skyatlas';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$simplybuilt = 'simplybuilt';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$shirtsinbulk = 'shirtsinbulk';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$share_alt_square = 'share-alt-square';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$share_alt = 'share-alt';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$sellsy = 'sellsy';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$scribd = 'scribd';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$safari = 'safari';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$resistance = 'resistance';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$renren = 'renren';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$reddit_square = 'reddit-square';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$reddit_alien = 'reddit-alien';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$reddit = 'reddit';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$rebel = 'rebel';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$ra = 'ra';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$qq = 'qq';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$product_hunt = 'product-hunt';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$pinterest_square = 'pinterest-square';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$pinterest_p = 'pinterest-p';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$pinterest = 'pinterest';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$pied_piper_pp = 'pied-piper-pp';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$pied_piper_alt = 'pied-piper-alt';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$pied_piper = 'pied-piper';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$paypal = 'paypal';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$pagelines = 'pagelines';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$optin_monster = 'optin-monster';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$opera = 'opera';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$openid = 'openid';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$opencart = 'opencart';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$odnoklassniki_square = 'odnoklassniki-square';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$odnoklassniki = 'odnoklassniki';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$modx = 'modx';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$mixcloud = 'mixcloud';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$medium = 'medium';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$meanpath = 'meanpath';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$maxcdn = 'maxcdn';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$linux = 'linux';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$linkedin_square = 'linkedin-square';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$linkedin = 'linkedin';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$leanpub = 'leanpub';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$lastfm_square = 'lastfm-square';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$lastfm = 'lastfm';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$jsfiddle = 'jsfiddle';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$joomla = 'joomla';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$ioxhost = 'ioxhost';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$internet_explorer = 'internet-explorer';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$instagram = 'instagram';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$html5 = 'html5';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$houzz = 'houzz';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$hacker_news = 'hacker-news';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$gratipay = 'gratipay';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$google_wallet = 'google-wallet';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$google_plus_square = 'google-plus-square';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$google_plus_official = 'google-plus-official';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$google_plus_circle = 'google-plus-circle';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$google_plus = 'google-plus';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$google = 'google';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$glide_g = 'glide-g';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$glide = 'glide';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$gittip = 'gittip';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$gitlab = 'gitlab';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$github_square = 'github-square';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$github_alt = 'github-alt';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$github = 'github';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$git_square = 'git-square';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$git = 'git';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$gg_circle = 'gg-circle';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$gg = 'gg';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$get_pocket = 'get-pocket';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$ge = 'ge';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$foursquare = 'foursquare';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$forumbee = 'forumbee';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$fort_awesome = 'fort-awesome';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$fonticons = 'fonticons';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$font_awesome = 'font-awesome';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$flickr = 'flickr';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$first_order = 'first-order';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$firefox = 'firefox';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$facebook_square = 'facebook-square';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$facebook_official = 'facebook-official';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$facebook_f = 'facebook-f';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$facebook = 'facebook';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$fa = 'fa';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$expeditedssl = 'expeditedssl';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$envira = 'envira';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$empire = 'empire';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$edge = 'edge';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$drupal = 'drupal';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$dropbox = 'dropbox';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$dribbble = 'dribbble';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$digg = 'digg';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$deviantart = 'deviantart';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$delicious = 'delicious';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$dashcube = 'dashcube';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$css3 = 'css3';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$contao = 'contao';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$connectdevelop = 'connectdevelop';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$codiepie = 'codiepie';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$codepen = 'codepen';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$chrome = 'chrome';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$cc_visa = 'cc-visa';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$cc_stripe = 'cc-stripe';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$cc_paypal = 'cc-paypal';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$cc_mastercard = 'cc-mastercard';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$cc_jcb = 'cc-jcb';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$cc_discover = 'cc-discover';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$cc_diners_club = 'cc-diners-club';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$cc_amex = 'cc-amex';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$buysellads = 'buysellads';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$btc = 'btc';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$bluetooth_b = 'bluetooth-b';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$bluetooth = 'bluetooth';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$black_tie = 'black-tie';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$bitcoin = 'bitcoin';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$bitbucket_square = 'bitbucket-square';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$bitbucket = 'bitbucket';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$behance_square = 'behance-square';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$behance = 'behance';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$apple = 'apple';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$angellist = 'angellist';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$android = 'android';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$amazon = 'amazon';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$adn = 'adn';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$fiveHundredPX = '500px';
	
	//import Native.List //
	
	var _elm_lang$core$Native_Array = function() {
	
	// A RRB-Tree has two distinct data types.
	// Leaf -> "height"  is always 0
	//         "table"   is an array of elements
	// Node -> "height"  is always greater than 0
	//         "table"   is an array of child nodes
	//         "lengths" is an array of accumulated lengths of the child nodes
	
	// M is the maximal table size. 32 seems fast. E is the allowed increase
	// of search steps when concatting to find an index. Lower values will
	// decrease balancing, but will increase search steps.
	var M = 32;
	var E = 2;
	
	// An empty array.
	var empty = {
		ctor: '_Array',
		height: 0,
		table: []
	};
	
	
	function get(i, array)
	{
		if (i < 0 || i >= length(array))
		{
			throw new Error(
				'Index ' + i + ' is out of range. Check the length of ' +
				'your array first or use getMaybe or getWithDefault.');
		}
		return unsafeGet(i, array);
	}
	
	
	function unsafeGet(i, array)
	{
		for (var x = array.height; x > 0; x--)
		{
			var slot = i >> (x * 5);
			while (array.lengths[slot] <= i)
			{
				slot++;
			}
			if (slot > 0)
			{
				i -= array.lengths[slot - 1];
			}
			array = array.table[slot];
		}
		return array.table[i];
	}
	
	
	// Sets the value at the index i. Only the nodes leading to i will get
	// copied and updated.
	function set(i, item, array)
	{
		if (i < 0 || length(array) <= i)
		{
			return array;
		}
		return unsafeSet(i, item, array);
	}
	
	
	function unsafeSet(i, item, array)
	{
		array = nodeCopy(array);
	
		if (array.height === 0)
		{
			array.table[i] = item;
		}
		else
		{
			var slot = getSlot(i, array);
			if (slot > 0)
			{
				i -= array.lengths[slot - 1];
			}
			array.table[slot] = unsafeSet(i, item, array.table[slot]);
		}
		return array;
	}
	
	
	function initialize(len, f)
	{
		if (len <= 0)
		{
			return empty;
		}
		var h = Math.floor( Math.log(len) / Math.log(M) );
		return initialize_(f, h, 0, len);
	}
	
	function initialize_(f, h, from, to)
	{
		if (h === 0)
		{
			var table = new Array((to - from) % (M + 1));
			for (var i = 0; i < table.length; i++)
			{
			  table[i] = f(from + i);
			}
			return {
				ctor: '_Array',
				height: 0,
				table: table
			};
		}
	
		var step = Math.pow(M, h);
		var table = new Array(Math.ceil((to - from) / step));
		var lengths = new Array(table.length);
		for (var i = 0; i < table.length; i++)
		{
			table[i] = initialize_(f, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
			lengths[i] = length(table[i]) + (i > 0 ? lengths[i-1] : 0);
		}
		return {
			ctor: '_Array',
			height: h,
			table: table,
			lengths: lengths
		};
	}
	
	function fromList(list)
	{
		if (list.ctor === '[]')
		{
			return empty;
		}
	
		// Allocate M sized blocks (table) and write list elements to it.
		var table = new Array(M);
		var nodes = [];
		var i = 0;
	
		while (list.ctor !== '[]')
		{
			table[i] = list._0;
			list = list._1;
			i++;
	
			// table is full, so we can push a leaf containing it into the
			// next node.
			if (i === M)
			{
				var leaf = {
					ctor: '_Array',
					height: 0,
					table: table
				};
				fromListPush(leaf, nodes);
				table = new Array(M);
				i = 0;
			}
		}
	
		// Maybe there is something left on the table.
		if (i > 0)
		{
			var leaf = {
				ctor: '_Array',
				height: 0,
				table: table.splice(0, i)
			};
			fromListPush(leaf, nodes);
		}
	
		// Go through all of the nodes and eventually push them into higher nodes.
		for (var h = 0; h < nodes.length - 1; h++)
		{
			if (nodes[h].table.length > 0)
			{
				fromListPush(nodes[h], nodes);
			}
		}
	
		var head = nodes[nodes.length - 1];
		if (head.height > 0 && head.table.length === 1)
		{
			return head.table[0];
		}
		else
		{
			return head;
		}
	}
	
	// Push a node into a higher node as a child.
	function fromListPush(toPush, nodes)
	{
		var h = toPush.height;
	
		// Maybe the node on this height does not exist.
		if (nodes.length === h)
		{
			var node = {
				ctor: '_Array',
				height: h + 1,
				table: [],
				lengths: []
			};
			nodes.push(node);
		}
	
		nodes[h].table.push(toPush);
		var len = length(toPush);
		if (nodes[h].lengths.length > 0)
		{
			len += nodes[h].lengths[nodes[h].lengths.length - 1];
		}
		nodes[h].lengths.push(len);
	
		if (nodes[h].table.length === M)
		{
			fromListPush(nodes[h], nodes);
			nodes[h] = {
				ctor: '_Array',
				height: h + 1,
				table: [],
				lengths: []
			};
		}
	}
	
	// Pushes an item via push_ to the bottom right of a tree.
	function push(item, a)
	{
		var pushed = push_(item, a);
		if (pushed !== null)
		{
			return pushed;
		}
	
		var newTree = create(item, a.height);
		return siblise(a, newTree);
	}
	
	// Recursively tries to push an item to the bottom-right most
	// tree possible. If there is no space left for the item,
	// null will be returned.
	function push_(item, a)
	{
		// Handle resursion stop at leaf level.
		if (a.height === 0)
		{
			if (a.table.length < M)
			{
				var newA = {
					ctor: '_Array',
					height: 0,
					table: a.table.slice()
				};
				newA.table.push(item);
				return newA;
			}
			else
			{
			  return null;
			}
		}
	
		// Recursively push
		var pushed = push_(item, botRight(a));
	
		// There was space in the bottom right tree, so the slot will
		// be updated.
		if (pushed !== null)
		{
			var newA = nodeCopy(a);
			newA.table[newA.table.length - 1] = pushed;
			newA.lengths[newA.lengths.length - 1]++;
			return newA;
		}
	
		// When there was no space left, check if there is space left
		// for a new slot with a tree which contains only the item
		// at the bottom.
		if (a.table.length < M)
		{
			var newSlot = create(item, a.height - 1);
			var newA = nodeCopy(a);
			newA.table.push(newSlot);
			newA.lengths.push(newA.lengths[newA.lengths.length - 1] + length(newSlot));
			return newA;
		}
		else
		{
			return null;
		}
	}
	
	// Converts an array into a list of elements.
	function toList(a)
	{
		return toList_(_elm_lang$core$Native_List.Nil, a);
	}
	
	function toList_(list, a)
	{
		for (var i = a.table.length - 1; i >= 0; i--)
		{
			list =
				a.height === 0
					? _elm_lang$core$Native_List.Cons(a.table[i], list)
					: toList_(list, a.table[i]);
		}
		return list;
	}
	
	// Maps a function over the elements of an array.
	function map(f, a)
	{
		var newA = {
			ctor: '_Array',
			height: a.height,
			table: new Array(a.table.length)
		};
		if (a.height > 0)
		{
			newA.lengths = a.lengths;
		}
		for (var i = 0; i < a.table.length; i++)
		{
			newA.table[i] =
				a.height === 0
					? f(a.table[i])
					: map(f, a.table[i]);
		}
		return newA;
	}
	
	// Maps a function over the elements with their index as first argument.
	function indexedMap(f, a)
	{
		return indexedMap_(f, a, 0);
	}
	
	function indexedMap_(f, a, from)
	{
		var newA = {
			ctor: '_Array',
			height: a.height,
			table: new Array(a.table.length)
		};
		if (a.height > 0)
		{
			newA.lengths = a.lengths;
		}
		for (var i = 0; i < a.table.length; i++)
		{
			newA.table[i] =
				a.height === 0
					? A2(f, from + i, a.table[i])
					: indexedMap_(f, a.table[i], i == 0 ? from : from + a.lengths[i - 1]);
		}
		return newA;
	}
	
	function foldl(f, b, a)
	{
		if (a.height === 0)
		{
			for (var i = 0; i < a.table.length; i++)
			{
				b = A2(f, a.table[i], b);
			}
		}
		else
		{
			for (var i = 0; i < a.table.length; i++)
			{
				b = foldl(f, b, a.table[i]);
			}
		}
		return b;
	}
	
	function foldr(f, b, a)
	{
		if (a.height === 0)
		{
			for (var i = a.table.length; i--; )
			{
				b = A2(f, a.table[i], b);
			}
		}
		else
		{
			for (var i = a.table.length; i--; )
			{
				b = foldr(f, b, a.table[i]);
			}
		}
		return b;
	}
	
	// TODO: currently, it slices the right, then the left. This can be
	// optimized.
	function slice(from, to, a)
	{
		if (from < 0)
		{
			from += length(a);
		}
		if (to < 0)
		{
			to += length(a);
		}
		return sliceLeft(from, sliceRight(to, a));
	}
	
	function sliceRight(to, a)
	{
		if (to === length(a))
		{
			return a;
		}
	
		// Handle leaf level.
		if (a.height === 0)
		{
			var newA = { ctor:'_Array', height:0 };
			newA.table = a.table.slice(0, to);
			return newA;
		}
	
		// Slice the right recursively.
		var right = getSlot(to, a);
		var sliced = sliceRight(to - (right > 0 ? a.lengths[right - 1] : 0), a.table[right]);
	
		// Maybe the a node is not even needed, as sliced contains the whole slice.
		if (right === 0)
		{
			return sliced;
		}
	
		// Create new node.
		var newA = {
			ctor: '_Array',
			height: a.height,
			table: a.table.slice(0, right),
			lengths: a.lengths.slice(0, right)
		};
		if (sliced.table.length > 0)
		{
			newA.table[right] = sliced;
			newA.lengths[right] = length(sliced) + (right > 0 ? newA.lengths[right - 1] : 0);
		}
		return newA;
	}
	
	function sliceLeft(from, a)
	{
		if (from === 0)
		{
			return a;
		}
	
		// Handle leaf level.
		if (a.height === 0)
		{
			var newA = { ctor:'_Array', height:0 };
			newA.table = a.table.slice(from, a.table.length + 1);
			return newA;
		}
	
		// Slice the left recursively.
		var left = getSlot(from, a);
		var sliced = sliceLeft(from - (left > 0 ? a.lengths[left - 1] : 0), a.table[left]);
	
		// Maybe the a node is not even needed, as sliced contains the whole slice.
		if (left === a.table.length - 1)
		{
			return sliced;
		}
	
		// Create new node.
		var newA = {
			ctor: '_Array',
			height: a.height,
			table: a.table.slice(left, a.table.length + 1),
			lengths: new Array(a.table.length - left)
		};
		newA.table[0] = sliced;
		var len = 0;
		for (var i = 0; i < newA.table.length; i++)
		{
			len += length(newA.table[i]);
			newA.lengths[i] = len;
		}
	
		return newA;
	}
	
	// Appends two trees.
	function append(a,b)
	{
		if (a.table.length === 0)
		{
			return b;
		}
		if (b.table.length === 0)
		{
			return a;
		}
	
		var c = append_(a, b);
	
		// Check if both nodes can be crunshed together.
		if (c[0].table.length + c[1].table.length <= M)
		{
			if (c[0].table.length === 0)
			{
				return c[1];
			}
			if (c[1].table.length === 0)
			{
				return c[0];
			}
	
			// Adjust .table and .lengths
			c[0].table = c[0].table.concat(c[1].table);
			if (c[0].height > 0)
			{
				var len = length(c[0]);
				for (var i = 0; i < c[1].lengths.length; i++)
				{
					c[1].lengths[i] += len;
				}
				c[0].lengths = c[0].lengths.concat(c[1].lengths);
			}
	
			return c[0];
		}
	
		if (c[0].height > 0)
		{
			var toRemove = calcToRemove(a, b);
			if (toRemove > E)
			{
				c = shuffle(c[0], c[1], toRemove);
			}
		}
	
		return siblise(c[0], c[1]);
	}
	
	// Returns an array of two nodes; right and left. One node _may_ be empty.
	function append_(a, b)
	{
		if (a.height === 0 && b.height === 0)
		{
			return [a, b];
		}
	
		if (a.height !== 1 || b.height !== 1)
		{
			if (a.height === b.height)
			{
				a = nodeCopy(a);
				b = nodeCopy(b);
				var appended = append_(botRight(a), botLeft(b));
	
				insertRight(a, appended[1]);
				insertLeft(b, appended[0]);
			}
			else if (a.height > b.height)
			{
				a = nodeCopy(a);
				var appended = append_(botRight(a), b);
	
				insertRight(a, appended[0]);
				b = parentise(appended[1], appended[1].height + 1);
			}
			else
			{
				b = nodeCopy(b);
				var appended = append_(a, botLeft(b));
	
				var left = appended[0].table.length === 0 ? 0 : 1;
				var right = left === 0 ? 1 : 0;
				insertLeft(b, appended[left]);
				a = parentise(appended[right], appended[right].height + 1);
			}
		}
	
		// Check if balancing is needed and return based on that.
		if (a.table.length === 0 || b.table.length === 0)
		{
			return [a, b];
		}
	
		var toRemove = calcToRemove(a, b);
		if (toRemove <= E)
		{
			return [a, b];
		}
		return shuffle(a, b, toRemove);
	}
	
	// Helperfunctions for append_. Replaces a child node at the side of the parent.
	function insertRight(parent, node)
	{
		var index = parent.table.length - 1;
		parent.table[index] = node;
		parent.lengths[index] = length(node);
		parent.lengths[index] += index > 0 ? parent.lengths[index - 1] : 0;
	}
	
	function insertLeft(parent, node)
	{
		if (node.table.length > 0)
		{
			parent.table[0] = node;
			parent.lengths[0] = length(node);
	
			var len = length(parent.table[0]);
			for (var i = 1; i < parent.lengths.length; i++)
			{
				len += length(parent.table[i]);
				parent.lengths[i] = len;
			}
		}
		else
		{
			parent.table.shift();
			for (var i = 1; i < parent.lengths.length; i++)
			{
				parent.lengths[i] = parent.lengths[i] - parent.lengths[0];
			}
			parent.lengths.shift();
		}
	}
	
	// Returns the extra search steps for E. Refer to the paper.
	function calcToRemove(a, b)
	{
		var subLengths = 0;
		for (var i = 0; i < a.table.length; i++)
		{
			subLengths += a.table[i].table.length;
		}
		for (var i = 0; i < b.table.length; i++)
		{
			subLengths += b.table[i].table.length;
		}
	
		var toRemove = a.table.length + b.table.length;
		return toRemove - (Math.floor((subLengths - 1) / M) + 1);
	}
	
	// get2, set2 and saveSlot are helpers for accessing elements over two arrays.
	function get2(a, b, index)
	{
		return index < a.length
			? a[index]
			: b[index - a.length];
	}
	
	function set2(a, b, index, value)
	{
		if (index < a.length)
		{
			a[index] = value;
		}
		else
		{
			b[index - a.length] = value;
		}
	}
	
	function saveSlot(a, b, index, slot)
	{
		set2(a.table, b.table, index, slot);
	
		var l = (index === 0 || index === a.lengths.length)
			? 0
			: get2(a.lengths, a.lengths, index - 1);
	
		set2(a.lengths, b.lengths, index, l + length(slot));
	}
	
	// Creates a node or leaf with a given length at their arrays for perfomance.
	// Is only used by shuffle.
	function createNode(h, length)
	{
		if (length < 0)
		{
			length = 0;
		}
		var a = {
			ctor: '_Array',
			height: h,
			table: new Array(length)
		};
		if (h > 0)
		{
			a.lengths = new Array(length);
		}
		return a;
	}
	
	// Returns an array of two balanced nodes.
	function shuffle(a, b, toRemove)
	{
		var newA = createNode(a.height, Math.min(M, a.table.length + b.table.length - toRemove));
		var newB = createNode(a.height, newA.table.length - (a.table.length + b.table.length - toRemove));
	
		// Skip the slots with size M. More precise: copy the slot references
		// to the new node
		var read = 0;
		while (get2(a.table, b.table, read).table.length % M === 0)
		{
			set2(newA.table, newB.table, read, get2(a.table, b.table, read));
			set2(newA.lengths, newB.lengths, read, get2(a.lengths, b.lengths, read));
			read++;
		}
	
		// Pulling items from left to right, caching in a slot before writing
		// it into the new nodes.
		var write = read;
		var slot = new createNode(a.height - 1, 0);
		var from = 0;
	
		// If the current slot is still containing data, then there will be at
		// least one more write, so we do not break this loop yet.
		while (read - write - (slot.table.length > 0 ? 1 : 0) < toRemove)
		{
			// Find out the max possible items for copying.
			var source = get2(a.table, b.table, read);
			var to = Math.min(M - slot.table.length, source.table.length);
	
			// Copy and adjust size table.
			slot.table = slot.table.concat(source.table.slice(from, to));
			if (slot.height > 0)
			{
				var len = slot.lengths.length;
				for (var i = len; i < len + to - from; i++)
				{
					slot.lengths[i] = length(slot.table[i]);
					slot.lengths[i] += (i > 0 ? slot.lengths[i - 1] : 0);
				}
			}
	
			from += to;
	
			// Only proceed to next slots[i] if the current one was
			// fully copied.
			if (source.table.length <= to)
			{
				read++; from = 0;
			}
	
			// Only create a new slot if the current one is filled up.
			if (slot.table.length === M)
			{
				saveSlot(newA, newB, write, slot);
				slot = createNode(a.height - 1, 0);
				write++;
			}
		}
	
		// Cleanup after the loop. Copy the last slot into the new nodes.
		if (slot.table.length > 0)
		{
			saveSlot(newA, newB, write, slot);
			write++;
		}
	
		// Shift the untouched slots to the left
		while (read < a.table.length + b.table.length )
		{
			saveSlot(newA, newB, write, get2(a.table, b.table, read));
			read++;
			write++;
		}
	
		return [newA, newB];
	}
	
	// Navigation functions
	function botRight(a)
	{
		return a.table[a.table.length - 1];
	}
	function botLeft(a)
	{
		return a.table[0];
	}
	
	// Copies a node for updating. Note that you should not use this if
	// only updating only one of "table" or "lengths" for performance reasons.
	function nodeCopy(a)
	{
		var newA = {
			ctor: '_Array',
			height: a.height,
			table: a.table.slice()
		};
		if (a.height > 0)
		{
			newA.lengths = a.lengths.slice();
		}
		return newA;
	}
	
	// Returns how many items are in the tree.
	function length(array)
	{
		if (array.height === 0)
		{
			return array.table.length;
		}
		else
		{
			return array.lengths[array.lengths.length - 1];
		}
	}
	
	// Calculates in which slot of "table" the item probably is, then
	// find the exact slot via forward searching in  "lengths". Returns the index.
	function getSlot(i, a)
	{
		var slot = i >> (5 * a.height);
		while (a.lengths[slot] <= i)
		{
			slot++;
		}
		return slot;
	}
	
	// Recursively creates a tree with a given height containing
	// only the given item.
	function create(item, h)
	{
		if (h === 0)
		{
			return {
				ctor: '_Array',
				height: 0,
				table: [item]
			};
		}
		return {
			ctor: '_Array',
			height: h,
			table: [create(item, h - 1)],
			lengths: [1]
		};
	}
	
	// Recursively creates a tree that contains the given tree.
	function parentise(tree, h)
	{
		if (h === tree.height)
		{
			return tree;
		}
	
		return {
			ctor: '_Array',
			height: h,
			table: [parentise(tree, h - 1)],
			lengths: [length(tree)]
		};
	}
	
	// Emphasizes blood brotherhood beneath two trees.
	function siblise(a, b)
	{
		return {
			ctor: '_Array',
			height: a.height + 1,
			table: [a, b],
			lengths: [length(a), length(a) + length(b)]
		};
	}
	
	function toJSArray(a)
	{
		var jsArray = new Array(length(a));
		toJSArray_(jsArray, 0, a);
		return jsArray;
	}
	
	function toJSArray_(jsArray, i, a)
	{
		for (var t = 0; t < a.table.length; t++)
		{
			if (a.height === 0)
			{
				jsArray[i + t] = a.table[t];
			}
			else
			{
				var inc = t === 0 ? 0 : a.lengths[t - 1];
				toJSArray_(jsArray, i + inc, a.table[t]);
			}
		}
	}
	
	function fromJSArray(jsArray)
	{
		if (jsArray.length === 0)
		{
			return empty;
		}
		var h = Math.floor(Math.log(jsArray.length) / Math.log(M));
		return fromJSArray_(jsArray, h, 0, jsArray.length);
	}
	
	function fromJSArray_(jsArray, h, from, to)
	{
		if (h === 0)
		{
			return {
				ctor: '_Array',
				height: 0,
				table: jsArray.slice(from, to)
			};
		}
	
		var step = Math.pow(M, h);
		var table = new Array(Math.ceil((to - from) / step));
		var lengths = new Array(table.length);
		for (var i = 0; i < table.length; i++)
		{
			table[i] = fromJSArray_(jsArray, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
			lengths[i] = length(table[i]) + (i > 0 ? lengths[i - 1] : 0);
		}
		return {
			ctor: '_Array',
			height: h,
			table: table,
			lengths: lengths
		};
	}
	
	return {
		empty: empty,
		fromList: fromList,
		toList: toList,
		initialize: F2(initialize),
		append: F2(append),
		push: F2(push),
		slice: F3(slice),
		get: F2(get),
		set: F3(set),
		map: F2(map),
		indexedMap: F2(indexedMap),
		foldl: F3(foldl),
		foldr: F3(foldr),
		length: length,
	
		toJSArray: toJSArray,
		fromJSArray: fromJSArray
	};
	
	}();
	var _elm_lang$core$Array$append = _elm_lang$core$Native_Array.append;
	var _elm_lang$core$Array$length = _elm_lang$core$Native_Array.length;
	var _elm_lang$core$Array$isEmpty = function (array) {
		return _elm_lang$core$Native_Utils.eq(
			_elm_lang$core$Array$length(array),
			0);
	};
	var _elm_lang$core$Array$slice = _elm_lang$core$Native_Array.slice;
	var _elm_lang$core$Array$set = _elm_lang$core$Native_Array.set;
	var _elm_lang$core$Array$get = F2(
		function (i, array) {
			return ((_elm_lang$core$Native_Utils.cmp(0, i) < 1) && (_elm_lang$core$Native_Utils.cmp(
				i,
				_elm_lang$core$Native_Array.length(array)) < 0)) ? _elm_lang$core$Maybe$Just(
				A2(_elm_lang$core$Native_Array.get, i, array)) : _elm_lang$core$Maybe$Nothing;
		});
	var _elm_lang$core$Array$push = _elm_lang$core$Native_Array.push;
	var _elm_lang$core$Array$empty = _elm_lang$core$Native_Array.empty;
	var _elm_lang$core$Array$filter = F2(
		function (isOkay, arr) {
			var update = F2(
				function (x, xs) {
					return isOkay(x) ? A2(_elm_lang$core$Native_Array.push, x, xs) : xs;
				});
			return A3(_elm_lang$core$Native_Array.foldl, update, _elm_lang$core$Native_Array.empty, arr);
		});
	var _elm_lang$core$Array$foldr = _elm_lang$core$Native_Array.foldr;
	var _elm_lang$core$Array$foldl = _elm_lang$core$Native_Array.foldl;
	var _elm_lang$core$Array$indexedMap = _elm_lang$core$Native_Array.indexedMap;
	var _elm_lang$core$Array$map = _elm_lang$core$Native_Array.map;
	var _elm_lang$core$Array$toIndexedList = function (array) {
		return A3(
			_elm_lang$core$List$map2,
			F2(
				function (v0, v1) {
					return {ctor: '_Tuple2', _0: v0, _1: v1};
				}),
			_elm_lang$core$Native_List.range(
				0,
				_elm_lang$core$Native_Array.length(array) - 1),
			_elm_lang$core$Native_Array.toList(array));
	};
	var _elm_lang$core$Array$toList = _elm_lang$core$Native_Array.toList;
	var _elm_lang$core$Array$fromList = _elm_lang$core$Native_Array.fromList;
	var _elm_lang$core$Array$initialize = _elm_lang$core$Native_Array.initialize;
	var _elm_lang$core$Array$repeat = F2(
		function (n, e) {
			return A2(
				_elm_lang$core$Array$initialize,
				n,
				_elm_lang$core$Basics$always(e));
		});
	var _elm_lang$core$Array$Array = {ctor: 'Array'};
	
	//import Maybe, Native.List, Native.Utils, Result //
	
	var _elm_lang$core$Native_String = function() {
	
	function isEmpty(str)
	{
		return str.length === 0;
	}
	function cons(chr, str)
	{
		return chr + str;
	}
	function uncons(str)
	{
		var hd = str[0];
		if (hd)
		{
			return _elm_lang$core$Maybe$Just(_elm_lang$core$Native_Utils.Tuple2(_elm_lang$core$Native_Utils.chr(hd), str.slice(1)));
		}
		return _elm_lang$core$Maybe$Nothing;
	}
	function append(a, b)
	{
		return a + b;
	}
	function concat(strs)
	{
		return _elm_lang$core$Native_List.toArray(strs).join('');
	}
	function length(str)
	{
		return str.length;
	}
	function map(f, str)
	{
		var out = str.split('');
		for (var i = out.length; i--; )
		{
			out[i] = f(_elm_lang$core$Native_Utils.chr(out[i]));
		}
		return out.join('');
	}
	function filter(pred, str)
	{
		return str.split('').map(_elm_lang$core$Native_Utils.chr).filter(pred).join('');
	}
	function reverse(str)
	{
		return str.split('').reverse().join('');
	}
	function foldl(f, b, str)
	{
		var len = str.length;
		for (var i = 0; i < len; ++i)
		{
			b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
		}
		return b;
	}
	function foldr(f, b, str)
	{
		for (var i = str.length; i--; )
		{
			b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
		}
		return b;
	}
	function split(sep, str)
	{
		return _elm_lang$core$Native_List.fromArray(str.split(sep));
	}
	function join(sep, strs)
	{
		return _elm_lang$core$Native_List.toArray(strs).join(sep);
	}
	function repeat(n, str)
	{
		var result = '';
		while (n > 0)
		{
			if (n & 1)
			{
				result += str;
			}
			n >>= 1, str += str;
		}
		return result;
	}
	function slice(start, end, str)
	{
		return str.slice(start, end);
	}
	function left(n, str)
	{
		return n < 1 ? '' : str.slice(0, n);
	}
	function right(n, str)
	{
		return n < 1 ? '' : str.slice(-n);
	}
	function dropLeft(n, str)
	{
		return n < 1 ? str : str.slice(n);
	}
	function dropRight(n, str)
	{
		return n < 1 ? str : str.slice(0, -n);
	}
	function pad(n, chr, str)
	{
		var half = (n - str.length) / 2;
		return repeat(Math.ceil(half), chr) + str + repeat(half | 0, chr);
	}
	function padRight(n, chr, str)
	{
		return str + repeat(n - str.length, chr);
	}
	function padLeft(n, chr, str)
	{
		return repeat(n - str.length, chr) + str;
	}
	
	function trim(str)
	{
		return str.trim();
	}
	function trimLeft(str)
	{
		return str.replace(/^\s+/, '');
	}
	function trimRight(str)
	{
		return str.replace(/\s+$/, '');
	}
	
	function words(str)
	{
		return _elm_lang$core$Native_List.fromArray(str.trim().split(/\s+/g));
	}
	function lines(str)
	{
		return _elm_lang$core$Native_List.fromArray(str.split(/\r\n|\r|\n/g));
	}
	
	function toUpper(str)
	{
		return str.toUpperCase();
	}
	function toLower(str)
	{
		return str.toLowerCase();
	}
	
	function any(pred, str)
	{
		for (var i = str.length; i--; )
		{
			if (pred(_elm_lang$core$Native_Utils.chr(str[i])))
			{
				return true;
			}
		}
		return false;
	}
	function all(pred, str)
	{
		for (var i = str.length; i--; )
		{
			if (!pred(_elm_lang$core$Native_Utils.chr(str[i])))
			{
				return false;
			}
		}
		return true;
	}
	
	function contains(sub, str)
	{
		return str.indexOf(sub) > -1;
	}
	function startsWith(sub, str)
	{
		return str.indexOf(sub) === 0;
	}
	function endsWith(sub, str)
	{
		return str.length >= sub.length &&
			str.lastIndexOf(sub) === str.length - sub.length;
	}
	function indexes(sub, str)
	{
		var subLen = sub.length;
		
		if (subLen < 1)
		{
			return _elm_lang$core$Native_List.Nil;
		}
	
		var i = 0;
		var is = [];
	
		while ((i = str.indexOf(sub, i)) > -1)
		{
			is.push(i);
			i = i + subLen;
		}	
		
		return _elm_lang$core$Native_List.fromArray(is);
	}
	
	function toInt(s)
	{
		var len = s.length;
		if (len === 0)
		{
			return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int" );
		}
		var start = 0;
		if (s[0] === '-')
		{
			if (len === 1)
			{
				return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int" );
			}
			start = 1;
		}
		for (var i = start; i < len; ++i)
		{
			var c = s[i];
			if (c < '0' || '9' < c)
			{
				return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int" );
			}
		}
		return _elm_lang$core$Result$Ok(parseInt(s, 10));
	}
	
	function toFloat(s)
	{
		var len = s.length;
		if (len === 0)
		{
			return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float" );
		}
		var start = 0;
		if (s[0] === '-')
		{
			if (len === 1)
			{
				return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float" );
			}
			start = 1;
		}
		var dotCount = 0;
		for (var i = start; i < len; ++i)
		{
			var c = s[i];
			if ('0' <= c && c <= '9')
			{
				continue;
			}
			if (c === '.')
			{
				dotCount += 1;
				if (dotCount <= 1)
				{
					continue;
				}
			}
			return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float" );
		}
		return _elm_lang$core$Result$Ok(parseFloat(s));
	}
	
	function toList(str)
	{
		return _elm_lang$core$Native_List.fromArray(str.split('').map(_elm_lang$core$Native_Utils.chr));
	}
	function fromList(chars)
	{
		return _elm_lang$core$Native_List.toArray(chars).join('');
	}
	
	return {
		isEmpty: isEmpty,
		cons: F2(cons),
		uncons: uncons,
		append: F2(append),
		concat: concat,
		length: length,
		map: F2(map),
		filter: F2(filter),
		reverse: reverse,
		foldl: F3(foldl),
		foldr: F3(foldr),
	
		split: F2(split),
		join: F2(join),
		repeat: F2(repeat),
	
		slice: F3(slice),
		left: F2(left),
		right: F2(right),
		dropLeft: F2(dropLeft),
		dropRight: F2(dropRight),
	
		pad: F3(pad),
		padLeft: F3(padLeft),
		padRight: F3(padRight),
	
		trim: trim,
		trimLeft: trimLeft,
		trimRight: trimRight,
	
		words: words,
		lines: lines,
	
		toUpper: toUpper,
		toLower: toLower,
	
		any: F2(any),
		all: F2(all),
	
		contains: F2(contains),
		startsWith: F2(startsWith),
		endsWith: F2(endsWith),
		indexes: F2(indexes),
	
		toInt: toInt,
		toFloat: toFloat,
		toList: toList,
		fromList: fromList
	};
	
	}();
	
	//import Native.Utils //
	
	var _elm_lang$core$Native_Char = function() {
	
	return {
		fromCode: function(c) { return _elm_lang$core$Native_Utils.chr(String.fromCharCode(c)); },
		toCode: function(c) { return c.charCodeAt(0); },
		toUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toUpperCase()); },
		toLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLowerCase()); },
		toLocaleUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleUpperCase()); },
		toLocaleLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleLowerCase()); }
	};
	
	}();
	var _elm_lang$core$Char$fromCode = _elm_lang$core$Native_Char.fromCode;
	var _elm_lang$core$Char$toCode = _elm_lang$core$Native_Char.toCode;
	var _elm_lang$core$Char$toLocaleLower = _elm_lang$core$Native_Char.toLocaleLower;
	var _elm_lang$core$Char$toLocaleUpper = _elm_lang$core$Native_Char.toLocaleUpper;
	var _elm_lang$core$Char$toLower = _elm_lang$core$Native_Char.toLower;
	var _elm_lang$core$Char$toUpper = _elm_lang$core$Native_Char.toUpper;
	var _elm_lang$core$Char$isBetween = F3(
		function (low, high, $char) {
			var code = _elm_lang$core$Char$toCode($char);
			return (_elm_lang$core$Native_Utils.cmp(
				code,
				_elm_lang$core$Char$toCode(low)) > -1) && (_elm_lang$core$Native_Utils.cmp(
				code,
				_elm_lang$core$Char$toCode(high)) < 1);
		});
	var _elm_lang$core$Char$isUpper = A2(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('A'),
		_elm_lang$core$Native_Utils.chr('Z'));
	var _elm_lang$core$Char$isLower = A2(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('a'),
		_elm_lang$core$Native_Utils.chr('z'));
	var _elm_lang$core$Char$isDigit = A2(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('0'),
		_elm_lang$core$Native_Utils.chr('9'));
	var _elm_lang$core$Char$isOctDigit = A2(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('0'),
		_elm_lang$core$Native_Utils.chr('7'));
	var _elm_lang$core$Char$isHexDigit = function ($char) {
		return _elm_lang$core$Char$isDigit($char) || (A3(
			_elm_lang$core$Char$isBetween,
			_elm_lang$core$Native_Utils.chr('a'),
			_elm_lang$core$Native_Utils.chr('f'),
			$char) || A3(
			_elm_lang$core$Char$isBetween,
			_elm_lang$core$Native_Utils.chr('A'),
			_elm_lang$core$Native_Utils.chr('F'),
			$char));
	};
	
	var _elm_lang$core$String$fromList = _elm_lang$core$Native_String.fromList;
	var _elm_lang$core$String$toList = _elm_lang$core$Native_String.toList;
	var _elm_lang$core$String$toFloat = _elm_lang$core$Native_String.toFloat;
	var _elm_lang$core$String$toInt = _elm_lang$core$Native_String.toInt;
	var _elm_lang$core$String$indices = _elm_lang$core$Native_String.indexes;
	var _elm_lang$core$String$indexes = _elm_lang$core$Native_String.indexes;
	var _elm_lang$core$String$endsWith = _elm_lang$core$Native_String.endsWith;
	var _elm_lang$core$String$startsWith = _elm_lang$core$Native_String.startsWith;
	var _elm_lang$core$String$contains = _elm_lang$core$Native_String.contains;
	var _elm_lang$core$String$all = _elm_lang$core$Native_String.all;
	var _elm_lang$core$String$any = _elm_lang$core$Native_String.any;
	var _elm_lang$core$String$toLower = _elm_lang$core$Native_String.toLower;
	var _elm_lang$core$String$toUpper = _elm_lang$core$Native_String.toUpper;
	var _elm_lang$core$String$lines = _elm_lang$core$Native_String.lines;
	var _elm_lang$core$String$words = _elm_lang$core$Native_String.words;
	var _elm_lang$core$String$trimRight = _elm_lang$core$Native_String.trimRight;
	var _elm_lang$core$String$trimLeft = _elm_lang$core$Native_String.trimLeft;
	var _elm_lang$core$String$trim = _elm_lang$core$Native_String.trim;
	var _elm_lang$core$String$padRight = _elm_lang$core$Native_String.padRight;
	var _elm_lang$core$String$padLeft = _elm_lang$core$Native_String.padLeft;
	var _elm_lang$core$String$pad = _elm_lang$core$Native_String.pad;
	var _elm_lang$core$String$dropRight = _elm_lang$core$Native_String.dropRight;
	var _elm_lang$core$String$dropLeft = _elm_lang$core$Native_String.dropLeft;
	var _elm_lang$core$String$right = _elm_lang$core$Native_String.right;
	var _elm_lang$core$String$left = _elm_lang$core$Native_String.left;
	var _elm_lang$core$String$slice = _elm_lang$core$Native_String.slice;
	var _elm_lang$core$String$repeat = _elm_lang$core$Native_String.repeat;
	var _elm_lang$core$String$join = _elm_lang$core$Native_String.join;
	var _elm_lang$core$String$split = _elm_lang$core$Native_String.split;
	var _elm_lang$core$String$foldr = _elm_lang$core$Native_String.foldr;
	var _elm_lang$core$String$foldl = _elm_lang$core$Native_String.foldl;
	var _elm_lang$core$String$reverse = _elm_lang$core$Native_String.reverse;
	var _elm_lang$core$String$filter = _elm_lang$core$Native_String.filter;
	var _elm_lang$core$String$map = _elm_lang$core$Native_String.map;
	var _elm_lang$core$String$length = _elm_lang$core$Native_String.length;
	var _elm_lang$core$String$concat = _elm_lang$core$Native_String.concat;
	var _elm_lang$core$String$append = _elm_lang$core$Native_String.append;
	var _elm_lang$core$String$uncons = _elm_lang$core$Native_String.uncons;
	var _elm_lang$core$String$cons = _elm_lang$core$Native_String.cons;
	var _elm_lang$core$String$fromChar = function ($char) {
		return A2(_elm_lang$core$String$cons, $char, '');
	};
	var _elm_lang$core$String$isEmpty = _elm_lang$core$Native_String.isEmpty;
	
	var _elm_lang$core$Dict$foldr = F3(
		function (f, acc, t) {
			foldr:
			while (true) {
				var _p0 = t;
				if (_p0.ctor === 'RBEmpty_elm_builtin') {
					return acc;
				} else {
					var _v1 = f,
						_v2 = A3(
						f,
						_p0._1,
						_p0._2,
						A3(_elm_lang$core$Dict$foldr, f, acc, _p0._4)),
						_v3 = _p0._3;
					f = _v1;
					acc = _v2;
					t = _v3;
					continue foldr;
				}
			}
		});
	var _elm_lang$core$Dict$keys = function (dict) {
		return A3(
			_elm_lang$core$Dict$foldr,
			F3(
				function (key, value, keyList) {
					return A2(_elm_lang$core$List_ops['::'], key, keyList);
				}),
			_elm_lang$core$Native_List.fromArray(
				[]),
			dict);
	};
	var _elm_lang$core$Dict$values = function (dict) {
		return A3(
			_elm_lang$core$Dict$foldr,
			F3(
				function (key, value, valueList) {
					return A2(_elm_lang$core$List_ops['::'], value, valueList);
				}),
			_elm_lang$core$Native_List.fromArray(
				[]),
			dict);
	};
	var _elm_lang$core$Dict$toList = function (dict) {
		return A3(
			_elm_lang$core$Dict$foldr,
			F3(
				function (key, value, list) {
					return A2(
						_elm_lang$core$List_ops['::'],
						{ctor: '_Tuple2', _0: key, _1: value},
						list);
				}),
			_elm_lang$core$Native_List.fromArray(
				[]),
			dict);
	};
	var _elm_lang$core$Dict$foldl = F3(
		function (f, acc, dict) {
			foldl:
			while (true) {
				var _p1 = dict;
				if (_p1.ctor === 'RBEmpty_elm_builtin') {
					return acc;
				} else {
					var _v5 = f,
						_v6 = A3(
						f,
						_p1._1,
						_p1._2,
						A3(_elm_lang$core$Dict$foldl, f, acc, _p1._3)),
						_v7 = _p1._4;
					f = _v5;
					acc = _v6;
					dict = _v7;
					continue foldl;
				}
			}
		});
	var _elm_lang$core$Dict$merge = F6(
		function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
			var stepState = F3(
				function (rKey, rValue, _p2) {
					stepState:
					while (true) {
						var _p3 = _p2;
						var _p9 = _p3._1;
						var _p8 = _p3._0;
						var _p4 = _p8;
						if (_p4.ctor === '[]') {
							return {
								ctor: '_Tuple2',
								_0: _p8,
								_1: A3(rightStep, rKey, rValue, _p9)
							};
						} else {
							var _p7 = _p4._1;
							var _p6 = _p4._0._1;
							var _p5 = _p4._0._0;
							if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) < 0) {
								var _v10 = rKey,
									_v11 = rValue,
									_v12 = {
									ctor: '_Tuple2',
									_0: _p7,
									_1: A3(leftStep, _p5, _p6, _p9)
								};
								rKey = _v10;
								rValue = _v11;
								_p2 = _v12;
								continue stepState;
							} else {
								if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) > 0) {
									return {
										ctor: '_Tuple2',
										_0: _p8,
										_1: A3(rightStep, rKey, rValue, _p9)
									};
								} else {
									return {
										ctor: '_Tuple2',
										_0: _p7,
										_1: A4(bothStep, _p5, _p6, rValue, _p9)
									};
								}
							}
						}
					}
				});
			var _p10 = A3(
				_elm_lang$core$Dict$foldl,
				stepState,
				{
					ctor: '_Tuple2',
					_0: _elm_lang$core$Dict$toList(leftDict),
					_1: initialResult
				},
				rightDict);
			var leftovers = _p10._0;
			var intermediateResult = _p10._1;
			return A3(
				_elm_lang$core$List$foldl,
				F2(
					function (_p11, result) {
						var _p12 = _p11;
						return A3(leftStep, _p12._0, _p12._1, result);
					}),
				intermediateResult,
				leftovers);
		});
	var _elm_lang$core$Dict$reportRemBug = F4(
		function (msg, c, lgot, rgot) {
			return _elm_lang$core$Native_Debug.crash(
				_elm_lang$core$String$concat(
					_elm_lang$core$Native_List.fromArray(
						[
							'Internal red-black tree invariant violated, expected ',
							msg,
							' and got ',
							_elm_lang$core$Basics$toString(c),
							'/',
							lgot,
							'/',
							rgot,
							'\nPlease report this bug to <https://github.com/elm-lang/core/issues>'
						])));
		});
	var _elm_lang$core$Dict$isBBlack = function (dict) {
		var _p13 = dict;
		_v14_2:
		do {
			if (_p13.ctor === 'RBNode_elm_builtin') {
				if (_p13._0.ctor === 'BBlack') {
					return true;
				} else {
					break _v14_2;
				}
			} else {
				if (_p13._0.ctor === 'LBBlack') {
					return true;
				} else {
					break _v14_2;
				}
			}
		} while(false);
		return false;
	};
	var _elm_lang$core$Dict$sizeHelp = F2(
		function (n, dict) {
			sizeHelp:
			while (true) {
				var _p14 = dict;
				if (_p14.ctor === 'RBEmpty_elm_builtin') {
					return n;
				} else {
					var _v16 = A2(_elm_lang$core$Dict$sizeHelp, n + 1, _p14._4),
						_v17 = _p14._3;
					n = _v16;
					dict = _v17;
					continue sizeHelp;
				}
			}
		});
	var _elm_lang$core$Dict$size = function (dict) {
		return A2(_elm_lang$core$Dict$sizeHelp, 0, dict);
	};
	var _elm_lang$core$Dict$get = F2(
		function (targetKey, dict) {
			get:
			while (true) {
				var _p15 = dict;
				if (_p15.ctor === 'RBEmpty_elm_builtin') {
					return _elm_lang$core$Maybe$Nothing;
				} else {
					var _p16 = A2(_elm_lang$core$Basics$compare, targetKey, _p15._1);
					switch (_p16.ctor) {
						case 'LT':
							var _v20 = targetKey,
								_v21 = _p15._3;
							targetKey = _v20;
							dict = _v21;
							continue get;
						case 'EQ':
							return _elm_lang$core$Maybe$Just(_p15._2);
						default:
							var _v22 = targetKey,
								_v23 = _p15._4;
							targetKey = _v22;
							dict = _v23;
							continue get;
					}
				}
			}
		});
	var _elm_lang$core$Dict$member = F2(
		function (key, dict) {
			var _p17 = A2(_elm_lang$core$Dict$get, key, dict);
			if (_p17.ctor === 'Just') {
				return true;
			} else {
				return false;
			}
		});
	var _elm_lang$core$Dict$maxWithDefault = F3(
		function (k, v, r) {
			maxWithDefault:
			while (true) {
				var _p18 = r;
				if (_p18.ctor === 'RBEmpty_elm_builtin') {
					return {ctor: '_Tuple2', _0: k, _1: v};
				} else {
					var _v26 = _p18._1,
						_v27 = _p18._2,
						_v28 = _p18._4;
					k = _v26;
					v = _v27;
					r = _v28;
					continue maxWithDefault;
				}
			}
		});
	var _elm_lang$core$Dict$NBlack = {ctor: 'NBlack'};
	var _elm_lang$core$Dict$BBlack = {ctor: 'BBlack'};
	var _elm_lang$core$Dict$Black = {ctor: 'Black'};
	var _elm_lang$core$Dict$blackish = function (t) {
		var _p19 = t;
		if (_p19.ctor === 'RBNode_elm_builtin') {
			var _p20 = _p19._0;
			return _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$Black) || _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$BBlack);
		} else {
			return true;
		}
	};
	var _elm_lang$core$Dict$Red = {ctor: 'Red'};
	var _elm_lang$core$Dict$moreBlack = function (color) {
		var _p21 = color;
		switch (_p21.ctor) {
			case 'Black':
				return _elm_lang$core$Dict$BBlack;
			case 'Red':
				return _elm_lang$core$Dict$Black;
			case 'NBlack':
				return _elm_lang$core$Dict$Red;
			default:
				return _elm_lang$core$Native_Debug.crash('Can\'t make a double black node more black!');
		}
	};
	var _elm_lang$core$Dict$lessBlack = function (color) {
		var _p22 = color;
		switch (_p22.ctor) {
			case 'BBlack':
				return _elm_lang$core$Dict$Black;
			case 'Black':
				return _elm_lang$core$Dict$Red;
			case 'Red':
				return _elm_lang$core$Dict$NBlack;
			default:
				return _elm_lang$core$Native_Debug.crash('Can\'t make a negative black node less black!');
		}
	};
	var _elm_lang$core$Dict$LBBlack = {ctor: 'LBBlack'};
	var _elm_lang$core$Dict$LBlack = {ctor: 'LBlack'};
	var _elm_lang$core$Dict$RBEmpty_elm_builtin = function (a) {
		return {ctor: 'RBEmpty_elm_builtin', _0: a};
	};
	var _elm_lang$core$Dict$empty = _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	var _elm_lang$core$Dict$isEmpty = function (dict) {
		return _elm_lang$core$Native_Utils.eq(dict, _elm_lang$core$Dict$empty);
	};
	var _elm_lang$core$Dict$RBNode_elm_builtin = F5(
		function (a, b, c, d, e) {
			return {ctor: 'RBNode_elm_builtin', _0: a, _1: b, _2: c, _3: d, _4: e};
		});
	var _elm_lang$core$Dict$ensureBlackRoot = function (dict) {
		var _p23 = dict;
		if ((_p23.ctor === 'RBNode_elm_builtin') && (_p23._0.ctor === 'Red')) {
			return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p23._1, _p23._2, _p23._3, _p23._4);
		} else {
			return dict;
		}
	};
	var _elm_lang$core$Dict$lessBlackTree = function (dict) {
		var _p24 = dict;
		if (_p24.ctor === 'RBNode_elm_builtin') {
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_elm_lang$core$Dict$lessBlack(_p24._0),
				_p24._1,
				_p24._2,
				_p24._3,
				_p24._4);
		} else {
			return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
		}
	};
	var _elm_lang$core$Dict$balancedTree = function (col) {
		return function (xk) {
			return function (xv) {
				return function (yk) {
					return function (yv) {
						return function (zk) {
							return function (zv) {
								return function (a) {
									return function (b) {
										return function (c) {
											return function (d) {
												return A5(
													_elm_lang$core$Dict$RBNode_elm_builtin,
													_elm_lang$core$Dict$lessBlack(col),
													yk,
													yv,
													A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, xk, xv, a, b),
													A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, zk, zv, c, d));
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
	var _elm_lang$core$Dict$blacken = function (t) {
		var _p25 = t;
		if (_p25.ctor === 'RBEmpty_elm_builtin') {
			return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
		} else {
			return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p25._1, _p25._2, _p25._3, _p25._4);
		}
	};
	var _elm_lang$core$Dict$redden = function (t) {
		var _p26 = t;
		if (_p26.ctor === 'RBEmpty_elm_builtin') {
			return _elm_lang$core$Native_Debug.crash('can\'t make a Leaf red');
		} else {
			return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, _p26._1, _p26._2, _p26._3, _p26._4);
		}
	};
	var _elm_lang$core$Dict$balanceHelp = function (tree) {
		var _p27 = tree;
		_v36_6:
		do {
			_v36_5:
			do {
				_v36_4:
				do {
					_v36_3:
					do {
						_v36_2:
						do {
							_v36_1:
							do {
								_v36_0:
								do {
									if (_p27.ctor === 'RBNode_elm_builtin') {
										if (_p27._3.ctor === 'RBNode_elm_builtin') {
											if (_p27._4.ctor === 'RBNode_elm_builtin') {
												switch (_p27._3._0.ctor) {
													case 'Red':
														switch (_p27._4._0.ctor) {
															case 'Red':
																if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																	break _v36_0;
																} else {
																	if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																		break _v36_1;
																	} else {
																		if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																			break _v36_2;
																		} else {
																			if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																				break _v36_3;
																			} else {
																				break _v36_6;
																			}
																		}
																	}
																}
															case 'NBlack':
																if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																	break _v36_0;
																} else {
																	if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																		break _v36_1;
																	} else {
																		if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																			break _v36_4;
																		} else {
																			break _v36_6;
																		}
																	}
																}
															default:
																if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																	break _v36_0;
																} else {
																	if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																		break _v36_1;
																	} else {
																		break _v36_6;
																	}
																}
														}
													case 'NBlack':
														switch (_p27._4._0.ctor) {
															case 'Red':
																if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																	break _v36_2;
																} else {
																	if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																		break _v36_3;
																	} else {
																		if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																			break _v36_5;
																		} else {
																			break _v36_6;
																		}
																	}
																}
															case 'NBlack':
																if (_p27._0.ctor === 'BBlack') {
																	if ((((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																		break _v36_4;
																	} else {
																		if ((((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																			break _v36_5;
																		} else {
																			break _v36_6;
																		}
																	}
																} else {
																	break _v36_6;
																}
															default:
																if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																	break _v36_5;
																} else {
																	break _v36_6;
																}
														}
													default:
														switch (_p27._4._0.ctor) {
															case 'Red':
																if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																	break _v36_2;
																} else {
																	if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																		break _v36_3;
																	} else {
																		break _v36_6;
																	}
																}
															case 'NBlack':
																if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																	break _v36_4;
																} else {
																	break _v36_6;
																}
															default:
																break _v36_6;
														}
												}
											} else {
												switch (_p27._3._0.ctor) {
													case 'Red':
														if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
															break _v36_0;
														} else {
															if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																break _v36_1;
															} else {
																break _v36_6;
															}
														}
													case 'NBlack':
														if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
															break _v36_5;
														} else {
															break _v36_6;
														}
													default:
														break _v36_6;
												}
											}
										} else {
											if (_p27._4.ctor === 'RBNode_elm_builtin') {
												switch (_p27._4._0.ctor) {
													case 'Red':
														if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
															break _v36_2;
														} else {
															if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																break _v36_3;
															} else {
																break _v36_6;
															}
														}
													case 'NBlack':
														if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
															break _v36_4;
														} else {
															break _v36_6;
														}
													default:
														break _v36_6;
												}
											} else {
												break _v36_6;
											}
										}
									} else {
										break _v36_6;
									}
								} while(false);
								return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._3._1)(_p27._3._3._2)(_p27._3._1)(_p27._3._2)(_p27._1)(_p27._2)(_p27._3._3._3)(_p27._3._3._4)(_p27._3._4)(_p27._4);
							} while(false);
							return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._1)(_p27._3._2)(_p27._3._4._1)(_p27._3._4._2)(_p27._1)(_p27._2)(_p27._3._3)(_p27._3._4._3)(_p27._3._4._4)(_p27._4);
						} while(false);
						return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._3._1)(_p27._4._3._2)(_p27._4._1)(_p27._4._2)(_p27._3)(_p27._4._3._3)(_p27._4._3._4)(_p27._4._4);
					} while(false);
					return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._1)(_p27._4._2)(_p27._4._4._1)(_p27._4._4._2)(_p27._3)(_p27._4._3)(_p27._4._4._3)(_p27._4._4._4);
				} while(false);
				return A5(
					_elm_lang$core$Dict$RBNode_elm_builtin,
					_elm_lang$core$Dict$Black,
					_p27._4._3._1,
					_p27._4._3._2,
					A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3, _p27._4._3._3),
					A5(
						_elm_lang$core$Dict$balance,
						_elm_lang$core$Dict$Black,
						_p27._4._1,
						_p27._4._2,
						_p27._4._3._4,
						_elm_lang$core$Dict$redden(_p27._4._4)));
			} while(false);
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_elm_lang$core$Dict$Black,
				_p27._3._4._1,
				_p27._3._4._2,
				A5(
					_elm_lang$core$Dict$balance,
					_elm_lang$core$Dict$Black,
					_p27._3._1,
					_p27._3._2,
					_elm_lang$core$Dict$redden(_p27._3._3),
					_p27._3._4._3),
				A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3._4._4, _p27._4));
		} while(false);
		return tree;
	};
	var _elm_lang$core$Dict$balance = F5(
		function (c, k, v, l, r) {
			var tree = A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
			return _elm_lang$core$Dict$blackish(tree) ? _elm_lang$core$Dict$balanceHelp(tree) : tree;
		});
	var _elm_lang$core$Dict$bubble = F5(
		function (c, k, v, l, r) {
			return (_elm_lang$core$Dict$isBBlack(l) || _elm_lang$core$Dict$isBBlack(r)) ? A5(
				_elm_lang$core$Dict$balance,
				_elm_lang$core$Dict$moreBlack(c),
				k,
				v,
				_elm_lang$core$Dict$lessBlackTree(l),
				_elm_lang$core$Dict$lessBlackTree(r)) : A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
		});
	var _elm_lang$core$Dict$removeMax = F5(
		function (c, k, v, l, r) {
			var _p28 = r;
			if (_p28.ctor === 'RBEmpty_elm_builtin') {
				return A3(_elm_lang$core$Dict$rem, c, l, r);
			} else {
				return A5(
					_elm_lang$core$Dict$bubble,
					c,
					k,
					v,
					l,
					A5(_elm_lang$core$Dict$removeMax, _p28._0, _p28._1, _p28._2, _p28._3, _p28._4));
			}
		});
	var _elm_lang$core$Dict$rem = F3(
		function (c, l, r) {
			var _p29 = {ctor: '_Tuple2', _0: l, _1: r};
			if (_p29._0.ctor === 'RBEmpty_elm_builtin') {
				if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
					var _p30 = c;
					switch (_p30.ctor) {
						case 'Red':
							return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
						case 'Black':
							return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBBlack);
						default:
							return _elm_lang$core$Native_Debug.crash('cannot have bblack or nblack nodes at this point');
					}
				} else {
					var _p33 = _p29._1._0;
					var _p32 = _p29._0._0;
					var _p31 = {ctor: '_Tuple3', _0: c, _1: _p32, _2: _p33};
					if ((((_p31.ctor === '_Tuple3') && (_p31._0.ctor === 'Black')) && (_p31._1.ctor === 'LBlack')) && (_p31._2.ctor === 'Red')) {
						return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._1._1, _p29._1._2, _p29._1._3, _p29._1._4);
					} else {
						return A4(
							_elm_lang$core$Dict$reportRemBug,
							'Black/LBlack/Red',
							c,
							_elm_lang$core$Basics$toString(_p32),
							_elm_lang$core$Basics$toString(_p33));
					}
				}
			} else {
				if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
					var _p36 = _p29._1._0;
					var _p35 = _p29._0._0;
					var _p34 = {ctor: '_Tuple3', _0: c, _1: _p35, _2: _p36};
					if ((((_p34.ctor === '_Tuple3') && (_p34._0.ctor === 'Black')) && (_p34._1.ctor === 'Red')) && (_p34._2.ctor === 'LBlack')) {
						return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._0._1, _p29._0._2, _p29._0._3, _p29._0._4);
					} else {
						return A4(
							_elm_lang$core$Dict$reportRemBug,
							'Black/Red/LBlack',
							c,
							_elm_lang$core$Basics$toString(_p35),
							_elm_lang$core$Basics$toString(_p36));
					}
				} else {
					var _p40 = _p29._0._2;
					var _p39 = _p29._0._4;
					var _p38 = _p29._0._1;
					var l$ = A5(_elm_lang$core$Dict$removeMax, _p29._0._0, _p38, _p40, _p29._0._3, _p39);
					var _p37 = A3(_elm_lang$core$Dict$maxWithDefault, _p38, _p40, _p39);
					var k = _p37._0;
					var v = _p37._1;
					return A5(_elm_lang$core$Dict$bubble, c, k, v, l$, r);
				}
			}
		});
	var _elm_lang$core$Dict$map = F2(
		function (f, dict) {
			var _p41 = dict;
			if (_p41.ctor === 'RBEmpty_elm_builtin') {
				return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
			} else {
				var _p42 = _p41._1;
				return A5(
					_elm_lang$core$Dict$RBNode_elm_builtin,
					_p41._0,
					_p42,
					A2(f, _p42, _p41._2),
					A2(_elm_lang$core$Dict$map, f, _p41._3),
					A2(_elm_lang$core$Dict$map, f, _p41._4));
			}
		});
	var _elm_lang$core$Dict$Same = {ctor: 'Same'};
	var _elm_lang$core$Dict$Remove = {ctor: 'Remove'};
	var _elm_lang$core$Dict$Insert = {ctor: 'Insert'};
	var _elm_lang$core$Dict$update = F3(
		function (k, alter, dict) {
			var up = function (dict) {
				var _p43 = dict;
				if (_p43.ctor === 'RBEmpty_elm_builtin') {
					var _p44 = alter(_elm_lang$core$Maybe$Nothing);
					if (_p44.ctor === 'Nothing') {
						return {ctor: '_Tuple2', _0: _elm_lang$core$Dict$Same, _1: _elm_lang$core$Dict$empty};
					} else {
						return {
							ctor: '_Tuple2',
							_0: _elm_lang$core$Dict$Insert,
							_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, k, _p44._0, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty)
						};
					}
				} else {
					var _p55 = _p43._2;
					var _p54 = _p43._4;
					var _p53 = _p43._3;
					var _p52 = _p43._1;
					var _p51 = _p43._0;
					var _p45 = A2(_elm_lang$core$Basics$compare, k, _p52);
					switch (_p45.ctor) {
						case 'EQ':
							var _p46 = alter(
								_elm_lang$core$Maybe$Just(_p55));
							if (_p46.ctor === 'Nothing') {
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A3(_elm_lang$core$Dict$rem, _p51, _p53, _p54)
								};
							} else {
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p46._0, _p53, _p54)
								};
							}
						case 'LT':
							var _p47 = up(_p53);
							var flag = _p47._0;
							var newLeft = _p47._1;
							var _p48 = flag;
							switch (_p48.ctor) {
								case 'Same':
									return {
										ctor: '_Tuple2',
										_0: _elm_lang$core$Dict$Same,
										_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, newLeft, _p54)
									};
								case 'Insert':
									return {
										ctor: '_Tuple2',
										_0: _elm_lang$core$Dict$Insert,
										_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, newLeft, _p54)
									};
								default:
									return {
										ctor: '_Tuple2',
										_0: _elm_lang$core$Dict$Remove,
										_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, newLeft, _p54)
									};
							}
						default:
							var _p49 = up(_p54);
							var flag = _p49._0;
							var newRight = _p49._1;
							var _p50 = flag;
							switch (_p50.ctor) {
								case 'Same':
									return {
										ctor: '_Tuple2',
										_0: _elm_lang$core$Dict$Same,
										_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, _p53, newRight)
									};
								case 'Insert':
									return {
										ctor: '_Tuple2',
										_0: _elm_lang$core$Dict$Insert,
										_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, _p53, newRight)
									};
								default:
									return {
										ctor: '_Tuple2',
										_0: _elm_lang$core$Dict$Remove,
										_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, _p53, newRight)
									};
							}
					}
				}
			};
			var _p56 = up(dict);
			var flag = _p56._0;
			var updatedDict = _p56._1;
			var _p57 = flag;
			switch (_p57.ctor) {
				case 'Same':
					return updatedDict;
				case 'Insert':
					return _elm_lang$core$Dict$ensureBlackRoot(updatedDict);
				default:
					return _elm_lang$core$Dict$blacken(updatedDict);
			}
		});
	var _elm_lang$core$Dict$insert = F3(
		function (key, value, dict) {
			return A3(
				_elm_lang$core$Dict$update,
				key,
				_elm_lang$core$Basics$always(
					_elm_lang$core$Maybe$Just(value)),
				dict);
		});
	var _elm_lang$core$Dict$singleton = F2(
		function (key, value) {
			return A3(_elm_lang$core$Dict$insert, key, value, _elm_lang$core$Dict$empty);
		});
	var _elm_lang$core$Dict$union = F2(
		function (t1, t2) {
			return A3(_elm_lang$core$Dict$foldl, _elm_lang$core$Dict$insert, t2, t1);
		});
	var _elm_lang$core$Dict$filter = F2(
		function (predicate, dictionary) {
			var add = F3(
				function (key, value, dict) {
					return A2(predicate, key, value) ? A3(_elm_lang$core$Dict$insert, key, value, dict) : dict;
				});
			return A3(_elm_lang$core$Dict$foldl, add, _elm_lang$core$Dict$empty, dictionary);
		});
	var _elm_lang$core$Dict$intersect = F2(
		function (t1, t2) {
			return A2(
				_elm_lang$core$Dict$filter,
				F2(
					function (k, _p58) {
						return A2(_elm_lang$core$Dict$member, k, t2);
					}),
				t1);
		});
	var _elm_lang$core$Dict$partition = F2(
		function (predicate, dict) {
			var add = F3(
				function (key, value, _p59) {
					var _p60 = _p59;
					var _p62 = _p60._1;
					var _p61 = _p60._0;
					return A2(predicate, key, value) ? {
						ctor: '_Tuple2',
						_0: A3(_elm_lang$core$Dict$insert, key, value, _p61),
						_1: _p62
					} : {
						ctor: '_Tuple2',
						_0: _p61,
						_1: A3(_elm_lang$core$Dict$insert, key, value, _p62)
					};
				});
			return A3(
				_elm_lang$core$Dict$foldl,
				add,
				{ctor: '_Tuple2', _0: _elm_lang$core$Dict$empty, _1: _elm_lang$core$Dict$empty},
				dict);
		});
	var _elm_lang$core$Dict$fromList = function (assocs) {
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (_p63, dict) {
					var _p64 = _p63;
					return A3(_elm_lang$core$Dict$insert, _p64._0, _p64._1, dict);
				}),
			_elm_lang$core$Dict$empty,
			assocs);
	};
	var _elm_lang$core$Dict$remove = F2(
		function (key, dict) {
			return A3(
				_elm_lang$core$Dict$update,
				key,
				_elm_lang$core$Basics$always(_elm_lang$core$Maybe$Nothing),
				dict);
		});
	var _elm_lang$core$Dict$diff = F2(
		function (t1, t2) {
			return A3(
				_elm_lang$core$Dict$foldl,
				F3(
					function (k, v, t) {
						return A2(_elm_lang$core$Dict$remove, k, t);
					}),
				t1,
				t2);
		});
	
	//import Maybe, Native.Array, Native.List, Native.Utils, Result //
	
	var _elm_lang$core$Native_Json = function() {
	
	
	// CORE DECODERS
	
	function succeed(msg)
	{
		return {
			ctor: '<decoder>',
			tag: 'succeed',
			msg: msg
		};
	}
	
	function fail(msg)
	{
		return {
			ctor: '<decoder>',
			tag: 'fail',
			msg: msg
		};
	}
	
	function decodePrimitive(tag)
	{
		return {
			ctor: '<decoder>',
			tag: tag
		};
	}
	
	function decodeContainer(tag, decoder)
	{
		return {
			ctor: '<decoder>',
			tag: tag,
			decoder: decoder
		};
	}
	
	function decodeNull(value)
	{
		return {
			ctor: '<decoder>',
			tag: 'null',
			value: value
		};
	}
	
	function decodeField(field, decoder)
	{
		return {
			ctor: '<decoder>',
			tag: 'field',
			field: field,
			decoder: decoder
		};
	}
	
	function decodeKeyValuePairs(decoder)
	{
		return {
			ctor: '<decoder>',
			tag: 'key-value',
			decoder: decoder
		};
	}
	
	function decodeObject(f, decoders)
	{
		return {
			ctor: '<decoder>',
			tag: 'map-many',
			func: f,
			decoders: decoders
		};
	}
	
	function decodeTuple(f, decoders)
	{
		return {
			ctor: '<decoder>',
			tag: 'tuple',
			func: f,
			decoders: decoders
		};
	}
	
	function andThen(decoder, callback)
	{
		return {
			ctor: '<decoder>',
			tag: 'andThen',
			decoder: decoder,
			callback: callback
		};
	}
	
	function customAndThen(decoder, callback)
	{
		return {
			ctor: '<decoder>',
			tag: 'customAndThen',
			decoder: decoder,
			callback: callback
		};
	}
	
	function oneOf(decoders)
	{
		return {
			ctor: '<decoder>',
			tag: 'oneOf',
			decoders: decoders
		};
	}
	
	
	// DECODING OBJECTS
	
	function decodeObject1(f, d1)
	{
		return decodeObject(f, [d1]);
	}
	
	function decodeObject2(f, d1, d2)
	{
		return decodeObject(f, [d1, d2]);
	}
	
	function decodeObject3(f, d1, d2, d3)
	{
		return decodeObject(f, [d1, d2, d3]);
	}
	
	function decodeObject4(f, d1, d2, d3, d4)
	{
		return decodeObject(f, [d1, d2, d3, d4]);
	}
	
	function decodeObject5(f, d1, d2, d3, d4, d5)
	{
		return decodeObject(f, [d1, d2, d3, d4, d5]);
	}
	
	function decodeObject6(f, d1, d2, d3, d4, d5, d6)
	{
		return decodeObject(f, [d1, d2, d3, d4, d5, d6]);
	}
	
	function decodeObject7(f, d1, d2, d3, d4, d5, d6, d7)
	{
		return decodeObject(f, [d1, d2, d3, d4, d5, d6, d7]);
	}
	
	function decodeObject8(f, d1, d2, d3, d4, d5, d6, d7, d8)
	{
		return decodeObject(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
	}
	
	
	// DECODING TUPLES
	
	function decodeTuple1(f, d1)
	{
		return decodeTuple(f, [d1]);
	}
	
	function decodeTuple2(f, d1, d2)
	{
		return decodeTuple(f, [d1, d2]);
	}
	
	function decodeTuple3(f, d1, d2, d3)
	{
		return decodeTuple(f, [d1, d2, d3]);
	}
	
	function decodeTuple4(f, d1, d2, d3, d4)
	{
		return decodeTuple(f, [d1, d2, d3, d4]);
	}
	
	function decodeTuple5(f, d1, d2, d3, d4, d5)
	{
		return decodeTuple(f, [d1, d2, d3, d4, d5]);
	}
	
	function decodeTuple6(f, d1, d2, d3, d4, d5, d6)
	{
		return decodeTuple(f, [d1, d2, d3, d4, d5, d6]);
	}
	
	function decodeTuple7(f, d1, d2, d3, d4, d5, d6, d7)
	{
		return decodeTuple(f, [d1, d2, d3, d4, d5, d6, d7]);
	}
	
	function decodeTuple8(f, d1, d2, d3, d4, d5, d6, d7, d8)
	{
		return decodeTuple(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
	}
	
	
	// DECODE HELPERS
	
	function ok(value)
	{
		return { tag: 'ok', value: value };
	}
	
	function badPrimitive(type, value)
	{
		return { tag: 'primitive', type: type, value: value };
	}
	
	function badIndex(index, nestedProblems)
	{
		return { tag: 'index', index: index, rest: nestedProblems };
	}
	
	function badField(field, nestedProblems)
	{
		return { tag: 'field', field: field, rest: nestedProblems };
	}
	
	function badOneOf(problems)
	{
		return { tag: 'oneOf', problems: problems };
	}
	
	function badCustom(msg)
	{
		return { tag: 'custom', msg: msg };
	}
	
	function bad(msg)
	{
		return { tag: 'fail', msg: msg };
	}
	
	function badToString(problem)
	{
		var context = '_';
		while (problem)
		{
			switch (problem.tag)
			{
				case 'primitive':
					return 'Expecting ' + problem.type
						+ (context === '_' ? '' : ' at ' + context)
						+ ' but instead got: ' + jsToString(problem.value);
	
				case 'index':
					context += '[' + problem.index + ']';
					problem = problem.rest;
					break;
	
				case 'field':
					context += '.' + problem.field;
					problem = problem.rest;
					break;
	
				case 'oneOf':
					var problems = problem.problems;
					for (var i = 0; i < problems.length; i++)
					{
						problems[i] = badToString(problems[i]);
					}
					return 'I ran into the following problems'
						+ (context === '_' ? '' : ' at ' + context)
						+ ':\n\n' + problems.join('\n');
	
				case 'custom':
					return 'A `customDecoder` failed'
						+ (context === '_' ? '' : ' at ' + context)
						+ ' with the message: ' + problem.msg;
	
				case 'fail':
					return 'I ran into a `fail` decoder'
						+ (context === '_' ? '' : ' at ' + context)
						+ ': ' + problem.msg;
			}
		}
	}
	
	function jsToString(value)
	{
		return value === undefined
			? 'undefined'
			: JSON.stringify(value);
	}
	
	
	// DECODE
	
	function runOnString(decoder, string)
	{
		var json;
		try
		{
			json = JSON.parse(string);
		}
		catch (e)
		{
			return _elm_lang$core$Result$Err('Given an invalid JSON: ' + e.message);
		}
		return run(decoder, json);
	}
	
	function run(decoder, value)
	{
		var result = runHelp(decoder, value);
		return (result.tag === 'ok')
			? _elm_lang$core$Result$Ok(result.value)
			: _elm_lang$core$Result$Err(badToString(result));
	}
	
	function runHelp(decoder, value)
	{
		switch (decoder.tag)
		{
			case 'bool':
				return (typeof value === 'boolean')
					? ok(value)
					: badPrimitive('a Bool', value);
	
			case 'int':
				if (typeof value !== 'number') {
					return badPrimitive('an Int', value);
				}
	
				if (-2147483647 < value && value < 2147483647 && (value | 0) === value) {
					return ok(value);
				}
	
				if (isFinite(value) && !(value % 1)) {
					return ok(value);
				}
	
				return badPrimitive('an Int', value);
	
			case 'float':
				return (typeof value === 'number')
					? ok(value)
					: badPrimitive('a Float', value);
	
			case 'string':
				return (typeof value === 'string')
					? ok(value)
					: (value instanceof String)
						? ok(value + '')
						: badPrimitive('a String', value);
	
			case 'null':
				return (value === null)
					? ok(decoder.value)
					: badPrimitive('null', value);
	
			case 'value':
				return ok(value);
	
			case 'list':
				if (!(value instanceof Array))
				{
					return badPrimitive('a List', value);
				}
	
				var list = _elm_lang$core$Native_List.Nil;
				for (var i = value.length; i--; )
				{
					var result = runHelp(decoder.decoder, value[i]);
					if (result.tag !== 'ok')
					{
						return badIndex(i, result)
					}
					list = _elm_lang$core$Native_List.Cons(result.value, list);
				}
				return ok(list);
	
			case 'array':
				if (!(value instanceof Array))
				{
					return badPrimitive('an Array', value);
				}
	
				var len = value.length;
				var array = new Array(len);
				for (var i = len; i--; )
				{
					var result = runHelp(decoder.decoder, value[i]);
					if (result.tag !== 'ok')
					{
						return badIndex(i, result);
					}
					array[i] = result.value;
				}
				return ok(_elm_lang$core$Native_Array.fromJSArray(array));
	
			case 'maybe':
				var result = runHelp(decoder.decoder, value);
				return (result.tag === 'ok')
					? ok(_elm_lang$core$Maybe$Just(result.value))
					: ok(_elm_lang$core$Maybe$Nothing);
	
			case 'field':
				var field = decoder.field;
				if (typeof value !== 'object' || value === null || !(field in value))
				{
					return badPrimitive('an object with a field named `' + field + '`', value);
				}
	
				var result = runHelp(decoder.decoder, value[field]);
				return (result.tag === 'ok')
					? result
					: badField(field, result);
	
			case 'key-value':
				if (typeof value !== 'object' || value === null || value instanceof Array)
				{
					return badPrimitive('an object', value);
				}
	
				var keyValuePairs = _elm_lang$core$Native_List.Nil;
				for (var key in value)
				{
					var result = runHelp(decoder.decoder, value[key]);
					if (result.tag !== 'ok')
					{
						return badField(key, result);
					}
					var pair = _elm_lang$core$Native_Utils.Tuple2(key, result.value);
					keyValuePairs = _elm_lang$core$Native_List.Cons(pair, keyValuePairs);
				}
				return ok(keyValuePairs);
	
			case 'map-many':
				var answer = decoder.func;
				var decoders = decoder.decoders;
				for (var i = 0; i < decoders.length; i++)
				{
					var result = runHelp(decoders[i], value);
					if (result.tag !== 'ok')
					{
						return result;
					}
					answer = answer(result.value);
				}
				return ok(answer);
	
			case 'tuple':
				var decoders = decoder.decoders;
				var len = decoders.length;
	
				if ( !(value instanceof Array) || value.length !== len )
				{
					return badPrimitive('a Tuple with ' + len + ' entries', value);
				}
	
				var answer = decoder.func;
				for (var i = 0; i < len; i++)
				{
					var result = runHelp(decoders[i], value[i]);
					if (result.tag !== 'ok')
					{
						return badIndex(i, result);
					}
					answer = answer(result.value);
				}
				return ok(answer);
	
			case 'customAndThen':
				var result = runHelp(decoder.decoder, value);
				if (result.tag !== 'ok')
				{
					return result;
				}
				var realResult = decoder.callback(result.value);
				if (realResult.ctor === 'Err')
				{
					return badCustom(realResult._0);
				}
				return ok(realResult._0);
	
			case 'andThen':
				var result = runHelp(decoder.decoder, value);
				return (result.tag !== 'ok')
					? result
					: runHelp(decoder.callback(result.value), value);
	
			case 'oneOf':
				var errors = [];
				var temp = decoder.decoders;
				while (temp.ctor !== '[]')
				{
					var result = runHelp(temp._0, value);
	
					if (result.tag === 'ok')
					{
						return result;
					}
	
					errors.push(result);
	
					temp = temp._1;
				}
				return badOneOf(errors);
	
			case 'fail':
				return bad(decoder.msg);
	
			case 'succeed':
				return ok(decoder.msg);
		}
	}
	
	
	// EQUALITY
	
	function equality(a, b)
	{
		if (a === b)
		{
			return true;
		}
	
		if (a.tag !== b.tag)
		{
			return false;
		}
	
		switch (a.tag)
		{
			case 'succeed':
			case 'fail':
				return a.msg === b.msg;
	
			case 'bool':
			case 'int':
			case 'float':
			case 'string':
			case 'value':
				return true;
	
			case 'null':
				return a.value === b.value;
	
			case 'list':
			case 'array':
			case 'maybe':
			case 'key-value':
				return equality(a.decoder, b.decoder);
	
			case 'field':
				return a.field === b.field && equality(a.decoder, b.decoder);
	
			case 'map-many':
			case 'tuple':
				if (a.func !== b.func)
				{
					return false;
				}
				return listEquality(a.decoders, b.decoders);
	
			case 'andThen':
			case 'customAndThen':
				return a.callback === b.callback && equality(a.decoder, b.decoder);
	
			case 'oneOf':
				return listEquality(a.decoders, b.decoders);
		}
	}
	
	function listEquality(aDecoders, bDecoders)
	{
		var len = aDecoders.length;
		if (len !== bDecoders.length)
		{
			return false;
		}
		for (var i = 0; i < len; i++)
		{
			if (!equality(aDecoders[i], bDecoders[i]))
			{
				return false;
			}
		}
		return true;
	}
	
	
	// ENCODE
	
	function encode(indentLevel, value)
	{
		return JSON.stringify(value, null, indentLevel);
	}
	
	function identity(value)
	{
		return value;
	}
	
	function encodeObject(keyValuePairs)
	{
		var obj = {};
		while (keyValuePairs.ctor !== '[]')
		{
			var pair = keyValuePairs._0;
			obj[pair._0] = pair._1;
			keyValuePairs = keyValuePairs._1;
		}
		return obj;
	}
	
	return {
		encode: F2(encode),
		runOnString: F2(runOnString),
		run: F2(run),
	
		decodeNull: decodeNull,
		decodePrimitive: decodePrimitive,
		decodeContainer: F2(decodeContainer),
	
		decodeField: F2(decodeField),
	
		decodeObject1: F2(decodeObject1),
		decodeObject2: F3(decodeObject2),
		decodeObject3: F4(decodeObject3),
		decodeObject4: F5(decodeObject4),
		decodeObject5: F6(decodeObject5),
		decodeObject6: F7(decodeObject6),
		decodeObject7: F8(decodeObject7),
		decodeObject8: F9(decodeObject8),
		decodeKeyValuePairs: decodeKeyValuePairs,
	
		decodeTuple1: F2(decodeTuple1),
		decodeTuple2: F3(decodeTuple2),
		decodeTuple3: F4(decodeTuple3),
		decodeTuple4: F5(decodeTuple4),
		decodeTuple5: F6(decodeTuple5),
		decodeTuple6: F7(decodeTuple6),
		decodeTuple7: F8(decodeTuple7),
		decodeTuple8: F9(decodeTuple8),
	
		andThen: F2(andThen),
		customAndThen: F2(customAndThen),
		fail: fail,
		succeed: succeed,
		oneOf: oneOf,
	
		identity: identity,
		encodeNull: null,
		encodeArray: _elm_lang$core$Native_Array.toJSArray,
		encodeList: _elm_lang$core$Native_List.toArray,
		encodeObject: encodeObject,
	
		equality: equality
	};
	
	}();
	
	var _elm_lang$core$Json_Encode$list = _elm_lang$core$Native_Json.encodeList;
	var _elm_lang$core$Json_Encode$array = _elm_lang$core$Native_Json.encodeArray;
	var _elm_lang$core$Json_Encode$object = _elm_lang$core$Native_Json.encodeObject;
	var _elm_lang$core$Json_Encode$null = _elm_lang$core$Native_Json.encodeNull;
	var _elm_lang$core$Json_Encode$bool = _elm_lang$core$Native_Json.identity;
	var _elm_lang$core$Json_Encode$float = _elm_lang$core$Native_Json.identity;
	var _elm_lang$core$Json_Encode$int = _elm_lang$core$Native_Json.identity;
	var _elm_lang$core$Json_Encode$string = _elm_lang$core$Native_Json.identity;
	var _elm_lang$core$Json_Encode$encode = _elm_lang$core$Native_Json.encode;
	var _elm_lang$core$Json_Encode$Value = {ctor: 'Value'};
	
	var _elm_lang$core$Json_Decode$tuple8 = _elm_lang$core$Native_Json.decodeTuple8;
	var _elm_lang$core$Json_Decode$tuple7 = _elm_lang$core$Native_Json.decodeTuple7;
	var _elm_lang$core$Json_Decode$tuple6 = _elm_lang$core$Native_Json.decodeTuple6;
	var _elm_lang$core$Json_Decode$tuple5 = _elm_lang$core$Native_Json.decodeTuple5;
	var _elm_lang$core$Json_Decode$tuple4 = _elm_lang$core$Native_Json.decodeTuple4;
	var _elm_lang$core$Json_Decode$tuple3 = _elm_lang$core$Native_Json.decodeTuple3;
	var _elm_lang$core$Json_Decode$tuple2 = _elm_lang$core$Native_Json.decodeTuple2;
	var _elm_lang$core$Json_Decode$tuple1 = _elm_lang$core$Native_Json.decodeTuple1;
	var _elm_lang$core$Json_Decode$succeed = _elm_lang$core$Native_Json.succeed;
	var _elm_lang$core$Json_Decode$fail = _elm_lang$core$Native_Json.fail;
	var _elm_lang$core$Json_Decode$andThen = _elm_lang$core$Native_Json.andThen;
	var _elm_lang$core$Json_Decode$customDecoder = _elm_lang$core$Native_Json.customAndThen;
	var _elm_lang$core$Json_Decode$decodeValue = _elm_lang$core$Native_Json.run;
	var _elm_lang$core$Json_Decode$value = _elm_lang$core$Native_Json.decodePrimitive('value');
	var _elm_lang$core$Json_Decode$maybe = function (decoder) {
		return A2(_elm_lang$core$Native_Json.decodeContainer, 'maybe', decoder);
	};
	var _elm_lang$core$Json_Decode$null = _elm_lang$core$Native_Json.decodeNull;
	var _elm_lang$core$Json_Decode$array = function (decoder) {
		return A2(_elm_lang$core$Native_Json.decodeContainer, 'array', decoder);
	};
	var _elm_lang$core$Json_Decode$list = function (decoder) {
		return A2(_elm_lang$core$Native_Json.decodeContainer, 'list', decoder);
	};
	var _elm_lang$core$Json_Decode$bool = _elm_lang$core$Native_Json.decodePrimitive('bool');
	var _elm_lang$core$Json_Decode$int = _elm_lang$core$Native_Json.decodePrimitive('int');
	var _elm_lang$core$Json_Decode$float = _elm_lang$core$Native_Json.decodePrimitive('float');
	var _elm_lang$core$Json_Decode$string = _elm_lang$core$Native_Json.decodePrimitive('string');
	var _elm_lang$core$Json_Decode$oneOf = _elm_lang$core$Native_Json.oneOf;
	var _elm_lang$core$Json_Decode$keyValuePairs = _elm_lang$core$Native_Json.decodeKeyValuePairs;
	var _elm_lang$core$Json_Decode$object8 = _elm_lang$core$Native_Json.decodeObject8;
	var _elm_lang$core$Json_Decode$object7 = _elm_lang$core$Native_Json.decodeObject7;
	var _elm_lang$core$Json_Decode$object6 = _elm_lang$core$Native_Json.decodeObject6;
	var _elm_lang$core$Json_Decode$object5 = _elm_lang$core$Native_Json.decodeObject5;
	var _elm_lang$core$Json_Decode$object4 = _elm_lang$core$Native_Json.decodeObject4;
	var _elm_lang$core$Json_Decode$object3 = _elm_lang$core$Native_Json.decodeObject3;
	var _elm_lang$core$Json_Decode$object2 = _elm_lang$core$Native_Json.decodeObject2;
	var _elm_lang$core$Json_Decode$object1 = _elm_lang$core$Native_Json.decodeObject1;
	var _elm_lang$core$Json_Decode_ops = _elm_lang$core$Json_Decode_ops || {};
	_elm_lang$core$Json_Decode_ops[':='] = _elm_lang$core$Native_Json.decodeField;
	var _elm_lang$core$Json_Decode$at = F2(
		function (fields, decoder) {
			return A3(
				_elm_lang$core$List$foldr,
				F2(
					function (x, y) {
						return A2(_elm_lang$core$Json_Decode_ops[':='], x, y);
					}),
				decoder,
				fields);
		});
	var _elm_lang$core$Json_Decode$decodeString = _elm_lang$core$Native_Json.runOnString;
	var _elm_lang$core$Json_Decode$map = _elm_lang$core$Native_Json.decodeObject1;
	var _elm_lang$core$Json_Decode$dict = function (decoder) {
		return A2(
			_elm_lang$core$Json_Decode$map,
			_elm_lang$core$Dict$fromList,
			_elm_lang$core$Json_Decode$keyValuePairs(decoder));
	};
	var _elm_lang$core$Json_Decode$Decoder = {ctor: 'Decoder'};
	
	//import Native.Json //
	
	var _elm_lang$virtual_dom$Native_VirtualDom = function() {
	
	var STYLE_KEY = 'STYLE';
	var EVENT_KEY = 'EVENT';
	var ATTR_KEY = 'ATTR';
	var ATTR_NS_KEY = 'ATTR_NS';
	
	
	
	////////////  VIRTUAL DOM NODES  ////////////
	
	
	function text(string)
	{
		return {
			type: 'text',
			text: string
		};
	}
	
	
	function node(tag)
	{
		return F2(function(factList, kidList) {
			return nodeHelp(tag, factList, kidList);
		});
	}
	
	
	function nodeHelp(tag, factList, kidList)
	{
		var organized = organizeFacts(factList);
		var namespace = organized.namespace;
		var facts = organized.facts;
	
		var children = [];
		var descendantsCount = 0;
		while (kidList.ctor !== '[]')
		{
			var kid = kidList._0;
			descendantsCount += (kid.descendantsCount || 0);
			children.push(kid);
			kidList = kidList._1;
		}
		descendantsCount += children.length;
	
		return {
			type: 'node',
			tag: tag,
			facts: facts,
			children: children,
			namespace: namespace,
			descendantsCount: descendantsCount
		};
	}
	
	
	function keyedNode(tag, factList, kidList)
	{
		var organized = organizeFacts(factList);
		var namespace = organized.namespace;
		var facts = organized.facts;
	
		var children = [];
		var descendantsCount = 0;
		while (kidList.ctor !== '[]')
		{
			var kid = kidList._0;
			descendantsCount += (kid._1.descendantsCount || 0);
			children.push(kid);
			kidList = kidList._1;
		}
		descendantsCount += children.length;
	
		return {
			type: 'keyed-node',
			tag: tag,
			facts: facts,
			children: children,
			namespace: namespace,
			descendantsCount: descendantsCount
		};
	}
	
	
	function custom(factList, model, impl)
	{
		var facts = organizeFacts(factList).facts;
	
		return {
			type: 'custom',
			facts: facts,
			model: model,
			impl: impl
		};
	}
	
	
	function map(tagger, node)
	{
		return {
			type: 'tagger',
			tagger: tagger,
			node: node,
			descendantsCount: 1 + (node.descendantsCount || 0)
		};
	}
	
	
	function thunk(func, args, thunk)
	{
		return {
			type: 'thunk',
			func: func,
			args: args,
			thunk: thunk,
			node: undefined
		};
	}
	
	function lazy(fn, a)
	{
		return thunk(fn, [a], function() {
			return fn(a);
		});
	}
	
	function lazy2(fn, a, b)
	{
		return thunk(fn, [a,b], function() {
			return A2(fn, a, b);
		});
	}
	
	function lazy3(fn, a, b, c)
	{
		return thunk(fn, [a,b,c], function() {
			return A3(fn, a, b, c);
		});
	}
	
	
	
	// FACTS
	
	
	function organizeFacts(factList)
	{
		var namespace, facts = {};
	
		while (factList.ctor !== '[]')
		{
			var entry = factList._0;
			var key = entry.key;
	
			if (key === ATTR_KEY || key === ATTR_NS_KEY || key === EVENT_KEY)
			{
				var subFacts = facts[key] || {};
				subFacts[entry.realKey] = entry.value;
				facts[key] = subFacts;
			}
			else if (key === STYLE_KEY)
			{
				var styles = facts[key] || {};
				var styleList = entry.value;
				while (styleList.ctor !== '[]')
				{
					var style = styleList._0;
					styles[style._0] = style._1;
					styleList = styleList._1;
				}
				facts[key] = styles;
			}
			else if (key === 'namespace')
			{
				namespace = entry.value;
			}
			else
			{
				facts[key] = entry.value;
			}
			factList = factList._1;
		}
	
		return {
			facts: facts,
			namespace: namespace
		};
	}
	
	
	
	////////////  PROPERTIES AND ATTRIBUTES  ////////////
	
	
	function style(value)
	{
		return {
			key: STYLE_KEY,
			value: value
		};
	}
	
	
	function property(key, value)
	{
		return {
			key: key,
			value: value
		};
	}
	
	
	function attribute(key, value)
	{
		return {
			key: ATTR_KEY,
			realKey: key,
			value: value
		};
	}
	
	
	function attributeNS(namespace, key, value)
	{
		return {
			key: ATTR_NS_KEY,
			realKey: key,
			value: {
				value: value,
				namespace: namespace
			}
		};
	}
	
	
	function on(name, options, decoder)
	{
		return {
			key: EVENT_KEY,
			realKey: name,
			value: {
				options: options,
				decoder: decoder
			}
		};
	}
	
	
	function equalEvents(a, b)
	{
		if (!a.options === b.options)
		{
			if (a.stopPropagation !== b.stopPropagation || a.preventDefault !== b.preventDefault)
			{
				return false;
			}
		}
		return _elm_lang$core$Native_Json.equality(a.decoder, b.decoder);
	}
	
	
	
	////////////  RENDERER  ////////////
	
	
	function renderer(parent, tagger, initialVirtualNode)
	{
		var eventNode = { tagger: tagger, parent: undefined };
	
		var domNode = render(initialVirtualNode, eventNode);
		parent.appendChild(domNode);
	
		var state = 'NO_REQUEST';
		var currentVirtualNode = initialVirtualNode;
		var nextVirtualNode = initialVirtualNode;
	
		function registerVirtualNode(vNode)
		{
			if (state === 'NO_REQUEST')
			{
				rAF(updateIfNeeded);
			}
			state = 'PENDING_REQUEST';
			nextVirtualNode = vNode;
		}
	
		function updateIfNeeded()
		{
			switch (state)
			{
				case 'NO_REQUEST':
					throw new Error(
						'Unexpected draw callback.\n' +
						'Please report this to <https://github.com/elm-lang/core/issues>.'
					);
	
				case 'PENDING_REQUEST':
					rAF(updateIfNeeded);
					state = 'EXTRA_REQUEST';
	
					var patches = diff(currentVirtualNode, nextVirtualNode);
					domNode = applyPatches(domNode, currentVirtualNode, patches, eventNode);
					currentVirtualNode = nextVirtualNode;
	
					return;
	
				case 'EXTRA_REQUEST':
					state = 'NO_REQUEST';
					return;
			}
		}
	
		return { update: registerVirtualNode };
	}
	
	
	var rAF =
		typeof requestAnimationFrame !== 'undefined'
			? requestAnimationFrame
			: function(cb) { setTimeout(cb, 1000 / 60); };
	
	
	
	////////////  RENDER  ////////////
	
	
	function render(vNode, eventNode)
	{
		switch (vNode.type)
		{
			case 'thunk':
				if (!vNode.node)
				{
					vNode.node = vNode.thunk();
				}
				return render(vNode.node, eventNode);
	
			case 'tagger':
				var subNode = vNode.node;
				var tagger = vNode.tagger;
	
				while (subNode.type === 'tagger')
				{
					typeof tagger !== 'object'
						? tagger = [tagger, subNode.tagger]
						: tagger.push(subNode.tagger);
	
					subNode = subNode.node;
				}
	
				var subEventRoot = {
					tagger: tagger,
					parent: eventNode
				};
	
				var domNode = render(subNode, subEventRoot);
				domNode.elm_event_node_ref = subEventRoot;
				return domNode;
	
			case 'text':
				return document.createTextNode(vNode.text);
	
			case 'node':
				var domNode = vNode.namespace
					? document.createElementNS(vNode.namespace, vNode.tag)
					: document.createElement(vNode.tag);
	
				applyFacts(domNode, eventNode, vNode.facts);
	
				var children = vNode.children;
	
				for (var i = 0; i < children.length; i++)
				{
					domNode.appendChild(render(children[i], eventNode));
				}
	
				return domNode;
	
			case 'keyed-node':
				var domNode = vNode.namespace
					? document.createElementNS(vNode.namespace, vNode.tag)
					: document.createElement(vNode.tag);
	
				applyFacts(domNode, eventNode, vNode.facts);
	
				var children = vNode.children;
	
				for (var i = 0; i < children.length; i++)
				{
					domNode.appendChild(render(children[i]._1, eventNode));
				}
	
				return domNode;
	
			case 'custom':
				var domNode = vNode.impl.render(vNode.model);
				applyFacts(domNode, eventNode, vNode.facts);
				return domNode;
		}
	}
	
	
	
	////////////  APPLY FACTS  ////////////
	
	
	function applyFacts(domNode, eventNode, facts)
	{
		for (var key in facts)
		{
			var value = facts[key];
	
			switch (key)
			{
				case STYLE_KEY:
					applyStyles(domNode, value);
					break;
	
				case EVENT_KEY:
					applyEvents(domNode, eventNode, value);
					break;
	
				case ATTR_KEY:
					applyAttrs(domNode, value);
					break;
	
				case ATTR_NS_KEY:
					applyAttrsNS(domNode, value);
					break;
	
				case 'value':
					if (domNode[key] !== value)
					{
						domNode[key] = value;
					}
					break;
	
				default:
					domNode[key] = value;
					break;
			}
		}
	}
	
	function applyStyles(domNode, styles)
	{
		var domNodeStyle = domNode.style;
	
		for (var key in styles)
		{
			domNodeStyle[key] = styles[key];
		}
	}
	
	function applyEvents(domNode, eventNode, events)
	{
		var allHandlers = domNode.elm_handlers || {};
	
		for (var key in events)
		{
			var handler = allHandlers[key];
			var value = events[key];
	
			if (typeof value === 'undefined')
			{
				domNode.removeEventListener(key, handler);
				allHandlers[key] = undefined;
			}
			else if (typeof handler === 'undefined')
			{
				var handler = makeEventHandler(eventNode, value);
				domNode.addEventListener(key, handler);
				allHandlers[key] = handler;
			}
			else
			{
				handler.info = value;
			}
		}
	
		domNode.elm_handlers = allHandlers;
	}
	
	function makeEventHandler(eventNode, info)
	{
		function eventHandler(event)
		{
			var info = eventHandler.info;
	
			var value = A2(_elm_lang$core$Native_Json.run, info.decoder, event);
	
			if (value.ctor === 'Ok')
			{
				var options = info.options;
				if (options.stopPropagation)
				{
					event.stopPropagation();
				}
				if (options.preventDefault)
				{
					event.preventDefault();
				}
	
				var message = value._0;
	
				var currentEventNode = eventNode;
				while (currentEventNode)
				{
					var tagger = currentEventNode.tagger;
					if (typeof tagger === 'function')
					{
						message = tagger(message);
					}
					else
					{
						for (var i = tagger.length; i--; )
						{
							message = tagger[i](message);
						}
					}
					currentEventNode = currentEventNode.parent;
				}
			}
		};
	
		eventHandler.info = info;
	
		return eventHandler;
	}
	
	function applyAttrs(domNode, attrs)
	{
		for (var key in attrs)
		{
			var value = attrs[key];
			if (typeof value === 'undefined')
			{
				domNode.removeAttribute(key);
			}
			else
			{
				domNode.setAttribute(key, value);
			}
		}
	}
	
	function applyAttrsNS(domNode, nsAttrs)
	{
		for (var key in nsAttrs)
		{
			var pair = nsAttrs[key];
			var namespace = pair.namespace;
			var value = pair.value;
	
			if (typeof value === 'undefined')
			{
				domNode.removeAttributeNS(namespace, key);
			}
			else
			{
				domNode.setAttributeNS(namespace, key, value);
			}
		}
	}
	
	
	
	////////////  DIFF  ////////////
	
	
	function diff(a, b)
	{
		var patches = [];
		diffHelp(a, b, patches, 0);
		return patches;
	}
	
	
	function makePatch(type, index, data)
	{
		return {
			index: index,
			type: type,
			data: data,
			domNode: undefined,
			eventNode: undefined
		};
	}
	
	
	function diffHelp(a, b, patches, index)
	{
		if (a === b)
		{
			return;
		}
	
		var aType = a.type;
		var bType = b.type;
	
		// Bail if you run into different types of nodes. Implies that the
		// structure has changed significantly and it's not worth a diff.
		if (aType !== bType)
		{
			patches.push(makePatch('p-redraw', index, b));
			return;
		}
	
		// Now we know that both nodes are the same type.
		switch (bType)
		{
			case 'thunk':
				var aArgs = a.args;
				var bArgs = b.args;
				var i = aArgs.length;
				var same = a.func === b.func && i === bArgs.length;
				while (same && i--)
				{
					same = aArgs[i] === bArgs[i];
				}
				if (same)
				{
					b.node = a.node;
					return;
				}
				b.node = b.thunk();
				var subPatches = [];
				diffHelp(a.node, b.node, subPatches, 0);
				if (subPatches.length > 0)
				{
					patches.push(makePatch('p-thunk', index, subPatches));
				}
				return;
	
			case 'tagger':
				// gather nested taggers
				var aTaggers = a.tagger;
				var bTaggers = b.tagger;
				var nesting = false;
	
				var aSubNode = a.node;
				while (aSubNode.type === 'tagger')
				{
					nesting = true;
	
					typeof aTaggers !== 'object'
						? aTaggers = [aTaggers, aSubNode.tagger]
						: aTaggers.push(aSubNode.tagger);
	
					aSubNode = aSubNode.node;
				}
	
				var bSubNode = b.node;
				while (bSubNode.type === 'tagger')
				{
					nesting = true;
	
					typeof bTaggers !== 'object'
						? bTaggers = [bTaggers, bSubNode.tagger]
						: bTaggers.push(bSubNode.tagger);
	
					bSubNode = bSubNode.node;
				}
	
				// Just bail if different numbers of taggers. This implies the
				// structure of the virtual DOM has changed.
				if (nesting && aTaggers.length !== bTaggers.length)
				{
					patches.push(makePatch('p-redraw', index, b));
					return;
				}
	
				// check if taggers are "the same"
				if (nesting ? !pairwiseRefEqual(aTaggers, bTaggers) : aTaggers !== bTaggers)
				{
					patches.push(makePatch('p-tagger', index, bTaggers));
				}
	
				// diff everything below the taggers
				diffHelp(aSubNode, bSubNode, patches, index + 1);
				return;
	
			case 'text':
				if (a.text !== b.text)
				{
					patches.push(makePatch('p-text', index, b.text));
					return;
				}
	
				return;
	
			case 'node':
				// Bail if obvious indicators have changed. Implies more serious
				// structural changes such that it's not worth it to diff.
				if (a.tag !== b.tag || a.namespace !== b.namespace)
				{
					patches.push(makePatch('p-redraw', index, b));
					return;
				}
	
				var factsDiff = diffFacts(a.facts, b.facts);
	
				if (typeof factsDiff !== 'undefined')
				{
					patches.push(makePatch('p-facts', index, factsDiff));
				}
	
				diffChildren(a, b, patches, index);
				return;
	
			case 'keyed-node':
				// Bail if obvious indicators have changed. Implies more serious
				// structural changes such that it's not worth it to diff.
				if (a.tag !== b.tag || a.namespace !== b.namespace)
				{
					patches.push(makePatch('p-redraw', index, b));
					return;
				}
	
				var factsDiff = diffFacts(a.facts, b.facts);
	
				if (typeof factsDiff !== 'undefined')
				{
					patches.push(makePatch('p-facts', index, factsDiff));
				}
	
				diffKeyedChildren(a, b, patches, index);
				return;
	
			case 'custom':
				if (a.impl !== b.impl)
				{
					patches.push(makePatch('p-redraw', index, b));
					return;
				}
	
				var factsDiff = diffFacts(a.facts, b.facts);
				if (typeof factsDiff !== 'undefined')
				{
					patches.push(makePatch('p-facts', index, factsDiff));
				}
	
				var patch = b.impl.diff(a,b);
				if (patch)
				{
					patches.push(makePatch('p-custom', index, patch));
					return;
				}
	
				return;
		}
	}
	
	
	// assumes the incoming arrays are the same length
	function pairwiseRefEqual(as, bs)
	{
		for (var i = 0; i < as.length; i++)
		{
			if (as[i] !== bs[i])
			{
				return false;
			}
		}
	
		return true;
	}
	
	
	// TODO Instead of creating a new diff object, it's possible to just test if
	// there *is* a diff. During the actual patch, do the diff again and make the
	// modifications directly. This way, there's no new allocations. Worth it?
	function diffFacts(a, b, category)
	{
		var diff;
	
		// look for changes and removals
		for (var aKey in a)
		{
			if (aKey === STYLE_KEY || aKey === EVENT_KEY || aKey === ATTR_KEY || aKey === ATTR_NS_KEY)
			{
				var subDiff = diffFacts(a[aKey], b[aKey] || {}, aKey);
				if (subDiff)
				{
					diff = diff || {};
					diff[aKey] = subDiff;
				}
				continue;
			}
	
			// remove if not in the new facts
			if (!(aKey in b))
			{
				diff = diff || {};
				diff[aKey] =
					(typeof category === 'undefined')
						? (typeof a[aKey] === 'string' ? '' : null)
						:
					(category === STYLE_KEY)
						? ''
						:
					(category === EVENT_KEY || category === ATTR_KEY)
						? undefined
						:
					{ namespace: a[aKey].namespace, value: undefined };
	
				continue;
			}
	
			var aValue = a[aKey];
			var bValue = b[aKey];
	
			// reference equal, so don't worry about it
			if (aValue === bValue && aKey !== 'value'
				|| category === EVENT_KEY && equalEvents(aValue, bValue))
			{
				continue;
			}
	
			diff = diff || {};
			diff[aKey] = bValue;
		}
	
		// add new stuff
		for (var bKey in b)
		{
			if (!(bKey in a))
			{
				diff = diff || {};
				diff[bKey] = b[bKey];
			}
		}
	
		return diff;
	}
	
	
	function diffChildren(aParent, bParent, patches, rootIndex)
	{
		var aChildren = aParent.children;
		var bChildren = bParent.children;
	
		var aLen = aChildren.length;
		var bLen = bChildren.length;
	
		// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS
	
		if (aLen > bLen)
		{
			patches.push(makePatch('p-remove-last', rootIndex, aLen - bLen));
		}
		else if (aLen < bLen)
		{
			patches.push(makePatch('p-append', rootIndex, bChildren.slice(aLen)));
		}
	
		// PAIRWISE DIFF EVERYTHING ELSE
	
		var index = rootIndex;
		var minLen = aLen < bLen ? aLen : bLen;
		for (var i = 0; i < minLen; i++)
		{
			index++;
			var aChild = aChildren[i];
			diffHelp(aChild, bChildren[i], patches, index);
			index += aChild.descendantsCount || 0;
		}
	}
	
	
	
	////////////  KEYED DIFF  ////////////
	
	
	function diffKeyedChildren(aParent, bParent, patches, rootIndex)
	{
		var localPatches = [];
	
		var changes = {}; // Dict String Entry
		var inserts = []; // Array { index : Int, entry : Entry }
		// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }
	
		var aChildren = aParent.children;
		var bChildren = bParent.children;
		var aLen = aChildren.length;
		var bLen = bChildren.length;
		var aIndex = 0;
		var bIndex = 0;
	
		var index = rootIndex;
	
		while (aIndex < aLen && bIndex < bLen)
		{
			var a = aChildren[aIndex];
			var b = bChildren[bIndex];
	
			var aKey = a._0;
			var bKey = b._0;
			var aNode = a._1;
			var bNode = b._1;
	
			// check if keys match
	
			if (aKey === bKey)
			{
				index++;
				diffHelp(aNode, bNode, localPatches, index);
				index += aNode.descendantsCount || 0;
	
				aIndex++;
				bIndex++;
				continue;
			}
	
			// look ahead 1 to detect insertions and removals.
	
			var aLookAhead = aIndex + 1 < aLen;
			var bLookAhead = bIndex + 1 < bLen;
	
			if (aLookAhead)
			{
				var aNext = aChildren[aIndex + 1];
				var aNextKey = aNext._0;
				var aNextNode = aNext._1;
				var oldMatch = bKey === aNextKey;
			}
	
			if (bLookAhead)
			{
				var bNext = bChildren[bIndex + 1];
				var bNextKey = bNext._0;
				var bNextNode = bNext._1;
				var newMatch = aKey === bNextKey;
			}
	
	
			// swap a and b
			if (aLookAhead && bLookAhead && newMatch && oldMatch)
			{
				index++;
				diffHelp(aNode, bNextNode, localPatches, index);
				insertNode(changes, localPatches, aKey, bNode, bIndex, inserts);
				index += aNode.descendantsCount || 0;
	
				index++;
				removeNode(changes, localPatches, aKey, aNextNode, index);
				index += aNextNode.descendantsCount || 0;
	
				aIndex += 2;
				bIndex += 2;
				continue;
			}
	
			// insert b
			if (bLookAhead && newMatch)
			{
				index++;
				insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
				diffHelp(aNode, bNextNode, localPatches, index);
				index += aNode.descendantsCount || 0;
	
				aIndex += 1;
				bIndex += 2;
				continue;
			}
	
			// remove a
			if (aLookAhead && oldMatch)
			{
				index++;
				removeNode(changes, localPatches, aKey, aNode, index);
				index += aNode.descendantsCount || 0;
	
				index++;
				diffHelp(aNextNode, bNode, localPatches, index);
				index += aNextNode.descendantsCount || 0;
	
				aIndex += 2;
				bIndex += 1;
				continue;
			}
	
			// remove a, insert b
			if (aLookAhead && bLookAhead && aNextKey === bNextKey)
			{
				index++;
				removeNode(changes, localPatches, aKey, aNode, index);
				insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
				index += aNode.descendantsCount || 0;
	
				index++;
				diffHelp(aNextNode, bNextNode, localPatches, index);
				index += aNextNode.descendantsCount || 0;
	
				aIndex += 2;
				bIndex += 2;
				continue;
			}
	
			break;
		}
	
		// eat up any remaining nodes with removeNode and insertNode
	
		while (aIndex < aLen)
		{
			index++;
			var a = aChildren[aIndex];
			var aNode = a._1;
			removeNode(changes, localPatches, a._0, aNode, index);
			index += aNode.descendantsCount || 0;
			aIndex++;
		}
	
		var endInserts;
		while (bIndex < bLen)
		{
			endInserts = endInserts || [];
			var b = bChildren[bIndex];
			insertNode(changes, localPatches, b._0, b._1, undefined, endInserts);
			bIndex++;
		}
	
		if (localPatches.length > 0 || inserts.length > 0 || typeof endInserts !== 'undefined')
		{
			patches.push(makePatch('p-reorder', rootIndex, {
				patches: localPatches,
				inserts: inserts,
				endInserts: endInserts
			}));
		}
	}
	
	
	
	////////////  CHANGES FROM KEYED DIFF  ////////////
	
	
	var POSTFIX = '_elmW6BL';
	
	
	function insertNode(changes, localPatches, key, vnode, bIndex, inserts)
	{
		var entry = changes[key];
	
		// never seen this key before
		if (typeof entry === 'undefined')
		{
			entry = {
				tag: 'insert',
				vnode: vnode,
				index: bIndex,
				data: undefined
			};
	
			inserts.push({ index: bIndex, entry: entry });
			changes[key] = entry;
	
			return;
		}
	
		// this key was removed earlier, a match!
		if (entry.tag === 'remove')
		{
			inserts.push({ index: bIndex, entry: entry });
	
			entry.tag = 'move';
			var subPatches = [];
			diffHelp(entry.vnode, vnode, subPatches, entry.index);
			entry.index = bIndex;
			entry.data.data = {
				patches: subPatches,
				entry: entry
			};
	
			return;
		}
	
		// this key has already been inserted or moved, a duplicate!
		insertNode(changes, localPatches, key + POSTFIX, vnode, bIndex, inserts);
	}
	
	
	function removeNode(changes, localPatches, key, vnode, index)
	{
		var entry = changes[key];
	
		// never seen this key before
		if (typeof entry === 'undefined')
		{
			var patch = makePatch('p-remove', index, undefined);
			localPatches.push(patch);
	
			changes[key] = {
				tag: 'remove',
				vnode: vnode,
				index: index,
				data: patch
			};
	
			return;
		}
	
		// this key was inserted earlier, a match!
		if (entry.tag === 'insert')
		{
			entry.tag = 'move';
			var subPatches = [];
			diffHelp(vnode, entry.vnode, subPatches, index);
	
			var patch = makePatch('p-remove', index, {
				patches: subPatches,
				entry: entry
			});
			localPatches.push(patch);
	
			return;
		}
	
		// this key has already been removed or moved, a duplicate!
		removeNode(changes, localPatches, key + POSTFIX, vnode, index);
	}
	
	
	
	////////////  ADD DOM NODES  ////////////
	//
	// Each DOM node has an "index" assigned in order of traversal. It is important
	// to minimize our crawl over the actual DOM, so these indexes (along with the
	// descendantsCount of virtual nodes) let us skip touching entire subtrees of
	// the DOM if we know there are no patches there.
	
	
	function addDomNodes(domNode, vNode, patches, eventNode)
	{
		addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.descendantsCount, eventNode);
	}
	
	
	// assumes `patches` is non-empty and indexes increase monotonically.
	function addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
	{
		var patch = patches[i];
		var index = patch.index;
	
		while (index === low)
		{
			var patchType = patch.type;
	
			if (patchType === 'p-thunk')
			{
				addDomNodes(domNode, vNode.node, patch.data, eventNode);
			}
			else if (patchType === 'p-reorder')
			{
				patch.domNode = domNode;
				patch.eventNode = eventNode;
	
				var subPatches = patch.data.patches;
				if (subPatches.length > 0)
				{
					addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
			else if (patchType === 'p-remove')
			{
				patch.domNode = domNode;
				patch.eventNode = eventNode;
	
				var data = patch.data;
				if (typeof data !== 'undefined')
				{
					data.entry.data = domNode;
					var subPatches = data.patches;
					if (subPatches.length > 0)
					{
						addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
					}
				}
			}
			else
			{
				patch.domNode = domNode;
				patch.eventNode = eventNode;
			}
	
			i++;
	
			if (!(patch = patches[i]) || (index = patch.index) > high)
			{
				return i;
			}
		}
	
		switch (vNode.type)
		{
			case 'tagger':
				var subNode = vNode.node;
	
				while (subNode.type === "tagger")
				{
					subNode = subNode.node;
				}
	
				return addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	
			case 'node':
				var vChildren = vNode.children;
				var childNodes = domNode.childNodes;
				for (var j = 0; j < vChildren.length; j++)
				{
					low++;
					var vChild = vChildren[j];
					var nextLow = low + (vChild.descendantsCount || 0);
					if (low <= index && index <= nextLow)
					{
						i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
						if (!(patch = patches[i]) || (index = patch.index) > high)
						{
							return i;
						}
					}
					low = nextLow;
				}
				return i;
	
			case 'keyed-node':
				var vChildren = vNode.children;
				var childNodes = domNode.childNodes;
				for (var j = 0; j < vChildren.length; j++)
				{
					low++;
					var vChild = vChildren[j]._1;
					var nextLow = low + (vChild.descendantsCount || 0);
					if (low <= index && index <= nextLow)
					{
						i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
						if (!(patch = patches[i]) || (index = patch.index) > high)
						{
							return i;
						}
					}
					low = nextLow;
				}
				return i;
	
			case 'text':
			case 'thunk':
				throw new Error('should never traverse `text` or `thunk` nodes like this');
		}
	}
	
	
	
	////////////  APPLY PATCHES  ////////////
	
	
	function applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
	{
		if (patches.length === 0)
		{
			return rootDomNode;
		}
	
		addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
		return applyPatchesHelp(rootDomNode, patches);
	}
	
	function applyPatchesHelp(rootDomNode, patches)
	{
		for (var i = 0; i < patches.length; i++)
		{
			var patch = patches[i];
			var localDomNode = patch.domNode
			var newNode = applyPatch(localDomNode, patch);
			if (localDomNode === rootDomNode)
			{
				rootDomNode = newNode;
			}
		}
		return rootDomNode;
	}
	
	function applyPatch(domNode, patch)
	{
		switch (patch.type)
		{
			case 'p-redraw':
				return redraw(domNode, patch.data, patch.eventNode);
	
			case 'p-facts':
				applyFacts(domNode, patch.eventNode, patch.data);
				return domNode;
	
			case 'p-text':
				domNode.replaceData(0, domNode.length, patch.data);
				return domNode;
	
			case 'p-thunk':
				return applyPatchesHelp(domNode, patch.data);
	
			case 'p-tagger':
				domNode.elm_event_node_ref.tagger = patch.data;
				return domNode;
	
			case 'p-remove-last':
				var i = patch.data;
				while (i--)
				{
					domNode.removeChild(domNode.lastChild);
				}
				return domNode;
	
			case 'p-append':
				var newNodes = patch.data;
				for (var i = 0; i < newNodes.length; i++)
				{
					domNode.appendChild(render(newNodes[i], patch.eventNode));
				}
				return domNode;
	
			case 'p-remove':
				var data = patch.data;
				if (typeof data === 'undefined')
				{
					domNode.parentNode.removeChild(domNode);
					return domNode;
				}
				var entry = data.entry;
				if (typeof entry.index !== 'undefined')
				{
					domNode.parentNode.removeChild(domNode);
				}
				entry.data = applyPatchesHelp(domNode, data.patches);
				return domNode;
	
			case 'p-reorder':
				var data = patch.data;
	
				// end inserts
				var endInserts = data.endInserts;
				var end;
				if (typeof endInserts !== 'undefined')
				{
					if (endInserts.length === 1)
					{
						var insert = endInserts[0];
						var entry = insert.entry;
						var end = entry.tag === 'move'
							? entry.data
							: render(entry.vnode, patch.eventNode);
					}
					else
					{
						end = document.createDocumentFragment();
						for (var i = 0; i < endInserts.length; i++)
						{
							var insert = endInserts[i];
							var entry = insert.entry;
							var node = entry.tag === 'move'
								? entry.data
								: render(entry.vnode, patch.eventNode);
							end.appendChild(node);
						}
					}
				}
	
				// removals
				domNode = applyPatchesHelp(domNode, data.patches);
	
				// inserts
				var inserts = data.inserts;
				for (var i = 0; i < inserts.length; i++)
				{
					var insert = inserts[i];
					var entry = insert.entry;
					var node = entry.tag === 'move'
						? entry.data
						: render(entry.vnode, patch.eventNode);
					domNode.insertBefore(node, domNode.childNodes[insert.index]);
				}
	
				if (typeof end !== 'undefined')
				{
					domNode.appendChild(end);
				}
	
				return domNode;
	
			case 'p-custom':
				var impl = patch.data;
				return impl.applyPatch(domNode, impl.data);
	
			default:
				throw new Error('Ran into an unknown patch!');
		}
	}
	
	
	function redraw(domNode, vNode, eventNode)
	{
		var parentNode = domNode.parentNode;
		var newNode = render(vNode, eventNode);
	
		if (typeof newNode.elm_event_node_ref === 'undefined')
		{
			newNode.elm_event_node_ref = domNode.elm_event_node_ref;
		}
	
		if (parentNode && newNode !== domNode)
		{
			parentNode.replaceChild(newNode, domNode);
		}
		return newNode;
	}
	
	
	
	////////////  PROGRAMS  ////////////
	
	
	function programWithFlags(details)
	{
		return {
			init: details.init,
			update: details.update,
			subscriptions: details.subscriptions,
			view: details.view,
			renderer: renderer
		};
	}
	
	
	return {
		node: node,
		text: text,
	
		custom: custom,
	
		map: F2(map),
	
		on: F3(on),
		style: style,
		property: F2(property),
		attribute: F2(attribute),
		attributeNS: F3(attributeNS),
	
		lazy: F2(lazy),
		lazy2: F3(lazy2),
		lazy3: F4(lazy3),
		keyedNode: F3(keyedNode),
	
		programWithFlags: programWithFlags
	};
	
	}();
	var _elm_lang$virtual_dom$VirtualDom$programWithFlags = _elm_lang$virtual_dom$Native_VirtualDom.programWithFlags;
	var _elm_lang$virtual_dom$VirtualDom$keyedNode = _elm_lang$virtual_dom$Native_VirtualDom.keyedNode;
	var _elm_lang$virtual_dom$VirtualDom$lazy3 = _elm_lang$virtual_dom$Native_VirtualDom.lazy3;
	var _elm_lang$virtual_dom$VirtualDom$lazy2 = _elm_lang$virtual_dom$Native_VirtualDom.lazy2;
	var _elm_lang$virtual_dom$VirtualDom$lazy = _elm_lang$virtual_dom$Native_VirtualDom.lazy;
	var _elm_lang$virtual_dom$VirtualDom$defaultOptions = {stopPropagation: false, preventDefault: false};
	var _elm_lang$virtual_dom$VirtualDom$onWithOptions = _elm_lang$virtual_dom$Native_VirtualDom.on;
	var _elm_lang$virtual_dom$VirtualDom$on = F2(
		function (eventName, decoder) {
			return A3(_elm_lang$virtual_dom$VirtualDom$onWithOptions, eventName, _elm_lang$virtual_dom$VirtualDom$defaultOptions, decoder);
		});
	var _elm_lang$virtual_dom$VirtualDom$style = _elm_lang$virtual_dom$Native_VirtualDom.style;
	var _elm_lang$virtual_dom$VirtualDom$attributeNS = _elm_lang$virtual_dom$Native_VirtualDom.attributeNS;
	var _elm_lang$virtual_dom$VirtualDom$attribute = _elm_lang$virtual_dom$Native_VirtualDom.attribute;
	var _elm_lang$virtual_dom$VirtualDom$property = _elm_lang$virtual_dom$Native_VirtualDom.property;
	var _elm_lang$virtual_dom$VirtualDom$map = _elm_lang$virtual_dom$Native_VirtualDom.map;
	var _elm_lang$virtual_dom$VirtualDom$text = _elm_lang$virtual_dom$Native_VirtualDom.text;
	var _elm_lang$virtual_dom$VirtualDom$node = _elm_lang$virtual_dom$Native_VirtualDom.node;
	var _elm_lang$virtual_dom$VirtualDom$Options = F2(
		function (a, b) {
			return {stopPropagation: a, preventDefault: b};
		});
	var _elm_lang$virtual_dom$VirtualDom$Node = {ctor: 'Node'};
	var _elm_lang$virtual_dom$VirtualDom$Property = {ctor: 'Property'};
	
	var _elm_lang$html$Html$text = _elm_lang$virtual_dom$VirtualDom$text;
	var _elm_lang$html$Html$node = _elm_lang$virtual_dom$VirtualDom$node;
	var _elm_lang$html$Html$body = _elm_lang$html$Html$node('body');
	var _elm_lang$html$Html$section = _elm_lang$html$Html$node('section');
	var _elm_lang$html$Html$nav = _elm_lang$html$Html$node('nav');
	var _elm_lang$html$Html$article = _elm_lang$html$Html$node('article');
	var _elm_lang$html$Html$aside = _elm_lang$html$Html$node('aside');
	var _elm_lang$html$Html$h1 = _elm_lang$html$Html$node('h1');
	var _elm_lang$html$Html$h2 = _elm_lang$html$Html$node('h2');
	var _elm_lang$html$Html$h3 = _elm_lang$html$Html$node('h3');
	var _elm_lang$html$Html$h4 = _elm_lang$html$Html$node('h4');
	var _elm_lang$html$Html$h5 = _elm_lang$html$Html$node('h5');
	var _elm_lang$html$Html$h6 = _elm_lang$html$Html$node('h6');
	var _elm_lang$html$Html$header = _elm_lang$html$Html$node('header');
	var _elm_lang$html$Html$footer = _elm_lang$html$Html$node('footer');
	var _elm_lang$html$Html$address = _elm_lang$html$Html$node('address');
	var _elm_lang$html$Html$main$ = _elm_lang$html$Html$node('main');
	var _elm_lang$html$Html$p = _elm_lang$html$Html$node('p');
	var _elm_lang$html$Html$hr = _elm_lang$html$Html$node('hr');
	var _elm_lang$html$Html$pre = _elm_lang$html$Html$node('pre');
	var _elm_lang$html$Html$blockquote = _elm_lang$html$Html$node('blockquote');
	var _elm_lang$html$Html$ol = _elm_lang$html$Html$node('ol');
	var _elm_lang$html$Html$ul = _elm_lang$html$Html$node('ul');
	var _elm_lang$html$Html$li = _elm_lang$html$Html$node('li');
	var _elm_lang$html$Html$dl = _elm_lang$html$Html$node('dl');
	var _elm_lang$html$Html$dt = _elm_lang$html$Html$node('dt');
	var _elm_lang$html$Html$dd = _elm_lang$html$Html$node('dd');
	var _elm_lang$html$Html$figure = _elm_lang$html$Html$node('figure');
	var _elm_lang$html$Html$figcaption = _elm_lang$html$Html$node('figcaption');
	var _elm_lang$html$Html$div = _elm_lang$html$Html$node('div');
	var _elm_lang$html$Html$a = _elm_lang$html$Html$node('a');
	var _elm_lang$html$Html$em = _elm_lang$html$Html$node('em');
	var _elm_lang$html$Html$strong = _elm_lang$html$Html$node('strong');
	var _elm_lang$html$Html$small = _elm_lang$html$Html$node('small');
	var _elm_lang$html$Html$s = _elm_lang$html$Html$node('s');
	var _elm_lang$html$Html$cite = _elm_lang$html$Html$node('cite');
	var _elm_lang$html$Html$q = _elm_lang$html$Html$node('q');
	var _elm_lang$html$Html$dfn = _elm_lang$html$Html$node('dfn');
	var _elm_lang$html$Html$abbr = _elm_lang$html$Html$node('abbr');
	var _elm_lang$html$Html$time = _elm_lang$html$Html$node('time');
	var _elm_lang$html$Html$code = _elm_lang$html$Html$node('code');
	var _elm_lang$html$Html$var = _elm_lang$html$Html$node('var');
	var _elm_lang$html$Html$samp = _elm_lang$html$Html$node('samp');
	var _elm_lang$html$Html$kbd = _elm_lang$html$Html$node('kbd');
	var _elm_lang$html$Html$sub = _elm_lang$html$Html$node('sub');
	var _elm_lang$html$Html$sup = _elm_lang$html$Html$node('sup');
	var _elm_lang$html$Html$i = _elm_lang$html$Html$node('i');
	var _elm_lang$html$Html$b = _elm_lang$html$Html$node('b');
	var _elm_lang$html$Html$u = _elm_lang$html$Html$node('u');
	var _elm_lang$html$Html$mark = _elm_lang$html$Html$node('mark');
	var _elm_lang$html$Html$ruby = _elm_lang$html$Html$node('ruby');
	var _elm_lang$html$Html$rt = _elm_lang$html$Html$node('rt');
	var _elm_lang$html$Html$rp = _elm_lang$html$Html$node('rp');
	var _elm_lang$html$Html$bdi = _elm_lang$html$Html$node('bdi');
	var _elm_lang$html$Html$bdo = _elm_lang$html$Html$node('bdo');
	var _elm_lang$html$Html$span = _elm_lang$html$Html$node('span');
	var _elm_lang$html$Html$br = _elm_lang$html$Html$node('br');
	var _elm_lang$html$Html$wbr = _elm_lang$html$Html$node('wbr');
	var _elm_lang$html$Html$ins = _elm_lang$html$Html$node('ins');
	var _elm_lang$html$Html$del = _elm_lang$html$Html$node('del');
	var _elm_lang$html$Html$img = _elm_lang$html$Html$node('img');
	var _elm_lang$html$Html$iframe = _elm_lang$html$Html$node('iframe');
	var _elm_lang$html$Html$embed = _elm_lang$html$Html$node('embed');
	var _elm_lang$html$Html$object = _elm_lang$html$Html$node('object');
	var _elm_lang$html$Html$param = _elm_lang$html$Html$node('param');
	var _elm_lang$html$Html$video = _elm_lang$html$Html$node('video');
	var _elm_lang$html$Html$audio = _elm_lang$html$Html$node('audio');
	var _elm_lang$html$Html$source = _elm_lang$html$Html$node('source');
	var _elm_lang$html$Html$track = _elm_lang$html$Html$node('track');
	var _elm_lang$html$Html$canvas = _elm_lang$html$Html$node('canvas');
	var _elm_lang$html$Html$svg = _elm_lang$html$Html$node('svg');
	var _elm_lang$html$Html$math = _elm_lang$html$Html$node('math');
	var _elm_lang$html$Html$table = _elm_lang$html$Html$node('table');
	var _elm_lang$html$Html$caption = _elm_lang$html$Html$node('caption');
	var _elm_lang$html$Html$colgroup = _elm_lang$html$Html$node('colgroup');
	var _elm_lang$html$Html$col = _elm_lang$html$Html$node('col');
	var _elm_lang$html$Html$tbody = _elm_lang$html$Html$node('tbody');
	var _elm_lang$html$Html$thead = _elm_lang$html$Html$node('thead');
	var _elm_lang$html$Html$tfoot = _elm_lang$html$Html$node('tfoot');
	var _elm_lang$html$Html$tr = _elm_lang$html$Html$node('tr');
	var _elm_lang$html$Html$td = _elm_lang$html$Html$node('td');
	var _elm_lang$html$Html$th = _elm_lang$html$Html$node('th');
	var _elm_lang$html$Html$form = _elm_lang$html$Html$node('form');
	var _elm_lang$html$Html$fieldset = _elm_lang$html$Html$node('fieldset');
	var _elm_lang$html$Html$legend = _elm_lang$html$Html$node('legend');
	var _elm_lang$html$Html$label = _elm_lang$html$Html$node('label');
	var _elm_lang$html$Html$input = _elm_lang$html$Html$node('input');
	var _elm_lang$html$Html$button = _elm_lang$html$Html$node('button');
	var _elm_lang$html$Html$select = _elm_lang$html$Html$node('select');
	var _elm_lang$html$Html$datalist = _elm_lang$html$Html$node('datalist');
	var _elm_lang$html$Html$optgroup = _elm_lang$html$Html$node('optgroup');
	var _elm_lang$html$Html$option = _elm_lang$html$Html$node('option');
	var _elm_lang$html$Html$textarea = _elm_lang$html$Html$node('textarea');
	var _elm_lang$html$Html$keygen = _elm_lang$html$Html$node('keygen');
	var _elm_lang$html$Html$output = _elm_lang$html$Html$node('output');
	var _elm_lang$html$Html$progress = _elm_lang$html$Html$node('progress');
	var _elm_lang$html$Html$meter = _elm_lang$html$Html$node('meter');
	var _elm_lang$html$Html$details = _elm_lang$html$Html$node('details');
	var _elm_lang$html$Html$summary = _elm_lang$html$Html$node('summary');
	var _elm_lang$html$Html$menuitem = _elm_lang$html$Html$node('menuitem');
	var _elm_lang$html$Html$menu = _elm_lang$html$Html$node('menu');
	
	var _elm_lang$html$Html_Attributes$attribute = _elm_lang$virtual_dom$VirtualDom$attribute;
	var _elm_lang$html$Html_Attributes$contextmenu = function (value) {
		return A2(_elm_lang$html$Html_Attributes$attribute, 'contextmenu', value);
	};
	var _elm_lang$html$Html_Attributes$draggable = function (value) {
		return A2(_elm_lang$html$Html_Attributes$attribute, 'draggable', value);
	};
	var _elm_lang$html$Html_Attributes$list = function (value) {
		return A2(_elm_lang$html$Html_Attributes$attribute, 'list', value);
	};
	var _elm_lang$html$Html_Attributes$maxlength = function (n) {
		return A2(
			_elm_lang$html$Html_Attributes$attribute,
			'maxlength',
			_elm_lang$core$Basics$toString(n));
	};
	var _elm_lang$html$Html_Attributes$datetime = function (value) {
		return A2(_elm_lang$html$Html_Attributes$attribute, 'datetime', value);
	};
	var _elm_lang$html$Html_Attributes$pubdate = function (value) {
		return A2(_elm_lang$html$Html_Attributes$attribute, 'pubdate', value);
	};
	var _elm_lang$html$Html_Attributes$colspan = function (n) {
		return A2(
			_elm_lang$html$Html_Attributes$attribute,
			'colspan',
			_elm_lang$core$Basics$toString(n));
	};
	var _elm_lang$html$Html_Attributes$rowspan = function (n) {
		return A2(
			_elm_lang$html$Html_Attributes$attribute,
			'rowspan',
			_elm_lang$core$Basics$toString(n));
	};
	var _elm_lang$html$Html_Attributes$property = _elm_lang$virtual_dom$VirtualDom$property;
	var _elm_lang$html$Html_Attributes$stringProperty = F2(
		function (name, string) {
			return A2(
				_elm_lang$html$Html_Attributes$property,
				name,
				_elm_lang$core$Json_Encode$string(string));
		});
	var _elm_lang$html$Html_Attributes$class = function (name) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'className', name);
	};
	var _elm_lang$html$Html_Attributes$id = function (name) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'id', name);
	};
	var _elm_lang$html$Html_Attributes$title = function (name) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'title', name);
	};
	var _elm_lang$html$Html_Attributes$accesskey = function ($char) {
		return A2(
			_elm_lang$html$Html_Attributes$stringProperty,
			'accessKey',
			_elm_lang$core$String$fromChar($char));
	};
	var _elm_lang$html$Html_Attributes$dir = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dir', value);
	};
	var _elm_lang$html$Html_Attributes$dropzone = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dropzone', value);
	};
	var _elm_lang$html$Html_Attributes$itemprop = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'itemprop', value);
	};
	var _elm_lang$html$Html_Attributes$lang = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'lang', value);
	};
	var _elm_lang$html$Html_Attributes$tabindex = function (n) {
		return A2(
			_elm_lang$html$Html_Attributes$stringProperty,
			'tabIndex',
			_elm_lang$core$Basics$toString(n));
	};
	var _elm_lang$html$Html_Attributes$charset = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'charset', value);
	};
	var _elm_lang$html$Html_Attributes$content = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'content', value);
	};
	var _elm_lang$html$Html_Attributes$httpEquiv = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'httpEquiv', value);
	};
	var _elm_lang$html$Html_Attributes$language = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'language', value);
	};
	var _elm_lang$html$Html_Attributes$src = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'src', value);
	};
	var _elm_lang$html$Html_Attributes$height = function (value) {
		return A2(
			_elm_lang$html$Html_Attributes$stringProperty,
			'height',
			_elm_lang$core$Basics$toString(value));
	};
	var _elm_lang$html$Html_Attributes$width = function (value) {
		return A2(
			_elm_lang$html$Html_Attributes$stringProperty,
			'width',
			_elm_lang$core$Basics$toString(value));
	};
	var _elm_lang$html$Html_Attributes$alt = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'alt', value);
	};
	var _elm_lang$html$Html_Attributes$preload = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'preload', value);
	};
	var _elm_lang$html$Html_Attributes$poster = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'poster', value);
	};
	var _elm_lang$html$Html_Attributes$kind = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'kind', value);
	};
	var _elm_lang$html$Html_Attributes$srclang = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srclang', value);
	};
	var _elm_lang$html$Html_Attributes$sandbox = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'sandbox', value);
	};
	var _elm_lang$html$Html_Attributes$srcdoc = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srcdoc', value);
	};
	var _elm_lang$html$Html_Attributes$type$ = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'type', value);
	};
	var _elm_lang$html$Html_Attributes$value = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'value', value);
	};
	var _elm_lang$html$Html_Attributes$defaultValue = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'defaultValue', value);
	};
	var _elm_lang$html$Html_Attributes$placeholder = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'placeholder', value);
	};
	var _elm_lang$html$Html_Attributes$accept = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'accept', value);
	};
	var _elm_lang$html$Html_Attributes$acceptCharset = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'acceptCharset', value);
	};
	var _elm_lang$html$Html_Attributes$action = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'action', value);
	};
	var _elm_lang$html$Html_Attributes$autocomplete = function (bool) {
		return A2(
			_elm_lang$html$Html_Attributes$stringProperty,
			'autocomplete',
			bool ? 'on' : 'off');
	};
	var _elm_lang$html$Html_Attributes$autosave = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'autosave', value);
	};
	var _elm_lang$html$Html_Attributes$enctype = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'enctype', value);
	};
	var _elm_lang$html$Html_Attributes$formaction = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'formAction', value);
	};
	var _elm_lang$html$Html_Attributes$minlength = function (n) {
		return A2(
			_elm_lang$html$Html_Attributes$stringProperty,
			'minLength',
			_elm_lang$core$Basics$toString(n));
	};
	var _elm_lang$html$Html_Attributes$method = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'method', value);
	};
	var _elm_lang$html$Html_Attributes$name = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'name', value);
	};
	var _elm_lang$html$Html_Attributes$pattern = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'pattern', value);
	};
	var _elm_lang$html$Html_Attributes$size = function (n) {
		return A2(
			_elm_lang$html$Html_Attributes$stringProperty,
			'size',
			_elm_lang$core$Basics$toString(n));
	};
	var _elm_lang$html$Html_Attributes$for = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'htmlFor', value);
	};
	var _elm_lang$html$Html_Attributes$form = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'form', value);
	};
	var _elm_lang$html$Html_Attributes$max = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'max', value);
	};
	var _elm_lang$html$Html_Attributes$min = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'min', value);
	};
	var _elm_lang$html$Html_Attributes$step = function (n) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'step', n);
	};
	var _elm_lang$html$Html_Attributes$cols = function (n) {
		return A2(
			_elm_lang$html$Html_Attributes$stringProperty,
			'cols',
			_elm_lang$core$Basics$toString(n));
	};
	var _elm_lang$html$Html_Attributes$rows = function (n) {
		return A2(
			_elm_lang$html$Html_Attributes$stringProperty,
			'rows',
			_elm_lang$core$Basics$toString(n));
	};
	var _elm_lang$html$Html_Attributes$wrap = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'wrap', value);
	};
	var _elm_lang$html$Html_Attributes$usemap = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'useMap', value);
	};
	var _elm_lang$html$Html_Attributes$shape = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'shape', value);
	};
	var _elm_lang$html$Html_Attributes$coords = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'coords', value);
	};
	var _elm_lang$html$Html_Attributes$challenge = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'challenge', value);
	};
	var _elm_lang$html$Html_Attributes$keytype = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'keytype', value);
	};
	var _elm_lang$html$Html_Attributes$align = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'align', value);
	};
	var _elm_lang$html$Html_Attributes$cite = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'cite', value);
	};
	var _elm_lang$html$Html_Attributes$href = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'href', value);
	};
	var _elm_lang$html$Html_Attributes$target = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'target', value);
	};
	var _elm_lang$html$Html_Attributes$downloadAs = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'download', value);
	};
	var _elm_lang$html$Html_Attributes$hreflang = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'hreflang', value);
	};
	var _elm_lang$html$Html_Attributes$media = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'media', value);
	};
	var _elm_lang$html$Html_Attributes$ping = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'ping', value);
	};
	var _elm_lang$html$Html_Attributes$rel = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'rel', value);
	};
	var _elm_lang$html$Html_Attributes$start = function (n) {
		return A2(
			_elm_lang$html$Html_Attributes$stringProperty,
			'start',
			_elm_lang$core$Basics$toString(n));
	};
	var _elm_lang$html$Html_Attributes$headers = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'headers', value);
	};
	var _elm_lang$html$Html_Attributes$scope = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'scope', value);
	};
	var _elm_lang$html$Html_Attributes$manifest = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'manifest', value);
	};
	var _elm_lang$html$Html_Attributes$boolProperty = F2(
		function (name, bool) {
			return A2(
				_elm_lang$html$Html_Attributes$property,
				name,
				_elm_lang$core$Json_Encode$bool(bool));
		});
	var _elm_lang$html$Html_Attributes$hidden = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'hidden', bool);
	};
	var _elm_lang$html$Html_Attributes$contenteditable = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'contentEditable', bool);
	};
	var _elm_lang$html$Html_Attributes$spellcheck = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'spellcheck', bool);
	};
	var _elm_lang$html$Html_Attributes$async = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'async', bool);
	};
	var _elm_lang$html$Html_Attributes$defer = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'defer', bool);
	};
	var _elm_lang$html$Html_Attributes$scoped = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'scoped', bool);
	};
	var _elm_lang$html$Html_Attributes$autoplay = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autoplay', bool);
	};
	var _elm_lang$html$Html_Attributes$controls = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'controls', bool);
	};
	var _elm_lang$html$Html_Attributes$loop = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'loop', bool);
	};
	var _elm_lang$html$Html_Attributes$default = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'default', bool);
	};
	var _elm_lang$html$Html_Attributes$seamless = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'seamless', bool);
	};
	var _elm_lang$html$Html_Attributes$checked = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'checked', bool);
	};
	var _elm_lang$html$Html_Attributes$selected = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'selected', bool);
	};
	var _elm_lang$html$Html_Attributes$autofocus = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autofocus', bool);
	};
	var _elm_lang$html$Html_Attributes$disabled = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'disabled', bool);
	};
	var _elm_lang$html$Html_Attributes$multiple = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'multiple', bool);
	};
	var _elm_lang$html$Html_Attributes$novalidate = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'noValidate', bool);
	};
	var _elm_lang$html$Html_Attributes$readonly = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'readOnly', bool);
	};
	var _elm_lang$html$Html_Attributes$required = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'required', bool);
	};
	var _elm_lang$html$Html_Attributes$ismap = function (value) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'isMap', value);
	};
	var _elm_lang$html$Html_Attributes$download = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'download', bool);
	};
	var _elm_lang$html$Html_Attributes$reversed = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'reversed', bool);
	};
	var _elm_lang$html$Html_Attributes$classList = function (list) {
		return _elm_lang$html$Html_Attributes$class(
			A2(
				_elm_lang$core$String$join,
				' ',
				A2(
					_elm_lang$core$List$map,
					_elm_lang$core$Basics$fst,
					A2(_elm_lang$core$List$filter, _elm_lang$core$Basics$snd, list))));
	};
	var _elm_lang$html$Html_Attributes$style = _elm_lang$virtual_dom$VirtualDom$style;
	
	var _Fresheyeball$elm_font_awesome$FontAwesome_Util$class = function (s) {
		return A2(_elm_lang$core$Basics_ops['++'], 'fa fa-', s);
	};
	var _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon = function (s) {
		return A2(
			_elm_lang$html$Html$i,
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$html$Html_Attributes$class(
					_Fresheyeball$elm_font_awesome$FontAwesome_Util$class(s))
				]),
			_elm_lang$core$Native_List.fromArray(
				[]));
	};
	
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$youtube_square = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$youtube_square);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$youtube_play = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$youtube_play);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$youtube = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$youtube);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$yoast = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$yoast);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$yelp = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$yelp);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$yc_square = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$yc_square);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$yc = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$yc);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$yahoo = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$yahoo);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$y_combinator_square = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$y_combinator_square);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$y_combinator = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$y_combinator);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$xing_square = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$xing_square);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$xing = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$xing);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$wpforms = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$wpforms);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$wpbeginner = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$wpbeginner);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$wordpress = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$wordpress);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$windows = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$windows);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$wikipedia_w = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$wikipedia_w);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$whatsapp = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$whatsapp);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$weixin = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$weixin);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$weibo = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$weibo);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$wechat = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$wechat);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$vk = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$vk);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$vine = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$vine);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$vimeo_square = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$vimeo_square);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$vimeo = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$vimeo);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$viadeo_square = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$viadeo_square);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$viadeo = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$viadeo);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$viacoin = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$viacoin);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$usb = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$usb);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$twitter_square = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$twitter_square);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$twitter = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$twitter);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$twitch = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$twitch);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$tumblr_square = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$tumblr_square);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$tumblr = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$tumblr);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$tripadvisor = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$tripadvisor);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$trello = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$trello);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$themeisle = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$themeisle);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$tencent_weibo = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$tencent_weibo);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$stumbleupon_circle = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$stumbleupon_circle);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$stumbleupon = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$stumbleupon);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$steam_square = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$steam_square);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$steam = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$steam);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$stack_overflow = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$stack_overflow);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$stack_exchange = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$stack_exchange);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$spotify = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$spotify);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$soundcloud = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$soundcloud);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$snapchat_square = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$snapchat_square);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$snapchat_ghost = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$snapchat_ghost);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$snapchat = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$snapchat);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$slideshare = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$slideshare);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$slack = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$slack);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$skype = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$skype);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$skyatlas = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$skyatlas);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$simplybuilt = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$simplybuilt);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$shirtsinbulk = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$shirtsinbulk);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$share_alt_square = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$share_alt_square);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$share_alt = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$share_alt);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$sellsy = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$sellsy);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$scribd = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$scribd);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$safari = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$safari);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$resistance = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$resistance);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$renren = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$renren);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$reddit_square = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$reddit_square);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$reddit_alien = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$reddit_alien);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$reddit = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$reddit);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$rebel = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$rebel);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$ra = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$ra);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$qq = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$qq);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$product_hunt = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$product_hunt);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$pinterest_square = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$pinterest_square);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$pinterest_p = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$pinterest_p);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$pinterest = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$pinterest);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$pied_piper_pp = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$pied_piper_pp);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$pied_piper_alt = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$pied_piper_alt);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$pied_piper = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$pied_piper);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$paypal = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$paypal);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$pagelines = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$pagelines);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$optin_monster = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$optin_monster);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$opera = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$opera);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$openid = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$openid);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$opencart = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$opencart);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$odnoklassniki_square = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$odnoklassniki_square);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$odnoklassniki = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$odnoklassniki);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$modx = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$modx);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$mixcloud = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$mixcloud);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$medium = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$medium);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$meanpath = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$meanpath);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$maxcdn = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$maxcdn);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$linux = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$linux);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$linkedin_square = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$linkedin_square);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$linkedin = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$linkedin);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$leanpub = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$leanpub);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$lastfm_square = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$lastfm_square);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$lastfm = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$lastfm);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$jsfiddle = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$jsfiddle);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$joomla = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$joomla);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$ioxhost = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$ioxhost);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$internet_explorer = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$internet_explorer);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$instagram = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$instagram);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$html5 = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$html5);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$houzz = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$houzz);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$hacker_news = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$hacker_news);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$gratipay = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$gratipay);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$google_wallet = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$google_wallet);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$google_plus_square = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$google_plus_square);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$google_plus_official = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$google_plus_official);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$google_plus_circle = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$google_plus_circle);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$google_plus = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$google_plus);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$google = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$google);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$glide_g = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$glide_g);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$glide = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$glide);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$gittip = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$gittip);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$gitlab = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$gitlab);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$github_square = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$github_square);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$github_alt = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$github_alt);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$github = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$github);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$git_square = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$git_square);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$git = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$git);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$gg_circle = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$gg_circle);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$gg = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$gg);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$get_pocket = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$get_pocket);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$ge = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$ge);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$foursquare = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$foursquare);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$forumbee = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$forumbee);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$fort_awesome = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$fort_awesome);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$fonticons = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$fonticons);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$font_awesome = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$font_awesome);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$flickr = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$flickr);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$first_order = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$first_order);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$firefox = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$firefox);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$facebook_square = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$facebook_square);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$facebook_official = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$facebook_official);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$facebook_f = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$facebook_f);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$facebook = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$facebook);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$fa = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$fa);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$expeditedssl = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$expeditedssl);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$envira = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$envira);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$empire = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$empire);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$edge = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$edge);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$drupal = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$drupal);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$dropbox = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$dropbox);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$dribbble = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$dribbble);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$digg = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$digg);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$deviantart = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$deviantart);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$delicious = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$delicious);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$dashcube = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$dashcube);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$css3 = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$css3);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$contao = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$contao);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$connectdevelop = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$connectdevelop);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$codiepie = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$codiepie);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$codepen = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$codepen);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$chrome = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$chrome);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$cc_visa = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$cc_visa);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$cc_stripe = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$cc_stripe);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$cc_paypal = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$cc_paypal);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$cc_mastercard = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$cc_mastercard);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$cc_jcb = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$cc_jcb);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$cc_discover = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$cc_discover);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$cc_diners_club = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$cc_diners_club);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$cc_amex = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$cc_amex);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$buysellads = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$buysellads);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$btc = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$btc);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$bluetooth_b = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$bluetooth_b);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$bluetooth = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$bluetooth);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$black_tie = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$black_tie);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$bitcoin = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$bitcoin);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$bitbucket_square = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$bitbucket_square);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$bitbucket = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$bitbucket);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$behance_square = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$behance_square);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$behance = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$behance);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$apple = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$apple);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$angellist = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$angellist);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$android = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$android);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$amazon = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$amazon);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$adn = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$adn);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Brand$fiveHundredPX = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Brand_Class$fiveHundredPX);
	
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$wrench = 'wrench';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$wifi = 'wifi';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$wheelchair_alt = 'wheelchair-alt';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$wheelchair = 'wheelchair';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$warning = 'warning';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$volume_up = 'volume-up';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$volume_off = 'volume-off';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$volume_down = 'volume-down';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$volume_control_phone = 'volume-control-phone';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$video_camera = 'video-camera';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$users = 'users';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$user_times = 'user-times';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$user_secret = 'user-secret';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$user_plus = 'user-plus';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$user = 'user';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$upload = 'upload';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$unsorted = 'unsorted';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$unlock_alt = 'unlock-alt';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$unlock = 'unlock';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$university = 'university';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$universal_access = 'universal-access';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$umbrella = 'umbrella';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$tv = 'tv';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$tty = 'tty';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$truck = 'truck';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$trophy = 'trophy';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$tree = 'tree';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$trash_o = 'trash-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$trash = 'trash';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$trademark = 'trademark';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$toggle_up = 'toggle-up';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$toggle_right = 'toggle-right';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$toggle_on = 'toggle-on';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$toggle_off = 'toggle-off';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$toggle_left = 'toggle-left';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$toggle_down = 'toggle-down';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$tint = 'tint';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$times_circle_o = 'times-circle-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$times_circle = 'times-circle';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$times = 'times';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$ticket = 'ticket';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$thumbs_up = 'thumbs-up';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$thumbs_o_up = 'thumbs-o-up';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$thumbs_o_down = 'thumbs-o-down';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$thumbs_down = 'thumbs-down';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$thumb_tack = 'thumb-tack';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$terminal = 'terminal';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$television = 'television';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$taxi = 'taxi';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$tasks = 'tasks';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$tags = 'tags';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$tag = 'tag';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$tachometer = 'tachometer';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$tablet = 'tablet';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$support = 'support';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$sun_o = 'sun-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$suitcase = 'suitcase';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$street_view = 'street-view';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$sticky_note_o = 'sticky-note-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$sticky_note = 'sticky-note';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$star_o = 'star-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$star_half_o = 'star-half-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$star_half_full = 'star-half-full';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$star_half_empty = 'star-half-empty';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$star_half = 'star-half';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$star = 'star';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$square_o = 'square-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$square = 'square';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$spoon = 'spoon';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$spinner = 'spinner';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$space_shuttle = 'space-shuttle';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$sort_up = 'sort-up';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$sort_numeric_desc = 'sort-numeric-desc';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$sort_numeric_asc = 'sort-numeric-asc';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$sort_down = 'sort-down';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$sort_desc = 'sort-desc';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$sort_asc = 'sort-asc';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$sort_amount_desc = 'sort-amount-desc';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$sort_amount_asc = 'sort-amount-asc';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$sort_alpha_desc = 'sort-alpha-desc';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$sort_alpha_asc = 'sort-alpha-asc';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$sort = 'sort';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$soccer_ball_o = 'soccer-ball-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$smile_o = 'smile-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$sliders = 'sliders';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$sitemap = 'sitemap';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$signing = 'signing';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$signal = 'signal';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$sign_out = 'sign-out';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$sign_language = 'sign-language';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$sign_in = 'sign-in';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$shopping_cart = 'shopping-cart';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$shopping_basket = 'shopping-basket';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$shopping_bag = 'shopping-bag';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$ship = 'ship';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$shield = 'shield';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$share_square_o = 'share-square-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$share_square = 'share-square';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$share_alt_square = 'share-alt-square';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$share_alt = 'share-alt';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$share = 'share';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$server = 'server';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$send_o = 'send-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$send = 'send';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$search_plus = 'search-plus';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$search_minus = 'search-minus';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$search = 'search';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$rss_square = 'rss-square';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$rss = 'rss';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$rocket = 'rocket';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$road = 'road';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$retweet = 'retweet';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$reply_all = 'reply-all';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$reply = 'reply';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$reorder = 'reorder';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$remove = 'remove';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$registered = 'registered';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$refresh = 'refresh';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$recycle = 'recycle';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$random = 'random';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$quote_right = 'quote-right';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$quote_left = 'quote-left';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$question_circle_o = 'question-circle-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$question_circle = 'question-circle';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$question = 'question';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$qrcode = 'qrcode';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$puzzle_piece = 'puzzle-piece';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$print = 'print';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$power_off = 'power-off';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$plus_square_o = 'plus-square-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$plus_square = 'plus-square';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$plus_circle = 'plus-circle';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$plus = 'plus';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$plug = 'plug';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$plane = 'plane';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$pie_chart = 'pie-chart';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$picture_o = 'picture-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$photo = 'photo';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$phone_square = 'phone-square';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$phone = 'phone';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$percent = 'percent';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$pencil_square_o = 'pencil-square-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$pencil_square = 'pencil-square';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$pencil = 'pencil';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$paw = 'paw';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$paper_plane_o = 'paper-plane-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$paper_plane = 'paper-plane';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$paint_brush = 'paint-brush';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$object_ungroup = 'object-ungroup';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$object_group = 'object-group';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$newspaper_o = 'newspaper-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$navicon = 'navicon';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$music = 'music';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$mouse_pointer = 'mouse-pointer';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$motorcycle = 'motorcycle';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$mortar_board = 'mortar-board';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$moon_o = 'moon-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$money = 'money';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$mobile_phone = 'mobile-phone';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$mobile = 'mobile';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$minus_square_o = 'minus-square-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$minus_square = 'minus-square';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$minus_circle = 'minus-circle';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$minus = 'minus';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$microphone_slash = 'microphone-slash';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$microphone = 'microphone';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$meh_o = 'meh-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$map_signs = 'map-signs';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$map_pin = 'map-pin';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$map_o = 'map-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$map_marker = 'map-marker';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$map = 'map';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$male = 'male';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$mail_reply_all = 'mail-reply-all';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$mail_reply = 'mail-reply';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$mail_forward = 'mail-forward';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$magnet = 'magnet';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$magic = 'magic';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$low_vision = 'low-vision';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$lock = 'lock';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$location_arrow = 'location-arrow';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$line_chart = 'line-chart';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$lightbulb_o = 'lightbulb-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$life_saver = 'life-saver';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$life_ring = 'life-ring';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$life_buoy = 'life-buoy';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$life_bouy = 'life-bouy';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$level_up = 'level-up';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$level_down = 'level-down';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$lemon_o = 'lemon-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$legal = 'legal';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$leaf = 'leaf';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$laptop = 'laptop';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$language = 'language';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$keyboard_o = 'keyboard-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$key = 'key';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$institution = 'institution';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$info_circle = 'info-circle';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$info = 'info';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$industry = 'industry';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$inbox = 'inbox';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$image = 'image';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$i_cursor = 'i-cursor';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$hourglass_start = 'hourglass-start';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$hourglass_o = 'hourglass-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$hourglass_half = 'hourglass-half';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$hourglass_end = 'hourglass-end';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$hourglass_3 = 'hourglass-3';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$hourglass_2 = 'hourglass-2';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$hourglass_1 = 'hourglass-1';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$hourglass = 'hourglass';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$hotel = 'hotel';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$home = 'home';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$history = 'history';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$heartbeat = 'heartbeat';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$heart_o = 'heart-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$heart = 'heart';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$headphones = 'headphones';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$hdd_o = 'hdd-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$hashtag = 'hashtag';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$hard_of_hearing = 'hard-of-hearing';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$hand_stop_o = 'hand-stop-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$hand_spock_o = 'hand-spock-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$hand_scissors_o = 'hand-scissors-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$hand_rock_o = 'hand-rock-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$hand_pointer_o = 'hand-pointer-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$hand_peace_o = 'hand-peace-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$hand_paper_o = 'hand-paper-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$hand_lizard_o = 'hand-lizard-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$hand_grab_o = 'hand-grab-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$group = 'group';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$graduation_cap = 'graduation-cap';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$globe = 'globe';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$glass = 'glass';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$gift = 'gift';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$gears = 'gears';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$gear = 'gear';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$gavel = 'gavel';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$gamepad = 'gamepad';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$futbol_o = 'futbol-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$frown_o = 'frown-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$folder_open_o = 'folder-open-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$folder_open = 'folder-open';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$folder_o = 'folder-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$folder = 'folder';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$flask = 'flask';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$flash = 'flash';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$flag_o = 'flag-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$flag_checkered = 'flag-checkered';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$flag = 'flag';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$fire_extinguisher = 'fire-extinguisher';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$fire = 'fire';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$filter = 'filter';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$film = 'film';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$file_zip_o = 'file-zip-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$file_word_o = 'file-word-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$file_video_o = 'file-video-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$file_sound_o = 'file-sound-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$file_powerpoint_o = 'file-powerpoint-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$file_picture_o = 'file-picture-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$file_photo_o = 'file-photo-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$file_pdf_o = 'file-pdf-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$file_movie_o = 'file-movie-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$file_image_o = 'file-image-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$file_excel_o = 'file-excel-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$file_code_o = 'file-code-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$file_audio_o = 'file-audio-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$file_archive_o = 'file-archive-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$fighter_jet = 'fighter-jet';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$female = 'female';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$feed = 'feed';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$fax = 'fax';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$eyedropper = 'eyedropper';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$eye_slash = 'eye-slash';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$eye = 'eye';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$external_link_square = 'external-link-square';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$external_link = 'external-link';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$exclamation_triangle = 'exclamation-triangle';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$exclamation_circle = 'exclamation-circle';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$exclamation = 'exclamation';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$exchange = 'exchange';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$eraser = 'eraser';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$envelope_square = 'envelope-square';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$envelope_o = 'envelope-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$envelope = 'envelope';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$ellipsis_v = 'ellipsis-v';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$ellipsis_h = 'ellipsis-h';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$edit = 'edit';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$download = 'download';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$dot_circle_o = 'dot-circle-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$diamond = 'diamond';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$desktop = 'desktop';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$deafness = 'deafness';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$deaf = 'deaf';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$database = 'database';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$dashboard = 'dashboard';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$cutlery = 'cutlery';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$cubes = 'cubes';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$cube = 'cube';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$crosshairs = 'crosshairs';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$crop = 'crop';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$credit_card_alt = 'credit-card-alt';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$credit_card = 'credit-card';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$creative_commons = 'creative-commons';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$copyright = 'copyright';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$compass = 'compass';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$comments_o = 'comments-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$comments = 'comments';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$commenting_o = 'commenting-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$commenting = 'commenting';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$comment_o = 'comment-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$comment = 'comment';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$cogs = 'cogs';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$cog = 'cog';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$coffee = 'coffee';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$code_fork = 'code-fork';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$code = 'code';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$cloud_upload = 'cloud-upload';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$cloud_download = 'cloud-download';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$cloud = 'cloud';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$close = 'close';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$clone = 'clone';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$clock_o = 'clock-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$circle_thin = 'circle-thin';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$circle_o_notch = 'circle-o-notch';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$circle_o = 'circle-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$circle = 'circle';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$child = 'child';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$check_square_o = 'check-square-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$check_square = 'check-square';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$check_circle_o = 'check-circle-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$check_circle = 'check-circle';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$check = 'check';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$certificate = 'certificate';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$cc = 'cc';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$cart_plus = 'cart-plus';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$cart_arrow_down = 'cart-arrow-down';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$caret_square_o_up = 'caret-square-o-up';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$caret_square_o_right = 'caret-square-o-right';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$caret_square_o_left = 'caret-square-o-left';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$caret_square_o_down = 'caret-square-o-down';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$car = 'car';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$camera_retro = 'camera-retro';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$camera = 'camera';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$calendar_times_o = 'calendar-times-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$calendar_plus_o = 'calendar-plus-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$calendar_o = 'calendar-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$calendar_minus_o = 'calendar-minus-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$calendar_check_o = 'calendar-check-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$calendar = 'calendar';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$calculator = 'calculator';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$cab = 'cab';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$bus = 'bus';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$bullseye = 'bullseye';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$bullhorn = 'bullhorn';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$building_o = 'building-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$building = 'building';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$bug = 'bug';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$briefcase = 'briefcase';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$braille = 'braille';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$bookmark_o = 'bookmark-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$bookmark = 'bookmark';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$book = 'book';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$bomb = 'bomb';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$bolt = 'bolt';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$bluetooth_b = 'bluetooth-b';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$bluetooth = 'bluetooth';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$blind = 'blind';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$birthday_cake = 'birthday-cake';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$binoculars = 'binoculars';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$bicycle = 'bicycle';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$bell_slash_o = 'bell-slash-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$bell_slash = 'bell-slash';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$bell_o = 'bell-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$bell = 'bell';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$beer = 'beer';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$bed = 'bed';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$battery_three_quarters = 'battery-three-quarters';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$battery_quarter = 'battery-quarter';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$battery_half = 'battery-half';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$battery_full = 'battery-full';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$battery_empty = 'battery-empty';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$battery_4 = 'battery-4';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$battery_3 = 'battery-3';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$battery_2 = 'battery-2';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$battery_1 = 'battery-1';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$battery_0 = 'battery-0';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$bars = 'bars';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$barcode = 'barcode';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$bar_chart_o = 'bar-chart-o';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$bar_chart = 'bar-chart';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$bank = 'bank';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$ban = 'ban';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$balance_scale = 'balance-scale';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$automobile = 'automobile';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$audio_description = 'audio-description';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$at = 'at';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$asterisk = 'asterisk';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$assistive_listening_systems = 'assistive-listening-systems';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$asl_interpreting = 'asl-interpreting';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$arrows_v = 'arrows-v';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$arrows_h = 'arrows-h';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$arrows = 'arrows';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$area_chart = 'area-chart';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$archive = 'archive';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$anchor = 'anchor';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$american_sign_language_interpreting = 'american-sign-language-interpreting';
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$adjust = 'adjust';
	
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$wrench = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$wrench);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$wifi = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$wifi);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$wheelchair_alt = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$wheelchair_alt);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$wheelchair = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$wheelchair);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$warning = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$warning);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$volume_up = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$volume_up);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$volume_off = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$volume_off);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$volume_down = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$volume_down);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$volume_control_phone = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$volume_control_phone);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$video_camera = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$video_camera);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$users = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$users);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$user_times = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$user_times);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$user_secret = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$user_secret);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$user_plus = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$user_plus);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$user = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$user);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$upload = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$upload);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$unsorted = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$unsorted);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$unlock_alt = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$unlock_alt);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$unlock = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$unlock);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$university = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$university);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$universal_access = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$universal_access);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$umbrella = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$umbrella);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$tv = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$tv);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$tty = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$tty);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$truck = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$truck);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$trophy = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$trophy);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$tree = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$tree);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$trash_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$trash_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$trash = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$trash);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$trademark = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$trademark);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$toggle_up = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$toggle_up);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$toggle_right = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$toggle_right);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$toggle_on = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$toggle_on);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$toggle_off = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$toggle_off);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$toggle_left = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$toggle_left);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$toggle_down = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$toggle_down);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$tint = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$tint);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$times_circle_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$times_circle_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$times_circle = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$times_circle);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$times = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$times);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$ticket = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$ticket);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$thumbs_up = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$thumbs_up);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$thumbs_o_up = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$thumbs_o_up);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$thumbs_o_down = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$thumbs_o_down);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$thumbs_down = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$thumbs_down);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$thumb_tack = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$thumb_tack);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$terminal = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$terminal);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$television = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$television);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$taxi = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$taxi);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$tasks = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$tasks);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$tags = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$tags);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$tag = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$tag);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$tachometer = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$tachometer);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$tablet = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$tablet);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$support = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$support);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$sun_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$sun_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$suitcase = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$suitcase);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$street_view = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$street_view);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$sticky_note_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$sticky_note_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$sticky_note = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$sticky_note);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$star_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$star_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$star_half_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$star_half_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$star_half_full = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$star_half_full);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$star_half_empty = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$star_half_empty);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$star_half = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$star_half);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$star = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$star);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$square_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$square_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$square = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$square);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$spoon = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$spoon);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$spinner = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$spinner);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$space_shuttle = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$space_shuttle);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$sort_up = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$sort_up);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$sort_numeric_desc = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$sort_numeric_desc);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$sort_numeric_asc = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$sort_numeric_asc);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$sort_down = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$sort_down);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$sort_desc = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$sort_desc);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$sort_asc = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$sort_asc);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$sort_amount_desc = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$sort_amount_desc);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$sort_amount_asc = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$sort_amount_asc);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$sort_alpha_desc = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$sort_alpha_desc);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$sort_alpha_asc = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$sort_alpha_asc);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$sort = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$sort);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$soccer_ball_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$soccer_ball_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$smile_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$smile_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$sliders = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$sliders);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$sitemap = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$sitemap);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$signing = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$signing);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$signal = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$signal);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$sign_out = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$sign_out);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$sign_language = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$sign_language);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$sign_in = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$sign_in);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$shopping_cart = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$shopping_cart);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$shopping_basket = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$shopping_basket);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$shopping_bag = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$shopping_bag);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$ship = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$ship);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$shield = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$shield);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$share_square_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$share_square_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$share_square = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$share_square);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$share_alt_square = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$share_alt_square);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$share_alt = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$share_alt);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$share = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$share);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$server = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$server);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$send_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$send_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$send = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$send);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$search_plus = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$search_plus);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$search_minus = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$search_minus);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$search = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$search);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$rss_square = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$rss_square);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$rss = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$rss);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$rocket = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$rocket);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$road = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$road);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$retweet = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$retweet);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$reply_all = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$reply_all);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$reply = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$reply);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$reorder = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$reorder);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$remove = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$remove);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$registered = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$registered);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$refresh = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$refresh);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$recycle = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$recycle);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$random = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$random);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$quote_right = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$quote_right);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$quote_left = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$quote_left);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$question_circle_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$question_circle_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$question_circle = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$question_circle);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$question = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$question);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$qrcode = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$qrcode);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$puzzle_piece = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$puzzle_piece);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$print = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$print);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$power_off = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$power_off);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$plus_square_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$plus_square_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$plus_square = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$plus_square);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$plus_circle = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$plus_circle);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$plus = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$plus);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$plug = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$plug);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$plane = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$plane);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$pie_chart = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$pie_chart);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$picture_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$picture_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$photo = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$photo);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$phone_square = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$phone_square);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$phone = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$phone);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$percent = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$percent);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$pencil_square_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$pencil_square_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$pencil_square = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$pencil_square);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$pencil = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$pencil);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$paw = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$paw);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$paper_plane_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$paper_plane_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$paper_plane = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$paper_plane);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$paint_brush = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$paint_brush);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$object_ungroup = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$object_ungroup);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$object_group = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$object_group);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$newspaper_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$newspaper_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$navicon = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$navicon);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$music = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$music);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$mouse_pointer = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$mouse_pointer);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$motorcycle = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$motorcycle);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$mortar_board = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$mortar_board);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$moon_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$moon_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$money = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$money);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$mobile_phone = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$mobile_phone);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$mobile = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$mobile);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$minus_square_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$minus_square_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$minus_square = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$minus_square);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$minus_circle = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$minus_circle);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$minus = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$minus);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$microphone_slash = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$microphone_slash);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$microphone = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$microphone);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$meh_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$meh_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$map_signs = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$map_signs);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$map_pin = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$map_pin);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$map_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$map_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$map_marker = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$map_marker);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$map = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$map);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$male = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$male);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$mail_reply_all = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$mail_reply_all);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$mail_reply = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$mail_reply);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$mail_forward = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$mail_forward);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$magnet = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$magnet);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$magic = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$magic);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$low_vision = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$low_vision);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$lock = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$lock);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$location_arrow = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$location_arrow);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$line_chart = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$line_chart);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$lightbulb_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$lightbulb_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$life_saver = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$life_saver);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$life_ring = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$life_ring);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$life_buoy = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$life_buoy);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$life_bouy = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$life_bouy);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$level_up = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$level_up);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$level_down = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$level_down);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$lemon_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$lemon_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$legal = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$legal);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$leaf = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$leaf);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$laptop = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$laptop);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$language = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$language);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$keyboard_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$keyboard_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$key = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$key);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$institution = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$institution);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$info_circle = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$info_circle);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$info = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$info);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$industry = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$industry);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$inbox = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$inbox);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$image = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$image);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$i_cursor = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$i_cursor);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$hourglass_start = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$hourglass_start);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$hourglass_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$hourglass_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$hourglass_half = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$hourglass_half);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$hourglass_end = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$hourglass_end);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$hourglass_3 = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$hourglass_3);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$hourglass_2 = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$hourglass_2);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$hourglass_1 = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$hourglass_1);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$hourglass = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$hourglass);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$hotel = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$hotel);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$home = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$home);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$history = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$history);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$heartbeat = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$heartbeat);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$heart_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$heart_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$heart = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$heart);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$headphones = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$headphones);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$hdd_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$hdd_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$hashtag = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$hashtag);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$hard_of_hearing = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$hard_of_hearing);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$hand_stop_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$hand_stop_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$hand_spock_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$hand_spock_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$hand_scissors_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$hand_scissors_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$hand_rock_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$hand_rock_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$hand_pointer_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$hand_pointer_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$hand_peace_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$hand_peace_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$hand_paper_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$hand_paper_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$hand_lizard_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$hand_lizard_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$hand_grab_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$hand_grab_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$group = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$group);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$graduation_cap = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$graduation_cap);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$globe = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$globe);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$glass = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$glass);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$gift = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$gift);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$gears = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$gears);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$gear = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$gear);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$gavel = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$gavel);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$gamepad = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$gamepad);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$futbol_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$futbol_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$frown_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$frown_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$folder_open_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$folder_open_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$folder_open = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$folder_open);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$folder_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$folder_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$folder = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$folder);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$flask = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$flask);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$flash = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$flash);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$flag_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$flag_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$flag_checkered = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$flag_checkered);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$flag = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$flag);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$fire_extinguisher = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$fire_extinguisher);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$fire = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$fire);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$filter = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$filter);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$film = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$film);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$file_zip_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$file_zip_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$file_word_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$file_word_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$file_video_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$file_video_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$file_sound_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$file_sound_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$file_powerpoint_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$file_powerpoint_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$file_picture_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$file_picture_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$file_photo_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$file_photo_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$file_pdf_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$file_pdf_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$file_movie_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$file_movie_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$file_image_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$file_image_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$file_excel_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$file_excel_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$file_code_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$file_code_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$file_audio_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$file_audio_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$file_archive_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$file_archive_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$fighter_jet = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$fighter_jet);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$female = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$female);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$feed = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$feed);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$fax = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$fax);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$eyedropper = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$eyedropper);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$eye_slash = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$eye_slash);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$eye = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$eye);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$external_link_square = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$external_link_square);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$external_link = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$external_link);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$exclamation_triangle = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$exclamation_triangle);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$exclamation_circle = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$exclamation_circle);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$exclamation = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$exclamation);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$exchange = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$exchange);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$eraser = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$eraser);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$envelope_square = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$envelope_square);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$envelope_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$envelope_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$envelope = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$envelope);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$ellipsis_v = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$ellipsis_v);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$ellipsis_h = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$ellipsis_h);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$edit = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$edit);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$download = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$download);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$dot_circle_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$dot_circle_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$diamond = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$diamond);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$desktop = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$desktop);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$deafness = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$deafness);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$deaf = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$deaf);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$database = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$database);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$dashboard = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$dashboard);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$cutlery = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$cutlery);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$cubes = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$cubes);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$cube = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$cube);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$crosshairs = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$crosshairs);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$crop = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$crop);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$credit_card_alt = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$credit_card_alt);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$credit_card = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$credit_card);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$creative_commons = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$creative_commons);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$copyright = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$copyright);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$compass = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$compass);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$comments_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$comments_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$comments = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$comments);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$commenting_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$commenting_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$commenting = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$commenting);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$comment_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$comment_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$comment = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$comment);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$cogs = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$cogs);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$cog = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$cog);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$coffee = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$coffee);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$code_fork = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$code_fork);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$code = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$code);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$cloud_upload = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$cloud_upload);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$cloud_download = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$cloud_download);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$cloud = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$cloud);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$close = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$close);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$clone = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$clone);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$clock_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$clock_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$circle_thin = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$circle_thin);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$circle_o_notch = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$circle_o_notch);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$circle_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$circle_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$circle = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$circle);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$child = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$child);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$check_square_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$check_square_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$check_square = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$check_square);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$check_circle_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$check_circle_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$check_circle = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$check_circle);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$check = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$check);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$certificate = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$certificate);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$cc = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$cc);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$cart_plus = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$cart_plus);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$cart_arrow_down = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$cart_arrow_down);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$caret_square_o_up = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$caret_square_o_up);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$caret_square_o_right = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$caret_square_o_right);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$caret_square_o_left = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$caret_square_o_left);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$caret_square_o_down = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$caret_square_o_down);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$car = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$car);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$camera_retro = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$camera_retro);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$camera = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$camera);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$calendar_times_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$calendar_times_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$calendar_plus_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$calendar_plus_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$calendar_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$calendar_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$calendar_minus_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$calendar_minus_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$calendar_check_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$calendar_check_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$calendar = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$calendar);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$calculator = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$calculator);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$cab = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$cab);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$bus = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$bus);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$bullseye = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$bullseye);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$bullhorn = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$bullhorn);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$building_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$building_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$building = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$building);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$bug = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$bug);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$briefcase = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$briefcase);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$braille = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$braille);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$bookmark_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$bookmark_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$bookmark = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$bookmark);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$book = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$book);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$bomb = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$bomb);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$bolt = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$bolt);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$bluetooth_b = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$bluetooth_b);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$bluetooth = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$bluetooth);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$blind = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$blind);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$birthday_cake = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$birthday_cake);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$binoculars = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$binoculars);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$bicycle = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$bicycle);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$bell_slash_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$bell_slash_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$bell_slash = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$bell_slash);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$bell_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$bell_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$bell = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$bell);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$beer = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$beer);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$bed = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$bed);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$battery_three_quarters = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$battery_three_quarters);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$battery_quarter = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$battery_quarter);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$battery_half = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$battery_half);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$battery_full = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$battery_full);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$battery_empty = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$battery_empty);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$battery_4 = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$battery_4);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$battery_3 = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$battery_3);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$battery_2 = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$battery_2);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$battery_1 = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$battery_1);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$battery_0 = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$battery_0);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$bars = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$bars);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$barcode = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$barcode);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$bar_chart_o = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$bar_chart_o);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$bar_chart = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$bar_chart);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$bank = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$bank);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$ban = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$ban);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$balance_scale = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$balance_scale);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$automobile = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$automobile);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$audio_description = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$audio_description);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$at = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$at);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$asterisk = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$asterisk);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$assistive_listening_systems = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$assistive_listening_systems);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$asl_interpreting = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$asl_interpreting);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$arrows_v = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$arrows_v);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$arrows_h = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$arrows_h);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$arrows = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$arrows);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$area_chart = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$area_chart);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$archive = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$archive);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$anchor = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$anchor);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$american_sign_language_interpreting = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$american_sign_language_interpreting);
	var _Fresheyeball$elm_font_awesome$FontAwesome_Web$adjust = _Fresheyeball$elm_font_awesome$FontAwesome_Util$icon(_Fresheyeball$elm_font_awesome$FontAwesome_Web_Class$adjust);
	
	var _benansell$elm_geometric_transformation$Transformer2D$translate = function (_p0) {
		var _p1 = _p0;
		return {a: 1, b: 0, c: 0, d: 1, tx: _p1._0, ty: _p1._1};
	};
	var _benansell$elm_geometric_transformation$Transformer2D$shear = F2(
		function (direction, k) {
			var _p2 = direction;
			if (_p2.ctor === 'Horizontal') {
				return {a: 1, b: k, c: 0, d: 1, tx: 0, ty: 0};
			} else {
				return {a: 1, b: 0, c: k, d: 1, tx: 0, ty: 0};
			}
		});
	var _benansell$elm_geometric_transformation$Transformer2D$scale = F2(
		function (width, height) {
			return {a: width, b: 0, c: 0, d: height, tx: 0, ty: 0};
		});
	var _benansell$elm_geometric_transformation$Transformer2D$scaleUniform = function (k) {
		return A2(_benansell$elm_geometric_transformation$Transformer2D$scale, k, k);
	};
	var _benansell$elm_geometric_transformation$Transformer2D$rotate = F2(
		function (direction, theta) {
			var signedDirection = function () {
				var _p3 = direction;
				if (_p3.ctor === 'Clockwise') {
					return 1;
				} else {
					return -1;
				}
			}();
			return {
				a: _elm_lang$core$Basics$cos(theta),
				b: signedDirection * (0 - _elm_lang$core$Basics$sin(theta)),
				c: signedDirection * _elm_lang$core$Basics$sin(theta),
				d: _elm_lang$core$Basics$cos(theta),
				tx: 0,
				ty: 0
			};
		});
	var _benansell$elm_geometric_transformation$Transformer2D$identity = function (p) {
		return {a: 1, b: 0, c: 0, d: 1, tx: p.x, ty: p.y};
	};
	var _benansell$elm_geometric_transformation$Transformer2D$combine = F2(
		function (t1, t2) {
			return {a: (t1.a * t2.a) + (t1.b * t2.c), b: (t1.a * t2.b) + (t1.b * t2.d), c: (t1.c * t2.a) + (t1.d * t2.c), d: (t1.c * t2.b) + (t1.d * t2.d), tx: ((t1.a * t2.tx) + (t1.b * t2.ty)) + t1.tx, ty: ((t1.c * t2.tx) + (t1.d * t2.ty)) + t1.ty};
		});
	var _benansell$elm_geometric_transformation$Transformer2D$apply = F2(
		function (t, p) {
			return {x: ((t.a * p.x) + (t.b * p.y)) + t.tx, y: ((t.c * p.x) + (t.d * p.y)) + t.ty};
		});
	var _benansell$elm_geometric_transformation$Transformer2D$fromPoint = function (p) {
		return {ctor: '_Tuple2', _0: p.x, _1: p.y};
	};
	var _benansell$elm_geometric_transformation$Transformer2D$toPoint = function (_p4) {
		var _p5 = _p4;
		return {x: _p5._0, y: _p5._1};
	};
	var _benansell$elm_geometric_transformation$Transformer2D$Point = F2(
		function (a, b) {
			return {x: a, y: b};
		});
	var _benansell$elm_geometric_transformation$Transformer2D$Transformation = F6(
		function (a, b, c, d, e, f) {
			return {a: a, b: b, c: c, d: d, tx: e, ty: f};
		});
	var _benansell$elm_geometric_transformation$Transformer2D$Clockwise = {ctor: 'Clockwise'};
	var _benansell$elm_geometric_transformation$Transformer2D$AntiClockwise = {ctor: 'AntiClockwise'};
	var _benansell$elm_geometric_transformation$Transformer2D$Vertical = {ctor: 'Vertical'};
	var _benansell$elm_geometric_transformation$Transformer2D$Horizontal = {ctor: 'Horizontal'};
	
	//import Maybe, Native.List //
	
	var _elm_lang$core$Native_Regex = function() {
	
	function escape(str)
	{
		return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
	}
	function caseInsensitive(re)
	{
		return new RegExp(re.source, 'gi');
	}
	function regex(raw)
	{
		return new RegExp(raw, 'g');
	}
	
	function contains(re, string)
	{
		return string.match(re) !== null;
	}
	
	function find(n, re, str)
	{
		n = n.ctor === 'All' ? Infinity : n._0;
		var out = [];
		var number = 0;
		var string = str;
		var lastIndex = re.lastIndex;
		var prevLastIndex = -1;
		var result;
		while (number++ < n && (result = re.exec(string)))
		{
			if (prevLastIndex === re.lastIndex) break;
			var i = result.length - 1;
			var subs = new Array(i);
			while (i > 0)
			{
				var submatch = result[i];
				subs[--i] = submatch === undefined
					? _elm_lang$core$Maybe$Nothing
					: _elm_lang$core$Maybe$Just(submatch);
			}
			out.push({
				match: result[0],
				submatches: _elm_lang$core$Native_List.fromArray(subs),
				index: result.index,
				number: number
			});
			prevLastIndex = re.lastIndex;
		}
		re.lastIndex = lastIndex;
		return _elm_lang$core$Native_List.fromArray(out);
	}
	
	function replace(n, re, replacer, string)
	{
		n = n.ctor === 'All' ? Infinity : n._0;
		var count = 0;
		function jsReplacer(match)
		{
			if (count++ >= n)
			{
				return match;
			}
			var i = arguments.length - 3;
			var submatches = new Array(i);
			while (i > 0)
			{
				var submatch = arguments[i];
				submatches[--i] = submatch === undefined
					? _elm_lang$core$Maybe$Nothing
					: _elm_lang$core$Maybe$Just(submatch);
			}
			return replacer({
				match: match,
				submatches: _elm_lang$core$Native_List.fromArray(submatches),
				index: arguments[i - 1],
				number: count
			});
		}
		return string.replace(re, jsReplacer);
	}
	
	function split(n, re, str)
	{
		n = n.ctor === 'All' ? Infinity : n._0;
		if (n === Infinity)
		{
			return _elm_lang$core$Native_List.fromArray(str.split(re));
		}
		var string = str;
		var result;
		var out = [];
		var start = re.lastIndex;
		while (n--)
		{
			if (!(result = re.exec(string))) break;
			out.push(string.slice(start, result.index));
			start = re.lastIndex;
		}
		out.push(string.slice(start));
		return _elm_lang$core$Native_List.fromArray(out);
	}
	
	return {
		regex: regex,
		caseInsensitive: caseInsensitive,
		escape: escape,
	
		contains: F2(contains),
		find: F3(find),
		replace: F4(replace),
		split: F3(split)
	};
	
	}();
	
	var _elm_lang$core$Regex$split = _elm_lang$core$Native_Regex.split;
	var _elm_lang$core$Regex$replace = _elm_lang$core$Native_Regex.replace;
	var _elm_lang$core$Regex$find = _elm_lang$core$Native_Regex.find;
	var _elm_lang$core$Regex$contains = _elm_lang$core$Native_Regex.contains;
	var _elm_lang$core$Regex$caseInsensitive = _elm_lang$core$Native_Regex.caseInsensitive;
	var _elm_lang$core$Regex$regex = _elm_lang$core$Native_Regex.regex;
	var _elm_lang$core$Regex$escape = _elm_lang$core$Native_Regex.escape;
	var _elm_lang$core$Regex$Match = F4(
		function (a, b, c, d) {
			return {match: a, submatches: b, index: c, number: d};
		});
	var _elm_lang$core$Regex$Regex = {ctor: 'Regex'};
	var _elm_lang$core$Regex$AtMost = function (a) {
		return {ctor: 'AtMost', _0: a};
	};
	var _elm_lang$core$Regex$All = {ctor: 'All'};
	
	var _rtfeldman$elm_css_util$Css_Helpers$toCssIdentifier = function (identifier) {
		return A4(
			_elm_lang$core$Regex$replace,
			_elm_lang$core$Regex$All,
			_elm_lang$core$Regex$regex('[^a-zA-Z0-9_-]'),
			function (_p0) {
				return '';
			},
			A4(
				_elm_lang$core$Regex$replace,
				_elm_lang$core$Regex$All,
				_elm_lang$core$Regex$regex('\\s+'),
				function (_p1) {
					return '-';
				},
				_elm_lang$core$String$trim(
					_elm_lang$core$Basics$toString(identifier))));
	};
	var _rtfeldman$elm_css_util$Css_Helpers$identifierToString = F2(
		function (name, identifier) {
			return A2(
				_elm_lang$core$Basics_ops['++'],
				_rtfeldman$elm_css_util$Css_Helpers$toCssIdentifier(name),
				_rtfeldman$elm_css_util$Css_Helpers$toCssIdentifier(identifier));
		});
	
	var _rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations = function (declarations) {
		dropEmptyDeclarations:
		while (true) {
			var _p0 = declarations;
			if (_p0.ctor === '[]') {
				return _elm_lang$core$Native_List.fromArray(
					[]);
			} else {
				switch (_p0._0.ctor) {
					case 'StyleBlockDeclaration':
						var _p1 = _p0._1;
						if (_elm_lang$core$List$isEmpty(_p0._0._0._2)) {
							var _v1 = _p1;
							declarations = _v1;
							continue dropEmptyDeclarations;
						} else {
							return A2(
								_elm_lang$core$List_ops['::'],
								_p0._0,
								_rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations(_p1));
						}
					case 'MediaRule':
						var _p4 = _p0._1;
						if (A2(
							_elm_lang$core$List$all,
							function (_p2) {
								var _p3 = _p2;
								return _elm_lang$core$List$isEmpty(_p3._2);
							},
							_p0._0._1)) {
							var _v3 = _p4;
							declarations = _v3;
							continue dropEmptyDeclarations;
						} else {
							return A2(
								_elm_lang$core$List_ops['::'],
								_p0._0,
								_rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations(_p4));
						}
					case 'SupportsRule':
						var _p5 = _p0._1;
						if (_elm_lang$core$List$isEmpty(_p0._0._1)) {
							var _v4 = _p5;
							declarations = _v4;
							continue dropEmptyDeclarations;
						} else {
							return A2(
								_elm_lang$core$List_ops['::'],
								_p0._0,
								_rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations(_p5));
						}
					case 'DocumentRule':
						return A2(
							_elm_lang$core$List_ops['::'],
							_p0._0,
							_rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations(_p0._1));
					case 'PageRule':
						var _p6 = _p0._1;
						if (_elm_lang$core$List$isEmpty(_p0._0._1)) {
							var _v5 = _p6;
							declarations = _v5;
							continue dropEmptyDeclarations;
						} else {
							return A2(
								_elm_lang$core$List_ops['::'],
								_p0._0,
								_rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations(_p6));
						}
					case 'FontFace':
						var _p7 = _p0._1;
						if (_elm_lang$core$List$isEmpty(_p0._0._0)) {
							var _v6 = _p7;
							declarations = _v6;
							continue dropEmptyDeclarations;
						} else {
							return A2(
								_elm_lang$core$List_ops['::'],
								_p0._0,
								_rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations(_p7));
						}
					case 'Keyframes':
						var _p8 = _p0._1;
						if (_elm_lang$core$List$isEmpty(_p0._0._1)) {
							var _v7 = _p8;
							declarations = _v7;
							continue dropEmptyDeclarations;
						} else {
							return A2(
								_elm_lang$core$List_ops['::'],
								_p0._0,
								_rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations(_p8));
						}
					case 'Viewport':
						var _p9 = _p0._1;
						if (_elm_lang$core$List$isEmpty(_p0._0._0)) {
							var _v8 = _p9;
							declarations = _v8;
							continue dropEmptyDeclarations;
						} else {
							return A2(
								_elm_lang$core$List_ops['::'],
								_p0._0,
								_rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations(_p9));
						}
					case 'CounterStyle':
						var _p10 = _p0._1;
						if (_elm_lang$core$List$isEmpty(_p0._0._0)) {
							var _v9 = _p10;
							declarations = _v9;
							continue dropEmptyDeclarations;
						} else {
							return A2(
								_elm_lang$core$List_ops['::'],
								_p0._0,
								_rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations(_p10));
						}
					default:
						var _p13 = _p0._1;
						if (A2(
							_elm_lang$core$List$all,
							function (_p11) {
								var _p12 = _p11;
								return _elm_lang$core$List$isEmpty(_p12._1);
							},
							_p0._0._0)) {
							var _v11 = _p13;
							declarations = _v11;
							continue dropEmptyDeclarations;
						} else {
							return A2(
								_elm_lang$core$List_ops['::'],
								_p0._0,
								_rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations(_p13));
						}
				}
			}
		}
	};
	var _rtfeldman$elm_css$Css_Structure$dropEmpty = function (_p14) {
		var _p15 = _p14;
		return {
			charset: _p15.charset,
			imports: _p15.imports,
			namespaces: _p15.namespaces,
			declarations: _rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations(_p15.declarations)
		};
	};
	var _rtfeldman$elm_css$Css_Structure$concatMapLast = F2(
		function (update, list) {
			var _p16 = list;
			if (_p16.ctor === '[]') {
				return list;
			} else {
				if (_p16._1.ctor === '[]') {
					return update(_p16._0);
				} else {
					return A2(
						_elm_lang$core$List_ops['::'],
						_p16._0,
						A2(_rtfeldman$elm_css$Css_Structure$concatMapLast, update, _p16._1));
				}
			}
		});
	var _rtfeldman$elm_css$Css_Structure$mapLast = F2(
		function (update, list) {
			var _p17 = list;
			if (_p17.ctor === '[]') {
				return list;
			} else {
				if (_p17._1.ctor === '[]') {
					return _elm_lang$core$Native_List.fromArray(
						[
							update(_p17._0)
						]);
				} else {
					return A2(
						_elm_lang$core$List_ops['::'],
						_p17._0,
						A2(_rtfeldman$elm_css$Css_Structure$mapLast, update, _p17._1));
				}
			}
		});
	var _rtfeldman$elm_css$Css_Structure$Property = F3(
		function (a, b, c) {
			return {important: a, key: b, value: c};
		});
	var _rtfeldman$elm_css$Css_Structure$Stylesheet = F4(
		function (a, b, c, d) {
			return {charset: a, imports: b, namespaces: c, declarations: d};
		});
	var _rtfeldman$elm_css$Css_Structure$FontFeatureValues = function (a) {
		return {ctor: 'FontFeatureValues', _0: a};
	};
	var _rtfeldman$elm_css$Css_Structure$CounterStyle = function (a) {
		return {ctor: 'CounterStyle', _0: a};
	};
	var _rtfeldman$elm_css$Css_Structure$Viewport = function (a) {
		return {ctor: 'Viewport', _0: a};
	};
	var _rtfeldman$elm_css$Css_Structure$Keyframes = F2(
		function (a, b) {
			return {ctor: 'Keyframes', _0: a, _1: b};
		});
	var _rtfeldman$elm_css$Css_Structure$FontFace = function (a) {
		return {ctor: 'FontFace', _0: a};
	};
	var _rtfeldman$elm_css$Css_Structure$PageRule = F2(
		function (a, b) {
			return {ctor: 'PageRule', _0: a, _1: b};
		});
	var _rtfeldman$elm_css$Css_Structure$DocumentRule = F5(
		function (a, b, c, d, e) {
			return {ctor: 'DocumentRule', _0: a, _1: b, _2: c, _3: d, _4: e};
		});
	var _rtfeldman$elm_css$Css_Structure$SupportsRule = F2(
		function (a, b) {
			return {ctor: 'SupportsRule', _0: a, _1: b};
		});
	var _rtfeldman$elm_css$Css_Structure$MediaRule = F2(
		function (a, b) {
			return {ctor: 'MediaRule', _0: a, _1: b};
		});
	var _rtfeldman$elm_css$Css_Structure$StyleBlockDeclaration = function (a) {
		return {ctor: 'StyleBlockDeclaration', _0: a};
	};
	var _rtfeldman$elm_css$Css_Structure$concatMapLastStyleBlock = F2(
		function (update, declarations) {
			var _p18 = declarations;
			_v15_12:
			do {
				if (_p18.ctor === '[]') {
					return declarations;
				} else {
					if (_p18._1.ctor === '[]') {
						switch (_p18._0.ctor) {
							case 'StyleBlockDeclaration':
								return A2(
									_elm_lang$core$List$map,
									_rtfeldman$elm_css$Css_Structure$StyleBlockDeclaration,
									update(_p18._0._0));
							case 'MediaRule':
								if (_p18._0._1.ctor === '::') {
									if (_p18._0._1._1.ctor === '[]') {
										return _elm_lang$core$Native_List.fromArray(
											[
												A2(
												_rtfeldman$elm_css$Css_Structure$MediaRule,
												_p18._0._0,
												update(_p18._0._1._0))
											]);
									} else {
										var _p19 = A2(
											_rtfeldman$elm_css$Css_Structure$concatMapLastStyleBlock,
											update,
											_elm_lang$core$Native_List.fromArray(
												[
													A2(_rtfeldman$elm_css$Css_Structure$MediaRule, _p18._0._0, _p18._0._1._1)
												]));
										if (((_p19.ctor === '::') && (_p19._0.ctor === 'MediaRule')) && (_p19._1.ctor === '[]')) {
											return _elm_lang$core$Native_List.fromArray(
												[
													A2(
													_rtfeldman$elm_css$Css_Structure$MediaRule,
													_p19._0._0,
													A2(_elm_lang$core$List_ops['::'], _p18._0._1._0, _p19._0._1))
												]);
										} else {
											return _p19;
										}
									}
								} else {
									break _v15_12;
								}
							case 'SupportsRule':
								return _elm_lang$core$Native_List.fromArray(
									[
										A2(
										_rtfeldman$elm_css$Css_Structure$SupportsRule,
										_p18._0._0,
										A2(_rtfeldman$elm_css$Css_Structure$concatMapLastStyleBlock, update, _p18._0._1))
									]);
							case 'DocumentRule':
								return A2(
									_elm_lang$core$List$map,
									A4(_rtfeldman$elm_css$Css_Structure$DocumentRule, _p18._0._0, _p18._0._1, _p18._0._2, _p18._0._3),
									update(_p18._0._4));
							case 'PageRule':
								return declarations;
							case 'FontFace':
								return declarations;
							case 'Keyframes':
								return declarations;
							case 'Viewport':
								return declarations;
							case 'CounterStyle':
								return declarations;
							default:
								return declarations;
						}
					} else {
						break _v15_12;
					}
				}
			} while(false);
			return A2(
				_elm_lang$core$List_ops['::'],
				_p18._0,
				A2(_rtfeldman$elm_css$Css_Structure$concatMapLastStyleBlock, update, _p18._1));
		});
	var _rtfeldman$elm_css$Css_Structure$StyleBlock = F3(
		function (a, b, c) {
			return {ctor: 'StyleBlock', _0: a, _1: b, _2: c};
		});
	var _rtfeldman$elm_css$Css_Structure$withPropertyAppended = F2(
		function (property, _p20) {
			var _p21 = _p20;
			return A3(
				_rtfeldman$elm_css$Css_Structure$StyleBlock,
				_p21._0,
				_p21._1,
				A2(
					_elm_lang$core$Basics_ops['++'],
					_p21._2,
					_elm_lang$core$Native_List.fromArray(
						[property])));
		});
	var _rtfeldman$elm_css$Css_Structure$appendProperty = F2(
		function (property, declarations) {
			var _p22 = declarations;
			if (_p22.ctor === '[]') {
				return declarations;
			} else {
				if (_p22._1.ctor === '[]') {
					switch (_p22._0.ctor) {
						case 'StyleBlockDeclaration':
							return _elm_lang$core$Native_List.fromArray(
								[
									_rtfeldman$elm_css$Css_Structure$StyleBlockDeclaration(
									A2(_rtfeldman$elm_css$Css_Structure$withPropertyAppended, property, _p22._0._0))
								]);
						case 'MediaRule':
							return _elm_lang$core$Native_List.fromArray(
								[
									A2(
									_rtfeldman$elm_css$Css_Structure$MediaRule,
									_p22._0._0,
									A2(
										_rtfeldman$elm_css$Css_Structure$mapLast,
										_rtfeldman$elm_css$Css_Structure$withPropertyAppended(property),
										_p22._0._1))
								]);
						default:
							return declarations;
					}
				} else {
					return A2(
						_elm_lang$core$List_ops['::'],
						_p22._0,
						A2(_rtfeldman$elm_css$Css_Structure$appendProperty, property, _p22._1));
				}
			}
		});
	var _rtfeldman$elm_css$Css_Structure$MediaQuery = function (a) {
		return {ctor: 'MediaQuery', _0: a};
	};
	var _rtfeldman$elm_css$Css_Structure$Selector = F3(
		function (a, b, c) {
			return {ctor: 'Selector', _0: a, _1: b, _2: c};
		});
	var _rtfeldman$elm_css$Css_Structure$applyPseudoElement = F2(
		function (pseudo, _p23) {
			var _p24 = _p23;
			return A3(
				_rtfeldman$elm_css$Css_Structure$Selector,
				_p24._0,
				_p24._1,
				_elm_lang$core$Maybe$Just(pseudo));
		});
	var _rtfeldman$elm_css$Css_Structure$appendPseudoElementToLastSelector = F2(
		function (pseudo, styleBlock) {
			var _p25 = styleBlock;
			if (_p25._1.ctor === '[]') {
				var _p26 = _p25._0;
				return _elm_lang$core$Native_List.fromArray(
					[
						A3(
						_rtfeldman$elm_css$Css_Structure$StyleBlock,
						_p26,
						_elm_lang$core$Native_List.fromArray(
							[]),
						_p25._2),
						A3(
						_rtfeldman$elm_css$Css_Structure$StyleBlock,
						A2(_rtfeldman$elm_css$Css_Structure$applyPseudoElement, pseudo, _p26),
						_elm_lang$core$Native_List.fromArray(
							[]),
						_elm_lang$core$Native_List.fromArray(
							[]))
					]);
			} else {
				return _elm_lang$core$Native_List.fromArray(
					[_p25]);
			}
		});
	var _rtfeldman$elm_css$Css_Structure$CustomSelector = F2(
		function (a, b) {
			return {ctor: 'CustomSelector', _0: a, _1: b};
		});
	var _rtfeldman$elm_css$Css_Structure$UniversalSelectorSequence = function (a) {
		return {ctor: 'UniversalSelectorSequence', _0: a};
	};
	var _rtfeldman$elm_css$Css_Structure$TypeSelectorSequence = F2(
		function (a, b) {
			return {ctor: 'TypeSelectorSequence', _0: a, _1: b};
		});
	var _rtfeldman$elm_css$Css_Structure$appendRepeatable = F2(
		function (selector, sequence) {
			var _p27 = sequence;
			switch (_p27.ctor) {
				case 'TypeSelectorSequence':
					return A2(
						_rtfeldman$elm_css$Css_Structure$TypeSelectorSequence,
						_p27._0,
						A2(
							_elm_lang$core$Basics_ops['++'],
							_p27._1,
							_elm_lang$core$Native_List.fromArray(
								[selector])));
				case 'UniversalSelectorSequence':
					return _rtfeldman$elm_css$Css_Structure$UniversalSelectorSequence(
						A2(
							_elm_lang$core$Basics_ops['++'],
							_p27._0,
							_elm_lang$core$Native_List.fromArray(
								[selector])));
				default:
					return A2(
						_rtfeldman$elm_css$Css_Structure$CustomSelector,
						_p27._0,
						A2(
							_elm_lang$core$Basics_ops['++'],
							_p27._1,
							_elm_lang$core$Native_List.fromArray(
								[selector])));
			}
		});
	var _rtfeldman$elm_css$Css_Structure$appendRepeatableWithCombinator = F2(
		function (selector, list) {
			var _p28 = list;
			if (_p28.ctor === '[]') {
				return _elm_lang$core$Native_List.fromArray(
					[]);
			} else {
				if ((_p28._0.ctor === '_Tuple2') && (_p28._1.ctor === '[]')) {
					return _elm_lang$core$Native_List.fromArray(
						[
							{
							ctor: '_Tuple2',
							_0: _p28._0._0,
							_1: A2(_rtfeldman$elm_css$Css_Structure$appendRepeatable, selector, _p28._0._1)
						}
						]);
				} else {
					return A2(
						_elm_lang$core$List_ops['::'],
						_p28._0,
						A2(_rtfeldman$elm_css$Css_Structure$appendRepeatableWithCombinator, selector, _p28._1));
				}
			}
		});
	var _rtfeldman$elm_css$Css_Structure$appendRepeatableSelector = F2(
		function (repeatableSimpleSelector, selector) {
			var _p29 = selector;
			if (_p29._1.ctor === '[]') {
				return A3(
					_rtfeldman$elm_css$Css_Structure$Selector,
					A2(_rtfeldman$elm_css$Css_Structure$appendRepeatable, repeatableSimpleSelector, _p29._0),
					_elm_lang$core$Native_List.fromArray(
						[]),
					_p29._2);
			} else {
				return A3(
					_rtfeldman$elm_css$Css_Structure$Selector,
					_p29._0,
					A2(_rtfeldman$elm_css$Css_Structure$appendRepeatableWithCombinator, repeatableSimpleSelector, _p29._1),
					_p29._2);
			}
		});
	var _rtfeldman$elm_css$Css_Structure$extendLastSelector = F2(
		function (selector, declarations) {
			var _p30 = declarations;
			_v24_15:
			do {
				if (_p30.ctor === '[]') {
					return declarations;
				} else {
					if (_p30._1.ctor === '[]') {
						switch (_p30._0.ctor) {
							case 'StyleBlockDeclaration':
								if (_p30._0._0._1.ctor === '[]') {
									return _elm_lang$core$Native_List.fromArray(
										[
											_rtfeldman$elm_css$Css_Structure$StyleBlockDeclaration(
											A3(
												_rtfeldman$elm_css$Css_Structure$StyleBlock,
												A2(_rtfeldman$elm_css$Css_Structure$appendRepeatableSelector, selector, _p30._0._0._0),
												_elm_lang$core$Native_List.fromArray(
													[]),
												_p30._0._0._2))
										]);
								} else {
									var newRest = A2(
										_rtfeldman$elm_css$Css_Structure$mapLast,
										_rtfeldman$elm_css$Css_Structure$appendRepeatableSelector(selector),
										_p30._0._0._1);
									return _elm_lang$core$Native_List.fromArray(
										[
											_rtfeldman$elm_css$Css_Structure$StyleBlockDeclaration(
											A3(_rtfeldman$elm_css$Css_Structure$StyleBlock, _p30._0._0._0, newRest, _p30._0._0._2))
										]);
								}
							case 'MediaRule':
								if (_p30._0._1.ctor === '::') {
									if (_p30._0._1._1.ctor === '[]') {
										if (_p30._0._1._0._1.ctor === '[]') {
											var newStyleBlock = A3(
												_rtfeldman$elm_css$Css_Structure$StyleBlock,
												A2(_rtfeldman$elm_css$Css_Structure$appendRepeatableSelector, selector, _p30._0._1._0._0),
												_elm_lang$core$Native_List.fromArray(
													[]),
												_p30._0._1._0._2);
											return _elm_lang$core$Native_List.fromArray(
												[
													A2(
													_rtfeldman$elm_css$Css_Structure$MediaRule,
													_p30._0._0,
													_elm_lang$core$Native_List.fromArray(
														[newStyleBlock]))
												]);
										} else {
											var newRest = A2(
												_rtfeldman$elm_css$Css_Structure$mapLast,
												_rtfeldman$elm_css$Css_Structure$appendRepeatableSelector(selector),
												_p30._0._1._0._1);
											var newStyleBlock = A3(_rtfeldman$elm_css$Css_Structure$StyleBlock, _p30._0._1._0._0, newRest, _p30._0._1._0._2);
											return _elm_lang$core$Native_List.fromArray(
												[
													A2(
													_rtfeldman$elm_css$Css_Structure$MediaRule,
													_p30._0._0,
													_elm_lang$core$Native_List.fromArray(
														[newStyleBlock]))
												]);
										}
									} else {
										var _p31 = A2(
											_rtfeldman$elm_css$Css_Structure$extendLastSelector,
											selector,
											_elm_lang$core$Native_List.fromArray(
												[
													A2(_rtfeldman$elm_css$Css_Structure$MediaRule, _p30._0._0, _p30._0._1._1)
												]));
										if (((_p31.ctor === '::') && (_p31._0.ctor === 'MediaRule')) && (_p31._1.ctor === '[]')) {
											return _elm_lang$core$Native_List.fromArray(
												[
													A2(
													_rtfeldman$elm_css$Css_Structure$MediaRule,
													_p31._0._0,
													A2(_elm_lang$core$List_ops['::'], _p30._0._1._0, _p31._0._1))
												]);
										} else {
											return _p31;
										}
									}
								} else {
									break _v24_15;
								}
							case 'SupportsRule':
								return _elm_lang$core$Native_List.fromArray(
									[
										A2(
										_rtfeldman$elm_css$Css_Structure$SupportsRule,
										_p30._0._0,
										A2(_rtfeldman$elm_css$Css_Structure$extendLastSelector, selector, _p30._0._1))
									]);
							case 'DocumentRule':
								if (_p30._0._4._1.ctor === '[]') {
									var newStyleBlock = A3(
										_rtfeldman$elm_css$Css_Structure$StyleBlock,
										A2(_rtfeldman$elm_css$Css_Structure$appendRepeatableSelector, selector, _p30._0._4._0),
										_elm_lang$core$Native_List.fromArray(
											[]),
										_p30._0._4._2);
									return _elm_lang$core$Native_List.fromArray(
										[
											A5(_rtfeldman$elm_css$Css_Structure$DocumentRule, _p30._0._0, _p30._0._1, _p30._0._2, _p30._0._3, newStyleBlock)
										]);
								} else {
									var newRest = A2(
										_rtfeldman$elm_css$Css_Structure$mapLast,
										_rtfeldman$elm_css$Css_Structure$appendRepeatableSelector(selector),
										_p30._0._4._1);
									var newStyleBlock = A3(_rtfeldman$elm_css$Css_Structure$StyleBlock, _p30._0._4._0, newRest, _p30._0._4._2);
									return _elm_lang$core$Native_List.fromArray(
										[
											A5(_rtfeldman$elm_css$Css_Structure$DocumentRule, _p30._0._0, _p30._0._1, _p30._0._2, _p30._0._3, newStyleBlock)
										]);
								}
							case 'PageRule':
								return declarations;
							case 'FontFace':
								return declarations;
							case 'Keyframes':
								return declarations;
							case 'Viewport':
								return declarations;
							case 'CounterStyle':
								return declarations;
							default:
								return declarations;
						}
					} else {
						break _v24_15;
					}
				}
			} while(false);
			return A2(
				_elm_lang$core$List_ops['::'],
				_p30._0,
				A2(_rtfeldman$elm_css$Css_Structure$extendLastSelector, selector, _p30._1));
		});
	var _rtfeldman$elm_css$Css_Structure$appendToLastSelector = F2(
		function (selector, styleBlock) {
			var _p32 = styleBlock;
			if (_p32._1.ctor === '[]') {
				var _p33 = _p32._0;
				return _elm_lang$core$Native_List.fromArray(
					[
						A3(
						_rtfeldman$elm_css$Css_Structure$StyleBlock,
						_p33,
						_elm_lang$core$Native_List.fromArray(
							[]),
						_p32._2),
						A3(
						_rtfeldman$elm_css$Css_Structure$StyleBlock,
						A2(_rtfeldman$elm_css$Css_Structure$appendRepeatableSelector, selector, _p33),
						_elm_lang$core$Native_List.fromArray(
							[]),
						_elm_lang$core$Native_List.fromArray(
							[]))
					]);
			} else {
				var _p35 = _p32._1;
				var _p34 = _p32._0;
				var newRest = A2(
					_rtfeldman$elm_css$Css_Structure$mapLast,
					_rtfeldman$elm_css$Css_Structure$appendRepeatableSelector(selector),
					_p35);
				return _elm_lang$core$Native_List.fromArray(
					[
						A3(_rtfeldman$elm_css$Css_Structure$StyleBlock, _p34, _p35, _p32._2),
						A3(
						_rtfeldman$elm_css$Css_Structure$StyleBlock,
						_p34,
						newRest,
						_elm_lang$core$Native_List.fromArray(
							[]))
					]);
			}
		});
	var _rtfeldman$elm_css$Css_Structure$PseudoClassSelector = function (a) {
		return {ctor: 'PseudoClassSelector', _0: a};
	};
	var _rtfeldman$elm_css$Css_Structure$IdSelector = function (a) {
		return {ctor: 'IdSelector', _0: a};
	};
	var _rtfeldman$elm_css$Css_Structure$ClassSelector = function (a) {
		return {ctor: 'ClassSelector', _0: a};
	};
	var _rtfeldman$elm_css$Css_Structure$TypeSelector = function (a) {
		return {ctor: 'TypeSelector', _0: a};
	};
	var _rtfeldman$elm_css$Css_Structure$PseudoElement = function (a) {
		return {ctor: 'PseudoElement', _0: a};
	};
	var _rtfeldman$elm_css$Css_Structure$Descendant = {ctor: 'Descendant'};
	var _rtfeldman$elm_css$Css_Structure$Child = {ctor: 'Child'};
	var _rtfeldman$elm_css$Css_Structure$GeneralSibling = {ctor: 'GeneralSibling'};
	var _rtfeldman$elm_css$Css_Structure$AdjacentSibling = {ctor: 'AdjacentSibling'};
	
	var _rtfeldman$elm_css$Css_Preprocess$propertyToPair = function (property) {
		var value = property.important ? A2(_elm_lang$core$Basics_ops['++'], property.value, ' !important') : property.value;
		return {ctor: '_Tuple2', _0: property.key, _1: value};
	};
	var _rtfeldman$elm_css$Css_Preprocess$toPropertyPairs = function (mixins) {
		toPropertyPairs:
		while (true) {
			var _p0 = mixins;
			if (_p0.ctor === '[]') {
				return _elm_lang$core$Native_List.fromArray(
					[]);
			} else {
				switch (_p0._0.ctor) {
					case 'AppendProperty':
						return A2(
							_elm_lang$core$List_ops['::'],
							_rtfeldman$elm_css$Css_Preprocess$propertyToPair(_p0._0._0),
							_rtfeldman$elm_css$Css_Preprocess$toPropertyPairs(_p0._1));
					case 'ApplyMixins':
						return A2(
							_elm_lang$core$Basics_ops['++'],
							_rtfeldman$elm_css$Css_Preprocess$toPropertyPairs(_p0._0._0),
							_rtfeldman$elm_css$Css_Preprocess$toPropertyPairs(_p0._1));
					default:
						var _v1 = _p0._1;
						mixins = _v1;
						continue toPropertyPairs;
				}
			}
		}
	};
	var _rtfeldman$elm_css$Css_Preprocess$unwrapSnippet = function (_p1) {
		var _p2 = _p1;
		return _p2._0;
	};
	var _rtfeldman$elm_css$Css_Preprocess$toMediaRule = F2(
		function (mediaQueries, declaration) {
			var _p3 = declaration;
			switch (_p3.ctor) {
				case 'StyleBlockDeclaration':
					return A2(
						_rtfeldman$elm_css$Css_Structure$MediaRule,
						mediaQueries,
						_elm_lang$core$Native_List.fromArray(
							[_p3._0]));
				case 'MediaRule':
					return A2(
						_rtfeldman$elm_css$Css_Structure$MediaRule,
						A2(_elm_lang$core$Basics_ops['++'], mediaQueries, _p3._0),
						_p3._1);
				case 'SupportsRule':
					return A2(
						_rtfeldman$elm_css$Css_Structure$SupportsRule,
						_p3._0,
						A2(
							_elm_lang$core$List$map,
							_rtfeldman$elm_css$Css_Preprocess$toMediaRule(mediaQueries),
							_p3._1));
				case 'DocumentRule':
					return A5(_rtfeldman$elm_css$Css_Structure$DocumentRule, _p3._0, _p3._1, _p3._2, _p3._3, _p3._4);
				case 'PageRule':
					return declaration;
				case 'FontFace':
					return declaration;
				case 'Keyframes':
					return declaration;
				case 'Viewport':
					return declaration;
				case 'CounterStyle':
					return declaration;
				default:
					return declaration;
			}
		});
	var _rtfeldman$elm_css$Css_Preprocess$stylesheet = function (snippets) {
		return {
			charset: _elm_lang$core$Maybe$Nothing,
			imports: _elm_lang$core$Native_List.fromArray(
				[]),
			namespaces: _elm_lang$core$Native_List.fromArray(
				[]),
			snippets: snippets
		};
	};
	var _rtfeldman$elm_css$Css_Preprocess$Property = F4(
		function (a, b, c, d) {
			return {key: a, value: b, important: c, warnings: d};
		});
	var _rtfeldman$elm_css$Css_Preprocess$Stylesheet = F4(
		function (a, b, c, d) {
			return {charset: a, imports: b, namespaces: c, snippets: d};
		});
	var _rtfeldman$elm_css$Css_Preprocess$ApplyMixins = function (a) {
		return {ctor: 'ApplyMixins', _0: a};
	};
	var _rtfeldman$elm_css$Css_Preprocess$WithMedia = F2(
		function (a, b) {
			return {ctor: 'WithMedia', _0: a, _1: b};
		});
	var _rtfeldman$elm_css$Css_Preprocess$WithPseudoElement = F2(
		function (a, b) {
			return {ctor: 'WithPseudoElement', _0: a, _1: b};
		});
	var _rtfeldman$elm_css$Css_Preprocess$NestSnippet = F2(
		function (a, b) {
			return {ctor: 'NestSnippet', _0: a, _1: b};
		});
	var _rtfeldman$elm_css$Css_Preprocess$ExtendSelector = F2(
		function (a, b) {
			return {ctor: 'ExtendSelector', _0: a, _1: b};
		});
	var _rtfeldman$elm_css$Css_Preprocess$AppendProperty = function (a) {
		return {ctor: 'AppendProperty', _0: a};
	};
	var _rtfeldman$elm_css$Css_Preprocess$mapLastProperty = F2(
		function (update, mixin) {
			var _p4 = mixin;
			switch (_p4.ctor) {
				case 'AppendProperty':
					return _rtfeldman$elm_css$Css_Preprocess$AppendProperty(
						update(_p4._0));
				case 'ExtendSelector':
					return A2(
						_rtfeldman$elm_css$Css_Preprocess$ExtendSelector,
						_p4._0,
						A2(_rtfeldman$elm_css$Css_Preprocess$mapAllLastProperty, update, _p4._1));
				case 'NestSnippet':
					return mixin;
				case 'WithPseudoElement':
					return mixin;
				case 'WithMedia':
					return mixin;
				default:
					return _rtfeldman$elm_css$Css_Preprocess$ApplyMixins(
						A2(
							_rtfeldman$elm_css$Css_Structure$mapLast,
							_rtfeldman$elm_css$Css_Preprocess$mapLastProperty(update),
							_p4._0));
			}
		});
	var _rtfeldman$elm_css$Css_Preprocess$mapAllLastProperty = F2(
		function (update, mixins) {
			var _p5 = mixins;
			if (_p5.ctor === '[]') {
				return mixins;
			} else {
				if (_p5._1.ctor === '[]') {
					return _elm_lang$core$Native_List.fromArray(
						[
							A2(_rtfeldman$elm_css$Css_Preprocess$mapLastProperty, update, _p5._0)
						]);
				} else {
					return A2(
						_elm_lang$core$List_ops['::'],
						_p5._0,
						A2(_rtfeldman$elm_css$Css_Preprocess$mapAllLastProperty, update, _p5._1));
				}
			}
		});
	var _rtfeldman$elm_css$Css_Preprocess$Snippet = function (a) {
		return {ctor: 'Snippet', _0: a};
	};
	var _rtfeldman$elm_css$Css_Preprocess$FontFeatureValues = function (a) {
		return {ctor: 'FontFeatureValues', _0: a};
	};
	var _rtfeldman$elm_css$Css_Preprocess$CounterStyle = function (a) {
		return {ctor: 'CounterStyle', _0: a};
	};
	var _rtfeldman$elm_css$Css_Preprocess$Viewport = function (a) {
		return {ctor: 'Viewport', _0: a};
	};
	var _rtfeldman$elm_css$Css_Preprocess$Keyframes = F2(
		function (a, b) {
			return {ctor: 'Keyframes', _0: a, _1: b};
		});
	var _rtfeldman$elm_css$Css_Preprocess$FontFace = function (a) {
		return {ctor: 'FontFace', _0: a};
	};
	var _rtfeldman$elm_css$Css_Preprocess$PageRule = F2(
		function (a, b) {
			return {ctor: 'PageRule', _0: a, _1: b};
		});
	var _rtfeldman$elm_css$Css_Preprocess$DocumentRule = F5(
		function (a, b, c, d, e) {
			return {ctor: 'DocumentRule', _0: a, _1: b, _2: c, _3: d, _4: e};
		});
	var _rtfeldman$elm_css$Css_Preprocess$SupportsRule = F2(
		function (a, b) {
			return {ctor: 'SupportsRule', _0: a, _1: b};
		});
	var _rtfeldman$elm_css$Css_Preprocess$MediaRule = F2(
		function (a, b) {
			return {ctor: 'MediaRule', _0: a, _1: b};
		});
	var _rtfeldman$elm_css$Css_Preprocess$StyleBlockDeclaration = function (a) {
		return {ctor: 'StyleBlockDeclaration', _0: a};
	};
	var _rtfeldman$elm_css$Css_Preprocess$StyleBlock = F3(
		function (a, b, c) {
			return {ctor: 'StyleBlock', _0: a, _1: b, _2: c};
		});
	
	var _rtfeldman$elm_css$Css_Structure_Output$indent = function (str) {
		return A2(_elm_lang$core$Basics_ops['++'], '    ', str);
	};
	var _rtfeldman$elm_css$Css_Structure_Output$prettyPrintProperty = function (_p0) {
		var _p1 = _p0;
		var suffix = _p1.important ? ' !important;' : ';';
		return A2(
			_elm_lang$core$Basics_ops['++'],
			_p1.key,
			A2(
				_elm_lang$core$Basics_ops['++'],
				': ',
				A2(_elm_lang$core$Basics_ops['++'], _p1.value, suffix)));
	};
	var _rtfeldman$elm_css$Css_Structure_Output$prettyPrintProperties = function (properties) {
		return A2(
			_elm_lang$core$String$join,
			'\n',
			A2(
				_elm_lang$core$List$map,
				function (_p2) {
					return _rtfeldman$elm_css$Css_Structure_Output$indent(
						_rtfeldman$elm_css$Css_Structure_Output$prettyPrintProperty(_p2));
				},
				properties));
	};
	var _rtfeldman$elm_css$Css_Structure_Output$combinatorToString = function (combinator) {
		var _p3 = combinator;
		switch (_p3.ctor) {
			case 'AdjacentSibling':
				return '+';
			case 'GeneralSibling':
				return '~';
			case 'Child':
				return '>';
			default:
				return '';
		}
	};
	var _rtfeldman$elm_css$Css_Structure_Output$pseudoElementToString = function (_p4) {
		var _p5 = _p4;
		return A2(_elm_lang$core$Basics_ops['++'], '::', _p5._0);
	};
	var _rtfeldman$elm_css$Css_Structure_Output$repeatableSimpleSelectorToString = function (repeatableSimpleSelector) {
		var _p6 = repeatableSimpleSelector;
		switch (_p6.ctor) {
			case 'ClassSelector':
				return A2(_elm_lang$core$Basics_ops['++'], '.', _p6._0);
			case 'IdSelector':
				return A2(_elm_lang$core$Basics_ops['++'], '#', _p6._0);
			default:
				return A2(_elm_lang$core$Basics_ops['++'], ':', _p6._0);
		}
	};
	var _rtfeldman$elm_css$Css_Structure_Output$simpleSelectorSequenceToString = function (simpleSelectorSequence) {
		var _p7 = simpleSelectorSequence;
		switch (_p7.ctor) {
			case 'TypeSelectorSequence':
				return A2(
					_elm_lang$core$String$join,
					'',
					A2(
						_elm_lang$core$List_ops['::'],
						_p7._0._0,
						A2(_elm_lang$core$List$map, _rtfeldman$elm_css$Css_Structure_Output$repeatableSimpleSelectorToString, _p7._1)));
			case 'UniversalSelectorSequence':
				var _p8 = _p7._0;
				return _elm_lang$core$List$isEmpty(_p8) ? '*' : A2(
					_elm_lang$core$String$join,
					'',
					A2(_elm_lang$core$List$map, _rtfeldman$elm_css$Css_Structure_Output$repeatableSimpleSelectorToString, _p8));
			default:
				return A2(
					_elm_lang$core$String$join,
					'',
					A2(
						_elm_lang$core$List_ops['::'],
						_p7._0,
						A2(_elm_lang$core$List$map, _rtfeldman$elm_css$Css_Structure_Output$repeatableSimpleSelectorToString, _p7._1)));
		}
	};
	var _rtfeldman$elm_css$Css_Structure_Output$selectorChainToString = function (_p9) {
		var _p10 = _p9;
		return A2(
			_elm_lang$core$String$join,
			' ',
			_elm_lang$core$Native_List.fromArray(
				[
					_rtfeldman$elm_css$Css_Structure_Output$combinatorToString(_p10._0),
					_rtfeldman$elm_css$Css_Structure_Output$simpleSelectorSequenceToString(_p10._1)
				]));
	};
	var _rtfeldman$elm_css$Css_Structure_Output$selectorToString = function (_p11) {
		var _p12 = _p11;
		var pseudoElementsString = A2(
			_elm_lang$core$String$join,
			'',
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$core$Maybe$withDefault,
					'',
					A2(_elm_lang$core$Maybe$map, _rtfeldman$elm_css$Css_Structure_Output$pseudoElementToString, _p12._2))
				]));
		var segments = A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Native_List.fromArray(
				[
					_rtfeldman$elm_css$Css_Structure_Output$simpleSelectorSequenceToString(_p12._0)
				]),
			A2(_elm_lang$core$List$map, _rtfeldman$elm_css$Css_Structure_Output$selectorChainToString, _p12._1));
		return A3(
			_elm_lang$core$Basics$flip,
			F2(
				function (x, y) {
					return A2(_elm_lang$core$Basics_ops['++'], x, y);
				}),
			pseudoElementsString,
			A2(
				_elm_lang$core$String$join,
				' ',
				A2(
					_elm_lang$core$List$filter,
					function (_p13) {
						return _elm_lang$core$Basics$not(
							_elm_lang$core$String$isEmpty(_p13));
					},
					segments)));
	};
	var _rtfeldman$elm_css$Css_Structure_Output$prettyPrintStyleBlock = function (_p14) {
		var _p15 = _p14;
		var selectorStr = A2(
			_elm_lang$core$String$join,
			', ',
			A2(
				_elm_lang$core$List$map,
				_rtfeldman$elm_css$Css_Structure_Output$selectorToString,
				A2(_elm_lang$core$List_ops['::'], _p15._0, _p15._1)));
		return A2(
			_elm_lang$core$Basics_ops['++'],
			selectorStr,
			A2(
				_elm_lang$core$Basics_ops['++'],
				' {\n',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_rtfeldman$elm_css$Css_Structure_Output$prettyPrintProperties(_p15._2),
					'\n}')));
	};
	var _rtfeldman$elm_css$Css_Structure_Output$prettyPrintDeclaration = function (declaration) {
		var _p16 = declaration;
		switch (_p16.ctor) {
			case 'StyleBlockDeclaration':
				return _rtfeldman$elm_css$Css_Structure_Output$prettyPrintStyleBlock(_p16._0);
			case 'MediaRule':
				var query = A2(
					_elm_lang$core$String$join,
					' ',
					A2(
						_elm_lang$core$List$map,
						function (_p17) {
							var _p18 = _p17;
							return _p18._0;
						},
						_p16._0));
				var blocks = A2(
					_elm_lang$core$String$join,
					'\n\n',
					A2(
						_elm_lang$core$List$map,
						function (_p19) {
							return _rtfeldman$elm_css$Css_Structure_Output$indent(
								_rtfeldman$elm_css$Css_Structure_Output$prettyPrintStyleBlock(_p19));
						},
						_p16._1));
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'@media ',
					A2(
						_elm_lang$core$Basics_ops['++'],
						query,
						A2(
							_elm_lang$core$Basics_ops['++'],
							' {\n',
							A2(
								_elm_lang$core$Basics_ops['++'],
								_rtfeldman$elm_css$Css_Structure_Output$indent(blocks),
								'\n}'))));
			default:
				return _elm_lang$core$Native_Utils.crashCase(
					'Css.Structure.Output',
					{
						start: {line: 56, column: 5},
						end: {line: 73, column: 49}
					},
					_p16)('not yet implemented :x');
		}
	};
	var _rtfeldman$elm_css$Css_Structure_Output$namespaceToString = function (_p21) {
		var _p22 = _p21;
		return A2(
			_elm_lang$core$Basics_ops['++'],
			'@namespace ',
			A2(
				_elm_lang$core$Basics_ops['++'],
				_p22._0,
				A2(
					_elm_lang$core$Basics_ops['++'],
					'\"',
					A2(_elm_lang$core$Basics_ops['++'], _p22._1, '\"'))));
	};
	var _rtfeldman$elm_css$Css_Structure_Output$importToString = function (_p23) {
		var _p24 = _p23;
		return A2(
			_elm_lang$core$Basics_ops['++'],
			'@import \"',
			A2(
				_elm_lang$core$Basics_ops['++'],
				_p24._0,
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(_p24._1),
					'\"')));
	};
	var _rtfeldman$elm_css$Css_Structure_Output$charsetToString = function (charset) {
		return A2(
			_elm_lang$core$Maybe$withDefault,
			'',
			A2(
				_elm_lang$core$Maybe$map,
				function (str) {
					return A2(
						_elm_lang$core$Basics_ops['++'],
						'@charset \"',
						A2(_elm_lang$core$Basics_ops['++'], str, '\"'));
				},
				charset));
	};
	var _rtfeldman$elm_css$Css_Structure_Output$prettyPrint = function (_p25) {
		var _p26 = _p25;
		return A2(
			_elm_lang$core$String$join,
			'\n\n',
			A2(
				_elm_lang$core$List$filter,
				function (_p27) {
					return _elm_lang$core$Basics$not(
						_elm_lang$core$String$isEmpty(_p27));
				},
				_elm_lang$core$Native_List.fromArray(
					[
						_rtfeldman$elm_css$Css_Structure_Output$charsetToString(_p26.charset),
						A2(
						_elm_lang$core$String$join,
						'\n',
						A2(_elm_lang$core$List$map, _rtfeldman$elm_css$Css_Structure_Output$importToString, _p26.imports)),
						A2(
						_elm_lang$core$String$join,
						'\n',
						A2(_elm_lang$core$List$map, _rtfeldman$elm_css$Css_Structure_Output$namespaceToString, _p26.namespaces)),
						A2(
						_elm_lang$core$String$join,
						'\n\n',
						A2(_elm_lang$core$List$map, _rtfeldman$elm_css$Css_Structure_Output$prettyPrintDeclaration, _p26.declarations))
					])));
	};
	
	var _rtfeldman$elm_css$Css_Preprocess_Resolve$collectSelectors = function (declarations) {
		collectSelectors:
		while (true) {
			var _p0 = declarations;
			if (_p0.ctor === '[]') {
				return _elm_lang$core$Native_List.fromArray(
					[]);
			} else {
				if (_p0._0.ctor === 'StyleBlockDeclaration') {
					return A2(
						_elm_lang$core$Basics_ops['++'],
						A2(_elm_lang$core$List_ops['::'], _p0._0._0._0, _p0._0._0._1),
						_rtfeldman$elm_css$Css_Preprocess_Resolve$collectSelectors(_p0._1));
				} else {
					var _v1 = _p0._1;
					declarations = _v1;
					continue collectSelectors;
				}
			}
		}
	};
	var _rtfeldman$elm_css$Css_Preprocess_Resolve$extractWarning = function (_p1) {
		var _p2 = _p1;
		return {
			ctor: '_Tuple2',
			_0: _p2.warnings,
			_1: {key: _p2.key, value: _p2.value, important: _p2.important}
		};
	};
	var _rtfeldman$elm_css$Css_Preprocess_Resolve$extractWarnings = function (properties) {
		return {
			ctor: '_Tuple2',
			_0: A2(
				_elm_lang$core$List$concatMap,
				function (_) {
					return _.warnings;
				},
				properties),
			_1: A2(
				_elm_lang$core$List$map,
				function (prop) {
					return _elm_lang$core$Basics$snd(
						_rtfeldman$elm_css$Css_Preprocess_Resolve$extractWarning(prop));
				},
				properties)
		};
	};
	var _rtfeldman$elm_css$Css_Preprocess_Resolve$toDocumentRule = F5(
		function (str1, str2, str3, str4, declaration) {
			var _p3 = declaration;
			if (_p3.ctor === 'StyleBlockDeclaration') {
				return A5(_rtfeldman$elm_css$Css_Structure$DocumentRule, str1, str2, str3, str4, _p3._0);
			} else {
				return declaration;
			}
		});
	var _rtfeldman$elm_css$Css_Preprocess_Resolve$concatDeclarationsAndWarnings = function (declarationsAndWarnings) {
		var _p4 = declarationsAndWarnings;
		if (_p4.ctor === '[]') {
			return {
				declarations: _elm_lang$core$Native_List.fromArray(
					[]),
				warnings: _elm_lang$core$Native_List.fromArray(
					[])
			};
		} else {
			var result = _rtfeldman$elm_css$Css_Preprocess_Resolve$concatDeclarationsAndWarnings(_p4._1);
			return {
				declarations: A2(_elm_lang$core$Basics_ops['++'], _p4._0.declarations, result.declarations),
				warnings: A2(_elm_lang$core$Basics_ops['++'], _p4._0.warnings, result.warnings)
			};
		}
	};
	var _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveFontFeatureValues = function (tuples) {
		var expandTuples = function (tuplesToExpand) {
			var _p5 = tuplesToExpand;
			if (_p5.ctor === '[]') {
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_List.fromArray(
						[]),
					_1: _elm_lang$core$Native_List.fromArray(
						[])
				};
			} else {
				var _p6 = expandTuples(_p5._1);
				var nextWarnings = _p6._0;
				var nextTuples = _p6._1;
				var _p7 = _rtfeldman$elm_css$Css_Preprocess_Resolve$extractWarnings(_p5._0._1);
				var warnings = _p7._0;
				var properties = _p7._1;
				return {
					ctor: '_Tuple2',
					_0: A2(_elm_lang$core$Basics_ops['++'], warnings, nextWarnings),
					_1: A2(
						_elm_lang$core$List_ops['::'],
						{ctor: '_Tuple2', _0: _p5._0._0, _1: properties},
						nextTuples)
				};
			}
		};
		var _p8 = expandTuples(tuples);
		var warnings = _p8._0;
		var newTuples = _p8._1;
		return {
			declarations: _elm_lang$core$Native_List.fromArray(
				[
					_rtfeldman$elm_css$Css_Structure$FontFeatureValues(newTuples)
				]),
			warnings: warnings
		};
	};
	var _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveCounterStyle = function (counterStyleProperties) {
		var _p9 = _rtfeldman$elm_css$Css_Preprocess_Resolve$extractWarnings(counterStyleProperties);
		var warnings = _p9._0;
		var properties = _p9._1;
		return {
			declarations: _elm_lang$core$Native_List.fromArray(
				[
					_rtfeldman$elm_css$Css_Structure$Viewport(properties)
				]),
			warnings: warnings
		};
	};
	var _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveViewport = function (viewportProperties) {
		var _p10 = _rtfeldman$elm_css$Css_Preprocess_Resolve$extractWarnings(viewportProperties);
		var warnings = _p10._0;
		var properties = _p10._1;
		return {
			declarations: _elm_lang$core$Native_List.fromArray(
				[
					_rtfeldman$elm_css$Css_Structure$Viewport(properties)
				]),
			warnings: warnings
		};
	};
	var _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveKeyframes = F2(
		function (str, properties) {
			return {
				declarations: _elm_lang$core$Native_List.fromArray(
					[
						A2(_rtfeldman$elm_css$Css_Structure$Keyframes, str, properties)
					]),
				warnings: _elm_lang$core$Native_List.fromArray(
					[])
			};
		});
	var _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveFontFace = function (fontFaceProperties) {
		var _p11 = _rtfeldman$elm_css$Css_Preprocess_Resolve$extractWarnings(fontFaceProperties);
		var warnings = _p11._0;
		var properties = _p11._1;
		return {
			declarations: _elm_lang$core$Native_List.fromArray(
				[
					_rtfeldman$elm_css$Css_Structure$FontFace(properties)
				]),
			warnings: warnings
		};
	};
	var _rtfeldman$elm_css$Css_Preprocess_Resolve$resolvePageRule = F2(
		function (str, pageRuleProperties) {
			var _p12 = _rtfeldman$elm_css$Css_Preprocess_Resolve$extractWarnings(pageRuleProperties);
			var warnings = _p12._0;
			var properties = _p12._1;
			return {
				declarations: _elm_lang$core$Native_List.fromArray(
					[
						A2(_rtfeldman$elm_css$Css_Structure$PageRule, str, properties)
					]),
				warnings: warnings
			};
		});
	var _rtfeldman$elm_css$Css_Preprocess_Resolve$toMediaRule = F2(
		function (mediaQueries, declaration) {
			var _p13 = declaration;
			switch (_p13.ctor) {
				case 'StyleBlockDeclaration':
					return A2(
						_rtfeldman$elm_css$Css_Structure$MediaRule,
						mediaQueries,
						_elm_lang$core$Native_List.fromArray(
							[_p13._0]));
				case 'MediaRule':
					return A2(
						_rtfeldman$elm_css$Css_Structure$MediaRule,
						A2(_elm_lang$core$Basics_ops['++'], mediaQueries, _p13._0),
						_p13._1);
				case 'SupportsRule':
					return A2(
						_rtfeldman$elm_css$Css_Structure$SupportsRule,
						_p13._0,
						A2(
							_elm_lang$core$List$map,
							_rtfeldman$elm_css$Css_Preprocess_Resolve$toMediaRule(mediaQueries),
							_p13._1));
				case 'DocumentRule':
					return A5(_rtfeldman$elm_css$Css_Structure$DocumentRule, _p13._0, _p13._1, _p13._2, _p13._3, _p13._4);
				case 'PageRule':
					return declaration;
				case 'FontFace':
					return declaration;
				case 'Keyframes':
					return declaration;
				case 'Viewport':
					return declaration;
				case 'CounterStyle':
					return declaration;
				default:
					return declaration;
			}
		});
	var _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveMediaRule = F2(
		function (mediaQueries, styleBlocks) {
			var handleStyleBlock = function (styleBlock) {
				var _p14 = _rtfeldman$elm_css$Css_Preprocess_Resolve$expandStyleBlock(styleBlock);
				var declarations = _p14.declarations;
				var warnings = _p14.warnings;
				return {
					declarations: A2(
						_elm_lang$core$List$map,
						_rtfeldman$elm_css$Css_Preprocess_Resolve$toMediaRule(mediaQueries),
						declarations),
					warnings: warnings
				};
			};
			var results = A2(_elm_lang$core$List$map, handleStyleBlock, styleBlocks);
			return {
				warnings: A2(
					_elm_lang$core$List$concatMap,
					function (_) {
						return _.warnings;
					},
					results),
				declarations: A2(
					_elm_lang$core$List$concatMap,
					function (_) {
						return _.declarations;
					},
					results)
			};
		});
	var _rtfeldman$elm_css$Css_Preprocess_Resolve$expandStyleBlock = function (_p15) {
		var _p16 = _p15;
		return A2(
			_rtfeldman$elm_css$Css_Preprocess_Resolve$applyMixins,
			_p16._2,
			_elm_lang$core$Native_List.fromArray(
				[
					_rtfeldman$elm_css$Css_Structure$StyleBlockDeclaration(
					A3(
						_rtfeldman$elm_css$Css_Structure$StyleBlock,
						_p16._0,
						_p16._1,
						_elm_lang$core$Native_List.fromArray(
							[])))
				]));
	};
	var _rtfeldman$elm_css$Css_Preprocess_Resolve$applyMixins = F2(
		function (mixins, declarations) {
			applyMixins:
			while (true) {
				var _p17 = mixins;
				if (_p17.ctor === '[]') {
					return {
						declarations: declarations,
						warnings: _elm_lang$core$Native_List.fromArray(
							[])
					};
				} else {
					switch (_p17._0.ctor) {
						case 'AppendProperty':
							var _p18 = _rtfeldman$elm_css$Css_Preprocess_Resolve$extractWarning(_p17._0._0);
							var warnings = _p18._0;
							var property = _p18._1;
							var result = A2(
								_rtfeldman$elm_css$Css_Preprocess_Resolve$applyMixins,
								_p17._1,
								A2(_rtfeldman$elm_css$Css_Structure$appendProperty, property, declarations));
							return {
								declarations: result.declarations,
								warnings: A2(_elm_lang$core$Basics_ops['++'], warnings, result.warnings)
							};
						case 'ExtendSelector':
							return A4(
								_rtfeldman$elm_css$Css_Preprocess_Resolve$applyNestedMixinsToLast,
								_p17._0._1,
								_p17._1,
								_rtfeldman$elm_css$Css_Structure$appendToLastSelector(_p17._0._0),
								declarations);
						case 'NestSnippet':
							var chain = F2(
								function (_p20, _p19) {
									var _p21 = _p20;
									var _p22 = _p19;
									return A3(
										_rtfeldman$elm_css$Css_Structure$Selector,
										_p21._0,
										A2(
											_elm_lang$core$Basics_ops['++'],
											_p21._1,
											A2(
												_elm_lang$core$List_ops['::'],
												{ctor: '_Tuple2', _0: _p17._0._0, _1: _p22._0},
												_p22._1)),
										_elm_lang$core$Maybe$oneOf(
											_elm_lang$core$Native_List.fromArray(
												[_p22._2, _p21._2])));
								});
							var expandDeclaration = function (declaration) {
								var _p23 = declaration;
								switch (_p23.ctor) {
									case 'StyleBlockDeclaration':
										var newSelectors = A2(
											_elm_lang$core$List$concatMap,
											function (originalSelector) {
												return A2(
													_elm_lang$core$List$map,
													chain(originalSelector),
													A2(_elm_lang$core$List_ops['::'], _p23._0._0, _p23._0._1));
											},
											_rtfeldman$elm_css$Css_Preprocess_Resolve$collectSelectors(declarations));
										var newDeclarations = function () {
											var _p24 = newSelectors;
											if (_p24.ctor === '[]') {
												return _elm_lang$core$Native_List.fromArray(
													[]);
											} else {
												return _elm_lang$core$Native_List.fromArray(
													[
														_rtfeldman$elm_css$Css_Structure$StyleBlockDeclaration(
														A3(
															_rtfeldman$elm_css$Css_Structure$StyleBlock,
															_p24._0,
															_p24._1,
															_elm_lang$core$Native_List.fromArray(
																[])))
													]);
											}
										}();
										return _rtfeldman$elm_css$Css_Preprocess_Resolve$concatDeclarationsAndWarnings(
											_elm_lang$core$Native_List.fromArray(
												[
													A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$applyMixins, _p23._0._2, newDeclarations)
												]));
									case 'MediaRule':
										return A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$resolveMediaRule, _p23._0, _p23._1);
									case 'SupportsRule':
										return A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$resolveSupportsRule, _p23._0, _p23._1);
									case 'DocumentRule':
										return A5(_rtfeldman$elm_css$Css_Preprocess_Resolve$resolveDocumentRule, _p23._0, _p23._1, _p23._2, _p23._3, _p23._4);
									case 'PageRule':
										return A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$resolvePageRule, _p23._0, _p23._1);
									case 'FontFace':
										return _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveFontFace(_p23._0);
									case 'Keyframes':
										return A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$resolveKeyframes, _p23._0, _p23._1);
									case 'Viewport':
										return _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveViewport(_p23._0);
									case 'CounterStyle':
										return _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveCounterStyle(_p23._0);
									default:
										return _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveFontFeatureValues(_p23._0);
								}
							};
							return _rtfeldman$elm_css$Css_Preprocess_Resolve$concatDeclarationsAndWarnings(
								A2(
									F2(
										function (x, y) {
											return A2(_elm_lang$core$Basics_ops['++'], x, y);
										}),
									_elm_lang$core$Native_List.fromArray(
										[
											A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$applyMixins, _p17._1, declarations)
										]),
									A2(
										_elm_lang$core$List$map,
										expandDeclaration,
										A2(_elm_lang$core$List$concatMap, _rtfeldman$elm_css$Css_Preprocess$unwrapSnippet, _p17._0._1))));
						case 'WithPseudoElement':
							return A4(
								_rtfeldman$elm_css$Css_Preprocess_Resolve$applyNestedMixinsToLast,
								_p17._0._1,
								_p17._1,
								_rtfeldman$elm_css$Css_Structure$appendPseudoElementToLastSelector(_p17._0._0),
								declarations);
						case 'WithMedia':
							var newDeclarations = function () {
								var _p25 = _rtfeldman$elm_css$Css_Preprocess_Resolve$collectSelectors(declarations);
								if (_p25.ctor === '[]') {
									return _elm_lang$core$Native_List.fromArray(
										[]);
								} else {
									return _elm_lang$core$Native_List.fromArray(
										[
											A2(
											_rtfeldman$elm_css$Css_Structure$MediaRule,
											_p17._0._0,
											_elm_lang$core$Native_List.fromArray(
												[
													A3(
													_rtfeldman$elm_css$Css_Structure$StyleBlock,
													_p25._0,
													_p25._1,
													_elm_lang$core$Native_List.fromArray(
														[]))
												]))
										]);
								}
							}();
							return _rtfeldman$elm_css$Css_Preprocess_Resolve$concatDeclarationsAndWarnings(
								_elm_lang$core$Native_List.fromArray(
									[
										A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$applyMixins, _p17._1, declarations),
										A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$applyMixins, _p17._0._1, newDeclarations)
									]));
						default:
							var _v14 = A2(_elm_lang$core$Basics_ops['++'], _p17._0._0, _p17._1),
								_v15 = declarations;
							mixins = _v14;
							declarations = _v15;
							continue applyMixins;
					}
				}
			}
		});
	var _rtfeldman$elm_css$Css_Preprocess_Resolve$applyNestedMixinsToLast = F4(
		function (nestedMixins, rest, f, declarations) {
			var handleInitial = function (declarationsAndWarnings) {
				var result = A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$applyMixins, nestedMixins, declarationsAndWarnings.declarations);
				return {
					warnings: A2(_elm_lang$core$Basics_ops['++'], declarationsAndWarnings.warnings, result.warnings),
					declarations: result.declarations
				};
			};
			var initialResult = _rtfeldman$elm_css$Css_Preprocess_Resolve$concatDeclarationsAndWarnings(
				A2(
					_rtfeldman$elm_css$Css_Structure$mapLast,
					handleInitial,
					A2(
						_elm_lang$core$List$map,
						function (declaration) {
							return {
								declarations: _elm_lang$core$Native_List.fromArray(
									[declaration]),
								warnings: _elm_lang$core$Native_List.fromArray(
									[])
							};
						},
						A2(_rtfeldman$elm_css$Css_Structure$concatMapLastStyleBlock, f, declarations))));
			var nextResult = A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$applyMixins, rest, initialResult.declarations);
			return {
				warnings: A2(_elm_lang$core$Basics_ops['++'], initialResult.warnings, nextResult.warnings),
				declarations: nextResult.declarations
			};
		});
	var _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveDocumentRule = F5(
		function (str1, str2, str3, str4, styleBlock) {
			var _p26 = _rtfeldman$elm_css$Css_Preprocess_Resolve$expandStyleBlock(styleBlock);
			var declarations = _p26.declarations;
			var warnings = _p26.warnings;
			return {
				declarations: A2(
					_elm_lang$core$List$map,
					A4(_rtfeldman$elm_css$Css_Preprocess_Resolve$toDocumentRule, str1, str2, str3, str4),
					declarations),
				warnings: warnings
			};
		});
	var _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveSupportsRule = F2(
		function (str, snippets) {
			var _p27 = _rtfeldman$elm_css$Css_Preprocess_Resolve$extract(
				A2(_elm_lang$core$List$concatMap, _rtfeldman$elm_css$Css_Preprocess$unwrapSnippet, snippets));
			var declarations = _p27.declarations;
			var warnings = _p27.warnings;
			return {
				declarations: _elm_lang$core$Native_List.fromArray(
					[
						A2(_rtfeldman$elm_css$Css_Structure$SupportsRule, str, declarations)
					]),
				warnings: warnings
			};
		});
	var _rtfeldman$elm_css$Css_Preprocess_Resolve$extract = function (snippetDeclarations) {
		var _p28 = snippetDeclarations;
		if (_p28.ctor === '[]') {
			return {
				declarations: _elm_lang$core$Native_List.fromArray(
					[]),
				warnings: _elm_lang$core$Native_List.fromArray(
					[])
			};
		} else {
			var _p29 = _rtfeldman$elm_css$Css_Preprocess_Resolve$toDeclarations(_p28._0);
			var declarations = _p29.declarations;
			var warnings = _p29.warnings;
			var nextResult = _rtfeldman$elm_css$Css_Preprocess_Resolve$extract(_p28._1);
			return {
				declarations: A2(_elm_lang$core$Basics_ops['++'], declarations, nextResult.declarations),
				warnings: A2(_elm_lang$core$Basics_ops['++'], warnings, nextResult.warnings)
			};
		}
	};
	var _rtfeldman$elm_css$Css_Preprocess_Resolve$toDeclarations = function (snippetDeclaration) {
		var _p30 = snippetDeclaration;
		switch (_p30.ctor) {
			case 'StyleBlockDeclaration':
				return _rtfeldman$elm_css$Css_Preprocess_Resolve$expandStyleBlock(_p30._0);
			case 'MediaRule':
				return A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$resolveMediaRule, _p30._0, _p30._1);
			case 'SupportsRule':
				return A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$resolveSupportsRule, _p30._0, _p30._1);
			case 'DocumentRule':
				return A5(_rtfeldman$elm_css$Css_Preprocess_Resolve$resolveDocumentRule, _p30._0, _p30._1, _p30._2, _p30._3, _p30._4);
			case 'PageRule':
				return A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$resolvePageRule, _p30._0, _p30._1);
			case 'FontFace':
				return _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveFontFace(_p30._0);
			case 'Keyframes':
				return A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$resolveKeyframes, _p30._0, _p30._1);
			case 'Viewport':
				return _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveViewport(_p30._0);
			case 'CounterStyle':
				return _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveCounterStyle(_p30._0);
			default:
				return _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveFontFeatureValues(_p30._0);
		}
	};
	var _rtfeldman$elm_css$Css_Preprocess_Resolve$toStructure = function (_p31) {
		var _p32 = _p31;
		var _p33 = _rtfeldman$elm_css$Css_Preprocess_Resolve$extract(
			A2(_elm_lang$core$List$concatMap, _rtfeldman$elm_css$Css_Preprocess$unwrapSnippet, _p32.snippets));
		var warnings = _p33.warnings;
		var declarations = _p33.declarations;
		return {
			ctor: '_Tuple2',
			_0: {charset: _p32.charset, imports: _p32.imports, namespaces: _p32.namespaces, declarations: declarations},
			_1: warnings
		};
	};
	var _rtfeldman$elm_css$Css_Preprocess_Resolve$compile = function (sheet) {
		var _p34 = _rtfeldman$elm_css$Css_Preprocess_Resolve$toStructure(sheet);
		var structureStylesheet = _p34._0;
		var warnings = _p34._1;
		return {
			warnings: warnings,
			css: _rtfeldman$elm_css$Css_Structure_Output$prettyPrint(
				_rtfeldman$elm_css$Css_Structure$dropEmpty(structureStylesheet))
		};
	};
	var _rtfeldman$elm_css$Css_Preprocess_Resolve$DeclarationsAndWarnings = F2(
		function (a, b) {
			return {declarations: a, warnings: b};
		});
	
	var _rtfeldman$elm_css$Css$asPairs = _rtfeldman$elm_css$Css_Preprocess$toPropertyPairs;
	var _rtfeldman$elm_css$Css$collectSelectors = function (declarations) {
		collectSelectors:
		while (true) {
			var _p0 = declarations;
			if (_p0.ctor === '[]') {
				return _elm_lang$core$Native_List.fromArray(
					[]);
			} else {
				if (_p0._0.ctor === 'StyleBlockDeclaration') {
					return A2(
						_elm_lang$core$Basics_ops['++'],
						A2(_elm_lang$core$List_ops['::'], _p0._0._0._0, _p0._0._0._1),
						_rtfeldman$elm_css$Css$collectSelectors(_p0._1));
				} else {
					var _v1 = _p0._1;
					declarations = _v1;
					continue collectSelectors;
				}
			}
		}
	};
	var _rtfeldman$elm_css$Css$compile = _rtfeldman$elm_css$Css_Preprocess_Resolve$compile;
	var _rtfeldman$elm_css$Css$stringsToValue = function (list) {
		return _elm_lang$core$List$isEmpty(list) ? {value: 'none'} : {
			value: A2(
				_elm_lang$core$String$join,
				', ',
				A2(
					_elm_lang$core$List$map,
					function (s) {
						return s;
					},
					list))
		};
	};
	var _rtfeldman$elm_css$Css$valuesOrNone = function (list) {
		return _elm_lang$core$List$isEmpty(list) ? {value: 'none'} : {
			value: A2(
				_elm_lang$core$String$join,
				' ',
				A2(
					_elm_lang$core$List$map,
					function (_) {
						return _.value;
					},
					list))
		};
	};
	var _rtfeldman$elm_css$Css$stringToInt = function (str) {
		return A2(
			_elm_lang$core$Result$withDefault,
			0,
			_elm_lang$core$String$toInt(str));
	};
	var _rtfeldman$elm_css$Css$numberToString = function (num) {
		return _elm_lang$core$Basics$toString(num + 0);
	};
	var _rtfeldman$elm_css$Css$numericalPercentageToString = function (value) {
		return A3(
			_elm_lang$core$Basics$flip,
			F2(
				function (x, y) {
					return A2(_elm_lang$core$Basics_ops['++'], x, y);
				}),
			'%',
			_rtfeldman$elm_css$Css$numberToString(
				A2(
					F2(
						function (x, y) {
							return x * y;
						}),
					100,
					value)));
	};
	var _rtfeldman$elm_css$Css$each = F2(
		function (snippetCreators, mixins) {
			var selectorsToSnippet = function (selectors) {
				var _p1 = selectors;
				if (_p1.ctor === '[]') {
					return _rtfeldman$elm_css$Css_Preprocess$Snippet(
						_elm_lang$core$Native_List.fromArray(
							[]));
				} else {
					return _rtfeldman$elm_css$Css_Preprocess$Snippet(
						_elm_lang$core$Native_List.fromArray(
							[
								_rtfeldman$elm_css$Css_Preprocess$StyleBlockDeclaration(
								A3(_rtfeldman$elm_css$Css_Preprocess$StyleBlock, _p1._0, _p1._1, mixins))
							]));
				}
			};
			return selectorsToSnippet(
				_rtfeldman$elm_css$Css$collectSelectors(
					A2(
						_elm_lang$core$List$concatMap,
						_rtfeldman$elm_css$Css_Preprocess$unwrapSnippet,
						A2(
							_elm_lang$core$List$map,
							F2(
								function (x, y) {
									return y(x);
								})(
								_elm_lang$core$Native_List.fromArray(
									[])),
							snippetCreators))));
		});
	var _rtfeldman$elm_css$Css$generalSiblings = _rtfeldman$elm_css$Css_Preprocess$NestSnippet(_rtfeldman$elm_css$Css_Structure$GeneralSibling);
	var _rtfeldman$elm_css$Css$adjacentSiblings = _rtfeldman$elm_css$Css_Preprocess$NestSnippet(_rtfeldman$elm_css$Css_Structure$AdjacentSibling);
	var _rtfeldman$elm_css$Css$descendants = _rtfeldman$elm_css$Css_Preprocess$NestSnippet(_rtfeldman$elm_css$Css_Structure$Descendant);
	var _rtfeldman$elm_css$Css$withClass = function ($class) {
		return _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
			_rtfeldman$elm_css$Css_Structure$ClassSelector(
				A2(_rtfeldman$elm_css_util$Css_Helpers$identifierToString, '', $class)));
	};
	var _rtfeldman$elm_css$Css$children = _rtfeldman$elm_css$Css_Preprocess$NestSnippet(_rtfeldman$elm_css$Css_Structure$Child);
	var _rtfeldman$elm_css$Css$selection = _rtfeldman$elm_css$Css_Preprocess$WithPseudoElement(
		_rtfeldman$elm_css$Css_Structure$PseudoElement('selection'));
	var _rtfeldman$elm_css$Css$firstLine = _rtfeldman$elm_css$Css_Preprocess$WithPseudoElement(
		_rtfeldman$elm_css$Css_Structure$PseudoElement('first-line'));
	var _rtfeldman$elm_css$Css$firstLetter = _rtfeldman$elm_css$Css_Preprocess$WithPseudoElement(
		_rtfeldman$elm_css$Css_Structure$PseudoElement('first-letter'));
	var _rtfeldman$elm_css$Css$before = _rtfeldman$elm_css$Css_Preprocess$WithPseudoElement(
		_rtfeldman$elm_css$Css_Structure$PseudoElement('before'));
	var _rtfeldman$elm_css$Css$after = _rtfeldman$elm_css$Css_Preprocess$WithPseudoElement(
		_rtfeldman$elm_css$Css_Structure$PseudoElement('after'));
	var _rtfeldman$elm_css$Css$valid = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
		_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('valid'));
	var _rtfeldman$elm_css$Css$target = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
		_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('target'));
	var _rtfeldman$elm_css$Css$scope = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
		_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('scope'));
	var _rtfeldman$elm_css$Css$root = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
		_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('root'));
	var _rtfeldman$elm_css$Css$required = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
		_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('required'));
	var _rtfeldman$elm_css$Css$readWrite = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
		_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('read-write'));
	var _rtfeldman$elm_css$Css$outOfRange = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
		_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('out-of-range'));
	var _rtfeldman$elm_css$Css$optional = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
		_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('optional'));
	var _rtfeldman$elm_css$Css$onlyOfType = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
		_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('only-of-type'));
	var _rtfeldman$elm_css$Css$onlyChild = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
		_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('only-child'));
	var _rtfeldman$elm_css$Css$nthOfType = function (str) {
		return _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
			_rtfeldman$elm_css$Css_Structure$PseudoClassSelector(
				A2(
					_elm_lang$core$Basics_ops['++'],
					'nth-of-type(',
					A2(_elm_lang$core$Basics_ops['++'], str, ')'))));
	};
	var _rtfeldman$elm_css$Css$nthLastOfType = function (str) {
		return _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
			_rtfeldman$elm_css$Css_Structure$PseudoClassSelector(
				A2(
					_elm_lang$core$Basics_ops['++'],
					'nth-last-of-type(',
					A2(_elm_lang$core$Basics_ops['++'], str, ')'))));
	};
	var _rtfeldman$elm_css$Css$nthLastChild = function (str) {
		return _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
			_rtfeldman$elm_css$Css_Structure$PseudoClassSelector(
				A2(
					_elm_lang$core$Basics_ops['++'],
					'nth-last-child(',
					A2(_elm_lang$core$Basics_ops['++'], str, ')'))));
	};
	var _rtfeldman$elm_css$Css$nthChild = function (str) {
		return _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
			_rtfeldman$elm_css$Css_Structure$PseudoClassSelector(
				A2(
					_elm_lang$core$Basics_ops['++'],
					'nth-child(',
					A2(_elm_lang$core$Basics_ops['++'], str, ')'))));
	};
	var _rtfeldman$elm_css$Css$link = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
		_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('link'));
	var _rtfeldman$elm_css$Css$lastOfType = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
		_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('last-of-type'));
	var _rtfeldman$elm_css$Css$lastChild = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
		_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('last-child'));
	var _rtfeldman$elm_css$Css$lang = function (str) {
		return _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
			_rtfeldman$elm_css$Css_Structure$PseudoClassSelector(
				A2(
					_elm_lang$core$Basics_ops['++'],
					'lang(',
					A2(_elm_lang$core$Basics_ops['++'], str, ')'))));
	};
	var _rtfeldman$elm_css$Css$invalid = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
		_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('invalid'));
	var _rtfeldman$elm_css$Css$indeterminate = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
		_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('indeterminate'));
	var _rtfeldman$elm_css$Css$hover = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
		_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('hover'));
	var _rtfeldman$elm_css$Css$focus = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
		_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('focus'));
	var _rtfeldman$elm_css$Css$fullscreen = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
		_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('fullscreen'));
	var _rtfeldman$elm_css$Css$firstOfType = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
		_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('first-of-type'));
	var _rtfeldman$elm_css$Css$firstChild = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
		_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('first-child'));
	var _rtfeldman$elm_css$Css$first = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
		_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('first'));
	var _rtfeldman$elm_css$Css$enabled = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
		_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('enabled'));
	var _rtfeldman$elm_css$Css$empty = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
		_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('empty'));
	var _rtfeldman$elm_css$Css$disabled = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
		_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('disabled'));
	var _rtfeldman$elm_css$Css$checked = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
		_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('checked'));
	var _rtfeldman$elm_css$Css$any = function (str) {
		return _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
			_rtfeldman$elm_css$Css_Structure$PseudoClassSelector(
				A2(
					_elm_lang$core$Basics_ops['++'],
					'any(',
					A2(_elm_lang$core$Basics_ops['++'], str, ')'))));
	};
	var _rtfeldman$elm_css$Css$active = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
		_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('active'));
	var _rtfeldman$elm_css$Css$directionalityToString = function (directionality) {
		var _p2 = directionality;
		if (_p2.ctor === 'Ltr') {
			return 'ltr';
		} else {
			return 'rtl';
		}
	};
	var _rtfeldman$elm_css$Css$dir = function (directionality) {
		return _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
			_rtfeldman$elm_css$Css_Structure$PseudoClassSelector(
				A2(
					_elm_lang$core$Basics_ops['++'],
					'dir(',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_rtfeldman$elm_css$Css$directionalityToString(directionality),
						')'))));
	};
	var _rtfeldman$elm_css$Css$propertyWithWarnings = F3(
		function (warnings, key, value) {
			return _rtfeldman$elm_css$Css_Preprocess$AppendProperty(
				{key: key, value: value, important: false, warnings: warnings});
		});
	var _rtfeldman$elm_css$Css$property = _rtfeldman$elm_css$Css$propertyWithWarnings(
		_elm_lang$core$Native_List.fromArray(
			[]));
	var _rtfeldman$elm_css$Css$makeSnippet = F2(
		function (mixins, sequence) {
			var selector = A3(
				_rtfeldman$elm_css$Css_Structure$Selector,
				sequence,
				_elm_lang$core$Native_List.fromArray(
					[]),
				_elm_lang$core$Maybe$Nothing);
			return _rtfeldman$elm_css$Css_Preprocess$Snippet(
				_elm_lang$core$Native_List.fromArray(
					[
						_rtfeldman$elm_css$Css_Preprocess$StyleBlockDeclaration(
						A3(
							_rtfeldman$elm_css$Css_Preprocess$StyleBlock,
							selector,
							_elm_lang$core$Native_List.fromArray(
								[]),
							mixins))
					]));
		});
	var _rtfeldman$elm_css$Css_ops = _rtfeldman$elm_css$Css_ops || {};
	_rtfeldman$elm_css$Css_ops['.'] = F2(
		function ($class, mixins) {
			return A2(
				_rtfeldman$elm_css$Css$makeSnippet,
				mixins,
				_rtfeldman$elm_css$Css_Structure$UniversalSelectorSequence(
					_elm_lang$core$Native_List.fromArray(
						[
							_rtfeldman$elm_css$Css_Structure$ClassSelector(
							A2(_rtfeldman$elm_css_util$Css_Helpers$identifierToString, '', $class))
						])));
		});
	var _rtfeldman$elm_css$Css$selector = F2(
		function (selectorStr, mixins) {
			return A2(
				_rtfeldman$elm_css$Css$makeSnippet,
				mixins,
				A2(
					_rtfeldman$elm_css$Css_Structure$CustomSelector,
					selectorStr,
					_elm_lang$core$Native_List.fromArray(
						[])));
		});
	var _rtfeldman$elm_css$Css$everything = function (mixins) {
		return A2(
			_rtfeldman$elm_css$Css$makeSnippet,
			mixins,
			_rtfeldman$elm_css$Css_Structure$UniversalSelectorSequence(
				_elm_lang$core$Native_List.fromArray(
					[])));
	};
	var _rtfeldman$elm_css$Css_ops = _rtfeldman$elm_css$Css_ops || {};
	_rtfeldman$elm_css$Css_ops['#'] = F2(
		function (id, mixins) {
			return A2(
				_rtfeldman$elm_css$Css$makeSnippet,
				mixins,
				_rtfeldman$elm_css$Css_Structure$UniversalSelectorSequence(
					_elm_lang$core$Native_List.fromArray(
						[
							_rtfeldman$elm_css$Css_Structure$IdSelector(
							A2(_rtfeldman$elm_css_util$Css_Helpers$identifierToString, '', id))
						])));
		});
	var _rtfeldman$elm_css$Css$mixin = _rtfeldman$elm_css$Css_Preprocess$ApplyMixins;
	var _rtfeldman$elm_css$Css$stylesheet = _rtfeldman$elm_css$Css_Preprocess$stylesheet;
	var _rtfeldman$elm_css$Css$animationNames = function (identifiers) {
		var value = A2(
			_elm_lang$core$String$join,
			', ',
			A2(
				_elm_lang$core$List$map,
				_rtfeldman$elm_css_util$Css_Helpers$identifierToString(''),
				identifiers));
		return A2(_rtfeldman$elm_css$Css$property, 'animation-name', value);
	};
	var _rtfeldman$elm_css$Css$animationName = function (identifier) {
		return _rtfeldman$elm_css$Css$animationNames(
			_elm_lang$core$Native_List.fromArray(
				[identifier]));
	};
	var _rtfeldman$elm_css$Css$fontWeight = function (_p3) {
		var _p4 = _p3;
		var _p5 = _p4.value;
		var validWeight = function (weight) {
			return (!_elm_lang$core$Native_Utils.eq(
				_p5,
				_elm_lang$core$Basics$toString(weight))) ? true : A2(
				_elm_lang$core$List$member,
				weight,
				A2(
					_elm_lang$core$List$map,
					F2(
						function (x, y) {
							return x * y;
						})(100),
					_elm_lang$core$Native_List.range(1, 9)));
		};
		var warnings = validWeight(
			_rtfeldman$elm_css$Css$stringToInt(_p5)) ? _elm_lang$core$Native_List.fromArray(
			[]) : _elm_lang$core$Native_List.fromArray(
			[
				A2(
				_elm_lang$core$Basics_ops['++'],
				'fontWeight ',
				A2(_elm_lang$core$Basics_ops['++'], _p5, ' is invalid. Valid weights are: 100, 200, 300, 400, 500, 600, 700, 800, 900. Please see https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight#Values'))
			]);
		return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, warnings, 'font-weight', _p5);
	};
	var _rtfeldman$elm_css$Css$fontFeatureSettingsList = function (featureTagValues) {
		var warnings = _elm_lang$core$List$concat(
			A2(
				_elm_lang$core$List$map,
				function (_) {
					return _.warnings;
				},
				featureTagValues));
		var value = A2(
			_elm_lang$core$String$join,
			', ',
			A2(
				_elm_lang$core$List$map,
				function (_) {
					return _.value;
				},
				featureTagValues));
		return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, warnings, 'font-feature-settings', value);
	};
	var _rtfeldman$elm_css$Css$fontFeatureSettings = function (_p6) {
		var _p7 = _p6;
		return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, _p7.warnings, 'font-feature-settings', _p7.value);
	};
	var _rtfeldman$elm_css$Css$qt = function (str) {
		return _elm_lang$core$Basics$toString(str);
	};
	var _rtfeldman$elm_css$Css$fontFace = function (value) {
		return A2(_elm_lang$core$Basics_ops['++'], 'font-face ', value);
	};
	var _rtfeldman$elm_css$Css$src = function (value) {
		return _elm_lang$core$Basics$toString(value.value);
	};
	var _rtfeldman$elm_css$Css$withMedia = _rtfeldman$elm_css$Css_Preprocess$WithMedia;
	var _rtfeldman$elm_css$Css$media = F2(
		function (mediaQueries, snippets) {
			var nestedMediaRules = function (declarations) {
				nestedMediaRules:
				while (true) {
					var _p8 = declarations;
					if (_p8.ctor === '[]') {
						return _elm_lang$core$Native_List.fromArray(
							[]);
					} else {
						switch (_p8._0.ctor) {
							case 'StyleBlockDeclaration':
								var _v7 = _p8._1;
								declarations = _v7;
								continue nestedMediaRules;
							case 'MediaRule':
								return A2(
									_elm_lang$core$List_ops['::'],
									A2(
										_rtfeldman$elm_css$Css_Preprocess$MediaRule,
										A2(_elm_lang$core$Basics_ops['++'], mediaQueries, _p8._0._0),
										_p8._0._1),
									nestedMediaRules(_p8._1));
							default:
								return A2(
									_elm_lang$core$List_ops['::'],
									_p8._0,
									nestedMediaRules(_p8._1));
						}
					}
				}
			};
			var extractStyleBlocks = function (declarations) {
				extractStyleBlocks:
				while (true) {
					var _p9 = declarations;
					if (_p9.ctor === '[]') {
						return _elm_lang$core$Native_List.fromArray(
							[]);
					} else {
						if (_p9._0.ctor === 'StyleBlockDeclaration') {
							return A2(
								_elm_lang$core$List_ops['::'],
								_p9._0._0,
								extractStyleBlocks(_p9._1));
						} else {
							var _v9 = _p9._1;
							declarations = _v9;
							continue extractStyleBlocks;
						}
					}
				}
			};
			var snippetDeclarations = A2(_elm_lang$core$List$concatMap, _rtfeldman$elm_css$Css_Preprocess$unwrapSnippet, snippets);
			var mediaRuleFromStyleBlocks = A2(
				_rtfeldman$elm_css$Css_Preprocess$MediaRule,
				mediaQueries,
				extractStyleBlocks(snippetDeclarations));
			return _rtfeldman$elm_css$Css_Preprocess$Snippet(
				A2(
					_elm_lang$core$List_ops['::'],
					mediaRuleFromStyleBlocks,
					nestedMediaRules(snippetDeclarations)));
		});
	var _rtfeldman$elm_css$Css$mediaQuery = F2(
		function (queryString, snippets) {
			return A2(
				_rtfeldman$elm_css$Css$media,
				_elm_lang$core$Native_List.fromArray(
					[
						_rtfeldman$elm_css$Css_Structure$MediaQuery(queryString)
					]),
				snippets);
		});
	var _rtfeldman$elm_css$Css$color = function (c) {
		return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'color', c.value);
	};
	var _rtfeldman$elm_css$Css$backgroundColor = function (c) {
		return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'background-color', c.value);
	};
	var _rtfeldman$elm_css$Css$borderColor4 = F4(
		function (c1, c2, c3, c4) {
			var value = A2(
				_elm_lang$core$String$join,
				' ',
				_elm_lang$core$Native_List.fromArray(
					[c1.value, c2.value, c3.value, c4.value]));
			var warnings = A2(
				_elm_lang$core$Basics_ops['++'],
				c1.warnings,
				A2(
					_elm_lang$core$Basics_ops['++'],
					c2.warnings,
					A2(_elm_lang$core$Basics_ops['++'], c3.warnings, c4.warnings)));
			return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, warnings, 'border-color', value);
		});
	var _rtfeldman$elm_css$Css$borderColor3 = F3(
		function (c1, c2, c3) {
			var value = A2(
				_elm_lang$core$String$join,
				' ',
				_elm_lang$core$Native_List.fromArray(
					[c1.value, c2.value, c3.value]));
			var warnings = A2(
				_elm_lang$core$Basics_ops['++'],
				c1.warnings,
				A2(_elm_lang$core$Basics_ops['++'], c2.warnings, c3.warnings));
			return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, warnings, 'border-color', value);
		});
	var _rtfeldman$elm_css$Css$borderColor2 = F2(
		function (c1, c2) {
			var value = A2(
				_elm_lang$core$String$join,
				' ',
				_elm_lang$core$Native_List.fromArray(
					[c1.value, c2.value]));
			var warnings = A2(_elm_lang$core$Basics_ops['++'], c1.warnings, c2.warnings);
			return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, warnings, 'border-color', value);
		});
	var _rtfeldman$elm_css$Css$borderColor = function (c) {
		return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'border-color', c.value);
	};
	var _rtfeldman$elm_css$Css$borderBlockEndColor = function (c) {
		return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'border-block-end-color', c.value);
	};
	var _rtfeldman$elm_css$Css$borderTopColor = function (c) {
		return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'border-top-color', c.value);
	};
	var _rtfeldman$elm_css$Css$borderRightColor = function (c) {
		return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'border-right-color', c.value);
	};
	var _rtfeldman$elm_css$Css$borderLeftColor = function (c) {
		return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'border-left-color', c.value);
	};
	var _rtfeldman$elm_css$Css$borderInlineEndColor = function (c) {
		return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'border-inline-end-color', c.value);
	};
	var _rtfeldman$elm_css$Css$borderInlineStartColor = function (c) {
		return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'border-inline-start-color', c.value);
	};
	var _rtfeldman$elm_css$Css$borderBottomColor = function (c) {
		return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'border-bottom-color', c.value);
	};
	var _rtfeldman$elm_css$Css$borderBlockStartColor = function (c) {
		return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'border-block-start-color', c.value);
	};
	var _rtfeldman$elm_css$Css$featureOff = 0;
	var _rtfeldman$elm_css$Css$featureOn = 1;
	var _rtfeldman$elm_css$Css$displayFlex = A2(_rtfeldman$elm_css$Css$property, 'display', 'flex');
	var _rtfeldman$elm_css$Css$textDecorationColor = function (c) {
		return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'text-decoration-color', c.value);
	};
	var _rtfeldman$elm_css$Css$prop4 = F5(
		function (key, argA, argB, argC, argD) {
			return A2(
				_rtfeldman$elm_css$Css$property,
				key,
				A2(
					_elm_lang$core$String$join,
					' ',
					_elm_lang$core$Native_List.fromArray(
						[argA.value, argB.value, argC.value, argD.value])));
		});
	var _rtfeldman$elm_css$Css$textShadow4 = _rtfeldman$elm_css$Css$prop4('text-shadow');
	var _rtfeldman$elm_css$Css$padding4 = _rtfeldman$elm_css$Css$prop4('padding');
	var _rtfeldman$elm_css$Css$margin4 = _rtfeldman$elm_css$Css$prop4('margin');
	var _rtfeldman$elm_css$Css$borderImageOutset4 = _rtfeldman$elm_css$Css$prop4('border-image-outset');
	var _rtfeldman$elm_css$Css$borderImageWidth4 = _rtfeldman$elm_css$Css$prop4('border-image-width');
	var _rtfeldman$elm_css$Css$borderRadius4 = _rtfeldman$elm_css$Css$prop4('border-radius');
	var _rtfeldman$elm_css$Css$prop3 = F4(
		function (key, argA, argB, argC) {
			return A2(
				_rtfeldman$elm_css$Css$property,
				key,
				A2(
					_elm_lang$core$String$join,
					' ',
					_elm_lang$core$Native_List.fromArray(
						[argA.value, argB.value, argC.value])));
		});
	var _rtfeldman$elm_css$Css$textShadow3 = _rtfeldman$elm_css$Css$prop3('text-shadow');
	var _rtfeldman$elm_css$Css$textIndent3 = _rtfeldman$elm_css$Css$prop3('text-indent');
	var _rtfeldman$elm_css$Css$padding3 = _rtfeldman$elm_css$Css$prop3('padding');
	var _rtfeldman$elm_css$Css$margin3 = _rtfeldman$elm_css$Css$prop3('margin');
	var _rtfeldman$elm_css$Css$border3 = _rtfeldman$elm_css$Css$prop3('border');
	var _rtfeldman$elm_css$Css$borderTop3 = _rtfeldman$elm_css$Css$prop3('border-top');
	var _rtfeldman$elm_css$Css$borderBottom3 = _rtfeldman$elm_css$Css$prop3('border-bottom');
	var _rtfeldman$elm_css$Css$borderLeft3 = _rtfeldman$elm_css$Css$prop3('border-left');
	var _rtfeldman$elm_css$Css$borderRight3 = _rtfeldman$elm_css$Css$prop3('border-right');
	var _rtfeldman$elm_css$Css$borderBlockStart3 = _rtfeldman$elm_css$Css$prop3('border-block-start');
	var _rtfeldman$elm_css$Css$borderBlockEnd3 = _rtfeldman$elm_css$Css$prop3('border-block-end');
	var _rtfeldman$elm_css$Css$borderInlineStart3 = _rtfeldman$elm_css$Css$prop3('border-block-start');
	var _rtfeldman$elm_css$Css$borderInlineEnd3 = _rtfeldman$elm_css$Css$prop3('border-block-end');
	var _rtfeldman$elm_css$Css$borderImageOutset3 = _rtfeldman$elm_css$Css$prop3('border-image-outset');
	var _rtfeldman$elm_css$Css$borderImageWidth3 = _rtfeldman$elm_css$Css$prop3('border-image-width');
	var _rtfeldman$elm_css$Css$borderRadius3 = _rtfeldman$elm_css$Css$prop3('border-radius');
	var _rtfeldman$elm_css$Css$fontVariant3 = _rtfeldman$elm_css$Css$prop3('font-variant');
	var _rtfeldman$elm_css$Css$fontVariantNumeric3 = _rtfeldman$elm_css$Css$prop3('font-variant-numeric');
	var _rtfeldman$elm_css$Css$textDecoration3 = _rtfeldman$elm_css$Css$prop3('text-decoration');
	var _rtfeldman$elm_css$Css$textDecorations3 = function (_p10) {
		return A2(
			_rtfeldman$elm_css$Css$prop3,
			'text-decoration',
			_rtfeldman$elm_css$Css$valuesOrNone(_p10));
	};
	var _rtfeldman$elm_css$Css$prop2 = F3(
		function (key, argA, argB) {
			return A2(
				_rtfeldman$elm_css$Css$property,
				key,
				A2(
					_elm_lang$core$String$join,
					' ',
					_elm_lang$core$Native_List.fromArray(
						[argA.value, argB.value])));
		});
	var _rtfeldman$elm_css$Css$textShadow2 = _rtfeldman$elm_css$Css$prop2('text-shadow');
	var _rtfeldman$elm_css$Css$textIndent2 = _rtfeldman$elm_css$Css$prop2('text-indent');
	var _rtfeldman$elm_css$Css$padding2 = _rtfeldman$elm_css$Css$prop2('padding');
	var _rtfeldman$elm_css$Css$margin2 = _rtfeldman$elm_css$Css$prop2('margin');
	var _rtfeldman$elm_css$Css$border2 = _rtfeldman$elm_css$Css$prop2('border');
	var _rtfeldman$elm_css$Css$borderTop2 = _rtfeldman$elm_css$Css$prop2('border-top');
	var _rtfeldman$elm_css$Css$borderBottom2 = _rtfeldman$elm_css$Css$prop2('border-bottom');
	var _rtfeldman$elm_css$Css$borderLeft2 = _rtfeldman$elm_css$Css$prop2('border-left');
	var _rtfeldman$elm_css$Css$borderRight2 = _rtfeldman$elm_css$Css$prop2('border-right');
	var _rtfeldman$elm_css$Css$borderBlockStart2 = _rtfeldman$elm_css$Css$prop2('border-block-start');
	var _rtfeldman$elm_css$Css$borderBlockEnd2 = _rtfeldman$elm_css$Css$prop2('border-block-end');
	var _rtfeldman$elm_css$Css$borderInlineStart2 = _rtfeldman$elm_css$Css$prop2('border-block-start');
	var _rtfeldman$elm_css$Css$borderInlineEnd2 = _rtfeldman$elm_css$Css$prop2('border-block-end');
	var _rtfeldman$elm_css$Css$borderImageOutset2 = _rtfeldman$elm_css$Css$prop2('border-image-outset');
	var _rtfeldman$elm_css$Css$borderImageWidth2 = _rtfeldman$elm_css$Css$prop2('border-image-width');
	var _rtfeldman$elm_css$Css$borderTopWidth2 = _rtfeldman$elm_css$Css$prop2('border-top-width');
	var _rtfeldman$elm_css$Css$borderBottomLeftRadius2 = _rtfeldman$elm_css$Css$prop2('border-bottom-left-radius');
	var _rtfeldman$elm_css$Css$borderBottomRightRadius2 = _rtfeldman$elm_css$Css$prop2('border-bottom-right-radius');
	var _rtfeldman$elm_css$Css$borderTopLeftRadius2 = _rtfeldman$elm_css$Css$prop2('border-top-left-radius');
	var _rtfeldman$elm_css$Css$borderTopRightRadius2 = _rtfeldman$elm_css$Css$prop2('border-top-right-radius');
	var _rtfeldman$elm_css$Css$borderRadius2 = _rtfeldman$elm_css$Css$prop2('border-radius');
	var _rtfeldman$elm_css$Css$borderSpacing2 = _rtfeldman$elm_css$Css$prop2('border-spacing');
	var _rtfeldman$elm_css$Css$fontVariant2 = _rtfeldman$elm_css$Css$prop2('font-variant');
	var _rtfeldman$elm_css$Css$fontVariantNumeric2 = _rtfeldman$elm_css$Css$prop2('font-variant-numeric');
	var _rtfeldman$elm_css$Css$textDecoration2 = _rtfeldman$elm_css$Css$prop2('text-decoration');
	var _rtfeldman$elm_css$Css$textDecorations2 = function (_p11) {
		return A2(
			_rtfeldman$elm_css$Css$prop2,
			'text-decoration',
			_rtfeldman$elm_css$Css$valuesOrNone(_p11));
	};
	var _rtfeldman$elm_css$Css$prop1 = F2(
		function (key, arg) {
			return A2(_rtfeldman$elm_css$Css$property, key, arg.value);
		});
	var _rtfeldman$elm_css$Css$textRendering = _rtfeldman$elm_css$Css$prop1('text-rendering');
	var _rtfeldman$elm_css$Css$textOverflow = _rtfeldman$elm_css$Css$prop1('text-overflow');
	var _rtfeldman$elm_css$Css$textShadow = _rtfeldman$elm_css$Css$prop1('text-shadow');
	var _rtfeldman$elm_css$Css$textIndent = _rtfeldman$elm_css$Css$prop1('text-indent');
	var _rtfeldman$elm_css$Css$textTransform = _rtfeldman$elm_css$Css$prop1('text-transform');
	var _rtfeldman$elm_css$Css$display = _rtfeldman$elm_css$Css$prop1('display');
	var _rtfeldman$elm_css$Css$opacity = _rtfeldman$elm_css$Css$prop1('opacity');
	var _rtfeldman$elm_css$Css$width = _rtfeldman$elm_css$Css$prop1('width');
	var _rtfeldman$elm_css$Css$maxWidth = _rtfeldman$elm_css$Css$prop1('max-width');
	var _rtfeldman$elm_css$Css$minWidth = _rtfeldman$elm_css$Css$prop1('min-width');
	var _rtfeldman$elm_css$Css$height = _rtfeldman$elm_css$Css$prop1('height');
	var _rtfeldman$elm_css$Css$minHeight = _rtfeldman$elm_css$Css$prop1('min-height');
	var _rtfeldman$elm_css$Css$maxHeight = _rtfeldman$elm_css$Css$prop1('max-height');
	var _rtfeldman$elm_css$Css$padding = _rtfeldman$elm_css$Css$prop1('padding');
	var _rtfeldman$elm_css$Css$paddingBlockStart = _rtfeldman$elm_css$Css$prop1('padding-block-start');
	var _rtfeldman$elm_css$Css$paddingBlockEnd = _rtfeldman$elm_css$Css$prop1('padding-block-end');
	var _rtfeldman$elm_css$Css$paddingInlineStart = _rtfeldman$elm_css$Css$prop1('padding-inline-start');
	var _rtfeldman$elm_css$Css$paddingInlineEnd = _rtfeldman$elm_css$Css$prop1('padding-inline-end');
	var _rtfeldman$elm_css$Css$paddingTop = _rtfeldman$elm_css$Css$prop1('padding-top');
	var _rtfeldman$elm_css$Css$paddingBottom = _rtfeldman$elm_css$Css$prop1('padding-bottom');
	var _rtfeldman$elm_css$Css$paddingRight = _rtfeldman$elm_css$Css$prop1('padding-right');
	var _rtfeldman$elm_css$Css$paddingLeft = _rtfeldman$elm_css$Css$prop1('padding-left');
	var _rtfeldman$elm_css$Css$margin = _rtfeldman$elm_css$Css$prop1('margin');
	var _rtfeldman$elm_css$Css$marginTop = _rtfeldman$elm_css$Css$prop1('margin-top');
	var _rtfeldman$elm_css$Css$marginBottom = _rtfeldman$elm_css$Css$prop1('margin-bottom');
	var _rtfeldman$elm_css$Css$marginRight = _rtfeldman$elm_css$Css$prop1('margin-right');
	var _rtfeldman$elm_css$Css$marginLeft = _rtfeldman$elm_css$Css$prop1('margin-left');
	var _rtfeldman$elm_css$Css$marginBlockStart = _rtfeldman$elm_css$Css$prop1('margin-block-start');
	var _rtfeldman$elm_css$Css$marginBlockEnd = _rtfeldman$elm_css$Css$prop1('margin-block-end');
	var _rtfeldman$elm_css$Css$marginInlineStart = _rtfeldman$elm_css$Css$prop1('margin-inline-start');
	var _rtfeldman$elm_css$Css$marginInlineEnd = _rtfeldman$elm_css$Css$prop1('margin-inline-end');
	var _rtfeldman$elm_css$Css$top = _rtfeldman$elm_css$Css$prop1('top');
	var _rtfeldman$elm_css$Css$bottom = _rtfeldman$elm_css$Css$prop1('bottom');
	var _rtfeldman$elm_css$Css$left = _rtfeldman$elm_css$Css$prop1('left');
	var _rtfeldman$elm_css$Css$right = _rtfeldman$elm_css$Css$prop1('right');
	var _rtfeldman$elm_css$Css$border = _rtfeldman$elm_css$Css$prop1('border');
	var _rtfeldman$elm_css$Css$borderTop = _rtfeldman$elm_css$Css$prop1('border-top');
	var _rtfeldman$elm_css$Css$borderBottom = _rtfeldman$elm_css$Css$prop1('border-bottom');
	var _rtfeldman$elm_css$Css$borderLeft = _rtfeldman$elm_css$Css$prop1('border-left');
	var _rtfeldman$elm_css$Css$borderRight = _rtfeldman$elm_css$Css$prop1('border-right');
	var _rtfeldman$elm_css$Css$borderBlockStart = _rtfeldman$elm_css$Css$prop1('border-block-start');
	var _rtfeldman$elm_css$Css$borderBlockEnd = _rtfeldman$elm_css$Css$prop1('border-block-end');
	var _rtfeldman$elm_css$Css$borderInlineStart = _rtfeldman$elm_css$Css$prop1('border-block-start');
	var _rtfeldman$elm_css$Css$borderInlineEnd = _rtfeldman$elm_css$Css$prop1('border-block-end');
	var _rtfeldman$elm_css$Css$borderImageOutset = _rtfeldman$elm_css$Css$prop1('border-image-outset');
	var _rtfeldman$elm_css$Css$borderImageWidth = _rtfeldman$elm_css$Css$prop1('border-image-width');
	var _rtfeldman$elm_css$Css$borderBlockEndStyle = _rtfeldman$elm_css$Css$prop1('border-block-end-style');
	var _rtfeldman$elm_css$Css$borderBlockStartStyle = _rtfeldman$elm_css$Css$prop1('border-block-start-style');
	var _rtfeldman$elm_css$Css$borderInlineEndStyle = _rtfeldman$elm_css$Css$prop1('border-inline-end-style');
	var _rtfeldman$elm_css$Css$borderBottomStyle = _rtfeldman$elm_css$Css$prop1('border-bottom-style');
	var _rtfeldman$elm_css$Css$borderInlineStartStyle = _rtfeldman$elm_css$Css$prop1('border-inline-start-style');
	var _rtfeldman$elm_css$Css$borderLeftStyle = _rtfeldman$elm_css$Css$prop1('border-left-style');
	var _rtfeldman$elm_css$Css$borderRightStyle = _rtfeldman$elm_css$Css$prop1('border-right-style');
	var _rtfeldman$elm_css$Css$borderTopStyle = _rtfeldman$elm_css$Css$prop1('border-top-style');
	var _rtfeldman$elm_css$Css$borderStyle = _rtfeldman$elm_css$Css$prop1('border-style');
	var _rtfeldman$elm_css$Css$borderBottomWidth = _rtfeldman$elm_css$Css$prop1('border-bottom-width');
	var _rtfeldman$elm_css$Css$borderInlineEndWidth = _rtfeldman$elm_css$Css$prop1('border-inline-end-width');
	var _rtfeldman$elm_css$Css$borderLeftWidth = _rtfeldman$elm_css$Css$prop1('border-left-width');
	var _rtfeldman$elm_css$Css$borderRightWidth = _rtfeldman$elm_css$Css$prop1('border-right-width');
	var _rtfeldman$elm_css$Css$borderTopWidth = _rtfeldman$elm_css$Css$prop1('border-top-width');
	var _rtfeldman$elm_css$Css$borderBottomLeftRadius = _rtfeldman$elm_css$Css$prop1('border-bottom-left-radius');
	var _rtfeldman$elm_css$Css$borderBottomRightRadius = _rtfeldman$elm_css$Css$prop1('border-bottom-right-radius');
	var _rtfeldman$elm_css$Css$borderTopLeftRadius = _rtfeldman$elm_css$Css$prop1('border-top-left-radius');
	var _rtfeldman$elm_css$Css$borderTopRightRadius = _rtfeldman$elm_css$Css$prop1('border-top-right-radius');
	var _rtfeldman$elm_css$Css$borderRadius = _rtfeldman$elm_css$Css$prop1('border-radius');
	var _rtfeldman$elm_css$Css$borderSpacing = _rtfeldman$elm_css$Css$prop1('border-spacing');
	var _rtfeldman$elm_css$Css$overflow = _rtfeldman$elm_css$Css$prop1('overflow');
	var _rtfeldman$elm_css$Css$overflowX = _rtfeldman$elm_css$Css$prop1('overflow-x');
	var _rtfeldman$elm_css$Css$overflowY = _rtfeldman$elm_css$Css$prop1('overflow-y');
	var _rtfeldman$elm_css$Css$whiteSpace = _rtfeldman$elm_css$Css$prop1('white-space');
	var _rtfeldman$elm_css$Css$lineHeight = _rtfeldman$elm_css$Css$prop1('line-height');
	var _rtfeldman$elm_css$Css$letterSpacing = _rtfeldman$elm_css$Css$prop1('letter-spacing');
	var _rtfeldman$elm_css$Css$fontFamily = _rtfeldman$elm_css$Css$prop1('font-family');
	var _rtfeldman$elm_css$Css$fontFamilies = function (_p12) {
		return A2(
			_rtfeldman$elm_css$Css$prop1,
			'font-family',
			_rtfeldman$elm_css$Css$stringsToValue(_p12));
	};
	var _rtfeldman$elm_css$Css$fontSize = _rtfeldman$elm_css$Css$prop1('font-size');
	var _rtfeldman$elm_css$Css$fontStyle = _rtfeldman$elm_css$Css$prop1('font-style');
	var _rtfeldman$elm_css$Css$fontVariant = _rtfeldman$elm_css$Css$prop1('font-variant');
	var _rtfeldman$elm_css$Css$fontVariantLigatures = _rtfeldman$elm_css$Css$prop1('font-variant-ligatures');
	var _rtfeldman$elm_css$Css$fontVariantCaps = _rtfeldman$elm_css$Css$prop1('font-variant-caps');
	var _rtfeldman$elm_css$Css$fontVariantNumeric = _rtfeldman$elm_css$Css$prop1('font-variant-numeric');
	var _rtfeldman$elm_css$Css$fontVariantNumerics = function (_p13) {
		return A2(
			_rtfeldman$elm_css$Css$prop1,
			'font-variant-numeric',
			_rtfeldman$elm_css$Css$valuesOrNone(_p13));
	};
	var _rtfeldman$elm_css$Css$textDecoration = _rtfeldman$elm_css$Css$prop1('text-decoration');
	var _rtfeldman$elm_css$Css$textDecorations = function (_p14) {
		return A2(
			_rtfeldman$elm_css$Css$prop1,
			'text-decoration',
			_rtfeldman$elm_css$Css$valuesOrNone(_p14));
	};
	var _rtfeldman$elm_css$Css$textDecorationLine = _rtfeldman$elm_css$Css$prop1('text-decoration-line');
	var _rtfeldman$elm_css$Css$textDecorationLines = function (_p15) {
		return A2(
			_rtfeldman$elm_css$Css$prop1,
			'text-decoration-line',
			_rtfeldman$elm_css$Css$valuesOrNone(_p15));
	};
	var _rtfeldman$elm_css$Css$textDecorationStyle = _rtfeldman$elm_css$Css$prop1('text-decoration-style');
	var _rtfeldman$elm_css$Css$position = _rtfeldman$elm_css$Css$prop1('position');
	var _rtfeldman$elm_css$Css$textBottom = _rtfeldman$elm_css$Css$prop1('text-bottom');
	var _rtfeldman$elm_css$Css$textTop = _rtfeldman$elm_css$Css$prop1('text-top');
	var _rtfeldman$elm_css$Css$super = _rtfeldman$elm_css$Css$prop1('super');
	var _rtfeldman$elm_css$Css$sub = _rtfeldman$elm_css$Css$prop1('sub');
	var _rtfeldman$elm_css$Css$baseline = _rtfeldman$elm_css$Css$prop1('baseline');
	var _rtfeldman$elm_css$Css$middle = _rtfeldman$elm_css$Css$prop1('middle');
	var _rtfeldman$elm_css$Css$stretch = _rtfeldman$elm_css$Css$prop1('stretch');
	var _rtfeldman$elm_css$Css$flexEnd = _rtfeldman$elm_css$Css$prop1('flex-end');
	var _rtfeldman$elm_css$Css$flexStart = _rtfeldman$elm_css$Css$prop1('flex-start');
	var _rtfeldman$elm_css$Css$order = _rtfeldman$elm_css$Css$prop1('order');
	var _rtfeldman$elm_css$Css$flexFlow2 = _rtfeldman$elm_css$Css$prop2('flex-flow');
	var _rtfeldman$elm_css$Css$flexFlow1 = _rtfeldman$elm_css$Css$prop1('flex-flow');
	var _rtfeldman$elm_css$Css$flexDirection = _rtfeldman$elm_css$Css$prop1('flex-direction');
	var _rtfeldman$elm_css$Css$flexWrap = _rtfeldman$elm_css$Css$prop1('flex-wrap');
	var _rtfeldman$elm_css$Css$flexShrink = _rtfeldman$elm_css$Css$prop1('flex-shrink');
	var _rtfeldman$elm_css$Css$flexGrow = _rtfeldman$elm_css$Css$prop1('flex-grow');
	var _rtfeldman$elm_css$Css$flexBasis = _rtfeldman$elm_css$Css$prop1('flex-basis');
	var _rtfeldman$elm_css$Css$flex3 = _rtfeldman$elm_css$Css$prop3('flex');
	var _rtfeldman$elm_css$Css$flex2 = _rtfeldman$elm_css$Css$prop2('flex');
	var _rtfeldman$elm_css$Css$flex = _rtfeldman$elm_css$Css$prop1('flex');
	var _rtfeldman$elm_css$Css$transformStyle = _rtfeldman$elm_css$Css$prop1('transform-style');
	var _rtfeldman$elm_css$Css$boxSizing = _rtfeldman$elm_css$Css$prop1('box-sizing');
	var _rtfeldman$elm_css$Css$transformBox = _rtfeldman$elm_css$Css$prop1('transform-box');
	var _rtfeldman$elm_css$Css$transforms = function (_p16) {
		return A2(
			_rtfeldman$elm_css$Css$prop1,
			'transform',
			_rtfeldman$elm_css$Css$valuesOrNone(_p16));
	};
	var _rtfeldman$elm_css$Css$transform = function (only) {
		return _rtfeldman$elm_css$Css$transforms(
			_elm_lang$core$Native_List.fromArray(
				[only]));
	};
	var _rtfeldman$elm_css$Css$true = _rtfeldman$elm_css$Css$prop1('true');
	var _rtfeldman$elm_css$Css$matchParent = _rtfeldman$elm_css$Css$prop1('match-parent');
	var _rtfeldman$elm_css$Css$end = _rtfeldman$elm_css$Css$prop1('end');
	var _rtfeldman$elm_css$Css$start = _rtfeldman$elm_css$Css$prop1('start');
	var _rtfeldman$elm_css$Css$justifyAll = _rtfeldman$elm_css$Css$prop1('justify-all');
	var _rtfeldman$elm_css$Css$textJustify = _rtfeldman$elm_css$Css$prop1('text-justify');
	var _rtfeldman$elm_css$Css$center = _rtfeldman$elm_css$Css$prop1('center');
	var _rtfeldman$elm_css$Css$important = _rtfeldman$elm_css$Css_Preprocess$mapLastProperty(
		function (property) {
			return _elm_lang$core$Native_Utils.update(
				property,
				{important: true});
		});
	var _rtfeldman$elm_css$Css$all = _rtfeldman$elm_css$Css$prop1('all');
	var _rtfeldman$elm_css$Css$combineLengths = F3(
		function (operation, first, second) {
			var value = A2(
				_elm_lang$core$String$join,
				' ',
				A2(
					_elm_lang$core$List$filter,
					function (_p17) {
						return _elm_lang$core$Basics$not(
							_elm_lang$core$String$isEmpty(_p17));
					},
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$core$Basics$toString(
							A2(operation, first.numericValue, second.numericValue)),
							first.unitLabel
						])));
			return _elm_lang$core$Native_Utils.update(
				first,
				{value: value});
		});
	var _rtfeldman$elm_css$Css_ops = _rtfeldman$elm_css$Css_ops || {};
	_rtfeldman$elm_css$Css_ops['|*|'] = _rtfeldman$elm_css$Css$combineLengths(
		F2(
			function (x, y) {
				return x * y;
			}));
	var _rtfeldman$elm_css$Css_ops = _rtfeldman$elm_css$Css_ops || {};
	_rtfeldman$elm_css$Css_ops['|/|'] = _rtfeldman$elm_css$Css$combineLengths(
		F2(
			function (x, y) {
				return x / y;
			}));
	var _rtfeldman$elm_css$Css_ops = _rtfeldman$elm_css$Css_ops || {};
	_rtfeldman$elm_css$Css_ops['|-|'] = _rtfeldman$elm_css$Css$combineLengths(
		F2(
			function (x, y) {
				return x - y;
			}));
	var _rtfeldman$elm_css$Css_ops = _rtfeldman$elm_css$Css_ops || {};
	_rtfeldman$elm_css$Css_ops['|+|'] = _rtfeldman$elm_css$Css$combineLengths(
		F2(
			function (x, y) {
				return x + y;
			}));
	var _rtfeldman$elm_css$Css$getOverloadedProperty = F3(
		function (functionName, desiredKey, mixin) {
			getOverloadedProperty:
			while (true) {
				var _p18 = mixin;
				switch (_p18.ctor) {
					case 'AppendProperty':
						return A2(_rtfeldman$elm_css$Css$property, desiredKey, _p18._0.key);
					case 'ExtendSelector':
						return A3(
							_rtfeldman$elm_css$Css$propertyWithWarnings,
							_elm_lang$core$Native_List.fromArray(
								[
									A2(
									_elm_lang$core$Basics_ops['++'],
									'Cannot apply ',
									A2(
										_elm_lang$core$Basics_ops['++'],
										functionName,
										A2(
											_elm_lang$core$Basics_ops['++'],
											' with inapplicable mixin for selector ',
											_elm_lang$core$Basics$toString(_p18._0))))
								]),
							desiredKey,
							'');
					case 'NestSnippet':
						return A3(
							_rtfeldman$elm_css$Css$propertyWithWarnings,
							_elm_lang$core$Native_List.fromArray(
								[
									A2(
									_elm_lang$core$Basics_ops['++'],
									'Cannot apply ',
									A2(
										_elm_lang$core$Basics_ops['++'],
										functionName,
										A2(
											_elm_lang$core$Basics_ops['++'],
											' with inapplicable mixin for combinator ',
											_elm_lang$core$Basics$toString(_p18._0))))
								]),
							desiredKey,
							'');
					case 'WithPseudoElement':
						return A3(
							_rtfeldman$elm_css$Css$propertyWithWarnings,
							_elm_lang$core$Native_List.fromArray(
								[
									A2(
									_elm_lang$core$Basics_ops['++'],
									'Cannot apply ',
									A2(
										_elm_lang$core$Basics_ops['++'],
										functionName,
										A2(
											_elm_lang$core$Basics_ops['++'],
											' with inapplicable mixin for pseudo-element setter ',
											_elm_lang$core$Basics$toString(_p18._0))))
								]),
							desiredKey,
							'');
					case 'WithMedia':
						return A3(
							_rtfeldman$elm_css$Css$propertyWithWarnings,
							_elm_lang$core$Native_List.fromArray(
								[
									A2(
									_elm_lang$core$Basics_ops['++'],
									'Cannot apply ',
									A2(
										_elm_lang$core$Basics_ops['++'],
										functionName,
										A2(
											_elm_lang$core$Basics_ops['++'],
											' with inapplicable mixin for media query ',
											_elm_lang$core$Basics$toString(_p18._0))))
								]),
							desiredKey,
							'');
					default:
						if (_p18._0.ctor === '[]') {
							return A3(
								_rtfeldman$elm_css$Css$propertyWithWarnings,
								_elm_lang$core$Native_List.fromArray(
									[
										A2(
										_elm_lang$core$Basics_ops['++'],
										'Cannot apply ',
										A2(_elm_lang$core$Basics_ops['++'], functionName, ' with empty mixin. '))
									]),
								desiredKey,
								'');
						} else {
							if (_p18._0._1.ctor === '[]') {
								var _v11 = functionName,
									_v12 = desiredKey,
									_v13 = _p18._0._0;
								functionName = _v11;
								desiredKey = _v12;
								mixin = _v13;
								continue getOverloadedProperty;
							} else {
								var _v14 = functionName,
									_v15 = desiredKey,
									_v16 = _rtfeldman$elm_css$Css_Preprocess$ApplyMixins(_p18._0._1);
								functionName = _v14;
								desiredKey = _v15;
								mixin = _v16;
								continue getOverloadedProperty;
							}
						}
				}
			}
		});
	var _rtfeldman$elm_css$Css$cssFunction = F2(
		function (funcName, args) {
			return A2(
				_elm_lang$core$Basics_ops['++'],
				funcName,
				A2(
					_elm_lang$core$Basics_ops['++'],
					'(',
					A2(
						_elm_lang$core$Basics_ops['++'],
						A2(_elm_lang$core$String$join, ', ', args),
						')')));
		});
	var _rtfeldman$elm_css$Css$tv = _rtfeldman$elm_css$Css_Structure$MediaQuery('tv');
	var _rtfeldman$elm_css$Css$projection = _rtfeldman$elm_css$Css_Structure$MediaQuery('projection');
	var _rtfeldman$elm_css$Css$print = _rtfeldman$elm_css$Css_Structure$MediaQuery('print');
	var _rtfeldman$elm_css$Css$screen = _rtfeldman$elm_css$Css_Structure$MediaQuery('screen');
	var _rtfeldman$elm_css$Css$NumberedWeight = F2(
		function (a, b) {
			return {value: a, fontWeight: b};
		});
	var _rtfeldman$elm_css$Css$ExplicitLength = function (a) {
		return function (b) {
			return function (c) {
				return function (d) {
					return function (e) {
						return function (f) {
							return function (g) {
								return function (h) {
									return function (i) {
										return function (j) {
											return function (k) {
												return function (l) {
													return function (m) {
														return function (n) {
															return {value: a, numericValue: b, units: c, unitLabel: d, length: e, lengthOrAuto: f, lengthOrNumber: g, lengthOrNone: h, lengthOrMinMaxDimension: i, lengthOrNoneOrMinMaxDimension: j, textIndent: k, flexBasis: l, lengthOrNumberOrAutoOrNoneOrContent: m, fontSize: n};
														};
													};
												};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
	var _rtfeldman$elm_css$Css$NonMixable = {};
	var _rtfeldman$elm_css$Css$BasicProperty = function (a) {
		return function (b) {
			return function (c) {
				return function (d) {
					return function (e) {
						return function (f) {
							return function (g) {
								return function (h) {
									return function (i) {
										return function (j) {
											return function (k) {
												return function (l) {
													return function (m) {
														return function (n) {
															return function (o) {
																return function (p) {
																	return function (q) {
																		return function (r) {
																			return function (s) {
																				return function (t) {
																					return function (u) {
																						return function (v) {
																							return function (w) {
																								return function (x) {
																									return function (y) {
																										return function (z) {
																											return function (_1) {
																												return function (_2) {
																													return function (_3) {
																														return function (_4) {
																															return function (_5) {
																																return {value: a, all: b, alignItems: c, boxSizing: d, display: e, flexBasis: f, flexWrap: g, flexDirection: h, flexDirectionOrWrap: i, none: j, number: k, overflow: l, textDecorationLine: m, textRendering: n, textIndent: o, textDecorationStyle: p, length: q, lengthOrAuto: r, lengthOrNone: s, lengthOrNumber: t, lengthOrMinMaxDimension: u, lengthOrNoneOrMinMaxDimension: v, lengthOrNumberOrAutoOrNoneOrContent: w, fontFamily: x, fontSize: y, fontStyle: z, fontWeight: _1, fontVariant: _2, units: _3, numericValue: _4, unitLabel: _5};
																															};
																														};
																													};
																												};
																											};
																										};
																									};
																								};
																							};
																						};
																					};
																				};
																			};
																		};
																	};
																};
															};
														};
													};
												};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
	var _rtfeldman$elm_css$Css$Compatible = {ctor: 'Compatible'};
	var _rtfeldman$elm_css$Css$transparent = {
		value: 'transparent',
		color: _rtfeldman$elm_css$Css$Compatible,
		warnings: _elm_lang$core$Native_List.fromArray(
			[])
	};
	var _rtfeldman$elm_css$Css$currentColor = {
		value: 'currentColor',
		color: _rtfeldman$elm_css$Css$Compatible,
		warnings: _elm_lang$core$Native_List.fromArray(
			[])
	};
	var _rtfeldman$elm_css$Css$visible = {value: 'visible', overflow: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$scroll = {value: 'scroll', overflow: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$hidden = {value: 'hidden', overflow: _rtfeldman$elm_css$Css$Compatible, borderStyle: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$rgb = F3(
		function (red, green, blue) {
			var warnings = ((_elm_lang$core$Native_Utils.cmp(red, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(red, 255) > 0) || ((_elm_lang$core$Native_Utils.cmp(green, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(green, 255) > 0) || ((_elm_lang$core$Native_Utils.cmp(blue, 0) < 0) || (_elm_lang$core$Native_Utils.cmp(blue, 255) > 0)))))) ? _elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$core$Basics_ops['++'],
					'RGB color values must be between 0 and 255. rgb(',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(red),
						A2(
							_elm_lang$core$Basics_ops['++'],
							', ',
							A2(
								_elm_lang$core$Basics_ops['++'],
								_elm_lang$core$Basics$toString(green),
								A2(
									_elm_lang$core$Basics_ops['++'],
									', ',
									A2(
										_elm_lang$core$Basics_ops['++'],
										_elm_lang$core$Basics$toString(blue),
										') is not valid.'))))))
				]) : _elm_lang$core$Native_List.fromArray(
				[]);
			return {
				value: A2(
					_rtfeldman$elm_css$Css$cssFunction,
					'rgb',
					A2(
						_elm_lang$core$List$map,
						_rtfeldman$elm_css$Css$numberToString,
						_elm_lang$core$Native_List.fromArray(
							[red, green, blue]))),
				color: _rtfeldman$elm_css$Css$Compatible,
				warnings: warnings,
				red: red,
				green: green,
				blue: blue,
				alpha: 1
			};
		});
	var _rtfeldman$elm_css$Css$rgba = F4(
		function (red, green, blue, alpha) {
			var warnings = ((_elm_lang$core$Native_Utils.cmp(red, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(red, 255) > 0) || ((_elm_lang$core$Native_Utils.cmp(green, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(green, 255) > 0) || ((_elm_lang$core$Native_Utils.cmp(blue, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(blue, 255) > 0) || ((_elm_lang$core$Native_Utils.cmp(alpha, 0) < 0) || (_elm_lang$core$Native_Utils.cmp(alpha, 1) > 0)))))))) ? _elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$core$Basics_ops['++'],
					'RGB color values must be between 0 and 255, and the alpha in RGBA must be between 0 and 1. rgba(',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(red),
						A2(
							_elm_lang$core$Basics_ops['++'],
							', ',
							A2(
								_elm_lang$core$Basics_ops['++'],
								_elm_lang$core$Basics$toString(green),
								A2(
									_elm_lang$core$Basics_ops['++'],
									', ',
									A2(
										_elm_lang$core$Basics_ops['++'],
										_elm_lang$core$Basics$toString(blue),
										A2(
											_elm_lang$core$Basics_ops['++'],
											', ',
											A2(
												_elm_lang$core$Basics_ops['++'],
												_elm_lang$core$Basics$toString(alpha),
												') is not valid.'))))))))
				]) : _elm_lang$core$Native_List.fromArray(
				[]);
			return {
				value: A2(
					_rtfeldman$elm_css$Css$cssFunction,
					'rgba',
					A2(
						_elm_lang$core$List$map,
						_rtfeldman$elm_css$Css$numberToString,
						_elm_lang$core$Native_List.fromArray(
							[red, green, blue, alpha]))),
				color: _rtfeldman$elm_css$Css$Compatible,
				warnings: warnings,
				red: red,
				green: green,
				blue: blue,
				alpha: 1
			};
		});
	var _rtfeldman$elm_css$Css$hex = function (str) {
		var value = _elm_lang$core$Native_Utils.eq(
			A3(_elm_lang$core$String$slice, 0, 1, str),
			'#') ? str : A2(_elm_lang$core$Basics_ops['++'], '#', str);
		var warnings = A2(
			_elm_lang$core$Regex$contains,
			_elm_lang$core$Regex$regex('^#([a-fA-F0-9]{8}|[a-fA-F0-9]{6}|[a-fA-F0-9]{4}|[a-fA-F0-9]{3})$'),
			value) ? _elm_lang$core$Native_List.fromArray(
			[]) : _elm_lang$core$Native_List.fromArray(
			[
				A2(
				_elm_lang$core$String$join,
				' ',
				_elm_lang$core$Native_List.fromArray(
					['The syntax of a hex-color is a token whose value consists of 3, 4, 6, or 8 hexadecimal digits.', value, 'is not valid.', 'Please see: https://drafts.csswg.org/css-color/#hex-notation']))
			]);
		return {value: value, color: _rtfeldman$elm_css$Css$Compatible, red: 0, green: 0, blue: 0, alpha: 1, warnings: warnings};
	};
	var _rtfeldman$elm_css$Css$hslaToRgba = F6(
		function (value, warnings, hue, saturation, lightness, alpha) {
			var blue = 0;
			var green = 0;
			var red = 0;
			return {value: value, color: _rtfeldman$elm_css$Css$Compatible, red: red, green: green, blue: blue, alpha: alpha, warnings: warnings};
		});
	var _rtfeldman$elm_css$Css$hsl = F3(
		function (hue, saturation, lightness) {
			var valuesList = _elm_lang$core$Native_List.fromArray(
				[
					_rtfeldman$elm_css$Css$numberToString(hue),
					_rtfeldman$elm_css$Css$numericalPercentageToString(saturation),
					_rtfeldman$elm_css$Css$numericalPercentageToString(lightness)
				]);
			var value = A2(_rtfeldman$elm_css$Css$cssFunction, 'hsl', valuesList);
			var warnings = ((_elm_lang$core$Native_Utils.cmp(hue, 360) > 0) || ((_elm_lang$core$Native_Utils.cmp(hue, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(saturation, 1) > 0) || ((_elm_lang$core$Native_Utils.cmp(saturation, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(lightness, 1) > 0) || (_elm_lang$core$Native_Utils.cmp(lightness, 0) < 0)))))) ? _elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$core$Basics_ops['++'],
					'HSL color values must have an H value between 0 and 360 (as in degrees) and S and L values between 0 and 1. ',
					A2(_elm_lang$core$Basics_ops['++'], value, ' is not valid.'))
				]) : _elm_lang$core$Native_List.fromArray(
				[]);
			return A6(_rtfeldman$elm_css$Css$hslaToRgba, value, warnings, hue, saturation, lightness, 1);
		});
	var _rtfeldman$elm_css$Css$hsla = F4(
		function (hue, saturation, lightness, alpha) {
			var valuesList = _elm_lang$core$Native_List.fromArray(
				[
					_rtfeldman$elm_css$Css$numberToString(hue),
					_rtfeldman$elm_css$Css$numericalPercentageToString(saturation),
					_rtfeldman$elm_css$Css$numericalPercentageToString(lightness),
					_rtfeldman$elm_css$Css$numberToString(alpha)
				]);
			var value = A2(_rtfeldman$elm_css$Css$cssFunction, 'hsla', valuesList);
			var warnings = ((_elm_lang$core$Native_Utils.cmp(hue, 360) > 0) || ((_elm_lang$core$Native_Utils.cmp(hue, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(saturation, 1) > 0) || ((_elm_lang$core$Native_Utils.cmp(saturation, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(lightness, 1) > 0) || ((_elm_lang$core$Native_Utils.cmp(lightness, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(alpha, 1) > 0) || (_elm_lang$core$Native_Utils.cmp(alpha, 0) < 0)))))))) ? _elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$core$Basics_ops['++'],
					'HSLA color values must have an H value between 0 and 360 (as in degrees) and S, L, and A values between 0 and 1. ',
					A2(_elm_lang$core$Basics_ops['++'], value, ' is not valid.'))
				]) : _elm_lang$core$Native_List.fromArray(
				[]);
			return A6(_rtfeldman$elm_css$Css$hslaToRgba, value, warnings, hue, saturation, lightness, alpha);
		});
	var _rtfeldman$elm_css$Css$optimizeSpeed = {value: 'optimizeSpeed', textRendering: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$optimizeLegibility = {value: 'optimizeLegibility', textRendering: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$geometricPrecision = {value: 'geometricPrecision', textRendering: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$hanging = {value: 'hanging', textIndent: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$eachLine = {value: 'each-line', textIndent: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$capitalize = {value: 'capitalize', textTransform: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$uppercase = {value: 'uppercase', textTransform: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$lowercase = {value: 'lowercase', textTransform: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$fullWidth = {value: 'full-width', textTransform: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$ellipsis = {value: 'ellipsis', textOverflow: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$clip = {value: 'clip', textOverflow: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$wavy = {value: 'wavy', textDecorationStyle: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$dotted = {value: 'dotted', borderStyle: _rtfeldman$elm_css$Css$Compatible, textDecorationStyle: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$dashed = {value: 'dashed', borderStyle: _rtfeldman$elm_css$Css$Compatible, textDecorationStyle: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$solid = {value: 'solid', borderStyle: _rtfeldman$elm_css$Css$Compatible, textDecorationStyle: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$double = {value: 'double', borderStyle: _rtfeldman$elm_css$Css$Compatible, textDecorationStyle: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$groove = {value: 'groove', borderStyle: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$ridge = {value: 'ridge', borderStyle: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$inset = {value: 'inset', borderStyle: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$outset = {value: 'outset', borderStyle: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$lengthConverter = F3(
		function (units, unitLabel, num) {
			return {
				value: A2(
					_elm_lang$core$Basics_ops['++'],
					_rtfeldman$elm_css$Css$numberToString(num),
					unitLabel),
				numericValue: num,
				units: units,
				unitLabel: unitLabel,
				length: _rtfeldman$elm_css$Css$Compatible,
				lengthOrAuto: _rtfeldman$elm_css$Css$Compatible,
				lengthOrNumber: _rtfeldman$elm_css$Css$Compatible,
				lengthOrNone: _rtfeldman$elm_css$Css$Compatible,
				lengthOrMinMaxDimension: _rtfeldman$elm_css$Css$Compatible,
				lengthOrNoneOrMinMaxDimension: _rtfeldman$elm_css$Css$Compatible,
				textIndent: _rtfeldman$elm_css$Css$Compatible,
				flexBasis: _rtfeldman$elm_css$Css$Compatible,
				lengthOrNumberOrAutoOrNoneOrContent: _rtfeldman$elm_css$Css$Compatible,
				fontSize: _rtfeldman$elm_css$Css$Compatible
			};
		});
	var _rtfeldman$elm_css$Css$angleConverter = F2(
		function (suffix, num) {
			return {
				value: A2(
					_elm_lang$core$Basics_ops['++'],
					_rtfeldman$elm_css$Css$numberToString(num),
					suffix),
				angle: _rtfeldman$elm_css$Css$Compatible
			};
		});
	var _rtfeldman$elm_css$Css$deg = _rtfeldman$elm_css$Css$angleConverter('deg');
	var _rtfeldman$elm_css$Css$grad = _rtfeldman$elm_css$Css$angleConverter('grad');
	var _rtfeldman$elm_css$Css$rad = _rtfeldman$elm_css$Css$angleConverter('rad');
	var _rtfeldman$elm_css$Css$turn = _rtfeldman$elm_css$Css$angleConverter('turn');
	var _rtfeldman$elm_css$Css$matrix = F6(
		function (a, b, c, d, tx, ty) {
			return {
				value: A2(
					_rtfeldman$elm_css$Css$cssFunction,
					'matrix',
					A2(
						_elm_lang$core$List$map,
						_rtfeldman$elm_css$Css$numberToString,
						_elm_lang$core$Native_List.fromArray(
							[a, b, c, d, tx, ty]))),
				transform: _rtfeldman$elm_css$Css$Compatible
			};
		});
	var _rtfeldman$elm_css$Css$matrix3d = function (a1) {
		return function (a2) {
			return function (a3) {
				return function (a4) {
					return function (b1) {
						return function (b2) {
							return function (b3) {
								return function (b4) {
									return function (c1) {
										return function (c2) {
											return function (c3) {
												return function (c4) {
													return function (d1) {
														return function (d2) {
															return function (d3) {
																return function (d4) {
																	return {
																		value: A2(
																			_rtfeldman$elm_css$Css$cssFunction,
																			'matrix3d',
																			A2(
																				_elm_lang$core$List$map,
																				_rtfeldman$elm_css$Css$numberToString,
																				_elm_lang$core$Native_List.fromArray(
																					[a1, a2, a3, a4, b1, b2, b3, b4, c1, c2, c3, c4, d1, d2, d3, d4]))),
																		transform: _rtfeldman$elm_css$Css$Compatible
																	};
																};
															};
														};
													};
												};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
	var _rtfeldman$elm_css$Css$perspective = function (l) {
		return {
			value: A2(
				_rtfeldman$elm_css$Css$cssFunction,
				'perspective',
				_elm_lang$core$Native_List.fromArray(
					[
						_rtfeldman$elm_css$Css$numberToString(l)
					])),
			transform: _rtfeldman$elm_css$Css$Compatible
		};
	};
	var _rtfeldman$elm_css$Css$rotate = function (_p19) {
		var _p20 = _p19;
		return {
			value: A2(
				_rtfeldman$elm_css$Css$cssFunction,
				'rotate',
				_elm_lang$core$Native_List.fromArray(
					[_p20.value])),
			transform: _rtfeldman$elm_css$Css$Compatible
		};
	};
	var _rtfeldman$elm_css$Css$rotateX = function (_p21) {
		var _p22 = _p21;
		return {
			value: A2(
				_rtfeldman$elm_css$Css$cssFunction,
				'rotateX',
				_elm_lang$core$Native_List.fromArray(
					[_p22.value])),
			transform: _rtfeldman$elm_css$Css$Compatible
		};
	};
	var _rtfeldman$elm_css$Css$rotateY = function (_p23) {
		var _p24 = _p23;
		return {
			value: A2(
				_rtfeldman$elm_css$Css$cssFunction,
				'rotateY',
				_elm_lang$core$Native_List.fromArray(
					[_p24.value])),
			transform: _rtfeldman$elm_css$Css$Compatible
		};
	};
	var _rtfeldman$elm_css$Css$rotateZ = function (_p25) {
		var _p26 = _p25;
		return {
			value: A2(
				_rtfeldman$elm_css$Css$cssFunction,
				'rotateZ',
				_elm_lang$core$Native_List.fromArray(
					[_p26.value])),
			transform: _rtfeldman$elm_css$Css$Compatible
		};
	};
	var _rtfeldman$elm_css$Css$rotate3d = F4(
		function (x, y, z, _p27) {
			var _p28 = _p27;
			var coordsAsStrings = A2(
				_elm_lang$core$List$map,
				_rtfeldman$elm_css$Css$numberToString,
				_elm_lang$core$Native_List.fromArray(
					[x, y, z]));
			return {
				value: A2(
					_rtfeldman$elm_css$Css$cssFunction,
					'rotate3d',
					A2(
						_elm_lang$core$Basics_ops['++'],
						coordsAsStrings,
						_elm_lang$core$Native_List.fromArray(
							[_p28.value]))),
				transform: _rtfeldman$elm_css$Css$Compatible
			};
		});
	var _rtfeldman$elm_css$Css$scale = function (x) {
		return {
			value: A2(
				_rtfeldman$elm_css$Css$cssFunction,
				'scale',
				_elm_lang$core$Native_List.fromArray(
					[
						_rtfeldman$elm_css$Css$numberToString(x)
					])),
			transform: _rtfeldman$elm_css$Css$Compatible
		};
	};
	var _rtfeldman$elm_css$Css$scale2 = F2(
		function (x, y) {
			return {
				value: A2(
					_rtfeldman$elm_css$Css$cssFunction,
					'scale',
					A2(
						_elm_lang$core$List$map,
						_rtfeldman$elm_css$Css$numberToString,
						_elm_lang$core$Native_List.fromArray(
							[x, y]))),
				transform: _rtfeldman$elm_css$Css$Compatible
			};
		});
	var _rtfeldman$elm_css$Css$scaleX = function (x) {
		return {
			value: A2(
				_rtfeldman$elm_css$Css$cssFunction,
				'scaleX',
				_elm_lang$core$Native_List.fromArray(
					[
						_rtfeldman$elm_css$Css$numberToString(x)
					])),
			transform: _rtfeldman$elm_css$Css$Compatible
		};
	};
	var _rtfeldman$elm_css$Css$scaleY = function (y) {
		return {
			value: A2(
				_rtfeldman$elm_css$Css$cssFunction,
				'scaleY',
				_elm_lang$core$Native_List.fromArray(
					[
						_rtfeldman$elm_css$Css$numberToString(y)
					])),
			transform: _rtfeldman$elm_css$Css$Compatible
		};
	};
	var _rtfeldman$elm_css$Css$scale3d = F3(
		function (x, y, z) {
			return {
				value: A2(
					_rtfeldman$elm_css$Css$cssFunction,
					'scale3d',
					A2(
						_elm_lang$core$List$map,
						_rtfeldman$elm_css$Css$numberToString,
						_elm_lang$core$Native_List.fromArray(
							[x, y, z]))),
				transform: _rtfeldman$elm_css$Css$Compatible
			};
		});
	var _rtfeldman$elm_css$Css$skew = function (_p29) {
		var _p30 = _p29;
		return {
			value: A2(
				_rtfeldman$elm_css$Css$cssFunction,
				'skew',
				_elm_lang$core$Native_List.fromArray(
					[_p30.value])),
			transform: _rtfeldman$elm_css$Css$Compatible
		};
	};
	var _rtfeldman$elm_css$Css$skew2 = F2(
		function (ax, ay) {
			return {
				value: A2(
					_rtfeldman$elm_css$Css$cssFunction,
					'skew',
					_elm_lang$core$Native_List.fromArray(
						[ax.value, ay.value])),
				transform: _rtfeldman$elm_css$Css$Compatible
			};
		});
	var _rtfeldman$elm_css$Css$skewX = function (_p31) {
		var _p32 = _p31;
		return {
			value: A2(
				_rtfeldman$elm_css$Css$cssFunction,
				'skewX',
				_elm_lang$core$Native_List.fromArray(
					[_p32.value])),
			transform: _rtfeldman$elm_css$Css$Compatible
		};
	};
	var _rtfeldman$elm_css$Css$skewY = function (_p33) {
		var _p34 = _p33;
		return {
			value: A2(
				_rtfeldman$elm_css$Css$cssFunction,
				'skewY',
				_elm_lang$core$Native_List.fromArray(
					[_p34.value])),
			transform: _rtfeldman$elm_css$Css$Compatible
		};
	};
	var _rtfeldman$elm_css$Css$translate = function (_p35) {
		var _p36 = _p35;
		return {
			value: A2(
				_rtfeldman$elm_css$Css$cssFunction,
				'translate',
				_elm_lang$core$Native_List.fromArray(
					[_p36.value])),
			transform: _rtfeldman$elm_css$Css$Compatible
		};
	};
	var _rtfeldman$elm_css$Css$translate2 = F2(
		function (tx, ty) {
			return {
				value: A2(
					_rtfeldman$elm_css$Css$cssFunction,
					'translate',
					_elm_lang$core$Native_List.fromArray(
						[tx.value, ty.value])),
				transform: _rtfeldman$elm_css$Css$Compatible
			};
		});
	var _rtfeldman$elm_css$Css$translateX = function (_p37) {
		var _p38 = _p37;
		return {
			value: A2(
				_rtfeldman$elm_css$Css$cssFunction,
				'translateX',
				_elm_lang$core$Native_List.fromArray(
					[_p38.value])),
			transform: _rtfeldman$elm_css$Css$Compatible
		};
	};
	var _rtfeldman$elm_css$Css$translateY = function (_p39) {
		var _p40 = _p39;
		return {
			value: A2(
				_rtfeldman$elm_css$Css$cssFunction,
				'translateY',
				_elm_lang$core$Native_List.fromArray(
					[_p40.value])),
			transform: _rtfeldman$elm_css$Css$Compatible
		};
	};
	var _rtfeldman$elm_css$Css$translateZ = function (_p41) {
		var _p42 = _p41;
		return {
			value: A2(
				_rtfeldman$elm_css$Css$cssFunction,
				'translateZ',
				_elm_lang$core$Native_List.fromArray(
					[_p42.value])),
			transform: _rtfeldman$elm_css$Css$Compatible
		};
	};
	var _rtfeldman$elm_css$Css$translate3d = F3(
		function (tx, ty, tz) {
			return {
				value: A2(
					_rtfeldman$elm_css$Css$cssFunction,
					'translate3d',
					_elm_lang$core$Native_List.fromArray(
						[tx.value, ty.value, tz.value])),
				transform: _rtfeldman$elm_css$Css$Compatible
			};
		});
	var _rtfeldman$elm_css$Css$fillBox = {value: 'fill-box', transformBox: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$contentBox = {value: 'content-box', boxSizing: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$borderBox = {value: 'border-box', boxSizing: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$viewBox = {value: 'view-box', transformBox: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$preserve3d = {value: 'preserve-3d', transformStyle: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$flat = {value: 'flat', transformStyle: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$content = {value: 'content', flexBasis: _rtfeldman$elm_css$Css$Compatible, lengthOrNumberOrAutoOrNoneOrContent: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$wrap = {value: 'wrap', flexWrap: _rtfeldman$elm_css$Css$Compatible, flexDirectionOrWrap: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$wrapReverse = _elm_lang$core$Native_Utils.update(
		_rtfeldman$elm_css$Css$wrap,
		{value: 'wrap-reverse'});
	var _rtfeldman$elm_css$Css$row = {value: 'row', flexDirection: _rtfeldman$elm_css$Css$Compatible, flexDirectionOrWrap: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$rowReverse = _elm_lang$core$Native_Utils.update(
		_rtfeldman$elm_css$Css$row,
		{value: 'row-reverse'});
	var _rtfeldman$elm_css$Css$column = _elm_lang$core$Native_Utils.update(
		_rtfeldman$elm_css$Css$row,
		{value: 'column'});
	var _rtfeldman$elm_css$Css$columnReverse = _elm_lang$core$Native_Utils.update(
		_rtfeldman$elm_css$Css$row,
		{value: 'column-reverse'});
	var _rtfeldman$elm_css$Css$underline = {value: 'underline', textDecorationLine: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$overline = {value: 'overline', textDecorationLine: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$lineThrough = {value: 'line-through', textDecorationLine: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$block = {value: 'block', display: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$inlineBlock = {value: 'inline-block', display: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$inline = {value: 'inline', display: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$none = {value: 'none', none: _rtfeldman$elm_css$Css$Compatible, lengthOrNone: _rtfeldman$elm_css$Css$Compatible, lengthOrNoneOrMinMaxDimension: _rtfeldman$elm_css$Css$Compatible, lengthOrNumberOrAutoOrNoneOrContent: _rtfeldman$elm_css$Css$Compatible, textDecorationLine: _rtfeldman$elm_css$Css$Compatible, display: _rtfeldman$elm_css$Css$Compatible, transform: _rtfeldman$elm_css$Css$Compatible, borderStyle: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$auto = {value: 'auto', flexBasis: _rtfeldman$elm_css$Css$Compatible, overflow: _rtfeldman$elm_css$Css$Compatible, textRendering: _rtfeldman$elm_css$Css$Compatible, lengthOrAuto: _rtfeldman$elm_css$Css$Compatible, lengthOrNumberOrAutoOrNoneOrContent: _rtfeldman$elm_css$Css$Compatible, alignItemsOrAuto: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$noWrap = {value: 'nowrap', whiteSpace: _rtfeldman$elm_css$Css$Compatible, flexWrap: _rtfeldman$elm_css$Css$Compatible, flexDirectionOrWrap: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$fillAvailable = {value: 'fill-available', minMaxDimension: _rtfeldman$elm_css$Css$Compatible, lengthOrMinMaxDimension: _rtfeldman$elm_css$Css$Compatible, lengthOrNoneOrMinMaxDimension: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$maxContent = _elm_lang$core$Native_Utils.update(
		_rtfeldman$elm_css$Css$fillAvailable,
		{value: 'max-content'});
	var _rtfeldman$elm_css$Css$minContent = _elm_lang$core$Native_Utils.update(
		_rtfeldman$elm_css$Css$fillAvailable,
		{value: 'min-content'});
	var _rtfeldman$elm_css$Css$fitContent = _elm_lang$core$Native_Utils.update(
		_rtfeldman$elm_css$Css$fillAvailable,
		{value: 'fit-content'});
	var _rtfeldman$elm_css$Css$static = {value: 'static', position: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$fixed = {value: 'fixed', position: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$sticky = {value: 'sticky', position: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$relative = {value: 'relative', position: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$absolute = {value: 'absolute', position: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$serif = {value: 'serif', fontFamily: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$sansSerif = {value: 'sans-serif', fontFamily: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$monospace = {value: 'monospace', fontFamily: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$cursive = {value: 'cursive', fontFamily: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$fantasy = {value: 'fantasy', fontFamily: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$xxSmall = {value: 'xx-small', fontSize: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$xSmall = {value: 'x-small', fontSize: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$small = {value: 'small', fontSize: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$medium = {value: 'medium', fontSize: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$large = {value: 'large', fontSize: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$xLarge = {value: 'x-large', fontSize: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$xxLarge = {value: 'xx-large', fontSize: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$smaller = {value: 'smaller', fontSize: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$larger = {value: 'larger', fontSize: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$normal = {
		value: 'normal',
		warnings: _elm_lang$core$Native_List.fromArray(
			[]),
		fontStyle: _rtfeldman$elm_css$Css$Compatible,
		featureTagValue: _rtfeldman$elm_css$Css$Compatible
	};
	var _rtfeldman$elm_css$Css$italic = {value: 'italic', fontStyle: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$oblique = {value: 'oblique', fontStyle: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$bold = {value: 'bold', lengthOrNumberOrAutoOrNoneOrContent: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$lighter = {value: 'lighter', lengthOrNumberOrAutoOrNoneOrContent: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$bolder = {value: 'bolder', lengthOrNumberOrAutoOrNoneOrContent: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$smallCaps = {value: 'small-caps', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantCaps: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$allSmallCaps = {value: 'all-small-caps', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantCaps: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$petiteCaps = {value: 'petite-caps', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantCaps: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$allPetiteCaps = {value: 'all-petite-caps', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantCaps: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$unicase = {value: 'unicase', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantCaps: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$titlingCaps = {value: 'titling-caps', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantCaps: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$commonLigatures = {value: 'common-ligatures', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantLigatures: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$noCommonLigatures = {value: 'no-common-ligatures', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantLigatures: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$discretionaryLigatures = {value: 'discretionary-ligatures', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantLigatures: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$noDiscretionaryLigatures = {value: 'no-discretionary-ligatures', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantLigatures: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$historicalLigatures = {value: 'historical-ligatures', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantLigatures: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$noHistoricalLigatures = {value: 'no-historical-ligatures', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantLigatures: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$contextual = {value: 'context', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantLigatures: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$noContextual = {value: 'no-contextual', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantLigatures: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$liningNums = {value: 'lining-nums', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantNumeric: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$oldstyleNums = {value: 'oldstyle-nums', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantNumeric: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$proportionalNums = {value: 'proportional-nums', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantNumeric: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$tabularNums = {value: 'tabular-nums', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantNumeric: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$diagonalFractions = {value: 'diagonal-fractions', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantNumeric: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$stackedFractions = {value: 'stacked-fractions', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantNumeric: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$ordinal = {value: 'ordinal', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantNumeric: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$slashedZero = {value: 'slashed-zero', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantNumeric: _rtfeldman$elm_css$Css$Compatible};
	var _rtfeldman$elm_css$Css$featureTag2 = F2(
		function (tag, value) {
			var potentialWarnings = _elm_lang$core$Native_List.fromArray(
				[
					{
					ctor: '_Tuple2',
					_0: !_elm_lang$core$Native_Utils.eq(
						_elm_lang$core$String$length(tag),
						4),
					_1: A2(
						_elm_lang$core$Basics_ops['++'],
						'Feature tags must be exactly 4 characters long. ',
						A2(_elm_lang$core$Basics_ops['++'], tag, ' is invalid.'))
				},
					{
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.cmp(value, 0) < 0,
					_1: A2(
						_elm_lang$core$Basics_ops['++'],
						'Feature values cannot be negative. ',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(value),
							' is invalid.'))
				}
				]);
			var warnings = A2(
				_elm_lang$core$List$map,
				_elm_lang$core$Basics$snd,
				A2(_elm_lang$core$List$filter, _elm_lang$core$Basics$fst, potentialWarnings));
			return {
				value: A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(tag),
					A2(
						_elm_lang$core$Basics_ops['++'],
						' ',
						_elm_lang$core$Basics$toString(value))),
				featureTagValue: _rtfeldman$elm_css$Css$Compatible,
				warnings: warnings
			};
		});
	var _rtfeldman$elm_css$Css$featureTag = function (tag) {
		return A2(_rtfeldman$elm_css$Css$featureTag2, tag, 1);
	};
	var _rtfeldman$elm_css$Css$PseudoClass = F2(
		function (a, b) {
			return {ctor: 'PseudoClass', _0: a, _1: b};
		});
	var _rtfeldman$elm_css$Css$PseudoElement = F2(
		function (a, b) {
			return {ctor: 'PseudoElement', _0: a, _1: b};
		});
	var _rtfeldman$elm_css$Css$PercentageUnits = {ctor: 'PercentageUnits'};
	var _rtfeldman$elm_css$Css$pct = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$PercentageUnits, '%');
	var _rtfeldman$elm_css$Css$EmUnits = {ctor: 'EmUnits'};
	var _rtfeldman$elm_css$Css$em = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$EmUnits, 'em');
	var _rtfeldman$elm_css$Css$ExUnits = {ctor: 'ExUnits'};
	var _rtfeldman$elm_css$Css$ex = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$ExUnits, 'ex');
	var _rtfeldman$elm_css$Css$ChUnits = {ctor: 'ChUnits'};
	var _rtfeldman$elm_css$Css$ch = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$ChUnits, 'ch');
	var _rtfeldman$elm_css$Css$RemUnits = {ctor: 'RemUnits'};
	var _rtfeldman$elm_css$Css$rem = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$RemUnits, 'rem');
	var _rtfeldman$elm_css$Css$VhUnits = {ctor: 'VhUnits'};
	var _rtfeldman$elm_css$Css$vh = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$VhUnits, 'vh');
	var _rtfeldman$elm_css$Css$VwUnits = {ctor: 'VwUnits'};
	var _rtfeldman$elm_css$Css$vw = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$VwUnits, 'vw');
	var _rtfeldman$elm_css$Css$VMinUnits = {ctor: 'VMinUnits'};
	var _rtfeldman$elm_css$Css$vmin = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$VMinUnits, 'vmin');
	var _rtfeldman$elm_css$Css$VMaxUnits = {ctor: 'VMaxUnits'};
	var _rtfeldman$elm_css$Css$vmax = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$VMaxUnits, 'vmax');
	var _rtfeldman$elm_css$Css$PxUnits = {ctor: 'PxUnits'};
	var _rtfeldman$elm_css$Css$px = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$PxUnits, 'px');
	var _rtfeldman$elm_css$Css$MMUnits = {ctor: 'MMUnits'};
	var _rtfeldman$elm_css$Css$mm = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$MMUnits, 'mm');
	var _rtfeldman$elm_css$Css$CMUnits = {ctor: 'CMUnits'};
	var _rtfeldman$elm_css$Css$cm = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$CMUnits, 'cm');
	var _rtfeldman$elm_css$Css$InchUnits = {ctor: 'InchUnits'};
	var _rtfeldman$elm_css$Css$inches = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$InchUnits, 'in');
	var _rtfeldman$elm_css$Css$PtUnits = {ctor: 'PtUnits'};
	var _rtfeldman$elm_css$Css$pt = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$PtUnits, 'pt');
	var _rtfeldman$elm_css$Css$PcUnits = {ctor: 'PcUnits'};
	var _rtfeldman$elm_css$Css$pc = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$PcUnits, 'pc');
	var _rtfeldman$elm_css$Css$UnitlessInteger = {ctor: 'UnitlessInteger'};
	var _rtfeldman$elm_css$Css$zero = {value: '0', length: _rtfeldman$elm_css$Css$Compatible, lengthOrNumber: _rtfeldman$elm_css$Css$Compatible, lengthOrNone: _rtfeldman$elm_css$Css$Compatible, lengthOrAuto: _rtfeldman$elm_css$Css$Compatible, lengthOrMinMaxDimension: _rtfeldman$elm_css$Css$Compatible, lengthOrNoneOrMinMaxDimension: _rtfeldman$elm_css$Css$Compatible, number: _rtfeldman$elm_css$Css$Compatible, units: _rtfeldman$elm_css$Css$UnitlessInteger, unitLabel: '', numericValue: 0};
	var _rtfeldman$elm_css$Css$int = function (val) {
		return {
			value: _rtfeldman$elm_css$Css$numberToString(val),
			lengthOrNumber: _rtfeldman$elm_css$Css$Compatible,
			number: _rtfeldman$elm_css$Css$Compatible,
			lengthOrNumberOrAutoOrNoneOrContent: _rtfeldman$elm_css$Css$Compatible,
			numericValue: _elm_lang$core$Basics$toFloat(val),
			unitLabel: '',
			units: _rtfeldman$elm_css$Css$UnitlessInteger
		};
	};
	var _rtfeldman$elm_css$Css$UnitlessFloat = {ctor: 'UnitlessFloat'};
	var _rtfeldman$elm_css$Css$float = function (val) {
		return {
			value: _rtfeldman$elm_css$Css$numberToString(val),
			lengthOrNumber: _rtfeldman$elm_css$Css$Compatible,
			number: _rtfeldman$elm_css$Css$Compatible,
			lengthOrNumberOrAutoOrNoneOrContent: _rtfeldman$elm_css$Css$Compatible,
			numericValue: val,
			unitLabel: '',
			units: _rtfeldman$elm_css$Css$UnitlessFloat
		};
	};
	var _rtfeldman$elm_css$Css$IncompatibleUnits = {ctor: 'IncompatibleUnits'};
	var _rtfeldman$elm_css$Css$initial = {value: 'initial', overflow: _rtfeldman$elm_css$Css$Compatible, none: _rtfeldman$elm_css$Css$Compatible, number: _rtfeldman$elm_css$Css$Compatible, textDecorationLine: _rtfeldman$elm_css$Css$Compatible, textRendering: _rtfeldman$elm_css$Css$Compatible, textIndent: _rtfeldman$elm_css$Css$Compatible, textDecorationStyle: _rtfeldman$elm_css$Css$Compatible, boxSizing: _rtfeldman$elm_css$Css$Compatible, display: _rtfeldman$elm_css$Css$Compatible, all: _rtfeldman$elm_css$Css$Compatible, alignItems: _rtfeldman$elm_css$Css$Compatible, length: _rtfeldman$elm_css$Css$Compatible, lengthOrAuto: _rtfeldman$elm_css$Css$Compatible, lengthOrNone: _rtfeldman$elm_css$Css$Compatible, lengthOrNumber: _rtfeldman$elm_css$Css$Compatible, lengthOrMinMaxDimension: _rtfeldman$elm_css$Css$Compatible, lengthOrNoneOrMinMaxDimension: _rtfeldman$elm_css$Css$Compatible, flexBasis: _rtfeldman$elm_css$Css$Compatible, flexWrap: _rtfeldman$elm_css$Css$Compatible, flexDirection: _rtfeldman$elm_css$Css$Compatible, flexDirectionOrWrap: _rtfeldman$elm_css$Css$Compatible, lengthOrNumberOrAutoOrNoneOrContent: _rtfeldman$elm_css$Css$Compatible, fontFamily: _rtfeldman$elm_css$Css$Compatible, fontSize: _rtfeldman$elm_css$Css$Compatible, fontStyle: _rtfeldman$elm_css$Css$Compatible, fontWeight: _rtfeldman$elm_css$Css$Compatible, fontVariant: _rtfeldman$elm_css$Css$Compatible, units: _rtfeldman$elm_css$Css$IncompatibleUnits, numericValue: 0, unitLabel: ''};
	var _rtfeldman$elm_css$Css$unset = _elm_lang$core$Native_Utils.update(
		_rtfeldman$elm_css$Css$initial,
		{value: 'unset'});
	var _rtfeldman$elm_css$Css$inherit = _elm_lang$core$Native_Utils.update(
		_rtfeldman$elm_css$Css$initial,
		{value: 'inherit'});
	var _rtfeldman$elm_css$Css$lengthForOverloadedProperty = A3(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$IncompatibleUnits, '', 0);
	var _rtfeldman$elm_css$Css$alignItems = function (fn) {
		return A3(
			_rtfeldman$elm_css$Css$getOverloadedProperty,
			'alignItems',
			'align-items',
			fn(_rtfeldman$elm_css$Css$lengthForOverloadedProperty));
	};
	var _rtfeldman$elm_css$Css$alignSelf = function (fn) {
		return A3(
			_rtfeldman$elm_css$Css$getOverloadedProperty,
			'alignSelf',
			'align-self',
			fn(_rtfeldman$elm_css$Css$lengthForOverloadedProperty));
	};
	var _rtfeldman$elm_css$Css$textAlignLast = function (fn) {
		return A3(
			_rtfeldman$elm_css$Css$getOverloadedProperty,
			'textAlignLast',
			'text-align-last',
			fn(_rtfeldman$elm_css$Css$lengthForOverloadedProperty));
	};
	var _rtfeldman$elm_css$Css$textAlign = function (fn) {
		return A3(
			_rtfeldman$elm_css$Css$getOverloadedProperty,
			'textAlign',
			'text-align',
			fn(_rtfeldman$elm_css$Css$lengthForOverloadedProperty));
	};
	var _rtfeldman$elm_css$Css$verticalAlign = function (fn) {
		return A3(
			_rtfeldman$elm_css$Css$getOverloadedProperty,
			'verticalAlign',
			'vertical-align',
			fn(_rtfeldman$elm_css$Css$lengthForOverloadedProperty));
	};
	var _rtfeldman$elm_css$Css$Rtl = {ctor: 'Rtl'};
	var _rtfeldman$elm_css$Css$Ltr = {ctor: 'Ltr'};
	var _rtfeldman$elm_css$Css$IntentionallyUnsupportedPleaseSeeDocs = {ctor: 'IntentionallyUnsupportedPleaseSeeDocs'};
	var _rtfeldman$elm_css$Css$thin = _rtfeldman$elm_css$Css$IntentionallyUnsupportedPleaseSeeDocs;
	var _rtfeldman$elm_css$Css$thick = _rtfeldman$elm_css$Css$IntentionallyUnsupportedPleaseSeeDocs;
	var _rtfeldman$elm_css$Css$blink = _rtfeldman$elm_css$Css$IntentionallyUnsupportedPleaseSeeDocs;
	
	var _rtfeldman$elm_css$Css_Namespace$applyNamespaceToProperty = F2(
		function (name, property) {
			var _p0 = property.key;
			if (_p0 === 'animation-name') {
				return _elm_lang$core$Native_Utils.update(
					property,
					{
						value: A2(_elm_lang$core$Basics_ops['++'], name, property.value)
					});
			} else {
				return property;
			}
		});
	var _rtfeldman$elm_css$Css_Namespace$applyNamespaceToRepeatable = F2(
		function (name, selector) {
			var _p1 = selector;
			switch (_p1.ctor) {
				case 'ClassSelector':
					return _rtfeldman$elm_css$Css_Structure$ClassSelector(
						A2(_elm_lang$core$Basics_ops['++'], name, _p1._0));
				case 'IdSelector':
					return _rtfeldman$elm_css$Css_Structure$IdSelector(_p1._0);
				default:
					return _rtfeldman$elm_css$Css_Structure$PseudoClassSelector(_p1._0);
			}
		});
	var _rtfeldman$elm_css$Css_Namespace$applyNamespaceToSequence = F2(
		function (name, sequence) {
			var _p2 = sequence;
			switch (_p2.ctor) {
				case 'TypeSelectorSequence':
					return A2(
						_rtfeldman$elm_css$Css_Structure$TypeSelectorSequence,
						_p2._0,
						A2(
							_elm_lang$core$List$map,
							_rtfeldman$elm_css$Css_Namespace$applyNamespaceToRepeatable(name),
							_p2._1));
				case 'UniversalSelectorSequence':
					return _rtfeldman$elm_css$Css_Structure$UniversalSelectorSequence(
						A2(
							_elm_lang$core$List$map,
							_rtfeldman$elm_css$Css_Namespace$applyNamespaceToRepeatable(name),
							_p2._0));
				default:
					return A2(
						_rtfeldman$elm_css$Css_Structure$CustomSelector,
						_p2._0,
						A2(
							_elm_lang$core$List$map,
							_rtfeldman$elm_css$Css_Namespace$applyNamespaceToRepeatable(name),
							_p2._1));
			}
		});
	var _rtfeldman$elm_css$Css_Namespace$applyNamespaceToSelector = F2(
		function (name, _p3) {
			var _p4 = _p3;
			var apply = _rtfeldman$elm_css$Css_Namespace$applyNamespaceToSequence(name);
			return A3(
				_rtfeldman$elm_css$Css_Structure$Selector,
				apply(_p4._0),
				A2(
					_elm_lang$core$List$map,
					function (_p5) {
						var _p6 = _p5;
						return {
							ctor: '_Tuple2',
							_0: _p6._0,
							_1: apply(_p6._1)
						};
					},
					_p4._1),
				_p4._2);
		});
	var _rtfeldman$elm_css$Css_Namespace$applyNamespaceToMixin = F2(
		function (name, mixin) {
			var _p7 = mixin;
			switch (_p7.ctor) {
				case 'AppendProperty':
					return _rtfeldman$elm_css$Css_Preprocess$AppendProperty(
						A2(_rtfeldman$elm_css$Css_Namespace$applyNamespaceToProperty, name, _p7._0));
				case 'ExtendSelector':
					return A2(
						_rtfeldman$elm_css$Css_Preprocess$ExtendSelector,
						A2(_rtfeldman$elm_css$Css_Namespace$applyNamespaceToRepeatable, name, _p7._0),
						A2(
							_elm_lang$core$List$map,
							_rtfeldman$elm_css$Css_Namespace$applyNamespaceToMixin(name),
							_p7._1));
				case 'NestSnippet':
					return A2(
						_rtfeldman$elm_css$Css_Preprocess$NestSnippet,
						_p7._0,
						A2(
							_elm_lang$core$List$map,
							_rtfeldman$elm_css$Css_Namespace$applyNamespaceToSnippet(name),
							_p7._1));
				case 'WithPseudoElement':
					return A2(
						_rtfeldman$elm_css$Css_Preprocess$WithPseudoElement,
						_p7._0,
						A2(
							_elm_lang$core$List$map,
							_rtfeldman$elm_css$Css_Namespace$applyNamespaceToMixin(name),
							_p7._1));
				case 'WithMedia':
					return A2(
						_rtfeldman$elm_css$Css_Preprocess$WithMedia,
						_p7._0,
						A2(
							_elm_lang$core$List$map,
							_rtfeldman$elm_css$Css_Namespace$applyNamespaceToMixin(name),
							_p7._1));
				default:
					return _rtfeldman$elm_css$Css_Preprocess$ApplyMixins(
						A2(
							_elm_lang$core$List$map,
							_rtfeldman$elm_css$Css_Namespace$applyNamespaceToMixin(name),
							_p7._0));
			}
		});
	var _rtfeldman$elm_css$Css_Namespace$applyNamespaceToSnippet = F2(
		function (name, _p8) {
			var _p9 = _p8;
			return _rtfeldman$elm_css$Css_Preprocess$Snippet(
				A2(
					_elm_lang$core$List$map,
					_rtfeldman$elm_css$Css_Namespace$applyNamespaceToDeclaration(name),
					_p9._0));
		});
	var _rtfeldman$elm_css$Css_Namespace$applyNamespaceToDeclaration = F2(
		function (name, declaration) {
			var _p10 = declaration;
			switch (_p10.ctor) {
				case 'StyleBlockDeclaration':
					return _rtfeldman$elm_css$Css_Preprocess$StyleBlockDeclaration(
						A2(_rtfeldman$elm_css$Css_Namespace$applyNamespaceToStyleBlock, name, _p10._0));
				case 'MediaRule':
					return A2(
						_rtfeldman$elm_css$Css_Preprocess$MediaRule,
						_p10._0,
						A2(
							_elm_lang$core$List$map,
							_rtfeldman$elm_css$Css_Namespace$applyNamespaceToStyleBlock(name),
							_p10._1));
				case 'SupportsRule':
					return A2(
						_rtfeldman$elm_css$Css_Preprocess$SupportsRule,
						_p10._0,
						function (declarations) {
							return _elm_lang$core$Native_List.fromArray(
								[
									_rtfeldman$elm_css$Css_Preprocess$Snippet(declarations)
								]);
						}(
							A2(
								_elm_lang$core$List$map,
								_rtfeldman$elm_css$Css_Namespace$applyNamespaceToDeclaration(name),
								A2(_elm_lang$core$List$concatMap, _rtfeldman$elm_css$Css_Preprocess$unwrapSnippet, _p10._1))));
				case 'DocumentRule':
					return A5(
						_rtfeldman$elm_css$Css_Preprocess$DocumentRule,
						_p10._0,
						_p10._1,
						_p10._2,
						_p10._3,
						A2(_rtfeldman$elm_css$Css_Namespace$applyNamespaceToStyleBlock, name, _p10._4));
				case 'PageRule':
					return declaration;
				case 'FontFace':
					return declaration;
				case 'Keyframes':
					return A2(
						_rtfeldman$elm_css$Css_Preprocess$Keyframes,
						A2(_elm_lang$core$Basics_ops['++'], name, _p10._0),
						_p10._1);
				case 'Viewport':
					return declaration;
				case 'CounterStyle':
					return declaration;
				default:
					return declaration;
			}
		});
	var _rtfeldman$elm_css$Css_Namespace$applyNamespaceToStyleBlock = F2(
		function (name, _p11) {
			var _p12 = _p11;
			return A3(
				_rtfeldman$elm_css$Css_Preprocess$StyleBlock,
				A2(_rtfeldman$elm_css$Css_Namespace$applyNamespaceToSelector, name, _p12._0),
				A2(
					_elm_lang$core$List$map,
					_rtfeldman$elm_css$Css_Namespace$applyNamespaceToSelector(name),
					_p12._1),
				A2(
					_elm_lang$core$List$map,
					_rtfeldman$elm_css$Css_Namespace$applyNamespaceToMixin(name),
					_p12._2));
		});
	var _rtfeldman$elm_css$Css_Namespace$namespace = F2(
		function (rawIdentifier, snippets) {
			return A2(
				_elm_lang$core$List$map,
				_rtfeldman$elm_css$Css_Namespace$applyNamespaceToSnippet(
					_rtfeldman$elm_css_util$Css_Helpers$toCssIdentifier(rawIdentifier)),
				snippets);
		});
	
	var _rtfeldman$elm_css_helpers$Html_CssHelpers$stylesheetLink = function (url) {
		return A3(
			_elm_lang$html$Html$node,
			'link',
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$html$Html_Attributes$property,
					'rel',
					_elm_lang$core$Json_Encode$string('stylesheet')),
					A2(
					_elm_lang$html$Html_Attributes$property,
					'type',
					_elm_lang$core$Json_Encode$string('text/css')),
					A2(
					_elm_lang$html$Html_Attributes$property,
					'href',
					_elm_lang$core$Json_Encode$string(url))
				]),
			_elm_lang$core$Native_List.fromArray(
				[]));
	};
	var _rtfeldman$elm_css_helpers$Html_CssHelpers$style = function (text) {
		return A3(
			_elm_lang$html$Html$node,
			'style',
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$html$Html_Attributes$property,
					'textContent',
					_elm_lang$core$Json_Encode$string(text)),
					A2(
					_elm_lang$html$Html_Attributes$property,
					'type',
					_elm_lang$core$Json_Encode$string('text/css'))
				]),
			_elm_lang$core$Native_List.fromArray(
				[]));
	};
	var _rtfeldman$elm_css_helpers$Html_CssHelpers$namespacedClass = F2(
		function (name, list) {
			return _elm_lang$html$Html_Attributes$class(
				A2(
					_elm_lang$core$String$join,
					' ',
					A2(
						_elm_lang$core$List$map,
						_rtfeldman$elm_css_util$Css_Helpers$identifierToString(name),
						list)));
		});
	var _rtfeldman$elm_css_helpers$Html_CssHelpers$class = _rtfeldman$elm_css_helpers$Html_CssHelpers$namespacedClass('');
	var _rtfeldman$elm_css_helpers$Html_CssHelpers$classList = function (list) {
		return _rtfeldman$elm_css_helpers$Html_CssHelpers$class(
			A2(
				_elm_lang$core$List$map,
				_elm_lang$core$Basics$fst,
				A2(_elm_lang$core$List$filter, _elm_lang$core$Basics$snd, list)));
	};
	var _rtfeldman$elm_css_helpers$Html_CssHelpers$namespacedClassList = F2(
		function (name, list) {
			return A2(
				_rtfeldman$elm_css_helpers$Html_CssHelpers$namespacedClass,
				name,
				A2(
					_elm_lang$core$List$map,
					_elm_lang$core$Basics$fst,
					A2(_elm_lang$core$List$filter, _elm_lang$core$Basics$snd, list)));
		});
	var _rtfeldman$elm_css_helpers$Html_CssHelpers$helpers = {
		$class: _rtfeldman$elm_css_helpers$Html_CssHelpers$class,
		classList: _rtfeldman$elm_css_helpers$Html_CssHelpers$classList,
		id: function (_p0) {
			return _elm_lang$html$Html_Attributes$id(
				_rtfeldman$elm_css_util$Css_Helpers$toCssIdentifier(_p0));
		}
	};
	var _rtfeldman$elm_css_helpers$Html_CssHelpers$withNamespace = function (name) {
		return {
			$class: _rtfeldman$elm_css_helpers$Html_CssHelpers$namespacedClass(name),
			classList: _rtfeldman$elm_css_helpers$Html_CssHelpers$namespacedClassList(name),
			id: function (_p1) {
				return _elm_lang$html$Html_Attributes$id(
					_rtfeldman$elm_css_util$Css_Helpers$toCssIdentifier(_p1));
			},
			name: name
		};
	};
	var _rtfeldman$elm_css_helpers$Html_CssHelpers$Helpers = F3(
		function (a, b, c) {
			return {$class: a, classList: b, id: c};
		});
	var _rtfeldman$elm_css_helpers$Html_CssHelpers$Namespace = F4(
		function (a, b, c, d) {
			return {$class: a, classList: b, id: c, name: d};
		});
	
	var _benansell$elm_webpack_seed$LogoAnimationCss$yellow = _rtfeldman$elm_css$Css$hex('#F0AD00');
	var _benansell$elm_webpack_seed$LogoAnimationCss$green = _rtfeldman$elm_css$Css$hex('#7FD13B');
	var _benansell$elm_webpack_seed$LogoAnimationCss$blueGray = _rtfeldman$elm_css$Css$hex('#5A6378');
	var _benansell$elm_webpack_seed$LogoAnimationCss$blue = _rtfeldman$elm_css$Css$hex('#60B5CC');
	var _benansell$elm_webpack_seed$LogoAnimationCss$logoAnimationNamespace = _rtfeldman$elm_css_helpers$Html_CssHelpers$withNamespace('logoAnimation');
	var _benansell$elm_webpack_seed$LogoAnimationCss$Container = {ctor: 'Container'};
	var _benansell$elm_webpack_seed$LogoAnimationCss$css = function (_p0) {
		return _rtfeldman$elm_css$Css$stylesheet(
			A2(_rtfeldman$elm_css$Css_Namespace$namespace, _benansell$elm_webpack_seed$LogoAnimationCss$logoAnimationNamespace.name, _p0));
	}(
		_elm_lang$core$Native_List.fromArray(
			[
				A2(
				F2(
					function (x, y) {
						return A2(_rtfeldman$elm_css$Css_ops['.'], x, y);
					}),
				_benansell$elm_webpack_seed$LogoAnimationCss$Container,
				_elm_lang$core$Native_List.fromArray(
					[
						_rtfeldman$elm_css$Css$padding(
						_rtfeldman$elm_css$Css$pct(2)),
						_rtfeldman$elm_css$Css$width(
						_rtfeldman$elm_css$Css$pct(96))
					]))
			]));
	
	var _elm_community$easing_functions$Ease$reverse = F2(
		function (easing, time) {
			return easing(1 - time);
		});
	var _elm_community$easing_functions$Ease$flip = F2(
		function (easing, time) {
			return 1 - easing(1 - time);
		});
	var _elm_community$easing_functions$Ease$retour = F2(
		function (easing, time) {
			return (_elm_lang$core$Native_Utils.cmp(time, 0.5) < 0) ? easing(time * 2) : A2(_elm_community$easing_functions$Ease$flip, easing, (time - 0.5) * 2);
		});
	var _elm_community$easing_functions$Ease$inOut = F3(
		function (e1, e2, time) {
			return (_elm_lang$core$Native_Utils.cmp(time, 0.5) < 0) ? (e1(time * 2) / 2) : (0.5 + (e2((time - 0.5) * 2) / 2));
		});
	var _elm_community$easing_functions$Ease$inElastic = function (time) {
		if (_elm_lang$core$Native_Utils.eq(time, 0.0)) {
			return 0.0;
		} else {
			var t$ = time - 1;
			var p = 0.3;
			var s = 7.5e-2;
			return 0 - (Math.pow(2, 10 * t$) * _elm_lang$core$Basics$sin(((t$ - s) * (2 * _elm_lang$core$Basics$pi)) / p));
		}
	};
	var _elm_community$easing_functions$Ease$outElastic = _elm_community$easing_functions$Ease$flip(_elm_community$easing_functions$Ease$inElastic);
	var _elm_community$easing_functions$Ease$inOutElastic = A2(_elm_community$easing_functions$Ease$inOut, _elm_community$easing_functions$Ease$inElastic, _elm_community$easing_functions$Ease$outElastic);
	var _elm_community$easing_functions$Ease$outBounce = function (time) {
		var t4 = time - (2.625 / 2.75);
		var t3 = time - (2.25 / 2.75);
		var t2 = time - (1.5 / 2.75);
		var a = 7.5625;
		return (_elm_lang$core$Native_Utils.cmp(time, 1 / 2.75) < 0) ? ((a * time) * time) : ((_elm_lang$core$Native_Utils.cmp(time, 2 / 2.75) < 0) ? (((a * t2) * t2) + 0.75) : ((_elm_lang$core$Native_Utils.cmp(time, 2.5 / 2.75) < 0) ? (((a * t3) * t3) + 0.9375) : (((a * t4) * t4) + 0.984375)));
	};
	var _elm_community$easing_functions$Ease$inBounce = _elm_community$easing_functions$Ease$flip(_elm_community$easing_functions$Ease$outBounce);
	var _elm_community$easing_functions$Ease$inOutBounce = A2(_elm_community$easing_functions$Ease$inOut, _elm_community$easing_functions$Ease$inBounce, _elm_community$easing_functions$Ease$outBounce);
	var _elm_community$easing_functions$Ease$inBack = function (time) {
		return (time * time) * ((2.70158 * time) - 1.70158);
	};
	var _elm_community$easing_functions$Ease$outBack = _elm_community$easing_functions$Ease$flip(_elm_community$easing_functions$Ease$inBack);
	var _elm_community$easing_functions$Ease$inOutBack = A2(_elm_community$easing_functions$Ease$inOut, _elm_community$easing_functions$Ease$inBack, _elm_community$easing_functions$Ease$outBack);
	var _elm_community$easing_functions$Ease$outCirc = function (time) {
		return _elm_lang$core$Basics$sqrt(
			1 - Math.pow(time - 1, 2));
	};
	var _elm_community$easing_functions$Ease$inCirc = _elm_community$easing_functions$Ease$flip(_elm_community$easing_functions$Ease$outCirc);
	var _elm_community$easing_functions$Ease$inOutCirc = A2(_elm_community$easing_functions$Ease$inOut, _elm_community$easing_functions$Ease$inCirc, _elm_community$easing_functions$Ease$outCirc);
	var _elm_community$easing_functions$Ease$inExpo = function (time) {
		return _elm_lang$core$Native_Utils.eq(time, 0.0) ? 0.0 : Math.pow(2, 10 * (time - 1));
	};
	var _elm_community$easing_functions$Ease$outExpo = _elm_community$easing_functions$Ease$flip(_elm_community$easing_functions$Ease$inExpo);
	var _elm_community$easing_functions$Ease$inOutExpo = A2(_elm_community$easing_functions$Ease$inOut, _elm_community$easing_functions$Ease$inExpo, _elm_community$easing_functions$Ease$outExpo);
	var _elm_community$easing_functions$Ease$outSine = function (time) {
		return _elm_lang$core$Basics$sin(time * (_elm_lang$core$Basics$pi / 2));
	};
	var _elm_community$easing_functions$Ease$inSine = _elm_community$easing_functions$Ease$flip(_elm_community$easing_functions$Ease$outSine);
	var _elm_community$easing_functions$Ease$inOutSine = A2(_elm_community$easing_functions$Ease$inOut, _elm_community$easing_functions$Ease$inSine, _elm_community$easing_functions$Ease$outSine);
	var _elm_community$easing_functions$Ease$inQuint = function (time) {
		return Math.pow(time, 5);
	};
	var _elm_community$easing_functions$Ease$outQuint = _elm_community$easing_functions$Ease$flip(_elm_community$easing_functions$Ease$inQuint);
	var _elm_community$easing_functions$Ease$inOutQuint = A2(_elm_community$easing_functions$Ease$inOut, _elm_community$easing_functions$Ease$inQuint, _elm_community$easing_functions$Ease$outQuint);
	var _elm_community$easing_functions$Ease$inQuart = function (time) {
		return Math.pow(time, 4);
	};
	var _elm_community$easing_functions$Ease$outQuart = _elm_community$easing_functions$Ease$flip(_elm_community$easing_functions$Ease$inQuart);
	var _elm_community$easing_functions$Ease$inOutQuart = A2(_elm_community$easing_functions$Ease$inOut, _elm_community$easing_functions$Ease$inQuart, _elm_community$easing_functions$Ease$outQuart);
	var _elm_community$easing_functions$Ease$inCubic = function (time) {
		return Math.pow(time, 3);
	};
	var _elm_community$easing_functions$Ease$outCubic = _elm_community$easing_functions$Ease$flip(_elm_community$easing_functions$Ease$inCubic);
	var _elm_community$easing_functions$Ease$inOutCubic = A2(_elm_community$easing_functions$Ease$inOut, _elm_community$easing_functions$Ease$inCubic, _elm_community$easing_functions$Ease$outCubic);
	var _elm_community$easing_functions$Ease$inQuad = function (time) {
		return Math.pow(time, 2);
	};
	var _elm_community$easing_functions$Ease$outQuad = _elm_community$easing_functions$Ease$flip(_elm_community$easing_functions$Ease$inQuad);
	var _elm_community$easing_functions$Ease$inOutQuad = A2(_elm_community$easing_functions$Ease$inOut, _elm_community$easing_functions$Ease$inQuad, _elm_community$easing_functions$Ease$outQuad);
	var _elm_community$easing_functions$Ease$bezier = F5(
		function (x1, y1, x2, y2, time) {
			var pair = F4(
				function (interpolate, _p1, _p0, v) {
					var _p2 = _p1;
					var _p3 = _p0;
					return {
						ctor: '_Tuple2',
						_0: A3(interpolate, _p2._0, _p3._0, v),
						_1: A3(interpolate, _p2._1, _p3._1, v)
					};
				});
			var lerp = F3(
				function (from, to, v) {
					return from + ((to - from) * v);
				});
			var casteljau = function (ps) {
				casteljau:
				while (true) {
					var _p4 = ps;
					if (((_p4.ctor === '::') && (_p4._0.ctor === '_Tuple2')) && (_p4._1.ctor === '[]')) {
						return _p4._0._1;
					} else {
						var _p5 = _p4;
						var _v3 = A3(
							_elm_lang$core$List$map2,
							F2(
								function (x, y) {
									return A4(pair, lerp, x, y, time);
								}),
							_p5,
							A2(
								_elm_lang$core$Maybe$withDefault,
								_elm_lang$core$Native_List.fromArray(
									[]),
								_elm_lang$core$List$tail(_p5)));
						ps = _v3;
						continue casteljau;
					}
				}
			};
			return casteljau(
				_elm_lang$core$Native_List.fromArray(
					[
						{ctor: '_Tuple2', _0: 0, _1: 0},
						{ctor: '_Tuple2', _0: x1, _1: y1},
						{ctor: '_Tuple2', _0: x2, _1: y2},
						{ctor: '_Tuple2', _0: 1, _1: 1}
					]));
		});
	var _elm_community$easing_functions$Ease$linear = _elm_lang$core$Basics$identity;
	
	var _benansell$elm_webpack_seed$ShapePath$easeTranslate = F2(
		function (easing, _p0) {
			var _p1 = _p0;
			var _p3 = _p1._1;
			var _p2 = _p1._0;
			var easeOut = F2(
				function (p, t) {
					return t * A2(_elm_community$easing_functions$Ease$reverse, easing, p);
				});
			var easeIn = F2(
				function (p, t) {
					return t * easing(p);
				});
			return {
				easeIn: function (p) {
					return {
						ctor: '_Tuple2',
						_0: A2(easeIn, p, _p2),
						_1: A2(easeIn, p, _p3)
					};
				},
				easeOut: function (p) {
					return {
						ctor: '_Tuple2',
						_0: A2(easeOut, p, _p2),
						_1: A2(easeOut, p, _p3)
					};
				}
			};
		});
	var _benansell$elm_webpack_seed$ShapePath$easeScale = F2(
		function (easing, maxScale) {
			var scale = 1 - maxScale;
			var easeProgress = function (p) {
				return scale * easing(p);
			};
			return {
				easeIn: function (p) {
					return 1 - easeProgress(p);
				},
				easeOut: function (p) {
					return maxScale + easeProgress(p);
				}
			};
		});
	var _benansell$elm_webpack_seed$ShapePath$easeSimple = F3(
		function (easingIn, easingOut, direction) {
			return {
				easeIn: function (p) {
					return direction * easingIn(p);
				},
				easeOut: function (p) {
					return direction * A2(_elm_community$easing_functions$Ease$reverse, easingOut, p);
				}
			};
		});
	var _benansell$elm_webpack_seed$ShapePath$easeOffset = F3(
		function (offsetIn, offsetOut, easeCyle) {
			return {
				easeIn: function (p) {
					return offsetIn + easeCyle.easeIn(p);
				},
				easeOut: function (p) {
					return offsetOut + easeCyle.easeOut(p);
				}
			};
		});
	var _benansell$elm_webpack_seed$ShapePath$easeDuration = F3(
		function (durationIn, durationOut, easeCycle) {
			return {
				easeIn: function (p) {
					return easeCycle.easeIn(p / durationIn);
				},
				easeOut: function (p) {
					return easeCycle.easeOut(p / durationOut);
				}
			};
		});
	var _benansell$elm_webpack_seed$ShapePath$createStep = F3(
		function (start, duration, transforms) {
			var progressiveTransforms = function (progress) {
				return A2(
					_elm_lang$core$List$map,
					function (t) {
						return t(progress - start);
					},
					transforms);
			};
			return {start: start, duration: duration, end: start + duration, progressiveTransforms: progressiveTransforms};
		});
	var _benansell$elm_webpack_seed$ShapePath$pushStep = F3(
		function (duration, transforms, steps) {
			var previousStep = _elm_lang$core$List$head(steps);
			var _p4 = previousStep;
			if (_p4.ctor === 'Nothing') {
				return _elm_lang$core$Native_List.fromArray(
					[
						A3(_benansell$elm_webpack_seed$ShapePath$createStep, 0, duration, transforms)
					]);
			} else {
				return A2(
					_elm_lang$core$List_ops['::'],
					A3(_benansell$elm_webpack_seed$ShapePath$createStep, _p4._0.end, duration, transforms),
					steps);
			}
		});
	var _benansell$elm_webpack_seed$ShapePath$createPath = F2(
		function (durationInSeconds, steps) {
			return {duration: durationInSeconds * 1000, steps: steps};
		});
	var _benansell$elm_webpack_seed$ShapePath$addWobble = F3(
		function (duration, angle, start) {
			var wobbleProgress = _elm_lang$core$Basics$round(25 * start);
			return _elm_lang$core$Native_Utils.eq(
				A2(_elm_lang$core$Basics_ops['%'], wobbleProgress, 2),
				0) ? A3(
				_benansell$elm_webpack_seed$ShapePath$createStep,
				start,
				duration,
				_elm_lang$core$Native_List.fromArray(
					[
						function (_p5) {
						return A2(
							_benansell$elm_geometric_transformation$Transformer2D$rotate,
							_benansell$elm_geometric_transformation$Transformer2D$Clockwise,
							A2(_elm_lang$core$Basics$always, angle, _p5));
					}
					])) : A3(
				_benansell$elm_webpack_seed$ShapePath$createStep,
				start,
				duration,
				_elm_lang$core$Native_List.fromArray(
					[
						function (_p6) {
						return A2(
							_benansell$elm_geometric_transformation$Transformer2D$rotate,
							_benansell$elm_geometric_transformation$Transformer2D$AntiClockwise,
							A2(_elm_lang$core$Basics$always, angle, _p6));
					}
					]));
		});
	var _benansell$elm_webpack_seed$ShapePath$wobble = function () {
		var duration = 1.0e-2;
		var angle = _elm_lang$core$Basics$degrees(1);
		return A2(
			_benansell$elm_webpack_seed$ShapePath$createPath,
			2,
			A2(
				_elm_lang$core$List$map,
				function (i) {
					return A3(
						_benansell$elm_webpack_seed$ShapePath$addWobble,
						duration,
						angle,
						_elm_lang$core$Basics$toFloat(i) / 100);
				},
				_elm_lang$core$Native_List.range(0, 100)));
	}();
	var _benansell$elm_webpack_seed$ShapePath$shrink = function () {
		var scale = A3(
			_benansell$elm_webpack_seed$ShapePath$easeDuration,
			0.25,
			0.25,
			A2(_benansell$elm_webpack_seed$ShapePath$easeScale, _elm_community$easing_functions$Ease$inOutBack, 0.5));
		return A2(
			_benansell$elm_webpack_seed$ShapePath$createPath,
			3,
			A3(
				_benansell$elm_webpack_seed$ShapePath$pushStep,
				0.25,
				_elm_lang$core$Native_List.fromArray(
					[
						function (_p7) {
						return _benansell$elm_geometric_transformation$Transformer2D$scaleUniform(
							scale.easeOut(_p7));
					}
					]),
				A3(
					_benansell$elm_webpack_seed$ShapePath$pushStep,
					0.25,
					_elm_lang$core$Native_List.fromArray(
						[
							function (_p8) {
							return _benansell$elm_geometric_transformation$Transformer2D$scaleUniform(
								scale.easeIn(_p8));
						}
						]),
					A3(
						_benansell$elm_webpack_seed$ShapePath$pushStep,
						0.25,
						_elm_lang$core$Native_List.fromArray(
							[
								function (_p9) {
								return _benansell$elm_geometric_transformation$Transformer2D$scaleUniform(
									scale.easeOut(_p9));
							}
							]),
						A3(
							_benansell$elm_webpack_seed$ShapePath$pushStep,
							0.25,
							_elm_lang$core$Native_List.fromArray(
								[
									function (_p10) {
									return _benansell$elm_geometric_transformation$Transformer2D$scaleUniform(
										scale.easeIn(_p10));
								}
								]),
							_elm_lang$core$Native_List.fromArray(
								[]))))));
	}();
	var _benansell$elm_webpack_seed$ShapePath$shear = function () {
		var shear = A3(
			_benansell$elm_webpack_seed$ShapePath$easeDuration,
			0.25,
			0.25,
			A3(_benansell$elm_webpack_seed$ShapePath$easeSimple, _elm_community$easing_functions$Ease$linear, _elm_community$easing_functions$Ease$inBounce, -2));
		var maxOffset = -80;
		var offset = A3(
			_benansell$elm_webpack_seed$ShapePath$easeDuration,
			0.25,
			0.25,
			A2(
				_benansell$elm_webpack_seed$ShapePath$easeTranslate,
				_elm_community$easing_functions$Ease$outSine,
				{ctor: '_Tuple2', _0: maxOffset, _1: maxOffset}));
		return A2(
			_benansell$elm_webpack_seed$ShapePath$createPath,
			4,
			A3(
				_benansell$elm_webpack_seed$ShapePath$pushStep,
				0.25,
				_elm_lang$core$Native_List.fromArray(
					[
						function (_p11) {
						return _benansell$elm_geometric_transformation$Transformer2D$translate(
							offset.easeOut(_p11));
					}
					]),
				A3(
					_benansell$elm_webpack_seed$ShapePath$pushStep,
					0.25,
					_elm_lang$core$Native_List.fromArray(
						[
							function (_p12) {
							return A2(
								_benansell$elm_geometric_transformation$Transformer2D$shear,
								_benansell$elm_geometric_transformation$Transformer2D$Horizontal,
								shear.easeOut(_p12));
						},
							function (_p13) {
							return _benansell$elm_geometric_transformation$Transformer2D$translate(
								A2(
									_elm_lang$core$Basics$always,
									{ctor: '_Tuple2', _0: maxOffset, _1: maxOffset},
									_p13));
						}
						]),
					A3(
						_benansell$elm_webpack_seed$ShapePath$pushStep,
						0.25,
						_elm_lang$core$Native_List.fromArray(
							[
								function (_p14) {
								return A2(
									_benansell$elm_geometric_transformation$Transformer2D$shear,
									_benansell$elm_geometric_transformation$Transformer2D$Horizontal,
									shear.easeIn(_p14));
							},
								function (_p15) {
								return _benansell$elm_geometric_transformation$Transformer2D$translate(
									A2(
										_elm_lang$core$Basics$always,
										{ctor: '_Tuple2', _0: maxOffset, _1: maxOffset},
										_p15));
							}
							]),
						A3(
							_benansell$elm_webpack_seed$ShapePath$pushStep,
							0.25,
							_elm_lang$core$Native_List.fromArray(
								[
									function (_p16) {
									return _benansell$elm_geometric_transformation$Transformer2D$translate(
										offset.easeIn(_p16));
								}
								]),
							_elm_lang$core$Native_List.fromArray(
								[]))))));
	}();
	var _benansell$elm_webpack_seed$ShapePath$rotate = function () {
		var angle = A3(
			_benansell$elm_webpack_seed$ShapePath$easeDuration,
			0.5,
			0.5,
			A3(_benansell$elm_webpack_seed$ShapePath$easeSimple, _elm_community$easing_functions$Ease$linear, _elm_community$easing_functions$Ease$outBack, 2 * _elm_lang$core$Basics$pi));
		var maxScale = 0.8;
		var scale = A3(
			_benansell$elm_webpack_seed$ShapePath$easeDuration,
			0.25,
			0.25,
			A2(_benansell$elm_webpack_seed$ShapePath$easeScale, _elm_community$easing_functions$Ease$linear, maxScale));
		var maxOffset = 40;
		var offset = A3(
			_benansell$elm_webpack_seed$ShapePath$easeDuration,
			0.25,
			0.25,
			A2(
				_benansell$elm_webpack_seed$ShapePath$easeTranslate,
				_elm_community$easing_functions$Ease$outSine,
				{ctor: '_Tuple2', _0: maxOffset, _1: 0 - maxOffset}));
		return A2(
			_benansell$elm_webpack_seed$ShapePath$createPath,
			10,
			A3(
				_benansell$elm_webpack_seed$ShapePath$pushStep,
				0.75,
				_elm_lang$core$Native_List.fromArray(
					[
						function (_p17) {
						return _benansell$elm_geometric_transformation$Transformer2D$scaleUniform(
							scale.easeOut(_p17));
					},
						function (_p18) {
						return _benansell$elm_geometric_transformation$Transformer2D$translate(
							offset.easeOut(_p18));
					}
					]),
				A3(
					_benansell$elm_webpack_seed$ShapePath$pushStep,
					0.5,
					_elm_lang$core$Native_List.fromArray(
						[
							function (_p19) {
							return _benansell$elm_geometric_transformation$Transformer2D$scaleUniform(
								A2(_elm_lang$core$Basics$always, maxScale, _p19));
						},
							function (_p20) {
							return A2(
								_benansell$elm_geometric_transformation$Transformer2D$rotate,
								_benansell$elm_geometric_transformation$Transformer2D$AntiClockwise,
								angle.easeOut(_p20));
						},
							function (_p21) {
							return _benansell$elm_geometric_transformation$Transformer2D$translate(
								A2(
									_elm_lang$core$Basics$always,
									{ctor: '_Tuple2', _0: maxOffset, _1: 0 - maxOffset},
									_p21));
						}
						]),
					A3(
						_benansell$elm_webpack_seed$ShapePath$pushStep,
						0.25,
						_elm_lang$core$Native_List.fromArray(
							[
								function (_p22) {
								return _benansell$elm_geometric_transformation$Transformer2D$scaleUniform(
									scale.easeIn(_p22));
							},
								function (_p23) {
								return _benansell$elm_geometric_transformation$Transformer2D$translate(
									offset.easeIn(_p23));
							}
							]),
						_elm_lang$core$Native_List.fromArray(
							[])))));
	}();
	var _benansell$elm_webpack_seed$ShapePath$moveRight = function () {
		var scale = A3(
			_benansell$elm_webpack_seed$ShapePath$easeDuration,
			0.5,
			0.5,
			A2(_benansell$elm_webpack_seed$ShapePath$easeScale, _elm_community$easing_functions$Ease$inOutBack, 0.5));
		var offset = A3(
			_benansell$elm_webpack_seed$ShapePath$easeDuration,
			0.5,
			0.5,
			A2(
				_benansell$elm_webpack_seed$ShapePath$easeTranslate,
				_elm_community$easing_functions$Ease$outBounce,
				{ctor: '_Tuple2', _0: -100, _1: 0}));
		return A2(
			_benansell$elm_webpack_seed$ShapePath$createPath,
			5,
			A3(
				_benansell$elm_webpack_seed$ShapePath$pushStep,
				0.5,
				_elm_lang$core$Native_List.fromArray(
					[
						function (_p24) {
						return _benansell$elm_geometric_transformation$Transformer2D$scaleUniform(
							scale.easeOut(_p24));
					},
						function (_p25) {
						return _benansell$elm_geometric_transformation$Transformer2D$translate(
							offset.easeOut(_p25));
					}
					]),
				A3(
					_benansell$elm_webpack_seed$ShapePath$pushStep,
					0.5,
					_elm_lang$core$Native_List.fromArray(
						[
							function (_p26) {
							return _benansell$elm_geometric_transformation$Transformer2D$scaleUniform(
								scale.easeIn(_p26));
						},
							function (_p27) {
							return _benansell$elm_geometric_transformation$Transformer2D$translate(
								offset.easeIn(_p27));
						}
						]),
					_elm_lang$core$Native_List.fromArray(
						[]))));
	}();
	var _benansell$elm_webpack_seed$ShapePath$moveDown = function () {
		var offset = A3(
			_benansell$elm_webpack_seed$ShapePath$easeDuration,
			0.5,
			0.5,
			A2(
				_benansell$elm_webpack_seed$ShapePath$easeTranslate,
				_elm_community$easing_functions$Ease$outElastic,
				{ctor: '_Tuple2', _0: 0, _1: 75}));
		return A2(
			_benansell$elm_webpack_seed$ShapePath$createPath,
			2,
			A3(
				_benansell$elm_webpack_seed$ShapePath$pushStep,
				0.5,
				_elm_lang$core$Native_List.fromArray(
					[
						function (_p28) {
						return _benansell$elm_geometric_transformation$Transformer2D$translate(
							offset.easeOut(_p28));
					}
					]),
				A3(
					_benansell$elm_webpack_seed$ShapePath$pushStep,
					0.5,
					_elm_lang$core$Native_List.fromArray(
						[
							function (_p29) {
							return _benansell$elm_geometric_transformation$Transformer2D$translate(
								offset.easeIn(_p29));
						}
						]),
					_elm_lang$core$Native_List.fromArray(
						[]))));
	}();
	var _benansell$elm_webpack_seed$ShapePath$hinge = function () {
		var maxScale = 0.7;
		var scale = A3(
			_benansell$elm_webpack_seed$ShapePath$easeDuration,
			0.25,
			0.25,
			A2(_benansell$elm_webpack_seed$ShapePath$easeScale, _elm_community$easing_functions$Ease$linear, maxScale));
		var maxAngle = _elm_lang$core$Basics$pi / 2;
		var angleOne = A3(
			_benansell$elm_webpack_seed$ShapePath$easeDuration,
			0.25,
			0.25,
			A3(_benansell$elm_webpack_seed$ShapePath$easeSimple, _elm_community$easing_functions$Ease$inQuint, _elm_community$easing_functions$Ease$linear, maxAngle));
		var angleTwo = A3(
			_benansell$elm_webpack_seed$ShapePath$easeDuration,
			0.25,
			0.25,
			A3(
				_benansell$elm_webpack_seed$ShapePath$easeOffset,
				maxAngle,
				maxAngle,
				A3(_benansell$elm_webpack_seed$ShapePath$easeSimple, _elm_community$easing_functions$Ease$outBack, _elm_community$easing_functions$Ease$linear, maxAngle)));
		return A2(
			_benansell$elm_webpack_seed$ShapePath$createPath,
			4,
			A3(
				_benansell$elm_webpack_seed$ShapePath$pushStep,
				0.25,
				_elm_lang$core$Native_List.fromArray(
					[
						function (_p30) {
						return _benansell$elm_geometric_transformation$Transformer2D$scaleUniform(
							scale.easeOut(_p30));
					},
						function (_p31) {
						return A2(
							_benansell$elm_geometric_transformation$Transformer2D$rotate,
							_benansell$elm_geometric_transformation$Transformer2D$Clockwise,
							angleOne.easeOut(_p31));
					}
					]),
				A3(
					_benansell$elm_webpack_seed$ShapePath$pushStep,
					0.25,
					_elm_lang$core$Native_List.fromArray(
						[
							function (_p32) {
							return _benansell$elm_geometric_transformation$Transformer2D$scaleUniform(
								A2(_elm_lang$core$Basics$always, maxScale, _p32));
						},
							function (_p33) {
							return A2(
								_benansell$elm_geometric_transformation$Transformer2D$rotate,
								_benansell$elm_geometric_transformation$Transformer2D$Clockwise,
								angleTwo.easeOut(_p33));
						}
						]),
					A3(
						_benansell$elm_webpack_seed$ShapePath$pushStep,
						0.25,
						_elm_lang$core$Native_List.fromArray(
							[
								function (_p34) {
								return _benansell$elm_geometric_transformation$Transformer2D$scaleUniform(
									A2(_elm_lang$core$Basics$always, maxScale, _p34));
							},
								function (_p35) {
								return A2(
									_benansell$elm_geometric_transformation$Transformer2D$rotate,
									_benansell$elm_geometric_transformation$Transformer2D$Clockwise,
									angleTwo.easeIn(_p35));
							}
							]),
						A3(
							_benansell$elm_webpack_seed$ShapePath$pushStep,
							0.25,
							_elm_lang$core$Native_List.fromArray(
								[
									function (_p36) {
									return _benansell$elm_geometric_transformation$Transformer2D$scaleUniform(
										scale.easeIn(_p36));
								},
									function (_p37) {
									return A2(
										_benansell$elm_geometric_transformation$Transformer2D$rotate,
										_benansell$elm_geometric_transformation$Transformer2D$Clockwise,
										angleOne.easeIn(_p37));
								}
								]),
							_elm_lang$core$Native_List.fromArray(
								[]))))));
	}();
	var _benansell$elm_webpack_seed$ShapePath$timeRemainingToProgress = F2(
		function (duration, remaining) {
			return (_elm_lang$core$Native_Utils.cmp(remaining, 0) < 1) ? 1 : ((duration - remaining) / duration);
		});
	var _benansell$elm_webpack_seed$ShapePath$pathToTransformations = F3(
		function (path, endTime, time) {
			var progress = A2(_benansell$elm_webpack_seed$ShapePath$timeRemainingToProgress, path.duration, endTime - time);
			var currentStep = _elm_lang$core$List$head(
				A2(
					_elm_lang$core$List$filter,
					function (s) {
						return (_elm_lang$core$Native_Utils.cmp(progress, s.start) > -1) && (_elm_lang$core$Native_Utils.cmp(progress, s.start + s.duration) < 0);
					},
					path.steps));
			var _p38 = currentStep;
			if (_p38.ctor === 'Nothing') {
				return _elm_lang$core$Native_List.fromArray(
					[]);
			} else {
				return _p38._0.progressiveTransforms(progress);
			}
		});
	var _benansell$elm_webpack_seed$ShapePath$EaseCycle = F2(
		function (a, b) {
			return {easeIn: a, easeOut: b};
		});
	var _benansell$elm_webpack_seed$ShapePath$Path = F2(
		function (a, b) {
			return {duration: a, steps: b};
		});
	var _benansell$elm_webpack_seed$ShapePath$Step = F4(
		function (a, b, c, d) {
			return {start: a, duration: b, end: c, progressiveTransforms: d};
		});
	var _benansell$elm_webpack_seed$ShapePath$Forward = {ctor: 'Forward'};
	var _benansell$elm_webpack_seed$ShapePath$Backward = {ctor: 'Backward'};
	
	var _elm_lang$svg$Svg$text = _elm_lang$virtual_dom$VirtualDom$text;
	var _elm_lang$svg$Svg$svgNamespace = A2(
		_elm_lang$virtual_dom$VirtualDom$property,
		'namespace',
		_elm_lang$core$Json_Encode$string('http://www.w3.org/2000/svg'));
	var _elm_lang$svg$Svg$node = F3(
		function (name, attributes, children) {
			return A3(
				_elm_lang$virtual_dom$VirtualDom$node,
				name,
				A2(_elm_lang$core$List_ops['::'], _elm_lang$svg$Svg$svgNamespace, attributes),
				children);
		});
	var _elm_lang$svg$Svg$svg = _elm_lang$svg$Svg$node('svg');
	var _elm_lang$svg$Svg$foreignObject = _elm_lang$svg$Svg$node('foreignObject');
	var _elm_lang$svg$Svg$animate = _elm_lang$svg$Svg$node('animate');
	var _elm_lang$svg$Svg$animateColor = _elm_lang$svg$Svg$node('animateColor');
	var _elm_lang$svg$Svg$animateMotion = _elm_lang$svg$Svg$node('animateMotion');
	var _elm_lang$svg$Svg$animateTransform = _elm_lang$svg$Svg$node('animateTransform');
	var _elm_lang$svg$Svg$mpath = _elm_lang$svg$Svg$node('mpath');
	var _elm_lang$svg$Svg$set = _elm_lang$svg$Svg$node('set');
	var _elm_lang$svg$Svg$a = _elm_lang$svg$Svg$node('a');
	var _elm_lang$svg$Svg$defs = _elm_lang$svg$Svg$node('defs');
	var _elm_lang$svg$Svg$g = _elm_lang$svg$Svg$node('g');
	var _elm_lang$svg$Svg$marker = _elm_lang$svg$Svg$node('marker');
	var _elm_lang$svg$Svg$mask = _elm_lang$svg$Svg$node('mask');
	var _elm_lang$svg$Svg$missingGlyph = _elm_lang$svg$Svg$node('missingGlyph');
	var _elm_lang$svg$Svg$pattern = _elm_lang$svg$Svg$node('pattern');
	var _elm_lang$svg$Svg$switch = _elm_lang$svg$Svg$node('switch');
	var _elm_lang$svg$Svg$symbol = _elm_lang$svg$Svg$node('symbol');
	var _elm_lang$svg$Svg$desc = _elm_lang$svg$Svg$node('desc');
	var _elm_lang$svg$Svg$metadata = _elm_lang$svg$Svg$node('metadata');
	var _elm_lang$svg$Svg$title = _elm_lang$svg$Svg$node('title');
	var _elm_lang$svg$Svg$feBlend = _elm_lang$svg$Svg$node('feBlend');
	var _elm_lang$svg$Svg$feColorMatrix = _elm_lang$svg$Svg$node('feColorMatrix');
	var _elm_lang$svg$Svg$feComponentTransfer = _elm_lang$svg$Svg$node('feComponentTransfer');
	var _elm_lang$svg$Svg$feComposite = _elm_lang$svg$Svg$node('feComposite');
	var _elm_lang$svg$Svg$feConvolveMatrix = _elm_lang$svg$Svg$node('feConvolveMatrix');
	var _elm_lang$svg$Svg$feDiffuseLighting = _elm_lang$svg$Svg$node('feDiffuseLighting');
	var _elm_lang$svg$Svg$feDisplacementMap = _elm_lang$svg$Svg$node('feDisplacementMap');
	var _elm_lang$svg$Svg$feFlood = _elm_lang$svg$Svg$node('feFlood');
	var _elm_lang$svg$Svg$feFuncA = _elm_lang$svg$Svg$node('feFuncA');
	var _elm_lang$svg$Svg$feFuncB = _elm_lang$svg$Svg$node('feFuncB');
	var _elm_lang$svg$Svg$feFuncG = _elm_lang$svg$Svg$node('feFuncG');
	var _elm_lang$svg$Svg$feFuncR = _elm_lang$svg$Svg$node('feFuncR');
	var _elm_lang$svg$Svg$feGaussianBlur = _elm_lang$svg$Svg$node('feGaussianBlur');
	var _elm_lang$svg$Svg$feImage = _elm_lang$svg$Svg$node('feImage');
	var _elm_lang$svg$Svg$feMerge = _elm_lang$svg$Svg$node('feMerge');
	var _elm_lang$svg$Svg$feMergeNode = _elm_lang$svg$Svg$node('feMergeNode');
	var _elm_lang$svg$Svg$feMorphology = _elm_lang$svg$Svg$node('feMorphology');
	var _elm_lang$svg$Svg$feOffset = _elm_lang$svg$Svg$node('feOffset');
	var _elm_lang$svg$Svg$feSpecularLighting = _elm_lang$svg$Svg$node('feSpecularLighting');
	var _elm_lang$svg$Svg$feTile = _elm_lang$svg$Svg$node('feTile');
	var _elm_lang$svg$Svg$feTurbulence = _elm_lang$svg$Svg$node('feTurbulence');
	var _elm_lang$svg$Svg$font = _elm_lang$svg$Svg$node('font');
	var _elm_lang$svg$Svg$fontFace = _elm_lang$svg$Svg$node('fontFace');
	var _elm_lang$svg$Svg$fontFaceFormat = _elm_lang$svg$Svg$node('fontFaceFormat');
	var _elm_lang$svg$Svg$fontFaceName = _elm_lang$svg$Svg$node('fontFaceName');
	var _elm_lang$svg$Svg$fontFaceSrc = _elm_lang$svg$Svg$node('fontFaceSrc');
	var _elm_lang$svg$Svg$fontFaceUri = _elm_lang$svg$Svg$node('fontFaceUri');
	var _elm_lang$svg$Svg$hkern = _elm_lang$svg$Svg$node('hkern');
	var _elm_lang$svg$Svg$vkern = _elm_lang$svg$Svg$node('vkern');
	var _elm_lang$svg$Svg$linearGradient = _elm_lang$svg$Svg$node('linearGradient');
	var _elm_lang$svg$Svg$radialGradient = _elm_lang$svg$Svg$node('radialGradient');
	var _elm_lang$svg$Svg$stop = _elm_lang$svg$Svg$node('stop');
	var _elm_lang$svg$Svg$circle = _elm_lang$svg$Svg$node('circle');
	var _elm_lang$svg$Svg$ellipse = _elm_lang$svg$Svg$node('ellipse');
	var _elm_lang$svg$Svg$image = _elm_lang$svg$Svg$node('image');
	var _elm_lang$svg$Svg$line = _elm_lang$svg$Svg$node('line');
	var _elm_lang$svg$Svg$path = _elm_lang$svg$Svg$node('path');
	var _elm_lang$svg$Svg$polygon = _elm_lang$svg$Svg$node('polygon');
	var _elm_lang$svg$Svg$polyline = _elm_lang$svg$Svg$node('polyline');
	var _elm_lang$svg$Svg$rect = _elm_lang$svg$Svg$node('rect');
	var _elm_lang$svg$Svg$use = _elm_lang$svg$Svg$node('use');
	var _elm_lang$svg$Svg$feDistantLight = _elm_lang$svg$Svg$node('feDistantLight');
	var _elm_lang$svg$Svg$fePointLight = _elm_lang$svg$Svg$node('fePointLight');
	var _elm_lang$svg$Svg$feSpotLight = _elm_lang$svg$Svg$node('feSpotLight');
	var _elm_lang$svg$Svg$altGlyph = _elm_lang$svg$Svg$node('altGlyph');
	var _elm_lang$svg$Svg$altGlyphDef = _elm_lang$svg$Svg$node('altGlyphDef');
	var _elm_lang$svg$Svg$altGlyphItem = _elm_lang$svg$Svg$node('altGlyphItem');
	var _elm_lang$svg$Svg$glyph = _elm_lang$svg$Svg$node('glyph');
	var _elm_lang$svg$Svg$glyphRef = _elm_lang$svg$Svg$node('glyphRef');
	var _elm_lang$svg$Svg$textPath = _elm_lang$svg$Svg$node('textPath');
	var _elm_lang$svg$Svg$text$ = _elm_lang$svg$Svg$node('text');
	var _elm_lang$svg$Svg$tref = _elm_lang$svg$Svg$node('tref');
	var _elm_lang$svg$Svg$tspan = _elm_lang$svg$Svg$node('tspan');
	var _elm_lang$svg$Svg$clipPath = _elm_lang$svg$Svg$node('clipPath');
	var _elm_lang$svg$Svg$colorProfile = _elm_lang$svg$Svg$node('colorProfile');
	var _elm_lang$svg$Svg$cursor = _elm_lang$svg$Svg$node('cursor');
	var _elm_lang$svg$Svg$filter = _elm_lang$svg$Svg$node('filter');
	var _elm_lang$svg$Svg$script = _elm_lang$svg$Svg$node('script');
	var _elm_lang$svg$Svg$style = _elm_lang$svg$Svg$node('style');
	var _elm_lang$svg$Svg$view = _elm_lang$svg$Svg$node('view');
	
	var _elm_lang$svg$Svg_Attributes$writingMode = _elm_lang$virtual_dom$VirtualDom$attribute('writing-mode');
	var _elm_lang$svg$Svg_Attributes$wordSpacing = _elm_lang$virtual_dom$VirtualDom$attribute('word-spacing');
	var _elm_lang$svg$Svg_Attributes$visibility = _elm_lang$virtual_dom$VirtualDom$attribute('visibility');
	var _elm_lang$svg$Svg_Attributes$unicodeBidi = _elm_lang$virtual_dom$VirtualDom$attribute('unicode-bidi');
	var _elm_lang$svg$Svg_Attributes$textRendering = _elm_lang$virtual_dom$VirtualDom$attribute('text-rendering');
	var _elm_lang$svg$Svg_Attributes$textDecoration = _elm_lang$virtual_dom$VirtualDom$attribute('text-decoration');
	var _elm_lang$svg$Svg_Attributes$textAnchor = _elm_lang$virtual_dom$VirtualDom$attribute('text-anchor');
	var _elm_lang$svg$Svg_Attributes$stroke = _elm_lang$virtual_dom$VirtualDom$attribute('stroke');
	var _elm_lang$svg$Svg_Attributes$strokeWidth = _elm_lang$virtual_dom$VirtualDom$attribute('stroke-width');
	var _elm_lang$svg$Svg_Attributes$strokeOpacity = _elm_lang$virtual_dom$VirtualDom$attribute('stroke-opacity');
	var _elm_lang$svg$Svg_Attributes$strokeMiterlimit = _elm_lang$virtual_dom$VirtualDom$attribute('stroke-miterlimit');
	var _elm_lang$svg$Svg_Attributes$strokeLinejoin = _elm_lang$virtual_dom$VirtualDom$attribute('stroke-linejoin');
	var _elm_lang$svg$Svg_Attributes$strokeLinecap = _elm_lang$virtual_dom$VirtualDom$attribute('stroke-linecap');
	var _elm_lang$svg$Svg_Attributes$strokeDashoffset = _elm_lang$virtual_dom$VirtualDom$attribute('stroke-dashoffset');
	var _elm_lang$svg$Svg_Attributes$strokeDasharray = _elm_lang$virtual_dom$VirtualDom$attribute('stroke-dasharray');
	var _elm_lang$svg$Svg_Attributes$stopOpacity = _elm_lang$virtual_dom$VirtualDom$attribute('stop-opacity');
	var _elm_lang$svg$Svg_Attributes$stopColor = _elm_lang$virtual_dom$VirtualDom$attribute('stop-color');
	var _elm_lang$svg$Svg_Attributes$shapeRendering = _elm_lang$virtual_dom$VirtualDom$attribute('shape-rendering');
	var _elm_lang$svg$Svg_Attributes$pointerEvents = _elm_lang$virtual_dom$VirtualDom$attribute('pointer-events');
	var _elm_lang$svg$Svg_Attributes$overflow = _elm_lang$virtual_dom$VirtualDom$attribute('overflow');
	var _elm_lang$svg$Svg_Attributes$opacity = _elm_lang$virtual_dom$VirtualDom$attribute('opacity');
	var _elm_lang$svg$Svg_Attributes$mask = _elm_lang$virtual_dom$VirtualDom$attribute('mask');
	var _elm_lang$svg$Svg_Attributes$markerStart = _elm_lang$virtual_dom$VirtualDom$attribute('marker-start');
	var _elm_lang$svg$Svg_Attributes$markerMid = _elm_lang$virtual_dom$VirtualDom$attribute('marker-mid');
	var _elm_lang$svg$Svg_Attributes$markerEnd = _elm_lang$virtual_dom$VirtualDom$attribute('marker-end');
	var _elm_lang$svg$Svg_Attributes$lightingColor = _elm_lang$virtual_dom$VirtualDom$attribute('lighting-color');
	var _elm_lang$svg$Svg_Attributes$letterSpacing = _elm_lang$virtual_dom$VirtualDom$attribute('letter-spacing');
	var _elm_lang$svg$Svg_Attributes$kerning = _elm_lang$virtual_dom$VirtualDom$attribute('kerning');
	var _elm_lang$svg$Svg_Attributes$imageRendering = _elm_lang$virtual_dom$VirtualDom$attribute('image-rendering');
	var _elm_lang$svg$Svg_Attributes$glyphOrientationVertical = _elm_lang$virtual_dom$VirtualDom$attribute('glyph-orientation-vertical');
	var _elm_lang$svg$Svg_Attributes$glyphOrientationHorizontal = _elm_lang$virtual_dom$VirtualDom$attribute('glyph-orientation-horizontal');
	var _elm_lang$svg$Svg_Attributes$fontWeight = _elm_lang$virtual_dom$VirtualDom$attribute('font-weight');
	var _elm_lang$svg$Svg_Attributes$fontVariant = _elm_lang$virtual_dom$VirtualDom$attribute('font-variant');
	var _elm_lang$svg$Svg_Attributes$fontStyle = _elm_lang$virtual_dom$VirtualDom$attribute('font-style');
	var _elm_lang$svg$Svg_Attributes$fontStretch = _elm_lang$virtual_dom$VirtualDom$attribute('font-stretch');
	var _elm_lang$svg$Svg_Attributes$fontSize = _elm_lang$virtual_dom$VirtualDom$attribute('font-size');
	var _elm_lang$svg$Svg_Attributes$fontSizeAdjust = _elm_lang$virtual_dom$VirtualDom$attribute('font-size-adjust');
	var _elm_lang$svg$Svg_Attributes$fontFamily = _elm_lang$virtual_dom$VirtualDom$attribute('font-family');
	var _elm_lang$svg$Svg_Attributes$floodOpacity = _elm_lang$virtual_dom$VirtualDom$attribute('flood-opacity');
	var _elm_lang$svg$Svg_Attributes$floodColor = _elm_lang$virtual_dom$VirtualDom$attribute('flood-color');
	var _elm_lang$svg$Svg_Attributes$filter = _elm_lang$virtual_dom$VirtualDom$attribute('filter');
	var _elm_lang$svg$Svg_Attributes$fill = _elm_lang$virtual_dom$VirtualDom$attribute('fill');
	var _elm_lang$svg$Svg_Attributes$fillRule = _elm_lang$virtual_dom$VirtualDom$attribute('fill-rule');
	var _elm_lang$svg$Svg_Attributes$fillOpacity = _elm_lang$virtual_dom$VirtualDom$attribute('fill-opacity');
	var _elm_lang$svg$Svg_Attributes$enableBackground = _elm_lang$virtual_dom$VirtualDom$attribute('enable-background');
	var _elm_lang$svg$Svg_Attributes$dominantBaseline = _elm_lang$virtual_dom$VirtualDom$attribute('dominant-baseline');
	var _elm_lang$svg$Svg_Attributes$display = _elm_lang$virtual_dom$VirtualDom$attribute('display');
	var _elm_lang$svg$Svg_Attributes$direction = _elm_lang$virtual_dom$VirtualDom$attribute('direction');
	var _elm_lang$svg$Svg_Attributes$cursor = _elm_lang$virtual_dom$VirtualDom$attribute('cursor');
	var _elm_lang$svg$Svg_Attributes$color = _elm_lang$virtual_dom$VirtualDom$attribute('color');
	var _elm_lang$svg$Svg_Attributes$colorRendering = _elm_lang$virtual_dom$VirtualDom$attribute('color-rendering');
	var _elm_lang$svg$Svg_Attributes$colorProfile = _elm_lang$virtual_dom$VirtualDom$attribute('color-profile');
	var _elm_lang$svg$Svg_Attributes$colorInterpolation = _elm_lang$virtual_dom$VirtualDom$attribute('color-interpolation');
	var _elm_lang$svg$Svg_Attributes$colorInterpolationFilters = _elm_lang$virtual_dom$VirtualDom$attribute('color-interpolation-filters');
	var _elm_lang$svg$Svg_Attributes$clip = _elm_lang$virtual_dom$VirtualDom$attribute('clip');
	var _elm_lang$svg$Svg_Attributes$clipRule = _elm_lang$virtual_dom$VirtualDom$attribute('clip-rule');
	var _elm_lang$svg$Svg_Attributes$clipPath = _elm_lang$virtual_dom$VirtualDom$attribute('clip-path');
	var _elm_lang$svg$Svg_Attributes$baselineShift = _elm_lang$virtual_dom$VirtualDom$attribute('baseline-shift');
	var _elm_lang$svg$Svg_Attributes$alignmentBaseline = _elm_lang$virtual_dom$VirtualDom$attribute('alignment-baseline');
	var _elm_lang$svg$Svg_Attributes$zoomAndPan = _elm_lang$virtual_dom$VirtualDom$attribute('zoomAndPan');
	var _elm_lang$svg$Svg_Attributes$z = _elm_lang$virtual_dom$VirtualDom$attribute('z');
	var _elm_lang$svg$Svg_Attributes$yChannelSelector = _elm_lang$virtual_dom$VirtualDom$attribute('yChannelSelector');
	var _elm_lang$svg$Svg_Attributes$y2 = _elm_lang$virtual_dom$VirtualDom$attribute('y2');
	var _elm_lang$svg$Svg_Attributes$y1 = _elm_lang$virtual_dom$VirtualDom$attribute('y1');
	var _elm_lang$svg$Svg_Attributes$y = _elm_lang$virtual_dom$VirtualDom$attribute('y');
	var _elm_lang$svg$Svg_Attributes$xmlSpace = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/XML/1998/namespace', 'xml:space');
	var _elm_lang$svg$Svg_Attributes$xmlLang = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/XML/1998/namespace', 'xml:lang');
	var _elm_lang$svg$Svg_Attributes$xmlBase = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/XML/1998/namespace', 'xml:base');
	var _elm_lang$svg$Svg_Attributes$xlinkType = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/1999/xlink', 'xlink:type');
	var _elm_lang$svg$Svg_Attributes$xlinkTitle = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/1999/xlink', 'xlink:title');
	var _elm_lang$svg$Svg_Attributes$xlinkShow = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/1999/xlink', 'xlink:show');
	var _elm_lang$svg$Svg_Attributes$xlinkRole = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/1999/xlink', 'xlink:role');
	var _elm_lang$svg$Svg_Attributes$xlinkHref = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/1999/xlink', 'xlink:href');
	var _elm_lang$svg$Svg_Attributes$xlinkArcrole = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/1999/xlink', 'xlink:arcrole');
	var _elm_lang$svg$Svg_Attributes$xlinkActuate = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/1999/xlink', 'xlink:actuate');
	var _elm_lang$svg$Svg_Attributes$xChannelSelector = _elm_lang$virtual_dom$VirtualDom$attribute('xChannelSelector');
	var _elm_lang$svg$Svg_Attributes$x2 = _elm_lang$virtual_dom$VirtualDom$attribute('x2');
	var _elm_lang$svg$Svg_Attributes$x1 = _elm_lang$virtual_dom$VirtualDom$attribute('x1');
	var _elm_lang$svg$Svg_Attributes$xHeight = _elm_lang$virtual_dom$VirtualDom$attribute('x-height');
	var _elm_lang$svg$Svg_Attributes$x = _elm_lang$virtual_dom$VirtualDom$attribute('x');
	var _elm_lang$svg$Svg_Attributes$widths = _elm_lang$virtual_dom$VirtualDom$attribute('widths');
	var _elm_lang$svg$Svg_Attributes$width = _elm_lang$virtual_dom$VirtualDom$attribute('width');
	var _elm_lang$svg$Svg_Attributes$viewTarget = _elm_lang$virtual_dom$VirtualDom$attribute('viewTarget');
	var _elm_lang$svg$Svg_Attributes$viewBox = _elm_lang$virtual_dom$VirtualDom$attribute('viewBox');
	var _elm_lang$svg$Svg_Attributes$vertOriginY = _elm_lang$virtual_dom$VirtualDom$attribute('vert-origin-y');
	var _elm_lang$svg$Svg_Attributes$vertOriginX = _elm_lang$virtual_dom$VirtualDom$attribute('vert-origin-x');
	var _elm_lang$svg$Svg_Attributes$vertAdvY = _elm_lang$virtual_dom$VirtualDom$attribute('vert-adv-y');
	var _elm_lang$svg$Svg_Attributes$version = _elm_lang$virtual_dom$VirtualDom$attribute('version');
	var _elm_lang$svg$Svg_Attributes$values = _elm_lang$virtual_dom$VirtualDom$attribute('values');
	var _elm_lang$svg$Svg_Attributes$vMathematical = _elm_lang$virtual_dom$VirtualDom$attribute('v-mathematical');
	var _elm_lang$svg$Svg_Attributes$vIdeographic = _elm_lang$virtual_dom$VirtualDom$attribute('v-ideographic');
	var _elm_lang$svg$Svg_Attributes$vHanging = _elm_lang$virtual_dom$VirtualDom$attribute('v-hanging');
	var _elm_lang$svg$Svg_Attributes$vAlphabetic = _elm_lang$virtual_dom$VirtualDom$attribute('v-alphabetic');
	var _elm_lang$svg$Svg_Attributes$unitsPerEm = _elm_lang$virtual_dom$VirtualDom$attribute('units-per-em');
	var _elm_lang$svg$Svg_Attributes$unicodeRange = _elm_lang$virtual_dom$VirtualDom$attribute('unicode-range');
	var _elm_lang$svg$Svg_Attributes$unicode = _elm_lang$virtual_dom$VirtualDom$attribute('unicode');
	var _elm_lang$svg$Svg_Attributes$underlineThickness = _elm_lang$virtual_dom$VirtualDom$attribute('underline-thickness');
	var _elm_lang$svg$Svg_Attributes$underlinePosition = _elm_lang$virtual_dom$VirtualDom$attribute('underline-position');
	var _elm_lang$svg$Svg_Attributes$u2 = _elm_lang$virtual_dom$VirtualDom$attribute('u2');
	var _elm_lang$svg$Svg_Attributes$u1 = _elm_lang$virtual_dom$VirtualDom$attribute('u1');
	var _elm_lang$svg$Svg_Attributes$type$ = _elm_lang$virtual_dom$VirtualDom$attribute('type');
	var _elm_lang$svg$Svg_Attributes$transform = _elm_lang$virtual_dom$VirtualDom$attribute('transform');
	var _elm_lang$svg$Svg_Attributes$to = _elm_lang$virtual_dom$VirtualDom$attribute('to');
	var _elm_lang$svg$Svg_Attributes$title = _elm_lang$virtual_dom$VirtualDom$attribute('title');
	var _elm_lang$svg$Svg_Attributes$textLength = _elm_lang$virtual_dom$VirtualDom$attribute('textLength');
	var _elm_lang$svg$Svg_Attributes$targetY = _elm_lang$virtual_dom$VirtualDom$attribute('targetY');
	var _elm_lang$svg$Svg_Attributes$targetX = _elm_lang$virtual_dom$VirtualDom$attribute('targetX');
	var _elm_lang$svg$Svg_Attributes$target = _elm_lang$virtual_dom$VirtualDom$attribute('target');
	var _elm_lang$svg$Svg_Attributes$tableValues = _elm_lang$virtual_dom$VirtualDom$attribute('tableValues');
	var _elm_lang$svg$Svg_Attributes$systemLanguage = _elm_lang$virtual_dom$VirtualDom$attribute('systemLanguage');
	var _elm_lang$svg$Svg_Attributes$surfaceScale = _elm_lang$virtual_dom$VirtualDom$attribute('surfaceScale');
	var _elm_lang$svg$Svg_Attributes$style = _elm_lang$virtual_dom$VirtualDom$attribute('style');
	var _elm_lang$svg$Svg_Attributes$string = _elm_lang$virtual_dom$VirtualDom$attribute('string');
	var _elm_lang$svg$Svg_Attributes$strikethroughThickness = _elm_lang$virtual_dom$VirtualDom$attribute('strikethrough-thickness');
	var _elm_lang$svg$Svg_Attributes$strikethroughPosition = _elm_lang$virtual_dom$VirtualDom$attribute('strikethrough-position');
	var _elm_lang$svg$Svg_Attributes$stitchTiles = _elm_lang$virtual_dom$VirtualDom$attribute('stitchTiles');
	var _elm_lang$svg$Svg_Attributes$stemv = _elm_lang$virtual_dom$VirtualDom$attribute('stemv');
	var _elm_lang$svg$Svg_Attributes$stemh = _elm_lang$virtual_dom$VirtualDom$attribute('stemh');
	var _elm_lang$svg$Svg_Attributes$stdDeviation = _elm_lang$virtual_dom$VirtualDom$attribute('stdDeviation');
	var _elm_lang$svg$Svg_Attributes$startOffset = _elm_lang$virtual_dom$VirtualDom$attribute('startOffset');
	var _elm_lang$svg$Svg_Attributes$spreadMethod = _elm_lang$virtual_dom$VirtualDom$attribute('spreadMethod');
	var _elm_lang$svg$Svg_Attributes$speed = _elm_lang$virtual_dom$VirtualDom$attribute('speed');
	var _elm_lang$svg$Svg_Attributes$specularExponent = _elm_lang$virtual_dom$VirtualDom$attribute('specularExponent');
	var _elm_lang$svg$Svg_Attributes$specularConstant = _elm_lang$virtual_dom$VirtualDom$attribute('specularConstant');
	var _elm_lang$svg$Svg_Attributes$spacing = _elm_lang$virtual_dom$VirtualDom$attribute('spacing');
	var _elm_lang$svg$Svg_Attributes$slope = _elm_lang$virtual_dom$VirtualDom$attribute('slope');
	var _elm_lang$svg$Svg_Attributes$seed = _elm_lang$virtual_dom$VirtualDom$attribute('seed');
	var _elm_lang$svg$Svg_Attributes$scale = _elm_lang$virtual_dom$VirtualDom$attribute('scale');
	var _elm_lang$svg$Svg_Attributes$ry = _elm_lang$virtual_dom$VirtualDom$attribute('ry');
	var _elm_lang$svg$Svg_Attributes$rx = _elm_lang$virtual_dom$VirtualDom$attribute('rx');
	var _elm_lang$svg$Svg_Attributes$rotate = _elm_lang$virtual_dom$VirtualDom$attribute('rotate');
	var _elm_lang$svg$Svg_Attributes$result = _elm_lang$virtual_dom$VirtualDom$attribute('result');
	var _elm_lang$svg$Svg_Attributes$restart = _elm_lang$virtual_dom$VirtualDom$attribute('restart');
	var _elm_lang$svg$Svg_Attributes$requiredFeatures = _elm_lang$virtual_dom$VirtualDom$attribute('requiredFeatures');
	var _elm_lang$svg$Svg_Attributes$requiredExtensions = _elm_lang$virtual_dom$VirtualDom$attribute('requiredExtensions');
	var _elm_lang$svg$Svg_Attributes$repeatDur = _elm_lang$virtual_dom$VirtualDom$attribute('repeatDur');
	var _elm_lang$svg$Svg_Attributes$repeatCount = _elm_lang$virtual_dom$VirtualDom$attribute('repeatCount');
	var _elm_lang$svg$Svg_Attributes$renderingIntent = _elm_lang$virtual_dom$VirtualDom$attribute('rendering-intent');
	var _elm_lang$svg$Svg_Attributes$refY = _elm_lang$virtual_dom$VirtualDom$attribute('refY');
	var _elm_lang$svg$Svg_Attributes$refX = _elm_lang$virtual_dom$VirtualDom$attribute('refX');
	var _elm_lang$svg$Svg_Attributes$radius = _elm_lang$virtual_dom$VirtualDom$attribute('radius');
	var _elm_lang$svg$Svg_Attributes$r = _elm_lang$virtual_dom$VirtualDom$attribute('r');
	var _elm_lang$svg$Svg_Attributes$primitiveUnits = _elm_lang$virtual_dom$VirtualDom$attribute('primitiveUnits');
	var _elm_lang$svg$Svg_Attributes$preserveAspectRatio = _elm_lang$virtual_dom$VirtualDom$attribute('preserveAspectRatio');
	var _elm_lang$svg$Svg_Attributes$preserveAlpha = _elm_lang$virtual_dom$VirtualDom$attribute('preserveAlpha');
	var _elm_lang$svg$Svg_Attributes$pointsAtZ = _elm_lang$virtual_dom$VirtualDom$attribute('pointsAtZ');
	var _elm_lang$svg$Svg_Attributes$pointsAtY = _elm_lang$virtual_dom$VirtualDom$attribute('pointsAtY');
	var _elm_lang$svg$Svg_Attributes$pointsAtX = _elm_lang$virtual_dom$VirtualDom$attribute('pointsAtX');
	var _elm_lang$svg$Svg_Attributes$points = _elm_lang$virtual_dom$VirtualDom$attribute('points');
	var _elm_lang$svg$Svg_Attributes$pointOrder = _elm_lang$virtual_dom$VirtualDom$attribute('point-order');
	var _elm_lang$svg$Svg_Attributes$patternUnits = _elm_lang$virtual_dom$VirtualDom$attribute('patternUnits');
	var _elm_lang$svg$Svg_Attributes$patternTransform = _elm_lang$virtual_dom$VirtualDom$attribute('patternTransform');
	var _elm_lang$svg$Svg_Attributes$patternContentUnits = _elm_lang$virtual_dom$VirtualDom$attribute('patternContentUnits');
	var _elm_lang$svg$Svg_Attributes$pathLength = _elm_lang$virtual_dom$VirtualDom$attribute('pathLength');
	var _elm_lang$svg$Svg_Attributes$path = _elm_lang$virtual_dom$VirtualDom$attribute('path');
	var _elm_lang$svg$Svg_Attributes$panose1 = _elm_lang$virtual_dom$VirtualDom$attribute('panose-1');
	var _elm_lang$svg$Svg_Attributes$overlineThickness = _elm_lang$virtual_dom$VirtualDom$attribute('overline-thickness');
	var _elm_lang$svg$Svg_Attributes$overlinePosition = _elm_lang$virtual_dom$VirtualDom$attribute('overline-position');
	var _elm_lang$svg$Svg_Attributes$origin = _elm_lang$virtual_dom$VirtualDom$attribute('origin');
	var _elm_lang$svg$Svg_Attributes$orientation = _elm_lang$virtual_dom$VirtualDom$attribute('orientation');
	var _elm_lang$svg$Svg_Attributes$orient = _elm_lang$virtual_dom$VirtualDom$attribute('orient');
	var _elm_lang$svg$Svg_Attributes$order = _elm_lang$virtual_dom$VirtualDom$attribute('order');
	var _elm_lang$svg$Svg_Attributes$operator = _elm_lang$virtual_dom$VirtualDom$attribute('operator');
	var _elm_lang$svg$Svg_Attributes$offset = _elm_lang$virtual_dom$VirtualDom$attribute('offset');
	var _elm_lang$svg$Svg_Attributes$numOctaves = _elm_lang$virtual_dom$VirtualDom$attribute('numOctaves');
	var _elm_lang$svg$Svg_Attributes$name = _elm_lang$virtual_dom$VirtualDom$attribute('name');
	var _elm_lang$svg$Svg_Attributes$mode = _elm_lang$virtual_dom$VirtualDom$attribute('mode');
	var _elm_lang$svg$Svg_Attributes$min = _elm_lang$virtual_dom$VirtualDom$attribute('min');
	var _elm_lang$svg$Svg_Attributes$method = _elm_lang$virtual_dom$VirtualDom$attribute('method');
	var _elm_lang$svg$Svg_Attributes$media = _elm_lang$virtual_dom$VirtualDom$attribute('media');
	var _elm_lang$svg$Svg_Attributes$max = _elm_lang$virtual_dom$VirtualDom$attribute('max');
	var _elm_lang$svg$Svg_Attributes$mathematical = _elm_lang$virtual_dom$VirtualDom$attribute('mathematical');
	var _elm_lang$svg$Svg_Attributes$maskUnits = _elm_lang$virtual_dom$VirtualDom$attribute('maskUnits');
	var _elm_lang$svg$Svg_Attributes$maskContentUnits = _elm_lang$virtual_dom$VirtualDom$attribute('maskContentUnits');
	var _elm_lang$svg$Svg_Attributes$markerWidth = _elm_lang$virtual_dom$VirtualDom$attribute('markerWidth');
	var _elm_lang$svg$Svg_Attributes$markerUnits = _elm_lang$virtual_dom$VirtualDom$attribute('markerUnits');
	var _elm_lang$svg$Svg_Attributes$markerHeight = _elm_lang$virtual_dom$VirtualDom$attribute('markerHeight');
	var _elm_lang$svg$Svg_Attributes$local = _elm_lang$virtual_dom$VirtualDom$attribute('local');
	var _elm_lang$svg$Svg_Attributes$limitingConeAngle = _elm_lang$virtual_dom$VirtualDom$attribute('limitingConeAngle');
	var _elm_lang$svg$Svg_Attributes$lengthAdjust = _elm_lang$virtual_dom$VirtualDom$attribute('lengthAdjust');
	var _elm_lang$svg$Svg_Attributes$lang = _elm_lang$virtual_dom$VirtualDom$attribute('lang');
	var _elm_lang$svg$Svg_Attributes$keyTimes = _elm_lang$virtual_dom$VirtualDom$attribute('keyTimes');
	var _elm_lang$svg$Svg_Attributes$keySplines = _elm_lang$virtual_dom$VirtualDom$attribute('keySplines');
	var _elm_lang$svg$Svg_Attributes$keyPoints = _elm_lang$virtual_dom$VirtualDom$attribute('keyPoints');
	var _elm_lang$svg$Svg_Attributes$kernelUnitLength = _elm_lang$virtual_dom$VirtualDom$attribute('kernelUnitLength');
	var _elm_lang$svg$Svg_Attributes$kernelMatrix = _elm_lang$virtual_dom$VirtualDom$attribute('kernelMatrix');
	var _elm_lang$svg$Svg_Attributes$k4 = _elm_lang$virtual_dom$VirtualDom$attribute('k4');
	var _elm_lang$svg$Svg_Attributes$k3 = _elm_lang$virtual_dom$VirtualDom$attribute('k3');
	var _elm_lang$svg$Svg_Attributes$k2 = _elm_lang$virtual_dom$VirtualDom$attribute('k2');
	var _elm_lang$svg$Svg_Attributes$k1 = _elm_lang$virtual_dom$VirtualDom$attribute('k1');
	var _elm_lang$svg$Svg_Attributes$k = _elm_lang$virtual_dom$VirtualDom$attribute('k');
	var _elm_lang$svg$Svg_Attributes$intercept = _elm_lang$virtual_dom$VirtualDom$attribute('intercept');
	var _elm_lang$svg$Svg_Attributes$in2 = _elm_lang$virtual_dom$VirtualDom$attribute('in2');
	var _elm_lang$svg$Svg_Attributes$in$ = _elm_lang$virtual_dom$VirtualDom$attribute('in');
	var _elm_lang$svg$Svg_Attributes$ideographic = _elm_lang$virtual_dom$VirtualDom$attribute('ideographic');
	var _elm_lang$svg$Svg_Attributes$id = _elm_lang$virtual_dom$VirtualDom$attribute('id');
	var _elm_lang$svg$Svg_Attributes$horizOriginY = _elm_lang$virtual_dom$VirtualDom$attribute('horiz-origin-y');
	var _elm_lang$svg$Svg_Attributes$horizOriginX = _elm_lang$virtual_dom$VirtualDom$attribute('horiz-origin-x');
	var _elm_lang$svg$Svg_Attributes$horizAdvX = _elm_lang$virtual_dom$VirtualDom$attribute('horiz-adv-x');
	var _elm_lang$svg$Svg_Attributes$height = _elm_lang$virtual_dom$VirtualDom$attribute('height');
	var _elm_lang$svg$Svg_Attributes$hanging = _elm_lang$virtual_dom$VirtualDom$attribute('hanging');
	var _elm_lang$svg$Svg_Attributes$gradientUnits = _elm_lang$virtual_dom$VirtualDom$attribute('gradientUnits');
	var _elm_lang$svg$Svg_Attributes$gradientTransform = _elm_lang$virtual_dom$VirtualDom$attribute('gradientTransform');
	var _elm_lang$svg$Svg_Attributes$glyphRef = _elm_lang$virtual_dom$VirtualDom$attribute('glyphRef');
	var _elm_lang$svg$Svg_Attributes$glyphName = _elm_lang$virtual_dom$VirtualDom$attribute('glyph-name');
	var _elm_lang$svg$Svg_Attributes$g2 = _elm_lang$virtual_dom$VirtualDom$attribute('g2');
	var _elm_lang$svg$Svg_Attributes$g1 = _elm_lang$virtual_dom$VirtualDom$attribute('g1');
	var _elm_lang$svg$Svg_Attributes$fy = _elm_lang$virtual_dom$VirtualDom$attribute('fy');
	var _elm_lang$svg$Svg_Attributes$fx = _elm_lang$virtual_dom$VirtualDom$attribute('fx');
	var _elm_lang$svg$Svg_Attributes$from = _elm_lang$virtual_dom$VirtualDom$attribute('from');
	var _elm_lang$svg$Svg_Attributes$format = _elm_lang$virtual_dom$VirtualDom$attribute('format');
	var _elm_lang$svg$Svg_Attributes$filterUnits = _elm_lang$virtual_dom$VirtualDom$attribute('filterUnits');
	var _elm_lang$svg$Svg_Attributes$filterRes = _elm_lang$virtual_dom$VirtualDom$attribute('filterRes');
	var _elm_lang$svg$Svg_Attributes$externalResourcesRequired = _elm_lang$virtual_dom$VirtualDom$attribute('externalResourcesRequired');
	var _elm_lang$svg$Svg_Attributes$exponent = _elm_lang$virtual_dom$VirtualDom$attribute('exponent');
	var _elm_lang$svg$Svg_Attributes$end = _elm_lang$virtual_dom$VirtualDom$attribute('end');
	var _elm_lang$svg$Svg_Attributes$elevation = _elm_lang$virtual_dom$VirtualDom$attribute('elevation');
	var _elm_lang$svg$Svg_Attributes$edgeMode = _elm_lang$virtual_dom$VirtualDom$attribute('edgeMode');
	var _elm_lang$svg$Svg_Attributes$dy = _elm_lang$virtual_dom$VirtualDom$attribute('dy');
	var _elm_lang$svg$Svg_Attributes$dx = _elm_lang$virtual_dom$VirtualDom$attribute('dx');
	var _elm_lang$svg$Svg_Attributes$dur = _elm_lang$virtual_dom$VirtualDom$attribute('dur');
	var _elm_lang$svg$Svg_Attributes$divisor = _elm_lang$virtual_dom$VirtualDom$attribute('divisor');
	var _elm_lang$svg$Svg_Attributes$diffuseConstant = _elm_lang$virtual_dom$VirtualDom$attribute('diffuseConstant');
	var _elm_lang$svg$Svg_Attributes$descent = _elm_lang$virtual_dom$VirtualDom$attribute('descent');
	var _elm_lang$svg$Svg_Attributes$decelerate = _elm_lang$virtual_dom$VirtualDom$attribute('decelerate');
	var _elm_lang$svg$Svg_Attributes$d = _elm_lang$virtual_dom$VirtualDom$attribute('d');
	var _elm_lang$svg$Svg_Attributes$cy = _elm_lang$virtual_dom$VirtualDom$attribute('cy');
	var _elm_lang$svg$Svg_Attributes$cx = _elm_lang$virtual_dom$VirtualDom$attribute('cx');
	var _elm_lang$svg$Svg_Attributes$contentStyleType = _elm_lang$virtual_dom$VirtualDom$attribute('contentStyleType');
	var _elm_lang$svg$Svg_Attributes$contentScriptType = _elm_lang$virtual_dom$VirtualDom$attribute('contentScriptType');
	var _elm_lang$svg$Svg_Attributes$clipPathUnits = _elm_lang$virtual_dom$VirtualDom$attribute('clipPathUnits');
	var _elm_lang$svg$Svg_Attributes$class = _elm_lang$virtual_dom$VirtualDom$attribute('class');
	var _elm_lang$svg$Svg_Attributes$capHeight = _elm_lang$virtual_dom$VirtualDom$attribute('cap-height');
	var _elm_lang$svg$Svg_Attributes$calcMode = _elm_lang$virtual_dom$VirtualDom$attribute('calcMode');
	var _elm_lang$svg$Svg_Attributes$by = _elm_lang$virtual_dom$VirtualDom$attribute('by');
	var _elm_lang$svg$Svg_Attributes$bias = _elm_lang$virtual_dom$VirtualDom$attribute('bias');
	var _elm_lang$svg$Svg_Attributes$begin = _elm_lang$virtual_dom$VirtualDom$attribute('begin');
	var _elm_lang$svg$Svg_Attributes$bbox = _elm_lang$virtual_dom$VirtualDom$attribute('bbox');
	var _elm_lang$svg$Svg_Attributes$baseProfile = _elm_lang$virtual_dom$VirtualDom$attribute('baseProfile');
	var _elm_lang$svg$Svg_Attributes$baseFrequency = _elm_lang$virtual_dom$VirtualDom$attribute('baseFrequency');
	var _elm_lang$svg$Svg_Attributes$azimuth = _elm_lang$virtual_dom$VirtualDom$attribute('azimuth');
	var _elm_lang$svg$Svg_Attributes$autoReverse = _elm_lang$virtual_dom$VirtualDom$attribute('autoReverse');
	var _elm_lang$svg$Svg_Attributes$attributeType = _elm_lang$virtual_dom$VirtualDom$attribute('attributeType');
	var _elm_lang$svg$Svg_Attributes$attributeName = _elm_lang$virtual_dom$VirtualDom$attribute('attributeName');
	var _elm_lang$svg$Svg_Attributes$ascent = _elm_lang$virtual_dom$VirtualDom$attribute('ascent');
	var _elm_lang$svg$Svg_Attributes$arabicForm = _elm_lang$virtual_dom$VirtualDom$attribute('arabic-form');
	var _elm_lang$svg$Svg_Attributes$amplitude = _elm_lang$virtual_dom$VirtualDom$attribute('amplitude');
	var _elm_lang$svg$Svg_Attributes$allowReorder = _elm_lang$virtual_dom$VirtualDom$attribute('allowReorder');
	var _elm_lang$svg$Svg_Attributes$alphabetic = _elm_lang$virtual_dom$VirtualDom$attribute('alphabetic');
	var _elm_lang$svg$Svg_Attributes$additive = _elm_lang$virtual_dom$VirtualDom$attribute('additive');
	var _elm_lang$svg$Svg_Attributes$accumulate = _elm_lang$virtual_dom$VirtualDom$attribute('accumulate');
	var _elm_lang$svg$Svg_Attributes$accelerate = _elm_lang$virtual_dom$VirtualDom$attribute('accelerate');
	var _elm_lang$svg$Svg_Attributes$accentHeight = _elm_lang$virtual_dom$VirtualDom$attribute('accent-height');
	
	var _elm_lang$svg$Svg_Events$on = _elm_lang$virtual_dom$VirtualDom$on;
	var _elm_lang$svg$Svg_Events$simpleOn = F2(
		function (name, msg) {
			return A2(
				_elm_lang$svg$Svg_Events$on,
				name,
				_elm_lang$core$Json_Decode$succeed(msg));
		});
	var _elm_lang$svg$Svg_Events$onBegin = _elm_lang$svg$Svg_Events$simpleOn('begin');
	var _elm_lang$svg$Svg_Events$onEnd = _elm_lang$svg$Svg_Events$simpleOn('end');
	var _elm_lang$svg$Svg_Events$onRepeat = _elm_lang$svg$Svg_Events$simpleOn('repeat');
	var _elm_lang$svg$Svg_Events$onAbort = _elm_lang$svg$Svg_Events$simpleOn('abort');
	var _elm_lang$svg$Svg_Events$onError = _elm_lang$svg$Svg_Events$simpleOn('error');
	var _elm_lang$svg$Svg_Events$onResize = _elm_lang$svg$Svg_Events$simpleOn('resize');
	var _elm_lang$svg$Svg_Events$onScroll = _elm_lang$svg$Svg_Events$simpleOn('scroll');
	var _elm_lang$svg$Svg_Events$onLoad = _elm_lang$svg$Svg_Events$simpleOn('load');
	var _elm_lang$svg$Svg_Events$onUnload = _elm_lang$svg$Svg_Events$simpleOn('unload');
	var _elm_lang$svg$Svg_Events$onZoom = _elm_lang$svg$Svg_Events$simpleOn('zoom');
	var _elm_lang$svg$Svg_Events$onActivate = _elm_lang$svg$Svg_Events$simpleOn('activate');
	var _elm_lang$svg$Svg_Events$onClick = _elm_lang$svg$Svg_Events$simpleOn('click');
	var _elm_lang$svg$Svg_Events$onFocusIn = _elm_lang$svg$Svg_Events$simpleOn('focusin');
	var _elm_lang$svg$Svg_Events$onFocusOut = _elm_lang$svg$Svg_Events$simpleOn('focusout');
	var _elm_lang$svg$Svg_Events$onMouseDown = _elm_lang$svg$Svg_Events$simpleOn('mousedown');
	var _elm_lang$svg$Svg_Events$onMouseMove = _elm_lang$svg$Svg_Events$simpleOn('mousemove');
	var _elm_lang$svg$Svg_Events$onMouseOut = _elm_lang$svg$Svg_Events$simpleOn('mouseout');
	var _elm_lang$svg$Svg_Events$onMouseOver = _elm_lang$svg$Svg_Events$simpleOn('mouseover');
	var _elm_lang$svg$Svg_Events$onMouseUp = _elm_lang$svg$Svg_Events$simpleOn('mouseup');
	
	var _benansell$elm_webpack_seed$LogoAnimation$_p0 = _benansell$elm_webpack_seed$LogoAnimationCss$logoAnimationNamespace;
	var _benansell$elm_webpack_seed$LogoAnimation$class = _benansell$elm_webpack_seed$LogoAnimation$_p0.$class;
	var _benansell$elm_webpack_seed$LogoAnimation$pointToString = function (p) {
		return A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(p.x),
			A2(
				_elm_lang$core$Basics_ops['++'],
				',',
				_elm_lang$core$Basics$toString(p.y)));
	};
	var _benansell$elm_webpack_seed$LogoAnimation$pointsToString = function (points) {
		return A2(
			_elm_lang$core$String$join,
			' ',
			A2(_elm_lang$core$List$map, _benansell$elm_webpack_seed$LogoAnimation$pointToString, points));
	};
	var _benansell$elm_webpack_seed$LogoAnimation$cssToString = function (_p1) {
		var _p2 = _p1;
		return _p2.value;
	};
	var _benansell$elm_webpack_seed$LogoAnimation$actionToString = function (action) {
		var _p3 = action;
		switch (_p3.ctor) {
			case 'None':
				return _elm_lang$core$Maybe$Nothing;
			case 'Hinge':
				return _elm_lang$core$Maybe$Just('Hinge');
			case 'MoveDown':
				return _elm_lang$core$Maybe$Just('Move Down');
			case 'MoveRight':
				return _elm_lang$core$Maybe$Just('Move Right');
			case 'Rotate':
				return _elm_lang$core$Maybe$Just('Rotate');
			case 'Shear':
				return _elm_lang$core$Maybe$Just('Shear');
			case 'Shrink':
				return _elm_lang$core$Maybe$Just('Shrink');
			default:
				return _elm_lang$core$Maybe$Just('Shake');
		}
	};
	var _benansell$elm_webpack_seed$LogoAnimation$shapeToViewPoints = function (shape) {
		return A2(
			_elm_lang$core$List$map,
			_benansell$elm_geometric_transformation$Transformer2D$apply(shape.currentTransform),
			shape.points);
	};
	var _benansell$elm_webpack_seed$LogoAnimation$shapeToPolygon = function (shape) {
		return A2(
			_elm_lang$svg$Svg$polygon,
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$svg$Svg_Attributes$fill(
					_benansell$elm_webpack_seed$LogoAnimation$cssToString(shape.color)),
					_elm_lang$svg$Svg_Attributes$points(
					_benansell$elm_webpack_seed$LogoAnimation$pointsToString(
						_benansell$elm_webpack_seed$LogoAnimation$shapeToViewPoints(shape))),
					_elm_lang$svg$Svg_Events$onClick(shape.action)
				]),
			_elm_lang$core$Native_List.fromArray(
				[]));
	};
	var _benansell$elm_webpack_seed$LogoAnimation$view = function (model) {
		return A2(
			_elm_lang$html$Html$div,
			_elm_lang$core$Native_List.fromArray(
				[
					_benansell$elm_webpack_seed$LogoAnimation$class(
					_elm_lang$core$Native_List.fromArray(
						[_benansell$elm_webpack_seed$LogoAnimationCss$Container]))
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$svg$Svg$svg,
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$svg$Svg_Attributes$version('1.1'),
							_elm_lang$svg$Svg_Attributes$viewBox('100 100 523.141 522.95'),
							_elm_lang$svg$Svg_Attributes$x(
							_benansell$elm_webpack_seed$LogoAnimation$cssToString(
								_rtfeldman$elm_css$Css$px(0))),
							_elm_lang$svg$Svg_Attributes$y(
							_benansell$elm_webpack_seed$LogoAnimation$cssToString(
								_rtfeldman$elm_css$Css$px(0)))
						]),
					_elm_lang$core$Native_List.fromArray(
						[
							A2(
							_elm_lang$svg$Svg$g,
							_elm_lang$core$Native_List.fromArray(
								[]),
							A2(_elm_lang$core$List$map, _benansell$elm_webpack_seed$LogoAnimation$shapeToPolygon, model.shapes))
						]))
				]));
	};
	var _benansell$elm_webpack_seed$LogoAnimation$firstTransform = function (transforms) {
		var head = _elm_lang$core$List$head(transforms);
		var _p4 = head;
		if (_p4.ctor === 'Nothing') {
			return _benansell$elm_geometric_transformation$Transformer2D$identity(
				_benansell$elm_geometric_transformation$Transformer2D$toPoint(
					{ctor: '_Tuple2', _0: 0, _1: 0}));
		} else {
			return _p4._0;
		}
	};
	var _benansell$elm_webpack_seed$LogoAnimation$transformsAtTime = F3(
		function (path, endTime, time) {
			var _p5 = path;
			if (_p5.ctor === 'Nothing') {
				return _elm_lang$core$Native_List.fromArray(
					[]);
			} else {
				return A3(
					_benansell$elm_webpack_seed$ShapePath$pathToTransformations,
					_p5._0,
					A2(_elm_lang$core$Maybe$withDefault, 0, endTime),
					time);
			}
		});
	var _benansell$elm_webpack_seed$LogoAnimation$updateShape = F2(
		function (time, shape) {
			var transforms = A3(_benansell$elm_webpack_seed$LogoAnimation$transformsAtTime, shape.path, shape.actionEnd, time);
			var first = _benansell$elm_webpack_seed$LogoAnimation$firstTransform(transforms);
			var transformsWithInitial = A2(
				_elm_lang$core$Basics_ops['++'],
				A2(_elm_lang$core$List$drop, 1, transforms),
				_elm_lang$core$Native_List.fromArray(
					[shape.initialTransform]));
			return _elm_lang$core$Native_Utils.update(
				shape,
				{
					currentTransform: A3(_elm_lang$core$List$foldl, _benansell$elm_geometric_transformation$Transformer2D$combine, first, transformsWithInitial)
				});
		});
	var _benansell$elm_webpack_seed$LogoAnimation$calculateEndTime = F2(
		function (path, time) {
			var _p6 = path;
			if (_p6.ctor === 'Nothing') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				return _elm_lang$core$Maybe$Just(time + _p6._0.duration);
			}
		});
	var _benansell$elm_webpack_seed$LogoAnimation$actionToPath = function (action) {
		var _p7 = action;
		switch (_p7.ctor) {
			case 'None':
				return _elm_lang$core$Maybe$Nothing;
			case 'Hinge':
				return _elm_lang$core$Maybe$Just(_benansell$elm_webpack_seed$ShapePath$hinge);
			case 'MoveDown':
				return _elm_lang$core$Maybe$Just(_benansell$elm_webpack_seed$ShapePath$moveDown);
			case 'MoveRight':
				return _elm_lang$core$Maybe$Just(_benansell$elm_webpack_seed$ShapePath$moveRight);
			case 'Rotate':
				return _elm_lang$core$Maybe$Just(_benansell$elm_webpack_seed$ShapePath$rotate);
			case 'Shear':
				return _elm_lang$core$Maybe$Just(_benansell$elm_webpack_seed$ShapePath$shear);
			case 'Shrink':
				return _elm_lang$core$Maybe$Just(_benansell$elm_webpack_seed$ShapePath$shrink);
			default:
				return _elm_lang$core$Maybe$Just(_benansell$elm_webpack_seed$ShapePath$wobble);
		}
	};
	var _benansell$elm_webpack_seed$LogoAnimation$createShape = F4(
		function (action, color, origin, coordinates) {
			var originPoint = _benansell$elm_geometric_transformation$Transformer2D$toPoint(origin);
			var initialTransform = _benansell$elm_geometric_transformation$Transformer2D$identity(originPoint);
			return {
				action: action,
				actionEnd: _elm_lang$core$Maybe$Nothing,
				actionStart: _elm_lang$core$Maybe$Nothing,
				color: color,
				origin: originPoint,
				points: A2(_elm_lang$core$List$map, _benansell$elm_geometric_transformation$Transformer2D$toPoint, coordinates),
				initialTransform: initialTransform,
				currentTransform: initialTransform,
				path: _benansell$elm_webpack_seed$LogoAnimation$actionToPath(action)
			};
		});
	var _benansell$elm_webpack_seed$LogoAnimation$Shape = F9(
		function (a, b, c, d, e, f, g, h, i) {
			return {action: a, actionEnd: b, actionStart: c, color: d, origin: e, points: f, initialTransform: g, currentTransform: h, path: i};
		});
	var _benansell$elm_webpack_seed$LogoAnimation$Model = F2(
		function (a, b) {
			return {action: a, shapes: b};
		});
	var _benansell$elm_webpack_seed$LogoAnimation$Wobble = {ctor: 'Wobble'};
	var _benansell$elm_webpack_seed$LogoAnimation$centerTriangle = A4(
		_benansell$elm_webpack_seed$LogoAnimation$createShape,
		_benansell$elm_webpack_seed$LogoAnimation$Wobble,
		_benansell$elm_webpack_seed$LogoAnimationCss$yellow,
		{ctor: '_Tuple2', _0: 361.649, _1: 306.205},
		_elm_lang$core$Native_List.fromArray(
			[
				{ctor: '_Tuple2', _0: 0, _1: 46.577},
				{ctor: '_Tuple2', _0: 69.865, _1: -23.289},
				{ctor: '_Tuple2', _0: -69.866, _1: -23.289}
			]));
	var _benansell$elm_webpack_seed$LogoAnimation$Shrink = {ctor: 'Shrink'};
	var _benansell$elm_webpack_seed$LogoAnimation$centerSquare = A4(
		_benansell$elm_webpack_seed$LogoAnimation$createShape,
		_benansell$elm_webpack_seed$LogoAnimation$Shrink,
		_benansell$elm_webpack_seed$LogoAnimationCss$green,
		{ctor: '_Tuple2', _0: 446.9075, _1: 361.3065},
		_elm_lang$core$Native_List.fromArray(
			[
				{ctor: '_Tuple2', _0: -76.3905, _1: 0},
				{ctor: '_Tuple2', _0: 0, _1: 76.3905},
				{ctor: '_Tuple2', _0: 76.3905, _1: 0},
				{ctor: '_Tuple2', _0: 0, _1: -76.3905}
			]));
	var _benansell$elm_webpack_seed$LogoAnimation$Shear = {ctor: 'Shear'};
	var _benansell$elm_webpack_seed$LogoAnimation$topParallelogram = A4(
		_benansell$elm_webpack_seed$LogoAnimation$createShape,
		_benansell$elm_webpack_seed$LogoAnimation$Shear,
		_benansell$elm_webpack_seed$LogoAnimationCss$green,
		{ctor: '_Tuple2', _0: 320.54, _1: 235.188},
		_elm_lang$core$Native_List.fromArray(
			[
				{ctor: '_Tuple2', _0: -111.673, _1: -35.188},
				{ctor: '_Tuple2', _0: -41.299, _1: 35.187},
				{ctor: '_Tuple2', _0: 111.673, _1: 35.187},
				{ctor: '_Tuple2', _0: 41.298, _1: -35.188}
			]));
	var _benansell$elm_webpack_seed$LogoAnimation$Rotate = {ctor: 'Rotate'};
	var _benansell$elm_webpack_seed$LogoAnimation$topRightTriangle = A4(
		_benansell$elm_webpack_seed$LogoAnimation$createShape,
		_benansell$elm_webpack_seed$LogoAnimation$Rotate,
		_benansell$elm_webpack_seed$LogoAnimationCss$blue,
		{ctor: '_Tuple2', _0: 475.39, _1: 247.908},
		_elm_lang$core$Native_List.fromArray(
			[
				{ctor: '_Tuple2', _0: 47.908, _1: 95.816},
				{ctor: '_Tuple2', _0: 47.908, _1: -47.908},
				{ctor: '_Tuple2', _0: -95.817, _1: -47.908}
			]));
	var _benansell$elm_webpack_seed$LogoAnimation$MoveRight = {ctor: 'MoveRight'};
	var _benansell$elm_webpack_seed$LogoAnimation$leftBigTriangle = A4(
		_benansell$elm_webpack_seed$LogoAnimation$createShape,
		_benansell$elm_webpack_seed$LogoAnimation$MoveRight,
		_benansell$elm_webpack_seed$LogoAnimationCss$blueGray,
		{ctor: '_Tuple2', _0: 250.927, _1: 361.649},
		_elm_lang$core$Native_List.fromArray(
			[
				{ctor: '_Tuple2', _0: 101.854, _1: 0},
				{ctor: '_Tuple2', _0: -50.927, _1: -152.781},
				{ctor: '_Tuple2', _0: -50.927, _1: 152.783}
			]));
	var _benansell$elm_webpack_seed$LogoAnimation$MoveDown = {ctor: 'MoveDown'};
	var _benansell$elm_webpack_seed$LogoAnimation$bottomBigTriangle = A4(
		_benansell$elm_webpack_seed$LogoAnimation$createShape,
		_benansell$elm_webpack_seed$LogoAnimation$MoveDown,
		_benansell$elm_webpack_seed$LogoAnimationCss$blue,
		{ctor: '_Tuple2', _0: 361.649, _1: 472.371},
		_elm_lang$core$Native_List.fromArray(
			[
				{ctor: '_Tuple2', _0: 0, _1: -101.854},
				{ctor: '_Tuple2', _0: -152.78, _1: 50.927},
				{ctor: '_Tuple2', _0: 152.781, _1: 50.927}
			]));
	var _benansell$elm_webpack_seed$LogoAnimation$Hinge = {ctor: 'Hinge'};
	var _benansell$elm_webpack_seed$LogoAnimation$bottomRightTriangle = A4(
		_benansell$elm_webpack_seed$LogoAnimation$createShape,
		_benansell$elm_webpack_seed$LogoAnimation$Hinge,
		_benansell$elm_webpack_seed$LogoAnimationCss$yellow,
		{ctor: '_Tuple2', _0: 523.298, _1: 514.432},
		_elm_lang$core$Native_List.fromArray(
			[
				{ctor: '_Tuple2', _0: -67.776, _1: -67.777},
				{ctor: '_Tuple2', _0: 0, _1: 0},
				{ctor: '_Tuple2', _0: 0, _1: -135.553}
			]));
	var _benansell$elm_webpack_seed$LogoAnimation$None = {ctor: 'None'};
	var _benansell$elm_webpack_seed$LogoAnimation$init = {
		action: _benansell$elm_webpack_seed$LogoAnimation$None,
		shapes: _elm_lang$core$Native_List.fromArray(
			[_benansell$elm_webpack_seed$LogoAnimation$bottomBigTriangle, _benansell$elm_webpack_seed$LogoAnimation$bottomRightTriangle, _benansell$elm_webpack_seed$LogoAnimation$centerSquare, _benansell$elm_webpack_seed$LogoAnimation$centerTriangle, _benansell$elm_webpack_seed$LogoAnimation$leftBigTriangle, _benansell$elm_webpack_seed$LogoAnimation$topParallelogram, _benansell$elm_webpack_seed$LogoAnimation$topRightTriangle])
	};
	var _benansell$elm_webpack_seed$LogoAnimation$update = F2(
		function (newAction, model) {
			return _elm_lang$core$Native_Utils.eq(newAction, _benansell$elm_webpack_seed$LogoAnimation$None) ? model : _elm_lang$core$Native_Utils.update(
				model,
				{action: newAction});
		});
	var _benansell$elm_webpack_seed$LogoAnimation$tick = F2(
		function (time, model) {
			return _elm_lang$core$Native_Utils.update(
				model,
				{
					action: _benansell$elm_webpack_seed$LogoAnimation$None,
					shapes: A2(
						_elm_lang$core$List$map,
						function (s) {
							return (_elm_lang$core$Native_Utils.cmp(
								time,
								A2(_elm_lang$core$Maybe$withDefault, 0, s.actionEnd)) < 0) ? A2(_benansell$elm_webpack_seed$LogoAnimation$updateShape, time, s) : (((!_elm_lang$core$Native_Utils.eq(s.action, _benansell$elm_webpack_seed$LogoAnimation$None)) && _elm_lang$core$Native_Utils.eq(s.action, model.action)) ? A2(
								_benansell$elm_webpack_seed$LogoAnimation$updateShape,
								time,
								_elm_lang$core$Native_Utils.update(
									s,
									{
										actionStart: _elm_lang$core$Maybe$Just(time),
										actionEnd: A2(_benansell$elm_webpack_seed$LogoAnimation$calculateEndTime, s.path, time)
									})) : ((!_elm_lang$core$Native_Utils.eq(_elm_lang$core$Maybe$Nothing, s.actionEnd)) ? _elm_lang$core$Native_Utils.update(
								s,
								{actionStart: _elm_lang$core$Maybe$Nothing, actionEnd: _elm_lang$core$Maybe$Nothing, currentTransform: s.initialTransform}) : s));
						},
						model.shapes)
				});
		});
	
	var _elm_lang$animation_frame$Native_AnimationFrame = function()
	{
	
	var hasStartTime =
		window.performance &&
		window.performance.timing &&
		window.performance.timing.navigationStart;
	
	var navStart = hasStartTime
		? window.performance.timing.navigationStart
		: Date.now();
	
	var rAF = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var id = requestAnimationFrame(function(time) {
			var timeNow = time
				? (time > navStart ? time : time + navStart)
				: Date.now();
	
			callback(_elm_lang$core$Native_Scheduler.succeed(timeNow));
		});
	
		return function() {
			cancelAnimationFrame(id);
		};
	});
	
	return {
		rAF: rAF
	};
	
	}();
	
	var _elm_lang$core$Task$onError = _elm_lang$core$Native_Scheduler.onError;
	var _elm_lang$core$Task$andThen = _elm_lang$core$Native_Scheduler.andThen;
	var _elm_lang$core$Task$spawnCmd = F2(
		function (router, _p0) {
			var _p1 = _p0;
			return _elm_lang$core$Native_Scheduler.spawn(
				A2(
					_elm_lang$core$Task$andThen,
					_p1._0,
					_elm_lang$core$Platform$sendToApp(router)));
		});
	var _elm_lang$core$Task$fail = _elm_lang$core$Native_Scheduler.fail;
	var _elm_lang$core$Task$mapError = F2(
		function (f, task) {
			return A2(
				_elm_lang$core$Task$onError,
				task,
				function (err) {
					return _elm_lang$core$Task$fail(
						f(err));
				});
		});
	var _elm_lang$core$Task$succeed = _elm_lang$core$Native_Scheduler.succeed;
	var _elm_lang$core$Task$map = F2(
		function (func, taskA) {
			return A2(
				_elm_lang$core$Task$andThen,
				taskA,
				function (a) {
					return _elm_lang$core$Task$succeed(
						func(a));
				});
		});
	var _elm_lang$core$Task$map2 = F3(
		function (func, taskA, taskB) {
			return A2(
				_elm_lang$core$Task$andThen,
				taskA,
				function (a) {
					return A2(
						_elm_lang$core$Task$andThen,
						taskB,
						function (b) {
							return _elm_lang$core$Task$succeed(
								A2(func, a, b));
						});
				});
		});
	var _elm_lang$core$Task$map3 = F4(
		function (func, taskA, taskB, taskC) {
			return A2(
				_elm_lang$core$Task$andThen,
				taskA,
				function (a) {
					return A2(
						_elm_lang$core$Task$andThen,
						taskB,
						function (b) {
							return A2(
								_elm_lang$core$Task$andThen,
								taskC,
								function (c) {
									return _elm_lang$core$Task$succeed(
										A3(func, a, b, c));
								});
						});
				});
		});
	var _elm_lang$core$Task$map4 = F5(
		function (func, taskA, taskB, taskC, taskD) {
			return A2(
				_elm_lang$core$Task$andThen,
				taskA,
				function (a) {
					return A2(
						_elm_lang$core$Task$andThen,
						taskB,
						function (b) {
							return A2(
								_elm_lang$core$Task$andThen,
								taskC,
								function (c) {
									return A2(
										_elm_lang$core$Task$andThen,
										taskD,
										function (d) {
											return _elm_lang$core$Task$succeed(
												A4(func, a, b, c, d));
										});
								});
						});
				});
		});
	var _elm_lang$core$Task$map5 = F6(
		function (func, taskA, taskB, taskC, taskD, taskE) {
			return A2(
				_elm_lang$core$Task$andThen,
				taskA,
				function (a) {
					return A2(
						_elm_lang$core$Task$andThen,
						taskB,
						function (b) {
							return A2(
								_elm_lang$core$Task$andThen,
								taskC,
								function (c) {
									return A2(
										_elm_lang$core$Task$andThen,
										taskD,
										function (d) {
											return A2(
												_elm_lang$core$Task$andThen,
												taskE,
												function (e) {
													return _elm_lang$core$Task$succeed(
														A5(func, a, b, c, d, e));
												});
										});
								});
						});
				});
		});
	var _elm_lang$core$Task$andMap = F2(
		function (taskFunc, taskValue) {
			return A2(
				_elm_lang$core$Task$andThen,
				taskFunc,
				function (func) {
					return A2(
						_elm_lang$core$Task$andThen,
						taskValue,
						function (value) {
							return _elm_lang$core$Task$succeed(
								func(value));
						});
				});
		});
	var _elm_lang$core$Task$sequence = function (tasks) {
		var _p2 = tasks;
		if (_p2.ctor === '[]') {
			return _elm_lang$core$Task$succeed(
				_elm_lang$core$Native_List.fromArray(
					[]));
		} else {
			return A3(
				_elm_lang$core$Task$map2,
				F2(
					function (x, y) {
						return A2(_elm_lang$core$List_ops['::'], x, y);
					}),
				_p2._0,
				_elm_lang$core$Task$sequence(_p2._1));
		}
	};
	var _elm_lang$core$Task$onEffects = F3(
		function (router, commands, state) {
			return A2(
				_elm_lang$core$Task$map,
				function (_p3) {
					return {ctor: '_Tuple0'};
				},
				_elm_lang$core$Task$sequence(
					A2(
						_elm_lang$core$List$map,
						_elm_lang$core$Task$spawnCmd(router),
						commands)));
		});
	var _elm_lang$core$Task$toMaybe = function (task) {
		return A2(
			_elm_lang$core$Task$onError,
			A2(_elm_lang$core$Task$map, _elm_lang$core$Maybe$Just, task),
			function (_p4) {
				return _elm_lang$core$Task$succeed(_elm_lang$core$Maybe$Nothing);
			});
	};
	var _elm_lang$core$Task$fromMaybe = F2(
		function ($default, maybe) {
			var _p5 = maybe;
			if (_p5.ctor === 'Just') {
				return _elm_lang$core$Task$succeed(_p5._0);
			} else {
				return _elm_lang$core$Task$fail($default);
			}
		});
	var _elm_lang$core$Task$toResult = function (task) {
		return A2(
			_elm_lang$core$Task$onError,
			A2(_elm_lang$core$Task$map, _elm_lang$core$Result$Ok, task),
			function (msg) {
				return _elm_lang$core$Task$succeed(
					_elm_lang$core$Result$Err(msg));
			});
	};
	var _elm_lang$core$Task$fromResult = function (result) {
		var _p6 = result;
		if (_p6.ctor === 'Ok') {
			return _elm_lang$core$Task$succeed(_p6._0);
		} else {
			return _elm_lang$core$Task$fail(_p6._0);
		}
	};
	var _elm_lang$core$Task$init = _elm_lang$core$Task$succeed(
		{ctor: '_Tuple0'});
	var _elm_lang$core$Task$onSelfMsg = F3(
		function (_p9, _p8, _p7) {
			return _elm_lang$core$Task$succeed(
				{ctor: '_Tuple0'});
		});
	var _elm_lang$core$Task$command = _elm_lang$core$Native_Platform.leaf('Task');
	var _elm_lang$core$Task$T = function (a) {
		return {ctor: 'T', _0: a};
	};
	var _elm_lang$core$Task$perform = F3(
		function (onFail, onSuccess, task) {
			return _elm_lang$core$Task$command(
				_elm_lang$core$Task$T(
					A2(
						_elm_lang$core$Task$onError,
						A2(_elm_lang$core$Task$map, onSuccess, task),
						function (x) {
							return _elm_lang$core$Task$succeed(
								onFail(x));
						})));
		});
	var _elm_lang$core$Task$cmdMap = F2(
		function (tagger, _p10) {
			var _p11 = _p10;
			return _elm_lang$core$Task$T(
				A2(_elm_lang$core$Task$map, tagger, _p11._0));
		});
	_elm_lang$core$Native_Platform.effectManagers['Task'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Task$init, onEffects: _elm_lang$core$Task$onEffects, onSelfMsg: _elm_lang$core$Task$onSelfMsg, tag: 'cmd', cmdMap: _elm_lang$core$Task$cmdMap};
	
	//import Native.Scheduler //
	
	var _elm_lang$core$Native_Time = function() {
	
	var now = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		callback(_elm_lang$core$Native_Scheduler.succeed(Date.now()));
	});
	
	function setInterval_(interval, task)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
		{
			var id = setInterval(function() {
				_elm_lang$core$Native_Scheduler.rawSpawn(task);
			}, interval);
	
			return function() { clearInterval(id); };
		});
	}
	
	return {
		now: now,
		setInterval_: F2(setInterval_)
	};
	
	}();
	var _elm_lang$core$Time$setInterval = _elm_lang$core$Native_Time.setInterval_;
	var _elm_lang$core$Time$spawnHelp = F3(
		function (router, intervals, processes) {
			var _p0 = intervals;
			if (_p0.ctor === '[]') {
				return _elm_lang$core$Task$succeed(processes);
			} else {
				var _p1 = _p0._0;
				return A2(
					_elm_lang$core$Task$andThen,
					_elm_lang$core$Native_Scheduler.spawn(
						A2(
							_elm_lang$core$Time$setInterval,
							_p1,
							A2(_elm_lang$core$Platform$sendToSelf, router, _p1))),
					function (id) {
						return A3(
							_elm_lang$core$Time$spawnHelp,
							router,
							_p0._1,
							A3(_elm_lang$core$Dict$insert, _p1, id, processes));
					});
			}
		});
	var _elm_lang$core$Time$addMySub = F2(
		function (_p2, state) {
			var _p3 = _p2;
			var _p6 = _p3._1;
			var _p5 = _p3._0;
			var _p4 = A2(_elm_lang$core$Dict$get, _p5, state);
			if (_p4.ctor === 'Nothing') {
				return A3(
					_elm_lang$core$Dict$insert,
					_p5,
					_elm_lang$core$Native_List.fromArray(
						[_p6]),
					state);
			} else {
				return A3(
					_elm_lang$core$Dict$insert,
					_p5,
					A2(_elm_lang$core$List_ops['::'], _p6, _p4._0),
					state);
			}
		});
	var _elm_lang$core$Time$inMilliseconds = function (t) {
		return t;
	};
	var _elm_lang$core$Time$millisecond = 1;
	var _elm_lang$core$Time$second = 1000 * _elm_lang$core$Time$millisecond;
	var _elm_lang$core$Time$minute = 60 * _elm_lang$core$Time$second;
	var _elm_lang$core$Time$hour = 60 * _elm_lang$core$Time$minute;
	var _elm_lang$core$Time$inHours = function (t) {
		return t / _elm_lang$core$Time$hour;
	};
	var _elm_lang$core$Time$inMinutes = function (t) {
		return t / _elm_lang$core$Time$minute;
	};
	var _elm_lang$core$Time$inSeconds = function (t) {
		return t / _elm_lang$core$Time$second;
	};
	var _elm_lang$core$Time$now = _elm_lang$core$Native_Time.now;
	var _elm_lang$core$Time$onSelfMsg = F3(
		function (router, interval, state) {
			var _p7 = A2(_elm_lang$core$Dict$get, interval, state.taggers);
			if (_p7.ctor === 'Nothing') {
				return _elm_lang$core$Task$succeed(state);
			} else {
				return A2(
					_elm_lang$core$Task$andThen,
					_elm_lang$core$Time$now,
					function (time) {
						return A2(
							_elm_lang$core$Task$andThen,
							_elm_lang$core$Task$sequence(
								A2(
									_elm_lang$core$List$map,
									function (tagger) {
										return A2(
											_elm_lang$core$Platform$sendToApp,
											router,
											tagger(time));
									},
									_p7._0)),
							function (_p8) {
								return _elm_lang$core$Task$succeed(state);
							});
					});
			}
		});
	var _elm_lang$core$Time$subscription = _elm_lang$core$Native_Platform.leaf('Time');
	var _elm_lang$core$Time$State = F2(
		function (a, b) {
			return {taggers: a, processes: b};
		});
	var _elm_lang$core$Time$init = _elm_lang$core$Task$succeed(
		A2(_elm_lang$core$Time$State, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty));
	var _elm_lang$core$Time$onEffects = F3(
		function (router, subs, _p9) {
			var _p10 = _p9;
			var rightStep = F3(
				function (_p12, id, _p11) {
					var _p13 = _p11;
					return {
						ctor: '_Tuple3',
						_0: _p13._0,
						_1: _p13._1,
						_2: A2(
							_elm_lang$core$Task$andThen,
							_elm_lang$core$Native_Scheduler.kill(id),
							function (_p14) {
								return _p13._2;
							})
					};
				});
			var bothStep = F4(
				function (interval, taggers, id, _p15) {
					var _p16 = _p15;
					return {
						ctor: '_Tuple3',
						_0: _p16._0,
						_1: A3(_elm_lang$core$Dict$insert, interval, id, _p16._1),
						_2: _p16._2
					};
				});
			var leftStep = F3(
				function (interval, taggers, _p17) {
					var _p18 = _p17;
					return {
						ctor: '_Tuple3',
						_0: A2(_elm_lang$core$List_ops['::'], interval, _p18._0),
						_1: _p18._1,
						_2: _p18._2
					};
				});
			var newTaggers = A3(_elm_lang$core$List$foldl, _elm_lang$core$Time$addMySub, _elm_lang$core$Dict$empty, subs);
			var _p19 = A6(
				_elm_lang$core$Dict$merge,
				leftStep,
				bothStep,
				rightStep,
				newTaggers,
				_p10.processes,
				{
					ctor: '_Tuple3',
					_0: _elm_lang$core$Native_List.fromArray(
						[]),
					_1: _elm_lang$core$Dict$empty,
					_2: _elm_lang$core$Task$succeed(
						{ctor: '_Tuple0'})
				});
			var spawnList = _p19._0;
			var existingDict = _p19._1;
			var killTask = _p19._2;
			return A2(
				_elm_lang$core$Task$andThen,
				killTask,
				function (_p20) {
					return A2(
						_elm_lang$core$Task$andThen,
						A3(_elm_lang$core$Time$spawnHelp, router, spawnList, existingDict),
						function (newProcesses) {
							return _elm_lang$core$Task$succeed(
								A2(_elm_lang$core$Time$State, newTaggers, newProcesses));
						});
				});
		});
	var _elm_lang$core$Time$Every = F2(
		function (a, b) {
			return {ctor: 'Every', _0: a, _1: b};
		});
	var _elm_lang$core$Time$every = F2(
		function (interval, tagger) {
			return _elm_lang$core$Time$subscription(
				A2(_elm_lang$core$Time$Every, interval, tagger));
		});
	var _elm_lang$core$Time$subMap = F2(
		function (f, _p21) {
			var _p22 = _p21;
			return A2(
				_elm_lang$core$Time$Every,
				_p22._0,
				function (_p23) {
					return f(
						_p22._1(_p23));
				});
		});
	_elm_lang$core$Native_Platform.effectManagers['Time'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Time$init, onEffects: _elm_lang$core$Time$onEffects, onSelfMsg: _elm_lang$core$Time$onSelfMsg, tag: 'sub', subMap: _elm_lang$core$Time$subMap};
	
	var _elm_lang$core$Process$kill = _elm_lang$core$Native_Scheduler.kill;
	var _elm_lang$core$Process$sleep = _elm_lang$core$Native_Scheduler.sleep;
	var _elm_lang$core$Process$spawn = _elm_lang$core$Native_Scheduler.spawn;
	
	var _elm_lang$animation_frame$AnimationFrame$rAF = _elm_lang$animation_frame$Native_AnimationFrame.rAF;
	var _elm_lang$animation_frame$AnimationFrame$subscription = _elm_lang$core$Native_Platform.leaf('AnimationFrame');
	var _elm_lang$animation_frame$AnimationFrame$State = F3(
		function (a, b, c) {
			return {subs: a, request: b, oldTime: c};
		});
	var _elm_lang$animation_frame$AnimationFrame$init = _elm_lang$core$Task$succeed(
		A3(
			_elm_lang$animation_frame$AnimationFrame$State,
			_elm_lang$core$Native_List.fromArray(
				[]),
			_elm_lang$core$Maybe$Nothing,
			0));
	var _elm_lang$animation_frame$AnimationFrame$onEffects = F3(
		function (router, subs, _p0) {
			var _p1 = _p0;
			var _p5 = _p1.request;
			var _p4 = _p1.oldTime;
			var _p2 = {ctor: '_Tuple2', _0: _p5, _1: subs};
			if (_p2._0.ctor === 'Nothing') {
				if (_p2._1.ctor === '[]') {
					return _elm_lang$core$Task$succeed(
						A3(
							_elm_lang$animation_frame$AnimationFrame$State,
							_elm_lang$core$Native_List.fromArray(
								[]),
							_elm_lang$core$Maybe$Nothing,
							_p4));
				} else {
					return A2(
						_elm_lang$core$Task$andThen,
						_elm_lang$core$Process$spawn(
							A2(
								_elm_lang$core$Task$andThen,
								_elm_lang$animation_frame$AnimationFrame$rAF,
								_elm_lang$core$Platform$sendToSelf(router))),
						function (pid) {
							return A2(
								_elm_lang$core$Task$andThen,
								_elm_lang$core$Time$now,
								function (time) {
									return _elm_lang$core$Task$succeed(
										A3(
											_elm_lang$animation_frame$AnimationFrame$State,
											subs,
											_elm_lang$core$Maybe$Just(pid),
											time));
								});
						});
				}
			} else {
				if (_p2._1.ctor === '[]') {
					return A2(
						_elm_lang$core$Task$andThen,
						_elm_lang$core$Process$kill(_p2._0._0),
						function (_p3) {
							return _elm_lang$core$Task$succeed(
								A3(
									_elm_lang$animation_frame$AnimationFrame$State,
									_elm_lang$core$Native_List.fromArray(
										[]),
									_elm_lang$core$Maybe$Nothing,
									_p4));
						});
				} else {
					return _elm_lang$core$Task$succeed(
						A3(_elm_lang$animation_frame$AnimationFrame$State, subs, _p5, _p4));
				}
			}
		});
	var _elm_lang$animation_frame$AnimationFrame$onSelfMsg = F3(
		function (router, newTime, _p6) {
			var _p7 = _p6;
			var _p10 = _p7.subs;
			var diff = newTime - _p7.oldTime;
			var send = function (sub) {
				var _p8 = sub;
				if (_p8.ctor === 'Time') {
					return A2(
						_elm_lang$core$Platform$sendToApp,
						router,
						_p8._0(newTime));
				} else {
					return A2(
						_elm_lang$core$Platform$sendToApp,
						router,
						_p8._0(diff));
				}
			};
			return A2(
				_elm_lang$core$Task$andThen,
				_elm_lang$core$Process$spawn(
					A2(
						_elm_lang$core$Task$andThen,
						_elm_lang$animation_frame$AnimationFrame$rAF,
						_elm_lang$core$Platform$sendToSelf(router))),
				function (pid) {
					return A2(
						_elm_lang$core$Task$andThen,
						_elm_lang$core$Task$sequence(
							A2(_elm_lang$core$List$map, send, _p10)),
						function (_p9) {
							return _elm_lang$core$Task$succeed(
								A3(
									_elm_lang$animation_frame$AnimationFrame$State,
									_p10,
									_elm_lang$core$Maybe$Just(pid),
									newTime));
						});
				});
		});
	var _elm_lang$animation_frame$AnimationFrame$Diff = function (a) {
		return {ctor: 'Diff', _0: a};
	};
	var _elm_lang$animation_frame$AnimationFrame$diffs = function (tagger) {
		return _elm_lang$animation_frame$AnimationFrame$subscription(
			_elm_lang$animation_frame$AnimationFrame$Diff(tagger));
	};
	var _elm_lang$animation_frame$AnimationFrame$Time = function (a) {
		return {ctor: 'Time', _0: a};
	};
	var _elm_lang$animation_frame$AnimationFrame$times = function (tagger) {
		return _elm_lang$animation_frame$AnimationFrame$subscription(
			_elm_lang$animation_frame$AnimationFrame$Time(tagger));
	};
	var _elm_lang$animation_frame$AnimationFrame$subMap = F2(
		function (func, sub) {
			var _p11 = sub;
			if (_p11.ctor === 'Time') {
				return _elm_lang$animation_frame$AnimationFrame$Time(
					function (_p12) {
						return func(
							_p11._0(_p12));
					});
			} else {
				return _elm_lang$animation_frame$AnimationFrame$Diff(
					function (_p13) {
						return func(
							_p11._0(_p13));
					});
			}
		});
	_elm_lang$core$Native_Platform.effectManagers['AnimationFrame'] = {pkg: 'elm-lang/animation-frame', init: _elm_lang$animation_frame$AnimationFrame$init, onEffects: _elm_lang$animation_frame$AnimationFrame$onEffects, onSelfMsg: _elm_lang$animation_frame$AnimationFrame$onSelfMsg, tag: 'sub', subMap: _elm_lang$animation_frame$AnimationFrame$subMap};
	
	var _elm_lang$html$Html_App$programWithFlags = _elm_lang$virtual_dom$VirtualDom$programWithFlags;
	var _elm_lang$html$Html_App$program = function (app) {
		return _elm_lang$html$Html_App$programWithFlags(
			_elm_lang$core$Native_Utils.update(
				app,
				{
					init: function (_p0) {
						return app.init;
					}
				}));
	};
	var _elm_lang$html$Html_App$beginnerProgram = function (_p1) {
		var _p2 = _p1;
		return _elm_lang$html$Html_App$programWithFlags(
			{
				init: function (_p3) {
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						_p2.model,
						_elm_lang$core$Native_List.fromArray(
							[]));
				},
				update: F2(
					function (msg, model) {
						return A2(
							_elm_lang$core$Platform_Cmd_ops['!'],
							A2(_p2.update, msg, model),
							_elm_lang$core$Native_List.fromArray(
								[]));
					}),
				view: _p2.view,
				subscriptions: function (_p4) {
					return _elm_lang$core$Platform_Sub$none;
				}
			});
	};
	var _elm_lang$html$Html_App$map = _elm_lang$virtual_dom$VirtualDom$map;
	
	var _rtfeldman$elm_css$Css_Elements$typeSelector = F2(
		function (selectorStr, mixins) {
			var sequence = A2(
				_rtfeldman$elm_css$Css_Structure$TypeSelectorSequence,
				_rtfeldman$elm_css$Css_Structure$TypeSelector(selectorStr),
				_elm_lang$core$Native_List.fromArray(
					[]));
			var selector = A3(
				_rtfeldman$elm_css$Css_Structure$Selector,
				sequence,
				_elm_lang$core$Native_List.fromArray(
					[]),
				_elm_lang$core$Maybe$Nothing);
			return _rtfeldman$elm_css$Css_Preprocess$Snippet(
				_elm_lang$core$Native_List.fromArray(
					[
						_rtfeldman$elm_css$Css_Preprocess$StyleBlockDeclaration(
						A3(
							_rtfeldman$elm_css$Css_Preprocess$StyleBlock,
							selector,
							_elm_lang$core$Native_List.fromArray(
								[]),
							mixins))
					]));
		});
	var _rtfeldman$elm_css$Css_Elements$html = _rtfeldman$elm_css$Css_Elements$typeSelector('html');
	var _rtfeldman$elm_css$Css_Elements$body = _rtfeldman$elm_css$Css_Elements$typeSelector('body');
	var _rtfeldman$elm_css$Css_Elements$article = _rtfeldman$elm_css$Css_Elements$typeSelector('article');
	var _rtfeldman$elm_css$Css_Elements$header = _rtfeldman$elm_css$Css_Elements$typeSelector('header');
	var _rtfeldman$elm_css$Css_Elements$footer = _rtfeldman$elm_css$Css_Elements$typeSelector('footer');
	var _rtfeldman$elm_css$Css_Elements$h1 = _rtfeldman$elm_css$Css_Elements$typeSelector('h1');
	var _rtfeldman$elm_css$Css_Elements$h2 = _rtfeldman$elm_css$Css_Elements$typeSelector('h2');
	var _rtfeldman$elm_css$Css_Elements$h3 = _rtfeldman$elm_css$Css_Elements$typeSelector('h3');
	var _rtfeldman$elm_css$Css_Elements$h4 = _rtfeldman$elm_css$Css_Elements$typeSelector('h4');
	var _rtfeldman$elm_css$Css_Elements$h5 = _rtfeldman$elm_css$Css_Elements$typeSelector('h5');
	var _rtfeldman$elm_css$Css_Elements$h6 = _rtfeldman$elm_css$Css_Elements$typeSelector('h6');
	var _rtfeldman$elm_css$Css_Elements$nav = _rtfeldman$elm_css$Css_Elements$typeSelector('nav');
	var _rtfeldman$elm_css$Css_Elements$section = _rtfeldman$elm_css$Css_Elements$typeSelector('section');
	var _rtfeldman$elm_css$Css_Elements$div = _rtfeldman$elm_css$Css_Elements$typeSelector('div');
	var _rtfeldman$elm_css$Css_Elements$hr = _rtfeldman$elm_css$Css_Elements$typeSelector('hr');
	var _rtfeldman$elm_css$Css_Elements$li = _rtfeldman$elm_css$Css_Elements$typeSelector('li');
	var _rtfeldman$elm_css$Css_Elements$main$ = _rtfeldman$elm_css$Css_Elements$typeSelector('main');
	var _rtfeldman$elm_css$Css_Elements$ol = _rtfeldman$elm_css$Css_Elements$typeSelector('ol');
	var _rtfeldman$elm_css$Css_Elements$p = _rtfeldman$elm_css$Css_Elements$typeSelector('p');
	var _rtfeldman$elm_css$Css_Elements$ul = _rtfeldman$elm_css$Css_Elements$typeSelector('ul');
	var _rtfeldman$elm_css$Css_Elements$pre = _rtfeldman$elm_css$Css_Elements$typeSelector('pre');
	var _rtfeldman$elm_css$Css_Elements$a = _rtfeldman$elm_css$Css_Elements$typeSelector('a');
	var _rtfeldman$elm_css$Css_Elements$code = _rtfeldman$elm_css$Css_Elements$typeSelector('code');
	var _rtfeldman$elm_css$Css_Elements$small = _rtfeldman$elm_css$Css_Elements$typeSelector('small');
	var _rtfeldman$elm_css$Css_Elements$span = _rtfeldman$elm_css$Css_Elements$typeSelector('span');
	var _rtfeldman$elm_css$Css_Elements$strong = _rtfeldman$elm_css$Css_Elements$typeSelector('strong');
	var _rtfeldman$elm_css$Css_Elements$img = _rtfeldman$elm_css$Css_Elements$typeSelector('img');
	var _rtfeldman$elm_css$Css_Elements$audio = _rtfeldman$elm_css$Css_Elements$typeSelector('audio');
	var _rtfeldman$elm_css$Css_Elements$video = _rtfeldman$elm_css$Css_Elements$typeSelector('video');
	var _rtfeldman$elm_css$Css_Elements$canvas = _rtfeldman$elm_css$Css_Elements$typeSelector('canvas');
	var _rtfeldman$elm_css$Css_Elements$caption = _rtfeldman$elm_css$Css_Elements$typeSelector('caption');
	var _rtfeldman$elm_css$Css_Elements$col = _rtfeldman$elm_css$Css_Elements$typeSelector('col');
	var _rtfeldman$elm_css$Css_Elements$colgroup = _rtfeldman$elm_css$Css_Elements$typeSelector('colgroup');
	var _rtfeldman$elm_css$Css_Elements$table = _rtfeldman$elm_css$Css_Elements$typeSelector('table');
	var _rtfeldman$elm_css$Css_Elements$tbody = _rtfeldman$elm_css$Css_Elements$typeSelector('tbody');
	var _rtfeldman$elm_css$Css_Elements$td = _rtfeldman$elm_css$Css_Elements$typeSelector('td');
	var _rtfeldman$elm_css$Css_Elements$tfoot = _rtfeldman$elm_css$Css_Elements$typeSelector('tfoot');
	var _rtfeldman$elm_css$Css_Elements$th = _rtfeldman$elm_css$Css_Elements$typeSelector('th');
	var _rtfeldman$elm_css$Css_Elements$thead = _rtfeldman$elm_css$Css_Elements$typeSelector('thead');
	var _rtfeldman$elm_css$Css_Elements$tr = _rtfeldman$elm_css$Css_Elements$typeSelector('tr');
	var _rtfeldman$elm_css$Css_Elements$button = _rtfeldman$elm_css$Css_Elements$typeSelector('button');
	var _rtfeldman$elm_css$Css_Elements$fieldset = _rtfeldman$elm_css$Css_Elements$typeSelector('fieldset');
	var _rtfeldman$elm_css$Css_Elements$form = _rtfeldman$elm_css$Css_Elements$typeSelector('form');
	var _rtfeldman$elm_css$Css_Elements$input = _rtfeldman$elm_css$Css_Elements$typeSelector('input');
	var _rtfeldman$elm_css$Css_Elements$label = _rtfeldman$elm_css$Css_Elements$typeSelector('label');
	var _rtfeldman$elm_css$Css_Elements$legend = _rtfeldman$elm_css$Css_Elements$typeSelector('legend');
	var _rtfeldman$elm_css$Css_Elements$optgroup = _rtfeldman$elm_css$Css_Elements$typeSelector('optgroup');
	var _rtfeldman$elm_css$Css_Elements$option = _rtfeldman$elm_css$Css_Elements$typeSelector('option');
	var _rtfeldman$elm_css$Css_Elements$progress = _rtfeldman$elm_css$Css_Elements$typeSelector('progress');
	var _rtfeldman$elm_css$Css_Elements$select = _rtfeldman$elm_css$Css_Elements$typeSelector('select');
	
	var _benansell$elm_webpack_seed$SharedCss$blue = A4(_rtfeldman$elm_css$Css$rgba, 25, 133, 161, 1);
	var _benansell$elm_webpack_seed$SharedCss$darkBlueGray = A4(_rtfeldman$elm_css$Css$rgba, 76, 92, 104, 1);
	var _benansell$elm_webpack_seed$SharedCss$darkGray = A4(_rtfeldman$elm_css$Css$rgba, 70, 73, 76, 1);
	var _benansell$elm_webpack_seed$SharedCss$mediumGray = A4(_rtfeldman$elm_css$Css$rgba, 197, 195, 198, 1);
	var _benansell$elm_webpack_seed$SharedCss$lightGray = A4(_rtfeldman$elm_css$Css$rgba, 220, 220, 221, 1);
	var _benansell$elm_webpack_seed$SharedCss$white = _rtfeldman$elm_css$Css$hex('#fff');
	var _benansell$elm_webpack_seed$SharedCss$linkColor = _benansell$elm_webpack_seed$SharedCss$white;
	var _benansell$elm_webpack_seed$SharedCss$aligner = _rtfeldman$elm_css$Css$mixin(
		_elm_lang$core$Native_List.fromArray(
			[
				_rtfeldman$elm_css$Css$displayFlex,
				_rtfeldman$elm_css$Css$alignItems(_rtfeldman$elm_css$Css$center),
				A2(_rtfeldman$elm_css$Css$property, 'justify-content', 'center')
			]));
	var _benansell$elm_webpack_seed$SharedCss$spaceLeft = _rtfeldman$elm_css$Css$paddingLeft(
		_rtfeldman$elm_css$Css$pct(5));
	var _benansell$elm_webpack_seed$SharedCss$layoutNamespace = _rtfeldman$elm_css_helpers$Html_CssHelpers$withNamespace('layout');
	var _benansell$elm_webpack_seed$SharedCss$Page = {ctor: 'Page'};
	var _benansell$elm_webpack_seed$SharedCss$NavMessage = {ctor: 'NavMessage'};
	var _benansell$elm_webpack_seed$SharedCss$NavAsideStatus = {ctor: 'NavAsideStatus'};
	var _benansell$elm_webpack_seed$SharedCss$Nav = {ctor: 'Nav'};
	var _benansell$elm_webpack_seed$SharedCss$MediaFigure = {ctor: 'MediaFigure'};
	var _benansell$elm_webpack_seed$SharedCss$MediaBody = {ctor: 'MediaBody'};
	var _benansell$elm_webpack_seed$SharedCss$Media = {ctor: 'Media'};
	var _benansell$elm_webpack_seed$SharedCss$FooterItems = {ctor: 'FooterItems'};
	var _benansell$elm_webpack_seed$SharedCss$Footer = {ctor: 'Footer'};
	var _benansell$elm_webpack_seed$SharedCss$Content = {ctor: 'Content'};
	var _benansell$elm_webpack_seed$SharedCss$Body = {ctor: 'Body'};
	var _benansell$elm_webpack_seed$SharedCss$Aside = {ctor: 'Aside'};
	var _benansell$elm_webpack_seed$SharedCss$css = function (_p0) {
		return _rtfeldman$elm_css$Css$stylesheet(
			A2(_rtfeldman$elm_css$Css_Namespace$namespace, _benansell$elm_webpack_seed$SharedCss$layoutNamespace.name, _p0));
	}(
		_elm_lang$core$Native_List.fromArray(
			[
				_rtfeldman$elm_css$Css_Elements$a(
				_elm_lang$core$Native_List.fromArray(
					[
						_rtfeldman$elm_css$Css$textDecoration(_rtfeldman$elm_css$Css$none),
						_rtfeldman$elm_css$Css$color(_benansell$elm_webpack_seed$SharedCss$linkColor)
					])),
				_rtfeldman$elm_css$Css_Elements$body(
				_elm_lang$core$Native_List.fromArray(
					[
						_rtfeldman$elm_css$Css$margin(
						_rtfeldman$elm_css$Css$px(0)),
						_rtfeldman$elm_css$Css$minWidth(
						_rtfeldman$elm_css$Css$px(260))
					])),
				_rtfeldman$elm_css$Css_Elements$footer(
				_elm_lang$core$Native_List.fromArray(
					[
						_rtfeldman$elm_css$Css$flex(_rtfeldman$elm_css$Css$none)
					])),
				_rtfeldman$elm_css$Css_Elements$header(
				_elm_lang$core$Native_List.fromArray(
					[
						_rtfeldman$elm_css$Css$backgroundColor(_benansell$elm_webpack_seed$SharedCss$blue),
						_rtfeldman$elm_css$Css$flex(_rtfeldman$elm_css$Css$none),
						_benansell$elm_webpack_seed$SharedCss$spaceLeft
					])),
				A2(
				F2(
					function (x, y) {
						return A2(_rtfeldman$elm_css$Css_ops['.'], x, y);
					}),
				_benansell$elm_webpack_seed$SharedCss$Page,
				_elm_lang$core$Native_List.fromArray(
					[
						_rtfeldman$elm_css$Css$backgroundColor(
						A4(_rtfeldman$elm_css$Css$rgba, 220, 220, 221, 1)),
						_rtfeldman$elm_css$Css$displayFlex,
						_rtfeldman$elm_css$Css$minHeight(
						_rtfeldman$elm_css$Css$vh(100)),
						_rtfeldman$elm_css$Css$flexDirection(_rtfeldman$elm_css$Css$column),
						_rtfeldman$elm_css$Css$fontFamily(_rtfeldman$elm_css$Css$sansSerif)
					])),
				A2(
				F2(
					function (x, y) {
						return A2(_rtfeldman$elm_css$Css_ops['.'], x, y);
					}),
				_benansell$elm_webpack_seed$SharedCss$Body,
				_elm_lang$core$Native_List.fromArray(
					[
						_rtfeldman$elm_css$Css$displayFlex,
						A2(
						_rtfeldman$elm_css$Css$flex2,
						_rtfeldman$elm_css$Css$int(1),
						_rtfeldman$elm_css$Css$int(0)),
						_rtfeldman$elm_css$Css$flexDirection(_rtfeldman$elm_css$Css$column)
					])),
				A2(
				F2(
					function (x, y) {
						return A2(_rtfeldman$elm_css$Css_ops['.'], x, y);
					}),
				_benansell$elm_webpack_seed$SharedCss$Content,
				_elm_lang$core$Native_List.fromArray(
					[
						_rtfeldman$elm_css$Css$backgroundColor(_benansell$elm_webpack_seed$SharedCss$lightGray),
						_rtfeldman$elm_css$Css$flex(
						_rtfeldman$elm_css$Css$int(1)),
						_benansell$elm_webpack_seed$SharedCss$aligner
					])),
				A2(
				F2(
					function (x, y) {
						return A2(_rtfeldman$elm_css$Css_ops['.'], x, y);
					}),
				_benansell$elm_webpack_seed$SharedCss$Aside,
				_elm_lang$core$Native_List.fromArray(
					[
						_rtfeldman$elm_css$Css$backgroundColor(_benansell$elm_webpack_seed$SharedCss$mediumGray),
						_rtfeldman$elm_css$Css$padding(
						_rtfeldman$elm_css$Css$em(1))
					])),
				A2(
				F2(
					function (x, y) {
						return A2(_rtfeldman$elm_css$Css_ops['.'], x, y);
					}),
				_benansell$elm_webpack_seed$SharedCss$Nav,
				_elm_lang$core$Native_List.fromArray(
					[
						_rtfeldman$elm_css$Css$backgroundColor(_benansell$elm_webpack_seed$SharedCss$darkBlueGray),
						_rtfeldman$elm_css$Css$order(
						_rtfeldman$elm_css$Css$int(-1)),
						_rtfeldman$elm_css$Css$padding(
						_rtfeldman$elm_css$Css$em(1))
					])),
				A2(
				F2(
					function (x, y) {
						return A2(_rtfeldman$elm_css$Css_ops['.'], x, y);
					}),
				_benansell$elm_webpack_seed$SharedCss$NavAsideStatus,
				_elm_lang$core$Native_List.fromArray(
					[
						_rtfeldman$elm_css$Css$fontWeight(
						_rtfeldman$elm_css$Css$int(300))
					])),
				A2(
				F2(
					function (x, y) {
						return A2(_rtfeldman$elm_css$Css_ops['.'], x, y);
					}),
				_benansell$elm_webpack_seed$SharedCss$NavMessage,
				_elm_lang$core$Native_List.fromArray(
					[
						_rtfeldman$elm_css$Css$color(_benansell$elm_webpack_seed$SharedCss$white),
						_rtfeldman$elm_css$Css$fontWeight(
						_rtfeldman$elm_css$Css$int(300)),
						_rtfeldman$elm_css$Css$lineHeight(
						_rtfeldman$elm_css$Css$em(1.4))
					])),
				A2(
				F2(
					function (x, y) {
						return A2(_rtfeldman$elm_css$Css_ops['.'], x, y);
					}),
				_benansell$elm_webpack_seed$SharedCss$Footer,
				_elm_lang$core$Native_List.fromArray(
					[
						_rtfeldman$elm_css$Css$backgroundColor(_benansell$elm_webpack_seed$SharedCss$darkGray)
					])),
				A2(
				F2(
					function (x, y) {
						return A2(_rtfeldman$elm_css$Css_ops['.'], x, y);
					}),
				_benansell$elm_webpack_seed$SharedCss$FooterItems,
				_elm_lang$core$Native_List.fromArray(
					[
						_rtfeldman$elm_css$Css$displayFlex,
						_rtfeldman$elm_css$Css$flexDirection(_rtfeldman$elm_css$Css$row),
						_rtfeldman$elm_css$Css$marginLeft(
						_rtfeldman$elm_css$Css$pct(5)),
						_rtfeldman$elm_css$Css$marginRight(
						_rtfeldman$elm_css$Css$pct(5)),
						_rtfeldman$elm_css$Css$paddingLeft(
						_rtfeldman$elm_css$Css$px(0)),
						A2(_rtfeldman$elm_css$Css$property, 'list-style', 'none'),
						_rtfeldman$elm_css$Css$alignItems(_rtfeldman$elm_css$Css$center),
						_rtfeldman$elm_css$Css$children(
						_elm_lang$core$Native_List.fromArray(
							[
								_rtfeldman$elm_css$Css_Elements$li(
								_elm_lang$core$Native_List.fromArray(
									[
										_rtfeldman$elm_css$Css$lastChild(
										_elm_lang$core$Native_List.fromArray(
											[
												_rtfeldman$elm_css$Css$marginLeft(_rtfeldman$elm_css$Css$auto)
											]))
									]))
							]))
					])),
				A2(
				F2(
					function (x, y) {
						return A2(_rtfeldman$elm_css$Css_ops['.'], x, y);
					}),
				_benansell$elm_webpack_seed$SharedCss$Media,
				_elm_lang$core$Native_List.fromArray(
					[
						_rtfeldman$elm_css$Css$displayFlex,
						_rtfeldman$elm_css$Css$alignItems(_rtfeldman$elm_css$Css$center)
					])),
				A2(
				F2(
					function (x, y) {
						return A2(_rtfeldman$elm_css$Css_ops['.'], x, y);
					}),
				_benansell$elm_webpack_seed$SharedCss$MediaBody,
				_elm_lang$core$Native_List.fromArray(
					[
						_rtfeldman$elm_css$Css$flex(
						_rtfeldman$elm_css$Css$int(1)),
						_rtfeldman$elm_css$Css$whiteSpace(_rtfeldman$elm_css$Css$noWrap)
					])),
				A2(
				F2(
					function (x, y) {
						return A2(_rtfeldman$elm_css$Css_ops['.'], x, y);
					}),
				_benansell$elm_webpack_seed$SharedCss$MediaFigure,
				_elm_lang$core$Native_List.fromArray(
					[
						_rtfeldman$elm_css$Css$marginRight(
						_rtfeldman$elm_css$Css$em(1))
					])),
				A2(
				_rtfeldman$elm_css$Css$mediaQuery,
				'(min-width: 1000px)',
				_elm_lang$core$Native_List.fromArray(
					[
						A2(
						F2(
							function (x, y) {
								return A2(_rtfeldman$elm_css$Css_ops['.'], x, y);
							}),
						_benansell$elm_webpack_seed$SharedCss$Body,
						_elm_lang$core$Native_List.fromArray(
							[
								_rtfeldman$elm_css$Css$flexDirection(_rtfeldman$elm_css$Css$row)
							])),
						A2(
						F2(
							function (x, y) {
								return A2(_rtfeldman$elm_css$Css_ops['.'], x, y);
							}),
						_benansell$elm_webpack_seed$SharedCss$Content,
						_elm_lang$core$Native_List.fromArray(
							[
								_rtfeldman$elm_css$Css$flex(
								_rtfeldman$elm_css$Css$int(1)),
								_rtfeldman$elm_css$Css$padding(
								_rtfeldman$elm_css$Css$px(0)),
								_rtfeldman$elm_css$Css$margin(
								_rtfeldman$elm_css$Css$px(0))
							])),
						A2(
						F2(
							function (x, y) {
								return A2(_rtfeldman$elm_css$Css_ops['.'], x, y);
							}),
						_benansell$elm_webpack_seed$SharedCss$Nav,
						_elm_lang$core$Native_List.fromArray(
							[
								A3(
								_rtfeldman$elm_css$Css$flex3,
								_rtfeldman$elm_css$Css$int(0),
								_rtfeldman$elm_css$Css$int(0),
								_rtfeldman$elm_css$Css$em(12))
							])),
						A2(
						F2(
							function (x, y) {
								return A2(_rtfeldman$elm_css$Css_ops['.'], x, y);
							}),
						_benansell$elm_webpack_seed$SharedCss$Aside,
						_elm_lang$core$Native_List.fromArray(
							[
								A3(
								_rtfeldman$elm_css$Css$flex3,
								_rtfeldman$elm_css$Css$int(0),
								_rtfeldman$elm_css$Css$int(0),
								_rtfeldman$elm_css$Css$em(12))
							]))
					]))
			]));
	var _benansell$elm_webpack_seed$SharedCss$App = {ctor: 'App'};
	
	var _benansell$elm_webpack_seed$Main$viewHeader = A2(
		_elm_lang$html$Html$div,
		_elm_lang$core$Native_List.fromArray(
			[]),
		_elm_lang$core$Native_List.fromArray(
			[
				A2(
				_elm_lang$html$Html$h1,
				_elm_lang$core$Native_List.fromArray(
					[]),
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$html$Html$text('elm-webpack-seed')
					]))
			]));
	var _benansell$elm_webpack_seed$Main$styles = function (_p0) {
		return _elm_lang$html$Html_Attributes$style(
			_rtfeldman$elm_css$Css$asPairs(_p0));
	};
	var _benansell$elm_webpack_seed$Main$_p1 = _benansell$elm_webpack_seed$SharedCss$layoutNamespace;
	var _benansell$elm_webpack_seed$Main$class = _benansell$elm_webpack_seed$Main$_p1.$class;
	var _benansell$elm_webpack_seed$Main$viewNav = function (model) {
		return A2(
			_elm_lang$html$Html$div,
			_elm_lang$core$Native_List.fromArray(
				[]),
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$html$Html$p,
					_elm_lang$core$Native_List.fromArray(
						[
							_benansell$elm_webpack_seed$Main$class(
							_elm_lang$core$Native_List.fromArray(
								[_benansell$elm_webpack_seed$SharedCss$NavMessage]))
						]),
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html$text(model.status)
						]))
				]));
	};
	var _benansell$elm_webpack_seed$Main$viewAside = function (model) {
		return A2(
			_elm_lang$html$Html$span,
			_elm_lang$core$Native_List.fromArray(
				[]),
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$html$Html$p,
					_elm_lang$core$Native_List.fromArray(
						[
							_benansell$elm_webpack_seed$Main$class(
							_elm_lang$core$Native_List.fromArray(
								[_benansell$elm_webpack_seed$SharedCss$NavAsideStatus]))
						]),
					_elm_lang$core$Native_List.fromArray(
						[
							_Fresheyeball$elm_font_awesome$FontAwesome_Web$info_circle,
							_elm_lang$html$Html$text('  Nudge the logo to make it move')
						]))
				]));
	};
	var _benansell$elm_webpack_seed$Main$viewFooter = A2(
		_elm_lang$html$Html$div,
		_elm_lang$core$Native_List.fromArray(
			[]),
		_elm_lang$core$Native_List.fromArray(
			[
				A2(
				_elm_lang$html$Html$ul,
				_elm_lang$core$Native_List.fromArray(
					[
						_benansell$elm_webpack_seed$Main$class(
						_elm_lang$core$Native_List.fromArray(
							[_benansell$elm_webpack_seed$SharedCss$FooterItems]))
					]),
				_elm_lang$core$Native_List.fromArray(
					[
						A2(
						_elm_lang$html$Html$li,
						_elm_lang$core$Native_List.fromArray(
							[]),
						_elm_lang$core$Native_List.fromArray(
							[
								A2(
								_elm_lang$html$Html$a,
								_elm_lang$core$Native_List.fromArray(
									[
										_elm_lang$html$Html_Attributes$href('http://elm-lang.org/')
									]),
								_elm_lang$core$Native_List.fromArray(
									[
										A2(
										_elm_lang$html$Html$div,
										_elm_lang$core$Native_List.fromArray(
											[
												_benansell$elm_webpack_seed$Main$class(
												_elm_lang$core$Native_List.fromArray(
													[_benansell$elm_webpack_seed$SharedCss$Media]))
											]),
										_elm_lang$core$Native_List.fromArray(
											[
												A2(
												_elm_lang$html$Html$img,
												_elm_lang$core$Native_List.fromArray(
													[
														_elm_lang$html$Html_Attributes$src('assets/elm_logo.svg'),
														_benansell$elm_webpack_seed$Main$class(
														_elm_lang$core$Native_List.fromArray(
															[_benansell$elm_webpack_seed$SharedCss$MediaFigure])),
														_benansell$elm_webpack_seed$Main$styles(
														_elm_lang$core$Native_List.fromArray(
															[
																_rtfeldman$elm_css$Css$maxWidth(
																_rtfeldman$elm_css$Css$px(30))
															]))
													]),
												_elm_lang$core$Native_List.fromArray(
													[])),
												A2(
												_elm_lang$html$Html$div,
												_elm_lang$core$Native_List.fromArray(
													[
														_benansell$elm_webpack_seed$Main$class(
														_elm_lang$core$Native_List.fromArray(
															[_benansell$elm_webpack_seed$SharedCss$MediaBody]))
													]),
												_elm_lang$core$Native_List.fromArray(
													[
														_elm_lang$html$Html$text('Powered by Elm')
													]))
											]))
									]))
							])),
						A2(
						_elm_lang$html$Html$li,
						_elm_lang$core$Native_List.fromArray(
							[]),
						_elm_lang$core$Native_List.fromArray(
							[
								A2(
								_elm_lang$html$Html$a,
								_elm_lang$core$Native_List.fromArray(
									[
										_elm_lang$html$Html_Attributes$href('https://github.com/benansell/elm-webpack-seed')
									]),
								_elm_lang$core$Native_List.fromArray(
									[
										_Fresheyeball$elm_font_awesome$FontAwesome_Brand$github,
										_elm_lang$html$Html$text(' Github')
									]))
							]))
					]))
			]));
	var _benansell$elm_webpack_seed$Main$updateStatus = function (action) {
		var actionDescription = _benansell$elm_webpack_seed$LogoAnimation$actionToString(action);
		var _p2 = actionDescription;
		if (_p2.ctor === 'Nothing') {
			return 'Waiting...';
		} else {
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'Last action: ',
				_elm_lang$core$String$toLower(_p2._0));
		}
	};
	var _benansell$elm_webpack_seed$Main$update = F2(
		function (msg, model) {
			var _p3 = msg;
			if (_p3.ctor === 'Tick') {
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{
							logoModel: A2(_benansell$elm_webpack_seed$LogoAnimation$tick, _p3._0, model.logoModel)
						}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			} else {
				var _p4 = _p3._0;
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{
							logoModel: A2(_benansell$elm_webpack_seed$LogoAnimation$update, _p4, model.logoModel),
							status: _benansell$elm_webpack_seed$Main$updateStatus(_p4)
						}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			}
		});
	var _benansell$elm_webpack_seed$Main$init = {
		ctor: '_Tuple2',
		_0: {logoModel: _benansell$elm_webpack_seed$LogoAnimation$init, status: 'Waiting...'},
		_1: _elm_lang$core$Platform_Cmd$none
	};
	var _benansell$elm_webpack_seed$Main$Model = F2(
		function (a, b) {
			return {logoModel: a, status: b};
		});
	var _benansell$elm_webpack_seed$Main$Logo = function (a) {
		return {ctor: 'Logo', _0: a};
	};
	var _benansell$elm_webpack_seed$Main$viewContent = function (model) {
		return A2(
			_elm_lang$html$Html_App$map,
			_benansell$elm_webpack_seed$Main$Logo,
			_benansell$elm_webpack_seed$LogoAnimation$view(model.logoModel));
	};
	var _benansell$elm_webpack_seed$Main$view = function (model) {
		return A2(
			_elm_lang$html$Html$div,
			_elm_lang$core$Native_List.fromArray(
				[
					_benansell$elm_webpack_seed$Main$class(
					_elm_lang$core$Native_List.fromArray(
						[_benansell$elm_webpack_seed$SharedCss$Page]))
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$html$Html$header,
					_elm_lang$core$Native_List.fromArray(
						[]),
					_elm_lang$core$Native_List.fromArray(
						[_benansell$elm_webpack_seed$Main$viewHeader])),
					A2(
					_elm_lang$html$Html$div,
					_elm_lang$core$Native_List.fromArray(
						[
							_benansell$elm_webpack_seed$Main$class(
							_elm_lang$core$Native_List.fromArray(
								[_benansell$elm_webpack_seed$SharedCss$Body]))
						]),
					_elm_lang$core$Native_List.fromArray(
						[
							A2(
							_elm_lang$html$Html$main$,
							_elm_lang$core$Native_List.fromArray(
								[
									_benansell$elm_webpack_seed$Main$class(
									_elm_lang$core$Native_List.fromArray(
										[_benansell$elm_webpack_seed$SharedCss$Content]))
								]),
							_elm_lang$core$Native_List.fromArray(
								[
									_benansell$elm_webpack_seed$Main$viewContent(model)
								])),
							A2(
							_elm_lang$html$Html$nav,
							_elm_lang$core$Native_List.fromArray(
								[
									_benansell$elm_webpack_seed$Main$class(
									_elm_lang$core$Native_List.fromArray(
										[_benansell$elm_webpack_seed$SharedCss$Nav]))
								]),
							_elm_lang$core$Native_List.fromArray(
								[
									_benansell$elm_webpack_seed$Main$viewNav(model)
								])),
							A2(
							_elm_lang$html$Html$aside,
							_elm_lang$core$Native_List.fromArray(
								[
									_benansell$elm_webpack_seed$Main$class(
									_elm_lang$core$Native_List.fromArray(
										[_benansell$elm_webpack_seed$SharedCss$Aside]))
								]),
							_elm_lang$core$Native_List.fromArray(
								[
									_benansell$elm_webpack_seed$Main$viewAside(model)
								]))
						])),
					A2(
					_elm_lang$html$Html$footer,
					_elm_lang$core$Native_List.fromArray(
						[
							_benansell$elm_webpack_seed$Main$class(
							_elm_lang$core$Native_List.fromArray(
								[_benansell$elm_webpack_seed$SharedCss$Footer]))
						]),
					_elm_lang$core$Native_List.fromArray(
						[_benansell$elm_webpack_seed$Main$viewFooter]))
				]));
	};
	var _benansell$elm_webpack_seed$Main$Tick = function (a) {
		return {ctor: 'Tick', _0: a};
	};
	var _benansell$elm_webpack_seed$Main$subscriptions = function (model) {
		return _elm_lang$animation_frame$AnimationFrame$times(_benansell$elm_webpack_seed$Main$Tick);
	};
	var _benansell$elm_webpack_seed$Main$main = {
		main: _elm_lang$html$Html_App$program(
			{init: _benansell$elm_webpack_seed$Main$init, view: _benansell$elm_webpack_seed$Main$view, update: _benansell$elm_webpack_seed$Main$update, subscriptions: _benansell$elm_webpack_seed$Main$subscriptions})
	};
	
	var Elm = {};
	Elm['Main'] = Elm['Main'] || {};
	_elm_lang$core$Native_Platform.addPublicModule(Elm['Main'], 'Main', typeof _benansell$elm_webpack_seed$Main$main === 'undefined' ? null : _benansell$elm_webpack_seed$Main$main);
	
	if (typeof define === "function" && define['amd'])
	{
	  define([], function() { return Elm; });
	  return;
	}
	
	if (typeof module === "object")
	{
	  module['exports'] = Elm;
	  return;
	}
	
	var globalElm = this['Elm'];
	if (typeof globalElm === "undefined")
	{
	  this['Elm'] = Elm;
	  return;
	}
	
	for (var publicModule in Elm)
	{
	  if (publicModule in globalElm)
	  {
	    throw new Error('There are two Elm modules called `' + publicModule + '` on this page! Rename one of them.');
	  }
	  globalElm[publicModule] = Elm[publicModule];
	}
	
	}).call(this);
	


/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
]);