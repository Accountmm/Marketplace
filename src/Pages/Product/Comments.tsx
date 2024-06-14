import { FC } from 'react'
import getProductComments from '../../Services/getProductComments'
import style from './Product.module.scss'
import AddComment from './AddComment'
import { IComment } from '../../Types/Comment'
interface IParams {
  slug: string
}

const Comments: FC<IParams> = ({ slug }) => {
  const { data } = getProductComments({ slug })
  console.log(slug);

  // const numberOfComments = data?.data[0] ? data?.data[0] : 0
  const commentsArr: IComment[] = data?.data[1]



  return (
    <>
      <div className={style.comments}>
        <div className="container">
          <div className={style.comments__box}>
            {
              commentsArr
                ? commentsArr.map(el => (
                  <div className={style.comments__box__comment}>
                    <h3 className={style.comments__box__comment_title}>{el.title}</h3>
                    <p className={style.comments__box__comment_text}>{el.content}</p>
                  </div>
                ))
                : false
            }
            <AddComment slug={slug} />
          </div>
        </div>
      </div >
    </>
  )
}

export default Comments