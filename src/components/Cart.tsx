"use client";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { removeFromCart, updateQuantity } from "@/slices/Cartslice";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";

export default function Cart() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const { isSignedIn } = useUser();
  const router = useRouter();

  const { subtotal, shippingCost, total } = useMemo(() => {
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shippingCost = 50; 
    const total = subtotal + shippingCost;
    return { subtotal, shippingCost, total };
  }, [cartItems]);

  const handleRemoveFromCart = (productId: number) => {
    dispatch(removeFromCart(productId));
  };

  const handleQuantityChange = (productId: number, quantity: number) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id: productId, quantity }));
    }
  };

  const handleClearCart = () => {
    cartItems.forEach((item) => dispatch(removeFromCart(item.id)));
  };

  const handleProceedToCheckout = () => {
    if (isSignedIn) {
      router.push("/checkout");
    } else {
      router.push("/sign-in");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">
        Shopping Cart ({cartItems.length} items)
      </h1>
      {cartItems.length === 0 ? (
        <p className="text-muted-foreground">Your cart is empty.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 border rounded-lg shadow-sm"
              >
                <div className="flex items-center space-x-4">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    width={80}
                    height={80}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div>
                    <h2 className="text-lg font-semibold">{item.title}</h2>
                    <p className="text-sm text-gray-500">
                      Category: {item.category}
                    </p>
                    <p className="text-muted-foreground">${item.price}</p>
                  </div>
                </div>
                <div className="Quantity control flex items-center space-x-4">
                  <button
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    className="px-3 py-1 border rounded-lg  hover:bg-primary"
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span className="w-10 text-center">{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    className="px-3 py-1 border rounded-lg  hover:bg-primary"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 transition-colors duration-200"
                    aria-label="Remove item"
                  >
                     <Trash2 className="w-5 h-5" /> 
                  </button>
                </div>
              </div>
            ))}
            <div className="flex justify-between">
              <Link
                href="/products"
                className="border px-4 py-2 rounded-lg bg-primary hover:bg-green-500"
              >
                Continue Shopping
              </Link>
              <button
                className="border px-4 py-2 rounded-lg bg-primary hover:bg-green-500"
                onClick={handleClearCart}
              >
                Clear Cart
              </button>
            </div>
          </div>
          <div className="p-4 border rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Cart Totals</h2>
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm mt-2">
              <span>Shipping</span>
              <span>Flat Rate: ${shippingCost.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold mt-4">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button
              className="w-full mt-4  py-2 rounded-lg bg-primary hover:bg-green-500"
              onClick={handleProceedToCheckout}
            >
              Proceed To Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}