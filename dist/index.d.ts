export function lightTheme(): {
    palette: {
        primary: {
            main: string;
            light: string;
            contrastText: string;
        };
        secondary: {
            main: string;
            contrastText: string;
            light: string;
        };
        dark: {
            main: string;
            light: string;
            black: string;
            contrastText: string;
        };
    };
    typography: {
        fontFamily: string[];
        button: {
            textTransform: string;
            letterSpacing: string;
            fontWeight: string;
            maxHeight: string;
        };
    };
    shape: {
        borderRadius: number;
    };
    overrides: {
        MuiInput: {
            root: {
                "&::placeholder": {
                    color: string;
                };
            };
        };
        MuiSkeleton: {
            root: {
                borderRadius: string;
            };
        };
        MuiPaper: {
            root: {
                borderRadius: string;
            };
            rounded: {
                borderRadius: string;
            };
        };
        MuiPopover: {
            root: {
                borderRadius: string;
            };
        };
        MuiList: {
            root: {
                borderRadius: string;
            };
        };
    };
};
export const HeartlandButton: any;
export const HeartlandCheckbox: any;
export const HeartlandInput: any;
export const HeartlandLabel: any;
