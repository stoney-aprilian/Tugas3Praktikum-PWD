const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", function () {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;

  // Muncul saat scroll > 100px atau sudah di bawah
  if (scrollTop > 100 || scrollTop + clientHeight >= scrollHeight - 10) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});

scrollTopBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
