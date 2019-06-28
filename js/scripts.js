/*BRIAN SMITH
  CGS3066*/

function formSubmitted(event) {
	event.preventDefault(); //stop the page from reloading
	const myform=event.target;
	let error=false;

	//name should be nonempty and first character should be uppercase
	if (!myform.name.value || myform.name.value[0].toLowerCase()=== myform.name.value[0]) {
		
		document.querySelector("#name").classList.add("error");
		document.getElementById("name").style.borderColor="red";
		error=true;
		window.alert("First letter of your name must be uppercase");
	}

	//username should be nonempty and at least 5 characters
	if (!myform.username.value || myform.username.value.length < 5) {
		document.querySelector("#username").classList.add("error");
		document.getElementById("username").style.borderColor="red";
		error=true;
		window.alert("username must have more than five characters");
	}

	//password should be at least six characters
	if (!myform.password.value || myform.password.value.length < 6) {
		document.querySelector("#password").classList.add("error");
		document.getElementById("password").style.borderColor="red";
		error=true;
		window.alert("Password must be more than six characters");
	}

	//age should be greater than zero
	if (myform.age.value < 1) {
		document.querySelector("#age").classList.add("error");
		document.getElementById("age").style.borderColor="red";
		error=true;
		window.alert("Age must be greater than zero.");
	}
	var x=myform.bio.value; //gets value of bio
	var y="fsu"; //y & z are variables for checking the bio
	var z="florida state";

	//bio should contain either "fsu" or "florida state"
	if (myform.bio.value) {
		
		if (x.indexOf(y)<0) {
			if(x.indexOf(z)<0){

			document.querySelector("#bio").classList.add("error");
			document.getElementById("bio").style.borderColor="red";
			window.alert("Bio must contain FSU or Florida State");
			error=true;
			}
		}

	}

	//if certification of liking dogs isn't checked, user can't select a dog
	if (myform.udogs.checked===false && myform.topdog.value != 0)
	{
		document.querySelector("#udogs").classList.add("error");
		document.querySelector("#topdog").classList.add("error");

		document.getElementById("udogs").style.borderColor="red";
		document.getElementById("topdog").style.borderColor="red";
		window.alert("Didn't certify that you like dogs, so you can't choose a dog breed!");
		error=true;

	}
	//if there is an error, page won't load new info
	if (error) {
		event.preventDefault();
		return false;
	}

	//if no error, begin output
	if (!error)
	{
		var outputbox=document.getElementById("output"); //selects output div
		//output info
		outputbox.innerHTML="Your name is: " + myform.name.value+ "<br><br>Your username is: " + myform.username.value + "<br><br>" + "Your password is " + myform.password.value.length + " characters long" + "<br><br>" + "Your age: " + myform.age.value + "<br><br>" + "Your bio: " + document.getElementById("bio").value + "<br>";
		
		//next few lines determine which gender radio button is selected
		var val;
		var radios= document.getElementsByName('gender');

		for (var i=0, len=radios.length; i<len; i++){
			if (radios[i].checked){
				val=radios[i].value;
				break;
			}
		}
		//output gender
		outputbox.innerHTML+="<br> Your gender is:";
		if(val==="xx")
			outputbox.innerHTML+=" female.<br>";

		if(val==="xy")
			outputbox.innerHTML+=" male.<br>";

		if(val==="oth")
			outputbox.innerHTML+=" other.<br>";

		if(val==="pns")
			outputbox.innerHTML+=" prefer not to say.<br>";

		//output certification selection
		if(myform.udogs.checked===false)
			outputbox.innerHTML+="<br>You did not certify that you like dogs.<br>";
		else
			outputbox.innerHTML+="<br> You certified that you like dogs! <br>";

		//output what breed is favorite
		if(myform.udogs.checked===true)
		{
			outputbox.innerHTML+="<br>Your favorite dog breed: "
			var x= document.getElementById("topdog");
			var str= x.options[x.selectedIndex].value;
			if(str === "0")
				outputbox.innerHTML+="you don't like dogs";
			if(str === "1")
				outputbox.innerHTML+="labrador";
			if(str === "2")
				outputbox.innerHTML+="golden retriever";
			if(str === "3")
				outputbox.innerHTML+="corgi";
			if(str === "4")
				outputbox.innerHTML+="chihuahua";
			if(str === "5")
				outputbox.innerHTML+="other";

		}
	}

	return true;
}

document.querySelector('#main-form').addEventListener('submit', formSubmitted);