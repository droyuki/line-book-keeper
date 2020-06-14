function textHandler(text) {
  const strWithOneSpace = /^[^\s]+\s[\d]+$/;

  if (strWithOneSpace.test(text)) {
    const [item, money] = text.split(" ");
    return `你居然花 $${money} 買 ${item}!!`;
  } else {
    return "啥？";
  }
}

module.exports = textHandler;
