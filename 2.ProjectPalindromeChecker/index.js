const input = document.getElementById("input")

function reverseString(str) {
    return str.split("").reverse().join(""); 
}

function check() {
    const value = input.value.toLowerCase();
    const reverse = reverseString(value)

    if (value === reverse) {
        alert("P A L I N D R O M E")
    } else {
        alert("Not today!")
    }

    // Clear the value from the input field
    input.value = ""
}
