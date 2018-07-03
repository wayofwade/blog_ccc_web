'use strict'

var fs = require('fs')

var ws2 = fs.createWriteStream('text.txt')
ws2.write(new Buffer('使用Stream写入二进制数据...\n', 'utf-8'))
ws2.write(new Buffer('END.', 'utf-8'))
ws2.end()
