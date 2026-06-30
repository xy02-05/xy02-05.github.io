function setupCopyBibtex() {
  const btn = document.getElementById("copy-bibtex");
  const pre = document.getElementById("bibtex-block");
  if (!btn || !pre) return;
  btn.addEventListener("click", async () => {
    await navigator.clipboard.writeText(pre.textContent.trim());
    const orig = btn.textContent;
    btn.textContent = "Copied!";
    setTimeout(() => (btn.textContent = orig), 1500);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupCopyBibtex();
});
