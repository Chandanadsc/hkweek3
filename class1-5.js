const zod = require("zod");
function validateInput(arr){
    // if(typeof arr == 'object' && arr.length>=1  && arr[0] == 'numer'){

    // }
   const schema = zod.array(zod.number());
   const response = schema.safeParse(arr);
   console.log(response);
}

validateInput([1,2,3]);
