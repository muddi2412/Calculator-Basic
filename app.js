function getnum(num){
    var result = document.getElementById('result');

    result.value += num;
}

function getclear(){
    var result = document.getElementById('result');
    result.value = "";
}

function getback(){
    var result = document.getElementById('result');
    result.value = result.value.substr(0,result.value.length - 1);
}

function getresult(){
    var result = document.getElementById('result');
    result.value = eval(result.value);
}
