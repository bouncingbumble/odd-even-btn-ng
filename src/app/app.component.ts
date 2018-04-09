import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  evenNumbers = [];
  oddNumbers = [];

  onNumber(num: number){
    num % 2 == 0 ? this.evenNumbers.push(num.toString()) : this.oddNumbers.push(num.toString());
  }

  // serverElements = [{
  //   type: 'server',
  //   name: 'Testserver',
  //   content: 'Just a Test'
  // }];
  //
  // onServerAdded(serverData: {serverName: string, serverContent: string}) {
  //   this.serverElements.push({
  //     type: 'server',
  //     name: serverData.serverName,
  //     content: serverData.serverContent
  //   });
  // }
  //
  // onBlueprintAdded(blueprintData: {blueprintName: string, blueprintContent: string}) {
  //   this.serverElements.push({
  //     type: 'blueprint',
  //     name: blueprintData.blueprintName,
  //     content: blueprintData.blueprintContent
  //   });
  // }
}
