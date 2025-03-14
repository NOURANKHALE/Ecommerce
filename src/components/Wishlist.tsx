"use client";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import Image from "next/image";
import { removeFromWishlist } from "@/slices/Wishlistslice";
import { useDispatch } from "react-redux";

const Wishlist = () => {
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
  const dispatch = useDispatch();
  const handleremoveFromWishlist = (productId: number) => {
    dispatch(removeFromWishlist(productId));
  };

  return (
    <div className="Wishlist min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold  mb-8">My Wishlist</h2>
        {wishlistItems.length === 0 ? (
          <p className="text-center ">Your wishlist is empty.</p>
        ) : (
          <div className="overflow-x-auto  rounded-lg shadow-md">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium  uppercase">
                    Product name
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium  uppercase">
                    Unit price
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium  uppercase">
                    Stock status
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium  uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y ">
                {wishlistItems.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-primary transition-colors duration-200"
                  >
                    <td className="px-6 py-4 flex items-center">
                      <div className="w-16 h-16 relative flex-shrink-0">
                        <Image
                          src={item.thumbnail}
                          alt={item.title}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-md"
                        />
                      </div>
                      <span className="ml-4 text-sm font-medium ">
                        {item.title}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-green-700">
                      ${item.price}
                    </td>
                    <td className="px-6 py-4 text-sm ">
                      <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        In Stock
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <button
                        onClick={() => handleremoveFromWishlist(item.id)}
                        className="px-4 py-2 bg-red-500  rounded-md hover:bg-red-600 transition-colors duration-300"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
