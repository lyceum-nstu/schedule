'use strict'

document.getElementById('schoolName').innerHTML = NIKA.SCHOOL_NAME
document.getElementById('cityName').innerHTML = NIKA.CITY_NAME
document.getElementById('className').innerHTML = NIKA.CLASSES[classID]

function getData(classInputName = '8а') {
	let text = '<div class="day">'
	let day = 0
	let classID

	// Поиск класса
	Object.entries(NIKA.CLASSES).forEach(([classIdFor, classNameFor]) => {
		if (classNameFor == classInputName) return (classID = classIdFor)
	})

	Object.entries(
		NIKA.CLASS_SCHEDULE[Object.keys(NIKA.CLASS_SCHEDULE)[0]][classID]
	).forEach(([lessonID, schedule]) => {
		if (lessonID[0] != day) {
			text += `</div><div class="day">`

			let dayName = NIKA.DAY_NAMES[lessonID[0] - 1]
			text += `<h2>${dayName}</h2>`
			day = lessonID[0]
		}

		let room = NIKA.ROOMS[schedule.r[0]]
		let subject = NIKA.SUBJECTS[schedule.s[0]]
		let teacher = NIKA.TEACHERS[schedule.t[0]]

		text += `<p>${room} ${subject} - ${teacher}</p>`
	})

	document.getElementById('text').innerHTML = text
}
