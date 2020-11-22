export default {
  get: jest.fn(() => {
    return Promise.resolve({ data: { name: "lx" } });
  }),
  post: jest.fn(() => {
    return Promise.resolve({ data: { name: "lx" } });
  }),
};
