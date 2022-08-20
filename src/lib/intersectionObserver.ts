import * as Styles from "../styles/index.module.scss"
import * as CardStyles from "../styles/card.module.scss"

const InterSectionObserver = () => {
  const options: IntersectionObserverInit = {
    root: null,
    rootMargin: "0%",
    threshold: 0
  }

  const observer = new IntersectionObserver(doWhenIntersect, options)

  // 監視対象にしたい要素
  const elements = document.querySelectorAll<HTMLElement>(`.${Styles.sa}`)

  const cardElements = document.querySelectorAll<HTMLElement>(`.${CardStyles.sa}`)

  elements.forEach((element: Element) => {
    observer.observe(element)
  })

  cardElements.forEach((element: Element) => {
    observer.observe(element)
  })

  // 交差したときに呼び出される関数
  function doWhenIntersect(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        addShowClass(entry.target)
      }
    })
  }

  // showクラスを付与する関数
  function addShowClass(element: Element) {
    if (element.getAttribute("class")?.includes("card")) {
      element.classList.add(CardStyles.show)
    }
    element?.classList.add(Styles.show)
  }
}

export default InterSectionObserver
