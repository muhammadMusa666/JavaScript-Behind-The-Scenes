'use strict';
// Today We Will Be Learning And Practicing More About The "𝙩𝙝𝙞𝙨" Keyword,
// If You've Been Following Me Then You've Probably Seen Me Write It And Explain It,
// But Very Briefly, So Most Of You Likely Couldnt Understand Most Of It,
// So, We'll Be Continuing, No Worries This Does Not Require Extra Information,
// You Just Need To Know These 4 Rules Mostly,
// Rules:
// Method: 𝙩𝙝𝙞𝙨 = <Object That Is Calling The Method>
// Method Example:
// const larry = {
//  name: 'Larry',
//  year: 1996,
//  calcAge: function() { // calcAge Is A Method, Because Its A Function Attached To The larry Object,
//    return 2032 - this.year; // The Value Of The 𝙩𝙝𝙞𝙨 Keyword Will Be The larry Object, Which Is Calling The Method Down In The Last Line,
   // And So, We Can Then Access All Of The Properties Of The Object, In This Case, this.year Will Become 1996, Because Thats larry.year Aswell,
   // So Yes, We Could Write larry.year Which Would Have The Exact Same effect,
   // But Doing It This Way, Is Way Better,
//  }
// };
// larry.calcAge(); // Calling The Method,
// 2: Simple Function Call: 𝙩𝙝𝙞𝙨 = undefined
// (Only Valid For Strict Mode, Otherwise: Window/Global Object(In The Browser)),
// 3: Arrow Functions: 𝙩𝙝𝙞𝙨 = <𝙩𝙝𝙞𝙨 Of Surrounding Function(lexical 𝙩𝙝𝙞𝙨)>
// 4: Event listener: 𝙩𝙝𝙞𝙨 = <DOM Element That The Handler Is Attached To>

// Key Fact To Know: 𝙩𝙝𝙞𝙨 Does NOT Point To The Function Itself,
// And Also NOT To Its Variable Environment,

// For More Explaination, Copy These 4 Rules And Ask AI For Detailed Info,
// I Recommend ChatGPT, Gemini, Or Grok, You Can Also Search Them On The Web,
// And Visit Websites Like MDN To Know More About Them From There Aswell,

// Other Stuff To Help:
// 1: 𝙩𝙝𝙞𝙨 Keyword/Variable: Special Variable That Is Created,
// For Every Execution Context(Every Function),
// Takes The Value Of(Points To)The "Owner" Of The Function In Which,
// The 𝙩𝙝𝙞𝙨 Keyword Is Used.
// 2: Is Part Of The Execution Context(Variable Environment, Scope Chain, 𝙩𝙝𝙞𝙨 Keyword),
// 3: 𝙩𝙝𝙞𝙨 Is NOT Static, It Depends On How The Function Is Called,
// And Its Value Is Only Assigned When The Function Is Actually Called,

// I Hope You Understood That, Like I Said, Asking AI Will Help Significantly Aswell,
// Now, Lets Actually Begin The Coding😅,
// Lets Start By Looking At The 𝙩𝙝𝙞𝙨 Keywords Outside Of Any Function Whatsoever,
console.log(this); // So The 𝙩𝙝𝙞𝙨 Keyword In The Global Scope, Is Simply The Window Object,
// We'll Do The Same But Inside Of A Regular Function Call This Time,
const calcAge = function(birthYear) {
    console.log(2032 - birthYear);
    console.log(this);
};
calcAge(1998);
// So, It Will Obviously Show The Age, But That Aside,
// Since We Are In Strict Mode, 𝙩𝙝𝙞𝙨 Will Show undefined In This Regular Function,
// Now Lets See What Happens If This Function Was An Arrow Function,
const calcAgeArrow = birthYear => {
    console.log(2032 - birthYear);
    console.log(this);
};
calcAgeArrow(1985);
// This Time We Get The Window Object, Why Is That?
// Because Arrow Functions Dont Get Their Own 𝙩𝙝𝙞𝙨 Keyword,
// So Instead, The Arrow Function Simply Uses The Lexical 𝙩𝙝𝙞𝙨 Keyword,
// Which Means That It Uses The 𝙩𝙝𝙞𝙨 Keyword, Of Its Parent's Function Or Scope,
// Then What Is The 𝙩𝙝𝙞𝙨 Keyword In Their Parent's Scope Of This Function?
// Well, Its The Window, Because Window Is The 𝙩𝙝𝙞𝙨 Keyword In The Global Scope,
// In This Case That Is, It Just Happens To Be The Window Object,

// Next, Lets Use The 𝙩𝙝𝙞𝙨 Keyword Inside Of A Method,
const nevis = {
    year: 1999,
    calcAge: function() {
        console.log(this)
        console.log(2032 - this.year)
    }
};
nevis.calcAge(this);
// I Expect You Know What Will Happen Here, But Either Way,
// When We Have A Method Call, The 𝙩𝙝𝙞𝙨 Keyword Inside Of The Method,
// Will Be The Object That Is Calling The Method, Which Is The nevis Object Here,
// nevis, Is Basically The Owner Of The Method, That's Another Way Of Saying It,
// So Therefore, Inside Of calcAge, 𝙩𝙝𝙞𝙨 Is nevis, Which We Can Use To Our Advantage,
// To Calculate The Age Here Based On The Data That Is Already In This Object,
// Which Means That We Dont Have To Pass In The Data Again,
// Meaning Instead Of Just Typing The Birth Year,
// We Can Use The birthYear That Is In The Object Itself,
// So We Can Use The 𝙩𝙝𝙞𝙨 Keyword To Reference That Object,

// Now Then, I Keep Saying That The 𝙩𝙝𝙞𝙨 Keyword Will Point To The Object,
// That Is Calling The Method, Right? Which Means, That The 𝙩𝙝𝙞𝙨 Keyword,
// Will Not Simply Point At The Object In Which We Wrote THe Method,
// You Can See We Wrote The calcAge Method Inside The nevis Object,
// So, We Might Think That That Is The Reason Why The 𝙩𝙝𝙞𝙨 Keyword Points To nevis,
// Which Isnt True, The Reason It Will Point To nevis, In This Case,
// Is Because nevis Was The Object Calling That Method,
// That Right There, Is A Very Subtle, But Very Important Difference,
// Let Me Show You Why, First, Let's Create A New Object,
const lucia = {
    year: 2004
}
// That's All We Need In This Object, Now Remember That A Function Is Just A Value,
// Therefore, We Can Do This:
lucia.calcAge = nevis.calcAge;
// Here, We Basically Simply Copy The calcAge Method From nevis To lucia,
// So, If We Take A Look At lucia Through The Console,
// We Then See That The calcAge Function Is Also In There,
// And Of Course Its In nevis, But Now, We Copied It From One Object To Another,
// So That We Dont Have To Write It In A Duplicate Way, Anyways, Now Let's Say:
lucia.calcAge()
// This Proves About What I Said Earlier, That The 𝙩𝙝𝙞𝙨 Keyword Always Points,
// To The Object That Is Calling The Method, Like Here We're Calling It On lucia,

// We Can Take This Further, By Basically Completely Taking The Function,
// Out Of The nevis Object, So, Let's Create Just A Variable, called f For Function,
const f = nevis.calcAge;
// You Can See In The Console That It's In The Function,
// But Now, What Implications Is This Gonna Have For The 𝙩𝙝𝙞𝙨 Keyword,
// So, Lets Just Try To Call The "f" Funtion,
// Which Is The Code Of nevis.calcAge, After Running This,
// We Get undefined, Therefore An Error Aswell, That It Cant Read year Of undefined,
// Because The 𝙩𝙝𝙞𝙨 Keyword In this.year In The nevis Object, Is Now undefined,
// And So undefined The year Does Not Exist Of Course,
// Anyways, This Happens Because The f Function Is Now Just A Regular Function Call,
// Right? It Is Not Attached To Any Object, So There Is No Owner Of This Function,
// Which Therefore Makes The 𝙩𝙝𝙞𝙨 Keyword Also undefined,
// So, This Was All For Today, This Topic Is Of Confusion For Most Beginners😄,
// Which Is Why I Really Had To Tell You The Rules And Other Stuff You Might Need😉,
// But Hey, You've Completed The Previous Two Subrepo's Which Were Pretty Hard😎,
// Anyways, Keep Practicing, Analyzing, And Researching🚀, And Happy Coding😄💻🩵!