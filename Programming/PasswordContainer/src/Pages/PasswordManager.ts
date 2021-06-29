import {getStoredContainer, Container} from "./../crypto/Container.js";
import {Identity} from "./../Identity.js";
import {log} from "./../crypto/Functions.js";

export class PasswordManager {
  container : Container;
  identities ?: Identity[];
  constructor() {
    // Do things here
    let password = window.sessionStorage.getItem("InternetNomadPassword");
    window.sessionStorage.setItem("InternetNomadPassword", ""); //remove password from sessionStorage

    // should never happen
    if(password == null) throw "Password is null?!?!";

    // Get and unlock Conatiner
    this.container = getStoredContainer();
    this.container.unlock(password).then(() => {
      // after container unlocks
      this.identities = this.container.getIdentites();
      log(this.identities);
      
      //
    }, (error) => {throw error});

    // Do other housekeeping...

  }
}