const curiosityTitle = document.getElementById("curiosityTitle"),
  curiosityExplanation = document.getElementById("curiosityExplanation"),
  linkContainer = document.querySelector(".linkContainer");

checkCuriosity = () => {
  const urlSearch = window.location.search,
    curiosity = urlSearch.slice(urlSearch.indexOf("=") + 1);
  if (curiosity == "tendency") {
    return 0;
  } else if (curiosity == "field") {
    return 1;
  } else if (curiosity == "studyHow") {
    return 2;
  } else if (curiosity == "firstLang") {
    return 3;
  } else if (curiosity == "start") {
    return 4;
  } else {
    return 5;
  }
};

setTitle = (number) => {
  curiosityTitle.innerText = DataSet[number].title;
};

setExplain = (number) => {
  curiosityExplanation.innerText += DataSet[number].explain;
};

setLinkContainer = (number) => {
  const linkData = DataSet[number].link;
  let i;
  for (i = 0; i < linkData.length; i++) {
    const div = document.createElement("div"),
      span = document.createElement("span"),
      link = document.createElement("a"),
      p = document.createElement("p"),
      data = linkData[i];
    span.innerText = `${data.linkTitle}\n\n-${data.linkPerson}-`;
    link.href = data.linkUrl;
    link.innerText = data.linkUrl;
    p.innerText = data.linkExplain;
    div.appendChild(span);
    div.appendChild(link);
    div.appendChild(p);
    linkContainer.appendChild(div);
  }
};

setPage = (number) => {
  setTitle(number);
  setExplain(number);
  setLinkContainer(number);
};

init = () => {
  const curiosityNumber = checkCuriosity();
  setPage(curiosityNumber);
};

init();
