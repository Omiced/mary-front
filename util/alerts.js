export const showAlert = function (message, el) {
  const alert = `
    <div class="alert alert-success mt-3" role="alert">
        ${message}
    </div>
  `;

  el.insertAdjacentHTML("beforeend", alert);
};
