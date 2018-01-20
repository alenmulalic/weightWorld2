window.onload=function(){
  var workout = document.getElementById('workoutSubmit');
  document.getElementById('mainForm').style.display ="none";
  var workoutAdd = document.getElementById('workoutAdd');
  var workoutForm = document.getElementById('workoutForm');

  workout.addEventListener('click',function(){
      document.getElementById('mainForm').style.display ="inherit";
      console.log('button has been clicked');

      // var cln = workoutForm.cloneNode(true);
      // document.getElementById('mainForm').appendChild(cln);
      // console.log('button has been clicked');

    });
    workoutAdd.addEventListener('click', function() {
      var cln = workoutForm.cloneNode(true);
      document.getElementById('mainForm').appendChild(cln);
      console.log('button has been clicked');
    });

}
