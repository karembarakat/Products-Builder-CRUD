import './index.css'
import ProudctCard from './components/ProudctCard'
import { formInputsList, productList, } from './data'
import Modal from './components/ui/Modal';
import { useState } from 'react';
import Button from './components/ui/Buttons/index';
import Input from './components/ui/Input';

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
  const renderFormInputList = formInputsList.map(input =>
    <div className="flex flex-col">
      <label className='mb-[1px] text-sm font-medium text-gray-500' htmlFor={input.name}>{input.label}</label>

      <Input id={input.id} name={input.name} type='text' />
    </div>
  )

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
          <form className="space-y-3">
            {renderFormInputList}
            <div className='flex items-center space-x-3'>
              <Button className='bg-red-700'>
                submit
              </Button>
              <Button className='bg-gray-500'>
                Cancel
              </Button>
            </div>
          </form>
        </Modal>
      </main>
    </>
  )
}

export default App
