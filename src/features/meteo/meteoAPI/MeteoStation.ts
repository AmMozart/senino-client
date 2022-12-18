import MeteoData, { ReceiveData } from './MeteoData';
import meteoConfig from './meteoConfig';

class MeteoStation {
  private meteoConfig;

  constructor(city = 'Moscow') {
    this.meteoConfig = {
      ...meteoConfig,
      city,
    };
  }

  private getUrl() {
    return (
      'https://api.openweathermap.org/data/2.5/forecast/daily?' +
      `q=${this.meteoConfig.city},${this.meteoConfig.country}&` +
      `mode=${this.meteoConfig.mode}&units=${this.meteoConfig.units}&` +
      `cnt=${this.meteoConfig.count}&APPID=${this.meteoConfig.APPID}`
    );
  }

  public async getMeteoData() {
    const resp = await fetch(this.getUrl(), {});
    if (resp.ok) {
      return await resp
        .json()
        .then((value) => value.list)
        .then((value) => {
          return value.map((data: ReceiveData) => new MeteoData(data));
        });
    }
  }
}

export default new MeteoStation();
