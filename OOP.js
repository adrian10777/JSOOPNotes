//OOP is programming paradigm based on concept of objects
//paradigm = style of the code, or how we write/ organize code

/*
We use objs to model, so to describe aspects of 
the real world like a user or to do list item
or even more abstract feutures like an HTML component or some kind of data structure

now as we already know, objects can contain data which we call properties
also code which we call methods. By using objects we pack all the dat and corresponding behavior into 1 big block

const user = {
    user: 'Jonas',
    password: 'dk23s
}

login(password) {
    login logic
},

sendMessage(str) {
    //Sending logic
}

objects are supposed to be blocks

OOP objects are self contained pieces of code/ blocks of code like small sapps
on their own, we then use these objects as building blocks of our apps
and make objs interact with one another. Now these interactions
happen through a so called public interface, also called API
this interface is basically bunch of methods that a code outside of objects
can access and we use to communicate with obj

Why does OOP exist?
this paradigm was developed with the goal of organizing code.
to make code mor eflexible and easier to maintain
before OOP, we might have a bunch of codes scattered across multiple functions or even in the global
scope without any structure. This crazy style of code is
what we usually call sphaghetti code makes it hard to
maintain large code bases and let alone add new functionalities to it
The idea of OOP was basically created as a solution to this problem.
Apparently it worked because today OOP is most popular most widely used programming paradigm
in large scale software engineering. OOP is not only way
of writting organized and maintainable code.
Theres many other paradigms that have become popular and one of them is functional programming, allows us to achieve same goal of basically avoiding spaghetti code

using obj is nothing new at this point, we've been using them all the time
but until now we used obj as loose collections of data and without making them interact with one another.
We did not have a way to generate objs programmatically
all we did was use simple obj literals,but in OOP we need a way to
generate to create new objs from our code. To do that
in traditional OOP we use something called classes.

class is a blueprint which can then be used to create new objects
based on the rules described in the class, so just like an architecture
where architect develops blue print to exactly plan and dexribe house
but blueprint is just abstract plan / set of rules but nothing tangible that you can actually touch
but from that blueprint many real houses can then be built in the real world and with
classes its just the same, lets take a look at this fictional user class as an example
fictional because its not actual JS syntax, JS does not actually support real classes like I am explaining here
we do have a class syntax in JS too, but it still wORKS A BIT DIFF

Idea of creating objects from a kind of blueprint is a very useful mental model to have, because in general
terms this is how OOP works across all languages, and that includes JS
so that's the reason why I am showing you this here as a conceptual overview and to have a mental model

we call all objs created through a class, 
instances of that class
again, an instance is a real object that we can 
use in our code, which was created from a class, 
and a class itself is not an object.

Back to blueprint analogy, this instance is like a real house, created from the abstract blueprint created by he architect
and the beauty of this is that now we can use class to create as many instances as we need inour app, just
like we can build multiple houses from just 1 blueprint
all of these instances these obj, can have diff data in them but they all share same functionality which is to log in and send messages.

We can create classes to generate objects from these classes,
we know how classes work but next ? is how do we design a class?
How do we model real-world data into classes?

these ? are just like an architecture student asking how do we actually plan and design a house
not a single correct way of designing classes

but 4 fundamental principles to guide us towards a good class implementatation

techniques can be used outside of OOP, but especially relevant in this context

abstraction = ignoring o hiding details that dont matter,This allows us to get an overview perspective w.e it is 
we are implementing instead of messing with details that don't really matter to our implementation.
Allowing us to get an overview perspective of the thing we are implementing, instead of messing with details that don't really matter to our implementation.

lets say we are implementing a phone for a user to use
without abstraction we could design our class to include everything about a phone including internal stuff
As a user interacting with phone, do we really need all of this detail, no
so in reality when we interact with a real phone all of these details have been extracted away from us as the user
all we are left with is a simple phone that we only interact with

abstraction is really important not just in OOP but in programming.
In fact we create and use abstractions all the time.
addEventListener, we don't know how it works behind scenes, no, but we don't care either.
We don't have to, because once more the low level details of how exactly it works has been abstracted away from us, we are simply the user so we can simply use that
function without completely understanding it and implementing it ourselves.
Thats abstractions which blends with next principle encapsulation

encapsulation = Keeping properties and methods private inside the class,
so they are not accessible from outside the class. Some methods can be exposed as a public interfact (API).

interactions btwn objects happen through a public interface and going back to
ex of user, this is what private properties might llok like conceptually

User {
    user,
    private password,
    private email

    login(word){
        this.password === word
    }
    comment(text) {
        this.checkSPAM(text)
    }
    private checkSpam(text){
        //verify logic
    }

    this private keyword here actually does not exist in JS
    as we already know outside code now can't access these properties
    how ever inside the class they are accessible

    password is necessary in log in method
    there we can use it, and by having these critical properties
    nicely encapsulated like this, we prevent external code
    from accidentally manipulating this internal state. BTW the term state
    simply refers to an objects data, anyway this is
    really important because allwoing external code
    to manipulate internal state directly can cause many kinds of bugs
    especially in large code bases and developer teams. Now as you see theres also a private method, the
    checkSPAM method, its not accessible form outside the class but its used internally to check if a comment is spam or not
    so we want no one outside of the class to be able to use this method
    and so basically we don't make it part of the public interface
    so public interface is all methods that are not private, not encapsulated
    making methods private makes it easier for us to change our code without breaking code from the outside
    which might rely on some of these methods

    if checkSPAM method was public then it can be used anywhere in code
    and if we then change the implementation of method it might
    break that code that is relying on it, so again this helps avoiding bugs
    and also spaghetti code. This is not a theory
    this is a real scenario.Real reason why encapsulation and private methods and properties exist
    so in summary we should always have the goal to nicely encapsulate most of our state and methds and only leaving
    essential methods public for the reasons explained.


}


inheritance = lets say we have 2 classes, User and Admin
as we can see they have a lot in common

that actually makes sense because an admin is also a user
in OOP we have 2 classes closely related we can have 1 class inherit from the other
one parent class and one child class, and the child class
then extends the parent class.
Just like me as a child, inherited feutures from parents, a child
class inherits all props and methods from its parent class
in more formal terms, inheritance makes all properties and methods of a certain class
available to a child class, which of course then forms a hierachy btwn these 2 classes. The goal of this is to reuse logic that is common to both of the classes
in this case both the admin and the user need to log in and so intead
of writting that logic twice it makes sense to inherit the login method from the more global class which is the parent class User to the morespecific class Admin
of course a child class can then also have its own methods and properties at the en dof the day
the child class ends up with some methods and props from its parent and ome o f its own
we can say admin is also a user but basically an extended user so with some added functiionality

inheritance = making all properties and methods of a certain class available toa child class, forming a hierachial relationship between classes.
This allows us to reuse common logic and to model real world relationships

polymorphism  =  A child class can overwrite a method it inherited from a parent class [its more complex bu]
In context of OOP in simple terms, polymorphism means child class can overwrite a method that it inherited forom
a parent class, here are our user and Admin classes again
but now we have a 3rd class which is the author,
admin and author are special kinds of users
so it makes sense they both inherit from parent user class just 
therefore they inherit all the properties and methods from User class
but we are going to focus on login method now
lets say admin requires a different kind of login method
a more secure one which has 2 factor authentication
and lets say that we also need a special log in methods for authors
how do we give them diff log in methods, well tis simple
in each class we simply just write a new method which is also called log in and then according to polymorphism that login method will overwrite the login method which has been inherited from the user class and that's it

JS OOP diff from OG OOP
diff ways of implementing this paradigm in JS

process of creating an instanse is called instantiation

How does OOP work in JS
in JS we have something called prototypes
and all Objects in JS are linked to a certain prototype object
so we say that each object has a prototype and now here comes the magic
the protorype object contains methods and properties that
zthat all the objects that are linked to that prototype can access and use.
this behavior is called prototypal inheeritcance

Prototypal inheritance: the prototype contains methods (behavior)
that are accessible to all objects linked to that prototype

prototypal inheritance means that all objects that are linked to a certain prototype obj can use the methods and properties that are defined on that prototype
basically objects inherit methods and properties from the
prototype which is the reason why this mechanism is called prototypal inheritance
note that this inheritance is different from the inheritance  from clas inheriting from another class
but this case is an instance inheriting from a class
objects delegate behavior to the linked prototype object
behavior = methods
besides prototypal inheritance, we also call this mechanism delegation
objects delegate their behavior to the prototype
in classic OOP with classes, the behavior (methods) are actually copied from the class to the object
this is different

an example of this is each time we use an array method like Map
we are able to use that method because of prototypal inheritance
when you go to MDN to check docs for arr methods is that its actually called
array.prototype.map, why is this relevant? what does this mean?
arr.prototype is prototype obj of all arr we create in JS
like this ex arr called num, this prototype obj contains all arr methods including map
this is where they are defined
since array.prototype is the prototype of the num array, it means
that num is linked to that prototype and therefore it has access to all the methods that
are defined on the array.prototype object just like the map method
our array inherits the map method or we can also say
that the array delegated the behavior of mapping to its prototype
so u can choose w.e makes more sense, but what matters
is map method is not defined on the num arr itself, but on its prototype

3 ways of implementing prototypal inheritance in JS

How do we create prototypes? how do we link objects to prototypes?
how can we create new objects, without having classes?
from which we can instantiate objects

basically how do we implement OOP in JS in practice?

In JS there's 3 diff ways of doing all of this

the constructor function 
a way of creating obj programmatically using a function
which will set new objects prototype
this is how built in obj like arr, maps, or sets are implemented
also this is how OOP has been done in JS basically since the beginning

ES6 CLASSES = 
introduced classes into JS, es classes are the more modern way of doing OOP in JS
however keep in mind these are not the kind of classes we talked about in the last lecture and in the last slide
they are syntactic sugar over constructor functions
this means es6 classes are basically just a layer of
abstraction over constructor functions so its really just a nicer
syntax that makes it easier for new comers to do OOP in JS, but behind
the scenes ES6 classes are implemented with constructor functions
and so they also use prototypal inheritance just like we learned
in the last slide, finally theres also the object..create(
    the easiet most straightforward way of linking object to prototype object
    not as used as other 2 methods as we will see

1 important thing to keep in mind is that the 4 principles of OOP
are still valid with prototypal inheritance
)

*/

'use strict';

//static method, built in arr method Array.from()
//converts any arr like structure to a real array
//Array.from(document.querySelectorAll('h1'))
//from method is attached to the Array constructor, we can't use from method on an arr
// [1,2,3].from() is not going to work, from is not a function
//from(), is attached to the entire array constructor and not to prototype property of the constructor
//therefore all the arrays do not inherit this from()
//because its not on their prototype, just attached to the constructor itself
//Array.from() just a simple function that is attached to Arr constructor
//reason is so devs know it is related to arrays
//from() is in Array namespace
//Number.parseFloat() another static method, static on Number constructor, not available on numbers but only on this constructor


//we can use constructor functions to build an
// object, we can use constructor functions to build an object using a function
// a constructor function is a normal function
// only diff btwn reg function and function constructor
//is that we call a constructor function with the new operator

// inOOP convention that constructor functions start with capital letter
//other buiilt in constructors like arr or map follow that convention as well
const Person = function(firstName, birthYear) {
    //instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    //never create method inside of a constructor function
    //imagine we create thousands of person obj using this constructor function
    //then what happens is each of these obj wil carry this function here
    //bad for performance of code.

    this.calcAge = function() {
        console.log(2037 - this.birthYear);
    }

    //to solve this prob, use prototypes and prototypal inheritance

} //arrow function will not work as a function constructor
//arrow functions dont have this keywork so only use function declarations and expressions
//rememeber this function is going to produce an object and in this case for a perosn

//we call constructor using the new keyword
const jonas = new Person('Jonas', 1991);
const matilda = new Person('Matilda', 2017);
const adrian = new Person('Adrian', 1998)
//new operator is special, cause it calls this function (person function)
//but does more than just that

//behind the scenes there have been 4 steps
/*
4 steps
1. a new empty object is created.

2. The function is called and in this function call
the this keyword will be set to this newly created
 object
 basically in execution context of person function
 the this keyword will point to this new empty object that was created in step #1
 remember all of this happens because we are 
 calling the function using the new operator here

3. newly created object is linked to a prototype
for now we just care about crating object itself

4. object created in beginning is then auto
 returned from the constructor function

 the function auto returns that empty object from the beginning
 but at this point the obj no longer needs to be empty
 and this is the trick of making the constructor function work
 
getting cl of this gives name of constructor and empty object
with this knowledge, we already know that in the end of this function the this keyword
will basically be returned, and so w.e we add to that empty object
will then be returned from the function
and that returned object is going to be the object
we are trying to build

in classical OOP an object created from a class is an instance
we didnt make a class here, JS doesnt have classes in a sense of traditional OOP
but we did create object from a constructor function
constructor functions have been used since beginnning of JS to simulate classes
therefore we can say that Jonas here is an instance of person
there is an operator to test for this

 */
console.log(jonas instanceof Person);

//static methood
Person.hey = function() {
    console.log('Hey there');
    console.log(this); //constructor function (person)
}
Person.hey(); //w.e obj calling method will be this key in function^
//cant do Jonas.hey(), not in prototype of Jonas object



// Prototypes

/**
 each and every funciton in JS auto has a property 
 called prototype and that includes constructor functions
 
 every obj created by constructor function will get access
 to all methods and properties defined on the constructor
 prototype property.

 all obj created through this constructor function willl inherit
 will get access to all methods and properties defined on the rpototype property

 */
Person.prototype.calcAge = function() {
    console.log(2037 - this.birthYear);
}
//prototype property of the constructor function

jonas.calcAge(); //gives us correct age

//we have access to calcAge in Jonas because of prototypal inheritcance
//even though Jonas doesnt contain it, it can still be used
//the this keyword in each obj is set to obj that is calling method

//the calcAge method located inside prototype property of Person
//works because any obj has access and props from its prototype
//and prototype of jonas and matilda is Person.prototype

//each obj has a special property called __proto__
console.log(jonas.__proto__);
//this is the prototype of Jonas, not the prototype property
//but simply the prototype
//prototype of jonas obj, is prototype property of constructor function
console.log(jonas.__proto__ === Person.prototype); //true

//shouldn't Person.prototype be the prototype of Person?
//should this prototype property in Person.prototype not be the prototype of person?
//NO, Person.prototype is not the prototype of Person,
//instead it's what's gonna be used as prototype of all all obj
//created with Person constructor function
//Jonas prototype is the prototype property of Person constructor function
//theres other built in methods we can use to prove ihis
console.log(Person.prototype.isPrototypeOf(jonas)); //true
//confirms that Person.prototype is the prototype of Jonas
//but Person.prototype is not prototype of Person
//this confusion comes from bad naming of this property
//the fact that Person.(prototype) is called prototype it implies its prototype of Person
//causes confusion, should not be called prototype
//should be called prototypeOfLinkedObjects

//where does this __proto__ on jonas come from? remember the new operator
//links empty new object to prototype, it is step #3 which creates the __proto__
//for jonas. It creates proto property and sets its value to the prototype property
//of the function that is being called, that is what is written in Person.prototype
//sets __proto__ prop on object to the prototype property of the constructor function
//so this is how JS knows internally that the Jonas obj is connected
//to person.prototype, in fact when we check out Jonas obj we can indeed also see hat 
//property in here, then u see exactly person.proptotype which contains calcAge function

// we can also set properties on the prototype
//so not just methods

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

//both these obj get access to this prop from the prototype
//this prop is not directly in obj, own properties are only ones declared directly on obj it self
//not including inherited props
console.log(jonas.hasOwnProperty('species')); //false
//this prop is not inside Jonas obj, but has access to it because
//it has access to the property through Person constructor function

//PROTOTYPAL INHERITANCE AND PROTOTYPE CHAIN

/*
constructor function has a prototype property
which is an object, inside that object we defined the calcAge method
Person.prototype has a reference back to 
Person which is the constructor property
person.prototype.constructor is going to point back to Person itself
person.prototype is actually not the prototype of Person but
of all the objects that are created through the Person function

lets analyze how an obj is created using the new operator and 
the constructor function

when we call function with new operator, 1st hting that happens is that
a new empty obj is created instantly

then the this keyword and the function call is set set to the newly created obj

inside the functions execution context this is now the new {}

that's why in function code we set name and birthyear props on this keyword
because doing so will set them on the new obj

next comes a magical step
the new object is linked to the constructor functions prototype property
so person.prototype, this happens internally by adding __proto__
to the new object
so Person.prototype is now the new objects prototype denoted in the __proto__
of jonas. __proto__ always points to an objects prototype true for all obj in JS

finally the new object is auto returned from the function unless
we explicitly return something else, but in constructor function like Person
we usually never do that

with this the result of new operator and the Person constructor function
is a new object we just created programmatically, now 
stored in Jonas var

this whole process, is how it works with function 
constructors and also with ES6 classes
but not with the Object.create that we will use later

why does this work this way? and why is this technique powerful and useful

calling calcAge function on jonas obj, JS can actually not find the calcAge function
directly in the jonas obj, it is simply not there

so what happens now? If a property or a method cannot be found
in the object, JS will look into its prototype, and there it is.

there is calcAge function that we were looking for and so JS
will use that. that's how calcAge function can run correctly and return a result
the behavior just described is what we call prototypal inheritance
or delegation

so Jonas obj inherited calcAge method from its prototype
it delegated calcAge functionality to its prototype

with this we can create as many Person obj as we like
all of them will then inherit this method
we can call calcAge() on all Person obj, without method being directly attached to 
all obj themselves, this is essential for code performance

just imagine that we had 1,000 obj in the code and all of them will have
to carry calcAge function around ? better to use it from common prototype

the fact that Jonas is connected to a prototype and the ability of looking up
methods and properties in a prototype is what we call
prototype chain

so jonas obj and its prototype form a prototype chain, but the 
prototype chain does not end here.

lets remember that Person.prototype is also an object
all obj in JS have a prototype
therefore Person.prototype must also have a prototype
and the prototype of Person.prototype is Object.prototype. Why?
Person.prototype is just a simple obj, which means it has been built
by built in obj constructor function, this is actually the function
that is called behind the scenes w.e we create an Obj literal

the {} are just a shortcut to writting new obj

Person.prototype itself needs to have a prototype and since it has
been created by Object constructor function, its prototype is going
to be Object.prototype. Same logic as with the jonas obj
since Jonas has been built by a person, Person.prototype is
prototype of Jonas. This entire series of links btwn Objs is what is called
the prototype chain. Object.prototype is at top of prototype chain
which means its prototype is null
its __proto__ will simply point to null which then marks end of
prototype chain. In a way the prototype chain is very similar to the scope chain but with prototypes

in scope chain w.e JS can find a certain variable
in a certain scope, it looks up into the next scope in the scope chain
and tries to find the variable there, on the other hand in the
prototype chain, w.e JS can find a certain prop or method
 in a certain OBJ, its gooing to look up into the next prototype in
 the prototype chain and see if it can find it there. 
 So again the prototype chain is pretty similar to the scope chain, but instead
 of working with scopes, it works with props and methods in objs,
 now lets actually see another example of a method lookup

*/

/*
PROTOTYPAL INHERITANCE ON BUILT IN OBJECTS

 */
//Person.prototype
console.log(jonas.__proto__);
//Object.prototype
console.log(jonas.__proto__.__proto__);
//Null
console.log(jonas.__proto__.__proto__.__proto__);

//strange constructor property
console.log(Person.prototype.constructor); 
//this gives us function
//Person.prototype itself has constructor property
//this points back to Person itself

//if we want to inspect function itself we need to use dir
console.dir(Person.prototype.constructor); 
//this shows constructor property points back to person

//lets look at prototype of function

//functions are objects which means they also have prototypes

//prototypes of arrays

const arr = [3,6,4,5,6,9,3];
console.log(arr.__proto__); //prototype of arr contains all methods available for arr
//each arr doesn't contain these methods but inherit these methods
console.log(arr.__proto__ === Array.prototype);
//Array.prototype, prototype prop of constructor is going to be
//prototype of all the obj created by that constructor

//just like an obj, using this [] is same as using new Array
//therefore whenever [] is created, created by constructor

console.log(arr.__proto__.__proto__); //back to having Object.prototype
//prototype itself is an obj, and so any obj has access to all of thes emethods

//prototypal inheritance is really a mechanism for reusing code
// all these built in methods have to exist only once in JS engine and
//then all the arr in our code get access to the 
//functions through the protype chain and prototypal inheritance

//any arr inherits all their methods from its prototype

//we know that any arr inherits all their methods from its prototype
//and therefore we can use that knowledge to extend the
//functionality of arr even further
//Array.protoype.any new method that any arr method inherits
Array.prototype.unique = function(){
   return [...new Set(this)]
};

console.log(arr.unique);

//extending prototype of built in object not good a idea
//why? next version of JS might add method with same name we are adding
//ex: unique(), but it might work in a diff way, so ur code 
//will use the new method which remember now works diff, then
//that will break your code.
//2nd reason, is cause when u work on team of devs, this is bad idea
//cause if multiple devs implement same method with diff name
//that creates a ton of bugs.

//we can select this DOM element here
const h1 = document.querySelector('h1');
//all DOM elements are behind the scenes objects
console.dir(h1); //gives actual obj
// the prototype is an HTML heading element
//this is now an HTMLElement, which have objects 
//they contain diff elements, diff like constructor functions
//HTML element was a child element of element, and element itself
//child of Node, therefore prototype of element is going to be node
//prototype of node, is event.target, huge prototype chain
//ends in Object
console.dir(x => x + 1);
// function is an obj, therefore has prototype, this case
//prototype contains methods use don functions
//apply, bind, call methods
//reason why we could call methods on functions



//CODING CHALLENGE #1

/*
1. Use a constructor function to implement a Car.A
car has a make and a speed property. The speed
property is the current speed of the car in km/h;

2. Implement an 'accelerate' method that will
increase the car's speed by 10, and log the new speed
to the console;
3. Implement a 'brake' method that will decrease the
car's speed by 5, and log the new speed to the
console;
4. Create 2 car objects and experiment with calling
'accelerate' and 'brake' multiple times on each of
them.
DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: Mercedes' going at 95 km/h
GOOD LUCK
*/

// const Car = function(make, speed){
//     this.make = make;
//     this.speed = speed;
// }

// Car.prototype.accelerate() = function() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
// }

// Car.prototype.brake() = function() {
//     this.speed -=5;
// }

// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);

// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();

//In OOP we pack both the functionality and the data into objects
//Both bmw/mercedes contains the state of the car (speed and make)
//and contains the functionality to manipulate its own data


/**
 classes in JS not same as in Java or CSS

 classes in JS are just syntactic sugar over what we learned in last few vids
 they still implement prototypal inheritance behind the scnes
 with syntac that makes more sense for ppl coming fromm other
 programming languages

 */
//class expression
// const PersonCl = class {} //like function without args
//class NameOfClass = class declaration, we also have expressions
class PersonCl {
    constructor(fullName, birthYear){ //works like constructor function, but this one is a method of this class
    //needs to be called constructor, we pass in args for the props we want object to have

    //set props of obj like this
    this.fullName = firstName;
    this.birthYear = birthYear;
}
//methods
//all methods in class(outside of contructor) will be inprototype of objects
//not on the objects themselves, this is prototypal inheritance

//methods added to .prototype property
    calcAge() {
        console.log(2037 - this.birthYear);
    }

    greet() {
        console.log(`Hey ${this.firstName}`);
    }

    get age(){
        return 2037 - this.birthYear;
    }

    set fullName(name){
        if(name.includes(' ')) this._fullName = name; //name that was received
        else alert(`${name} is not a full name`)
    }

    get fullName() {
        return this._fullName;
    }

    //static

    static hey() {
        console.log('Hey there');
        console.log(this); //constructor function (person)
    }
}
//classes are special type of functions, behind the scenes

const jessica = new PersonCl('Jessica Davis', 1996)
jessica.calcAge();
console.log(jessica.__proto__ === PersonCl.prototype);
jessica.greet()
console.log(jessica.age);


/*classes are not hoisted, even if they are class declarations

fucntion declarations are hoisted means we can use them before they are declared in code
with classes does not work

just like functions, classes are also 1st class citizens, means
we can pass them into functions and also return them from functions
because classes are really just a special kind of function behind scenes

the body of a class, is always executed in strict mode
even if not activated above

constructor functions are not old syntax, so fine to keep using

some say classes are bad because they hide nature of JS, but its okay to use if u know
what u are doing

classes visually put all code that belongs to certain class

all data and behavior go into one nice code block unlike
function constructors which looks like a big mess*/

// Getters/Setters - common with all objects

//every obj in JS can have setter and getter properties
//we call these special props, assessor props
//more normal props are called data props

/**
 getters/setters are funtions that get and set a value
 just as name says but on the outside they still look like regular
 properties
 */

 const walter = new PersonCl('Walter', 1965)

PersonCl.hey();

 const account = {
     owner: 'jonas',
     movements: [200, 530, 120, 300],

     //adding getter to obj
     get latest() {
        return this.movements.slice(-1).pop();
        //returns arr with last position, take it out using pop
        //or destructuring
        
     },

     set latest(mov) {
         //add movement to arr
         //setter method needs to have 1 param
         this.movements.push(mov);
     }
     //not necessary to specify both getter/setter

 };

console.log(account.latest);
//we use property, we dont call the method (latest) not (latest())

account.latest = 50;
//this is a property and not a method, for setter

//classes also have getters and setters and they do indeed work in the exact smae way

//setters/getters useful for data validation

//there is a 3rd way of implemeneting prototypal inheritance or delegation
/**
 funciton called Object.create();
 there is still idea of protypal inheritance, no prototype properties involved, no constructor functions and no new operator
 we can use Object.create() set prototype of object to any other object that we want
 */

 //this obj is going to be prototype of all Person objs
 const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    }
 }