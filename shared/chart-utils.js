(function () {
  function renderBars(target, items, options) {
    const el = document.querySelector(target);
    if (!el) return;
    const max = Math.max(...items.map((item) => Number(item.value || 0)), 1);
    el.innerHTML = items
      .map((item) => {
        const width = Math.max(5, Math.round((Number(item.value || 0) / max) * 100));
        return `<div class="bar-row"><span>${item.label}</span><div class="bar-track"><i style="width:${width}%"></i></div><strong>${options?.format ? options.format(item.value) : item.value}</strong></div>`;
      })
      .join("");
  }

  window.MapphexCharts = { renderBars };
})();
