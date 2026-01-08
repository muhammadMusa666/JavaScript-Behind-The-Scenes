'use strict';
// Today, We Will Be Learning About Hoisting And TDZ(Temporal Dead Zone),
// Like The Previous Subrepo, You Need To Know How Hoisting And TDZ Work,
// But, No Worries, This Is Much Shorter Then Previously.
// And If Your Watching This, Then You've Probably Done The Previous Subrepo Task Aswell,
// So Can Do This Way Easily And Faster Then The Previous One,
// Anyways, Hoisting Is A Fairly StraightForward Process,
// So, Lets Go Through The Different Scenarios, Starting With Variables,
// Variable Hoisting:
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Michael';
let job = 'Teacher';
const year = 1998;
// Here, We Will Try To Use These Variables, Before Declaring Them,
// Can You Guess What Happens? Well, Variables Declared With "var",
// Are Hoisted, But They Are Hoisted To The Value Of Undefined,
// And We As We Know, An Error Occurs If Done The Same With let And const,
// Because Actually The job Variable Is Still In The TDZ, Same True For year,
// That Was It For Variable Hoisting, Now We'll Move On To Functions,
// Where We Will Use Function Declarations And Expressions,
// And Try Use Them Before Defining Them, So Before Or Above Their Line Of Code,
// Functions:
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
    return a + b;
}

/* var */ const  addExpr = function(a, b) {
    return a + b;
}

// Since We're Doing These Two, Lets Create An Arrow Function Aswell,

/* const */ var addArrow = (a, b) => a + b;

// So Again, Like The Previous Variable Hoisting, We Will Use These Functions,
// Before They Are Defined, Now, What Will Happen?
// Pretty Similar To What Happened To The Variables,
// The First Declaration Will Be Usable Before Being Defined In Code,
// While The Second And Third, Gave An Error, Why Is This?
// Because, The 2nd And 3rd Functions Are Basically Variables, By Using "const",
// Which Means They Are Now Also In The TDZ,
// And The First One Isnt A Variable, Just A Direct Function Declaration,
// If So, Then What Happens When We Use var Instead Of const?
// Well, If We Did That, Another Error Would Occur,
// Saying "addArrow/addExpr Is Not A Function", Why Is This?
// Because, The console.log Is Basically Trying To Call undefined,
// Its Like Doing "undefined(2, 3)" Which If You Type That In The Console,
// The Same Error Would Appear, But, If We Remove The Numbers,
// So Like This "console.log(addArrow)" Or "console.log(addExpr)" Instead,
// It Would Print Undefined In The Console, And To Keep Things Clean,
// I Commented Out The console.logs That Were Making The Errors,
// I Hope You Understood Most Of That😅, Also, To Keep A Reference Point,
// I Will Be Making One Of The Functions Use const, And One var,
// Now, I'll Show You A Very Cool Example, Which Demonstrates A Pitfall Of Hoisting,
// So Its A Mistake That Can Be Easily Made If We're Not Careful,
// And At The Same Time, Use var To Declare Our Variables,

// Example:
// We'll Create A Fictional Function First, Which Will Be A Function Declaration,
// So Lets Say We Have An E-Commerce Website Or Application,
// And We Need To Delete The Shopping Cart, Where Products Are Stored To Buy,
// This Is A Very Dangerous Function By The Way, Which We Should Not Call,
// Without Extensive Care, Next, Declare A Variable That Contains,
// The Number Of Products, We'll Be Using Var For This Like I Said Before,
// Now, Above The numProducts Variable, We Will Write Some Logic,
// Which Will Delete The Shopping Cart, Whenever The Number Of Products Is Zero,
// And As We Know, That Zero Is A Falsy Value, So We Use "!",
console.log(numProducts);
if(!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
    console.log('All Products Removed...');
}
// Now, If We Run This, We Will Get "All Products Removed..." In The Console,
// Even Though The numProducts = 10, So Why Did This Happen?
// Because Of Hoisting, And At The If-Statement Point Of The Code,
// The numProducts Variable Is In Fact, Not 10, Because Of The "!numProducts",
// So What Is It Then? As We Know How var Variables Work, It Is ✨ undefined ✨,
// Let Me Show You Quickly, As I Wrote "console.log(numProducts)" Above The If-Statement,
// And It Prints undefined At Line 76(For Me Its Line 76, If You Changed The Code Its Probably Different),
// So Since undefined Is Also A Falsy Value, Therefore, The If-Statement Code,
// Will Still Execute, Even Though We Thought That numProducts Is 10,

// Now This Was Just A Tiny Fictional Example, But In A Large Code Base,
// With Thousands Of Lines Of Code, So Without Best Practices, Something Like This,
// Can Totally Happen, And It's Gonna Be A Bug Which Will Be Hard To Find,

// So, What Are These "Best Practices", Well, As A First Step, Like I've Said Before,
// Atleast I Think So😅, Is To Just Not Use var At All,
// Use Const For Variable, And Let For Those Variables That You Have To Change Often,
// Or When You Have To Change It Atleast Once, But Thats Your Choice,
// You Can Use var Sometimes In Old DataBases, Websites, Or Old Versions,
// That You Want To See, Even So, Use It As Rarely As You Can,
// Also, In Order To Write Clean Code, You Should Declare Your Variables,
// At The Top Of Each Scope, That Will Just Make Your Code Look A Bit Better Atleast,
// Finally, Always Declare All Of Your Functions First,
// And Use Them Only After The Declaration, And This Applies To All Types Of Functions,
// Even Function Declarations, Which Are Hoisted, So, As We Saw Today And Knew Already,
// You Could Use Function Declarations Before You Declare Them,
// But Still, Dont Do That Its Just Not Clean, So, What I Told You Here,
// Are The Best Practices, Not The Rules Of JavaScript, You Should Develop,
// Your Own Coding Style, Which You Will Likely Start Finding As We Move On😉,
// And To Finish, Since We're Talking About The Differences,
// Between let Consc And var, Lets Take A 2-3 Minutes To See,
// Yet Another Small Difference Between Them😄,

var x = 1;
let y = 2;
const z = 3;
// Now After Running This, We Go To THe Console, And Type "window",
// Which Is The Global Object Of JavaScript In The Browser,
// And If We Scroll Down Enough, We See A "x: 1" Property,
// But We Cant Find y Or z, Because They Are Declared With let And/Or const,
// Let Me Demonstrate A Bit Better:
console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
// Here, We Basically Are Testing That If x,
// Is Actually A Property Of The Window Object, 
// And The Same With The Others, But Only x Is true Since Only x Is In The Window,

// So, That Is All For Today, You Needed Extra Knowledge For This Aswell,
// But It Isnt That Hard Than The Previous One, Either Way,
// Completing The First Harder One Is A Feat Of Its Own😄,
// And I Know You Will Complete This One Flawlessly😉,
// Take A Well-Deserved Break☕, Keep Practicing, Researching And Analyzing,
// And Happy Coding🫡💻🩵!






