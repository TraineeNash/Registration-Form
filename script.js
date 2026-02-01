const Form_Panel = document.querySelector("#reg-form")
const Submit_Button = document.querySelector("#submit-btn")
const Error_Panel = document.querySelector("#error-msg")

Submit_Button.addEventListener("click",(event)=>{
    

    const phone_no = Form_Panel.phone_number.value.trim()
    const password = Form_Panel.password.value.trim()
    const confirm_pass = Form_Panel.confirm_password.value.trim()

    const Phone_Verification = /^\d{8,10}$/ 

    if(!Phone_Verification.test(phone_no)){
        Error_Panel.classList.remove("hidden")
        Error_Panel.textContent = "Phone number be within 8 to 10 digits"
        event.preventDefault()
        return
    }

    const Pass_Verification = /^(?=.*[A-Za-z])(?=.*\d).{4,}$/

    if(!Pass_Verification.test(password)){
        Error_Panel.classList.remove("hidden")
        Error_Panel.textContent = "Password must be at least 4 characters and need to contain alphabet and numbers!"
        event.preventDefault()
        return
    }

    if(password != confirm_pass){
        Error_Panel.classList.remove("hidden")
        Error_Panel.textContent = "Password not match"
        event.preventDefault()
        return
    }a

    alert("Registration complete")
})