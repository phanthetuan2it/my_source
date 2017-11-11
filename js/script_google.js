
	function logout()
{
    gapi.auth.signOut();
    location.reload();
}
function login() 
{
  var myParams = {
    'clientid' : '424240407147-nrg8r31agipopkvbmij1o4g0f08aki6e.apps.googleusercontent.com',
    'cookiepolicy' : 'single_host_origin',
    'callback' : 'loginCallback',
    'approvalprompt':'force',
    'scope' : 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.profile.emails.read'
  };
  gapi.auth.signIn(myParams);
}
 
function loginCallback(result)
{
    if(result['status']['signed_in'])
    {
        var request = gapi.client.plus.people.get(
        {
            'userId': 'me'
        });
        request.execute(function (resp)
        {
            var email = '';
			
			
            if(resp['emails'])
            {
                for(i = 0; i < resp['emails'].length; i++)
                {
                    if(resp['emails'][i]['type'] == 'account')
                    {
                        email = resp['emails'][i]['value'];
						
                    }
                }
            }				
			var str = "Name:" + resp['displayName'] + "<br>";
            str += "Image:" + resp['image']['url'] + "<br>";
            str += "<img src='" + resp['image']['url'] + "' /><br>";
 
            str += "URL:" + resp['url'] + "<br>";
            str += "Email:" + email + "<br>";
			alert("email:"+ email +" name:"+resp['displayName'] );
			$.ajax({
				data:{email:email,name:resp['displayName'],url:'dangnhap'},
				type:'post',
				
				error:function(e){
					console.log(e);
				},
				url:'ajax/ajax_google.php',
				success:function(data){
					alert(data);
					window.location.href='';
					return false;
							
				}
			})
			return false;
 
           
        });
 
    }
 
}

function onLoadCallback()
{
    gapi.client.setApiKey('');
    gapi.client.load('plus', 'v1',function(){});
}
 (function() {
       var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
       po.src = 'https://apis.google.com/js/client.js?onload=onLoadCallback';
       var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
     })();	