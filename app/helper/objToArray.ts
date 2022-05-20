interface ArrType {
  label: string;
  value: string;
}
const objToArray = (obj: object): ArrType[] => {
  var arr = Object.keys(obj).map(function (key) {
    return { value: key, label: obj[key as keyof typeof obj] };
  });

  return arr;
};

export default objToArray;
