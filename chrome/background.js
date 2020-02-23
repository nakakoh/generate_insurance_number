const insurances = [
  { houbetsuNum: "random", name: "ランダム" },
  { houbetsuNum: "", name: "[] 国民健康保険(国保)" },
  { houbetsuNum: "", name: "[] 特別療養費(特療費)" },
  { houbetsuNum: "", name: "[] 退職特別療養費(退特療費)" },
  { houbetsuNum: "01", name: "[01] 協会けんぽ(協会)" },
  { houbetsuNum: "02", name: "[02] 船員保険(船員)" },
  { houbetsuNum: "03", name: "[03] 一般療養(一般)" },
  { houbetsuNum: "04", name: "[04] 特別療養(特別)" },
  { houbetsuNum: "06", name: "[06] 組合健保(組合)" },
  { houbetsuNum: "07", name: "[07] 自衛官等保険(自官)" },
  { houbetsuNum: "31", name: "[31] 国家公務員共済組合(国公)" },
  { houbetsuNum: "32", name: "[32] 地方公務員共済組合(地公)" },
  { houbetsuNum: "33", name: "[33] 警察共済組合(警察)" },
  { houbetsuNum: "34", name: "[34] 公立・私立学校共済(学校)" },
  { houbetsuNum: "39", name: "[39] 後期高齢者医療(後期高齢者)" },
  { houbetsuNum: "39", name: "[39] 後期高齢者医療特別療養費(後期特療費)" },
  { houbetsuNum: "63", name: "[63] 特例退職（組合健保）(退組合)" },
  { houbetsuNum: "67", name: "[67] 退職者医療（国保）(退国保)" },
  { houbetsuNum: "72", name: "[72] 特例退職（国家公務員）(退国公)" },
  { houbetsuNum: "73", name: "[73] 特例退職（地方公務員）(退地公)" },
  { houbetsuNum: "74", name: "[74] 特例退職（警察）(退警察)" },
  { houbetsuNum: "75", name: "[75] 特例退職（学校）(退学校)" }
];

const publicInsurances = [
  { houbetsuNum: "random", name: "ランダム" },
  { houbetsuNum: "10", name: "[10] 感染症（３７条の２）(感３７の２)" },
  { houbetsuNum: "11", name: "[11] 感染症（結核入院）(結核入院)" },
  { houbetsuNum: "12", name: "[12] 生活保護(生活保護)" },
  { houbetsuNum: "13", name: "[13] 戦傷病者（療養給付）(戦傷傷病)" },
  { houbetsuNum: "14", name: "[14] 戦傷病者（更正）(戦傷更正)" },
  { houbetsuNum: "15", name: "[15] 自立支援医療（更生）(更生)" },
  { houbetsuNum: "16", name: "[16] 自立支援医療（育成）(育成)" },
  { houbetsuNum: "17", name: "[17] 児童福祉（療養医療）(児童療育)" },
  { houbetsuNum: "18", name: "[18] 原爆認定疾病(原爆認定)" },
  { houbetsuNum: "19", name: "[19] 原爆一般疾病(原爆一般)" },
  { houbetsuNum: "20", name: "[20] 精神措置入院(精神入院)" },
  { houbetsuNum: "21", name: "[21] 自立支援医療（精神通院）(精神通院)" },
  { houbetsuNum: "23", name: "[23] 母子家庭(養育)" },
  { houbetsuNum: "24", name: "[24] 療養介護医療(療養介護)" },
  { houbetsuNum: "25", name: "[25] 中国残留邦人等支援(残留邦人等)" },
  { houbetsuNum: "28", name: "[28] 感染症（１類・２類）(感染症入院)" },
  { houbetsuNum: "29", name: "[29] 新感染症(新感染)" },
  { houbetsuNum: "30", name: "[30] 心神喪失者等医療(心神喪失)" },
  { houbetsuNum: "38", name: "[38] 肝がん・重度肝硬変治療研究促進事業医療(肝がん治療)" },
  { houbetsuNum: "38", name: "[38] 肝炎治療特別促進事業医療(肝炎治療)" },
  { houbetsuNum: "51", name: "[51] 特定疾患（負担有り）(特定負有)" },
  { houbetsuNum: "51", name: "[51] 特定疾患（負担無し）(特定負無)" },
  { houbetsuNum: "52", name: "[52] 小児慢性特定疾病医療(小児特定)" },
  { houbetsuNum: "53", name: "[53] 児童保護措置(児童保護)" },
  { houbetsuNum: "54", name: "[54] 難病医療(難病)" },
  { houbetsuNum: "62", name: "[62] 特定Ｂ型肝炎ウイルス感染者医療(Ｂ型肝炎)" },
  { houbetsuNum: "66", name: "[66] 石綿健康被害救済(石綿)" },
  { houbetsuNum: "79", name: "[79] 障害児施設医療(障害児施設)" }
];

function getGenerateInspectionNumberClickHandler(info, tab, houbetsuNum, prefectureCode) {
  if (houbetsuNum === "random") {
    const candidates = insurances.filter(e => e.houbetsuNum !== "random");
    houbetsuNum = candidates[Math.floor(Math.random() * candidates.length)].houbetsuNum;
  }
  chrome.tabs.sendMessage(tab.id, { houbetsuNum, prefectureCode });
}

function getGeneratePublicInspectionNumberClickHandler(info, tab, houbetsuNum, prefectureCode) {
  if (houbetsuNum === "random") {
    const candidates = publicInsurances.filter(e => e.houbetsuNum !== "random");
    houbetsuNum = candidates[Math.floor(Math.random() * candidates.length)].houbetsuNum;
  }
  chrome.tabs.sendMessage(tab.id, { houbetsuNum, prefectureCode });
}

function randomPrefectureCode() {
  return String(Math.floor(Math.random() * 47) + 1).padStart(2, '0');
}

chrome.contextMenus.create({
  id: "insurances",
  contexts: ["editable"],
  title: "保険者番号の生成"
});

insurances.forEach(insurance => {
  chrome.contextMenus.create({
    parentId: "insurances",
    title: insurance.name,
    contexts: ["editable"],
    onclick: (info, tab) => {
      getGenerateInspectionNumberClickHandler(
        info,
        tab,
        insurance.houbetsuNum,
        randomPrefectureCode()
      );
    }
  });
});

chrome.contextMenus.create({
  id: "publicInsurances",
  contexts: ["editable"],
  title: "公費の生成"
});

publicInsurances.forEach(insurance => {
  chrome.contextMenus.create({
    parentId: "publicInsurances",
    title: insurance.name,
    contexts: ["editable"],
    onclick: (info, tab) => {
      getGeneratePublicInspectionNumberClickHandler(
        info,
        tab,
        insurance.houbetsuNum,
        randomPrefectureCode()
      );
    }
  })
});

chrome.contextMenus.create({
  id: "recipientNum",
  contexts: ["editable"],
  title: "受給者番号の生成（ランダム）"
});
