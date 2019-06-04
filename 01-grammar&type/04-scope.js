/**
 * SCOPE
 * Two types of scope in JavaScript- refers to where variables are defined and accessible
 * 
 * 1) Global Scope
 * 2) Local Scope
 */

/* var x = 12;
 function scope() {
     var x = 33;
     console.log(x); //33
 }
 scope();
 console.log(x); //12
 */

 /**
  * var y = 12;
  function scope() {
      y = 33;
      console.log(y);
    }
    scope();  //33
    console.log(y); //33
    */

    var x=12;
    function varTest(){
        var x = 33;
        if(1==1){
            var x = 45;
            console.log(x);  //45
        }
        console.log(x);  //45
    }

    varTest();
    console.log(x); //12
   

  /*let x=12;
  function letTest(){
      let x = 33;
      if(1==1){
          let x = 45;
          console.log(x);  //45
      }
      console.log(x);  //33
  }

  letTest();
  console.log(x);  //12
  

  const scope = 3;
  function constTest() {
      const scope = 1;
      if(true) {
          const scope = 2;
          console.log(scope);  //2
      }
      console.log(scope);  //1
  }

  constTest();
  console.log(scope); //3
   

 