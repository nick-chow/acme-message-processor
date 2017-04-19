import { Component, HostListener } from '@angular/core';
import { MdDialogRef} from '@angular/material';
import { Message, MessageType, Gift, MockDataService } from '../index';

@Component({
  selector: 'message-dialog',
  templateUrl: './message-dialog.component.html',
})
export class MessageDialogComponent {
  public giftOptions: Array<Gift> = [];
  public babynameOptions: Array<string> = [];
  public message: Message;

  constructor(private dialogRef: MdDialogRef<MessageDialogComponent>, private mockDataService: MockDataService) {
    this.message = this.dialogRef._containerInstance.dialogConfig.data.message;
    this.giftOptions = this.mockDataService.getMockGifts();
    this.babynameOptions = this.mockDataService.getMockNames();
  }

  public get messageTypeDisplay(): string {
    return this.message.type === MessageType.Wish ? 'Birthday Wish' : 'Congrats on birth of your child';
  }

  public get defaultMessage(): string {
    let gift = this.message.gift;
    let babyName = this.message.babyName;
    let birthdate = this.message.birthdate;
    return this.message.type === MessageType.Wish
      ? this.message.gift !== undefined
        ? `Mate, Happy Birthday. To celebrate this once a year occasion we have picked the following gift: ${gift}. Enjoy.`
        : ''
      : this.message.babyName !== undefined && this.message.birthdate !== undefined
        ? `Whooa well done and congratulations on the birth of ${babyName} on ${birthdate}.`
        : '';
  }

  public submit(): void {
    this.dialogRef.close(this.message);
  }

  @HostListener('keydown.esc')
  public onEsc(): void {
    this.dialogRef.close();
  }

}
