'use strict';
// Today, We Will Learn About The Cons Of Using The 𝙩𝙝𝙞𝙨 Keyword,
// Related To Regular Functions, And Arrow Functions,
// This Way We Can Learn When To Use And Avoid Each Of Them,
// So To Start, We Will ReUse Our nevis Object,
// We'll Create A 2nd Method Here, But This Time Using An Arrow Function,
// var firstName = 'Lucia';

// const nevis = {
//     firstName: 'Nevis',
//     year: 1999,
//     calcAge: function() {
//         console.log(this)
//         console.log(2032 - this.year)
//     },

//     greet: () => {
//         console.log(this);
//         console.log(`Hey${this.firstName}!`);
//     },
// };
// nevis.greet();

// As We Know, It Says In The Console, "Hey undefined",
// If You Expected "Hey Nevis!", Then It Isnt That Of Course😅,
// We Know That Since Arrow Functions Dont Get Their Own 𝙩𝙝𝙞𝙨 Keyword,
// So They Take It From Their Parent Scope, Which In This Case Is The Global Scope,
// Also, If You Dint Know, If We Try To Access A Property,
// That Doesnt Exist On A Certain Object, We Do Not Get An Error, We Simply Get undefined,
// Here's An Example, Because There Is No firstName In The Window Object,
// Thats Why We Get undefined, Because 𝙩𝙝𝙞𝙨 Uses The 𝙩𝙝𝙞𝙨 Keyword From The Global Scope,
// console.log(this.firstName);
// This Behaviour Can Get Pretty Dangerous, As From A Previous Subrepo,
// We Learnt That var Can Create Properties On The Global Object, As A Refresher,
// I'll Create A var Variable At The Top Of The nevis Object,
// And Give It The String Lucia That We Used Previously,
// Then, If We Run The greet Function, It Will Work,
// Since var Added That Variable To The Window Object,
// console.log(this); In The greet Function Will Show You The Window Object As We Know,
// Also Because Its An Arrow Function, Even Though It's Called By The nevis Object,
// The Window Object Will Show Because Again, Its An Arrow Function,
// So, As Advice, And For Best Practice, Never Use An Arrow Function As A Method,
// Even If Your Are Or Arent Using The 𝙩𝙝𝙞𝙨 Keyword, In My Opinion,
// Because If You Do It Like This, You Never Have To Think About, The Type Of Function,
// You Should Use, And Always Will Use Normal Function Expressions,
// Which Will Prevent You From These Kinds Of Mitakes From Happening,
// So, I Will Be Comenting Out The var Variable,
// We Can Also Change greet To A Regular Function,
// Then It Works Fine, Just As We Wanted, Without Any Hidden Bugs And Stuff,
// But I'll Keep It As Is For Reference And Such,
// Now, As A Final Con For The 𝙩𝙝𝙞𝙨 Keyword,
// Its When We Have A Function Inside Of A Method,
// Which Is A Pretty Common Thing To Happen,
// So Lets A Look At An Example For That,
// I'll Just Copy The Code We Have Above And Paste It Here, Then We'll Enhance It,
// To Do This, I Will Have To Comment Out The Code Above, Sorry For That😅,
const nevis = {
    firstName: 'Nevis',
    year: 1999,
    calcAge: function() {
        console.log(this)
        console.log(2032 - this.year)

        // Solution 01:
        // const self = this; // self Or that,
        // const isMillenial = function() {
        //     console.log(self);
        //     console.log(self.year >= 1981 && self.year <= 1996);
        // };

        // Solution 02:
        const isMillenial = /* function */ () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
        };
        isMillenial();
    },

    greet: () => {
        console.log(this);
        console.log(`Hey${this.firstName}!`);
    },
};
nevis.greet();
nevis.calcAge();
// So, We Want In Here, Is A Function, That Will Basically Return,
// If The Person Is A Millenial, By Making An "isMillenial" Variable In The Object,
// Followed By A Function Expression And Then We Call It,
// Now If We Run This, We Get An Error, That The 𝙩𝙝𝙞𝙨 Keyword Is undefined,
// And If We Test It But Adding console.log(this) In The isMillenial Function,
// Then We Can Indeed See That It Is undefined, So Why?
// If We Really Think About This, Then isMillenial(); Is Really Just A Function Call,
// Right? Even Though It Happens Inside Of A Method, As The Rules Say,
// That Inside A Regular Function Call, 𝙩𝙝𝙞𝙨 Must Be undefined,
// So This Function Is As If It Was Outside Of The Method,
// Meaning If We Copy This Function And Paste It Out Here,
// It Would Yield The Exact Same Result, Some Say This Is A Bug In JavaScript,
// Thats On You To Believe If It Is Or Not, Anyways,
// There Are 2 Solutions To This Problem, The First Solution,
// Is To Use An Extra Variable, That We Usually Call "self",
// Which I Will Put Outside Of The Function, And We Set It To 𝙩𝙝𝙞𝙨,
// Then, We Could Simply Use self Instead Of 𝙩𝙝𝙞𝙨,
// I Have Duplicated The Code So We Can Keep The Original One For Reference,
// You Can Use "that" Instead Of "self" Too,
// Anyways, This Solution Was The Pre-ES6 Solution, Which Some Still Use Today,
// But After ES6, We Have A More Modern And Better Solution,
// Which Doesnt Need This Extra Variable, Instead, The Use Of Arrow Functions,
// And It Will Work, Because The Arrow Function Doesnt Have Its Own 𝙩𝙝𝙞𝙨 Keyword,
// It Will Make It Use The 𝙩𝙝𝙞𝙨 Of Its Parent, Which Is The calcAge Method,
// And In Here Holds The 𝙩𝙝𝙞𝙨 Keyword Is nevis, So The nevis Object,
// I Think Your Starting To Understand The Cons,
// Of Regular Functions And Arrow Functions Now😎,
// Now, To End This, I Want To Quickly Touch The Arguments Keywords,
// Maybe You've Heard About It From Me Somewhere In The Past,
// Or Came Across It While Learning About The Callstack And Execution Context,
// But, You Might Know, That Functions Also Get Access To An Arguments Keyword,
// Not Only The 𝙩𝙝𝙞𝙨 Keyword, And Like The 𝙩𝙝𝙞𝙨 Keyword,
// The Arguments Keyword Is Only Available In Regular Functions,

// Arguments Keyword:
const addExpr = function (a, b) {
    console.log(arguments);
    return a + b;
}
addExpr(2, 5);
addExpr(2, 5);

var addArrow = (a, b) => {
    console.log(arguments);
    return a + b;
};
addArrow(2, 5, 8);
// We First Start With A Function Expression, Then,
// After We Call This Function, And In The Function We Basically Get,
// An Array With Two And Five, Exactly The Two Parameters That We Passed In,
// This Can Be Useful When We Want A Function To Accept More Parameters,
// Than We Actually Specified, This Is Something That We Havent Done Before,
// Like Said, It Is Completely Fine To Add More Arguments,
// Though The Extra Arguments Wont Have A Name, They Still Exist,
// Anyways, This Was Just To Show You That The Arguments Keyword Exists,
// But Only In Regular Functions, Now That This Is FINALLY Complete😅,
// I Wanted To Say, While Learning This, Develop Your Coding Style Aswell,
// Dont Want To Just Copy Other Styles, But Be Unique😎, Anyways,
// Keep Practicing, Analyzing, And Researching, And Happy Coding😄💻🩵!