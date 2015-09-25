// A great fit for destructuring are things like regular expressions, where you would just love to name parameters without having to resort to index numbers.

function getUrlParts(url) {
  var magic = /^(https?):\/\/(ponyfoo\.com)(\/articles\/([a-z0-9-]+))$/
  return magic.exec(url)
}

var parts = getUrlParts('http://ponyfoo.com/articles/es6-destructuring-in-depth')
var [, protocol, host, pathname, slug] = parts

console.log(protocol);
console.log(host);
console.log(pathname);
console.log(slug);