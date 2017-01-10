function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function deepestChild(){
  const loop = document.getElementById('app').querySelectorAll('#grand-node div')
  return loop[0]
}

function increaseRankBy(n){
 var rankedList = document.getElementById('app').querySelectorAll('.ranked-list')
 var newN = parseInt(n, 10)
   for (let i = 0, l = rankedList.length; i < l; i++) {
   rankedList[i].innerHTML = (i + newN).toString()
  }
}
