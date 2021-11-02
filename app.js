// ASYNC BASICS EXERCISE

// 1
let name1 = "Luke Skywalker";

function lukeName() {
  console.log(`Question 1`);
  console.log(name1);
}

function luke(name1, callback) {
  setTimeout(() => {
    callback(name1);
  }, 1000);
}
luke(`Mark Hamill`, e => {
    console.log(e);
});
lukeName();

// 2
let name2 = "Han Solo";

function hanName() {
  console.log(`Question 2`);
  console.log(name2);
}

function han(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(n);
          }, 2000);
    });

}
han(`Harrison Ford`)
.then(hf => console.log(hf));
hanName();

// 3
let name3 = "Leia Organa";

function leiaName() {
  console.log(`Question 3`);
  console.log(name3);
}

function leia(n){
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve(n);
      }, 3000);
  })
}
async function three(){
    const l = await leia(`Carrie Fisher`);
    console.log(l);  
}
leiaName();
three();