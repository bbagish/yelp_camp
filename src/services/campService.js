import http from "./httpService";
import { getJwt } from "./authService";

const apiEndpoint = "/campgrounds";

function campURL(id) {
  return `${apiEndpoint}/${id}`;
}

export function getCamp(campID) {
  return http.get(campURL(campID));
}

export function getCamps() {
  return http.get(apiEndpoint);
}

export function saveCamp(camp) {
  if (camp._id) {
    const body = { ...camp };
    delete body._id;
    return http.put(campURL(camp._id), body, {
      headers: { "x-auth-token": getJwt() }
    });
  }
  return http.post(apiEndpoint, camp, {
    headers: { "x-auth-token": getJwt() }
  });
}
export function deleteCamp(campID) {
  return http.delete(campURL(campID), {
    headers: { "x-auth-token": getJwt() }
  });
}
