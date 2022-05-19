const cleanEmptyObj = (obj: object) => {
  const newObj = JSON.parse(JSON.stringify(obj)); // Clone source oect.

  Object.keys(newObj).forEach((key) => {
    if (newObj[key] && typeof newObj[key] === "object")
      newObj[key] = cleanEmptyObj(newObj[key]); // Recurse.
    else if (
      newObj[key] === undefined ||
      newObj[key] === null ||
      newObj[key] === " " ||
      newObj[key] === ""
    )
      delete newObj[key]; // Delete undefined and null.
    else newObj[key] = newObj[key]; // Copy value.
  });

  return newObj; // Return new object.
};

export { cleanEmptyObj };
