document.addEventListener('DOMContentLoaded', () => {
  handleMenuToggle()
})

function handleMenuToggle() {
  const burgers = document.querySelectorAll('.navbar-burger')
  burgers.forEach((burger) => {
    burger.addEventListener('click', () => {
      toggleMenu(burger)
    })
  })
  document.querySelectorAll('.navbar-menu').forEach((menu) => {
    menu.addEventListener('click', () => {
      burgers.forEach((burger) => {
        toggleMenu(burger)
      })
    })
  })

  function toggleMenu(burger) {
    burger.classList.toggle('is-active')
    const menu = document.getElementById(burger.dataset.target)
    menu.classList.toggle('is-active')
  }
}
