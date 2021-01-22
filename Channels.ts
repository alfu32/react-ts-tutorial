import { Subject, Observable, Subscriber, Subscription } from "rxjs";
// feature(channels): #5 : [WIP] rxjs and channels

export class MessageBus {
  channels: { [key: string]: Subject<any> };
  subscribers: { [key: string]: Array<Subscription> };
  private getChannel<T>(channel: string) {
    return (this.channels[channel] =
      this.channels[channel] || new Subject<T>());
  }
  publish<T>(channel: string, packet: T) {
    this.getChannel(channel).next(packet);
  }
  subscribe<T>(channel: string, o: Subscriber<T>) {
    (this.subscribers[channel] = this.subscribers[channel] || []).concat([
      this.getChannel(channel).subscribe(o)
    ]);
  }
  unsubscribe<T>(channel, o: Subscriber<T>) {}
}
