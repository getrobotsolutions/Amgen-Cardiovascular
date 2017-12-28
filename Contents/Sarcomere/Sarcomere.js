//*******************************************************************************
//   FURO-D Robot Avatar Contents Templage JS : 2016.02.02
//                     
//   Comment : (1) 
//             (2) 댄스를 시작할 때마다, ChangeLanguage를 하는 버그(?)가 있음. -> 임시조치함.
//             (3)  
//*******************************************************************************


// [ Variables Setting ] --------------------------------------------------------
SetVoiceRecognition('false');

//-- Main Contents로 돌아감. 
function GoHome()
{
	location.href = "../../maincontents.htm";
}


//------------------------------------------------------------------------------
// FC_SetRobotFlagTrue : Flag 처리. --> 향후, 소스코드에서 	DeleteRobotFace() 호출시, 
//                                      사진 아바타가 아닐 경우 skip처리 필요함.
//------------------------------------------------------------------------------
function FC_SetRobotFlagTrue()
{
	//flagPictureAvatar = "true";
}

function OnUserApproached()
{	
	PlaySpeech("Welcome to the Amgen booth.");
}

function OnUserDisappeared()
{
	location.href = "../../maincontents.htm";
}