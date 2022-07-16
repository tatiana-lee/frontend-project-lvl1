function isPrime(num) {
  const halfNum = Math.floor(num / 2) + 1;
  let prime = num !== 1;
  for (let i = 2; i < halfNum; i += 1) {
    if (num % i === 0) {
      prime = false;
      break;
    }
  }
  return prime;
}

export default isPrime;
