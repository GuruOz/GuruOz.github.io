function calculate_age(new Date(1996, 1, 1)) { 
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
  
    age = Math.abs(age_dt.getUTCFullYear() - 1970);
}