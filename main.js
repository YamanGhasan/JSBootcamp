
//  function sum(num1 , num2){
// return num1 + num2
// }

 
// // console.log(sum(1,6))


// function divide(num1 , num2){
//     return num1 / num2
//     }
    
     
//     // console.log(divide(1,6))

    
// function sub(num1 , num2){
//     return num1 - num2
//     }
    
     
//     // console.log(sub(1,6))

    
// function Multiply(num1 , num2 ){
//     return num1 * num2
//     }
    
     
//     // console.log(Multiply(1,6))


// //     var basicOperation =[sum , divide , sub , Multiply]
    
// // const num1 = 2;
// // const num2 = 4;

// //     for( var i=0 ; i< basicOperation.length ;i++){
// //         const operation = basicOperation[i];
// //         const operationName = basicOperation.name;
// //         const result = operation(num1 , num2)
// //         console.log(operationName + result)
// //     }

//     function cal(num1,num2 ,operator){
// return operator(num1,num2)
//     }

// // var is function scop and let, cost is a block scop

//     console.log(cal(12,3,sum))
//     console.log(cal(12,3,sub))
//     console.log(cal(12,3,Multiply))
//     console.log(cal(12,3,divide))

// function fun(){
//     return function fun1(){
//         console.log(1)
//     }
// }
// fun()() //to call a func inside

// function rname(){
//     consol.log(name)
//     }
// var retname = function (){
//     console.log(2)
// }

// retname()

// var x=1;
// function fun(){
//     console.log(x)
//     var x=2
// }
// fun()

// function printNamw(name){
//     name = age;
//     var age =21;
//     console.log(name)
// }
// printNamw("yaman")


// var breakTime = "1:10";
// // console.log(breakTime)

// var breakTime =function (){
//     console.log("11:00")
// }

// //  is not a function 
// breakTime()
 
// let student = {
//     "first Name":"Yaman",
//     age :21,
//     courses : ["laravel" , "react" , "php"],
// fullName :{
// firstName :"Yaman",
// lastName :"Ghasan"
// }
// }
// // console.log(student["first Name"])
// student.brotherName ="Isam";
// // console.log(student)

// for (let x in student) {
//     console.log(student[x])
//   }
//   console.log(student.hasOwnProperty("gap"))

// let grades = {
//     math: 90,
//     science: 80,
//     english: 85
// };

// function addCourse(name, grade) {
//     grades[name] = grade;  
// }

// addCourse("IT", 100);
// console.log(grades);

// function findGrade(name) {
//     return  grades[name];
     
// }

// console.log(findGrade("IT"));  

// function updateGrade(name, newGrade) {
//     grades[name] = newGrade;
// }

// updateGrade("math", 95);  
// console.log(grades);

// function calculateGap() {
//     let count =0;
//     let sum=0;
//     for(var key in grades){
//         count +=1
//          sum+=grades[key]
//     }
//     return sum/count
// }
// console.log(calculateGap())

// function myHasOwnProperty(obj,key){
//     // for(var keys in obj){
//     //     if(keys == key){
//     //         return true
//     //     }
//     //     else{
//     //         return false
//     //     }
//     // }
//     return obj[key] != undefined;
// }
// console.log(myHasOwnProperty(grades,"IT"))
// var x=10;
// result=x==10?x*3:20
// console.log(result)

// function greet(name){
//     console.log(`Hi ${name}`)
// }

// greet("yaman")

// function isPassed(grade){
    

//     console.log(`You are ${grade>=60?"you passed":"you are fail"}`)
// }
// isPassed(80)

// function Myage(name,birthday){
//     console.log(`My name is ${name} and my age is  ${2023-birthday}`)
// }

// Myage("yaman",2002)
 

// // arrow func 

// let Roc=(length ,width)=>length *width
// console.log(Roc(2,4))
// let square=number=>number*number
// console.log(square(16))

// const arr =new Array();// array of object type

// console.log(Array[0]) //undefined

// // const arr2 =Array.from(arr)

// const letters=["a" , "b" , "c","d" ,"c"]
// function addvalue(letters,val){
//     letters.push(val)
//     return letters
// }
// console.log(addvalue(letters,"y"))

// function trueOrfalse(letters, val) {
//     // for(let item of arr{
//     //     if(item == avl) {return true } else{return false;}
//     // })
//     for (var i = 0; i < letters.length; i++) {
//         if (letters[i] === val) {
//             return true;
//         }
//     }
//     return false;  
// }

// console.log(trueOrfalse(letters, "c")); 
// console.log(trueOrfalse(letters, "y"));  

// function findIndex(letters, val) {
//     for (let i = 0; i < letters.length; i++) {
//         if (letters[i] === val) {
//             return i;  
//         }
//     }
//     return -1;  
// }

// console.log(findIndex(letters, "c"));  
// console.log(findIndex(letters, "y"));  


// console.log(letters.includes("q"))
// console.log(letters.reverse())

// function reverseArray(arr) {
//     const reversed = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         reversed.push(arr[i]);
//     }
//     return reversed;
// }

// console.log(reverseArray(letters));
 

// // const numbers=[1,5,3,2,6,2]

// function adjustArrayLength(arr, length) {
//     if (arr.length >= length) {
//         return arr.slice(0, length);
//     } else {
//        return arr
//     }
// }

 

// console.log(adjustArrayLength(numbers, 2));

// let arr1 = [1, 3, 2];
// let arr2 = [6, 4, 2];

// let merge = [...arr1, ...arr2];
// console.log(merge);  

// const object1 = {
//     First:"Yaman",
//     Last:"Ghasan",
//     Age:90 // will dispaly 21 bc there is the same name of key
    
// }
// const object2 = {
//     Age:21,
//     Courses:"Laravel"
// }
// const concat ={...object1 ,...object2}

// console.log(concat)

// function sum(...numbers){  //rest (قيم وانا بجمعها جوا اري)
//     console.log(numbers)
// }

// sum(2,5,2)


// function printDetails(name,age ,...hobbies){
//     console.log(`Name : ${name} , Age :${age}`);
//     console.log(`Hobbies :${hobbies.join(',')}`)
// }

// printDetails("yaman" , 21, "coding", "reading") // بستخدم الريست لما يكون عندي اتربيوت ما بهرف كم ممكن يكون عددها


// // const numbers=[3,2,21,6,43,3]
// const [first,second, ...rest] = numbers
// console.log(numbers)


// // let names=["Yaman" ,"ghasan" ,"Ali" ,["batool" ,"layla"]]

// // const [name1,name2,name3,name4] = names
// // const [name5,name6] = name4;
// console.log(name4)


// // let names = ["Yaman", "ghasan", "Ali", ["batool", "layla"]];

// const [name1, name2, name3, [name4, name5]] = names;
 
// console.log(name4)

// // reduce array 

// function productArry(arr){
//     let product =1;
//     for(let item of arr){
//         product=product*item
//     }
//     return product 
// }

// function productArray(arr) {  //reduce with arrow function 
//     return arr.reduce((product, item) => product * item, 1);
// }

// const numbers = [2, 3, 4, 5];
// console.log(productArray(numbers));

// const names=["yaman" , "Ghasan" ,"Ali","Ahmad","alisandro"]


// console.log(names.map(name => name[0]));
 


// const filteredNames = names.filter(name => name.length < 5);


// console.log(filteredNames.reduce((longest, current) => { return current.length > longest.length ? current : longest;}, names[0]));

 
// console.log(names.some(name => name.length < 4));

// console.log(names.every(name => name.length < 4)); // كل العناصر تحقق الشرط

// console.log(names.every(name => name.includes("a"))); 

// let myName =["Yaman","GHasan"]
 
// console.log(myName.join(' '))
 

//  console.log(names.join(',  ' ))

// const http = require('http'); // 💡 Sample Library to create an HTTP server.

// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write('Welcome to this page!');
//     res.end();
// }).listen(3000);

 
// // Sync  ضل استنى لتخلص تنفيذ وما تروح تنفذ الكود الي بعده
// function fun(){
//     console.log(1)
// }

// fun();
// fun();

// // Async اذا عندي اويت مثلا وقف هون وروح كمل شغلك ولما تيجي الريسبونس ارجعلها



// // Exersice 
// // craete a count down timer that start from 5
// // the ocunter value second until zero 

// let counter=5

// let intervalId=setInterval(()=>{
//  console.log(`Counter =${counter}`)
//  counter--
// },1000)
 
// setTimeout(()=>{
//     clearInterval(intervalId)
// },7000)


// // let counter = 5;

// // let intervalId = setInterval(() => {
// //   console.log(`Counter = ${counter}`);
// //   counter--;

// //   if (counter < 0) {
// //     clearInterval(intervalId);
// //     console.log("Done");
// //   }
// // }, 1000);


 
//   // async and await    
 
// function getUserData(userId) {
//   return new Promise((resolve, reject) => { 
//     setTimeout(() => {
//       const users = {
//         123: { id: 123, name: "John Doe" },
//         456: { id: 456, name: "Jane Smith" },
//       };
//       const user = users[userId];
//       if (user) {
//         resolve(user);
//       } else {
//         reject(`User with ID ${userId} not found`);
//       }
//     }, 1000);
//   });
// }
// function getUserPosts(userId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const posts = {
//         123: [{ title: "First Post" }, { title: "Second Post" }],
//         456: [{ title: "Another Post" }],
//       };
//       const userPosts = posts[userId];
//       if (userPosts) {
//         resolve(userPosts);
//       } else {
//         reject(`Posts for user with ID ${userId} not found.`);
//       }
//     }, 1000);
//   });
// }


// async function UserDataAndPosts(userId) {
//     try {
//       const user = await getUserData(userId);
//       const posts = await getUserPosts(userId);
//       return { user, posts };
//     } catch (error) {
//       throw error;
//     }
//   }
  
//   (async () => {
//     try {
//       const userDataAndPosts = await UserDataAndPosts(123);
//       console.log("User data and posts:", userDataAndPosts);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   })();
      


// // fetch data from url func
//        async function fetchData(){
//         const url ="https://jsonplaceholder.typicode.com/todos";
//         const response = await fetch(url);  
//         const data = await response.json();   // json() return a promise so we should add await
//         console.log("Fetched data:", data);                            
//        }


// fetchData()
//     // .then(data => {
//     //     console.log("Fetched data:", data);
//     // })
//     // .catch(error => {
//     //     console.error("Error:", error);
//     // });

// async function uploadPost(data) {
//     const url = "https://jsonplaceholder.typicode.com/posts";
//         const response = await fetch(url, {
//             method: 'POST',  
//             headers: {
//                 'Content-Type': 'application/json'  
//             },
//             body: JSON.stringify(data)  ,
//         });
// // console.log(data)
//         const responseData = await response.json();  
//         console.log(responseData) ;
// }
// const postData = {
//     userId: 1,
//     title: "Example Post",
//     body: "This is an example post sent via Fetch ."
// };


// uploadPost(postData)

// break point بدي توقف هون



// Debugging
// function factorial(n) {
//     let result = 0; // Logical error here, should be initialized to 1
//     for (let i = 1; i <= n; i++) {
//       result *= i;                                                                                                                                                                                                                                                                
//     }
//     return result;
//   }
  
//   const number = 5; 
//   const result = factorial(number);
//   console.log(`Factorial of ${number} is ${result}`); // O
 
//  const innerTextElement = document.querySelector('.inner-text');
         
//  innerTextElement.innerHTML = "Hi , My name is Yaman";


// async function GetTodo() {
//     const url = "172.16.102.57:3000";
    
//     try {
//         const response = await fetch(`https://${url}/api/v1/tasks`);
        
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
        
//         const data = await response.json();
//         console.log("Fetched data:", data.data.tasks);
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// }

// GetTodo();

        // .then(data => {
        //     console.log("Fetched data:", data);
        // })
        // .catch(error => {
        //     console.error("Error:", error);
        // });


        // async function GetTodo() {
        //     const url = "172.16.102.57:3000";  
            
        //     try {
        //         const response = await fetch(`https://${url}/api/va/tasks`);  
        //         if (!response.ok) {
        //             throw new Error('Network response was not ok');
        //         }
                
        //         const data = await response.json();
        //         console.log("Fetched data:", data);
        //     } catch (error) {
        //         console.error("Error fetching data:", error);
        //     }
        // }
        
        // GetTodo();  
        

        async function GetTodo() {
            const url = "172.16.102.57:3000";
            
            try {
                const getResponse = await fetch(`https://${url}/api/v1/tasks`);
                
                const getTasksData = await getResponse.json();
                console.log("Fetched tasks:", getTasksData.data.tasks);
        
                
                const postResponse = await fetch(`https://${url}/api/v1/tasks`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        title: 'New Task Title',
                        task_status:"example",
                        description:"....."
                    })
                });
        
                if (!postResponse.ok) {
                    throw new Error('errror');
                }
        
                const postResponseData = await postResponse.json();
                console.log("Posted data:", postResponseData);
            } catch (error) {
                console.error("Error:", error);
            }
        }
        
        GetTodo();
        