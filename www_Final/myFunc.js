function addVerificationBar(){
	var myButton=document.getElementById("removeMe");
	var parentField=document.getElementById("inputField");
	parentField.removeChild(myButton);
	var helpInfo=document.createElement('p');
	var text = document.createTextNode("To verify your identity on this computer, please enter the verification code we sent to your email account.");
	helpInfo.appendChild(text);
	helpInfo.style.textAlign='center';
	parentField.appendChild(helpInfo);
	var verify=document.createElement('div');
	verify.setAttribute('class', 'form-group');
	var input=document.createElement('input');
	input.setAttribute('class', 'form-control');
	input.setAttribute('placeholder','Enter Verification Code');
	verify.appendChild(input);
	parentField.appendChild(verify);
	myButton=document.createElement('button');
	myButton.setAttribute('class', 'btn btn-primary');
	myButton.setAttribute('type',"button");
	myButton.innerHTML="Continue";
	verify=document.createElement('a');
	verify.setAttribute("href", "account_summary.html");
	verify.appendChild(myButton);
	parentField.appendChild(verify);







}