import { createTheme, ThemeOptions } from "@mui/material/styles";

export const theme: ThemeOptions = createTheme({
  typography: {
    fontFamily: [
      "SF Pro Text",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
    h1: {
      fontSize: "18px",
      fontWeight: 600,
      marginBottom: "20px",
    },
    h2: {
      fontSize: "18px",
      fontWeight: 600,
      marginBottom: "14px",
    },
    body1: {
      fontSize: "14px",
      color: "#BABABA",
      fontWeight: 400,
      marginBottom: "8px",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "16px",
          borderColor: "currentColor",
          fontSize: "16px",
          fontWeight: 400,
          padding: "8px 14px",
          minHeight: "40px",
          "&.tab-button": {
            color: "#333333",
            marginRight: "8px",
            marginBottom: "24px",
          },
          "&.tab-button-active": {
            backgroundColor: "#000000",
            color: "#FFFFFF",
            borderColor: "transparent",
          },
        },
        contained: {
          backgroundColor: "#000000",
          color: "#FFFFFF",
          border: "1px solid #000000",
          "&:hover": {
            backgroundColor: "#333333",
          },
          "&:active": {
            backgroundColor: "#000000",
          },
          "&.tab-button-active:hover": {
            backgroundColor: "#333333",
          },
        },
        outlined: {
          color: "#333333",
          border: "1px solid #F5F5F5",
          backgroundColor: "#FFFFFF",
          "&:hover": {
            backgroundColor: "#F5F5F5",
          },
          "&.tab-button:hover": {
            backgroundColor: "#F5F5F5",
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: 0,
          color: "#333333",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiTextField-root label": {
            left: "50%",
            fontSize: "16px",
          },
          "& .MuiInputBase-root input": {
            textAlign: "center",
            fontSize: "14px",
            padding: "16px 14px 8px",
          },
          "& .MuiOutlinedInput-root": {
            fieldset: {
              textAlign: "center",
              border: "none",
            },
            "&:hover fieldset": {
              borderColor: "#E0E0E0",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#2196F3",
              borderWidth: "2px",
            },
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          "&.requisite-type": {
            backgroundColor: "#F5F5F5",
            borderRadius: "8px",
            padding: "16px",
            marginBottom: "16px",
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          marginRight: 0,
          marginLeft: 0,
          "& .MuiFormControlLabel-label": {
            fontSize: "16px",
            color: "#333333",
            fontWeight: 400,
            marginBottom: 0,
            marginLeft: "12px",
            userSelect: "none",
            "@media (max-width: 480px)": { fontSize: "12px", },
          },
        },
        label: {
          fontSize: "14px",
          color: "#000000",
          fontWeight: 500,
        },
      },
    },
    MuiFormGroup: {
      styleOverrides: {
        root: {
          "&.requisite-type": {
            backgroundColor: "#F5F5F5",
            borderRadius: "8px",
            padding: "16px",
            marginBottom: "16px",
          },
          "&.requisite-options": {
            display: "flex",
            gap: "24px",
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          "&.MuiCheckbox-root": {
            padding: 4,
            width: "24px",
            height: "24px",
            color: "#FFD700",
            marginLeft: "12px",
          },
          "& .MuiSvgIcon-root": {
            color: "rgba(0, 0, 0, 0.6)",
            width: "28px",
            height: "28px",
          },
          "&.Mui-checked": {
            backgroundColor: "#FFD700",
            borderRadius: 4,
            padding: 4,
            "& .MuiSvgIcon-root": {
              color: "#000000",
              width: "16px",
              height: "16px",
            },
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          padding: 0,
          "&.Mui-checked": {
            color: "#000000",
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          fontSize: "20px",
          borderBottom: 0,
          padding: "4px 0",
          margin: 0,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "14px",
          left: "50%",
          top: "-10px",
          transform: "translateX(-50%)",
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          "&.requisites-item": {
            backgroundColor: "#FFFFFF",
            borderRadius: "8px",
            padding: "10px 16px",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          "&.checked-radio-icon": {
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            backgroundColor: "#FFD700",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "none",
          },
          "&.amount-input-box": {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            border: 0,
            borderRadius: "8px",
            padding: "18px 12px 0",
            "&:focus-within": {
              boxShadow: "0 0 0 2px rgba(33, 150, 243, 1)",
            },
          },
          "& .icon-rounded": {
            backgroundColor: "#EFEFEF",
            borderRadius: "50%",
          },
          "&.tabs-container": {
            display: "flex",
            justifyContent: "flex-start",
            gap: "8px",
            marginBottom: "24px",
          },
        },
      },
    },
  },
});
