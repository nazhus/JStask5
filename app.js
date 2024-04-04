const acc = document.querySelectorAll(".accordion");

for (i=0; i<acc.length; i++) {
    acc[i].addEventListener('click', function () {
      this.classList.toggle('active');
})
}