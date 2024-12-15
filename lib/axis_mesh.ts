const len = 10;
const width = 0.01;
const hw = width / 2;

export const xAxisVertices = () => {
  // x y z
  // prettier-ignore
  return new Float32Array([
        -len, hw, 0, 
        len, hw, 0, 
        -len, -hw, 0, 

        -len, -hw, 0, 
        len, hw, 0, 
        len, -hw, 0, 
    ])
};

export const yAxisVertices = () => {
  // x y z
  // prettier-ignore
  return new Float32Array([
        -hw, len, 0, 
        hw, len, 0, 
        -hw, -len, 0, 

        -hw, -len, 0, 
        hw, len, 0, 
        hw, -len, 0, 
    ])
};
