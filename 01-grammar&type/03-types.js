/**
 * Booleans
 * What is a boolean? Boolean can represent; true/false, yes/no, on/off
 */

 let i = true;
 let j = false;
 /**        (1)
  * 1-Keyword for boolean - no quotation marks
  */
 let on = true;
 let off = false;

 console.log(on);
 console.log(off);

 /**
  * Null
  * Null = empty value (not 0; not undefined)
  * It is like an empty container; nothing is in it, but it still exists as a space to fill
  */

  let empty = null;
  console.log(empty);

  /**
   * Undefined
   * Undefined = no value assigned (not even an empty container)
   * 
   * UNDEFINED IS NOT AN ERROR
   */

   let undef = undefined; //NEVER DO THIS
   console.log(undef);

   /* Null Vs. undefined
   Null is like a container with nothing in it. Undefined has never been set.*/

   /**
    * Numbers
    * Numbers are exacly what they sound like. Numbers. In JS, you don't need anything special to write them.
    */

    let degrees = 90;
    console.log(degrees);

    let precise = 999999999999999; //15 9s
    console.log(precise); //999999999999999

    let rounded = 9999999999999999; //(One more 9) JS gives you space for 15 9s before it rounds up to 10
    console.log(rounded); //10000000000000000

    let notQuite = (0.2 + 0.1);
    console.log(notQuite); //0.30000000000000004 JS rounds at a certain point, so if math is needed, beware

    /**
     * Strings
     * Srings are Datatypes used to represent text and are wrapped in either a single or double quote
     * Strings are primitive Datatypes. This also includes Numbers, Booleans, Null, Undefined, and others
     * 
     */

     let stringOne = "double quotes";
     let stringTwo = 'single quotes';
     
     let stringThree = "'Both'";

     console.log(stringOne, stringTwo, stringThree); //double quotes single quotes 'Both'

     let first = 1050 + 100;
     let second = '1050' + '100';

     console.log(typeof first); //number
     console.log(typeof second); //string

     /**
      * Objects
      * Objects are a collection of key value pairings. Denoted by curly braces.
      */
    let car1 = {
        color: 'red',
        tires: 4,
        extras: 'A/C and Radio',
        cool: true 
    };
    
    console.log(car1); //{ color: 'red', tires: 4, extras: 'A/C and Radio', cool: true }
    console.log(typeof car1); //object

    /*
    Arrays
    Arrays are containers that hold lists of items.

    let list = ['item1' ,      'item2' ,      'item3'];
        (1)   (2)  (3)

        1- name of the Arra, or list;
        2- The Array is inside of these square brackets
        3- Each item, regardless of datatype, is separated by commas

        Denoted by []
        Has values ('blue' , 'green' , 'yellow'), separated with commas
        */

        let burritos = ['large' , 4 , true];
        console.log(burritos); //[ 'large', 4, true ]
        console.log(typeof burritos); //object

        /**
         * Addition vs Concatenation
         * 
         * When JS sees code combining two or more numbers, it adds the values together using the built-in math functionality;
         * when it sees code adding together one or more strings, it changes and the plus sign becomes an assignment operator-
         * -it smashes the values together without trying to synthesize the values.
         */

         let third = 1050 + '100';

         console.log(third); //1050100
         console.log(typeof third); //string

         /**
          * With the plus operator, if 1 string and 1 number are given to the plus sign it returns a string.
          */


          let firstName = 'Megan';
          let lastName = 'Fonde';
          let houseNumber = 1315;
          let street = 'North Beville Avenue';
          let city = 'Indianapolis';
          let state = 'Indiana';
          let zipcode = 46201;

          console.log(firstName + " " + lastName + " " + houseNumber + " " + street + " " + city + " " + state + " " + zipcode);
          console.log(firstName, lastName + ",", houseNumber, street, city + ", " + state, zipcode);

          /**
           * Strings- Properties
           * 
           * Properties are qualities associated with a datatype.
           * Strings have properties, or the qualities associated with that string.
           * The length of a string is a property.
           */

           let myName = 'Megan';
           console.log(myName.length);

           /**
            * Methods
            * Methods are like tools that can help us manipulate our data.
            * .Property and .Methods() *no parenthesis for properties*
            */

            console.log(myName.toUpperCase());

            let home = 'My home is Indianapolis';
            console.log(home.includes('indianapolis'));

            let sent = 'This sentence will be split into individual parts';

            console.log(sent.split("e")); //[ 'This s', 'nt', 'nc', ' will b', ' split into individual parts' ]

        