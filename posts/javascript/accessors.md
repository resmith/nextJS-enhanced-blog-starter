---
author: Robert Smith
date: '2020-08-17T07:00:00.000Z'
title: 'Javascript - Accessors'
---

## Getters and setters
#### Create the object
Let's start by creating an object with getters and setters
``` javascript
// Create the object
var student = {
  name: "A Smith",
  study: "singing",
  age: 19,
  get getStudy() {
    return this.study;
  },
  set setStudy(study) {
    this.study = study;
  },
  methodStudentStudies: function () {
  	return `${this.name} is studying ${this.study}`
  },
  get getStudentStudies() {
  	return `${this.name} is studying ${this.study}`
  }
};
```

Now to set the property, a controlled method is provided
``` javascript
// Set an object property using a setter:
student.setStudy = "nursing";
```

// Display data from the object using a getter:
document.getElementById("demo2").innerHTML = student.getStudy;

## Function method
Use the function method to retrieve data from the object 
Note the parantheses needed to invoke the function<
<p id="demo3">id = "Demo3"</p>

## Retrieving Data 
Use the getter to retreive the data - student.getStudentStudies
<p id="demo4">id = "Demo4"</p>

Getters and setters are prefered. There simpler and provide better security through controlled access<


## Use Object.defineProperty
#### getIncrementAge
<p id="demo5">Demo5</p>


addToAge and getAge - note on the setters you call them as 

note on the setters you pass values through "= value", not (value)
<p id="demo6">Demo6</p>

```javascript
// Display data from the object using a getter:
document.getElementById("demo3").innerHTML = student.methodStudentStudies();

// Display data from the object using a getter:
document.getElementById("demo4").innerHTML = student.getStudentStudies;




// Use the object define property to create getters and setters
Object.defineProperty(student, "getAge", {
  get : function () {return this.age;}
});
Object.defineProperty(student, "getIncrementAge", {
  get : function () {return this.age++;}
});
Object.defineProperty(student, "addToAge", {
  set : function (value) {this.age += value;}
});

// Display data from the object using a getter:
document.getElementById("demo5").innerHTML = student.getIncrementAge;
student.addToAge = 4;

// debugger;
x = student.getAge;
document.getElementById("demo6").innerHTML = student.getAge;


```
