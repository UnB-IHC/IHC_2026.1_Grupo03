function setupChecklistProgress() {
  const content = document.querySelector(".md-content");
  if (!content) {
    return;
  }

  const checkboxes = Array.from(
    content.querySelectorAll(".task-list-item input[type='checkbox']")
  );

  if (!checkboxes.length) {
    return;
  }

  const storageKey = `acessweb-checklist:${window.location.pathname}`;
  const savedState = JSON.parse(localStorage.getItem(storageKey) || "{}");
  const countElement = content.querySelector("[data-checklist-count]");
  const progressBar = content.querySelector("[data-checklist-bar]");
  const resetButton = content.querySelector("[data-checklist-reset]");

  function updateProgress() {
    const checked = checkboxes.filter((checkbox) => checkbox.checked).length;
    const total = checkboxes.length;
    const percent = total ? Math.round((checked / total) * 100) : 0;

    if (countElement) {
      countElement.textContent = `${checked}/${total} itens concluídos (${percent}%)`;
    }

    if (progressBar) {
      progressBar.value = percent;
    }
  }

  checkboxes.forEach((checkbox, index) => {
    checkbox.disabled = false;
    checkbox.checked = savedState[index] === true;

    if (checkbox.dataset.checklistBound === "true") {
      return;
    }

    checkbox.dataset.checklistBound = "true";
    checkbox.addEventListener("change", () => {
      savedState[index] = checkbox.checked;
      localStorage.setItem(storageKey, JSON.stringify(savedState));
      updateProgress();
    });
  });

  if (resetButton && resetButton.dataset.checklistBound !== "true") {
    resetButton.dataset.checklistBound = "true";
    resetButton.addEventListener("click", () => {
      checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
      });
      localStorage.removeItem(storageKey);
      Object.keys(savedState).forEach((key) => {
        delete savedState[key];
      });
      updateProgress();
    });
  }

  updateProgress();
}

if (typeof document$ !== "undefined") {
  document$.subscribe(setupChecklistProgress);
} else {
  document.addEventListener("DOMContentLoaded", setupChecklistProgress);
}
