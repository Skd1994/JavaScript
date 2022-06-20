function myself(f_name,l_name,company,array,number) {
    this.f_name=f_name
    this.l_name=l_name
    this.company=company
    this.array=array
    this.number=number
    
}
var op = new myself("s","k","Testyamtra","[10,20,30]",657)
var op1 = new myself("tanvi", "malahara", "augnito")

// console.log(op.company);           //Testyamtra
// console.log(op.f_name);            //s
// console.log(op.l_name);            //k
console.log(op);                   
// myself {
//     f_name: 's',
//     l_name: 'k',
//     company: 'Testyamtra',
//     array: '[10,20,30]'
//     number: 657
//   }
console.log(op1);
// myself {
//     f_name: 'tanvi',
//     l_name: 'malahara',
//     company: 'augnito',
//     array: undefined,
//     number: undefined
//   }