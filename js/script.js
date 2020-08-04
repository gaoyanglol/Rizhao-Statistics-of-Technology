
function toggleNav(item, num) {
  var siblings = []
  var contSiblings = []
  var locator = document.getElementById("locator")
  var contentList = document.getElementById("tag-main").childNodes
  var li = item.parentNode
  var children = li.parentNode.childNodes

  for (var i = 0 ; i < children.length ; i++) {
    if (children[i].nodeType == 1 && children[i] != li) {
      siblings.push(children[i])
    }
  }
  for (var i = 0 ; i < siblings.length ; i ++) {
    siblings[i].setAttribute("class", "")
  }
  li.setAttribute("class", "selected")

  if (num == 1) {
    locator.style = "left:10%; visibility: visible"
    document.getElementById("tag-main").style = "visibility: visible"
    document.getElementById("policy-wrapper").setAttribute("class", "content-wrapper show")
    for (var i = 0 ; i < contentList.length ; i++) {
      if (contentList[i].nodeType == 1 && contentList[i].getAttribute("id") != "policy-wrapper") {
        contSiblings.push(contentList[i])
      }
    }
    for (var i = 0 ; i < contSiblings.length ; i++) {
      contSiblings[i].setAttribute("class", "content-wrapper")
    }
  } else if (num == 2) {
    locator.style = "left:30%; visibility: visible"
    document.getElementById("tag-main").style = "visibility: visible"
    document.getElementById("achievement-wrapper").setAttribute("class", "content-wrapper show")
    for (var i = 0 ; i < contentList.length ; i++) {
      if (contentList[i].nodeType == 1 && contentList[i].getAttribute("id") != "achievement-wrapper") {
        contSiblings.push(contentList[i])
      }
    }
    for (var i = 0 ; i < contSiblings.length ; i++) {
      contSiblings[i].setAttribute("class", "content-wrapper")
    }
  } else if (num == 3) {
    locator.style = "left:50%; visibility: visible"
    document.getElementById("tag-main").style = "visibility: visible"
    document.getElementById("enterprise-wrapper").setAttribute("class", "content-wrapper show")
    for (var i = 0 ; i < contentList.length ; i++) {
      if (contentList[i].nodeType == 1 && contentList[i].getAttribute("id") != "enterprise-wrapper") {
        contSiblings.push(contentList[i])
      }
    }
    for (var i = 0 ; i < contSiblings.length ; i++) {
      contSiblings[i].setAttribute("class", "content-wrapper")
    }
  } else if (num == 4) {
    locator.style = "left:70%; visibility: visible"
    document.getElementById("tag-main").style = "visibility: visible"
    document.getElementById("expert-wrapper").setAttribute("class", "content-wrapper show")
    for (var i = 0 ; i < contentList.length ; i++) {
      if (contentList[i].nodeType == 1 && contentList[i].getAttribute("id") != "expert-wrapper") {
        contSiblings.push(contentList[i])
      }
    }
    for (var i = 0 ; i < contSiblings.length ; i++) {
      contSiblings[i].setAttribute("class", "content-wrapper")
    }
  } else {
    locator.style = "left:90%; visibility: visible"
    document.getElementById("tag-main").style = "visibility: visible"
    document.getElementById("cooperation-wrapper").setAttribute("class", "content-wrapper show")
    for (var i = 0 ; i < contentList.length ; i++) {
      if (contentList[i].nodeType == 1 && contentList[i].getAttribute("id") != "cooperation-wrapper") {
        contSiblings.push(contentList[i])
      }
    }
    for (var i = 0 ; i < contSiblings.length ; i++) {
      contSiblings[i].setAttribute("class", "content-wrapper")
    }
  }
}
