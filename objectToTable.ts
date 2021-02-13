export function objectToTable(obj: object) {
  const primitives = Object.keys(obj).filter(k => {
    return (
      (typeof obj[k] === "string" ||
        typeof obj[k] === "number" ||
        typeof obj[k] === "undefined" ||
        typeof obj[k] === "boolean") &&
      !Array.isArray(obj[k])
    );
  });
  const compound = Object.keys(obj).filter(k => {
    return typeof obj[k] === "object" && !Array.isArray(obj[k]);
  });
  const subtables = Object.keys(obj).filter(k => {
    return (
      Array.isArray(obj[k]) &&
      obj[k].reduce((isobj, crt) => {
        return isobj && typeof crt === "object";
      }, true)
    );
  });
  const head = [...primitives,...compound];
  const row = [
    ...primitives.map(k => obj[k]),
    ...compound.map(k => JSON.stringify(obj[k]))
  ]
  const sections = subtables.reduce(
    (agg,crt) => {
      agg.push(crt);
      agg = [
        ...crt,

      ]
      return agg;
    },[]
  )
}
export function jsonTableToTable(jsonTable: Array<object>){
  const head={};
  jsonTable.forEach(
    r => {
      Object.keys(r).forEach(k => head[k] = k);
    }
  )
  const body = [...Object.keys(head),...jsonTable.map(
    row => {
      return Object.keys(head).map(
        k => typeof(row[k]) === 'undefined' ? '-' : row[k]
      )
    }
  )];
}