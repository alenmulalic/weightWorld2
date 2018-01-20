
window.onload=function(){
  var workout = document.getElementById('workoutSubmit');
  var workoutForm =document.getElementById('workoutForm');

  workout.addEventListener('click',function(){
      var cln = workoutForm.cloneNode(true);
      document.getElementById('mainForm').appendChild(cln);
      console.log('button has been clicked');

    });
}
