eval("var a= ;"); // Syntax Error

// Custom Eval Error
try{
  throw new EvalError("Custom Eval Error");
}catch(error){
  console.log(error.message);
  console.log(error.name);
}