// var johnny = {
//     name: 'John',
//     email: 'johnny@doe.com',
//     'last-name': 'Doe',
//     age: 21,
//     dog: {
//         name: 'Reksis',
//     }
// };
// console.log(johnny);
// console.log(johnny.email);
// console.log(johnny['last-name']);
// console.log(johnny['email']);
// console.log(johnny.age);
// console.log(johnny.name + ' ' + johnny['last-name']);
// console.log(johnny.dog.name);

// johnny.age = 22;
// console.log(johnny.age);


// var obj1 = { foo: 1 };
// var obj2 = { foo: 1 };

// var obj3 = obj1;
// console.log(obj1.foo); // 1
// console.log(obj3.foo); // 1
// obj3.foo = 2;
// obj1 = null;
// console.log(obj1); // 2
// console.log(obj3.foo); // 2

// console.log(obj1 == obj3);

// var people = [
//     {
//         name: 'John',
//         surname: 'Doe',
//         age: 21,
//     },
//     {
//         name: 'Jane',
//         surname: 'Doe',
//         age: 99,
//     },
// ];
// console.log(people[1].age);
// console.log(people[1]['age']);

// var totalAge = 0;
// for (var person of people) {
//     console.log(person);
//     // totalAge = totalAge + person.age;
// }
// console.log(totalAge);

// console.log('-------');
// for (var i = 0; i < people.length; i++) {
//     var person = people[i];
//     console.log(person);
// }



// for (var foo of tasks) {
//     console.log(foo);
// }



// for (var ii = 0; ii < tasks.length; ii++) {
//     var bar = tasks[ii];
//     console.log(bar);
// }

// console.log('-----------------');

// var now = new Date();
// var now2 = new Date();
// console.log(now);
// console.log(now2);


// console.log(Math.PI);
// console.log(Math.pow(4, 2));
// console.log(Math.sqrt(16));

// console.log(Math.round(5.5));
// console.log(Math.ceil(5.5));
// console.log(Math.floor(5.5));

// alert('Hello world!');





// 1. Jāizdrukā visi tasku nosaukimi
// 2. Jāizdrukā visi nepabeigtie tasku nosaukumi
// 3. Jāizdrukā visi pabeiktie tasku nosaukumi

// 4. Jāizskatia, cik ir pabeigti taski
// 5. Jāizskatia, cik ir nepabeigti taski


var tasks = [
    {
        title: 'Buy milk',
        isCompleted: false,
    },
    {
        title: 'Lear JS',
        isCompleted: false,
    },
    {
        title: 'Be awesome',
        isCompleted: true,
    },
];

for (var task of tasks) {
    console.log(task.title);
}
console.log('-------------------------');

for (var task of tasks) {
    if (task.isCompleted == true) {
        console.log(task.title);
    }
}
console.log('-------------------------');

for (var task of tasks) {
    if (task.isCompleted != true) {
        console.log(task.title);
    }
}

console.log('-------------------------');
var completedCount = 0;
for (var task of tasks) {
    if (task.isCompleted == true) {
        completedCount++;
    }
}
console.log('completed: ' + completedCount);

console.log('-------------------------');
var pendingTasks = 0;
for (var task of tasks) {
    if (task.isCompleted != true) {
        pendingTasks++;
    }
}
console.log('pending: ' + pendingTasks);

// 1. izskatīt cik skatļu bez atlikuma dalās ar 3 no 0 - 100
var numberCount = 0;
for (var i = 0; i < 100; i++) {
    if (i % 3 == 0) {
        numberCount = numberCount + 1;
    }
}
console.log(numberCount);
// 2. ir dots skaitlis 7. Uz ekrāna vienā virknē (string) ir jāizvada tik A burti, cik ir tas skaitlis 
var letters = '';
for (var j = 0; j < 7; j++) {
    letters = letters + 'A';
}
console.log(letters);

// var foo = 1;
// if (foo == 1) {
//     //
// }

// while (foo == 1) {
//     //
// }

for (var x = 50; x >= 0; x--) {
    if (x > 40) {
        console.log('yay!')
    } else if (x % 2 == 0) {
        console.log(x)
    }
}