let display = document.getElementById("show");
let allBtns = document.querySelectorAll("input[type='button']");

allBtns.forEach(btn => {
    btn.addEventListener("click", () => {

        let val = btn.value;

        //clear
        if (btn.id === "d") {
            display.value = "";
        }

        // delete last
        else if (btn.id === "r") {
            display.value = display.value.slice(0, -1);
        }

        //  Equal
        else if (btn.id === "=") {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
            }
        }

        // Operators
        else if (["+","-","*","/"].includes(val)) {
            let last = display.value.slice(-1);

            if ("+-*/".includes(last)) return; // double operator block

            display.value += val;
        }

        // Numbers + dot
        else {
            display.value += val;
        }

    });
});