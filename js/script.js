document.addEventListener('DOMContentLoaded', () => {
  handleMenuToggle()
  handleTabButtonsEvents()
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

function handleTabButtonsEvents() {
  const tabTrips = document.getElementById('tab-trips')
  const tabMeetings = document.getElementById('tab-meetings')
  const tabs = tabTrips.parentElement.children
  const calendarBody = document.getElementById('calendar-body')

  const trips = [
    { date: '11. - 12. 4. 2019', name: 'Výprava' },
    { date: '2. 6. 2019 16:00 - 19:00', name: 'Hra ve městě' },
    { date: '15. - 17. 6. 2019', name: 'Výprava' },
    { date: '30. 6. 2019 - 14. 7. 2019', name: 'Tábor' },
  ]

  const meetings = [
    { date: '5. 6. 2019', name: 'Schůzka družiny Tygrů' },
    { date: '12. 6. 2019', name: 'Schůzka družiny Tygrů' },
    { date: '19. 6. 2019', name: 'Schůzka družiny Tygrů' },
  ]

  function updateTable(events) {
    calendarBody.innerHTML = events
      .map((event) => {
        return `
            <tr>
              <td>${event.date}</td>
              <td>${event.name}</td>
            </tr>`
      })
      .join('\n')
  }

  tabMeetings.addEventListener('click', (_) => {
    updateTable(meetings)
    Array.from(tabs).forEach((tab) => tab.classList.remove('is-active'))
    tabMeetings.classList.add('is-active')
  })

  tabTrips.addEventListener('click', (_) => {
    updateTable(trips)
    Array.from(tabs).forEach((tab) => tab.classList.remove('is-active'))
    tabTrips.classList.add('is-active')
  })

  updateTable(trips)
}
