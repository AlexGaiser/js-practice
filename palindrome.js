function panlindrome (a){
    let reverse = a.toLowerCase().replace(/\s/g,'').split('').reverse().join('')
    a = a.toLowerCase().replace(/\s/g,'')
   console.log(a)
   console.log(reverse) 
   console.log(a === reverse)
}

panlindrome('A man a plan a canal panama')