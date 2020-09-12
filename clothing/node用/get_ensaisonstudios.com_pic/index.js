let fetch = require('node-fetch')
let fs = require('fs')




let pageUrl = [
    'https://www.ensaisonstudios.com/collections/dresses',
    'https://www.ensaisonstudios.com/collections/dresses?page=2',
    'https://www.ensaisonstudios.com/collections/jumpsuit',
    'https://www.ensaisonstudios.com/collections/outerwear',
    'https://www.ensaisonstudios.com/collections/pants',
    'https://www.ensaisonstudios.com/collections/skirts',
    'https://www.ensaisonstudios.com/collections/sets',
    'https://www.ensaisonstudios.com/collections/tops',
    'https://www.ensaisonstudios.com/collections/sweaters',
]

let allLink = []

go()
async function go() {
    for (const url of pageUrl.filter(f => Boolean(f))) {
        let d = await fetch(url).then(d => d.text())
        let tt = d.match(/data-src=".*?"/ig)
        tt = tt.map(m => {
            m = m.replace('data-src=', 'https:')
            m = m.replace('"', '')
            m = m.replace('{width}', '2048')
            return m
        })
        tt.map(m => {
            let ll = m
            let num = ['_1_', '_2_', '_3_', '_4_']
            let num2 = ['_', '_2_', '_3_', '_4_']
            let is_ = num.filter(f => ll.includes(f))[0]
            if (is_) {
                num.map(_ => {
                    allLink.push(ll.replace(is_, _))
                })
            } else { 
                num2.map(_ => {
                    allLink.push(ll.replace('_', _))
                })
            }
        })

    }
    console.log(allLink);
    console.log('link获取完毕');
    let dowloadOk = []
    allLink = allLink.filter(f=>f.match(/ies.*?g/ig))
    for (const imgUrl of allLink) {
        // console.log(imgUrl.match(/ies.*?g/ig));
        // if(!imgUrl.match(/ies.*?g/ig)) console.log(111111,imgUrl);
        
        try {
            fetch(imgUrl).then(d=>{
                var writeStream = fs.createWriteStream(`img/${imgUrl.match(/ies.*?g/ig)}`)
                writeStream.on('finish', ()=>{
                    console.timeEnd.bind(console, 't')
                    dowloadOk.push('1')
                    console.log(`下好${dowloadOk.length}张`);
                    if(dowloadOk.length === allLink.length){
                        console.log('✅ 全部下载完毕');
                    }
                })
                d.body.pipe(writeStream)


            });
        } catch (error) {
            console.log('❌ 错误地址')
        }
        
        
    }

}