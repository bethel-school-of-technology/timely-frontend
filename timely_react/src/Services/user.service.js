import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/';

class UserService {
  getSales() {
    return axios.get(API_URL + 'sales', { headers: authHeader() })
    .then((response) => console.log(response.data));
  }

  getEstimatedSales() {
    return axios.get(API_URL + 'estimate', { headers: authHeader() })
    .then((response) => console.log(response.data));;
  }

  postSunSales(sundaySales,
    sundayDate) {
    return axios.post(API_URL + 'sales', {
      dailySales: sundaySales,
      date: sundayDate,
      weekDay: "Sunday"
    },
      { headers: authHeader() })
  };

  postMonSales(mondaySales,
    mondayDate) {
    return axios.post(API_URL + 'sales', {
      dailySales: mondaySales,
      date: mondayDate,
      weekDay: "Monday"
    },
      { headers: authHeader() })
  };
  postTueSales(tuesdaySales,
    tuesdayDate) {
    return axios.post(API_URL + 'sales', {
      dailySales: tuesdaySales,
      date: tuesdayDate,
      weekDay: "Tuesday"
    },
      { headers: authHeader() })
  }
  postWedSales(wednesdaySales,
    wednesdayDate) {
    return axios.post(API_URL + 'sales', {
      dailySales: wednesdaySales,
      date: wednesdayDate,
      weekDay: "Wednesday"
    },
      { headers: authHeader() })
  }
  postThuSales(thursdaySales,
  thursdayDate) {
    return axios.post(API_URL + 'sales', {
      dailySales: thursdaySales,
      date: thursdayDate,
      weekDay: "Thursday"
    },
      { headers: authHeader() })
  }
  postFriSales(fridaySales,
    fridayDate) {
    return axios.post(API_URL + 'sales', {
      dailySales: fridaySales,
      date: fridayDate,
      weekDay: "Friday"
    },
      { headers: authHeader() })
  }
  postSatSales(saturdaySales,
    saturdayDate) {
    return axios.post(API_URL + 'sales', {
      dailySales: saturdaySales,
      date: saturdayDate,
      weekDay: "Saturday"
    },
      { headers: authHeader() })
  }
}

export default new UserService();