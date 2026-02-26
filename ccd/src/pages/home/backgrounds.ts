import cajazeiras from "../../assets/cajazeiras.jpg";
import pombal from "../../assets/pombal.jpg";
import montehorebe from "../../assets/montehorebe.jpeg"
import sousa from "../../assets/sousa.jpg";
import sousa2 from "../../assets/sousa2.jpg";
import patos from "../../assets/patos.jpg"
export type BackgroundType = {
  id: number;
  name: string;
  url: string;
}

export const backgrounds: BackgroundType[] = [
  {
    id: 1,
    name: "Cajazeiras",
    url: cajazeiras
  },
  {
    id: 2,
    name: "Patos",
    url: patos
  },
  {
    id: 3,
    name: "Pombal",
    url: pombal
  },
  {
    id: 4,
    name: "Sousa",
    url: sousa
  },
  {
    id: 5,
    name: "Monte Horebe",
    url: montehorebe
  },
    {
    id: 6,
    name: "Sousa",
    url: sousa2
  },
];