function time_convert(num)
 { 
  var minutes = Math.floor(num / 60);  
  var seconds = num - minutes * 60;
  return minutes + ":" + seconds;         
}