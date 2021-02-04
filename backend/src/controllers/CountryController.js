const axios = require("axios");

class CountryController {
  async country(request, response, next) {
    try {
      const { data } = await axios.get("https://freegeoip.app/json/");
      const {
        ip,
        country_code,
        country_name,
        region_code,
        region_name,
        city,
        zip_code,
        time_zone,
        latitude,
        longitude,
        metro_code,
      } = data;

      return response.json([
        {
          ip,
          country_code,
          country_name,
          region_code,
          region_name,
          city,
          zip_code,
          time_zone,
          latitude,
          longitude,
          metro_code,
        },
      ]);
    } catch (error) {
      next(error);
    }
  }

  async blocked(request, response, next) {
    try {
      return response.json([
          { name: "Argentina", code: "AR" },
          { name: "Bolívia", code: "BO" },
          { name: "Brasil", code: "BR" },
          { name: "Chile", code: "CL" },
          { name: "Colômbia", code: "CO" },
          { name: "Equador", code: "EQ" },
          { name: "Guiana", code: "GY" },
          { name: "Paraguai", code: "PY" },
          { name: "Peru", code: "PE" },
          { name: "Suriname", code: "SR" },
          { name: "Uruguai", code: "UY" },
          { name: "Venezuela", code: "VE" },
        ]);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new CountryController();