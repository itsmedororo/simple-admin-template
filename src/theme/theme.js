const PRIMARY_COLOR = '#132A13';
const PRIMARY_RGB = 'rgb(19 42 19)';
const SECONDARY_COLOR = '#ECF39E';
const BACKGROUND_COLOR = '#FAFFDC';

const lightTheme = {
    primaryColor: PRIMARY_COLOR,
    secondaryColor: SECONDARY_COLOR,
    backgroundColor: BACKGROUND_COLOR,
    primaryRgb: opacity => PRIMARY_RGB.replace(')', ` / ${opacity})`),
}

export default lightTheme;