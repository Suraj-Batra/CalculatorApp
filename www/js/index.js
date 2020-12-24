 document.addEventListener('deviceready', onDeviceReady, false);

 function onDeviceReady() {
        document.getElementById('addbutton').addEventListener('click', Add);
           function Add(){
           var num1 = document.getElementById("firstNumber").value;
           var num2 = document.getElementById("SecondNumber").value;
           document.getElementById("result").innerHTML = "Result : " + (Number(num1) + Number(num2));
        }
         document.getElementById('subbutton').addEventListener('click', Sub);
            function Sub(){
            var num1 = document.getElementById("firstNumber").value;
            var num2 = document.getElementById("SecondNumber").value;
            document.getElementById("result").innerHTML = "Result : " + (Number(num1) - Number(num2));
         }
         document.getElementById('multibutton').addEventListener('click', multiply);
         function multiply(){
         var num1 = document.getElementById("firstNumber").value;
         var num2 = document.getElementById("SecondNumber").value;
         document.getElementById("result").innerHTML = "Result : " + (Number(num1) * Number(num2));
      }
      document.getElementById('rembutton').addEventListener('click', remainder);
      function remainder(){
      var num1 = document.getElementById("firstNumber").value;
      var num2 = document.getElementById("SecondNumber").value;
      document.getElementById("result").innerHTML = "Result : " + (Number(num1) / Number(num2));
   }
}