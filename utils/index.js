
const sleep = (ms) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(ms)
		}, ms)
	})

}


module.exports = {
	sleep,
}