import * as zod from "zod";
export const RegisterSchema = zod.object({
    username: zod
        .string()
        .min(6, { message: "userName tối thiểu phải 6 kí tự" }),
    email: zod.string().email({ message: "Định dạng email không đúng" }),
    password: zod.string().min(6, { message: "password phải 6 kí tự trở lên" }),
    // confirmPass: zod.string().min(6),
});
// .refine((data) => data.password === data.confirmPass, {
//     message: "Passwords Không Khớp",
//     path: ["confirmPass"],
// });

export const LoginSchema = zod.object({
    email: zod.string().email({ message: "Định dạng email không đúng" }),
    password: zod.string().min(6, { message: "password phải 6 kí tự trở lên" }),
});