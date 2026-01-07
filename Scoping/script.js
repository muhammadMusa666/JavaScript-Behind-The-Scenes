'use strict';
// Welcome To This New Section😄, Where We Will Learn About,
// How JavaScript Works Behind The Scenes,
// So, In The Last Subrepo of The Last Section,
// We Left Off Not Knowing Much About Scoping,
// Which Is What We Will Be Learning And Practicing About Today😄,
// I Dont Really Have The Details For It, But This Requires,
// Some Knowledge Of The CallStack, Scope, And Scope Chain,
// JavaScript Engine And Runtime, Variable Environment, Which Is All Very Important,
// And You Will Have To Learn About Them Somehow, Somewhere😅,
// Sorry That I Cant Provide The Information Needed,
// So, I Highly Recommend You Search About Them First, Wether Online,
// On Websites Like Youtube, From Anyone You Know, From AI, ETC,
// Because You Will Not Understand Almost Anything,
// If You Dont Know The Complete Basics Of It, This Is Probably,
// The Hardest Burden I Have Put On You AND Anyone Else Seeing This,
// And I Am Again, Truly Sorry That I Cant Provide How It Works😔,
// I Still Believe In You Either Way, You've Made It This Far,
// So You Cant Stop Here, You Must'nt Stop Here, You Will Complete This Eventually,
// Keep On Trying, Keep On Taking This Path, Dont Go Back Now,
// You've Made It This Far, And Stopping Here Would Be A Waste of Everything You've Done To Be Here,
// I Believe You Can Pass This Obstacle Just Like You Have Previously Many Times🫡,
// Ok, Enough With The Motivational Speech And Stuff😅,
// Lets Actually Start, And If Your Starting Now,
// Then You Probably Know The Basics Of Everything I Said, Which Is Great🎉,


// Now, We Will Start With A Simple CalcAge Function,
function calcAge(birthYear) { // <-- calcAge, Is Defined In A Global Scope, Because It's In Ths Top-Level Code,
    const age = 2032 - birthYear;
    // console.log(firstName);

    function printAge() {
        const output = `${firstName},You Are ${age}, Born In${birthYear}`
        console.log(output);

        if(birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            // Creating NEW Variable With Same Name As Outer Scope's Variable
            const firstName = 'Vincent';

            // Reassigning Outer Scope's Variable,
            output = 'New Output...'

            const str = `Oh, And You're A Millenial, ${firstName}`;
            console.log(str);

            function add(a,b) {
                return a + b;
            }
        }
        // console.log(str);
        console.log(millenial);
        // console.log(add(2, 3));
        console.log(output);

    }
    printAge();

    return age;
}
// So, The calcAge Is Defined In A Global Scope, Since Its In The Top-Level Code,
// And It Will Create Its Own Scope Which Is A Function Scope If You Dont Know,
// Which That Scope Is Gonna Be Equivalent To The Variable Environment,
// Of Its Execution Context, That Was A Mouthful😅, Next,
// We Will Create A Global Variable,
const firstName = 'Jeremy';
calcAge(2011);
// And Through The Scope Chain, It Will Be Available Inside Of The function Scope,
// Because Its A Global Variable, It Will Go Inside The function Scope Via The Scope Chain,
// By Doing The Variable Lookup, And Found The Variable There,
// Anyways, That console.log In The Function Was Just Temporary, So Its Commented Out,
// Now, We Will Create Another Function, Inside The calcAge Function,
// Which Will, Again, Create Another Scope, And By Using Template Literals,
// Since It Cant Find The Age Variable There, It Will Then, Do The Variable Lookup,
// Like I've Said Before, And Go Into The Global Scope,
// Where It Finds The Required Variables To Execute,
// Now We Will Go Further, And Create A Block Scope,
// Right Inside Of The printAge Function, By Doing An If Statement,
// And Again, With The Scope Chain As It Does The Variable Lookup,
// It Gets The firstName Variable From Above The Chain,
// Now If We Try To console.log It Outside Of The Block Scope,
// It Wont Work And An Error Occurs Saying Its Not Defined,
// Because Only Let And Const Are Block Scoped,
// To Test It Out More, Var Isnt Block Scoped, So If We Create Another Variable,
// Called millenial, Which I Will Set To True,
// And console.log It Outside Of The Block Scope,
// Then It Will Work Since Var Isnt Block Scoped, Instead Are Function Scoped,
// So, It Will Be Displaying true In The Console,
// Next, We Will Prove, That Functions, Are Also In Fact, Block Scoped,
// Just So You Know, This Only Works When Using Strict Mode,
// To Do So, We Will Create A Simple Function "add" In The If Statement Block,
// Which Will Add Two Values, Then We Will Call It Outside Of The Block,
// Then, It Wont Work Because The Scope Of The add Function,
// Is Only The Block In Which It Was Defined,
// Now, Lets Experiment With It A Little Bit,
// Lets Write Another firstName Variable In The Block Scope This Time,
// What Will Happen Now? Will The Template Literal Display Jeremy, Or Vincent?
// Well, It Will Display Vincent, Since That Is The String Value,
// Of The Nearest Variable That Matches The Template Literal,
// Since JavaScript Has Already Found One With That Variable Name In Its Scope,
// It Does Not Check And Go Further In The Scope Chain,
// So Doing This Is No Problem, You Can Absolutely Have Repeated Variable Names,
// Because The firstName Variable Inside The Block Scope,
// Is Different From The Other One, Due To Them Being In Different Scopes,
// Now, We Do The Same, But Instead Of Creating A New Variable,
// We Simply Reasssign The Value Of Variable,
// So, We Will Add "output = 'New OutPut", Then console.log It,
// We Get "New Output" In The Console, So, We Did Not Creat A New Variable,
// We Simply Redefined A Variable That We Accessed From The Variable,
// And We Did Create A New Variable, We Would Have The Same Situation,
// As Before With First Name, If After Doing It, Now It Will Show,
// The Original Output As We Defined It In The Scope,
// So This Was All For Today, I Again Want To Say,
// Congratulations On Making This Far🎊, And Best Of Luck Completing This Task,
// Because Like I Said, It Requires Some Necessary Knowledge📖,
// That I Unfortunately Cant Provide😔, But, If You've Completed This Either Way,
// Huge Progress For You, That You Without Any Instruction From Me👏,
// Either Knew About This Necessary Stuff Before👍,
// Or Learnt It Specifically After I Told You Here, Which Is Even Better😄!,
// So, Take A Well Deserved Break, You DEFINITELY Earned It😅,
// This Is A Huge Leap You've Taken, And Such A Big Obstacle Overcome😀,
// Not Only This, But Most People Would Just Give Up Before Reaching Here,
// Let Alone Completing This Which Is Such A Big Task😮‍💨,
// So, Believe In The Path You've Taken To Be Here, And Keep Sticking With It🫡,
// Is An Achievement Itself Which You Should Be Proud Of😄
// Keep On Going On This Path, Dont Stop now That You've Gone This Far😉,
// Keep Practicing, Analyzing And Researching, And Happy Coding😄💻🩵💙!