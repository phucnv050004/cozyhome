import { zodResolver } from "@hookform/resolvers/zod";
import {
  Alert,
  Button,
  CircularProgress,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { TUser } from "src/interfaces/TUser";
import { LoginSchema } from "src/validate/auth";
import { BoxAuthForm, DescLeft, DescRight, TextNameShop } from "./styled";
import { useLoading } from "src/contexts/loading";

const Login = () => {
  const nav = useNavigate();
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertSeverity, setAlertSeverity] = useState<"success" | "error">(
    "success"
  );
  const {loading, setLoading} = useLoading();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TUser>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit: SubmitHandler<TUser> = async (data) => {
    try {
      const result = await axios.post("/auth/login", data);
      setAlertMessage("Đăng Nhập thành công!");
      setAlertSeverity("success");
      localStorage.setItem("user", JSON.stringify(result.data));
      setLoading(true);
      setTimeout(() => {
        nav("/admin");
      }, 1000);
    } catch (error) {
      const AxiosErrors = error as AxiosError;
      const errorMessage =
        typeof AxiosErrors?.response?.data === "string"
          ? AxiosErrors.response.data
          : "Đăng Nhập thất bại!";
      setAlertMessage(errorMessage);
      setAlertSeverity("error");
    }
  };

  return (
    <>
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
        <Stack
          alignItems="center"
          justifyContent="center"
          height="100vh"
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.8)",
          }}
        >
          <CircularProgress />
          <Typography mt={2}>Loading...</Typography>
        </Stack>
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
                  Trang web của chúng tôi mang đến cho bạn những bộ sưu tập nội
                  thất độc đáo và hiện đại, giúp bạn dễ dàng tạo nên không gian
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
                  Login
                </Typography>
                <Stack width={"60%"} sx={{ margin: "auto" }}>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack gap={2}>
                      <TextField
                        id="email"
                        label="Email"
                        {...register("email", {
                          required: true,
                        })}
                        autoComplete="email"
                        autoFocus
                      />
                      {errors.email && (
                        <Typography color={"red"}>
                          {errors.email.message}
                        </Typography>
                      )}
                      <TextField
                        id="password"
                        type="password"
                        label="Password"
                        {...register("password", {
                          required: true,
                        })}
                        autoComplete="current-password"
                        sx={{
                          outline: "none",
                          border: "0px solid white",
                        }}
                      />
                      {errors.password && (
                        <Typography color={"red"}>
                          {errors.password.message}
                        </Typography>
                      )}

                      <Button
                        type="submit"
                        variant="contained"
                        sx={{
                          backgroundColor: "blue",
                        }}
                      >
                        Đăng Nhập
                      </Button>
                    </Stack>
                    <Stack>
                      <Typography
                        sx={{
                          fontSize: "30px",
                          textAlign: "center",
                        }}
                      >
                        -- --
                      </Typography>
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "green",
                          width: "200px",
                          marginLeft: "100px",
                        }}
                      >
                        <a style={{ textDecoration: "none", color: "white" }} href="/register">
                        <Link
                          to="/register"
                          style={{
                            textDecoration: "none",
                            color: "white",
                          }}
                        >
                          Đăng Kí
                        </Link>
                        </a>
                      
                      </Button>
                    </Stack>
                  </form>
                </Stack>
              </DescRight>
            </Stack>
          </BoxAuthForm>
        </>
      )}
    </>
  );
};

export default Login;
