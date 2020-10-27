export default function getAdminHeaders() {
  const token = JSON.parse(window.localStorage.getItem("authToken"));

  return { authorization: "Bearer " + token.token };
}
