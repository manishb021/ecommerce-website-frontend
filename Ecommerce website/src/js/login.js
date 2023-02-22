

// variables

const loginForm = getElement('loginForm')
const signupForm = getElement('signupForm')
const showLoginBtn = getElement('showLoginBtn')
const showSignupBtn = getElement('showSignupBtn')
const loginUsername = getElement('loginUsername')
const signupUsername = getElement('signupUsername')
const loginPassword = getElement('loginPassword')
const signupPassword = getElement('signupPassword')
const signupBtn = getElement('signupBtn')
const loginBtn = getElement('loginBtn')
const signupEmail = getElement('signupEmail')
const authErrMsg = getElement('authErrMsg')
const succErrMsg = getElement('succErrMsg')


//event listner
showSignupBtn.addEventListener('click', showSignup)
showLoginBtn.addEventListener('click', showLogin)
signupBtn.addEventListener('click',signupFn)
loginBtn.addEventListener('click',loginfn)



//functions
function showSignup(){
     signupForm.classList.remove('d-none')
     loginForm.classList.add('d-none')
}
function showLogin(){
    signupForm.classList.add('d-none')
    loginForm.classList.remove('d-none')
}
function signupFn(){}
function loginfn(){}
function getElement(id){
return document.getElementById(id)
}
