import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

const ButtonAction = () => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        if (quantity < 5) {
            setQuantity(quantity + 1);
        }
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
  return (
    <>
    <Box display="flex" alignItems="center">
        <Button
            variant="contained"
            onClick={handleDecrease}
            sx={{
                borderTopLeftRadius: "10px",
                borderEndEndRadius: "10px",
                height: "40px",
                width: "10px",
                backgroundColor: "black",
                fontSize: "20px",
            }}
        >
            -
        </Button>
        <TextField
            value={quantity}
            onChange={(e) => {
                const value = Number(e.target.value);
                if (value >= 1 && value <= 5) {
                    setQuantity(value);
                }
            }}
            type="number"
            inputProps={{
                min: 1,
                max: 5,
                style: { textAlign: "center" },
            }}
            sx={{ width: 60, mx: 1, borderTopLeftRadius: 30 }}
        />
        <Button
            variant="contained"
            onClick={handleIncrease}
            sx={{
                borderTopLeftRadius: "10px",
                borderEndEndRadius: "10px",
                height: "40px",
                width: "10px",
                backgroundColor: "black",
                fontSize: "20px",
            }}
        >
            +
        </Button>
    </Box>
</>
  )
}

export default ButtonAction