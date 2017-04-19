import { Component } from '@angular/core';
import { Message, MessageDialogComponent, MockDataService } from '../index';
import { MdDialog } from '@angular/material';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html'
})

export class DashboardComponent {
  pending: Message[] = [];
  processed: Message[] = [];

  constructor(public dialog: MdDialog, private mockDataService: MockDataService) {

    let mockMessages = this.mockDataService.getMockMessages();
    this.pending = mockMessages;
  }

  public openDialog(message: Message): void {
    let dialogRef = this.dialog.open(MessageDialogComponent, {
      height: '400px',
      data: {
        message: message
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.processMessage(result);
      }
    });
  }

  private processMessage(message: Message): void {
    this.processed.push(message);
    this.pending = this.pending.filter(d => d.id !== message.id);
  }
}
