import { Component, Input, OnChanges, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-status",
  templateUrl: "./status.component.html",
  styleUrls: ["./status.component.css"]
})
export class StatusComponent implements OnChanges {
  @Input() inputFromParentStatus: boolean;
  @Input() inputFromParentTaskName: boolean;

  @Output() notifyParent : EventEmitter<boolean> = new EventEmitter();

  displayMessage: string;

  ngOnChanges() {
    this.displayMessage = this.inputFromParentStatus ? "Active" : "InActive";
    let test= this.inputFromParentTaskName;
  }

  CallToChild() {
    this.notifyParent.emit(this.inputFromParentStatus);
  }

}
