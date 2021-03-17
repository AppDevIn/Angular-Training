import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  allowNewServer: boolean = false
  serverCreationStatus: String = "No server has been created"
  serverName = "Server 01"
  serverCreated: boolean = false
  servers = []


  ngOnInit(): void {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000)
  }

  onCreateServer(){
    this.serverCreationStatus = `Server has been created! Name is ${this.serverName}`
    this.serverCreated = true
    this.servers.push(this.serverName)
  }


}
