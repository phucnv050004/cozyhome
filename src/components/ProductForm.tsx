import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormHelperText,
    InputLabel,
    MenuItem,
    Select,
    Stack,
} from "@mui/material";
import { ValidationErrors } from "final-form";
import { Field, Form } from "react-final-form";
import { ProductFormParams } from "src/interfaces/TProduct";
import { InputText } from "./elements/InputText";

type ProductFormProps = {
    onSubmit: (values: ProductFormParams) => void;
    initialValues?: any;
};
function ProductForm({ onSubmit, initialValues }: ProductFormProps) {
    const validate = (values: ProductFormParams) => {
        const { title, image, category, price, description } = values;
        const errors: ValidationErrors = {};
        if (!title) errors.title = "Can nhap title vao";
        if (title && title.length < 5)
            errors.title = "Can nhap it nhat 5 ky tu vao";
        if (!description) errors.description = "Can nhap description vao";
        if (!image) errors.image = "Can nhap image vao";
        if (!category) errors.category = "Can nhap category vao";
        if (!price) errors.price = "Can nhap price vao";

        return errors;
    };
    return (
        <>
            <Form
                onSubmit={onSubmit}
                validate={validate}
                initialValues={initialValues}
                render={({ values }) => {
                    return (
                        <Stack>
                            <Field
                                name="title"
                                render={({ input, meta }) => (
                                    <InputText
                                        input={input}
                                        label={"Title"}
                                        messageError={
                                            meta.touched && meta.error
                                        }
                                    />
                                )}
                            />
                            <Field
                                name="image"
                                render={({ input, meta }) => (
                                    <InputText
                                        input={input}
                                        label={"Image"}
                                        messageError={
                                            meta.touched && meta.error
                                        }
                                    />
                                )}
                            />
                            <Field<string>
                                name="description"
                                render={({ input, meta }) => (
                                    <InputText
                                        input={input}
                                        label={"Description"}
                                        messageError={
                                            meta.touched && meta.error
                                        }
                                    />
                                )}
                            />
                            <Field<number>
                                name="price"
                                render={({ input, meta }) => (
                                    <InputText
                                        input={input}
                                        label={"price"}
                                        messageError={
                                            meta.touched && meta.error
                                        }
                                        type="number"
                                    />
                                )}
                            />
                            <Field<string>
                                name="isShow"
                                type="checkbox"
                                render={({ input }) => {
                                    return (
                                        <FormControlLabel
                                            control={<Checkbox {...input} />}
                                            label="Show Product"
                                        />
                                    );
                                }}
                            />
                            <Field<string>
                                name="category"
                                render={({ input, meta }) => {
                                    return (
                                        <FormControl fullWidth>
                                            <InputLabel>Category</InputLabel>
                                            <Select
                                                label="Category"
                                                {...input}
                                              
                                            >
                                                <MenuItem value="">
                                                    Select
                                                </MenuItem>
                                                <MenuItem
                                                    value={
                                                        "6686aaacafa549adadce6cf3"
                                                    }
                                                >
                                                    Bàn
                                                </MenuItem>
                                                <MenuItem
                                                    value={
                                                        "6686ab2d1e5d143c414e09ed"
                                                    }
                                                >
                                                    Ghế
                                                </MenuItem>
                                            </Select>
                                            {meta.touched && meta.error && (
                                                <FormHelperText>
                                                    {meta.error}
                                                </FormHelperText>
                                            )}
                                        </FormControl>
                                    );
                                }}
                            />

                            <Button
                                type="submit"
                                variant="contained"
                                sx={{ mt: 2 }}
                                onClick={() => onSubmit(values)}
                            >
                                Submit
                            </Button>
                        </Stack>
                    );
                }}
            />
        </>
    );
}

export default ProductForm