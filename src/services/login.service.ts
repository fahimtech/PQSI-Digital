import { Injectable } from '@angular/core';
import { userAccounts, userData } from 'src/common/constants';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  validateLogin(credentials: userData) {
    const matchingRecord = userAccounts.filter((data) => {
      return (data.email === credentials.email && data.password === credentials.password)
    })
    return matchingRecord.length !== 0;
  }

}
