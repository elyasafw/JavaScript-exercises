export function validateName(name) {
   if (!name) return false;
   return true;
};


export function validateAmount(balance) {
    if (!Number.isInteger(balance) || balance < 0) return false;
    return true;
};


export function validateTypeAccount(type) {
    let types = ["regular", "premium", "student"];
    if (!types.includes(type.toLowerCase())) return false;
    return true;
};


export function counterActivates() {
    let totalActivates = Customers.filter(c => c.status)
    return totalActivates
};