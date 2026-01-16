'use strict';
// Today, We Will Be Learning About Objects, Specifically Object References,
// You'll Need To Know A Bit About Object References And Primitives Before This,
// As I Recommend, Asking AI, Watching Some Tutorials From Youtube, Or Of Your Choice,
// Visiting Websites Like StackOverflow, MDN Or W3Schools, Etc,
// This Topic Might Get Confusing While Your Researching On This,
// So Best Of Luck, If You've Been Following Me Here, Then You Surely Can Do This,
// Anyways, If Your Done, Then Lets Begin, By First Making An Object,
const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 28,
}

// Now Lets Make Another Object, Which We'll Say That Jessica Got Married,
// And Then Changed Her Name To Something Else,

function marryPerson(originalperson, newLastName) {
    originalperson.lastName = newLastName;
    return originalperson;
}

const marriedJessica = marryPerson(jessica, 'Davis');

// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';

console.log('Before:', jessica);
console.log('After:', marriedJessica);
    
// Now Try To Guess What The Output Will Be,
// Done? Now Lets See In The Console The Result,
// So, We Get Two Objects, In The After: Object,
// We Indeed Get The Last Name As Davis,
// But, The Before: Object Shows The Same Thing, Which Is Extremely Strange,
// This Is Happening, Because When We Tried To Copy The Original jessica Object,
// It Did Not Create A New Object In The Heap,
// Instead, This marriedJessica, Is The Exact Same Reference As jessica,
// So Now jessica And marriedJessica Are Two Variables,
// That Point To The Exact Same Object In The Heap,
// Then Of Course, It Makes Total Sense,
// That If We Change A Property Here On marriedJessica,
// Then That Change Will Also Get Reflected, In The Variable Jessica,
// Because Again, They Are Basically Two Different Names For The Same Thing,
// Since We Cant Change The Value Of A const, We Can Still Change The Property Values,
// Now To Make This Interesting, By Making A Function Above The marriedJessica Part,
// Where We're Basically Gonna Create A Reusable Way Of Doing What We Had,
// In The marriedJessica Part, And For That Reason, I'll Comment Out The marriedJessica Part,
// Then Say, That We Want marriedJessica To Be Equal To Calling The Function,
// With The originalPerson, And The lastName, Then In The Function,
// Just Basically Do What We Did Before(Commented Out marriedJessica Code),
// Now After Checking The Console, We Get The Exact Same Result As Before,
// Even Though This Time We Didnt Manually Copy The Object Like Done So Before,
// Instead, Passed It Into The Function, And So This originalPerson,
// Then Becomes The jessica Object, And Again, Just Like Before,
// It Will Be The Exact Same Object In The Heap,
// So Only The Reference Is Copied, Or Passed Into The Function,
// And Then As We Change This originalPerson Object, What We're Actually Changing,
// Is The jessica Object That Passed Into The Function,
// Then We Get The lastName Davis In The Original And marriedJessica Objects,
// So, Objects Arent Really Copied When We Pass Them Inside A Function,
// Instead, Only The Reference Is Passed, And So It Is Still The Same Object In The Heap,

// Now What If We Really Copy The Object Itself,
// So That We Could Then Change One Without Changing The Other?
// In Other Words, Creating A Separate Brand New Object In The Heap,
// Which Looks Exactly Like The Original Object, First, We'll Create A New Object,
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 28,
    family: ['Alex', 'Jaiden',]
}

// Now We Will Copy This, And Create A Brand New Array,
// Or A Brand New Object In The Heap Actually Is What I Should Say,

// Shallow Copy:
const jessicaCopy = { ...jessica2 };
jessicaCopy.lastName = 'Davis';

console.log(jessica2, jessicaCopy);
// And We Will Be Using The Spread Operator To Do So,
// We'll Talk More About It Later, But Basically, We Use Curly Braces,
// Then Put Three Dots Inside(...), Which Places All The Properties,
// Of The jessica2 Object Into A Brand New Object,
// Which Is What We're Specifying Here With These New Curly Braces,
// Also, From Now On, We'll Treat jessica2 As The Correct jessica,
// Because Changing All Of Their Names To Something Else Would Be A Mess,
// And Definitly Not Because I'm Lazy Or Anything...,
// Anyways, After The Properties Are Placed In There,
// A New Object Is Created In The Heap, And The Reference To That Object,
// Will Be Stored Here In The jessicaCopy, So Now,
// If We Do jessicaCopy.lastName, And Set It To Davis,
// Then console.log It, And After Seeing The Result,
// We Only Changed The Last Name As You Can See,
// I Hope Your Starting To Understand This Now, Slowly But Surely,
// But, This Still Isnt Perfect, So Lets Experiment With Something Else Here,
// So Lets Say After Jessica Marries, She Get New Members In Her Family,
// Also For Cleanliness, You Can Comment Out The console.log Above This,
// However Its Your Choice, You Can Keep It As Is,

// jessicaCopy.family.push('Mary');
// jessicaCopy.family.push('James');

// console.log('Before:', jessica2);
// console.log('After:', jessicaCopy);

// Now If We Check In The Console And Go In The Objects,
// We See In Both The Before And After, Mary And James Are Added In The Family,
// Which Is Also Strange Since We Created A Brand New Object Here,
// But Remember What I Said Before, The "...jessica2" Basically Copies,
// All The Properties Of This jessica2 Object, Into The New Object,
// But Notice That The family Property Is Just An Object,
// Since Arrays Are Just Objects, So The family Property Is Just Like A Variable,
// Inside The jessica2 Object, Which Means, That The family Property Object,
// Is In The Heap, And The family Property Just Holds A Reference To The Object,
// That Must Be Confusing To Alot Of People, But I Hope Your Somewhat Getting This,
// So Basically What Is Happening Is, That Here In The jessica2 Object,
// We Have The First 3 Primitives(firstName, lastName, age),
// Till Here Everything Is Fine, But Then, We Have Another Object(family: ['Alex', 'Jaiden']),
// Which Is Basically A Nested Object, And Again, It Will Get A New Object In The Heap,
// Then The family Property, Will Point, So It Will Create An Object Reference,
// To This Object, And When We Copied The Properties Of The jessica2 Object,
// Was To Also Copy The Reference, To The family Array Which Is An Object,
// Meaning, Both jessica2 And jesscaCopy, Have The family Property,
// To The Same Object In The Heap(['Alex', 'Jaiden']),
// So Esentially What We Did Here, So The Copy That We Made,
// Only Copied The First Level Of The Object, But Not The Nested Object,
// Since We Only Copied The First Level Of The Object, So The Three Primitives,
// This Is What We Call, A "Shallow Copy", Which Is A Term,
// You'll Hear Alot In JavaScript, Anyways,
// So jessicaCopy And jessica2 Both Have Their Family Property,
// Pointing To The Exact Same Array, And Therefore,
// As We Push These Two Elements Into The Array Using The jessicaCopy Variable,
// The Same Thing Will Appear In The Original jessica2 Object,
// So, We Couldnt Fully Copy It Then, Because We Only Copied The First Level,
// And What We Actually Wanted Was A "Deep Copy" Or "Deep Clone",
// Which Copies The Entire Object, Including Nested Objects Inside,
// In The Real World, We Often Use This To For Example Manipulate Some Big Object,
// In Our Code While Ensuring That The Original Data Stays The Same,
// Anyways, Lets Do The Deep Copy/Deep Clone:
const jessicaClone = structuredClone(jessica2)
// It Is Called A "structuredClone", Now Lets Push The New Names But With The Clone,
jessicaClone.family.push('Mary');
jessicaClone.family.push('James');

console.log('Original:', jessica2);
console.log('Clone:', jessicaClone);
// And To Distinguish This From The Previous Ones, We'll Add Original:, And Clone:,

// Also, Since The Previous Code Of jessicaCopy.family.push,
// And The console.log Before: And After: Will Interfere With This,
// I Will Comment It Out, All Of This Is A Big Reason,
// Why You Should Read My Comments From Top To Bottom And Vice Versa,
// Anyways, Now It Works, Or Should Work, So This Was All For Today,
// This Was So Long, My Head Hurts😮‍💨, But I Hope You Understood AtLeast Some Stuff😅,
// This One As You Can See, Also Included Some Stuff You Needed To Know Already,
// But Like I Said Many Times Before, This Will Help You Become More Independent🫡,
// Either Way, Since This Was Such A Long Subrepo, Take A Break☕, You Deserved It😎
// This Is Also The Last Part Of This Subrepo, So This Pain Ends Here😄,
// Though More Is Coming, And You Know It😉, So Take A Bigger Break I Guess😆,
// Anyways, Keep Practicing, Analyzing, And Researching, Because You'll Need It😄,
// So Again, Truthfully This Time😅, Happy Coding😄💻🩵💙!