// ** PropductObj === ErrorsObj(title,description,price,image)

export const productValidation = (prodct: {
    title: string;
    description: string;
    imageURL: string;
    price: string;
}) => {
    //** Retuns an Obj
    const errors: {
        title: string;
        description: string;
        imageURL: string;
        price: string;
    } = {
        title: '',
        description: '',
        imageURL: '',
        price: '',

    };
    const validUrl = /^(ftp|http|https):\/\/[^ "]+$/.test(prodct.imageURL);

    if (!prodct.title.trim() || prodct.title.length < 10 || prodct.title.length > 80) {
        errors.title = 'Title must be between 10 and 80 characters long';
    }
    if (!prodct.description.trim() || prodct.description.length < 10 || prodct.description.length > 900) {
        errors.description = 'Description must be between 10 and 900 characters long';
    }
    if(!prodct.imageURL.trim() || !validUrl){
        errors.imageURL = "Valid Image URl Is must "
    }
    if (!prodct.price.trim() || isNaN(Number(prodct.price))){
        errors.price = 'Price must be a valid number';
    }

    return errors;
}