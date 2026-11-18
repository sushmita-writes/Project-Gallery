import { ShoppingCart } from "lucide-react";

function CartButton() {
    return (
        <button className="mt-2 py-1 w-full bg-pink-900 rounded-sm text-pink-200 flex gap-2 items-center justify-center">
            <ShoppingCart className="h-4 sm:h-6 md:h-8 lg:h-10" />
        </button>
    )
}

export default CartButton;