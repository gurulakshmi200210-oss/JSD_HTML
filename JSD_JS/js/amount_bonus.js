let salary=number(prompt("Enter Mothly salary"));
let number_of_working_days=Number(prompt("Enter workiing days"));
let one_day_salary=salary/number_of_working_days;
let number_of_days_worked=Number(prompt("Number of days you worked"));
let bonus= Number(prompt("bonus amount"));
let total_salary= one_day_salary*number_of_days_worked+bonus;

document.write("salary :"+salary+"</br>");
document.write("oneday salary:"+one_day_salary+"</br>");
document.write("number of workingdays:"+number_of_working_days+"</br>");
document.write("number of days you worked:"+number_of_days_worked+"</br>");
document.write("bonus:"+bonus +"</br>");
document.write("total salary is :"+total_salary+"</br>");