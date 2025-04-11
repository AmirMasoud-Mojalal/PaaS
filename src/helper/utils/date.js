import momentJalaali from "moment-jalaali";

export const convertToInteger = (date = "") => {
  if (date.length > 0) {
    return Number(date.replaceAll("/", ""));
  }
  return 0;
};

export const convertToString = (date = 0) => {
  if (String(date).length < 8) return date;

  const day = String(date).substring(6, 8);
  const month = String(date).substring(4, 6);
  const year = String(date).substring(0, 4);

  return year + "/" + month + "/" + day;
};

export const convertStringToDateObject = (date = "") => {
  if (date.length > 0) {
    const dateStr = date.replaceAll("/", "");
    if (dateStr.length < 8) return dateStr;

    const day = String(dateStr).substring(6, 8);
    const month = String(dateStr).substring(4, 6);
    const year = String(dateStr).substring(0, 4);

    return { year: Number(year), month: Number(month), day: Number(day) };
  }
  return getCurrentDate();
};

export const convertDateObjectToString = (date = {}) => {
  if (date === {}) return "";
  return (
    String(date.year) +
    "/" +
    (String(date.month).length === 1
      ? "0" + String(date.month)
      : String(date.month)) +
    "/" +
    (String(date.day).length === 1 ? "0" + String(date.day) : String(date.day))
  );
};

export const convertIntegerToDateObject = (date = 0) => {
  if (String(date).length < 8) return getCurrentDate();
  return convertStringToDateObject(String(date));
};

export const convertDateObjectToInteger = (date = {}) => {
  if (date === {}) return 0;
  return date.year * 10000 + date.month * 100 + date.day;
};

export const getCurrentDate = (isMoment = false) => {
  const toDay = momentJalaali();
  if (isMoment) return toDay;
  else
    return {
      year: toDay.jYear(),
      month: toDay.jMonth() + 1,
      day: toDay.jDate(),
    };
};

/**
 *
 * @param {number | String | object} date in type of number, string and object
 * @param {number} add for add to date
 * @param {number} type 0=day | 1=week | 2=month | 3=year
 *
 */
export const addData = (date, add, type) => {
  if (type < 0 || type > 3) throw new Error("مقدار فیلد تایپ صحیح نمی باشد");
  if (typeof date === "string") {
    if (date.length < 10) throw new Error("فرمت تاریخ معتبر نمی باشد");
    return momentJalaali(date, "jYYYY/jMM/jDD")
      .add(
        type === 1 ? add * 7 : add,
        type === 0
          ? "day"
          : type === 1
          ? "day"
          : type === 2
          ? "jMonth"
          : "jYear"
      )
      .format("jYYYY/jMM/jDD");
  } else if (typeof date === "number") {
    if (String(date).length < 8) throw new Error("فرمت تاریخ معتبر نمی باشد");

    return convertToInteger(
      momentJalaali(convertToString(date), "jYYYY/jMM/jDD")
        .add(
          type === 1 ? add * 7 : add,
          type === 0
            ? "day"
            : type === 1
            ? "day"
            : type === 2
            ? "jMonth"
            : "jYear"
        )
        .format("jYYYY/jMM/jDD")
    );
  } else if (typeof date === "object") {
    return convertStringToDateObject(
      momentJalaali(convertDateObjectToString(date), "jYYYY/jMM/jDD")
        .add(
          type === 1 ? add * 7 : add,
          type === 0
            ? "day"
            : type === 1
            ? "day"
            : type === 2
            ? "jMonth"
            : "jYear"
        )
        .format("jYYYY/jMM/jDD")
    );
  }
};

export const getMilladyCurrentDate = (isDate = false) => {
  const toDay = new Date();
  if (isDate) return toDay;
  else
    return {
      year: toDay.getFullYear(),
      month: toDay.getMonth() + 1,
      day: toDay.getDate(),
    };
};
