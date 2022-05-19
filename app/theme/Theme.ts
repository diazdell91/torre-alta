export interface ITheme {
  sizes: {
    //global sizes
    xxs?: number;
    xs?: number;
    s?: number;
    m?: number;
    l?: number;
    xl?: number;

    //fontSizes
    h1?: number;
    h2?: number;
    h3?: number;
    h4?: number;
    body?: number;
    caption?: number;

    //button sizes
    buttonHeight?: number;
    buttonRadius?: number;
    buttonBorder?: number;
    //input sizes
    inputHeight?: number;
    inputRadius?: number;
    inputBorder?: number;
  };

  colors: {
    //app colors
    primary: string;
    secundary: string;
    background: string;
    white: string;
    white2: string;
    "gray-light": string;
    "gray-medium": string;
    "gray-dark": string;

    //surfaces colors
    backDrop: string;

    //tabs colors
    tint: string;
    tabIconDefault: string;
    tabIconSelected: string;
  };
}

export const SIZES = {
  //global sizes
  xxs: 4,
  xs: 8,
  s: 12,
  m: 14,
  l: 16,
  xl: 24,

  //fontSizes
  h1: 20,
  h2: 18,
  h3: 16,
  h4: 14,
  body: 12,
  caption: 10,

  //button sizes
  buttonHeight: 56,
  buttonRadius: 10,
  buttonBorder: 1,

  //input sizes
  inputHeight: 56,
  inputRadius: 10,
  inputBorder: 0,

  //spacing
};

const tintColorLight = "#a90b2f";

export const COLORS = {
  //app colors
  primary: "#a90b2f",
  secundary: "#ffe100",
  background: "#d8d8d8",
  white: "#f7f7f7",
  white2: "#ffffff",
  "gray-light": "#f3f3f3",
  "gray-medium": "#323137",
  "gray-dark": "#21202580",

  tint: tintColorLight,
  tabIconDefault: "#ccc",
  tabIconSelected: tintColorLight,
  backDrop: "#21202510",
};

export const THEME: ITheme = {
  sizes: SIZES,
  colors: COLORS,
};

export default THEME;
