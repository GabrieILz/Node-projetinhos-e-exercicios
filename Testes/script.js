let fs = require('fs');

fs.readFile('NovoNome.txt','UTF8',function(error, data){
    
    if (error){throw error};

    console.log(data);
})

