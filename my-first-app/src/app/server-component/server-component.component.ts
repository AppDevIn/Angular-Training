import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server-component.component.html',
  styleUrls: ['./server-component.component.css']
})
export class ServerComponentComponent implements OnInit {

  serverId: number = 10
  serverStatus: String = "Offline"

  getServerStatus(){
    return this.serverStatus
  }
  constructor() { }

  ngOnInit(): void {
  }

}