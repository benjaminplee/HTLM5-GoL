
load('./spec/lib/jspec.js')
load('./spec/lib/jspec.xhr.js')
load('lib/jquery.js')
load('lib/gol.js')
load('spec/unit/spec.helper.js')

JSpec
.exec('spec/unit/gol.spec.js')
.run({ reporter: JSpec.reporters.Terminal, fixturePath: 'spec/fixtures' })
.report()