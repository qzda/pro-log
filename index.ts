const Colors = {
  black: 30,
  red: 31,
  green: 32,
  yellow: 33,
  blue: 34,
  magenta: 35,
  cyan: 36,
  white: 37,
  brightBlack: 90,
  brightRed: 91,
  brightGreen: 92,
  brightYellow: 93,
  brightBlue: 94,
  brightMagenta: 95,
  brightCyan: 96,
  brightWhite: 97,
} as const;

const Backgrounds = {
  bgBlack: 40,
  bgRed: 41,
  bgGreen: 42,
  bgYellow: 43,
  bgBlue: 44,
  bgMagenta: 45,
  bgCyan: 46,
  bgWhite: 47,
  bgBrightBlack: 100,
  bgBrightRed: 101,
  bgBrightGreen: 102,
  bgBrightYellow: 103,
  bgBrightBlue: 104,
  bgBrightMagenta: 105,
  bgBrightCyan: 106,
  bgBrightWhite: 107,
} as const;

type Color = keyof typeof Colors;
type Background = keyof typeof Backgrounds;
type FuncParameterType = string | number;

const Obj = {
  ...Object.keys(Colors).reduce((_obj, color) => {
    _obj[color] = (str: FuncParameterType) =>
      `\x1b[${Colors[color]}m${str}\x1b[0m`;
    return _obj;
  }, {}),

  ...Object.keys(Backgrounds).reduce((_obj, bg) => {
    _obj[bg] = (str: FuncParameterType) =>
      `\x1b[${Backgrounds[bg]}m${str}\x1b[0m`;
    return _obj;
  }, {}),
} as {
  [key in Color | Background]: (str: FuncParameterType) => string;
};

export default Obj;
export { Colors, Backgrounds };
