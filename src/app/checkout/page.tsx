'use client';
import { RootState } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { removeFromCart } from '@/slices/Cartslice';

export default function CheckoutPage() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingCost = 50;
  const total = subtotal + shippingCost;
  const dispatch = useDispatch();
 
  return (
    <div className="checkout container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          {cartItems.map((item) => (
            <Card key={item.id} className="mb-4">
              <CardContent className="flex items-center justify-between p-4">
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
                    <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                    <p className="text-muted-foreground">${item.price.toFixed(2)}</p>
                <button
                     className="border px-4 py-1 rounded-lg bg-primary"
                   onClick={() => dispatch(removeFromCart(item.id))}>Clear From Cart
                 </button>

                  </div>
                  
                </div>
                <p className="text-lg font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                
              </CardContent>
            </Card>
            
          ))}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Order Total</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm mt-2">
            <span>Shipping</span>
            <span>${shippingCost.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold mt-4">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </CardContent>
      </Card>
        </div>
        <div>
        <Card>
          <CardHeader>
            <CardTitle>Payment and Shipping</CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <Input type="text" placeholder="Nouran kh" required />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Shipping Address</label>
                <Input type="text" placeholder="123 Main St" required />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Card Number</label>
                <Input type="text" placeholder="4242" required />
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Expiration Date</label>
                  <Input type="text" placeholder="MM/YY" required />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="Nouran.kh@example.com" required />
              </div>
              <Button type="submit" className="w-full">
                Place Order
              </Button>
            </form>
          </CardContent>
        </Card>
        </div>
      </div>
      
    </div>
  );
}