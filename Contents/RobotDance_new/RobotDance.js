﻿//*******************************************************************************
//   FURO-D Contents Templage JS : 2016.11.14

//   Comment : (1) Contents 정리.
//             (2)
//             (3)  
//*******************************************************************************

function JSMain() {
	setTimeout("Init()",100);
}

function Init(){	
	FC_ReadSelectedMovie(readCookie('CurrentMovie'));
}

function JSUnload() {
	HideAdMovie();
}

function OnUserApproached() {
	window.external.RobotDanceStart(false);
}


function Home() {
	location.href = "../../maincontents.htm";
}

function FC_ReadSelectedMovie() {
	var tmpIdx ;
	FC_ChangeAdMovieHtml(tmpIdx);
}

var num = 1 ;
function select(strpara) {
	num  = strpara ;
	
	var album = document.getElementById("album");
	var select01 = document.getElementById("select01");
	var select02 = document.getElementById("select02");
	var select03 = document.getElementById("select03");
	var select04 = document.getElementById("select04");
	var select05 = document.getElementById("select05");
	var select06 = document.getElementById("select06");
	var select07 = document.getElementById("select07");
	var select08 = document.getElementById("select08");
	var select09 = document.getElementById("select09");

	
	select01.style.display = "none";
	select02.style.display = "none";
	select03.style.display = "none";
	select04.style.display = "none";
	select05.style.display = "none";
	select06.style.display = "none";
	select07.style.display = "none";
	select08.style.display = "none";
	select09.style.display = "none";
	
	FC_ChangeAdMovieHtml(num);
	stop();
	HideAdMovie();
	
	
	
	if (num == 1 )	{
		select01.style.display = "";
		album.src = "Image/cover_The-lazy-song.png";
		}
	if (num == 2 )	{
		select02.style.display = "";
		album.src = "Image/cover_cheerup.png";
		}
	if (num == 3 )	{
		select03.style.display = "";
		album.src = "Image/cover_-I`m-Yours.png";
		}
	if (num == 4 )	{
		select04.style.display = "";
		album.src = "Image/cover_TT.png";
		}
	if (num == 5 )	{
		select05.style.display = "";
		album.src = "Image/cover_With-You.png";
		}
	if (num == 6 )	{
		select06.style.display = "";
		album.src = "Image/cover_너그리고나.png";
		}
	if (num == 7 )	{
		select07.style.display = "";
		album.src = "Image/cover_너무너무너무.png";
		}
	if (num == 8 )	{
		select08.style.display = "";
		album.src = "Image/cover_시간을-달려서.png";
		}
	if (num == 9 )	{
		select09.style.display = "";
		album.src = "Image/cover_우주를줄게.png";
		}
	
	StopAdMovie();
	
	
}

var path;
function FC_ChangeAdMovieHtml(strIdx) {

	if (strIdx == "1")
		path = "Movies/1.flv";
	if (strIdx == "2")
		path = "Movies/2.avi";
	if (strIdx == "3")
		path = "Movies/3.avi";
	if (strIdx == "4")
		path = "Movies/4.avi";
	if (strIdx == "5")
		path = "Movies/5.avi";
	if (strIdx == "6")
		path = "Movies/6.avi";
	if (strIdx == "7")
		path = "Movies/7.avi";
	if (strIdx == "8")
		path = "Movies/8.avi";
	if (strIdx == "9")
		path = "Movies/9.avi";
	
}

var toggle = 0 ;
var dancetime ;
function dance() {
	
	var play = document.getElementById("play");

	if(toggle == 0) {
		play.src = "Image/Dance_stop.png";		
		window.external.RobotDanceStart(true);
		FC_ChangeAdMovieHtml(num);
		PlayAdMovie(path, 0, 1200, 1080, 720, true);
		dancetime = setTimeout("stop()", 60000);
		toggle = 1;	
	}
	
	else if(toggle == 1) {
		
		stop();
		toggle = 0;
	}	
	
}

function stop(){
	play.src = "Image/Dance_play.png";		
	window.external.RobotDanceStart(false);
	StopAdMovie();
	HideAdMovie();
	clearTimeout(dancetime);
	toggle = 0;
}


function dance_num(strpara) {

	if(strpara == 0){
		--num;
		if (num <= 0) {
			num = 1 ;
		} 
		
		
	}
	
	else if (strpara == 1) {
		++num;
		if (num > 9) {
			num = 9 ;
		}
		
	}
	
	select(num);
	
}
