import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://api.jamskills.ml/api/",
})

const authorizedInstance = axios.create({
  baseURL: "https://api.jamskills.ml/api/",
  /* headers: { Authorization: `Bearer ${localStorage.getItem("userToken")}` } */
})

authorizedInstance.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("userToken")}`
  return config;
});

export const authAPI = {
  login(email, password) {
    console.log(email, password)
    return instance.post(`/testingusers/login`, {
      email,
      password
    })
      .then((response) => {
        console.log(response);
        localStorage.setItem("userToken", response.data.token)
        return response.data;
      })
  },
  logout() {
    return (
      localStorage.removeItem("userToken")
    )
  },

  registration(email, password, first_name, last_name, patronymic) {
    console.log(email, password)
    return instance.post(`/testingusers/registration`, {
      email,
      password,
      first_name,
      last_name,
      patronymic
    })
      .then(response => {
        console.log(response);
        return response.data;
      })
  }
}

export const testsAPI = {
  getAllQuizzes() {
    return authorizedInstance.get(`/testingusers/setquizzes`)
      .then(response => {
        console.log(response.data);
        return response.data;
      })
  },
  getQuizzById(id) {
    console.log(id)
    return authorizedInstance.get(`/testingusers/setquizzes/${id}`)
      .then(response => {
        console.log(response);
        return response.data;
      })
  },
  sendHolQuizzAnswer(id, index, name) {
    console.log(id, index, name)
    return authorizedInstance.post(`/testingusers/setquizzes/${id}/hol/answers`, {
      index,
      name
    })
      .then(response => {
        console.log(response);
        return response.data;
      })
  },
  sendUskQuizzAnswer(id, index, code) {
    console.log(id, index, code)
    return authorizedInstance.post(`/testingusers/setquizzes/${id}/usk/answers`, {
      index,
      code
    })
      .then(response => {
        console.log(response);
        return response.data;
      })
  },
  sendGatb_5QuizzAnswer(id, result) {
    console.log(id, result)
    return authorizedInstance.post(`/testingusers/setquizzes/${id}/gatb_5/answers`, {
      result
    })
      .then(response => {
        console.log(response);
        return response.data;
      })
  },
}