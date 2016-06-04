var Startup = (function () {
    function Startup() {
    }
    Startup.main = function () {
        console.log('Hello World');
        return 0;
    };
    return Startup;
}());
Startup.main();
function add(x, y) {
    return x + y;
}
var myAdd = function (x, y) { return x + y; };
myAdd(3, 4);
var yourAdd = function (x, y) { return x + y; };
function nameBuild(firstname, lastname) {
    return firstname + " " + lastname;
}
nameBuild("Steven", null);
//# sourceMappingURL=first.js.map