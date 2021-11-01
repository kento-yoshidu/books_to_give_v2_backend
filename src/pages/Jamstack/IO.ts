const Styles = require("./style.module.scss")

const IO = () => {
  const boxes = document.querySelectorAll(`.${Styles.view}`);
  console.log(boxes)

  const options = {
    root: null,
    rootMargin: "-50% 0px",
    threshold: 0
  }

  const observer = new IntersectionObserver(doWhenIntersect, options);

  boxes.forEach(box => {
    observer.observe(box)
  })

  function doWhenIntersect(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activateIndex(entry.target)
      }
    })
  }

  function activateIndex(element) {
    // すでにアクティブになっている目次を選択
    const currentActiveIndex = document.querySelector(`#viewList .${Styles.active}`);
    console.log(currentActiveIndex)

    // すでにアクティブになっているものが0個の時（=null）以外は、activeクラスを除去
    if (currentActiveIndex !== null) {
      currentActiveIndex.classList.remove(Styles.active);
    }
    // 引数で渡されたDOMが飛び先のaタグを選択し、activeクラスを付与
    //const newActiveIndex = document.querySelector(`a[href='#${element.id}']`);
    const newActiveIndex = document.querySelector(`li[data-li='${element.id}']`);
    newActiveIndex.classList.add(Styles.active);
  }
}

export default IO