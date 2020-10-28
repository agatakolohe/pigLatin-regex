Describe: `pigLatin()`
Test: "It will ignore non-alphabetical characters."
Expect:
Test: "It will recognize ["a", "e", "i", "o", "u"] as vowels regardles of case."
Code: /[aeiou]/gi.test(string);
Expect(pigLatin("a").toEqual(true));
Test: "It will add 'way' to the end of words that begin with a vowel."
Expect(pigLatin("a").toEqual("away"));
Test: "It will move all consecutive consonants from beginning of sentence to end, and add 'ay'."
Expect(pigLatin("cat").toEqual("atcay"));
Test: "It will move 'u', along with 'q' if 'qu' is included in first consonants, and add 'ay'."
Expect(pigLatin("queen").toEqual("eenquay"));
//add test for multiple words and white space
Test: "It will ignore whitespace in a multi-word sentence"

