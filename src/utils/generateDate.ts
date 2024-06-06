import * as moment from 'moment'

const formDate = (timeObj: Date): string => {
	const day = timeObj.getDay() === 0 ? 'Chủ nhật' : `thứ ${timeObj.getDay() + 1}`
	const date = `${timeObj.getDate()}/${timeObj.getMonth() + 1}/${timeObj.getFullYear()}`
	const time = `${timeObj.getHours()}:${timeObj.getMinutes()}`
	return `${day}, ${time} ${date}`
}

const generaDate = (): { today: string; expireDay: string } => {
	const gapExpire = Math.floor(Math.random() * 29) + 1
	const today = new Date()
	const expireDay = moment(today).add(gapExpire, 'd').toDate()
	return {
		today: formDate(today),
		expireDay: formDate(expireDay)
	}
}

export default generaDate
