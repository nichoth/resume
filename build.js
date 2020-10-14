var hyperstream = require('hyperstream');
var fs = require('fs');
var marked = require('marked')

fs.readFile(__dirname + '/src/resume.md', function (err, mdContent) {
    var hs = hyperstream({
        'style': process.stdin,
        'body': {
            _appendHtml: marked(mdContent)
        },
        '#a': fs.createReadStream(__dirname + '/a.html'),
        '#b': fs.createReadStream(__dirname + '/b.html')
    })
})

