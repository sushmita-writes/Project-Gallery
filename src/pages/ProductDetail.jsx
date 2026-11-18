import { useLoaderData, Link } from "react-router-dom";
import NotFound from "./NotFound";
import { HeartPlus, HeartMinus } from "lucide-react";
import CartButton from "../components/CartButton";

function ProductDetail() {
    const data = useLoaderData();
    if (!data) {
        <NotFound />
    }
    const { product, categoryName } = data;
    return (
        <main class="page">
            <div>
                <Link to="/all-products">All Products</Link>
                <div>
                    <div>
                        <img src={product.image} alt={product.name}></img>
                        <span>{categoryName}</span>
                    </div>
                    <div>
                        <h1>{product.name}</h1>
                        <h2>by {product.artist}</h2>
                        <h3>Rs. {product.price}</h3>
                        <div>
                            <div>
                                <HeartPlus /> 1 <HeartMinus />                                
                            </div>
                            <CartButton />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ProductDetail;