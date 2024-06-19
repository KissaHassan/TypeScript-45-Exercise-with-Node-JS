function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large "; }
    if (printMessage === void 0) { printMessage = "I love typescript"; }
    console.log("Creating a ".concat(size, " shirt with ").concat(printMessage, " prints on itt!"));
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", " I love JavaScript");
