var bar=[];
function setLayout(id) {

	var btn=$('#btn' + id);

	if(btn.hasClass("downloadbtn")){

		btn.removeClass("downloadbtn");
		btn.html("正在下载...");
		btn.addClass("downloadingbtn");

	}else if(btn.hasClass("installbtn")){
	
		btn.removeClass("installbtn");
		btn.addClass("installingbtn");

	}else if(btn.text()=="继续下载"){
		btn.html("正在下载...");
	}
   
    $('#load' + id).show();

    var speed = 100;

    bar[id] = setInterval(function () {
        nowWidth = parseInt($("#bar_" + id).width());
       
        if (nowWidth <= 98) {
            barWidth = (nowWidth + 1) + "px";
            $("#bar_" + id).css("width", barWidth);
        } else {
        	btn.html("");
            btn.removeClass("downloadingbtn");
            btn.addClass("installbtn");
            clearInterval(bar)
        }
    }, speed);
}

function pause(id) {
	clearInterval(bar[id])

	var btn=$('#btn' + id);
	if(parseInt($("#bar_" + id).width())<parseInt($("#loading_" + id).width())){
		btn.html("继续下载");
	}
}
	
