if (typeof AC === 'undefined') {
	AC = {};
}

AC.log = function() {
	window.console && console.log.apply && console.log.apply(console, arguments);
};

// After YAHOO.lang.augment
// http://yui.github.io/yui2/docs/yui_2.9.0/docs/Lang.js.html
// Apply all properties in the supplier s to the receiver r
// Optional third parameter is list of specific properties to overwrite,
// or set to true to overwrite all properties in r that are present in s

AC.augment = function(r, s) {

    var a = arguments,
    	i, p, overrideList = a[2];
    
    // Only absorb the specified properties
    
    if (overrideList && overrideList !== true) { 
        for (i = 2; i < a.length; i = i + 1) {
            r[a[i]] = s[a[i]];
        }
    
    // Take everything, overwriting only if the third parameter is true 
    } else { 
        for (p in s) {
            if (overrideList || !(p in r)) {
                r[p] = s[p];
            }
        }
    }
    return r;
};