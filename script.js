document.addEventListener("DOMContentLoaded", () => {
  const orderButtons = document.querySelectorAll(".btn-success");

  orderButtons.forEach(button => {
    button.addEventListener("click", () => {
      alert("Thanks for your order!Your food will be delivered soon.");
    });
  });
});
