import { Stack, styled } from "@mui/material";

export const HeaderSecond = styled(Stack)`
    background-color: white;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    padding-top: 13px;
    transition: box-shadow 0.3s ease-in-out;

    // &::after {
    //     content: "";
    //     position: absolute;
    //     top: 100%;
    //     left: 0;
    //     right: 0;
    //     height: 10px; /* Adjust height as needed */
    //     background: linear-gradient(
    //         to bottom,
    //         rgba(255, 255, 255, 1),
    //         rgba(255, 255, 255, 0)
    //     );
    //     pointer-events: none;
    //     transition: opacity 0.3s ease-in-out;
    //     opacity: 0;
    // }

    // &:not(.sticky)::after {
    //     opacity: 1;
    // }
`;
export const SubHeaderLeft = styled(Stack)({
    marginLeft: "184px",
});
export const SubHeaderRight = styled(Stack)({
    marginRight: "184px",
});
// ------------------------------Footer-----------------------------------
export const Footers = styled(Stack)({
    borderTop: "1px solid rgba(0, 0, 0, 0.5)",
    marginTop: "10px",
    color: "white",
    borderBottom: "1px solid white",
});
export const PhoneSDT = styled(Stack)({
    marginTop: "10px",
    width: "200px",
    padding: "20px",
    backgroundColor: "black",
    borderTopLeftRadius: "20px",
    borderEndEndRadius: "20px",
    color: "white",
    fontSize: "20px",
});
