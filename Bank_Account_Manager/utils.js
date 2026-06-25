function validateName(name) {
   if (!name) return false;
   return true;
};


function validateBalance(balance) {
    if (!Number.isInteger(balance) || balance < 0) return false;
    return true;
};


function validateTypeAccount(type) {
    let types = ["Regular", "Premium", "Student"];
    if (!types.includes(type.ToLowerCase())) return false;
    return true;
};