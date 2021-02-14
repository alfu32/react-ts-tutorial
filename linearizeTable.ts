export function linearizeObject(obj){
  if(
      (typeof obj === "string" ||
        typeof obj === "number" ||
        typeof obj === "undefined" ||
        typeof obj === "boolean") &&
      !Array.isArray(obj)
    ){
      return JSON.stringify(obj);
    } else if(!Array.isArray(obj)) {
      return JSON.stringify(obj);
    } else if(obj.length === 0){
      return '-';
    } else {
      let head = Object.keys(obj[0]);
      let body = [];
    }
}
function type_of(obj) {
  if(
      (typeof obj === "string" ||
        typeof obj === "number" ||
        typeof obj === "undefined" ||
        typeof obj === "boolean") &&
      !Array.isArray(obj)
    ) return 'primitive';
  if(Array.isArray(obj)) {
    if(obj.length === 0) return 'array-empty';
    if(type_of(obj[0]) === 'object') return 'table';
    const itemHasSubarrays = obj.reduce((has,obj)=>{
      return has && 
    },true)
  }
  if(typeof obj === 'object' && obj !=null) return 'object';
  else return 'object-empty'
}
