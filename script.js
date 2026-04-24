const promoCountdown = document.getElementById("promoCountdown");

if (promoCountdown) {
  const deadlineText = promoCountdown.dataset.deadline;
  const deadline = deadlineText ? new Date(deadlineText) : null;

  if (deadline && Number.isFinite(deadline.getTime())) {
    const diffMs = deadline.getTime() - Date.now();
    promoCountdown.textContent =
      diffMs > 0
        ? `${Math.ceil(diffMs / (1000 * 60 * 60 * 24))} days left`
        : "Launch discount ended";
  }
}
