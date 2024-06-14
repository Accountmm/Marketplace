import { useEffect, useState } from 'react'
import CustomSelect from '../../Components/UI/CustomSelect/CustomSelect'
import MainLayout from '../../Layout/MainLayout'
import getCatalogs from '../../Services/getCategorys'
import style from './AddProduct.module.scss'
import { IoIosCloudUpload } from "react-icons/io";
import CustomBtn from '../../Components/UI/CustomBtn/CustomBtn'
import addNewProductMutation from '../../Services/AddProductMutation'
import { IProduct } from '../../Types/ProductsType'

const AddProduct = () => {
  const [isError, setIsError] = useState<boolean>(false)
  const [catalog, setcatalog] = useState<string>('')
  const [active, setActive] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [image, setImage] = useState<any>(null)
  const [slug, setSlug] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [longDescription, setLongDescription] = useState<string>('')
  const [quontity, setQuontity] = useState<string>()
  const [price, setPrice] = useState<string>()
  const [discount, setdiscount] = useState<string>()

  useEffect(() => {
    setSlug(name.toLowerCase())
  }, [name])

  const { data } = getCatalogs()

  const optionsCatlogArr = data?.data.map((el: IProduct) => {
    return { value: el.slug, label: el.name }
  })

  const optionActiveArr = [
    { value: 'Active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' }
  ]

  useEffect(() => {
    if (!!name) {
      setSlug('')
      setSlug(name.toLowerCase())
    }
  }, [name, data])


  function toggleCatalog(obj: any) {
    setcatalog(obj.value)
  }


  function toggleActive(obj: any) {
    setActive(obj.value)
  }

  const addProductMutation = addNewProductMutation()

  function addNewProduct() {
    // if (image) {
    //   const formData = new FormData()
    //   formData.append('img', image)
    // }
    const newProduct = {
      category: catalog,
      image: image,
      active: active,
      long_description: longDescription,
      name: name,
      price: price,
      quantity: quontity,
      short_description: description,
      slug: slug,
      discount: discount,
    }
    console.log(newProduct);

    const newProductJSON = JSON.stringify(newProduct)

    // if (
    //   !description.length
    //   || !longDescription.length
    //   || !catalog
    //   || !active.length
    //   || !name.length
    //   || !image
    //   || !discount
    //   || !price
    //   || !quontity
    // ) {
    //   setIsError(true)
    // } else {
    console.log(newProductJSON);

    setIsError(false)
    addProductMutation.mutateAsync(newProductJSON)
    // clearStates()
    // }
  }

  // function clearStates() {
  //   setDescription('')
  //   setLongDescription('')
  //   setPrice(0)
  //   setQuontity(0)
  //   setcatalog({})
  //   setActive('')
  //   setName('')
  //   setImage(null)
  //   setdiscount(0)
  // }

  return (
    <MainLayout>
      <section className='page'>
        <div className="min-container">

          {
            isError
              ? <div className={style.error}>
                <h1 className={style.error__text}>Please correct the errors below.</h1>
              </div>
              : false
          }

          <form className={style.product__box} >
            <CustomSelect options={optionsCatlogArr} fn={toggleCatalog} />
            <CustomSelect options={optionActiveArr} fn={toggleActive} />
            <input type="text" className={style.input} placeholder='Name' onChange={(e) => setName(e.target.value)} />
            <input type="number" className={style.input} placeholder='Quantity' onChange={(e) => setQuontity(e.target.value)} value={quontity} />
            <input type="number" className={style.input} placeholder='Price' onChange={(e) => setPrice(e.target.value)} value={price} />
            <input type="number" className={style.input} placeholder='Discount' onChange={(e) => setdiscount(e.target.value)} value={discount} />
            <input type="text" className={style.input} placeholder='Description' onChange={(e) => setDescription(e.target.value)} value={description} />
            <textarea className={style.textarea} placeholder='Long descriptoon' onChange={(e) => setLongDescription(e.target.value)} value={longDescription} />
            <label htmlFor="document" className={style.label}>
              <span><IoIosCloudUpload /></span>
              <p className={style.label__text}>Dreg or drop your image </p>
            </label>

            <input
              type="file"
              id='document'
              className={style.input}
              onChange={(e) => {
                const file = e.target.files ? e.target.files[0] : null;
                if (file) {
                  const formData = new FormData()
                  formData.append('img', file)
                  // let img = formData.get('img')
                  setImage(formData);
                }
              }}
            />

          </form>
          <CustomBtn text='Add product' width={180} height={30} mrl='auto' fn={addNewProduct} />
        </div>
      </section>
    </MainLayout >
  )
}

export default AddProduct