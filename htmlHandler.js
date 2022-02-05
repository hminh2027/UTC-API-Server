const cheerio = require('cheerio')

module.exports.getSchedule = (html) => {
    let data = []
    const $ = cheerio.load(html)

    $('.cssRangeItem3', html).each((index, elem)=>{
        const subject = $(elem).find('td:eq(2)').text().replace(/\n/g, '').replace(/\t/g, '')
        const time = $(elem).find('td:eq(4)').text().replace(/\n/g, '').replace(/\t/g, '')

        data.push({subject, time})
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

module.exports.getMarks = (html, grade) => {
    let data = []
    const $ = cheerio.load(html)

    $('#tblStudentMark', html).find('tr').not('tr:eq(0)').each((index, elem)=>{
        let mark = $(elem).find('td:eq(12)').html()
        const subject = $(elem).find('td:eq(2)').text().replace(/\n/g, '').replace(/\t/g, '')

        if(!mark) return
        mark = mark.split('<br>').pop()

        if (grade)
        switch (grade) {
            case 'A':
            case 'a':
                mark >= 8.5 && data.push({subject, mark})
                break
            case 'B':
            case 'b':
                (7 <= mark && mark <= 8.4) && data.push({subject, mark})
                break
            case 'C':
            case 'c':
                (5.5 <= mark && mark <= 6.9) && data.push({subject, mark})
                break
            case 'D':
            case 'd':
                (4 <= mark && mark <= 4.9) && data.push({subject, mark})
                break
            case 'F':
            case 'f':
                (mark < 4) && data.push({subject, mark})
                break
            default:
                break
        }

        else data.push({subject, mark})
    })
    
    return data
}

module.exports.getGPA = (html, year) => {
    let data = {detailGPA:[], GPA: {}}
    const $ = cheerio.load(html)

    if (!year) 
        $('#grdResult', html).find('tr').not('tr:eq(0), tr:last').each((index, elem)=>{
            const year = $(elem).find('td:eq(0)').text()
            const term = $(elem).find('td:eq(1)').text()
            const scaleOf10 = $(elem).find('td:eq(2)').text()
            const scaleOf4 = $(elem).find('td:eq(4)').text()
            const credits = $(elem).find('td:eq(12)').text().replace(/\n/g, '').replace(/\t/g, '')
            
            data.detailGPA.push({year, term, scaleOf10, scaleOf4, credits})
        })
    
    else
        $('#grdResult', html).find(`tr:eq(${(year*3)}), tr:eq(${(year*3)-1}), tr:eq(${(year*3)-2})`).not('tr:last').each((index, elem)=>{
            const year = $(elem).find('td:eq(0)').text()
            const term = $(elem).find('td:eq(1)').text()
            const scaleOf10 = $(elem).find('td:eq(2)').text()
            const scaleOf4 = $(elem).find('td:eq(4)').text()
            const credits = $(elem).find('td:eq(12)').text().replace(/\n/g, '').replace(/\t/g, '')
            
            data.detailGPA.push({year, term, scaleOf10, scaleOf4, credits})
        })

    $('#grdResult', html).find('tr:last').each((index, elem)=>{
        const scaleOf10 = $(elem).find('td:eq(2)').text()
        const scaleOf4 = $(elem).find('td:eq(4)').text()
        const credits = $(elem).find('td:eq(12)').text().replace(/\n/g, '').replace(/\t/g, '')
            
        data.GPA = {scaleOf10, scaleOf4, credits}
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