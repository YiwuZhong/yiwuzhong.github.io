// The publications are readable without JavaScript. Build this optional filter
// from the year headings so adding a paper never requires editing this file.
const groups = Array.from(document.querySelectorAll(".year-group"));
const yearFilter = document.querySelector("#year-filter");

for (const group of groups) {
  const year = group.querySelector("h3").textContent.trim();
  yearFilter.add(new Option(year, year));
}

yearFilter.closest("label").hidden = false;
yearFilter.addEventListener("change", () => {
  for (const group of groups) {
    const year = group.querySelector("h3").textContent.trim();
    group.hidden = Boolean(yearFilter.value) && year !== yearFilter.value;
  }
});
