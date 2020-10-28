document.querySelector("#goToSignup").addEventListener("click", () =>
{
	//toggle the flipped class when going to signup
	document.querySelector("#loginContainer").classList.toggle("flipped");
	document.querySelector("#signupContainer").classList.toggle("flipped");
});

document.querySelector("#goToLogin").addEventListener("click", () =>
{
	//toggle the flipped class when going to login
	document.querySelector("#loginContainer").classList.toggle("flipped");
	document.querySelector("#signupContainer").classList.toggle("flipped");
});

