import CustomBtn from "../../Components/UI/CustomBtn/CustomBtn";
import CustomInput from "../../Components/UI/CustomInput/CustomInput";
import TextArea from "../../Components/UI/CustomTexArea/TextArea";
import MainLayout from "../../Layout/MainLayout";
import style from "./Contact.module.scss";
import { IMessage } from "../../Types/MessageType";
import { useSendMessageMutation } from "../../Services/MutationMessage";
import { FormEvent, useEffect, useState } from "react";
import { AxiosError } from "axios";

const Contact = () => {
  const [email, setEmail] = useState<string>('')
  const [message, setmessage] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [phone, setPhone] = useState<number | string>('')
  const SendMessageMutation = useSendMessageMutation()
  useEffect(() => {
    setEmail('')
    setmessage('')
    setName('')
    setPhone('')
  }, [])
  async function sendMessage(e: FormEvent) {
    const obj: IMessage = {
      email: email,
      text: message,
      name: name,
      phone: phone
    }
    e.preventDefault()

    try {
      SendMessageMutation.mutateAsync(obj)
    } catch (error) {
      if (error instanceof AxiosError || error instanceof Error) {
        console.warn(error.message);
      }
    }
  }
  return (
    <MainLayout>
      <section className='page'>
        <div className="container">
          <div className={style.contact__box}>
            <form action="" className={style.form} onSubmit={(e) => sendMessage(e)}>
              <div>
                <CustomInput placeholder="Your Name" type="text" bg="#f5f5f5" value={name} chengeValue={setName} />
                <CustomInput placeholder="Your Email" type="text" bg="#f5f5f5" value={email} chengeValue={setEmail} />
                <CustomInput placeholder="Your Phone" type="number" bg="#f5f5f5" value={phone} chengeValue={setPhone} />
              </div>

              <TextArea placeholder="Your Massage" type="text" width="100%" height="300px" bg="#f5f5f5" value={message} chengeValue={setmessage} />
              <CustomBtn text="Send Massage" height={55} width={160} mrl="auto" mt={32} />
            </form>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}

export default Contact