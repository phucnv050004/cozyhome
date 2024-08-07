import { Button, styled } from "@mui/material";

export const ButtonOk = styled(Button)({
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 37,
    padding: "0 20px",
});

export const ButtonCancel = styled(Button)(
    () => `
  background-color: #000;
  color: #fff;
  &:hover {
    background-color: #000;
    opacity: 0.6;
  }
  `
);
