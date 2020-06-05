"use strict";
exports.__esModule = true;
function removeDuplicateFragments(document) {
    var usedName = new Set();
    document.definitions = document.definitions.filter(function (def) {
        if (def.kind !== "FragmentDefinition") {
            return true;
        }
        var name = def.name.value;
        if (usedName.has(name)) {
            return false;
        }
        else {
            usedName.add(name);
            return true;
        }
    });
}
exports.removeDuplicateFragments = removeDuplicateFragments;
function removeSourceLocations(document) {
    if (document.loc) {
        delete document.loc;
    }
    for (var _i = 0, _a = Object.keys(document); _i < _a.length; _i++) {
        var key = _a[_i];
        var value = document[key];
        if (Array.isArray(value)) {
            value.forEach(function (val) { return removeSourceLocations(val); });
        }
        else if (value && typeof value === "object") {
            removeSourceLocations(value);
        }
    }
}
exports.removeSourceLocations = removeSourceLocations;
function removeUnusedFragments(document) {
    var usedFragments = new Set();
    function findFragmentSpreads(doc) {
        function traverse(selectionSet) {
            selectionSet.selections.forEach(function (selection) {
                if (selection.kind === "FragmentSpread") {
                    usedFragments.add(selection.name.value);
                }
                else if (selection.selectionSet) {
                    traverse(selection.selectionSet);
                }
            });
        }
        doc.definitions.forEach(function (def) {
            if (def.kind === "OperationDefinition" ||
                def.kind === "FragmentDefinition") {
                traverse(def.selectionSet);
            }
        });
    }
    findFragmentSpreads(document);
    var defCount = document.definitions.length;
    document.definitions = document.definitions.filter(function (def) {
        return def.kind !== "FragmentDefinition" || usedFragments.has(def.name.value);
    });
    if (defCount !== document.definitions.length) {
        // Some references may have been from fragments that were just recently unused.
        // If we removed any fragments, run the function again until we are no longer
        // removing any fragments.
        removeUnusedFragments(document);
    }
}
exports.removeUnusedFragments = removeUnusedFragments;
//# sourceMappingURL=transforms.js.map