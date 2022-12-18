function getGeneratorID(): () => number {
  let id = 0;
  return function () {
    return id++;
  };
}

const getID = getGeneratorID();
export default getID;
