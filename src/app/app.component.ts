import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  person = {};
  personUpdate = {};
  copy = {};

  personListObj = [];
  gendersList: string[] = ['M', 'F', 'Others'];

  public showToggle: boolean = false;
  currentPersonIndex: number;
  private loadComponent = false;

  savePerson() {
    console.log("Persona", this.person)

    this.copy = Object.assign({}, this.person);
    this.personListObj.push(this.copy);

    console.log("listaPersonas", this.personListObj);

    // Cuando guarde limpie los inputs.
    this.person = {};

    // Si antes guardar hice click en modificar, tambien haga el untoggle.
    if (this.showToggle) {
      this.showToggle = !this.showToggle;
    }
  }

  // Limpie los inputs si no quiero guardar.
  cancelPerson(){
    this.person = {};
  }

  deletePerson(i) {
    this.personListObj.splice(i, 1);
    // Si hice click en modificar y elimino sin hacer un cambio, tambien haga el untoggle.
    if (this.showToggle) {
      this.showToggle = !this.showToggle;
    }
  }

  toggleUpdatePerson(i) {
    this.currentPersonIndex = i;
    this.copy = Object.assign({}, this.personUpdate);
    this.copy = this.personListObj[i]
    this.loadMyChildComponent();
    this.showToggle = !this.showToggle;
  }

  loadMyChildComponent() {
    this.loadComponent = true;
  }

  childPersonUpdate(eventChildNewData) {
    this.copy = Object.assign({}, this.personUpdate);
    this.copy = this.personListObj[this.currentPersonIndex];
    this.personListObj[this.currentPersonIndex] = eventChildNewData;
    console.log(eventChildNewData, this.currentPersonIndex);
    this.showToggle = !this.showToggle;

    console.log(this.personListObj);
  }

  toggleButtonCancel(event) {
    this.showToggle = event;
  }

}

