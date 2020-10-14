var hyperstream = require('hyperstream');
var fs = require('fs');
var marked = require('marked')

fs.readFile(__dirname + '/src/resume.md', 'utf8', (err, mdContent) => {
    if (err) throw err

    var hs = hyperstream({
        'style': process.stdin,
        'body': {
            _appendHtml: marked(mdContent)
        }
    })

    var rs = fs.createReadStream(__dirname + '/src/resume.html')
    rs.pipe(hs).pipe(process.stdout)
})

