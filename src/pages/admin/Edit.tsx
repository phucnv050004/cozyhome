import { Container, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductForm from "src/components/ProductForm";
import { useLoading } from "src/contexts/loading";
import { ProductFormParams, TProduct } from "src/interfaces/TProduct";


const AdminEditProduct = () => {
    const { setLoading } = useLoading();
    const nav = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState<TProduct | undefined>();
  
    const getProduct = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`/products/${id}`);
        setProduct(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    useEffect(() => {
      if (!id) return;
      getProduct();
    }, [id]);
  
    const onSubmit = async (values: ProductFormParams) => {
      try {
        await axios.put(`/products/${id}`, values);
        alert("Product updated successfully!");
        nav("/admin");
      } catch (error) {}
    };
  
  return (
    <>
      <Container>
        <Stack gap={2}>
          <Typography variant="h5" sx={{ mt: 9 }} textAlign={"left"}>
            Edit Product
          </Typography>
          <ProductForm onSubmit={onSubmit} initialValues={product} />
        </Stack>
      </Container>
    </>
  )
}

export default AdminEditProduct