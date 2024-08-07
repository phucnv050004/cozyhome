import { Stack, styled, Typography } from "@mui/material";

export const BoxAuthForm = styled(Stack)({
    marginTop: "100px",
    position: "absolute",
    zIndex: 2,
});
export const DescLeft = styled(Stack)({});
export const DescRight = styled(Stack)({
    marginRight: "150px",
});
export const TextNameShop = styled(Typography)`
    background: linear-gradient(43deg, #4158d0 0%, #c850c0 46%, #ffcc70 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
`;
