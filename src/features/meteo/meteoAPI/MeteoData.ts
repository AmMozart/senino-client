export interface ReceiveData {
  temp: {
    day: number;
    night: number;
  };
  humidity: number;
  speed: number;
  pressure: number;
  weather: Array<{ icon: string }>;
  dt: number;
  icon: string;
}

class MeteoData {
  public temp = 0;
  public humidity = 0;
  public wind = 0;
  public pressure = 0;
  public icon = '';
  public date = '';

  constructor(receiveData: ReceiveData) {
    this.temp = Math.floor(receiveData.temp.day);
    this.humidity = receiveData.humidity;
    this.wind = Math.floor(receiveData.speed);
    this.pressure = Math.floor(receiveData.pressure * 0.76);
    this.icon = receiveData.weather[0].icon;
    this.date = this.getStringDate(new Date(receiveData.dt * 1000));
  }

  private getStringDate(date: Date): string {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day < 10 ? '0' + day : day}.
            ${month < 10 ? '0' + month : month}.
            ${year}`;
  }
}

export default MeteoData;
