export default function sum(numbers) {
  try {
    if (typeof numbers !== 'string') throw new Error('Input must be a string');
    
    const numbersLength = numbers.length;
    if (numbersLength === 0) return 0;
    if (numbersLength === 1) return Number(numbers);
  
    let sum = 0;
    let delimiter = ',';
    if (numbers.includes('//') && numbers.includes('\n')) {
      delimiter = numbers.charAt(2);
      numbers = numbers.substring(4, numbersLength);
    }
  
    let negativeNumber = "";
    let input = numbers.replaceAll('\n', ',').split(delimiter);
    input = input.forEach(num => {
      if (num < 0)
        negativeNumber = `${negativeNumber}${num}, `;

      sum += Number(num);
    });

    if (negativeNumber.length > 0)
      throw new Error(`negative numbers not allowed ${negativeNumber.substring(0, negativeNumber.length - 2)}`);

    return sum;
  } catch (error) {
    return error.message;
  }
}


const res1 = sum([]);
const res2 = sum("");
const res3 = sum("1");
const res4 = sum("1,5");
const res5 = sum("1\n2,3");
const res6 = sum("//;\n1;2");
const res7 = sum("-1,5");
const res8 = sum("-1,5\n7");
const res9 = sum("-1,5,-7");

console.log("res1 :", res1);
console.log("res2 :", res2);
console.log("res3 :", res3);
console.log("res4 :", res4);
console.log("res5 :", res5);
console.log("res6 :", res6);
console.log("res7 :", res7);
console.log("res8 :", res8);
console.log("res9 :", res9);
