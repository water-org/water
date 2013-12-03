Tutu = {};
void function(){
    var slice = Array.prototype.slice;
    // List of HTML entities for escaping.
    var htmlEscapes = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '/': '&#x2F;'
    };

    // Regex containing the keys listed immediately above.
    var htmlEscaper = /[&<>"'\/]/g;

    // Escape a string for HTML interpolation.
    Tutu.escape = function(string) {
        return ('' + string).replace(htmlEscaper, function(match) {
                return htmlEscapes[match];
        });
    };
    // By default, Underscore uses ERB-style template delimiters, change the
    // following template settings to use alternative delimiters.
    templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g,
        // 扩展，增加数据不为空时的判断，如果数据不为空当前行不显示
        interpolateNonEmpty: /<%#([\s\S]+?)%>/g 
    };

    // When customizing `templateSettings`, if you don't want to define an
    // interpolation, evaluation or escaping regex, we need one that is
    // guaranteed not to match.
    var noMatch = /.^/;

    // Certain characters need to be escaped so that they can be put into a
    // string literal.
    var escapes = {
        '\\': '\\',
        "'": "'",
        r: '\r',
        n: '\n',
        t: '\t',
        u2028: '\u2028',
        u2029: '\u2029'
    };

    for (var key in escapes) escapes[escapes[key]] = key;
    var escaper = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    var unescaper = /\\(\\|'|r|n|t|u2028|u2029)/g;

    // Within an interpolation, evaluation, or escaping, remove HTML escaping
    // that had been previously added.
    var unescape = function(code) {
        return code.replace(unescaper, function(match, escape) {
            return escapes[escape];
        });
    };

    // JavaScript micro-templating, similar to John Resig's implementation.
    // Underscore templating handles arbitrary delimiters, preserves whitespace,
    // and correctly escapes quotes within interpolated code.
    Tutu.Template = function(text, data, settings) {
        var element;
        if (Object.prototype.toString.call(text) == '[object String]') {
            var trimer = new RegExp('(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+\x24)', 'g');
            if (element = document.getElementById(text)) {
                text = /^(textarea|input)$/i.test(element.nodeName) ? element.value : element.innerHTML;
            }
            text = text.replace(trimer, '');
            text = text.split('\n');
        }
        // 查询数据第一项目，如果符合条件则添加if判断 by jason
        // 增加如果本行有多个描述符，则添加多层if判断
        if (Object.prototype.toString.call(text) == '[object Array]') {
            for (var i = 0, t; t = text[i]; i++) {
                var ifFilter = []; // if 条件
                t.replace(templateSettings.interpolateNonEmpty, function(match, code){
                    ifFilter.push(code);
                });
                if (ifFilter.length > 0) {
                    text.splice(i, 1, '<% if ('+ifFilter.join("&&")+') { %>' + t + '<% } %>');
                }
            }
        }
        text = text.join('');
        settings = Tutu.apply(settings || {}, templateSettings);

        // Compile the template source, taking care to escape characters that
        // cannot be included in a string literal and then unescape them in code
        // blocks.
        var source = "__p+='" + text.replace(escaper, function(match) {
                return '\\' + escapes[match];
        }).replace(settings.escape || noMatch, function(match, code) {
                return "'+\n((__t=(" + unescape(code) + "))==null?'':Tutu.escape(__t))+\n'";
        }).replace(settings.interpolate || noMatch, function(match, code) {
                return "'+\n((__t=(" + unescape(code) + "))==null?'':__t)+\n'";
        }).replace(settings.interpolateNonEmpty || noMatch, function(match, code) {
                return "'+\n((__t=(" + unescape(code) + "))==null?'':__t)+\n'";
        }).replace(settings.evaluate || noMatch, function(match, code) {
                return "';\n" + unescape(code) + "\n__p+='";
        }) + "';\n";

        // If a variable is not specified, place data values in local scope.
        if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

        source = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'')};\n" + source + "return __p;\n";

        var render = new Function(settings.variable || 'obj', 'Tutu', source);
        if (data) return render(data, Tutu);
        var template = function(data) {
            return render.call(this, data, Tutu);
        };

        // Provide the compiled function source as a convenience for precompilation.
        template.source = 'function(' + (settings.variable || 'obj') + '){\n' + source + '}';

        return template;
    };
      // Fill in a given object with default properties.
    Tutu.apply = function(obj, source) {
        for (var prop in source) {
            obj[prop] = source[prop];
        }
        return obj;
    };
}();

