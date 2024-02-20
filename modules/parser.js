import { PRODUCTS } from "./mappings.js";

function matchName(name, abbr) {
    let i = name.length - 1;
    let j = abbr.length - 1;

    while (i >= 0 && j >= 0) {
        if (name.charAt(i) === abbr.charAt(j)) {
            j--;
        }
        i--;
    }

    return j < 0;
}

export function findByShortName(name) {
	let matched = null;

	for (const i in PRODUCTS) {
		const p = PRODUCTS[i];
		if (matchName(p["name"], name) && (!matched || p["name"].length < matched["name"].length)) {
		    matched = p;
		}
	}

	return matched;
}

export function parseLine(line) {
	const pattern = /(?:.*\]\s*)?([^，、\s]*)(?:[、，\s]*)/;
	return line.split('、').map((item) => item.match(pattern)[1]);
}
