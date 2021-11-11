import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"

const Styles = require("./styles/style.module.scss")
const ModalStyles = require("./styles/modal.module.scss")

const Image1 = () => (
  <StaticImage
    src="./images/image01.webp"
    alt="hoge"
    className={Styles.imgWrapper}
  />
)

const Modal = () => {
  const [show, setShow] = useState(false)
  const [imgNumber, setImgNumber] = useState<number>(0)

  const toggleShow = (e) => {
    setImgNumber(e.target.dataset.img)

    setShow(!show)
  }

  return (
  <>

  {show &&
    <div className={ModalStyles.overlay}>
      <div className={ModalStyles.content}>
        <StaticImage
          src={`./images/image01.webp`}
          alt="hoge"
          className={Styles.imgWrapper}
        />
        {imgNumber} <br />
        <button onClick={toggleShow}>CLOSE</button>
      </div>
    </div>
  }

  <div>
    <button onClick={toggleShow}>Click</button>
  </div>

  <section className={`${Styles.section} ${Styles.sec3}`} id="photograph">
    <div className={Styles.sectionTitleParent}>
      <h2 className={`${Styles.title} ${Styles.sectionTitle}`}>Photograph</h2>
    </div>

    <div className={Styles.wrapper}>
      <StaticImage
        src="./images/image01.webp"
        alt="hoge"
        className={Styles.imgWrapper}
        onClick={toggleShow}
        data-img="1"
      />

      <StaticImage
        src="./images/image02.webp"
        alt="hoge"
        className={Styles.imgWrapper}
        onClick={toggleShow}
        data-img="2"
      />
      <StaticImage
        src="./images/image03.webp"
        alt="hoge"
        className={Styles.imgWrapper}
        onClick={toggleShow}
        data-img="3"
      />
      <StaticImage
        src="./images/image04.webp"
        alt="hoge"
        className={Styles.imgWrapper}
        onClick={toggleShow}
        data-img="4"
      />
    </div>
  </section>
  </>
  )
}

export default Modal