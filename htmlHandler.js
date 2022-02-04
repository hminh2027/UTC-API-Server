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

module.exports.getStudent = (html) => {
    let data = {}
    const $ = cheerio.load(html)

    data.lastName = $('#txtHoDem', html).val()
    data.firstName = $('#txtTen', html).val()
    data.gender = $('#gioitinh', html).text()
    data.studentId = $('#txtMaSV', html).val()
    data.studentBankAccount = $('#txtSoTaiKhoanNganHang', html).val()
    data.identityCard = $('#txtCMTND', html).val()
    data.birth = $('#txtNgaySinh', html).val()
    data.bornIn = $('#txtNoiSinh', html).val()
    data.country = $('#drpQuocTich', html).find('option[selected=selected]').text()
    data.tel = $('#txtDienThoaiCaNHAN', html).val()
    data.email = $('#txtEmail', html).val()

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