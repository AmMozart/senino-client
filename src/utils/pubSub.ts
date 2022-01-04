import EventName from './EventName';

type Callback = (payload: any) => void;

interface Channel {
  [eventName: string]: Callback[];
}

class EventBus {
  private channel: Channel = {}

  public subscribe(eventName: EventName, callback: Callback): void {
    if (!this.channel[eventName]) {
      this.channel[eventName] = [];
    }
    this.channel[eventName].push(callback);
  }

  public publish(eventName: EventName, payload: any): void {
    const callbacks = this.channel[eventName];
    if (!callbacks || !callbacks.length) {
      return;
    }

    callbacks.forEach(callback => callback(payload));
  }

}

export default new EventBus();
