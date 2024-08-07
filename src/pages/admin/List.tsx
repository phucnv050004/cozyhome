import AddIcon from "@mui/icons-material/Add";
import {
    Alert,
    Button,
    Paper,
    Snackbar,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography,
} from "@mui/material";
import Pagination from "@mui/material/Pagination";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import ConfirmDialog from "src/components/ConfirmDialog";
import { TProduct } from "src/interfaces/TProduct";

const AdminProductList = () => {
    const [products, setProducts] = useState<TProduct[]>([]);
    const [confirm, setConfirm] = useState(false);
    const [idDelete, setIdDelete] = useState<string | null>(null);
    const [alert, setAlert] = useState<{ open: boolean; message: string }>({
        open: false,
        message: "",
    });
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage] = useState(1);
    const itemsPerPage = 10;
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get("/products");
            console.log(data);
            setProducts(data);
        };
        fetchProducts();
    }, []);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [currentPage]);

    const handleConfirm = (id: string) => {
        setConfirm(true);
        setIdDelete(id);
    };

    const handleDelete = async () => {
        try {
            await axios.delete("/products/" + idDelete);
            setAlert({ open: true, message: "Product deleted successfully!" });
            setProducts(products.filter((product) => product._id !== idDelete));
        } catch (error) {
            console.log(error);
            setAlert({ open: true, message: "Failed to delete product." });
        } finally {
            setConfirm(false);
        }
    };

    const handleCloseAlert = () => {
        setAlert({ open: false, message: "" });
    };

    const handleSearchChange = (e: any) => {
        setSearchTerm(e.target.value);
    };

 

    const filteredData = products.filter((p) =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const paginatedProducts = filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div
            ref={containerRef}
            className="container"
            style={{ position: "relative" }}
        >
            <Typography
                variant="body1"
                sx={{
                    position: "absolute",
                    top: "23px",
                    left: "5px",
                    fontWeight: "bold",
                }}
            >
                DashBoard/product
            </Typography>

            <Stack direction={"row"}>
                <Link
                    to="/admin/product/add"
                    style={{
                        position: "fixed",
                        bottom: "0",
                        right: "0",
                        zIndex: "100",
                        width: "120px",
                        height: "80px",
                        borderRadius: "100px",
                    }}
                >
                    <Button
                        variant="contained"
                        sx={{
                            borderRadius: "60%",
                            width: "50px",
                            height: "60px",
                        }}
                        color="primary"
                    >
                        <AddIcon
                            sx={{ fontSize: "35px", fontWeight: "bold" }}
                        />
                    </Button>
                </Link>
                <Stack
                    width={300}
                    sx={{ marginLeft: "750px", marginBottom: "30px" }}
                >
                    <TextField
                        id="standard-basic"
                        label="Tìm Kiếm Sản Phẩm...."
                        variant="standard"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </Stack>
            </Stack>
            <div>
                <TableContainer component={Paper} sx={{ width: "auto" }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>#</TableCell>
                                <TableCell>Tên</TableCell>
                                <TableCell>Giá</TableCell>
                                <TableCell>Mô tả</TableCell>
                                <TableCell>Category</TableCell>
                                <TableCell>Tác vụ</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {paginatedProducts.map((product, index) => (
                                <TableRow key={product._id}>
                                    <TableCell>
                                        {(currentPage - 1) * itemsPerPage +
                                            index +
                                            1}
                                    </TableCell>
                                    <TableCell>{product.title}</TableCell>
                                    <TableCell>{product.price}</TableCell>
                                    <TableCell>
                                        <img
                                            src={`${product.image}`}
                                            width={80}
                                            alt=" Đợi tí..."
                                        />
                                    </TableCell>
                                    <TableCell>{product.description}</TableCell>
                                    <TableCell>
                                        {product.category.name}
                                    </TableCell>
                                    <TableCell>
                                        <Stack direction={"row"}>
                                            <Link
                                                to={`/admin/product/edit/${product._id}`}
                                            >
                                                <Button
                                                    variant="contained"
                                                    sx={{ mr: 1 }}
                                                    color="warning"
                                                >
                                                    Sửa
                                                </Button>
                                            </Link>
                                            <Button
                                                variant="contained"
                                                color="error"
                                                onClick={() =>
                                                    handleConfirm(product._id)
                                                }
                                            >
                                                Xóa
                                            </Button>
                                        </Stack>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <ConfirmDialog
                        confirm={confirm}
                        onConfirm={setConfirm}
                        onDelete={handleDelete}
                    />
                </TableContainer>
            </div>
            <Pagination
                count={Math.ceil(filteredData.length / itemsPerPage)}
                page={currentPage}
                variant="outlined"
                sx={{ mt: 2, display: "flex", justifyContent: "center" }}
            />
            <Snackbar
                open={alert.open}
                autoHideDuration={3000}
                onClose={handleCloseAlert}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
            >
                <Alert
                    onClose={handleCloseAlert}
                    severity="success"
                    sx={{ width: "100%" }}
                >
                    {alert.message}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default AdminProductList;
