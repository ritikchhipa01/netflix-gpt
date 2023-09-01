

export const Validate = (email,password) =>{

    let isEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    let isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isEmail) return "Email is not valid";
    if(!isPassword) return "Password is not valid";

    return null;
}