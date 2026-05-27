// const tinderUser = new Object()   known as singleton object 
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


//object ke andar onbject 

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);


//merge two object 

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//    const obj3 = { obj1, obj2 }      ------>>>>>  obj 3  kee andar do object honge vo obj1,obj2 --- !!!!apn ko merge karna tha!!!


const obj9 = Object.assign({}, obj1, obj2, obj4)  
            //   Object.assign( {}----->>>> ye target hai    ,  (  obj1, obj2, obj4)  ---->>> ye source haoi )




const obj3 = {...obj1, ...obj2}
// console.log(obj3);

  
//database se 

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));---->>>>>>  array of key banaata hai 
// console.log(Object.values(tinderUser));------>>>>  array of vallue  banaata hai 
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));    -->>> kya apke pass yeh looged in naam ki prop hai kya 

// destructutering 
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: ram} = course

// console.log(courseInstructor);
console.log(ram);

// { josn 
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]