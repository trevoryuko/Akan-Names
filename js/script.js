//General Array Function
function MakeArray(x) {
   this.length = x;
   for (var i = 1; i <=x; i++) {
     this[i] = 0;
   }
  }
  
  days = new MakeArray();
  days[0] = "Saturday"
  days[1] = "Sunday"
  days[2] = "Monday"
  days[3] = "Tuesday"
  days[4] = "Wednesday"
  days[5] = "Thursday"
  days[6] = "Friday"
  
  
  months = new MakeArray(12);
  months[1] = "January"
  months[2] = "February"
  months[3] = "March"
  months[4] = "April"
  months[5] = "May"
  months[6] = "June"
  months[7] = "July"
  months[8] = "August"
  months[9] = "September"
  months[10] = "October"
  months[11] = "November"
  months[12] = "December"
  
  var MaleAkanNames=["Kwame","Kwasi","Kwando","Kwabena","Kwaku","Yaw","Kofi"]
  var FemaleAkanNames=["Ama","Akosua","Adwao","Abenaa","Akua","Yaa","Afua",]
  
  function compute(form) {
   var val1 = parseInt(form.day.value, 10)
   if ((val1 < 0) || (val1 > 31)) {
      alert("Day is invalid")
   }
   var val2 = parseInt(form.month.value, 10)
   if ((val2 < 0) || (val2 > 12)) {
      alert("Month is invalid")
   }
   var val2x = parseInt(form.month.value, 10)
   var val3 = parseInt(form.year.value, 10)
   if (val3 < 1900) {
      alert("You were not born yet!")
   }
   if (val2 == 1) {
      val2x = 13;
      val3 = val3-1
   }
   if (val2 == 2) {
      val2x = 14;
      val3 = val3-1
   }
   var val4 = parseInt(((val2x+1)*3)/5, 10)
   var val5 = parseInt(val3/4, 10)
   var val6 = parseInt(val3/100, 10)
   var val7 = parseInt(val3/400, 10)
   var val8 = val1+(val2x*2)+val4+val3+val5-val6+val7+2
   var val9 = parseInt(val8/7, 10)
   var val0 = val8-(val9*7)
   form.result1.value = months[val2]+" "+form.day.value +", "+form.year.value;
   form.result2.value = days[val0];
  
   var akannames = ""
   var gender = form.gender.value;
   if (gender==="Male") {
    akannames = MaleAkanNames[val0]
   }else if (gender==="Female"){
      akannames=FemaleAkanNames[val0]
   }else {
      alert("input invalid!!!!")
   }
   form.result3.value = akannames
  
  }
// end script -->