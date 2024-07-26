/* eslint-disable @typescript-eslint/no-unused-vars */

// 1
function printfizzBuzz(n: number): void {
  if (n % 15 === 0) return console.log('FizzBuzz')
  if (n % 3 === 0) return console.log('Fizz')
  if (n % 5 === 0) return console.log('Buzz')
  return console.log(n)
}

function fizzBuzz(n: number): void {
  for (let i = 1; i <= n; i++) {
    printfizzBuzz(i)
  }
}

// 2
function plusMinus(arr: number[]): void {
  const length = arr.length || 0
  let pos = 0
  let neg = 0
  let zero = 0

  if (length > 0 && length <= 100) {
    arr.map((num) => {
      if (num > 0) pos++
      if (num < 0) neg++
      if (num === 0) zero++
    })
  }
  console.log((pos / length || 0).toFixed(6))
  console.log((neg / length || 0).toFixed(6))
  console.log((zero / length || 0).toFixed(6))
}

// 3
const sum = (arr: number[]): number => {
  let total = 0
  arr.forEach((el, key) => {
    total += el
  })
  return total
}

function miniMaxSum(arr: number[]): void {
  const min = Math.min(...arr)
  const max = Math.max(...arr)

  const arrSum = sum(arr)
  const minSum = arrSum - max
  const maxSum = arrSum - min

  console.log(minSum, maxSum)
}

// 4
function timeConversion(s: string): string {
  const chunks = s.split(':')
  let hours: string = chunks[0]
  const minutes: string = chunks[1]
  const secondChunk = chunks[2]
  const second: string = secondChunk.slice(0, 2)
  const format = secondChunk.slice(2)

  if (format === 'PM' && parseInt(hours) !== 12) {
    hours = (parseInt(hours) + 12).toString()
  }
  if (format === 'AM' && parseInt(hours) === 12) {
    hours = '00'
  }

  const result = [hours, minutes, second].join(':')
  console.log(result)
  return result
}

//5
function breakingRecords(scores: number[]): number[] {
  // Write your code here
  let minScore = scores[0]
  let maxScore = scores[0]
  let minCount = 0
  let maxCount = 0

  scores.forEach((score) => {
    if (score > maxScore) {
      maxCount++
      maxScore = score
    }
    if (score < minScore) {
      minCount++
      minScore = score
    }
  })
  return [maxCount, minCount]
}
