import './index.css'
import ProudctCard from './components/ProudctCard'
import { formInputsList, productList, } from './data'
import Modal from './components/ui/Modal';
import { ChangeEvent, FormEvent, useState } from 'react';
import Button from './components/ui/Buttons/index';
import Input from './components/ui/Input';
import { IProduct } from './interfaces';
import { productValidation } from './components/validation';

function App() {

  const defProductObj = {
    title: '',
    description: '',
    imageURL: '',
    price: '',
    colors: [],
    category: {
      name: '',
      imageURL: ''
    }
  }
  const [isOpen, setIsOpen] = useState(false)
  /* -------------------- State -------------------*/

  const [product, setProduct] = useState<IProduct>(defProductObj)

  /* -------------------- Handler -------------------*/

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target
    setProduct({
      ...product,
      [name]: value
    })
  }

  const onCancel = () => {
    console.log('cancel');
    setProduct(defProductObj)
    close();
  }
  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const errors = productValidation({ description: product.description, imageURL: product.imageURL, title: product.title, price: product.price })
    console.log(errors);
    console.log(product);
  }

  //** Render Product */
  const renderProudcutList = productList.map(product => <ProudctCard key={product.id} product={product} />)
  const renderFormInputList = formInputsList.map(input =>
    <div className="flex flex-col" key={input.id}>
      <label className='mb-[1px] text-sm font-medium text-gray-500' htmlFor={input.id}>{input.label}</label>

      <Input id={input.id} name={input.name} type='text' value={product[input.name]} onChange={onChangeHandler} />
    </div>
  )

  return (
    <>
      <main className="container mx-auto">
        <Button className='bg-green-500' onClick={open}>
          Add Product
        </Button>
        <div className=' m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-2' >
          {renderProudcutList}
        </div>
        <Modal close={close} isOpen={isOpen} title='Add New Product'>
          <form className="space-y-3" onSubmit={submitHandler}>
            {renderFormInputList}
            <div className='flex items-center space-x-3'>
              <Button className='bg-red-700'>
                submit
              </Button>
              <Button className='bg-gray-500' onClick={onCancel}>
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
