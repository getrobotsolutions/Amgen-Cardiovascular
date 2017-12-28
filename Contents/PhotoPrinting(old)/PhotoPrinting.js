//*******************************************************************************
//   FURO-D Contents Templage JS : 2016.02.02

//   Comment : (1) Contents 정리.
//             (2)
//             (3)  
//*******************************************************************************


//-- Main Contents로 돌아감. 
function GoHome()
{
	location.href = "../../maincontents.htm";
}


function FC_TTS_Shotter()
{
	var strLanguage = readCookie("CurrentLanguage");
	if(strLanguage=="Kr") { PlaySpeech("앞쪽의 카메라를 봐 주세요.");  }
	if(strLanguage=="En") { PlaySpeech("Please, Look at the camera on my head.");  }
	if(strLanguage=="Cn") { PlaySpeech("");  }
	if(strLanguage=="Jp") { PlaySpeech("");  }
}


function Print()
{
	//Print시 TTS출력 Function
	PlaySpeech('사진을 출력하고 있습니다. 잠시만 기다려 주세요.');
}


//변수 : (string fileName, string printerName, int printCount)
function PrintImage(fileName, fileHex)
{
	var directory = "C:\\FutureRobot\\Contents\\FuroContents\\Photo\\";
	fileName = directory + fileName;
	
	window.external.PrintImage(fileName, "kodak", 1);
}

//변수 : (string savePath, string overlapImgPath)
var imageFilePath;
function SaveImage(fileName)
{
	window.external.PauseCamViewer();

	var directory = "C:\\FutureRobot\\Contents\\FuroContents\\Photo\\";
	var overlapImgPath = "C:\\FutureRobot\\Contents\\FuroContents\\logo.png";
	imageFilePath = directory + fileName;
	isLogoPrint = true;
	window.external.SaveImage(imageFilePath, overlapImgPath);
}

function FC_CameraClear()
{
	window.external.CamViewerStart(true);
}


function FC_SendEmail(addr)
{
	var subject = "Welcome to FutureRobot!";
	var body = "This photo captured at " + getTimeStamp();
	var mail_server = "smtp.gmail.com";
	var mail_addr_sender = "tamourashfaq@gmail.com";
	var pswd = "allahone1";
	var port = 465;
	var ssl = "true"

	window.external.SendEmail(addr,imageFilePath, subject, body,mail_server, mail_addr_sender, pswd , port, ssl);

}


function OnSendEmailResult(result)
{
	if(result == "True")
		App.sendResultCallback("SUCCESS");
	else if(result == "False")
		App.sendResultCallback("FAIL");
}

function OnUserApproached()
{
	
}

function OnUserDisappeared()
{
	location.href = "../../IdlePage/IdlePage.htm";
}


function getTimeStamp() {
  var d = new Date();
  var s =
    leadingZeros(d.getFullYear(), 4) + '-' +
    leadingZeros(d.getMonth() + 1, 2) + '-' +
    leadingZeros(d.getDate(), 2) + ' ' +

    leadingZeros(d.getHours(), 2) + ':' +
    leadingZeros(d.getMinutes(), 2) + ':' +
    leadingZeros(d.getSeconds(), 2);

  return s;
}

function leadingZeros(n, digits) {
  var zero = '';
  n = n.toString();

  if (n.length < digits) {
    for (i = 0; i < digits - n.length; i++)
      zero += '0';
  }
  return zero + n;
}
