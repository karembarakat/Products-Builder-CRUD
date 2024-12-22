import { IProduct } from '../../interfaces';
import { textSlicer } from '../../utils/functions';
import Button from '../ui/Buttons';
import Image from './../Image/index';
interface IProps {
    product : IProduct
}

const ProudctCard = ({ product}: IProps) => {
    const ProductColors = product.colors.map(color => <span className='w-5 h-5 rounded-full' style={{ backgroundColor: color }}/>)
    return (
        <div className="border mx-auto md:mx-0 rounded-md p-2 flex flex-col max-w-sm md:max-w-lg " >

            <Image alt={product.title}
                className='rounded-md'
                imgURL={product.imageURL}
            />
            <h3>{product.title}</h3>
            <p>{textSlicer(product.description)}</p>
            <div className="flex items-center my-4 space-x-2">
                {/* {product.colors} */}
                {ProductColors}
            </div>
            <div className="flex items-center justify-between">
                <span>${product.price}</span>
                <Image alt={product.category.name}
                    className='w-10 h-10 rounded-full'
                    imgURL={product.category.imageURL}
                />
            </div>
            <div className="flex items-center justify-between space-x-5 mt-5">
                <Button className="bg-indigo-700" width='w-full'>Edit</Button>
                <Button className="bg-red-700 ">Delete</Button>
            </div>
        </div>

    )
}

export default ProudctCard 