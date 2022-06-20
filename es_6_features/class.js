class biodata{
    constructor(fname,lname,gmail) {
        this.fname=fname
        this.lname=lname
        this.gmail=gmail

    }

    x =  50                 //non static variable
    static y= 70            //static variable

    Demo(){
        console.log(this.x);    //50      non static method invoking non static variable by this keyword
        console.log(this.y);    //undefined
        console.log(biodata.y);  //70     non static method invoking static variable by class name
        
    }
    static sample(){
        console.log(this.x);      //undefined
        console.log(this.y);      //70       static method invoking  static variable by this keyword
        console.log(biodata.y);   //70      
        console.log(b1.x);        //50       static method invoking non static variable by object instance
        console.log(b2.x);        //50
 
        //creating object
        let p = new biodata()
        console.log(p.b);          //accessing non static variable inside static method
         

        
    }

Demo()
{
    biodata.sample()      // invoking static method in non static method

}


static display2()
{
    this.sample()          //invoking static method inside static method
}


static display1(obj_ref)
{
    obj_ref.Demo()        //invoking non static method inside a static method

}
}
biodata.display1(b1)     //b1 is an instance variable   invoking non static method inside a static method


//create the instance of class
let b1 = new biodata("S", "K", "abnbvvffg")
let b2 = new biodata("T", "M", " abnkjklo,,nhbgh") 
// b1.display()        //non static
// biodata.sample()    //static

// console.log(b1.fname);      //S
// console.log(b2.gmail);      //abnkjklo,,nhbgh
// console.log(biodata.b);     // 87
// console.log(b1.a);          //26
// console.log(b2);           //biodata { a: 26, fname: 'T', lname: 'M', gmail: ' abnkjklo,,nhbgh' }
// console.log(b1);           //biodata { a: 26, fname: 'S', lname: 'K', gmail: 'abnbvvffg' }
// console.log(biodata);      //[class biodata] { b: 87 }

//b1.display()                //invoking static method in non static method

//biodata.display2()          //invoking static method inside static method