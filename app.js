// getting error
// const num:string = "40";
// console.log(num);
// const num:number = 40;
// console.log(num);
// ============================  core type in TypeScript vedio number 5
// let number:number = 10;
// let str:string = "abcd";
// let bool:boolean = true;
// getting the error
// function add(a1,a2){
//     return a1+a2;
// }
// let result = add("44",6);
// console.log(result)
// this is the right way in typescript
// function add(a1:number,a2:number){
//     return a1+a2;
// }
// console.log(add(90,10));
// function dummy(a:string){
//     return a;
// }
// console.log(dummy("this is typescript function"));
// ============================  TypeScript vs JavaScript vedio number 6
// in javascrpt 
// function add(a1,a2){
//     if (typeof a1 === "number" && typeof a2 === "number") {
//         return a1+a2;
//     }
//     else{
//         return new Error("the type is not vail");
//     }
// }
// console.log(add(20,30));
// in typescript
function add(a1, a2) {
    return a1 + a2;
}
console.log(add(30, 30));
