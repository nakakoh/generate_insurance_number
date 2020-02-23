document.addEventListener("DOMContentLoaded", () => {
  document.forms.hltins.addEventListener("submit", evt => {
    evt.preventDefault();
    const f = evt.currentTarget;
    const generatedNum = generateInspectionNumber(f.$n1, f.$n2);
    const result = f.querySelector(".result");
    result.innerHTML = generatedNum;
  });

  document.forms.pubins.addEventListener("submit", evt => {
    evt.preventDefault();
    const f = evt.currentTarget;
    const generatedNum = generateInspectionNumber(f.$n1, f.$n2);
    const result = f.querySelector(".result");
    result.innerHTML = generatedNum;
  });

  document.forms.insnum.addEventListener("submit", evt => {
    evt.preventDefault();
    const f = evt.currentTarget;
    const generatedNum = generateRecipientNumber(f.$n1.value);
    const result = f.querySelector(".result");
    result.innerHTML = generatedNum;
  });

  Array.from(document.querySelectorAll(".copies")).forEach(element => {
    async function writeText(str) {
      try {
        await navigator.clipboard.writeText(str);
      } catch (e) {
        throw e;
      }
    }
    const result = element.querySelector(".result");
    const copied = element.querySelector(".copied");
    result.addEventListener("click", evt => {
      const contents = result.innerHTML;
      writeText(contents)
        .then(() => {
          copied.innerHTML = "Copied";
          setTimeout(() => (copied.innerHTML = ""), 1000);
        })
        .catch(console.error.bind(null));
    });
  });
});
