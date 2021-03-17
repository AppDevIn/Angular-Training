import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server-component.component.html',
  styleUrls: ['./server-component.component.css']
})
export class ServerComponentComponent implements OnInit {

  serverId: number = 10
  serverStatus: String = "Offline"

  @Input("server-name") name:String;
  @Input("index") id:String;


  constructor() {
    this.serverStatus = Math.random() > 0.5 ? "Online" : "Offline"
  }

  ngOnInit(): void {
  }

  getServerStatus(){
    return this.serverStatus
  }

  getColor(){
    return this.serverStatus == "Online" ? "green":"red"
  }


}
