const separateDMY = (date) => {
    if (!date || date === "")
        date = new Date()

    let dd = date.getDate()

    let mm = date.getMonth() + 1
    let yyyy = date.getFullYear()
    if (dd < 10) dd = '0' + dd
    if (mm < 10) mm = '0' + mm
    return {
        dd: parseInt(dd),
        mm: parseInt(mm),
        yyyy: parseInt(yyyy),
    }
}

const DateComparator = (date) => {
    const { dd, mm, yyyy } = separateDMY(date)
    const today = separateDMY(date)

    // today = mm + '-' + dd + '-' + yyyy;
    console.log(dd, mm, yyyy, today)
    // console.log(todays_dd, todays_mm, todays_yyyy)
}

DateComparator()