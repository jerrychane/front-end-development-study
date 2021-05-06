describe("函数基本的API测试",function() {
  it('+1函数是否可用',() => {
    expect(window.add(3)).toBe(4);
  })
})