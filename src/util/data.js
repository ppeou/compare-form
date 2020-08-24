
const createData = (count = 1000) => {
  const data = {};
  for (let i = 1; i <= count; i++) {
    data[`field-${i}`] = `data-${i}`;
  }
  return data;
};

export {createData};