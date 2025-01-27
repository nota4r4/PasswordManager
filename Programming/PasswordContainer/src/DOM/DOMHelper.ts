let $ = (id : string) => { // Get element function that handles null
  let element = document.getElementById(id)
  if(element == null) throw id + " is null!";
  return element;
 };

 let $$ = (ids : string[]) => { //Get a list of elements
   let elementList = [];
   for(let element = 0; element < ids.length; element++) elementList.push($(ids[element]));
   return elementList;
 }

export function disableStatus(l: HTMLInputElement[], status: boolean) {
  for(let i = 0; i < l.length; i++) l[i].disabled = status;
}

export function goTo(url: string) {
  document.location.href = url;
}

export function removeAllChildren(elem : HTMLElement) {
  // remove existsing childen
  while(elem.children.length > 0) {
    let child = elem.children.item(0);
    if(child == null) break; //no more children anyway
    child.remove();
  }
}

export {$, $$, };
