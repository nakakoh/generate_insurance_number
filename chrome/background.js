chrome.contextMenus.create({
  "title": "sample",
  "type": "normal",
  "contexts": ["editable"],
  "onclick": function(info) {
    console.log(info);
  }
});
