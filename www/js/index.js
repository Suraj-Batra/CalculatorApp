 document.addEventListener('deviceready', onDeviceReady, false);

 function onDeviceReady() {
        document.getElementById('addbutton').addEventListener('click', Add);
           function Add(){
           var num1 = document.getElementById("firstNumber").value;
           var num2 = document.getElementById("SecondNumber").value;
           document.getElementById("addresult").innerHTML = "Result : " + (Number(num1) + Number(num2));
        }
 }