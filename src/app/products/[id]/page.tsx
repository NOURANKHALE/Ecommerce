import { notFound } from 'next/navigation';
import Image from 'next/image';
import { AddToCartButton, AddToWishlistButton } from './Productactions';
import { getProduct } from '@/services/getproductid';
import ProductRating from '@/components/products/Productrating';

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);

  if (!product) {
    notFound(); 
  }

  return (
    <div className="container my-10 mx-auto p-4 w-4/5">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <div className="relative w-full h-96 rounded-lg overflow-hidden">
            <Image
              src={product.thumbnail}
              alt={product.title}
              fill
              className="object-cover"
              priority
              aria-label={`Image of ${product.title}`}
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-4xl font-bold">{product.title}</h1>
          <div className="flex items-center gap-1" aria-label={`Rating: ${product.rating} out of 5`}>
            <ProductRating product={product}/>
          </div>
          <p className="bg-destructive px-2 py-1 rounded text-sm inline-block">
            {product.availabilityStatus}
          </p>
          <p className="text-gray-600">{product.description}</p>
          <div className="flex items-center gap-4">
            <p className="text-2xl font-bold text-primary">${product.price}</p>
            <p className="text-sm text-red-500">{product.discountPercentage}% Off</p>
          </div>
          <div className="flex gap-4">
            <AddToCartButton product={product} />
            <AddToWishlistButton product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}