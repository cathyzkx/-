//login()：点击登录后跳出提示框
function login(event){
	var flag_username=check_username(username,result_username);
	var flag_password=check_password(password.value, result_password);
	if(flag_username && flag_password){
		alert("欢迎！")
	}
	else{
		event.preventDefault();
	}
}

//nextStep()：找回密码点击下一步后跳转
function nextStep(){
	var flag_phone_number=check_phone_number(phoneNumber.value, result_phone_number);
	if(flag_phone_number){
		window.open("resetPassword.html");
	}
	else{
		event.preventDefault();
	}
}

//complete()：重置密码点击完成后跳出提示框
function complete(){
	var flag_repeat_password=check_repeat_password(repeatPassword.value,setPassword.value,result_repeat_password);
	var flag_password=check_password(setPassword.value,result_password);
	if(flag_repeat_password){
		var goBack=window.confirm("密码已重置，请重新登录！");
		if(goBack){
			window.open("loginPage.html");
		}
	}
	else{
		event.preventDefault();
	}
}

//focus_username()：单击用户名文本框时显示提示
function focus_username(obj){
	obj.placeholder=" 以字母开头，最多12位字符";	
}

//check_username()：检查用户名格式是否合规
function check_username(username,resultObj){
	var reg=/^[a-zA-Z0-9]\w{5,11}$/;
	username.placeholder="";
	if(username.value==''){
		resultObj.innerHTML="用户名不能为空";
		return false;
	}
	else if(!reg.test(username.value)){
		resultObj.innerHTML="用户名格式不正确";
		return false;
	}
	else{
		resultObj.innerHTML="";
		return true;
	}
}

//check_password()：检查密码格式是否合规
function check_password(password,resultObj){
	checkPassword=false;
	var reg=/^.{6,16}$/;
	if(password==''){
		resultObj.innerHTML="密码不能为空";
		return false;
	}
	else if(!reg.test(password)){
		resultObj.innerHTML="密码长度为6-16个字符";
		return false;
	}
	else{
		resultObj.innerHTML="";
		checkPassword=true;
		return true;
	}
}

//check_phone_number()：检查手机号码格式是否合规
function check_phone_number(number, resultObj){
	var reg=/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
	if(number==''){
		resultObj.innerHTML="手机号码不能为空";
		return false;
	}
	else if(!reg.test(number)){
		resultObj.innerHTML="手机号码格式不正确";
		return false;
	}
	else{
		resultObj.innerHTML="";
		return true;
	}
}

//check_repeat_password()：检查两次密码输入是否一致
function check_repeat_password(repeat,password,resultObj){
	if(repeat==''){
		resultObj.innerHTML="密码不能为空";
		resultObj.style.color="red";
		return false;
	}
	if(repeat!=password){
		resultObj.innerHTML="与首次输入的密码不一致";
		resultObj.style.color="red";
		return false;
	}
	else{
		resultObj.innerHTML="OK";
		resultObj.style.color="green";
		return true;
	}
}