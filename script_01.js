
/***** Erinnerung: Arrays *******/

// let arr;
// arr = ["Ich","bin","Max"]
// output(arr);
// output(arr[0]);
// output("------------");

// arr = [["Ich","bin","Max"],["Ich","bin","Moritz"]];
// // output(arr[0][2]);
// // output(arr[1][2]);

// // nested loops
// for (let i = 0; i < 2; i++) {
//         for (let j = 0; j < 3; j++){
//         output(arr[i],[j]);
//         }
// }
                
  



/***** Objekte 1 Daten/Funktionen *******/

let person = 
        {
                firstName:"Tilo",
                lastName:"Schönemeyer",
                salary:[120000,160000],
                permission: true,
                sayHello: 
                function(){
                return "Hello, i am " + this.firstName;
                }
        };


// output(person);
person.firstName = "Thilo";
// output(person.firstName);
// output(person.lastName);

const txt =     "Ich bin " + person.firstName + " " + person.lastName +
                " und verdiene " + person.salary[1] + " p.a."
// output(txt);

// output(person.sayHello());


/****** Objekte 2 - Hierachie */
// Tiefer, tiefer - Irgendwo in der Tiefe gibt es ein Licht // K.Bush
// Der Baikalsee ist mit 1642 m der tiefste See der Erde. ...
// deep -deeper - deepest

const baikal =
{
        value:"10m",
        deep:{
                deeper:{
                        deepest:"Das Licht - auf 1642m!"
                }
        }

};

output(baikal);
output(baikal.value);
output(baikal.deep.deeper.deepest);




/** Ausgabe */
function output(outputData) {
        console.log(outputData);
}