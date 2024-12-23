import './index.css'
import ProudctCard from './components/ProudctCard'
import { productList } from './data'
import Modal from './components/ui/Modal';
import { useState } from 'react';
import Button from './components/ui/Buttons/index';

function App() {

  const [isOpen, setIsOpen] = useState(false)

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  //** Render Product */
  const renderProudcutList = productList.map(product => <ProudctCard key={product.id} product={product} />)
  return (
    <>
      <main className="container mx-auto">
        <Button className='bg-green-500' onClick={open}>
          Add Product
        </Button>
        <div className=' m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-2'>
          {renderProudcutList}
        </div>
        <Modal close={close} isOpen={isOpen} title='Add New Product'>
          <div className='flex items-center space-x-3'>
            <Button className='bg-green-500'>
              submit
            </Button>
            <Button className='bg-red-900'>
              Cancel
            </Button>
          </div>
        </Modal>
      </main>
    </>
  )
}

export default App
