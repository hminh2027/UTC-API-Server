const cheerio = require('cheerio')

module.exports.getSchedule = (html) => {
    let data = []
    const $ = cheerio.load(html)
    $('.cssRangeItem3', html).each((index, elem)=>{
        const subject = $(elem).find('td:eq(2)').text().replace(/\n/g, '').replace(/\t/g, '')
        const time = $(elem).find('td:eq(4)').text().replace(/\n/g, '').replace(/\t/g, '')

        data.push({subject,time})
    })
    return data
}

module.exports.getCredits = (html) => {
    let data = {
        total: 0,
        finished: 0
    }

    const $ = cheerio.load(html)
    $('.cssListItem', html).each((index, elem)=>{
        data.total += Number($(elem).find('td:eq(5)').text().replace(/\n/g, '').replace(/\t/g, ''))
        data.finished += Number($(elem).find('td:eq(6)').text().replace(/\n/g, '').replace(/\t/g, ''))
    })
    
    $('.cssListAlternativeItem', html).each((index, elem)=>{
        data.total += Number($(elem).find('td:eq(5)').text().replace(/\n/g, '').replace(/\t/g, ''))
        data.finished += Number($(elem).find('td:eq(6)').text().replace(/\n/g, '').replace(/\t/g, ''))
    })

    return data
}