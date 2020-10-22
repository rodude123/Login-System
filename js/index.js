document.querySelector("#goToSignup").addEventListener("click", () =>
{
	document.querySelector("#loginContainer").style.display = "none";
	document.querySelector("#signupContainer").style.display = "block";
});

document.querySelector("#goToLogin").addEventListener("click", () =>
{
	document.querySelector("#loginContainer").style.display = "block";
	document.querySelector("#signupContainer").style.display = "none";
});
