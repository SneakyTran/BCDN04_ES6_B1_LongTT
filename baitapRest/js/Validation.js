export default class Validation {
    checkEmpty(input) {
        if (input.trim() === "") {
            return true;
        }
        return false;
    }

    isValidNumber(input) {
        let regex = /^(\d{1,2}(\.\d{1,2})?)$/;
        if (
            input.trim().match(regex) &&
            Number(input) >= 0 &&
            Number(input) <= 10
        ) {
            return true;
        } else {
            return false;
        }
    }
}
