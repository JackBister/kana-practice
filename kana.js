var romaji = [
	"a", "i", "u", "e", "o",
	"ka", "ki", "ku", "ke", "ko",
	"sa", "shi", "su", "se", "so",
	"ta", "chi", "tsu", "te", "to",
	"na", "ni", "nu", "ne", "no",
	"ha", "hi", "hu", "he", "ho",
	"ma", "mi", "mu", "me", "mo",
	"ya", "yu", "yo",
	"ra", "ri", "ru", "re", "ro",
	"wa", "wo",
	"n",
];

var hiragana = {
	a: 'あ', i: 'い', u: 'う', e: 'え', o: 'お',
	ka: 'か', ki: 'き', ku: 'く', ke: 'け', ko: 'こ',
	sa: 'さ', shi: 'し', su: 'す', se: 'せ', so: 'そ',
	ta: 'た', chi: 'ち', tsu: 'つ', te: 'て', to: 'と',
	na: 'な', ni: 'に', nu: 'ぬ', ne: 'ね', no: 'の',
	ha: 'は', hi: 'ひ', hu: 'ふ', he: 'へ', ho: 'ほ',
	ma: 'ま', mi: 'み', mu: 'む', me: 'め', mo: 'も',
	ya: 'や', yu: 'ゆ', yo: 'よ',
	ra: 'ら', ri: 'り', ru: 'る', re: 'れ', ro: 'ろ',
	wa: 'わ', wo: 'を',
	n: 'ん',
};

var katakana = {
	a: 'ア', i: 'イ', u: 'ウ', e: 'エ', o: 'オ',
	ka: 'カ', ki: 'キ', ku: 'ク', ke: 'ケ', ko: 'コ',
	sa: 'サ', shi: 'シ', su: 'ス', se: 'セ', so: 'ソ',
	ta: 'タ', chi: 'チ', tsu: 'ツ', te: 'テ', to: 'ト',
	na: 'ナ', ni: 'ニ', nu: 'ヌ', ne: 'ネ', no: 'ノ',
	ha: 'ハ', hi: 'ヒ', hu: 'フ', he: 'ヘ', ho: 'ホ',
	ma: 'マ', mi: 'ミ', mu: 'ム', me: 'メ', mo: 'モ',
	ya: 'ヤ', yu: 'ユ', yo: 'ヨ',
	ra: 'ラ', ri: 'リ', ru: 'ル', re: 'レ', ro: 'ロ',
	wa: 'ワ', wo: 'ヲ',
	n: 'ン',
};

function uncheck() {
	if (!document.getElementById("hiragana").checked && !document.getElementById("katakana").checked) {
		document.getElementById("hiragana").checked = true;
	}
}

function next() {
	document.getElementById("helpText").innerHTML = "Enter the romaji for the symbol above:";
	var choice = Math.floor((Math.random()*45)+1);
	if (document.getElementById("hiragana").checked && document.getElementById("katakana").checked) {
		if (Math.floor((Math.random()*2)+1) == 1) {
			document.getElementById("kana").innerHTML = hiragana[romaji[choice]];
		} else {
			document.getElementById("kana").innerHTML = katakana[romaji[choice]];
		}
	} else if (document.getElementById("hiragana").checked) {
		document.getElementById("kana").innerHTML = hiragana[romaji[choice]];
	} else {
		document.getElementById("kana").innerHTML = katakana[romaji[choice]];
	}
} 

function verify() {
	var kana = document.getElementById("kana").innerHTML;
	var input = document.getElementById("romaji").value;
	document.getElementById("romaji").value = "";
	if (kana == hiragana[input] || kana == katakana[input]) {
		next();
	} else {
		document.getElementById("helpText").innerHTML = "Wrong. Try again:"
	}
	document.getElementById("romaji").focus();
}