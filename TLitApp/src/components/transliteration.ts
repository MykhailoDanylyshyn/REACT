const transliteration: Record<string, string> = {
    а: "a", б: "b", в: "v", г: "h", ґ: "g",
    д: "d", е: "e", ж: "zh", з: "z",
    и: "y", і: "i", к: "k", л: "l",
    м: "m", н: "n", о: "o", п: "p",
    р: "r", с: "s", т: "t", у: "u", ф: "f",
    х: "kh", ц: "ts", ч: "ch", ш: "sh",
    щ: "shch", ь: "", "'": "", "’": ""
};

export function transliterate(text: string): string {
    return text.split("").map((char, index) => {
        const lower = char.toLowerCase();

        const isWordStart =
            index === 0 || /[\s.,!?;:(){}"“”\-—]/u.test(text[index - 1]);

        const special: Record<string, [string, string]> = {
            є: ["ye", "ie"],
            ї: ["yi", "i"],
            й: ["y", "i"],
            ю: ["yu", "iu"],
            я: ["ya", "ia"]
        };

        let result = special[lower]
            ? special[lower][isWordStart ? 0 : 1]
            : transliteration[lower];

        if (result === undefined) return char;

        if (char === char.toUpperCase()) {
            result = result.charAt(0).toUpperCase() + result.slice(1);
        }

        return result;
    }).join("");
}