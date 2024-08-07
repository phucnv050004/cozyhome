
import { zodResolver } from "@hookform/resolvers/zod";
import { Alert, Button, CircularProgress, Stack, TextField, Typography } from "@mui/material";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { TUser } from "src/interfaces/TUser";
import { RegisterSchema } from "src/validate/auth";
import { BoxAuthForm, DescLeft, DescRight, TextNameShop } from "./styled";
import { useLoading } from "src/contexts/loading";

const Register = () => {
    const nav = useNavigate();
    const [alertMessage, setAlertMessage] = useState<string | null>(null);
    const [alertSeverity, setAlertSeverity] = useState<"success" | "error">(
        "success"
    );
    const {loading, setLoading} = useLoading();;
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TUser>({
        resolver: zodResolver(RegisterSchema),
    });

    const onSubmit: SubmitHandler<TUser> = async (data) => {
        try {
            await axios.post("/auth/register", data);
            setAlertMessage("Đăng kí thành công!");
            setAlertSeverity("success");
            setLoading(true);
            setTimeout(() => {
                nav("/login");
            }, 1000);
        } catch (error) {
            const AxiosErrors = error as AxiosError;
            const errorMessage =
                typeof AxiosErrors?.response?.data === "string"
                    ? AxiosErrors.response.data
                    : "Đăng kí thất bại!";
            setAlertMessage(errorMessage);
            setAlertSeverity("error");
        }
    };
  return (
    <Stack alignItems={"center"} mb={10} mt={5}>
            {alertMessage && (
                <Alert
                    sx={{
                        position: "fixed",
                        top: 20,
                        right: 20,
                        zIndex: 1000,
                    }}
                    severity={alertSeverity}
                    onClose={() => setAlertMessage(null)}
                >
                    {alertMessage}
                </Alert>
            )}
            {loading ? (
                <>
                    <Stack
                        alignItems="center"
                        justifyContent="center"
                        height="100vh"
                    >
                        <CircularProgress />
                        <Typography mt={2}>Loading...</Typography>
                    </Stack>
                </>
            ) : (
                <>
                    <img
                        src="../../../public/images/banner_authFrom.jpg"
                        alt=""
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                    />
                    <BoxAuthForm>
                        <Stack
                            direction={"row"}
                            justifyContent={"space-between"}
                            alignItems={"center"}
                        >
                            <DescLeft
                                width={"40%"}
                                sx={{ marginLeft: "190px", marginTop: "30px" }}
                            >
                                <TextNameShop
                                    variant="h3"
                                    sx={{
                                        fontSize: "60px",
                                        fontWeight: "bold",
                                        lineHeight: "1.5",
                                        fontFamily: "montserrat",
                                    }}
                                >
                                    CozyHome
                                </TextNameShop>
                                <Typography
                                    sx={{
                                        lineHeight: "1.9",
                                        fontFamily: "montserrat",
                                    }}
                                >
                                    Trang web của chúng tôi mang đến cho bạn
                                    những bộ sưu tập nội thất độc đáo và hiện
                                    đại, giúp bạn dễ dàng tạo nên không gian
                                    sống đẳng cấp và ấn tượng.
                                </Typography>
                            </DescLeft>
                            <DescRight width={"50%"}>
                                <Typography
                                    variant="h3"
                                    mb={3}
                                    textAlign={"center"}
                                    sx={{
                                        fontWeight: "bold",
                                        fontFamily: "montserrat",
                                    }}
                                >
                                    Register
                                </Typography>
                                <Stack width={"60%"} sx={{ margin: "auto" }}>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <Stack gap={2}>
                                            <TextField
                                                label="Username"
                                                {...register("username", {
                                                    required: true,
                                                })}
                                                autoComplete="username" // Added autocomplete attribute
                                                sx={{
                                                    backgroundColor:
                                                        "rgb(215, 218, 211)",
                                                }}
                                            />
                                            {errors.username && (
                                                <Typography color={"red"}>
                                                    {errors.username.message}
                                                </Typography>
                                            )}

                                            <TextField
                                                label="Email"
                                                {...register("email", {
                                                    required: true,
                                                })}
                                                autoComplete="email" // Added autocomplete attribute
                                            />
                                            {errors.email && (
                                                <Typography color={"red"}>
                                                    {errors.email.message}
                                                </Typography>
                                            )}
                                            <TextField
                                                type="password"
                                                label="Password"
                                                {...register("password", {
                                                    required: true,
                                                })}
                                                autoComplete="password" // Added autocomplete attribute
                                            />
                                            {errors.password && (
                                                <Typography color={"red"}>
                                                    {errors.password.message}
                                                </Typography>
                                            )}

                                            <Button
                                                type="submit"
                                                variant="contained"
                                            >
                                                Đăng Kí
                                            </Button>
                                        </Stack>
                                    </form>
                                </Stack>
                            </DescRight>
                        </Stack>
                    </BoxAuthForm>
                </>
            )}
        </Stack>
  )
}

export default Register