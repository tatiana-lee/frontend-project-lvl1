function isPrime(num) {
	const sqrtnum = Math.sqrt(num)
	let prime = num != 1
	for (let i = 2; i < sqrtnum; i++) {
		if (num % i === 0) {
			prime = false
			break
		}
	}
	return prime
}

export default isPrime