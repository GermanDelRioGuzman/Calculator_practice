function calculate(){
    const num1 = document.getElementById("num1").value ;
    const num2 = document.getElementById("num2").value ;

    let result;
    result = num1 + num2;

    document.getElementById("result").innerText = "Result: " + result.toFixed(2);
}

function resetFields(){
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("operator").value = "+";
    document.getElementById("result").innerText = "Result: ";

}