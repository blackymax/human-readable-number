module.exports = function toReadable (number) {
  let b = number;
  let obj = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
  }
  let arr =String(b).split('');
  let str = '';

  if (arr.length === 3){
    let str1 = String(arr[1]+arr[2])
    if (Number(str1)<20 && Number(str1)>10){
    str = obj[arr[0]]+' hundred '+obj[String(arr[1]+arr[2])]
    }
    if (Number(arr[1])===0){
      str = obj[arr[0]]+' hundred '+obj[arr[2]]
    }
    if (Number(str1)>=20 && Number(str1)<100){
      str = obj[arr[0]]+' hundred '+ obj[arr[1]*10] +' '+ obj[arr[2]]
    }
  
    if (Number(arr[2])===0){
      str = obj[arr[0]]+' hundred '+obj[arr[1]*10]
    }
    if (Number(arr[1])===0 && Number(arr[2])===0){
      str = obj[arr[0]]+' hundred'
    }
  }
  else if(arr.length === 2){
    let str2 = String(arr[0]+arr[1])
    if (Number(str2)<20 && Number(str2)>10){

      str = obj[String(arr[0]+arr[1])]
      }
      if (Number(arr[1])===0){
        str = obj[arr[0]*10]
      }
      if (Number(str2)>=20 && Number(str2) < 100 && Number(arr[1])!==0){
        str = obj[arr[0]*10] +' '+ obj[arr[1]]
      }
    


  }
  else{ 
    str = obj[arr[0]]

  }
  return str
}