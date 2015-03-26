//将url中的参数分离
function stripUrlParams(url, paramsToStrip) {
    console.log(url + ' ' + paramsToStrip);
    var urls = url.split('?');
    if (!urls[1]) return url;
    var params = urls[1].split('&');
    var tails = {};
    for (var i = 0, l = params.length; i < l; i++) {
        var t = params[i].split('=');
        if (!tails[t[0]]) {
            if (paramsToStrip) {
                if (t[0] == paramsToStrip[0]) continue;
            }
            tails[t[0]] = t[1];
        }
    }
    if (tails.length == 0) {
        return url;
    }
    var urlStr = urls[0] + '?';
    for (var i in tails) {
        urlStr += i + '=' + tails[i] + '&';
    }
    return urlStr.slice(0, -1);
}

function stripUrlParams(url, paramsToStrip){
  return url.replace(/&?([^?=]+)=.+?/g, function(m, p1, qPos) {
    return url.indexOf(p1 + '=') < qPos || (paramsToStrip||[]).indexOf(p1) > -1 ? "": m;
   });
}

stripUrlParams('www.codewars.com?a=1&b=2&a=1&b=3') // returns 'www.codewars.com'
/**
 * Description:

Complete the method so that it does the following:

Removes any duplicate query string parameters from the url
Removes any query string parameters specified within the 2nd argument (optional array)
Examples:

stripUrlParams('www.codewars.com?a=1&b=2&a=2') // returns 'www.codewars.com?a=1&b=2'
stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b']) // returns 'www.codewars.com?a=1'
stripUrlParams('www.codewars.com', ['b']) // returns 'www.codewars.com'
 */