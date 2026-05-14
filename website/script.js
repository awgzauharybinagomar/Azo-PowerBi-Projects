const iframe = document.getElementById("powerbi-frame");
const placeholder = document.getElementById("placeholder");

function iframeIsConfigured() {
  const src = iframe.getAttribute("src") || "";
  return src && src !== "about:blank" && !src.startsWith("about:");
}

if (iframeIsConfigured()) {
  placeholder.classList.add("hidden");
  iframe.addEventListener("load", () => {
    placeholder.classList.add("hidden");
  });
}
