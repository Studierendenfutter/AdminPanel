export default function logout_if_response_401(response) {
  if (response.status === 401) {
    window.localStorage.removeItem("authToken");
    window.location.href = "/";
  }
}
