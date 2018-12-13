import http from "./httpService";

const apiEndpoint = "/camgrounds";

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
    return http.put(campURL(camp._id), body);
  }
  return http.post(apiEndpoint, camp);
}

export function deleteCamp(campID) {
  return http.delete(campURL(campID));
}
