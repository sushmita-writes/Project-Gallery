import { categories } from "../data/categories";

export const productLoader = async ({params}) => {
    const allProducts = categories.flatMap((category) => category.products);
    const product = allProducts.find((p) => p.id === params.id);

    if (!product) {
        throw new Response("Product not found", { status: 404 });
    }

    return product;
}