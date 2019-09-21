import axios from "axios";

class Comm {
  getUserID(secret) {
    console.log(`https://gongfetest.firebaseio.com/secrets/${secret}.json`);
    return axios.get(
      `https://gongfetest.firebaseio.com/secrets/${secret}.json`
    );
  }

  getUserList() {
    if (this.users) {
      return new Promise(resolve => {
        resolve(this.users);
      });
    }
    return axios
      .get(`https://gongfetest.firebaseio.com/users.json`)
      .then(users => {
        this.users = users.data;
        return this.users;
      });
  }

  updateUserData(userID, data) {
    let userIndex = this._getUserIndex();
    if (userIndex === -1) {
      return;
    }
    return axios.patch(
      `https://gongfetest.firebaseio.com/users/${this.getUserIndex(
        userID
      )}.json`,
      data
    );
  }

  deleteUserData(userID, field) {
    let userIndex = this._getUserIndex();
    if (userIndex === -1) {
      return;
    }
    return axios.delete(
      `https://gongfetest.firebaseio.com/users/${userIndex}/${field}.json`
    );
  }

  _getUserIndex(userID) {
    return this.users.findIndex(user => user.id === userID);
  }
}

export default new Comm();
