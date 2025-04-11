export const Convert1252HexToDecimal = (strInput) => {
  if (strInput === undefined) return "";
  if (strInput === null) return "";
  if (strInput === "") return "";
  const hex = strInput.toString();
  let str = "";
  for (let i = 0; i < hex.length; i += 2) {
    str += String.fromCharCode(
      persian1252CharToUnicode(
        parseInt(hex.substr(i, 2), 16),
        PersianParams.decimalUnicode
      )
    );
  }
  return str;
};
const PersianParams = {
  hexUnicode: 0,
  decimalUnicode: 1,
};
const persian1252CharToUnicode = (asciiCode, unicodeStringType) => {
  switch (asciiCode) {
    case 48:
      if (unicodeStringType === PersianParams.hexUnicode) return "\u06F0"; // 0
      else if (unicodeStringType === PersianParams.decimalUnicode)
        return "1776";

    case 49:
      if (unicodeStringType === PersianParams.hexUnicode) return "\u06F1"; // 1
      else if (unicodeStringType === PersianParams.decimalUnicode)
        return "1777";

    case 50:
      if (unicodeStringType === PersianParams.hexUnicode) return "\u06F2"; // 2
      else if (unicodeStringType === PersianParams.decimalUnicode)
        return "1778";

    case 51:
      if (unicodeStringType === PersianParams.hexUnicode) return "\u06F3"; // 3
      else if (unicodeStringType === PersianParams.decimalUnicode)
        return "1779";

    case 52:
      if (unicodeStringType === PersianParams.hexUnicode) return "\u06F4"; // 4
      else if (unicodeStringType === PersianParams.decimalUnicode)
        return "1780";

    case 53:
      if (unicodeStringType === PersianParams.hexUnicode) return "\u06F5"; // 5
      else if (unicodeStringType === PersianParams.decimalUnicode)
        return "1781";

    case 54:
      if (unicodeStringType === PersianParams.hexUnicode) return "\u06F6"; // 6
      else if (unicodeStringType === PersianParams.decimalUnicode)
        return "1782";

    case 55:
      if (unicodeStringType === PersianParams.hexUnicode) return "\u06F7"; // 7
      else if (unicodeStringType === PersianParams.decimalUnicode)
        return "1783";

    case 56:
      if (unicodeStringType === PersianParams.hexUnicode) return "\u06F8"; // 8
      else if (unicodeStringType === PersianParams.decimalUnicode)
        return "1784";

    case 57:
      if (unicodeStringType === PersianParams.hexUnicode) return "\u06F9"; // 9
      else if (unicodeStringType === PersianParams.decimalUnicode)
        return "1785";

    case 129:
      if (unicodeStringType === PersianParams.hexUnicode) return "\u067E"; // pe
      else if (unicodeStringType === PersianParams.decimalUnicode)
        return "1662";

    case 141:
      if (unicodeStringType === PersianParams.hexUnicode)
        return "\u0686"; // che
      else if (unicodeStringType === PersianParams.decimalUnicode)
        return "1670";

    case 142:
    case 254: // only for behsazan
    case 381: // i don't know asscii code above 255 what means but we have !!!.
    case 698: // i don't know asscii code above 255 what means but we have !!!.
      if (unicodeStringType === PersianParams.hexUnicode)
        return "\u0698"; // zhe
      else if (unicodeStringType === PersianParams.decimalUnicode)
        return "1688";

    case 144:
      if (unicodeStringType === PersianParams.hexUnicode)
        return "\u06AF"; // gaaf
      else if (unicodeStringType === PersianParams.decimalUnicode)
        return "1711";

    case 152:
    case 223:
    case 732:
      if (unicodeStringType === PersianParams.hexUnicode)
        return "\u06A9"; // kaaf
      else if (unicodeStringType === PersianParams.decimalUnicode)
        return "1705";

    case 170:
      if (unicodeStringType === PersianParams.hexUnicode)
        return "\u06BE"; // he do cheshm.
      else if (unicodeStringType === PersianParams.decimalUnicode)
        return "1726";

    case 191:
      if (unicodeStringType === PersianParams.hexUnicode)
        return "\u061F"; // Alamat Soaal Farsi
      else if (unicodeStringType === PersianParams.decimalUnicode)
        return "1567";

    case 192:
    case 229:
      if (unicodeStringType === PersianParams.hexUnicode)
        return "\u0647"; // he tanha
      else if (unicodeStringType === PersianParams.decimalUnicode)
        return "1607";

    case 193: // it could be "\u200C"; ZWNJ - Zero Width Non-Joiner
      if (unicodeStringType === PersianParams.hexUnicode)
        return "\u0621"; // Hamza
      else if (unicodeStringType === PersianParams.decimalUnicode)
        return "1569";

    case 194:
      if (unicodeStringType === PersianParams.hexUnicode) return "\u0622"; // A
      else if (unicodeStringType === PersianParams.decimalUnicode)
        return "1570";

    case 195: // "\u0623"; Alef With Hamza Above.
    case 197: // "\u0623"; Alef With Hamza below.
    case 199:
      if (unicodeStringType === PersianParams.hexUnicode)
        return "\u0627"; // Alef
      else if (unicodeStringType === PersianParams.decimalUnicode)
        return "1575";

    case 196: // "\u0623"  Waw With Hamza Above.
    case 230:
      if (unicodeStringType === PersianParams.hexUnicode)
        return "\u0648"; // Wav
      else if (unicodeStringType === PersianParams.decimalUnicode)
        return "1608";

    case 198:
    case 236:
    case 237:
      if (unicodeStringType === PersianParams.hexUnicode) return "\u06CC"; // ye
      else if (unicodeStringType === PersianParams.decimalUnicode)
        return "1740";

    case 200:
      if (unicodeStringType === PersianParams.hexUnicode) return "\u0628"; // be
      else if (unicodeStringType === PersianParams.decimalUnicode)
        return "1576";

    case 201:
    case 202:
      if (unicodeStringType === PersianParams.hexUnicode) return "\u062A"; // te
      else if (unicodeStringType === PersianParams.decimalUnicode)
        return "1578";

    case 203:
      if (unicodeStringType === PersianParams.hexUnicode) return "\u062B"; // se
      else if (unicodeStringType === PersianParams.decimalUnicode)
        return "1579";

    case 204:
      if (unicodeStringType === PersianParams.hexUnicode)
        return "\u062C"; // jim
      else if (unicodeStringType === PersianParams.decimalUnicode)
        return "1580";

    case 205:
      if (unicodeStringType === PersianParams.hexUnicode) return "\u062D"; // he
      else if (unicodeStringType === PersianParams.decimalUnicode)
        return "1581";

    case 206:
      if (unicodeStringType === PersianParams.hexUnicode)
        return "\u062E"; // khe
      else if (unicodeStringType === PersianParams.decimalUnicode)
        return "1582";

    case 207:
      if (unicodeStringType === PersianParams.hexUnicode)
        return "\u062F"; // dal
      else if (unicodeStringType === PersianParams.decimalUnicode)
        return "1583";

    case 208:
      if (unicodeStringType === PersianParams.hexUnicode)
        return "\u0630"; // zal
      else if (unicodeStringType === PersianParams.decimalUnicode)
        return "1584";

    case 209:
      if (unicodeStringType === PersianParams.hexUnicode) return "\u0631"; // re
      else if (unicodeStringType === PersianParams.decimalUnicode)
        return "1585";

    case 210:
      if (unicodeStringType === PersianParams.hexUnicode) return "\u0632"; // ze
      else if (unicodeStringType === PersianParams.decimalUnicode)
        return "1586";

    case 211:
      if (unicodeStringType === PersianParams.hexUnicode)
        return "\u0633"; // sin
      else if (unicodeStringType === PersianParams.decimalUnicode)
        return "1587";

    case 212:
      if (unicodeStringType === PersianParams.hexUnicode)
        return "\u0634"; // shin
      else if (unicodeStringType === PersianParams.decimalUnicode)
        return "1588";

    case 213:
      if (unicodeStringType === PersianParams.hexUnicode)
        return "\u0635"; // saad
      else if (unicodeStringType === PersianParams.decimalUnicode)
        return "1589";

    case 214:
      if (unicodeStringType === PersianParams.hexUnicode)
        return "\u0636"; // zaad
      else if (unicodeStringType === PersianParams.decimalUnicode)
        return "1590";

    case 216:
      if (unicodeStringType === PersianParams.hexUnicode)
        return "\u0637"; // tein
      else if (unicodeStringType === PersianParams.decimalUnicode)
        return "1591";

    case 217:
      if (unicodeStringType === PersianParams.hexUnicode)
        return "\u0638"; // zein
      else if (unicodeStringType === PersianParams.decimalUnicode)
        return "1592";

    case 218:
      if (unicodeStringType === PersianParams.hexUnicode)
        return "\u0639"; // eyn
      else if (unicodeStringType === PersianParams.decimalUnicode)
        return "1593";

    case 219:
      if (unicodeStringType === PersianParams.hexUnicode)
        return "\u063A"; // gheyn
      else if (unicodeStringType === PersianParams.decimalUnicode)
        return "1594";

    case 220:
      if (unicodeStringType === PersianParams.hexUnicode)
        return "\u0640"; // Tatweel : means -> toolani shodan, keshidan harf
      else if (unicodeStringType === PersianParams.decimalUnicode)
        return "1600";

    case 221:
      if (unicodeStringType === PersianParams.hexUnicode) return "\u0641"; // fe
      else if (unicodeStringType === PersianParams.decimalUnicode)
        return "1601";

    case 222:
      if (unicodeStringType === PersianParams.hexUnicode)
        return "\u0642"; // ghaaf
      else if (unicodeStringType === PersianParams.decimalUnicode)
        return "1602";

    case 225:
      if (unicodeStringType === PersianParams.hexUnicode)
        return "\u0644"; // laam
      else if (unicodeStringType === PersianParams.decimalUnicode)
        return "1604";

    case 227:
      if (unicodeStringType === PersianParams.hexUnicode)
        return "\u0645"; // mim
      else if (unicodeStringType === PersianParams.decimalUnicode)
        return "1605";

    case 228:
      if (unicodeStringType === PersianParams.hexUnicode)
        return "\u0646"; // noon
      else if (unicodeStringType === PersianParams.decimalUnicode)
        return "1606";

    case 248:
      if (unicodeStringType === PersianParams.hexUnicode)
        return "\u0651"; // tashdid
      else if (unicodeStringType === PersianParams.decimalUnicode)
        return "1671";

    default:
      if (unicodeStringType === PersianParams.hexUnicode)
        return parseInt(asciiCode).toString();
      else if (unicodeStringType === PersianParams.decimalUnicode)
        return parseInt(asciiCode).toString();
  }
  return "32";
};

export const persianToArabic = (str) => {
  const diff = {
    ک: "ك",
    // د: "دِ",
    // ب: "بِ",
    // ز: "زِ",
    // ذ: "ذِ",
    // ش: "شِ",
    // س: "سِ",
    ی: "ي",
    // "۱": "١",
    // "۲": "٢",
    // "۳": "٣",
    // "۴": "٤",
    // "۵": "٥",
    // "۶": "٦",
    // "۷": "٧",
    // "۸": "٨",
    // "۹": "٩",
    // "۰": "٠",
  };
  Object.keys(diff).forEach(function (key) {
    str = str.replaceAll(key, diff[key]);
  });
  return str;
};
