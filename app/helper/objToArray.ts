interface ArrType {
  key: string;
  value: string;
}
const objToArray = (obj: object): ArrType[] => {
  var arr = Object.keys(obj).map(function (key) {
    return { key: key, value: obj[key as keyof typeof obj] };
  });

  return arr;
};

export default objToArray;
