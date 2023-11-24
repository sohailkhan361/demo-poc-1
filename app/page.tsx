import ProductView from '@/components/ProductView/ProdusctView';
import ProductsGrid from '../components/ProductGrid/ProductGrid'
import { BuilderElement, builder } from '@builder.io/sdk'

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default async function Home() {
  const productsList = await builder.get('products-list').promise();
  const productsItems = productsList?.data?.products || [];

  // console.log(productsList?.data?.products[0]?.product);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ProductView
        cover={productsItems[0]?.product?.image}
        title={productsItems[0]?.product?.name}
        description={productsItems[0]?.product?.description}
        rank={productsItems[0]?.product?.salesrank}
        author={productsItems[0]?.product?.author}
        releaseDate={productsItems[0]?.product?.releaseDate}
      />
      <div className='flex flex-col justify-center p-2 m-4 shadow-md w-full'>
        <div className='flex justify-center p-4 m-4 font-extrabold text-2xl border-t-2'>
          <h1>Explore More Titles...</h1>
        </div>
        <ProductsGrid products={productsItems}/>
      </div>
    </main>
  )
}
