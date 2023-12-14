import { builder } from '@builder.io/sdk'
import ProductView from '@/components/ProductView/ProductView';
import ProductsGrid from '../components/ProductGrid/ProductGrid'
import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default async function Home() {
  const navList = await builder.get('navbar', {
    options: {
        query: {
          'name': 'List 1'
        }
    }
  }).promise();

  const slidesList = await builder.get('hero', {
    options: {
      query: {
        'name': 'hero1'
      }
    }
  });
  
  const productsList = await builder.get('products-list').promise();

  const navItems = navList?.data?.links || [];
  const productsItems = productsList?.data?.products || [];
  
  return (
    <main>
      <Navbar links={navItems}/>
      <Hero imageUrl={slidesList?.data?.imageUrl} title={slidesList?.data?.title} />
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
    </main>
  )
}
