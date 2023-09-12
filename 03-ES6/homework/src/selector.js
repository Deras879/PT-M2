var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if(matchFunc(startEl)){
    resultSet.push(startEl);
  }
  for(let i = 0; i < startEl.children.length; i++){
    resultSet = resultSet.concat(traverseDomAndCollectElements(matchFunc,startEl.children[i]));
  }
  return resultSet;

};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

var selectorTypeMatcher = function (selector) {
  // tu código aquí
  switch (selector[0]) {
    case ".":
       return "class";

    case "#":
      
    return "id"
    default:
      if(selector.includes(".")) return "tag.class";

    return "tag";
  }
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") {
    matchFunction = function(elemento){
      return elemento.id === selector.slice(1);
    }
  } else if (selectorType === "class") {
    matchFunction = function (elemento){
      return elemento.classList.contains(selector.slice(1));
    }
  } else if (selectorType === "tag.class") {
          const tag = selector.split(".")[0];
      const clase = selector.split(".")[1];
    matchFunction =function (elemento){

      return elemento.tagName.toLowerCase() === tag && elemento.classList.contains(clase);
    }
  } else if (selectorType === "tag"){
    matchFunction = function (elemento){
      return elemento.tagName.toLowerCase() === selector;
    }
  }
  return matchFunction;
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
