function GoHome()
{
  location.href = "../../maincontents.htm";
}


function CheckVal(){
  var bar_code = $("#bar_code").val(); 
  $(".wrapper1").show();
  $(".inst-img").hide();
  //alert(bar_code.val());
  var len = bar_code.length;
  var parts = bar_code.split("$");
  var badgeNumber=parts[0];
  var firstName=parts[2];
  var lastName=parts[3];
  var companyName=parts[4];
  if(badgeNumber==null || firstName==null || lastName==null || companyName== null){
    alert("Please Scan badge again");
    location.reload();
  }
  else{
    writeCookie("BadgeNumber", badgeNumber, 30);
    writeCookie("FirstName", firstName , 30);
    writeCookie("LastName", lastName , 30);
    writeCookie("CompanyName", companyName  , 30);
    
    $(".badgescanning").hide();
    $("#panel2").show();
    alert("Welcome " + firstName + " "+ lastName );

    var dataString =  { 'BadgeNumber' : badgeNumber, 'FirstName' : firstName,  'LastName' : lastName, 'CompanyName' : companyName};
      $.ajax({  
        url:"https://robotaisolutions.com/amgen/api.php",
        type:"post",
        data : dataString,
              cache : false,
        success : function (data) { 
          alert("success")
          //ShowPopup('Thank You');
          
          //PlaySpeech('Thank You');
          //GoHome();     
                //$("" + e_review + " .add-review #form-add-review").fadeOut(600);
                //$("" + e_review + " .add-review .notice").append(data).fadeIn(1500); 
        }
      });
  }
}
                        
                        
                       // alert("First Name: " + parts[2]);
                        //alert("Last Name: " + parts[3]);
                       // alert("Company Name:" + parts[4]

             /*$(".wrapper1").hide();
             

              var dNow = new Date();
              var month = dNow.getMonth()+1;
              var day = dNow.getDate();
              var year = dNow.getFullYear();
              var hour = dNow.getHours();
              var min = dNow.getMinutes();
              */
            /*$.ajax({
                type: "GET",
                url:url,
                dataType: "JSONP",
                success: function(data) {
                  console.log(data);
                  }
            });         
            }); */               
  $(document).ready(function() {
      $("#bar_code").focus();
  });
            $( function() {
                  $('.submit').click(function(e) {
                      e.preventDefault();
                     
                      var bar_code = $("#bar_code").val(); 
                  //    console.log(bar_code);
                      
                    if(bar_code.length>0){
                        
                        CheckVal();

                      }   

                      else{
                       // alert("Please put the Barcode scanner on the right position and try again.");
                        //location.reload();
                      }                     
                  });
                 
                    setTimeout(function() {
                      $('#submit').trigger('click');
                      }, 5000);

                 
        });
