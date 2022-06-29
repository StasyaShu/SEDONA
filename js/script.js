    const link = document.querySelector(".modal-search");
    const modal = document.querySelector(".modal-open");
    modal.classList.remove("open-action");
    modal.classList.add("close-action");

    link.addEventListener("click", function (evt) {
      evt.preventDefault();
      modal.classList.toggle("open-action");
      modal.classList.toggle("close-action");
    });
