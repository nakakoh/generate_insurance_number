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
  if (typeof select === "string") {
    return select;
  }
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

function generateInspectionNumber(houbetsuNum, prefectureCode) {
  const n1 = pick(houbetsuNum);
  const n2 = pick(prefectureCode);
  const n3 = rand(3);
  const n4 = n1 + n2 + n3;
  const n5 = n4 + checkdigit(n4);
  return n5;
}

function generateRecipientNumber(num){
  const n1 = qick(num, 6);
  const n2 = n1 + checkdigit(n1);
  return n2;
}

// contextMenuEvent
chrome.runtime.onMessage.addListener(function(request) {
  switch (request.type) {
    case "inspectionNumber":
      inputInspectionNumber(document.activeElement, request);
      break;
    case "recipientNumber":
      inputRecipientNumber(document.activeElement, request);
      break;
  }
});

function inputInspectionNumber(elem, request) {
  console.log(request);
  const generatedNumber = generateInspectionNumber(request.houbetsuNum, request.prefectureCode);
  console.log(request, generatedNumber);
  elem.value = generatedNumber;
  var event = new Event("input");
  elem.dispatchEvent(event);
}

function inputRecipientNumber(elem, request) {
  const generatedNumber = generateRecipientNumber(request.number);
  elem.value = generatedNumber;
  var event = generatedNumber;
  elem.dispatchEvent(event);
}
