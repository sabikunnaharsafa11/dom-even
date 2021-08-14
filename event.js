function makeRed(){
    document.body.style.backgroundColor = 'red';
}
//  handle bule button click setting function name
const blueButton = document.getElementById('make-blue-button');
        blueButton.onclick = makeBlue; 

        function makeBlue() {
            document.body.style.backgroundColor = 'blue';
        } 
// handle even using anonymous function
      const greenButton = document.getElementById('make-green-button');
    //   anonymous function
     greenButton.onclick = function() {
         document.body.style.backgroundColor = 'green';
     }

// handle by using add eventlistener
     const goldenRod = document.getElementById('make-goldenrod');
      goldenRod.addEventListener('click',makeGoldenRod)

      function makeGoldenRod() {
          document.body.style.backgroundColor = 'goldenRod';
      }
    // add eventlistener 
      const hotPinkButton = document.getElementById('make-hotpink');
      hotPinkButton.addEventListener('click', function() {
          document.body.style.backgroundColor = 'hotPink';
      })
   // direct shortcut   
      document.getElementById('make-lightblue').addEventListener('click', function() {
        document.body.style.backgroundColor = 'lightBlue';
    })