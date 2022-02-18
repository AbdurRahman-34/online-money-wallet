        // calculate button click event
        document.getElementById('calculate-btn').addEventListener('click', function () {
            // taking all inputs in an array using function
            const allInputs = [getInputValue('income-input'), getInputValue('food'), getInputValue('rent'), getInputValue('cloth')]
          
            // input validation
            for (const input of allInputs) {
              if (!inputValidation(input,'expenses','balance')) { // validate input using function
                return; 
              }
            }
          
            const totalCost = allInputs[1] + allInputs[2] + allInputs[3]; // adding all the cost
            const balance = allInputs[0] - totalCost; // getting ballance
            document.getElementById('expenses').innerText = 'Total Expenses: ' + totalCost + '$';// set total spending
            if (balance >= 0) {
              document.getElementById('balance').style.color = 'black';
              document.getElementById('balance').innerText = 'Balance: ' + balance + '$' ; // set balance
            } else {
              document.getElementById('balance').innerText = 'Expenses is bigger than Balance !!!'; //set invalid ballance
              document.getElementById('balance').style.color = 'red';
            }
          
          })
          // save button click event
          document.getElementById('save-btn').addEventListener('click', function () {
            // taking all inputs in an array using function
            const allInputs = [getInputValue('income-input'), getInputValue('food'), getInputValue('rent'), getInputValue('cloth'), getInputValue('savingPercent')]
           
            // input validation
            for (const input of allInputs) {
              if (!inputValidation(input,'saving','remaining')) { // validate input using function
                return; // if any input is incorrect, break this event
              }
            }
            
            const savingAmount = allInputs[0] * allInputs[4] / 100; //calculating saving amount
            const balance = allInputs[0] - allInputs[1] - allInputs[2] - allInputs[3] - savingAmount; // getting ballance
            document.getElementById('saving').innerText = 'Saving Amount : ' + savingAmount + '$'; // saving amount
            if (balance>=0) {
              document.getElementById('remaining').style.color = 'black';
              document.getElementById('remaining').innerText = 'Remaining Amount : ' + balance + '$' ; // set balance
            } else {
              document.getElementById('remaining').style.color = 'red';
              document.getElementById('remaining').innerText = 'You can not save this much amount !!' ; // set balance
            }
          })
          
          function getInputValue(idName) {
            return parseInt(document.getElementById(idName).value); // input value 
          }
          
          //validation of expense fields
          function inputValidation(inp, class1 , class2) {
            if (typeof inp == 'number' && inp >= 0) {
              return true;
            } else {
              document.getElementById(class2).innerText = 'String is Invalid Input !'; // invalid input
              document.getElementById(class2).style.color = 'red';
              document.getElementById(class1).innerText='';
              return false;
            }
          }
          