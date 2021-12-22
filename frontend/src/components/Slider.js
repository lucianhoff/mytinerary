import { Carousel } from "react-bootstrap";
import "../style.css";
import CardCarousel from "./CardCarousel";

const Slider = () => {
  const cities = [
    [
      {
        country: "Japan",
        cityName: "Tokyo",
        description:
          "Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples.",
        image:
          "https://by3301files.storage.live.com/y4mINZ-MwDK3a0eN99uovtyfN8qwUNw-D69-ury0iVUmi0PwvJ1CRyyu8I1p7l2M8hEoWfajKzeZiTx6OA4pgnQWfn4fvOF-JbinI6_7yXu0SHVXsM8nckAlbXPQuyaUGAfaHO9HEpFwC1TzpNcaVcT9ytiLuVx4lhSXyA9xWRGxxlMEykWCipLxriiJEO1hgOR?width=4003&height=1900&cropmode=none",
      },
      {
        country: "Japan",
        cityName: "Osaka",
        description:
          "Osaka is a large port city and commercial center on the Japanese island of Honshu. It's known for its modern architecture, nightlife and hearty street food.",
        image:
          "https://by3301files.storage.live.com/y4mq3GU4Y-Q4dGKIm3RJAtlhD-YM5r-hf5iyZM6tAV7ZDBe7pDeElLVzN6q_ArIHMGa0kotw-s64M2d-lDfrwV2lpMzfUqjtfCSqKLh-DVAwZbUEZPakbVkVdfsNAscaV9MDhZYsf9v-rt0FXKPfIkb3idXKtFw-uSVUH_saDTwOyvsKfXgy3Zwum_0IRkiDPpj?width=4003&height=1900&cropmode=none",
      },
      {
        country: "China",
        cityName: "Shanghai",
        description:
          "Shanghai, on China’s central coast, is the country's biggest city and a global financial hub.",
        image:
          "https://by3301files.storage.live.com/y4miOY9ySFDre6obn_c4ic-w6pZpZt2Zyb5mUvKe_hRRWCHwU3IutF0oclH1A_-iG9fdiSB0-F60CCTtzPiWPHMIbMbh9bqEzRgvQQwMxtFBB-3tPdWkf7UESnMVEGXUMQTGBBBvRziba3u65oNP1yFhBDAFMMR3X6YYdwTSq9jXZKcA4V08XunhR4TMfweHlMk?width=4003&height=1900&cropmode=none",
      },
      {
        country: "Thailand",
        cityName: "Bangkok",
        description:
          "Bangkok, Thailand’s capital, is a large city known for ornate shrines and vibrant street life",
        image:
          "https://by3301files.storage.live.com/y4mEx0PZGEuoniJ6Ee8Utmbf5nW157abBmCw6vaIbmQ-OwaNqmWgblhkuwEtA8XaJp00oUXvIut370R5M2DzdYukwX2s0fy9LtmGMU2Fiwxol_HkxqwmSIEDntA8Ercm1-S8oSk6sLogNner83WdMPtdMa-cgKbHrBQZGyakJCAfUJgFao9qsp69aj-Mr0Swd43?width=4003&height=1900&cropmode=none",
      },
    ],
    [
      {
        country: "Germany",
        cityName: "Berlin",
        image:
          "https://by3301files.storage.live.com/y4m4j90plydr_BjWVABCpPF2TjOfc4LtRAEOMNGixl6VDzqIXyUQNbh0VAL8hiWPnu8wx0oXQI4apB36zzJ6mKbnfO-h30bSTMsImUjbeY-SNYD2w1hNGY04IVopkysTMjBkx8exAzgvvdToPPYz9GBsq7wFgLz8AbFerJeDTe7FSk1Y5j9QHRrex6zuEPsm5sZ?width=4003&height=1900&cropmode=none",
      },
      {
        country: "Russia",
        cityName: "Moscow",
        image:
          "https://by3301files.storage.live.com/y4mMtJ6_oFb8Y06xHRu7ceU3fp8gGgxYJv5ojFys4OvFPfGAmrPjnXHhSL5HgPvmwswzqS7zQE4eFbR8zMcyR4u8rUNxVSw4eNO0M41-csqd-VK5BCXgKxIRh0xg74DsrYE90OpCmn1kgw6DhmHBKncCbEcgcTUW3fjP1GoKZuGzFycflSDsc5pjo33N53CEwfp?width=4003&height=1900&cropmode=none",
      },
      {
        country: "UK",
        cityName: "London",
        image:
          "https://by3301files.storage.live.com/y4mAydl8ir1q6Nq4a9e3Dpx7jnulDnIXYQ_1OEzGUiaH9G9Mo4h05WRN4rTepL2lrrQ5X9E0Oce0HOJUzokzB4fqQvT4o7SXPp77yJhdA9TaygTgnrK8ScpNmbPmch492rizc72QCzSDCov7tElDk7bqfP41xd_95Ib55tRfYxTOBkZwpPJqm-P_56G0MRTvY-o?width=4003&height=1900&cropmode=none",
      },
      {
        country: "France",
        cityName: "Paris",
        image:
          "https://by3301files.storage.live.com/y4m-PGvOq83bc_77woHpl9tBhxytHLUIhsO1ZxPgIRZ9zJsD3vJcLygg2qPieZqVhAyqYtEiQKKRsdOm988g_KinLb5fjcDT7Z7JicVPWu8MNazF6YxXB2qoC2xUsQnahGIhjZQ0abLDFvVpg7fxKHiRK-4cvMkOACFZIii2-jVkgPixHXYXK0fKpf4keVQXkSS?width=4003&height=1900&cropmode=none",
      },
    ],
    [
      {
        country: "Mexico",
        cityName: "Guadalajara",
        image:
          "https://by3301files.storage.live.com/y4mM8sAIpOfxJpAHgqfsvhLzBHVxQTQU_GZRN0CdLAiiek-oZKtkOlF-_OE_3-nvUiLUNiuvTxn9d0RrhHwS4rpM_5EWSYFQojFcfJVu7HxYzyJ8olL038f8UMQY-IdnmYwHjVgQyjpaRsGGSGTtIKdQOYei2aum5Qxt2H5ik0yC-BZECSz1LQpDU13ssMEsAIX?width=4003&height=1900&cropmode=none",
      },
      {
        country: "Argentina",
        cityName: "Buenos Aires",
        image:
          "https://by3301files.storage.live.com/y4mW7HNga7voK61BxXK-saXsUuTByxTwGBzRug5xgxVvJuBmfaI6hE2C3ppnRzgYbTxCkk49-6P8RxBvVH-ikTnToObdjA027lYn9JGXmqAbsdEvkvfJzN9TDQWuLEuVD5bXOk6sn5AeOCjxNKNXj_feXa2_gAMWzmdTBybhiuQtTymhjvk6Zv6ga7F3waR14EA?width=4003&height=1900&cropmode=none",
      },
      {
        country: "Brazil",
        cityName: "Rio de Janeiro",
        image:
          "https://by3301files.storage.live.com/y4mYKju1ewOIdtAyABCKnXvARhSUc8SHe_K22ib6xkSar_JWPz06QT55o0oOZYSzdUScUyR-3ke6Ipp5FbtsUd0qDhA5WhDGJe9PG-PV_rkHTDC3nlrLP8rLU64j9TTQHSsKbCA56Uez-VU5t2YHwGl5iqf35TzEk0lYVDyrtwY2XoPbV6UFrwK8HIIcOfRA2yO?width=4003&height=1900&cropmode=none",
      },
      {
        country: "Peru",
        cityName: "Lima",
        image:
          "https://by3301files.storage.live.com/y4mwVbSQutpfTKn2onQ2DHSzs7VdA7UkY5EbspNDDy4-rCJK5kOwsit0djufXi62UJBFBgRPACPL66tlq0utFGTAKyy4xDf3Kc1sU_ZJiMfPC4Fu-UGwmYpm84om2qim-zvZo2JjppGj_O2EEmrsgj8bWz5qMNpg09-TrlXOB5CMAPcnI5LW5KxbkEpgO3JScmU?width=4003&height=1900&cropmode=none",
      },
    ],
  ];

  return (
    <div className="flex justify-center align-center w-full carousel-padding pt-5">
      <Carousel className="pb-10 sm:px-20 md:px-32 lg:px-44 w-full">
        {cities.map((cityAux, index) => {
          return (
            <Carousel.Item key={index}>
              <div className="carouse_custom_item">
                {cityAux.map((city) => {
                  return <CardCarousel key={city.cityName} city={city} />;
                })}
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Slider;
