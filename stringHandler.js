const moment = require('moment')

module.exports.stringHandler = (schedule) => {
    const today = moment()

    let rs = [[],[],[],[],[],[]]
    let check = false

    schedule.map(e=>{
        const period = e.time.split(':')[0]
        const from = period.split(' ')[1]
        const to = period.split(' ')[3]
        if(today.diff(moment(from, "DD/MM/YYYY"), 'days') > 0 && today.diff(moment(to, "DD/MM/YYYY"), 'days') < 0) {
            const time = e.time.split(':')[1]
            const days = time.trim().split('\Thứ')
            days.map(d=>{
                if(d=='') return
                const day = d.split('tiết')[0]
                const shift = d.split('tiết')[1]
                rs[day-2].push({
                    subject: e.subject.split('-')[0],
                    time: 'Tiết ' + shift
                })
            })
          check=true
        }
    })
    if(!check) return
    return rs
}