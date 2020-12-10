var onMounted = function (el, binding) {
    if (binding.value) {
        el.focus();
    }
    else {
        el.blur();
    }
};
var onUpdated = function (el, binding) {
    if (binding.modifiers.lazy) {
        if (Boolean(binding.value) === Boolean(binding.oldValue)) {
            return;
        }
    }
    if (binding.value)
        el.focus();
    else
        el.blur();
};
var direcctive = {
    mounted: onMounted,
    updated: onUpdated
};

export default direcctive;
export { direcctive as VueFocusDirective };
