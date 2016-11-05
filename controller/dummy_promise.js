

var myP = new Promise (function(resolve, reject){
  console.log("entering promise");
  setTimeout(function(){
      console.log('working...');
      resolve("my work is ");
      }
      ,3000);
});

myP.then(function(data){
  console.log(data);
  console.log("done")
}, function() {console.log('fail');});