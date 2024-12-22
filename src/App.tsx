import './index.css'
import ProudctCard from './components/ProudctCard'
import { productList } from './data'

function App() {

  //** Render Product */
  const renderProudcutList = productList.map(product => <ProudctCard key={product.id} product={product} />)
  return (
    <>
      <main className="container mx-auto">

        <div className=' m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-2'>
          {renderProudcutList}
        </div>
      </main>
    </>
  )
}

export default App
