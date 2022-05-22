import { v4 as uuidv4 } from 'uuid';

const colorsData = [
  {
    paletteName: 'Material UI Colors',
    id: 'material-ui-colors',
    emoji: '🎨',
    colors: [
      { name: 'red', color: '#F44336', id: 12345 },
      { name: 'pink', color: '#E91E63', id: 12346 },
      { name: 'purple', color: '#9C27B0', id: 12347 },
      { name: 'deeppurple', color: '#673AB7', id: 12348 },
      { name: 'indigo', color: '#3F51B5', id: 12349 },
      { name: 'blue', color: '#2196F3', id: 12350 },
      { name: 'lightblue', color: '#03A9F4', id: 12351 },
      { name: 'cyan', color: '#00BCD4', id: 123451 },
      { name: 'teal', color: '#009688', id: 123452 },
      { name: 'green', color: '#4CAF50', id: 123453 },
      { name: 'lightgreen', color: '#8BC34A', id: 123454 },
      { name: 'lime', color: '#CDDC39', id: 123455 },
      { name: 'yellow', color: '#FFEB3B', id: 123456 },
      { name: 'amber', color: '#FFC107', id: 123457 },
      { name: 'orange', color: '#FF9800', id: 123458 },
      { name: 'deeporange', color: '#FF5722', id: 123459 },
      { name: 'brown', color: '#795548', id: 1234560 },
      { name: 'grey', color: '#9E9E9E', id: 1234561 },
      { name: 'bluegrey', color: '#607D8B', id: 1234562 },
    ],
  },
  {
    paletteName: 'Flat UI Colors v1',
    id: 'flat-ui-colors-v1',
    emoji: '🤙',
    colors: [
      { name: 'Turquoise', color: '#1abc9c', id: 1234563 },
      { name: 'Emerald', color: '#2ecc71', id: 1234564 },
      { name: 'PeterRiver', color: '#3498db', id: 1234565 },
      { name: 'Amethyst', color: '#9b59b6', id: 1234566 },
      { name: 'WetAsphalt', color: '#34495e', id: 1234567 },
      { name: 'GreenSea', color: '#16a085', id: 1234568 },
      { name: 'Nephritis', color: '#27ae60', id: 1234569 },
      { name: 'BelizeHole', color: '#2980b9', id: 1234570 },
      { name: 'Wisteria', color: '#8e44ad', id: 1234571 },
      { name: 'MidnightBlue', color: '#2c3e50', id: 1234572 },
      { name: 'SunFlower', color: '#f1c40f', id: 1234573 },
      { name: 'Carrot', color: '#e67e22', id: 1234574 },
      { name: 'Alizarin', color: '#e74c3c', id: 1234575 },
      { name: 'Clouds', color: '#ecf0f1', id: 1234576 },
      { name: 'Concrete', color: '#95a5a6', id: 1234577 },
      { name: 'Orange', color: '#f39c12', id: 1234578 },
      { name: 'Pumpkin', color: '#d35400', id: 1234579 },
      { name: 'Pomegranate', color: '#c0392b', id: 1234580 },
      { name: 'Silver', color: '#bdc3c7', id: 1234581 },
      { name: 'Asbestos', color: '#7f8c8d', id: 1234582 },
    ],
  },
  {
    paletteName: 'Flat UI Colors Dutch',
    id: 'flat-ui-colors-dutch',
    emoji: '🇳🇱',
    colors: [
      { name: 'Sunflower', color: '#FFC312', id: 161 },
      { name: 'Energos', color: '#C4E538', id: 162 },
      { name: 'BlueMartina', color: '#12CBC4', id: 163 },
      { name: 'LavenderRose', color: '#FDA7DF', id: 164 },
      { name: 'BaraRose', color: '#ED4C67', id: 165 },
      { name: 'RadiantYellow', color: '#F79F1F', id: 166 },
      { name: 'AndroidGreen', color: '#A3CB38', id: 167 },
      { name: 'MediterraneanSea', color: '#1289A7', id: 168 },
      { name: 'LavenderTea', color: '#D980FA', id: 169 },
      { name: 'VerryBerry', color: '#B53471', id: 1670 },
      { name: 'PuffinsBill', color: '#EE5A24', id: 1671 },
      { name: 'PixelatedGrass', color: '#009432', id: 1672 },
      { name: 'MerchantMarineBlue', color: '#0652DD', id: 1673 },
      { name: 'ForgottenPurple', color: '#9980FA', id: 1674 },
      { name: 'HollyHock', color: '#833471', id: 1675 },
      { name: 'RedPigment', color: '#EA2027', id: 1676 },
      { name: 'TurkishAqua', color: '#006266', id: 1677 },
      { name: 'LeaguesUnderTheSea', color: '#1B1464', id: 1678 },
      { name: 'CircumorbitalRing', color: '#5758BB', id: 1679 },
      { name: 'MagentaPurple', color: '#6F1E51', id: 1680 },
    ],
  },
  {
    paletteName: 'Flat UI Colors American',
    id: 'flat-ui-colors-american',
    emoji: '🇺🇸',
    colors: [
      { name: 'LightGreenishBlue', color: '#55efc4', id: 171 },
      { name: 'FadedPoster', color: '#81ecec', id: 172 },
      { name: 'GreenDarnerTail', color: '#74b9ff', id: 173 },
      { name: 'ShyMoment', color: '#a29bfe', id: 174 },
      { name: 'CityLights', color: '#dfe6e9', id: 175 },
      { name: 'MintLeaf', color: '#00b894', id: 176 },
      { name: 'RobinsEggBlue', color: '#00cec9', id: 177 },
      { name: 'ElectronBlue', color: '#0984e3', id: 178 },
      { name: 'ExodusFruit', color: '#6c5ce7', id: 179 },
      { name: 'SoothingBreeze', color: '#b2bec3', id: 1780 },
      { name: 'SourLemon', color: '#ffeaa7', id: 1781 },
      { name: 'FirstDate', color: '#fab1a0', id: 1782 },
      { name: 'PinkGlamour', color: '#ff7675', id: 1783 },
      { name: 'Pico8Pink', color: '#fd79a8', id: 1784 },
      { name: 'AmericanRiver', color: '#636e72', id: 1785 },
      { name: 'BrightYarrow', color: '#fdcb6e', id: 1786 },
      { name: 'OrangeVille', color: '#e17055', id: 1787 },
      { name: 'Chi-Gong', color: '#d63031', id: 1788 },
      { name: 'PrunusAvium', color: '#e84393', id: 1789 },
      { name: 'DraculaOrchid', color: '#2d3436', id: 1790 },
    ],
  },
  {
    paletteName: 'Flat UI Colors Aussie',
    id: 'flat-ui-colors-aussie',
    emoji: '🇦🇺',
    colors: [
      { name: 'Beekeeper', color: '#f6e58d', id: 181 },
      { name: 'SpicedNectarine', color: '#ffbe76', id: 182 },
      { name: 'PinkGlamour', color: '#ff7979', id: 183 },
      { name: 'JuneBud', color: '#badc58', id: 184 },
      { name: 'CoastalBreeze', color: '#dff9fb', id: 185 },
      { name: 'Turbo', color: '#f9ca24', id: 186 },
      { name: 'QuinceJelly', color: '#f0932b', id: 187 },
      { name: 'CarminePink', color: '#eb4d4b', id: 188 },
      { name: 'PureApple', color: '#6ab04c', id: 189 },
      { name: 'HintOfIcePack', color: '#c7ecee', id: 1891 },
      { name: 'MiddleBlue', color: '#7ed6df', id: 1892 },
      { name: 'Heliotrope', color: '#e056fd', id: 1893 },
      { name: 'ExodusFruit', color: '#686de0', id: 1894 },
      { name: 'DeepKoamaru', color: '#30336b', id: 1895 },
      { name: 'SoaringEagle', color: '#95afc0', id: 1896 },
      { name: 'GreenlandGreen', color: '#22a6b3', id: 1897 },
      { name: 'SteelPink', color: '#be2edd', id: 1898 },
      { name: 'Blurple', color: '#4834d4', id: 1899 },
      { name: 'DeepCove', color: '#130f40', id: 18999 },
      { name: 'WizardGrey', color: '#535c68', id: 189993 },
    ],
  },
  {
    paletteName: 'Flat UI Colors British',
    id: 'flat-ui-colors-british',
    emoji: '🇬🇧',
    colors: [
      { name: 'ProtossPylon', color: '#00a8ff', id: 190 },
      { name: 'Periwinkle', color: '#9c88ff', id: 191 },
      { name: 'Rise-N-Shine', color: '#fbc531', id: 192 },
      { name: 'DownloadProgress', color: '#4cd137', id: 193 },
      { name: 'Seabrook', color: '#487eb0', id: 194 },
      { name: 'VanaDylBlue', color: '#0097e6', id: 195 },
      { name: 'MattPurple', color: '#8c7ae6', id: 196 },
      { name: 'NanohanachaGold', color: '#e1b12c', id: 197 },
      { name: 'SkirretGreen', color: '#44bd32', id: 198 },
      { name: 'Naval', color: '#40739e', id: 199 },
      { name: 'NasturcianFlower', color: '#e84118', id: 1991 },
      { name: 'LynxWhite', color: '#f5f6fa', id: 1991 },
      { name: 'BlueberrySoda', color: '#7f8fa6', id: 1992 },
      { name: 'MazarineBlue', color: '#273c75', id: 1993 },
      { name: 'BlueNights', color: '#353b48', id: 1994 },
      { name: 'HarleyOrange', color: '#c23616', id: 1995 },
      { name: 'HintOfPensive', color: '#dcdde1', id: 1996 },
      { name: 'ChainGangGrey', color: '#718093', id: 1997 },
      { name: 'PicoVoid', color: '#192a56', id: 1998 },
      { name: 'ElectroMagnetic', color: '#2f3640', id: 1999 },
    ],
  },
  {
    paletteName: 'Flat UI Colors Spanish',
    id: 'flat-ui-colors-spanish',
    emoji: '🇪🇸',
    colors: [
      { name: 'JacksonsPurple', color: '#40407a', id: 100 },
      { name: 'C64Purple', color: '#706fd3', id: 101 },
      { name: 'SwanWhite', color: '#f7f1e3', id: 102 },
      { name: 'SummerSky', color: '#34ace0', id: 103 },
      { name: 'CelestialGreen', color: '#33d9b2', id: 104 },
      { name: 'LuckyPoint', color: '#2c2c54', id: 105 },
      { name: 'Liberty', color: '#474787', id: 106 },
      { name: 'HotStone', color: '#aaa69d', id: 107 },
      { name: 'DevilBlue', color: '#227093', id: 108 },
      { name: 'PalmSpringsSplash', color: '#218c74', id: 109 },
      { name: 'FlourescentRed', color: '#ff5252', id: 110 },
      { name: 'SyntheticPumpkin', color: '#ff793f', id: 111 },
      { name: 'CrocodileTooth', color: '#d1ccc0', id: 112 },
      { name: 'MandarinSorbet', color: '#ffb142', id: 113 },
      { name: 'SpicedButterNut', color: '#ffda79', id: 114 },
      { name: 'EyeOfNewt', color: '#b33939', id: 115 },
      { name: 'ChileanFire', color: '#cd6133', id: 116 },
      { name: 'GreyPorcelain', color: '#84817a', id: 117 },
      { name: 'AlamedaOchre', color: '#cc8e35', id: 118 },
      { name: 'Desert', color: '#ccae62', id: 119 },
    ],
  },
  {
    paletteName: 'Flat UI Colors Indian',
    id: 'flat-ui-colors-indian',
    emoji: '🇮🇳',
    colors: [
      { name: 'OrchidOrange', color: '#FEA47F', id: 1210 },
      { name: 'SpiroDiscoBall', color: '#25CCF7', id: 1211 },
      { name: 'HoneyGlow', color: '#EAB543', id: 1212 },
      { name: 'SweetGarden', color: '#55E6C1', id: 1213 },
      { name: 'FallingStar', color: '#CAD3C8', id: 1214 },
      { name: 'RichGardenia', color: '#F97F51', id: 1215 },
      { name: 'ClearChill', color: '#1B9CFC', id: 1216 },
      { name: 'WhitePepper', color: '#F8EFBA', id: 1217 },
      { name: 'Keppel', color: '#58B19F', id: 1218 },
      { name: 'ShipsOfficer', color: '#2C3A47', id: 1219 },
      { name: 'FieryFuchsia', color: '#B33771', id: 12191 },
      { name: 'BlueBell', color: '#3B3B98', id: 12192 },
      { name: 'GeorgiaPeach', color: '#FD7272', id: 12193 },
      { name: 'OasisStream', color: '#9AECDB', id: 12194 },
      { name: 'BrightUbe', color: '#D6A2E8', id: 12195 },
      { name: 'MagentaPurple', color: '#6D214F', id: 12196 },
      { name: 'EndingNavyBlue', color: '#182C61', id: 12197 },
      { name: 'SasquatchSocks', color: '#FC427B', id: 12198 },
      { name: 'PineGlade', color: '#BDC581', id: 12198 },
      { name: 'HighlighterLavender', color: '#82589F', id: 12199 },
    ],
  },
  {
    paletteName: 'Flat UI Colors French',
    id: 'flat-ui-colors-french',
    emoji: '🇫🇷',
    colors: [
      { name: 'FlatFlesh', color: '#fad390', id: 1310 },
      { name: 'MelonMelody', color: '#f8c291', id: 1311 },
      { name: 'Livid', color: '#6a89cc', id: 1312 },
      { name: 'Spray', color: '#82ccdd', id: 1313 },
      { name: 'ParadiseGreen', color: '#b8e994', id: 1314 },
      { name: 'SquashBlossom', color: '#f6b93b', id: 1315 },
      { name: 'MandarinRed', color: '#e55039', id: 1316 },
      { name: 'AzraqBlue', color: '#4a69bd', id: 1317 },
      { name: 'Dupain', color: '#60a3bc', id: 1318 },
      { name: 'AuroraGreen', color: '#78e08f', id: 1319 },
      { name: 'IcelandPoppy', color: '#fa983a', id: 13191 },
      { name: 'TomatoRed', color: '#eb2f06', id: 13192 },
      { name: 'YueGuangBlue', color: '#1e3799', id: 13193 },
      { name: 'GoodSamaritan', color: '#3c6382', id: 13194 },
      { name: 'Waterfall', color: '#38ada9', id: 13195 },
      { name: 'CarrotOrange', color: '#e58e26', id: 13196 },
      { name: 'JalapenoRed', color: '#b71540', id: 13197 },
      { name: 'DarkSapphire', color: '#0c2461', id: 13198 },
      { name: 'ForestBlues', color: '#0a3d62', id: 13199 },
      { name: 'ReefEncounter', color: '#079992', id: 1319999 },
    ],
  },
];

// added id manually for checking randomColor generation bug (duplicate key , id) => key error✅

colorsData.forEach((palette) => {
  // eslint-disable-next-line array-callback-return
  palette.colors.map((color, i) => {
    color.id = uuidv4() + i;
  });
});

export default colorsData;
