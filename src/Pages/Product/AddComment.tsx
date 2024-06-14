import { FC, FormEvent, useState } from 'react'
import style from './Product.module.scss'
import CustomBtn from '../../Components/UI/CustomBtn/CustomBtn'
import addCommentMutation from '../../Services/AddCommentMutation'
import TextArea from '../../Components/UI/CustomTexArea/TextArea'
interface IParams {
  slug: string
}

const AddComment: FC<IParams> = ({ slug }) => {
  const [comment, setComment] = useState('')
  const [title, setTitle] = useState('')
  console.log(comment);

  const addCommentMutationFn = addCommentMutation()

  function addCommentFn(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    addCommentMutationFn.mutateAsync({ slug: slug, content: comment, title: title })
  }

  return (
    <>
      <form action="" className={style.new_comment} onSubmit={(e) => addCommentFn(e)}>
        <input type="text" className={style.input} placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
        <TextArea placeholder='Your comment' type='text' width='100%' height='100px' value={comment} chengeValue={setComment} />
        <CustomBtn height={30} text='Add comment' width={`15%`} />
      </form>
    </>
  )
}

export default AddComment