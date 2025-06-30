import {
  AdministrativeManagementTeacher1,
  AdministrativeManagementTeacher2,
  AdministrativeManagementTeacher3,
  AdministrativeManagementTeacher4,
  InformationSystemsTeacher1,
  InformationSystemsTeacher2,
  InformationSystemsTeacher3,
  InformationSystemsTeacher4,
  AccountingTeacher1,
  CivilConstructionTeacher1,
  ElectronicsTeacher1,
  ElectronicsTeacher2,
  ElectronicsTeacher3,
  ElectricityTeacher1,
  MechanicsTeacher1,
  MechatronicsTeacher1,
  MechatronicsTeacher3,
  MechatronicsTeacher2,
} from "@/images";

export const teachersData = [
  {
    type: "administrative-management",
    teachers: [
      {
        image: AdministrativeManagementTeacher1,
        name: "Lic. Negron Alvarado Elmer Augurio",
        college: "Universidad Inca Garcilaso de la Vega",
      },
      {
        image: AdministrativeManagementTeacher2,
        name: "Lic. Razo Quispe José Luis",
        college: "Universidad Ricardo Palma",
      },
      {
        image: AdministrativeManagementTeacher3,
        name: "Lic. Ramirez Chuquihuanga Luis Alberto",
        college: "Universidad Nacional de Piura",
      },
      {
        image: AdministrativeManagementTeacher4,
        name: "Ing. Econ. Soto Calderon Oscar",
        college: "Universidad Cientifica del Sur",
      },
    ],
  },
  {
    type: "information-systems",
    teachers: [
      {
        image: InformationSystemsTeacher1,
        name: "Lic. Arones Huaman Cesar Benicio",
        college: "Universidad Nacional Federico Villarreal",
      },
      {
        image: InformationSystemsTeacher2,
        name: "Ing. Huanasca Rivas David Cornelio",
        college: "Universidad Nacional Federico Villarreal",
      },
      {
        image: InformationSystemsTeacher3,
        name: "Ing. Sistemas Gutierrez Barahona Jose Diomedes",
        college: "Universidad Nacional Federico Villarreal",
      },
      {
        image: InformationSystemsTeacher4,
        name: "Ing. Sistemas Palomino Tarazona Shirley",
        college: "Universidad Nacional Federico Villarreal",
      },
    ],
  },
  {
    type: "accounting",
    teachers: [
      {
        image: AccountingTeacher1,
        name: "Ing. Vanessa Correa Pino",
        college: "Trabajo en el Ministerio de Educacion.",
      },
    ],
  },
  {
    type: "civil-construction",
    teachers: [
      {
        image: CivilConstructionTeacher1,
        name: "Arq. Azahuanche Asmat Virginia Libertad",
        college: "Universidad Nacional Federico Villarreal",
      },
    ],
  },
  {
    type: "electronics",
    teachers: [
      {
        image: ElectronicsTeacher1,
        name: "Universidad Nacional Federico Villarreal",
        college: "Universidad Nacional Federico Villarreal",
      },
      {
        image: ElectronicsTeacher2,
        name: "Lic. Meza Rodriguez Felix Celso",
        college: 'Universidad Nacional de Educación "Enrique Guzmán y Valle"',
      },
      {
        image: ElectronicsTeacher3,
        name: "Lic Inga Peña Aulo Wilfredo",
        college: 'Universidad Nacional de Educación "Enrique Guzmán y Valle"',
      },
    ],
  },
  {
    type: "electricity",
    teachers: [
      {
        image: ElectricityTeacher1,
        name: "Ing. Vanessa Correa Pino",
        college: "Trabajo en el Ministerio de Educacion.",
      },
    ],
  },
  {
    type: "mechanics",
    teachers: [
      {
        image: MechanicsTeacher1,
        name: "Lic. Quihui Ynga Francisco",
        college: 'Universidad Nacional de Educación "Enrique Guzmán y Valle"',
      },
    ],
  },
  {
    type: "mechatronics",
    teachers: [
      {
        image: MechatronicsTeacher1,
        name: "Lic. Blas Navarro Wilder",
        college: 'Universidad Nacional Enrique Guzman y Valle "La Cantuta"',
      },
      {
        image: MechatronicsTeacher2,
        name: "Ing. Mecánico Rojas Saldaña Alfredo Manuel",
        college: "Universidad Nacional del Callao",
      },
      {
        image: MechatronicsTeacher3,
        name: "Ing. Mec. Palomares Anselmo Jim Andrew",
        college: "Universidad Nacional de Ingenieria",
      },
    ],
  },
];
