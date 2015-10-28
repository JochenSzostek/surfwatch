if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
/**
 * Created by jochen on 28/10/15.
 */
var angular2_1 = require("angular2/angular2");
var TodoInput = (function () {
    function TodoInput() {
    }
    TodoInput.prototype.onClick = function (event, value) {
        console.log("clicked:" + value, event);
    };
    TodoInput = __decorate([
        angular2_1.Component({
            selector: 'todo-input'
        }),
        angular2_1.View({
            template: "\n        <input type=\"text\" #log-me>\n        <button (click)=\"onClick($event, logMe.value)\">Log Input</button>\n    "
        })
    ], TodoInput);
    return TodoInput;
})();
exports.TodoInput = TodoInput;