function checkdigit(str) {
  const e = str
    .split("")
    .reverse()
    .reduce((r, n, i) => {
      const m = i % 2 === 0 ? 2 : 1;
      return [...r, ...`${parseInt(n, 10) * m}`.split("")];
    }, [])
    .map(n => parseInt(n, 10))
    .reduce((r, n) => r + n, 0);
  const f = e % 10;
  return f === 0 ? 0 : 10 - f;
}
function rand(n) {
  return Array.from(
    { length: n },
    () => `${Math.floor(Math.random() * 10)}`
  ).join("");
}
function pick(select) {
  const value = `${select.value}`;
  if (value === "random") {
    const options = Array.from(select.options)
      .map(e => e.value)
      .filter(e => e !== "random");
    return options[Math.floor(Math.random() * options.length)];
  } else {
    return value;
  }
}
function qick(str, len) {
  const r = len - str.length;
  return str + (r > 0 ? rand(len - str.length) : "");
}
document.addEventListener("DOMContentLoaded", () => {
  document.forms.hltins.addEventListener("submit", evt => {
    evt.preventDefault();
    const f = evt.currentTarget;
    const n1 = pick(f.$n1);
    const n2 = pick(f.$n2);
    const n3 = rand(3);
    const n4 = n1 + n2 + n3;
    const n5 = n4 + checkdigit(n4);
    const result = f.querySelector(".result");
    result.innerHTML = n5;
  });

  document.forms.pubins.addEventListener("submit", evt => {
    evt.preventDefault();
    const f = evt.currentTarget;
    const n1 = pick(f.$n1);
    const n2 = pick(f.$n2);
    const n3 = rand(3);
    const n4 = n1 + n2 + n3;
    const n5 = n4 + checkdigit(n4);
    const result = f.querySelector(".result");
    result.innerHTML = n5;
  });

  document.forms.insnum.addEventListener("submit", evt => {
    evt.preventDefault();
    const f = evt.currentTarget;
    const n1 = qick(f.$n1.value, 6);
    const n2 = n1 + checkdigit(n1);
    const result = f.querySelector(".result");
    result.innerHTML = n2;
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
