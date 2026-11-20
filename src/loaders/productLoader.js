import { categories } from "../data/categories";

export const productLoader = async ({params}) => {
    const category = categories.find((c) =>
        c.products.some((p) => p.id === Number(params.id))
    );
    if (!category) {
        return null;
    }

    const product = category.products.find((p) => p.id === Number(params.id));
    return { product, categoryName: category.name};
}