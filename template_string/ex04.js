var article = {
  title: 'Hello Template Literals',
  teaser: 'String interpolation is awesome. Here are some features',
  body: 'Lots and lots of sanitized HTML',
  tags: ['es6', 'template-literals', 'es6-in-depth']
}

var {title, teaser, body, tags} = article

tags.map(tag => `<li>${tag}</li>`).join('\n      ')