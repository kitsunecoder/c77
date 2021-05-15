var first_name="Allure";
var last_name=" Jorge-Matthews";
var full_name= first_name.concat(last_name);
console.log(full_name);
document.getElementById("ex_1").innerHTML= full_name;
var numbers= ["7","14","21","28","35"];
var max_numbers= Math.max.apply(Math,numbers);
console.log(max_numbers);
document.getElementById("ex_2").innerHTML= max_numbers;