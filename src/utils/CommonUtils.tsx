export const defaultStateReducer = (state: any, action: any) => {
  const { payload }: { payload: Object } = action;
  const newState = { ...state, ...payload };
  return { ...newState };
};

export const getRegister = (rules: Object, extra: Object) => {
  let registry: any = {};
  if (rules) registry = { ...registry, ...rules };
  Object.entries(extra).map(([key, value]) => {
    if (key) registry[key] = value;
  });
  return registry;
};

export const isEmpty = (obj: Object) => {
  return Object.keys(obj).length === 0;
};

export const screenSize = () => {
  const screenProps: any = {};
  const winY = window.innerHeight;
  const winX = window.innerWidth;
  const screenSizeDia = Math.sqrt(winY * winY + winX * winX);
  if (winX > winY) screenProps.landscape = true;
  else screenProps.landscape = false;
  if (screenSizeDia >= 1468) {
    screenProps.mobileMax = false;
    screenProps.tabletMax = false;
  } else if (screenSizeDia >= 988) {
    screenProps.mobileMax = false;
    screenProps.tabletMax = true;
  } else {
    screenProps.mobileMax = true;
    screenProps.tabletMax = false;
  }
  return screenProps;
};

export const timeFromNow = (moment: any, timeAt: any) => {
  const msgTS = moment(timeAt);
  const currTS = moment();
  const diffs = {
    days: Number(currTS.diff(msgTS, "days")),
    hours: Number(currTS.diff(msgTS, "hours")),
    minutes: Number(currTS.diff(msgTS, "minutes")),
    seconds: Number(currTS.diff(msgTS, "seconds")),
  };
  if (diffs.days < 1) return msgTS.format("h:mm A");
  if (diffs.days < 2) return "Yesterday";
  if (diffs.days < 8) return msgTS.format("dddd");
  if (diffs.days < 8) return msgTS.format("dddd");
  return msgTS.calendar();
};

export const getDateAndTime = (moment: any, timeAt: any) => {
  const msgTS = moment(timeAt);
  const clockTime = msgTS.format("h:mm A");
  const timeDiff = timeFromNow(moment, timeAt);
  if (clockTime === timeDiff) return timeDiff;
  return `${msgTS.format("h:mm A")} ${timeFromNow(moment, timeAt)}`;
};

export const debounce = (func: Function, timeout = 1000) => {
  let timer: any;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};
