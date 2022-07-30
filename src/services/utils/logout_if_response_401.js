export default function logout() {
  window.localStorage.removeItem("authToken");
  window.location.href = "/";
}
