let defaultCity = "上海"
// localStorage 在某些浏览器中不兼容，需要包裹 trycatch
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (error) {
  throw new Error(error)
}
export default {
  city: defaultCity
}
