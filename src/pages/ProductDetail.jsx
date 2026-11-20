import { useLoaderData, Link } from "react-router-dom";
import NotFound from "./NotFound";
import CartButton from "../components/CartButton";

function ProductDetail() {
    const data = useLoaderData();
    if (!data) {
        <NotFound />
    }
    const { product, categoryName } = data;
    return (
        <main class="page">
            <div className="flex flex-col gap-4 text-pink-800">
                <div className="underline text-left text-lg" >
                    <Link to="/all-products">All Products</Link>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-7 md:gap-10">
                    <img src={product.image} alt={product.name} className="rounded-lg"></img>                        
                    <div className="text-left flex flex-col justify-between gap-5">
                        <div>
                            <div className="flex justify-between">
                                <h3 className="font-extrabold text-2xl">{product.name}</h3>
                                <span className=" bg-pink-900 text-pink-100 px-2 py-1 rounded-lg">{categoryName}</span>
                            </div>
                            
                            <h3 className="font-bold text-xl">by {product.artist}</h3>       
                            <h4>License message</h4>
                        </div>
                        <div>
                            <div className="flex justify-between">
                                <h4>Rs. {product.price}</h4>
                                <div className="flex justify-left">
                                    <p className="pr-4">Quantity:</p>
                                    <p className="w-4 sm:w-8 md-w-12 border-1 px-4"> + </p>
                                    <p className="border-y-1 px-4"> 1 </p>
                                    <p className="w-4 sm:w-8 md-w-12 border-1 px-4"> - </p>
                                </div>                               
                            </div>
                            <CartButton />
                        </div>
                    </div>
                </div>
                <div>
                    <h3>Description</h3>
                    <p>here goes description</p>
                </div>
            </div>
            <section>
                related products section here
            </section>
        </main>
    )
}

export default ProductDetail;