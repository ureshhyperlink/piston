export const validEmail = (text) =>{
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(text);
}
export const validFirsName = (text) =>{
    var re = /([A-z])+(.?[a-zA-Z])*('?[a-zA-Z])*/;
    return re.test(text)
}
export const validName = (text) =>{
    var re = /^[^\s]+(\s+[^\s]+)*$/;
    return re.test(text)
}
export const validNumber = (string) =>{
    var re = /^\d+$/;
    return re.test(string)
}
export const validAmount = (string) =>{
    var re = /^\d+(\.\d{1,})?$/
    return re.test(string)
}