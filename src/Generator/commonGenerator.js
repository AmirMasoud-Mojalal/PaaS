const {
    isPathExists,
    createFile,
} = require('./util');

const commonGenerator = (ConfigObject) => {
    let injectedContent = ``

    const commonPath = ConfigObject.getCommonPath();
    const utilPath = commonPath + '/util';

    injectedContent = `package com.behsazan.projects.mutualUnderstanding.common;

    import com.behsazan.projects.mutualUnderstanding.common.util.CommonUtil;
    import java.util.Arrays;
    import java.util.List;

    public class Encoding {
    
        public static final int HEX_UNICODE = 0;
        public static final int DECIMAL_UNICODE = 1;
    
        private static Integer[] cp1256 = {1662, 1670, 1705, 1580, 1581, 1582, 1607, 1593, 1594, 1601, 1602, 1579, 1589, 1590, 1711, 1705, 1605, 1606, 1578, 1575, 1604, 1576, 1587, 1588, 1608, 1574, 1583, 1584, 1585, 1586, 1591, 1592, 1563, 1548, 1613, 1612, 1611, 1600, 1570, 1617, 1616, 1615, 1614, 1567, 1569, 1571, 1573, 1572, 1688, 1610, 1577, 1740};
        private static Integer[] cp1252 = {129, 141, 152, 204, 205, 206, 229, 218, 219, 221, 222, 203, 213, 214, 144, 223, 227, 228, 202, 199, 225, 200, 211, 212, 230, 198, 207, 208, 209, 210, 216, 217, 186, 161, 242, 241, 240, 220, 194, 248, 246, 245, 243, 191, 193, 195, 197, 196, 142, 237, 201, 246};
        private static List<Integer> cp1252List = Arrays.asList(cp1252);
        private static List<Integer> cp1256List = Arrays.asList(cp1256);

        public String getDB2UnicodeString(String str) {
            return convertToDecimalUnicode(repairString(repairType4DBString(sanitize(str))));
        }
    
        private static String sanitize(String value) {
            return !isEmpty(value) ? value.replace((char) 1610, (char) 1740).replace((char) 1603, (char) 1705) : value;
        }
    
        public String repairType4DBString(String str) {
            String baseRepaired = "";
            try {
                if (str != null && !str.isEmpty())
                    baseRepaired = repairString1256(str);
            } catch (Exception e) {
                e.printStackTrace();
            }
            return convertDecimalUnicodeToArabicAscii1252(baseRepaired);
        }
    
        public static String convertDecimalUnicodeToArabicAscii1252(String unicodeStr) {
            StringBuilder returnValue = new StringBuilder();
            if (CommonUtil.isEmpty(unicodeStr)) {//check null value
                return "";
            }
            unicodeStr = unicodeStr.trim();
    
            for (int i = 0; i < unicodeStr.length(); i++) {
                returnValue.append((char) persianUnicodeCharTo1252(unicodeStr.charAt(i)));
            }
    
            return returnValue.toString();
        }
    
        private static int persianUnicodeCharTo1252(int decimalUnicodeCharValue) {
            switch (decimalUnicodeCharValue) {
                case 1776:
                    return 48; // 0
    
                case 1777:
                    return 49; // 1
    
                case 1778:
                    return 50; // 2
    
                case 1779:
                    return 51; // 3
    
                case 1780:
                    return 52; // 4
    
                case 1781:
                    return 53; // 5
    
                case 1782:
                    return 54; // 6
    
                case 1783:
                    return 55; // 7
    
                case 1784:
                    return 56; // 8
    
                case 1785:
                    return 57; // 9
    
                case 1662:
                    return 129; // pe
    
                case 1670:
                    return 141; // che
                //todo: fix zhe , so it does not need clientRepair
                case 1688:
                    return 142; // zhe
    
                case 8207:
                    return 142; // zhe
    
                case 1711:
                    return 144; // gaaf
    
                case 1705:
                    return 223; // kaaf in some fonts(Arabic)has persian 152, but isn't good
                // for internal database searching specially in DB2 1252.
                case 1603:
                    return 223; // kaaf in some fonts(Arabic)has persian 152, but isn't good
                // for internal database searching specially in DB2 1252.
                case 152:
                    return 223; // kaaf in some fonts(Arabic)has persian 152, but isn't good
                // for internal database searching specially in DB2 1252.
    
                case 38:
                    return 237; // kaaf in some fonts(Arabic)has persian 152, but isn't good
                // for internal database searching specially in DB2 1252.
    
                case 1726:
                    return 170; // he do cheshm.
    
                case 1567:
                    return 191; // Alamat Soaal Farsi
    
                case 1607:
                    return 229; // he tanha, 192 Ascii code in some fonts has the same meaning.
    
                case 1569:     // it could be "\u200C; ZWNJ - Zero Width Non-Joiner
                    return 193; // Hamza
    
                case 26:     // it could be "\u200C; ZWNJ - Zero Width Non-Joiner
                    return 198; // Hamza ba payr ye   :  ئ
    
                case 1608:
                    return 230;  // Wav
                // "\u0623"  Waw With Hamza Above. ascii code 196.
    
                case 1740:
                    return 237; // ye
                // ascii code 236.
                // ascii code 198.
    
                case 1610:
                    return 237; // ye
                // ascii code 236.
                // ascii code 198.
    
                case 1576:
                    return 200; // be
    
                case 1578:
                    return 202; // te
                // ascii code 201
    
                case 1579:
                    return 203; // se
    
                case 1580:
                    return 204; // jim
    
                case 1581:
                    return 205; // he
    
                case 1582:
                    return 206; // khe
    
                case 1583:
                    return 207; // dal
    
                case 1584:
                    return 208; // zal
    
                case 1585:
                    return 209; // re
    
                case 1586:
                    return 210; // ze
    
                case 1587:
                    return 211; // sin
    
                case 1588:
                    return 212; // shin
    
                case 1589:
                    return 213; // saad
    
                case 1590:
                    return 214; // zaad
    
                case 1591:
                    return 216; // tein
    
                case 1592:
                    return 217; // zein
    
                case 1593:
                    return 218; // eyn
    
                case 1594:
                    return 219; // gheyn
    
                case 1600:
                    return 220; // Tatweel : means -> toolani shodan, keshidan harf
    
                case 1601:
                    return 221; // fe
    
                case 1602:
                    return 222; // ghaaf
    
                case 1604:
                    return 225; // laam
    
                case 1605:
                    return 227; // mim
    
                case 1606:
                    return 228; // noon
    
                case 1671:
                    return 248; // tashdid
    
                case 1570:
                    return 194; // A
    
                case 1571:
                    return 195; // Alef Hamze
    
                case 1572:
                    return 196; // wav ba Hamze (Hamze ba Paye wav)
    
                case 1573:
                    return 197; // Alef With Hamza Below
    
                case 1574:
                    return 198; // yeh hamzeh
    
                case 1575:
                    return 199; // Alef
    
                case 1577:
                    return 201; // te gerd
    
                default:
                    return decimalUnicodeCharValue; //the same ascii code.
            }
        }
    
        private String repairString1256(String value) {
            // for ye and kaf character
            return value.replace((char) 1740, (char) 1610).replace((char) 1705, (char) 1603);
        }
    
        public static boolean isEmpty(String str) {
            return str == null || str.trim().isEmpty();
        }
        
        public static String repairString(String base) {
            if (base == null) return "";
    
            int charAt;
            StringBuilder stringBuffer = new StringBuilder(base);
            for (int i = 0; i < stringBuffer.length(); i++) {
                charAt = stringBuffer.charAt(i);
                if (charAt == 732) {      //ke
                    stringBuffer.replace(i, i + 1, "" + (char) 152);
                }
                if (charAt == 26) {      //ke
                    stringBuffer.replace(i, i + 1, "" + (char) 152);
                }
    
                if (charAt == 254) {      //zhe
                    stringBuffer.replace(i, i + 1, "" + (char) 142);
                }
    
                if (charAt == 381) {      //zhe
                    stringBuffer.replace(i, i + 1, "" + (char) 142);
                }
    
                if (charAt == 698) {      //zhe
                    stringBuffer.replace(i, i + 1, "" + (char) 142);
                }
                if (charAt == 1574) {      //zhe
                    stringBuffer.replace(i, i + 1, "" + (char) 198);
                }
    
            }
            return stringBuffer.toString();
        }
        
        public static String convertToDecimalUnicode(String asciiStr1252) {
    
            StringBuilder returnValue = new StringBuilder();
            if (CommonUtil.isEmpty(asciiStr1252)) {
                return "";
            }
            asciiStr1252 = asciiStr1252.trim();
    
            for (int i = 0; i < asciiStr1252.length(); i++) {
                char tmpChar = (char) Integer.parseInt(persian1252CharToUnicode(asciiStr1252.charAt(i), DECIMAL_UNICODE));
                returnValue.append(tmpChar);
            }
    
            return returnValue.toString();
        }
    
    
        public static String persian1252CharToUnicode(int asciiCode, int unicodeStringType) {
            switch (asciiCode) {
                case 48:
                    if (unicodeStringType == HEX_UNICODE)
                        return "\u06F0"; // 0
                    else if (unicodeStringType == DECIMAL_UNICODE)
                        return "1776";
    
                case 49:
                    if (unicodeStringType == HEX_UNICODE)
                        return "\u06F1"; // 1
                    else if (unicodeStringType == DECIMAL_UNICODE)
                        return "1777";
    
                case 50:
                    if (unicodeStringType == HEX_UNICODE)
                        return "\u06F2"; // 2
                    else if (unicodeStringType == DECIMAL_UNICODE)
                        return "1778";
    
                case 51:
                    if (unicodeStringType == HEX_UNICODE)
                        return "\u06F3"; // 3
                    else if (unicodeStringType == DECIMAL_UNICODE)
                        return "1779";
    
                case 52:
                    if (unicodeStringType == HEX_UNICODE)
                        return "\u06F4"; // 4
                    else if (unicodeStringType == DECIMAL_UNICODE)
                        return "1780";
    
                case 53:
                    if (unicodeStringType == HEX_UNICODE)
                        return "\u06F5"; // 5
                    else if (unicodeStringType == DECIMAL_UNICODE)
                        return "1781";
    
                case 54:
                    if (unicodeStringType == HEX_UNICODE)
                        return "\u06F6"; // 6
                    else if (unicodeStringType == DECIMAL_UNICODE)
                        return "1782";
    
                case 55:
                    if (unicodeStringType == HEX_UNICODE)
                        return "\u06F7"; // 7
                    else if (unicodeStringType == DECIMAL_UNICODE)
                        return "1783";
    
                case 56:
                    if (unicodeStringType == HEX_UNICODE)
                        return "\u06F8"; // 8
                    else if (unicodeStringType == DECIMAL_UNICODE)
                        return "1784";
    
                case 57:
                    if (unicodeStringType == HEX_UNICODE)
                        return "\u06F9"; // 9
                    else if (unicodeStringType == DECIMAL_UNICODE)
                        return "1785";
    
                case 129:
                    if (unicodeStringType == HEX_UNICODE)
                        return "\u067E"; // pe
                    else if (unicodeStringType == DECIMAL_UNICODE)
                        return "1662";
    
                case 141:
                    if (unicodeStringType == HEX_UNICODE)
                        return "\u0686"; // che
                    else if (unicodeStringType == DECIMAL_UNICODE)
                        return "1670";
    
                case 142:
                case 254:  // olnly for behsazan
                case 381:  // i don't know asscii code above 255 what means but we have !!!.
                case 698:  // i don't know asscii code above 255 what means but we have !!!.
                    if (unicodeStringType == HEX_UNICODE)
                        return "\u0698"; // zhe
                    else if (unicodeStringType == DECIMAL_UNICODE)
                        return "1688";
    
                case 144:
                    if (unicodeStringType == HEX_UNICODE)
                        return "\u06AF"; // gaaf
                    else if (unicodeStringType == DECIMAL_UNICODE)
                        return "1711";
    
                case 152:
                case 223:
                case 732:
                    if (unicodeStringType == HEX_UNICODE)
                        return "\u06A9"; // kaaf
                    else if (unicodeStringType == DECIMAL_UNICODE)
                        return "1705";
    
                case 170:
                    if (unicodeStringType == HEX_UNICODE)
                        return "\u06BE"; // he do cheshm.
                    else if (unicodeStringType == DECIMAL_UNICODE)
                        return "1726";
    
                case 191:
                    if (unicodeStringType == HEX_UNICODE)
                        return "\u061F"; // Alamat Soaal Farsi
                    else if (unicodeStringType == DECIMAL_UNICODE)
                        return "1567";
    
                case 229:
                    if (unicodeStringType == HEX_UNICODE)
                        return "\u0647"; // he tanha
                    else if (unicodeStringType == DECIMAL_UNICODE)
                        return "1607";
    
                case 193:           // it could be "\u200C"; ZWNJ - Zero Width Non-Joiner
                    if (unicodeStringType == HEX_UNICODE)
                        return "\u0621"; // Hamza
                    else if (unicodeStringType == DECIMAL_UNICODE)
                        return "1569";
    
                case 194:
                    if (unicodeStringType == HEX_UNICODE)
                        return "\u0622"; // A
                    else if (unicodeStringType == DECIMAL_UNICODE)
                        return "1570";
    
                case 195:              // "\u0623"; Alef With Hamza Above.
                case 197:           // "\u0623"; Alef With Hamza below.
                case 199:
                    if (unicodeStringType == HEX_UNICODE)
                        return "\u0627"; // Alef
                    else if (unicodeStringType == DECIMAL_UNICODE)
                        return "1575";
    
                case 196:           // "\u0623"  Waw With Hamza Above.
                case 230:
                    if (unicodeStringType == HEX_UNICODE)
                        return "\u0648"; // Wav
                    else if (unicodeStringType == DECIMAL_UNICODE)
                        return "1608";
    
                case 198:
                    if (unicodeStringType == HEX_UNICODE)
                        return "\u0626"; // ئ
                    else if (unicodeStringType == DECIMAL_UNICODE)
                        return "1574";
                case 236:
                case 237:
                    if (unicodeStringType == HEX_UNICODE)
                        return "\u06CC"; // ye
                    else if (unicodeStringType == DECIMAL_UNICODE)
                        return "1740";
    
                case 200:
                    if (unicodeStringType == HEX_UNICODE)
                        return "\u0628"; // be
                    else if (unicodeStringType == DECIMAL_UNICODE)
                        return "1576";
    
                case 201:
                    if (unicodeStringType == HEX_UNICODE)
                        return "\u0629"; // te gerd
                    else if (unicodeStringType == DECIMAL_UNICODE)
                        return "1577";
                case 202:
                    if (unicodeStringType == HEX_UNICODE)
                        return "\u062A"; // te
                    else if (unicodeStringType == DECIMAL_UNICODE)
                        return "1578";
    
                case 203:
                    if (unicodeStringType == HEX_UNICODE)
                        return "\u062B"; // se
                    else if (unicodeStringType == DECIMAL_UNICODE)
                        return "1579";
    
                case 204:
                    if (unicodeStringType == HEX_UNICODE)
                        return "\u062C"; // jim
                    else if (unicodeStringType == DECIMAL_UNICODE)
                        return "1580";
    
                case 205:
                    if (unicodeStringType == HEX_UNICODE)
                        return "\u062D"; // he
                    else if (unicodeStringType == DECIMAL_UNICODE)
                        return "1581";
    
                case 206:
                    if (unicodeStringType == HEX_UNICODE)
                        return "\u062E"; // khe
                    else if (unicodeStringType == DECIMAL_UNICODE)
                        return "1582";
    
                case 207:
                    if (unicodeStringType == HEX_UNICODE)
                        return "\u062F"; // dal
                    else if (unicodeStringType == DECIMAL_UNICODE)
                        return "1583";
    
                case 208:
                    if (unicodeStringType == HEX_UNICODE)
                        return "\u0630"; // zal
                    else if (unicodeStringType == DECIMAL_UNICODE)
                        return "1584";
    
                case 209:
                    if (unicodeStringType == HEX_UNICODE)
                        return "\u0631"; // re
                    else if (unicodeStringType == DECIMAL_UNICODE)
                        return "1585";
    
                case 210:
                    if (unicodeStringType == HEX_UNICODE)
                        return "\u0632"; // ze
                    else if (unicodeStringType == DECIMAL_UNICODE)
                        return "1586";
    
                case 211:
                    if (unicodeStringType == HEX_UNICODE)
                        return "\u0633"; // sin
                    else if (unicodeStringType == DECIMAL_UNICODE)
                        return "1587";
    
                case 212:
                    if (unicodeStringType == HEX_UNICODE)
                        return "\u0634"; // shin
                    else if (unicodeStringType == DECIMAL_UNICODE)
                        return "1588";
    
                case 213:
                    if (unicodeStringType == HEX_UNICODE)
                        return "\u0635"; // saad
                    else if (unicodeStringType == DECIMAL_UNICODE)
                        return "1589";
    
                case 214:
                    if (unicodeStringType == HEX_UNICODE)
                        return "\u0636"; // zaad
                    else if (unicodeStringType == DECIMAL_UNICODE)
                        return "1590";
    
                case 216:
                    if (unicodeStringType == HEX_UNICODE)
                        return "\u0637"; // tein
                    else if (unicodeStringType == DECIMAL_UNICODE)
                        return "1591";
    
                case 217:
                    if (unicodeStringType == HEX_UNICODE)
                        return "\u0638"; // zein
                    else if (unicodeStringType == DECIMAL_UNICODE)
                        return "1592";
    
                case 218:
                    if (unicodeStringType == HEX_UNICODE)
                        return "\u0639"; // eyn
                    else if (unicodeStringType == DECIMAL_UNICODE)
                        return "1593";
    
                case 219:
                    if (unicodeStringType == HEX_UNICODE)
                        return "\u063A"; // gheyn
                    else if (unicodeStringType == DECIMAL_UNICODE)
                        return "1594";
    
                case 220:
                    if (unicodeStringType == HEX_UNICODE)
                        return "\u0640"; // Tatweel : means -> toolani shodan, keshidan harf
                    else if (unicodeStringType == DECIMAL_UNICODE)
                        return "1600";
    
                case 221:
                    if (unicodeStringType == HEX_UNICODE)
                        return "\u0641"; // fe
                    else if (unicodeStringType == DECIMAL_UNICODE)
                        return "1601";
    
                case 222:
                    if (unicodeStringType == HEX_UNICODE)
                        return "\u0642"; // ghaaf
                    else if (unicodeStringType == DECIMAL_UNICODE)
                        return "1602";
    
                case 225:
                    if (unicodeStringType == HEX_UNICODE)
                        return "\u0644"; // laam
                    else if (unicodeStringType == DECIMAL_UNICODE)
                        return "1604";
    
                case 227:
                    if (unicodeStringType == HEX_UNICODE)
                        return "\u0645"; // mim
                    else if (unicodeStringType == DECIMAL_UNICODE)
                        return "1605";
    
                case 228:
                    if (unicodeStringType == HEX_UNICODE)
                        return "\u0646"; // noon
                    else if (unicodeStringType == DECIMAL_UNICODE)
                        return "1606";
    
                case 248:
                    if (unicodeStringType == HEX_UNICODE)
                        return "\u0651"; // tashdid
                    else if (unicodeStringType == DECIMAL_UNICODE)
                        return "1671";
    
                default:
                    if (unicodeStringType == HEX_UNICODE)
                        return decimalToHexBMP(asciiCode);
                    else if (unicodeStringType == DECIMAL_UNICODE)
                        return Integer.toString(asciiCode);
            }
            return "32";
        }
    
        private static String decimalToHexBMP(int decimalNumber) {
            return convertHexStrToHexBMPStr(decimalToHex(decimalNumber).toString());
        }
    
        private static String convertHexStrToHexBMPStr(String hexStr) {
            String hexBMPStr = "\\\\u";
            if (hexStr.length() < 4)
                for (int counter = 0; counter < hexStr.length(); counter++)
                    hexBMPStr += "0";
    
            return hexBMPStr + hexStr;
        }
    
        private static StringBuffer decimalToHex(int decimalNumber) {
            int remain;
            StringBuilder output = new StringBuilder();
            while (decimalNumber > 15) {
                remain = decimalNumber % 16;
                output.append(translate(remain));
                decimalNumber = decimalNumber / 16;
            }
    
            output.append(translate(decimalNumber));
            StringBuffer sb = new StringBuffer(output.toString());
            return sb.reverse();
        }
    
        private static String translate(int digit) {
            if (digit == 10)
                return "A";
            else if (digit == 11)
                return "B";
            else if (digit == 12)
                return "C";
            else if (digit == 13)
                return "D";
            else if (digit == 14)
                return "E";
            else if (digit == 15)
                return "F";
            else return "" + digit;
        }

        public static String convert1252To1256(String value) {
            if (value == null || value.length() == 0)
                return "";

            StringBuffer stringBuffer = new StringBuffer(value);
            for (int i = 0; i < stringBuffer.length(); i++) {
                int charIndexInCp1252List = cp1252List.indexOf((int) stringBuffer.charAt(i));
                if (charIndexInCp1252List > -1)
                    stringBuffer.replace(i, i + 1 , String.valueOf((char)(int)cp1256[charIndexInCp1252List]));
            }

            return stringBuffer.toString().replace((char) 1740, (char) 1610).replace((char) 1705, (char) 1603).trim();
        }

        public static String convert1256To1252(String value) {

            if (value == null || value.length() == 0) {
                return "";
            }

            StringBuffer stringBuffer = new StringBuffer(value);

            for (int i = 0; i < stringBuffer.length(); i++) {
                int charIndexInCp1256List = cp1256List.indexOf((int) stringBuffer.charAt(i));
                if (charIndexInCp1256List > -1)
                    stringBuffer.replace(i, i + 1, String.valueOf((char) (int) cp1252[charIndexInCp1256List]));
            }

            return stringBuffer.toString().replace((char) 223, (char) 732).replace((char) 1603, (char) 732).replace((char) 1740, (char) 237).replace((char) 1610, (char) 237);
        }

    
    }`

    isPathExists(commonPath)
    createFile(
        commonPath,
        `Encoding.java`,
        injectedContent
    );

    injectedContent = `package com.behsazan.projects.mutualUnderstanding.common.util;

    public class CommonUtil {
    
        /**
         * if user did not login returns null else return a UserDTO
         * object with user information from session
         *
         * @return
         */
    /*    public static UserDTO retrieveUserDTO() {
    
            Authentication authentication =
                    SecurityContextHolder.getContext().getAuthentication();
    
            if (authentication == null || !authentication.isAuthenticated()) {
                System.out.println("Not logged in");
                return null;
            } else {
                return ((CustomUserAuthentication) authentication).getUserDTO();
            }
        }
    
        *//**
         * if mainObject is null returns secondObject else return original mainObject
         *
         * @param mainObject
         * @param secondObject
         * @return
         *//*
        public static Object nvl(Object mainObject, Object secondObject) {
            if (mainObject == null)
                return secondObject;
            else return mainObject;
        }
    
        *//**
         * if mainObject is empty (null or empty String) returns secondObject else return original mainObject
         *
         * @param mainObject
         * @param secondObject
         * @return
         *//*
        public static String nvl(String mainObject, String secondObject) {
            if (isEmpty(mainObject))
                return secondObject;
            return mainObject;
        }
    
        *//**
         * if mainObject is empty (null or empty vector) returns secondObject else return original mainObject
         *
         * @param mainObject
         * @param secondObject
         * @return
         *//*
        public static Vector nvl(Vector mainObject, Vector secondObject) {
            if (isEmpty(mainObject))
                return secondObject;
            return mainObject;
        }*/
    
        /**
         * returns true if input argument is empty(null or empty String) else return false
         *
         * @param str
         * @return
         */
        public static boolean isEmpty(String str) {
            return str == null || str.trim().equals("");
        }
    
        /**
         * returns true if input argument is empty(null or empty vector) else return false
         *
         * @param vector
         * @return
         */
     /*   public static boolean isEmpty(Vector vector) {
            return vector == null || vector.size() == 0;
        }
    
        *//**
         * returns true if input argument is empty(null or empty map) else return false
         *
         * @param map
         * @return
         *//*
        public static boolean isEmpty(Map map) {
            return map == null || map.isEmpty() || map.size() == 0;
        }
    
        *//**
         * returns true if input argument is empty(null or empty list) else return false
         *
         * @param arrayList
         * @return
         *//*
        public static boolean isEmpty(ArrayList arrayList) {
            return arrayList == null || arrayList.size() == 0;
        }
    
        *//**
         * get all properties and their value
         *
         * @param dto input object
         * @return fileds and values
         *//*
        public static String inspectObject(Object dto) {
            String out = " {\n";
            if (dto != null) {
                Field[] declaredFields = dto.getClass().getDeclaredFields();
                for (int i = 0; i < declaredFields.length; i++) {
                    Field declaredField = declaredFields[i];
                    out += "  " + declaredField.getName() + ":'";
                    try {
                        out += BeanUtils.getProperty(dto, declaredField.getName());
                    } catch (Exception e) {
                        out += "no accessor";
                    }
                    out += "'\n";
                }
            } else {
                out = "null";
            }
            return out + "}";
        }
    
    
        *//**
         * returns an attribute or parameter value that indicate by objectName argument,
         * if onbect not found, returns empty string
         *
         * @param request
         * @param objectName
         * @return
         *//*
        public static String getStringFromRequest(HttpServletRequest request, String objectName) {
            return CommonUtil.nvl((String) CommonUtil.nvl(request.getAttribute(objectName), ""), CommonUtil.nvl(request.getParameter(objectName), ""));
        }
    
        *//**
         * control length of  inout string . it is have to between 2nd and 3rd parametrs.
         * 4th & 5th parametrs minimum and maximum of legth valid itself or not.
         *
         * @param value
         * @param minLength
         * @param maxLength
         * @param containMin
         * @param containMax
         * @return
         *//*
        public static boolean isValidLength(String value, int minLength, int maxLength, boolean containMin, boolean containMax) {
            if (minLength > maxLength) {
                int tmp = minLength;
                minLength = maxLength;
                maxLength = tmp;
            }
            int length = value.length();
            boolean minResult, maxResult;
    
            if (containMin)
                minResult = length >= minLength;
            else
                minResult = length > minLength;
    
            if (containMax)
                maxResult = length <= maxLength;
            else
                maxResult = length < maxLength;
    
            return (minResult && maxResult);
        }
    
        public static boolean isValidLength(String value, int minLength, int maxLength) {
            return isValidLength(value, minLength, maxLength, true, true);
        }
    
        *//**
         * By calling this method the current time will returned as a <code>long</code> number
         * representing number of milisecounds passed from Jan 1st 1970.
         * This method is here for centralizing time in the application.
         *
         * @return long - current time
         *//*
        public static long getCurrTime() {
            return new GregorianCalendar(TimeZone.getTimeZone("GMT")).getTimeInMillis();
        }
    
    
        *//**
         * @param request HttpServletRequest
         * @return String
         * @throws Exception Exception
         *//*
        public static String getBrowserName(HttpServletRequest request) throws Exception {
            String IE = "IE";
            String NETSCAPE = "Netscape";
            String OPERA = "Opera";
            String FIREFOX = "Firefox";
            String WML = "WML";
            String UNKNOWN = "Unknown";
            String CHROME = "Chrome";
            String SAFARI = "Safari";
            String EDGE = "Edge";
    
            String accept = request.getHeader("ACCEPT");
            if (accept != null || !accept.contains("wml")) {
                String agent = request.getHeader("USER-AGENT");
                if (agent.contains("Firefox"))
                    return FIREFOX;
                if (agent.contains("Netscape"))
                    return NETSCAPE;
                if (agent.contains("Opera"))
                    return OPERA;
                if (agent.contains("Chrome"))
                    return CHROME;
                if (agent.contains("MSIE"))
                    return IE;
                if (agent.contains("Edge"))
                    return EDGE;
                if (agent.contains("Safari") && agent.contains("Version"))
                    return SAFARI;
                if (agent.contains("rv"))
                    return IE;
    //            System.out.println("agent = " + agent);
                return UNKNOWN;
            } else
                return WML;
        }
    
        *//**
         * @param request HttpServletRequest
         * @return String
         * @throws Exception Exception
         *//*
        public static String getUserAgent(HttpServletRequest request) throws Exception {
            String accept = request.getHeader("ACCEPT");
            if (accept != null || accept.indexOf("wml") == -1) {
                String agent = request.getHeader("USER-AGENT");
                return agent;
            } else
                return "";
        }
    
        public static boolean isPersianLocale(Locale locale) {
            if (locale == null)
                return false;
            return "fa".equals(locale.getLanguage());
        }
    
        public static Locale getPersianLocale() {
            return new Locale("fa", "IR");
        }
    
        public static boolean isNumeric(String str) {
            char ch;
            String numbers = "0123456789";
            for (int i = 0; i < str.length(); ++i) {
                ch = str.charAt(i);
                if (numbers.indexOf(ch) == -1) {
                    return false;
                }
            }
            return true;
        }
    
        public static ArrayList<CustomerAccountDto> removeRepeatedAccNoFromList(ArrayList<CustomerAccountDto> accountList) {
            Long key;
            ArrayList<Long> set = new ArrayList<Long>();
            for (int i = 0; i < accountList.size(); i++) {
                key = accountList.get(i).getIntAccountNo();
                if (!set.contains(key)) {
                    set.add(key);
                } else {
                    accountList.remove(accountList.get(i));
                    i--;
                }
            }
            return accountList;
        }
    
        public static String commaSeparator(String numberStr) {
            if (numberStr == null || numberStr.length() == 0) return "";
            String num = numberStr.trim();
            if (num.length() <= 3) return num;
            String lastStr = "";
            while (num.length() > 0) {
                if (num.length() <= 3) {
                    lastStr = num + "," + lastStr;
                    num = "";
                } else {
                    if (lastStr.equals("")) {
                        lastStr = num.substring(num.length() - 3);
                    } else {
                        lastStr = num.substring(num.length() - 3) + "," + lastStr;
                    }
                    if (num.length() > 3) {
                        num = num.substring(0, num.length() - 3);
                    }
                }
            }
            return lastStr;
        }
    
        public static String fillNationalCode(String nationalCode) {
            nationalCode = nationalCode.trim();
            int length = nationalCode.length();
            for (int i = 10; i > length; --i) {
                nationalCode = "0" + nationalCode;
            }
            return nationalCode;
        }
    
        public static String getGroupCodeStr(Integer groupCode) {
            return BundleUtils.getInstance().getMessage("groupCode" + groupCode);
        }
    
        public static String addDashToPan(String pan) {
            String part1 = pan.substring(0, 4);
            String part2 = pan.substring(4, 8);
            String part3 = pan.substring(8, 12);
            String part4 = pan.substring(12, 16);
            return part1 + "-" + part2 + "-" + part3 + "-" + part4;
        }
    //    public static Locale getCurrentLocale(HttpServletRequest request) {
    //        return CommonUtil.getCurrentLocale(request.getSession());
    //    }
    
    //    public static Locale getCurrentLocale(HttpSession session) {
    //        return (Locale) CommonUtil.nvl(session.getAttribute(ServerConstants.LOCALE_KEY), new Locale("fa"));
    //    }
    */
    
    }
    `
    isPathExists(utilPath)
    createFile(
        utilPath,
        `CommonUtil.java`,
        injectedContent
    );

    // injectedContent = `package com.behsazan.projects.mutualUnderstanding.common.util;

    // import com.behsazan.common.persian.StringFormatter;
    
    // import java.io.UnsupportedEncodingException;
    // import java.util.StringTokenizer;
    
    // public class PersianString {
    //     public static String persian1252CharToUnicode(int asciiCode, int unicodeStringType) {
    //         switch (asciiCode) {
    //             case 48:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u06F0"; // 0
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1776";
    
    //             case 49:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u06F1"; // 1
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1777";
    
    //             case 50:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u06F2"; // 2
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1778";
    
    //             case 51:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u06F3"; // 3
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1779";
    
    //             case 52:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u06F4"; // 4
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1780";
    
    //             case 53:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u06F5"; // 5
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1781";
    
    //             case 54:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u06F6"; // 6
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1782";
    
    //             case 55:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u06F7"; // 7
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1783";
    
    //             case 56:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u06F8"; // 8
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1784";
    
    //             case 57:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u06F9"; // 9
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1785";
    
    //             case 129:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u067E"; // pe
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1662";
    
    //             case 141:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0686"; // che
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1670";
    
    //             case 142:
    //             case 254:  // olnly for behsazan
    //             case 381:  // i don't know asscii code above 255 what means but we have !!!.
    //             case 698:  // i don't know asscii code above 255 what means but we have !!!.
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0698"; // zhe
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1688";
    
    //             case 144:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u06AF"; // gaaf
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1711";
    
    //             case 152:
    //             case 223:
    //             case 732:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u06A9"; // kaaf
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1705";
    
    //             case 170:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u06BE"; // he do cheshm.
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1726";
    
    //             case 191:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u061F"; // Alamat Soaal Farsi
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1567";
    
    //             case 229:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0647"; // he tanha
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1607";
    
    //             case 193:           // it could be "\u200C"; ZWNJ - Zero Width Non-Joiner
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0621"; // Hamza
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1569";
    
    //             case 194:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0622"; // A
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1570";
    
    //             case 195:              // "\u0623"; Alef With Hamza Above.
    //             case 197:           // "\u0623"; Alef With Hamza below.
    //             case 199:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0627"; // Alef
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1575";
    
    //             case 196:           // "\u0623"  Waw With Hamza Above.
    //             case 230:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0648"; // Wav
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1608";
    
    //             case 198:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0626"; // ئ
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1574";
    //             case 236:
    //             case 237:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u06CC"; // ye
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1740";
    
    //             case 200:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0628"; // be
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1576";
    
    //             case 201:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0629"; // te gerd
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1577";
    //             case 202:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u062A"; // te
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1578";
    
    //             case 203:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u062B"; // se
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1579";
    
    //             case 204:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u062C"; // jim
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1580";
    
    //             case 205:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u062D"; // he
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1581";
    
    //             case 206:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u062E"; // khe
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1582";
    
    //             case 207:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u062F"; // dal
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1583";
    
    //             case 208:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0630"; // zal
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1584";
    
    //             case 209:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0631"; // re
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1585";
    
    //             case 210:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0632"; // ze
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1586";
    
    //             case 211:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0633"; // sin
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1587";
    
    //             case 212:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0634"; // shin
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1588";
    
    //             case 213:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0635"; // saad
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1589";
    
    //             case 214:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0636"; // zaad
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1590";
    
    //             case 216:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0637"; // tein
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1591";
    
    //             case 217:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0638"; // zein
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1592";
    
    //             case 218:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0639"; // eyn
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1593";
    
    //             case 219:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u063A"; // gheyn
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1594";
    
    //             case 220:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0640"; // Tatweel : means -> toolani shodan, keshidan harf
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1600";
    
    //             case 221:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0641"; // fe
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1601";
    
    //             case 222:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0642"; // ghaaf
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1602";
    
    //             case 225:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0644"; // laam
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1604";
    
    //             case 227:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0645"; // mim
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1605";
    
    //             case 228:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0646"; // noon
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1606";
    
    //             case 248:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0651"; // tashdid
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1671";
    
    //             default:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return decimalToHexBMP(asciiCode);
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return new Integer(asciiCode).toString();
    //         }
    //         return "32";
    //     }
    
    //     public static String blgPersian1252CharToUnicode(int asciiCode, int unicodeStringType) {
    //         switch (asciiCode) {
    //             case 48:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u06F0"; // 0
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1776";
    //             case 49:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u06F1"; // 1
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1777";
    //             case 50:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u06F2"; // 2
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1778";
    //             case 51:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u06F3"; // 3
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1779";
    //             case 52:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u06F4"; // 4
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1780";
    //             case 53:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u06F5"; // 5
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1781";
    //             case 54:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u06F6"; // 6
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1782";
    //             case 55:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u06F7"; // 7
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1783";
    //             case 56:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u06F8"; // 8
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1784";
    //             case 57:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u06F9"; // 9
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1785";
    //             case 129:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u067E"; // pe
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1662";
    //             case 141:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0686"; // che
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1670";
    //             case 142:
    //             case 254:  // olnly for behsazan
    //             case 381:  // i don't know asscii code above 255 what means but we have !!!.
    //             case 698:  // i don't know asscii code above 255 what means but we have !!!.
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0698"; // zhe
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1688";
    //             case 144:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u06AF"; // gaaf
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1711";
    //             case 152:
    //             case 223:
    //             case 732:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u06A9"; // kaaf
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1705";
    //             case 170:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u06BE"; // he do cheshm.
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1726";
    //             case 191:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u061F"; // Alamat Soaal Farsi
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1567";
    //             case 229:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0647"; // he tanha
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1607";
    //             case 193:           // it could be "\u200C"; ZWNJ - Zero Width Non-Joiner
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0621"; // Hamza
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1569";
    //             case 194:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0622"; // A
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1570";
    //             case 195:              // "\u0623"; Alef With Hamza Above.
    //             case 197:           // "\u0623"; Alef With Hamza below.
    //             case 199:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0627"; // Alef
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1575";
    //             case 196:           // "\u0623"  Waw With Hamza Above.
    //             case 230:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0648"; // Wav
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1608";
    //             case 198:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0626"; // ئ
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1574";
    //             case 236:
    //             case 237:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u06CC"; // ye
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1740";
    //             case 200:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0628"; // be
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1576";
    //             case 201:
    //             case 202:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u062A"; // te
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1578";
    //             case 203:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u062B"; // se
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1579";
    //             case 204:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u062C"; // jim
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1580";
    //             case 205:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u062D"; // he
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1581";
    //             case 206:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u062E"; // khe
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1582";
    //             case 207:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u062F"; // dal
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1583";
    //             case 208:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0630"; // zal
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1584";
    //             case 209:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0631"; // re
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1585";
    //             case 210:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0632"; // ze
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1586";
    //             case 211:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0633"; // sin
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1587";
    //             case 212:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0634"; // shin
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1588";
    //             case 213:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0635"; // saad
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1589";
    //             case 214:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0636"; // zaad
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1590";
    //             case 216:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0637"; // tein
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1591";
    //             case 217:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0638"; // zein
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1592";
    //             case 218:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0639"; // eyn
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1593";
    //             case 219:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u063A"; // gheyn
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1594";
    //             case 220:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0640"; // Tatweel : means -> toolani shodan, keshidan harf
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1600";
    //             case 221:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0641"; // fe
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1601";
    //             case 222:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0642"; // ghaaf
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1602";
    //             case 225:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0644"; // laam
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1604";
    //             case 227:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0645"; // mim
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1605";
    //             case 228:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0646"; // noon
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1606";
    //             case 248:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0651"; // tashdid
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "1671";
    //             //ADDED
    //             case 32:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0020"; // space
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "32";
    //             case 65:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0041"; // A
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "65";
    //             case 66:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0042"; // B
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "66";
    //             case 67:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0043"; // C
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "67";
    //             case 68:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0044"; // D
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "68";
    //             case 69:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0045"; // E
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "69";
    //             case 70:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0046"; // F
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "70";
    //             case 71:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0047"; // G
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "71";
    //             case 72:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0048"; // H
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "72";
    //             case 73:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0049"; // I
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "73";
    //             case 74:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u004A"; // J
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "74";
    //             case 75:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u004B"; // K
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "75";
    //             case 76:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u004C"; // L
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "76";
    //             case 77:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u004D"; // M
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "77";
    //             case 78:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u004E"; // N
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "78";
    //             case 79:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u004F"; // O
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "79";
    //             case 80:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0050"; // P
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "80";
    //             case 81:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0051"; // Q
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "81";
    //             case 82:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0052"; // R
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "82";
    //             case 83:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0053"; // S
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "83";
    //             case 84:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0054"; // T
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "84";
    //             case 85:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0055"; // U
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "85";
    //             case 86:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0056"; // V
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "86";
    //             case 87:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0057"; // W
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "87";
    //             case 88:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0058"; // X
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "88";
    //             case 89:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0059"; // Y
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "89";
    //             case 90:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u005A"; // Z
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "90";
    //             case 97:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0061"; // a
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "97";
    //             case 98:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0062"; // b
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "98";
    //             case 99:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0063"; // c
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "99";
    //             case 100:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0064"; // d
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "100";
    //             case 101:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0065"; // e
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "101";
    //             case 102:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0066"; // f
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "102";
    //             case 103:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0067"; // g
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "103";
    //             case 104:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0068"; // h
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "104";
    //             case 105:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0069"; // i
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "105";
    //             case 106:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u006A"; // j
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "106";
    //             case 107:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u006B"; // k
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "107";
    //             case 108:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u006C"; // l
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "108";
    //             case 109:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u006D"; // m
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "109";
    //             case 110:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u006E"; // n
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "110";
    //             case 111:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u006F"; // o
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "111";
    //             case 112:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0070"; // p
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "112";
    //             case 113:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0071"; // q
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "113";
    //             case 114:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0072"; // r
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "114";
    //             case 115:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0073"; // s
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "115";
    //             case 116:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0074"; // t
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "116";
    //             case 117:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0075"; // u
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "117";
    //             case 118:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0076"; // v
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "118";
    //             case 119:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0077"; // w
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "119";
    //             case 120:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0078"; // x
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "120";
    //             case 121:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u0079"; // y
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "121";
    //             case 122:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u007A"; // z
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "122";
    //             case 44:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u002C"; // ,
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "44";
    //             case 45:
    //                 if (unicodeStringType == PersianParams.hexUnicode) {
    //                     return "\u002D"; // -
    //                 }
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "45";
    //             case 46:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u002E"; // .
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "46";
    //             case 47:
    //                 if (unicodeStringType == PersianParams.hexUnicode)
    //                     return "\u002F"; // /
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return "47";
    //             default:
    //                 if (unicodeStringType == PersianParams.hexUnicode) {
    // //                    return decimalToHexBMP(asciiCode);
    //                     return "\u0020";
    //                 }
    //                 else if (unicodeStringType == PersianParams.decimalUnicode)
    //                     return new Integer(asciiCode).toString();
    //         }
    //         return "32";
    //     }
    
    //     private static int persianUnicodeCharTo1252(int decimalUnicodeCharValue) {
    //         switch (decimalUnicodeCharValue) {
    //             case 1776:
    //                 return 48; // 0
    
    //             case 1777:
    //                 return 49; // 1
    
    //             case 1778:
    //                 return 50; // 2
    
    //             case 1779:
    //                 return 51; // 3
    
    //             case 1780:
    //                 return 52; // 4
    
    //             case 1781:
    //                 return 53; // 5
    
    //             case 1782:
    //                 return 54; // 6
    
    //             case 1783:
    //                 return 55; // 7
    
    //             case 1784:
    //                 return 56; // 8
    
    //             case 1785:
    //                 return 57; // 9
    
    //             case 1662:
    //                 return 129; // pe
    
    //             case 1670:
    //                 return 141; // che
    //             //todo: fix zhe , so it does not need clientRepair
    //             case 1688:
    //                 return 142; // zhe
    
    //             case 8207:
    //                 return 142; // zhe
    
    //             case 1711:
    //                 return 144; // gaaf
    
    //             case 1705:
    //                 return 223; // kaaf in some fonts(Arabic)has persian 152, but isn't good
    //             // for internal database searching specially in DB2 1252.
    //             case 1603:
    //                 return 223; // kaaf in some fonts(Arabic)has persian 152, but isn't good
    //             // for internal database searching specially in DB2 1252.
    //             case 152:
    //                 return 223; // kaaf in some fonts(Arabic)has persian 152, but isn't good
    //             // for internal database searching specially in DB2 1252.
    
    //             case 38:
    //                 return 237; // kaaf in some fonts(Arabic)has persian 152, but isn't good
    //             // for internal database searching specially in DB2 1252.
    
    //             case 1726:
    //                 return 170; // he do cheshm.
    
    //             case 1567:
    //                 return 191; // Alamat Soaal Farsi
    
    //             case 1607:
    //                 return 229; // he tanha, 192 Ascii code in some fonts has the same meaning.
    
    //             case 1569:     // it could be "\u200C; ZWNJ - Zero Width Non-Joiner
    //                 return 193; // Hamza
    
    //             case 26:     // it could be "\u200C; ZWNJ - Zero Width Non-Joiner
    //                 return 198; // Hamza ba payr ye   :  ئ
    
    //             case 1608:
    //                 return 230;  // Wav
    //             // "\u0623"  Waw With Hamza Above. ascii code 196.
    
    //             case 1740:
    //                 return 237; // ye
    //             // ascii code 236.
    //             // ascii code 198.
    
    //             case 1610:
    //                 return 237; // ye
    //             // ascii code 236.
    //             // ascii code 198.
    
    //             case 1576:
    //                 return 200; // be
    
    //             case 1578:
    //                 return 202; // te
    //             // ascii code 201
    
    //             case 1579:
    //                 return 203; // se
    
    //             case 1580:
    //                 return 204; // jim
    
    //             case 1581:
    //                 return 205; // he
    
    //             case 1582:
    //                 return 206; // khe
    
    //             case 1583:
    //                 return 207; // dal
    
    //             case 1584:
    //                 return 208; // zal
    
    //             case 1585:
    //                 return 209; // re
    
    //             case 1586:
    //                 return 210; // ze
    
    //             case 1587:
    //                 return 211; // sin
    
    //             case 1588:
    //                 return 212; // shin
    
    //             case 1589:
    //                 return 213; // saad
    
    //             case 1590:
    //                 return 214; // zaad
    
    //             case 1591:
    //                 return 216; // tein
    
    //             case 1592:
    //                 return 217; // zein
    
    //             case 1593:
    //                 return 218; // eyn
    
    //             case 1594:
    //                 return 219; // gheyn
    
    //             case 1600:
    //                 return 220; // Tatweel : means -> toolani shodan, keshidan harf
    
    //             case 1601:
    //                 return 221; // fe
    
    //             case 1602:
    //                 return 222; // ghaaf
    
    //             case 1604:
    //                 return 225; // laam
    
    //             case 1605:
    //                 return 227; // mim
    
    //             case 1606:
    //                 return 228; // noon
    
    //             case 1671:
    //                 return 248; // tashdid
    
    //             case 1570:
    //                 return 194; // A
    
    //             case 1571:
    //                 return 195; // Alef Hamze
    
    //             case 1572:
    //                 return 196; // wav ba Hamze (Hamze ba Paye wav)
    
    //             case 1573:
    //                 return 197; // Alef With Hamza Below
    
    //             case 1574:
    //                 return 198; // yeh hamzeh
    
    //             case 1575:
    //                 return 199; // Alef
    
    //             case 1577:
    //                 return 201; // te gerd
    
    //             default:
    //                 return decimalUnicodeCharValue; //the same ascii code.
    //         }
    //     }
    
    //     private static String AsciiDigitToPersianUnicodeString(int asciiCode) {
    
    //         switch (asciiCode) {
    //             case 48:
    //                 return "\u06F0"; // 0
    
    //             case 49:
    //                 return "\u06F1"; // 1
    
    //             case 50:
    //                 return "\u06F2"; // 2
    
    //             case 51:
    //                 return "\u06F3"; // 3
    
    //             case 52:
    //                 return "\u06F4"; // 4
    
    //             case 53:
    //                 return "\u06F5"; // 5
    
    //             case 54:
    //                 return "\u06F6"; // 6
    
    //             case 55:
    //                 return "\u06F7"; // 7
    
    //             case 56:
    //                 return "\u06F8"; // 8
    
    //             case 57:
    //                 return "\u06F9"; // 9
    
    //             default:
    //                 return decimalToHexBMP(asciiCode); // as the same ascii code.
    //         }
    //     }
    
    
    //     private static String arabicUnicodeDigitToPersian(String arabicUnicodeDigit) {
    //         arabicUnicodeDigit.trim();
    
    //         int intVale = 0;
    
    //         String tmpStr = arabicUnicodeDigit;
    //         tmpStr.substring(1);
    
    //         try {
    //             intVale = Integer.parseInt(tmpStr, 16);
    //         } catch (NumberFormatException e) {
    //             return null;
    //         }
    
    //         switch (intVale) {
    //             case 1632:
    //                 return "\u06F0"; // 0
    
    //             case 1633:
    //                 return "\u06F1"; // 1
    
    //             case 1634:
    //                 return "\u06F2"; // 2
    
    //             case 1635:
    //                 return "\u06F3"; // 3
    
    //             case 1636:
    //                 return "\u06F4"; // 4
    
    //             case 1637:
    //                 return "\u06F5"; // 5
    
    //             case 1638:
    //                 return "\u06F6"; // 6
    
    //             case 1639:
    //                 return "\u06F7"; // 7
    
    //             case 1640:
    //                 return "\u06F8"; // 8
    
    //             case 1641:
    //                 return "\u06F9"; // 9
    
    //             default:
    //                 return arabicUnicodeDigit;
    //         }
    //     }
    
    //     private static int persianUnicodeCharTo1252(String unicodeChar) {
    //         unicodeChar.trim();
    
    //         int intVale = 0;
    
    //         String tmpStr = unicodeChar;
    //         tmpStr.substring(1);
    
    //         try {
    //             intVale = Integer.parseInt(tmpStr, 16);
    //         } catch (NumberFormatException e) {
    //             return -1;
    //         }
    
    //         switch (intVale) {
    //             case 1776:
    //                 return 48; // 0
    
    //             case 1777:
    //                 return 49; // 1
    
    //             case 1778:
    //                 return 50; // 2
    
    //             case 1779:
    //                 return 51; // 3
    
    //             case 1780:
    //                 return 52; // 4
    
    //             case 1781:
    //                 return 53; // 5
    
    //             case 1782:
    //                 return 54; // 6
    
    //             case 1783:
    //                 return 55; // 7
    
    //             case 1784:
    //                 return 56; // 8
    
    //             case 1785:
    //                 return 57; // 9
    
    //             case 1662:
    //                 return 129; // pe
    
    //             case 1670:
    //                 return 141; // che
    
    //             case 1688:
    //                 return 142; // jhe
    
    //             case 1711:
    //                 return 144; // gaaf
    
    //             case 1705:
    //             case 1706:
    //             case 1603:
    //                 return 223; // kaaf 152 in some fonts(Arabic)is persian, but isn't good
    //             // fot internal database searching specially in DB2 1252.
    
    //             case 1726:
    //                 return 170; // he do cheshm.
    
    //             case 1567:
    //                 return 191; // Alamat Soaal Farsi
    
    //             case 1607:
    //                 return 229; // he tanha, 192 Ascii code in some fonts has the same meaning.
    
    //             case 1569:     // it could be "\u200C; ZWNJ - Zero Width Non-Joiner
    //                 return 193; // Hamza
    
    //             case 1570:
    //                 return 194; // A
    
    //             case 1575:
    //                 return 199; // Alef
    //             // "\u0623"; Alef With Hamza Above. ascii code 195
    //             // "\u0623"; Alef With Hamza below. ascii code 197
    //             case 1577:
    //                 return 201; // te gerd
    //             case 1608:
    //                 return 230;  // Wav
    //             // "\u0623"  Waw With Hamza Above. ascii code 196.
    
    //             case 1740:
    //                 return 237; // ye
    //             // ascii code 236.
    //             // ascii code 198.
    
    //             case 1576:
    //                 return 200; // be
    
    //             case 1578:
    //                 return 202; // te
    //             // ascii code 201
    
    //             case 1579:
    //                 return 203; // se
    
    //             case 1580:
    //                 return 204; // jim
    
    //             case 1581:
    //                 return 205; // he
    
    //             case 1582:
    //                 return 206; // khe
    
    //             case 1583:
    //                 return 207; // dal
    
    //             case 1584:
    //                 return 208; // zal
    
    //             case 1585:
    //                 return 209; // re
    
    //             case 1586:
    //                 return 210; // ze
    
    //             case 1587:
    //                 return 211; // sin
    
    //             case 1588:
    //                 return 212; // shin
    
    //             case 1589:
    //                 return 213; // saad
    
    //             case 1590:
    //                 return 214; // zaad
    
    //             case 1591:
    //                 return 216; // tein
    
    //             case 1592:
    //                 return 217; // zein
    
    //             case 1593:
    //                 return 218; // eyn
    
    //             case 1594:
    //                 return 219; // gheyn
    
    //             case 1600:
    //                 return 220; // Tatweel : means -> toolani shodan, keshidan harf
    
    //             case 1601:
    //                 return 221; // fe
    
    //             case 1602:
    //                 return 222; // ghaaf
    
    //             case 1604:
    //                 return 225; // laam
    
    //             case 1605:
    //                 return 227; // mim
    
    //             case 1606:
    //                 return 228; // noon
    
    //             case 1671:
    //                 return 248; // tashdid
    
    //             default:
    //                 return intVale; //the same code, unknown.
    //         }
    //     }
    
    
    //     public static boolean isAsciiStringNumeric(String AsciiString) {
    //         AsciiString.trim();
    
    //         int StrLength = 0;
    //         int counter = 0;
    //         boolean result = false;
    
    //         StrLength = AsciiString.length();
    
    //         while (StrLength < counter++) {
    //             if ((AsciiString.charAt(counter) >= 48) && (AsciiString.charAt(counter)) <= 57)
    //                 result = true;
    //             else
    //                 result = false;
    //         }
    
    //         return result;
    //     }
    
    
    //     /*
    //       *  Just Evaluating persian Numeric String.
    //       *  This method works only for converted utf8 numbers
    //       *  in standard ucs2 format.
    //       *  This method return false if the string is not
    //       *  in ucs2 format or is not numeric.
    //       */
    //     public static boolean isPersianUnicodeStringNumeric(String unicodeString) {
    //         unicodeString.trim();
    
    //         boolean result = false;
    
    //         StringTokenizer tokenizedStr = new StringTokenizer(unicodeString, "\\u");
    
    //         String tmpStr = null;
    //         while (tokenizedStr.hasMoreTokens()) {
    //             tmpStr = tokenizedStr.nextToken();
    
    //             if (tmpStr != tmpStr.trim())
    //                 return false;
    
    //             try {
    //                 int intVale = Integer.parseInt(tmpStr, 16);
    
    //                 if (intVale >= 1776 && intVale <= 1785) {
    //                     result = true;
    //                     continue;
    //                 } else
    //                     result = false;
    //             } catch (NumberFormatException e) {
    //                 return false;
    //             }
    //         }
    
    //         return result;
    //     }
    
    
    //     /*
    //       *  The same as above for Arabic numeric strings.
    //       */
    //     public static boolean isArabicUnicodeStringNumeric(String unicodeString) {
    //         unicodeString.trim();
    
    //         boolean result = false;
    
    //         StringTokenizer tokenizedStr = new StringTokenizer(unicodeString, "\\u");
    
    //         String tmpStr = null;
    //         while (tokenizedStr.hasMoreTokens()) {
    //             tmpStr = tokenizedStr.nextToken();
    
    //             if (tmpStr != tmpStr.trim())
    //                 return false;
    
    //             try {
    //                 int intVale = Integer.parseInt(tmpStr, 16);
    
    //                 if (intVale >= 1632 && intVale <= 1641) {
    //                     result = true;
    //                     continue;
    //                 } else
    //                     result = false;
    //             } catch (NumberFormatException e) {
    //                 return false;
    //             }
    //         }
    
    //         return result;
    //     }
    
    
    //     public static String blgConvertToHexUnicode(String asciiStr1252) {
    //         String returnValue = "";
    //         if (CommonUtil.isEmpty(asciiStr1252)) {
    //             return "";
    //         }
    
    //         asciiStr1252 = asciiStr1252.trim();
    
    //         for (int i = 0; i < asciiStr1252.length(); i++) {
    //             returnValue += blgPersian1252CharToUnicode((int) asciiStr1252.charAt(i), PersianParams.hexUnicode);
    //         }
    
    //         return returnValue;
    //     }
    
    //     public static String convertToDecimalUnicode(String asciiStr1252) {
    // //        return stringFromDb(asciiStr1252);
    //         String returnValue = "";
    //         if (CommonUtil.isEmpty(asciiStr1252)) {
    //             return "";
    //         }
    //         asciiStr1252 = asciiStr1252.trim();
    
    //         for (int i = 0; i < asciiStr1252.length(); i++) {
    //             //returnValue += String.valueOf((char)Integer.parseInt(persian1252CharToUnicode((int) asciiStr1252.charAt(i), PersianParams.decimalUnicode)));
    //             char tmpChar = (char) Integer.parseInt(persian1252CharToUnicode((int) asciiStr1252.charAt(i), PersianParams.decimalUnicode));
    //             returnValue += String.valueOf(tmpChar);
    //         }
    
    //         return returnValue;
    //     }
    
    //     /*
    //       *  The UNICODE String must be persian exactly,
    //       *  both numbers and chars.
    //       */
    
    //     public static String convertDecimalUnicodeToArabicAscii1252(String UnicodeStr) {
    //         String returnValue = "";
    //         if (CommonUtil.isEmpty(UnicodeStr)) {//check null value
    //             return "";
    //         }
    //         UnicodeStr = UnicodeStr.trim();
    
    //         for (int i = 0; i < UnicodeStr.length(); i++) {
    //             returnValue += (char) persianUnicodeCharTo1252((int) UnicodeStr.charAt(i));
    //         }
    
    //         return returnValue;
    //     }
    
    //     public static String convertHexUnicodeToArabicAscii1252(String UnicodeString) {
    //         String returnValue = "";
    //         if (CommonUtil.isEmpty(UnicodeString)) {//check null value
    //             return "";
    //         }
    
    //         UnicodeString = UnicodeString.trim();
    //         StringTokenizer tokenizedStr = new StringTokenizer(UnicodeString, "\\u");
    //         String tmpStr = null;
    //         int intVale = 0;
    
    //         while (tokenizedStr.hasMoreTokens()) {
    //             tmpStr = tokenizedStr.nextToken();
    //             if (tmpStr != tmpStr.trim())
    //                 continue;
    
    //             try {
    //                 intVale = Integer.parseInt(tmpStr, 16);
    //             } catch (NumberFormatException e) {
    //                 continue;
    //             }
    //             returnValue += persianUnicodeCharTo1252(intVale);
    //         }
    
    //         return returnValue;
    //     }
    
    //     /*
    //       * convert an ordinary decimal number to a BMP
    //       * (Basic Multilingual Plane) Hex String.
    //       */
    //     private static String decimalToHexBMP(int decimalNumber) {
    //         return convertHexStrToHexBMPStr(decimalToHex(decimalNumber).toString());
    //     }
    
    //     /*
    //       * convert an ordinary Hex String to a
    //       * Hex BMP(Basic Multilingual Plane) String.
    //       */
    //     private static String convertHexStrToHexBMPStr(String HexStr) {
    //         String HexBMPStr = "\\u";
    //         if (HexStr.length() < 4)
    //             for (int counter = 0; counter < HexStr.length(); counter++)
    //                 HexBMPStr += "0";
    
    //         return HexBMPStr + HexStr;
    //     }
    
    //     /*
    //       *  convert a decimal number to hex as StringBuffer
    //       */
    //     private static StringBuffer decimalToHex(int decimalNumber) {
    //         int remain = 0;
    //         String output = "";
    //         while (decimalNumber > 15) {
    //             remain = decimalNumber % 16;
    //             output = output + translate(remain);
    //             decimalNumber = decimalNumber / 16;
    //         }
    
    //         output = output + translate(decimalNumber);
    //         StringBuffer sb = new StringBuffer(output);
    //         return sb.reverse();
    //     }
    
    //     /*
    //       * translate a decimal digit to
    //       * a Hex digit.
    //       */
    //     private static String translate(int digit) {
    //         if (digit == 10)
    //             return "A";
    //         else if (digit == 11)
    //             return "B";
    //         else if (digit == 12)
    //             return "C";
    //         else if (digit == 13)
    //             return "D";
    //         else if (digit == 14)
    //             return "E";
    //         else if (digit == 15)
    //             return "F";
    //         else return "" + digit;
    //     }
    
    //     public static String getDB2UnicodeString(byte[] inBytes) {
    // //        return PersianString.stringFromDb(inBytes);
    //         return convertToDecimalUnicode(StringFormatter.repairString(StringFormatter.repairType4DBString(inBytes)));
    //     }
    
    //     public static String repairClientString(String base) {
    //         if (base == null) return "";
    
    //         int charAt;
    //         StringBuffer stringBuffer = new StringBuffer(base);
    //         for (int i = 0; i < stringBuffer.length(); i++) {
    //             charAt = (int) stringBuffer.charAt(i);
    //             if (charAt == 152) {      //ke
    //                 stringBuffer.replace(i, i + 1, "" + (char) 223);
    //             }
    
    // //            if (charAt == 142) {      //zhe
    // //                stringBuffer.replace(i, i + 1, "" + (char) 254);
    // //            }
    
    //             if (stringBuffer.length() >= i + 7 && charAt == 38) {      //ye
    //                 if (stringBuffer.indexOf(";") > 5 && stringBuffer.substring(i, i + 7).equals("&#1740;")) {
    //                     stringBuffer.replace(i, i + 7, "" + (char) 237);
    //                 }
    //             }
    //         }
    //         return stringBuffer.toString();
    //     }
    
    //     public static String stringToDb(String input) {
    //         try {
    //             byte[] bytes = input.getBytes("windows-1256");
    //             for (int i = 0; i < bytes.length; ++i) {
    //                 if (bytes[i] == 63) bytes[i] = (byte) 237;
    //             }
    //             return new String(bytes, "ISO-8859-1");
    //         } catch (UnsupportedEncodingException e) {
    //             e.printStackTrace();
    //             return "";
    //         }
    //     }
    
    // //    public static String stringFromDb(String input) {
    // //        try {
    // //            byte[] bytes = input.getBytes("windows-1252");
    // ////            for (int i = 0; i < bytes.length; ++i) {
    // ////                if (bytes[i] == 63) {
    // ////                    bytes[i] = (byte) 141;//gaf
    // ////                }
    // ////                if (bytes[i] == 63) bytes[i] = (byte) 141;//cheh
    // ////                if (bytes[i] == 63) bytes[i] = (byte) 698;//zheh
    // ////                if (bytes[i] == 63) bytes[i] = (byte) 129;//peh
    // ////            }
    // //
    // //            return new String(bytes, "windows-1256");
    // //        } catch (UnsupportedEncodingException e) {
    // //            e.printStackTrace();
    // //            return "";
    // //        }
    // //    }
    
    //     public static String stringFromDb(byte[] input) {
    //         if (input == null) return "";
    //         try {
    // //            for (int i = 0; i < input.length; ++i) {
    // //                if (input[i] == 63){
    // //                    input[i] = (byte) 144;
    // //                }
    // //            }
    //             return new String(input, "windows-1256");
    //         } catch (UnsupportedEncodingException e) {
    //             e.printStackTrace();
    //             return "";
    //         }
    //     }
    // }
    // `
    // isPathExists(utilPath)
    // createFile(
    //     utilPath,
    //     `PersianString.java`,
    //     injectedContent
    // );
    
}
module.exports = commonGenerator;