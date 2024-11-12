const links = document.querySelectorAll('.links a')

for (let link of links) {
  const href = link.getAttribute('href')

  if (window.location.href.includes(href)) {
    link.classList.add('active')
  }
}
