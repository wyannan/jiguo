var input = document.getElementsByTagName('input');
for(var i = 0 ;i <input.length;i++){
    input[i].onfocus = function(){
        if(input.value != ''){
            input.value == '';
        }
     }
}