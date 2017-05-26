function pauseorresume(ele)
{
	var x=document.getElementById(ele.id);
	if(x.style.animationPlayState==="paused")
		x.style.animationPlayState="running";
	else
		x.style.animationPlayState="paused";
}