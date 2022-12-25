//за допомоги рекурсії перебрати структуру сторінки.
// зробити об'єкт, всі заголовки покласти в (масив) характеристику headings,
// всі параграфи покласти в характеристику (масив) paragraphs

//const headings = [];
//const paragraphs = [];
//
//function explorer(htmlElement) {
//    console.log(htmlElement);
//    if (htmlElement.tagName === "H1" || htmlElement.tagName === "H2" || htmlElement.tagName === "H3" || htmlElement.tagName === "H4" || htmlElement.tagName ==="H5" || htmlElement.tagName === "H6" ) {
//        headings.push(htmlElement.innerText)
//    }
//    if (htmlElement.tagName === "P") {
//        paragraphs.push(htmlElement.innerText)
//    }
//    const children = htmlElement.children;
//    if (children.length !== 0) {
//        for (const child of children) {
//            explorer(child)
//        }
//    }
//}
//explorer(document.body)
//console.log(headings, paragraphs)