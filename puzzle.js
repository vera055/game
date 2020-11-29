var runflag;
var runtime;
function checkFinishState() {
  console.log($("#d8").prop("style")["top"]);
  console.log($("#d8").prop("style")["left"]);
  if ($("#d1").prop("style")["top"] == '0px' 
      && $("#d1").prop("style")["left"] == '0px'

      && $("#d2").prop("style")["top"] == '0px'
      && $("#d2").prop("style")["left"] == '150px'

      && $("#d3").prop("style")["top"] == '0px'
      && $("#d3").prop("style")["left"] == '300px'

      && $("#d4").prop("style")["top"] == '150px'
      && $("#d4").prop("style")["left"] == '0px'

      && $("#d5").prop("style")["top"] == '150px'
      && $("#d5").prop("style")["left"] == '150px'

      && $("#d6").prop("style")["top"] == '150px'
      && $("#d6").prop("style")["left"] == '300px'

      && $("#d7").prop("style")["top"] == '300px'
      && $("#d7").prop("style")["left"] == '0px'

      && $("#d8").prop("style")["top"] == '300px'
      && $("#d8").prop("style")["left"] == '300px'
      ) {
        console.log("finish");
        alert("finish");
      }
}

function restore() {

}

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function begin() {

}

function end(){

}

function ifNearEmpty(parm) {
  var topDis = parseInt($("#"+parm).css("top")) - parseInt($("#empty").css("top"));
  var leftDis = parseInt($("#"+parm).css("left")) - parseInt($("#empty").css("left"));
  if(Math.abs(topDis) > 150 || Math.abs(leftDis) > 150)
  {
    return false;
  }
  else{
    if(Math.abs(topDis) == 150 && Math.abs(leftDis) == 150)
    {
      return false;
    }
    return true;
  }
}  

function changePose(parm) {
  var p_top = $("#"+parm).css("top");
  var p_left = $("#"+parm).css("left");
  $("#"+parm).css({"top":$("#empty").css("top"), "left":$("#empty").css("left")});
  $("#empty").css({"top":p_top,"left":p_left});
  
}

async function move(parm) {
  if(ifNearEmpty(parm)){
    changePose(parm);
    await sleep(300);
    checkFinishState();
  }
}