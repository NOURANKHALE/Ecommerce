
import { ShoppingCart, Headset, ArrowDownNarrowWide, Car } from "lucide-react";

export const features = [
  {
    icon: <ShoppingCart className="w-10 h-10"  />,
    title: "Free and Fast Delivery",
    description:
      "Enjoy free delivery for all orders over $140. We ensure your products reach you quickly and safely.",
    bgColor: "bg-gradient-to-br from-red-400 to-pink-500",
  },
  {
    icon: <Headset className="w-10 h-10" />,
    title: "24/7 Customer Service",
    description:
      "Our dedicated support team is available around the clock to assist you with any queries or issues.",
    bgColor: "bg-gradient-to-br from-blue-400 to-indigo-500",
  },
  {
    icon: <ArrowDownNarrowWide className="w-10 h-10" />,
    title: "Money Back Guarantee",
    description:
      "We offer a 30-day money-back guarantee. If you are not satisfied, we will refund your purchase.",
    bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500",
  },
  {
    icon: <Car className="w-10 h-10"  />,
    title: "Easy Returns",
    description:
      "Returning products is hassle-free with our easy return policy. We aim to make your experience seamless.",
    bgColor: "bg-gradient-to-br from-green-400 to-teal-500",
  },
];