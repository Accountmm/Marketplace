import { FC } from 'react'
interface IParams {
  type: 'text' | 'password' | 'number'
  placeholder: string
  width?: string
  height?: string
  bg?: string
  value?: string | number
  chengeValue?: any
}
const TextArea: FC<IParams> = ({ placeholder, type, height, width, bg, value, chengeValue }) => {
  return (
    <>
      <textarea
        className={`cutom__input ${!!bg?.length && `active`}`}
        placeholder={placeholder}
        typeof={type}
        style={{ width: width, background: bg, height: height }}
        value={value}
        onChange={(e) => chengeValue(e.target.value)}
      />
    </>
  )
}

export default TextArea