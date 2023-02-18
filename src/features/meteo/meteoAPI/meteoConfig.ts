interface MeteoConfig {
  city: string;
  country: string;
  mode: string;
  units: string;
  count: number;
  APPID: string;
}

const meteoConfig: MeteoConfig = {
  city: 'Moscow',
  country: 'RU',
  mode: 'json',
  units: 'metric',
  count: 3,
  APPID: '325d99ea2e22daeef5ec93a29f623c0e',
};

export default meteoConfig;
