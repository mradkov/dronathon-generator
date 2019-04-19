const color0 = '#b8e994';
const color1 = '#60a3bc';
const color2 = '#B33771';
const color3 = '#fdcb6e';
const color4 = '#fab1a0';
const color5 = '#6c5ce7';
const color6 = '#81ecec';

const droneHtmlstyle = `
    background: url(./images/drone.png);
    width: 20px;
    height: 20px;
    display: block;
    left: -10px;
    top: -10px;
`
const droneIcon = L.divIcon({
    className: "pin-drone",
    iconAnchor: [0, 24],
    labelAnchor: [-6, 0],
    popupAnchor: [0, -36],
    html: `<span style="${droneHtmlstyle}" />`
})

const parcelHtmlstyle = `
  background-color: ${color0};
  width: 20px;
  height: 20px;
  display: block;
  left: -10px;
  top: -10px;
  position: relative;
  border-radius: 0px 0px 0;
  transform: rotate(45deg);
  border: 1px solid #FFFFFF`

const parcelIcon = L.divIcon({
    className: "pin-parcel",
    iconAnchor: [0, 24],
    labelAnchor: [-6, 0],
    popupAnchor: [0, -36],
    html: `<span style="${parcelHtmlstyle}" />`
})

const parcelHtmlstyle1 = `
  background-color: ${color1};
  width: 20px;
  height: 20px;
  display: block;
  left: -10px;
  top: -10px;
  position: relative;
  border-radius: 0px 0px 0;
  transform: rotate(45deg);
  border: 1px solid #FFFFFF`

const parcelIcon1 = L.divIcon({
    className: "pin-parcel",
    iconAnchor: [0, 24],
    labelAnchor: [-6, 0],
    popupAnchor: [0, -36],
    html: `<span style="${parcelHtmlstyle1}" />`
})


const parcelHtmlstyle2 = `
  background-color: ${color2};
  width: 20px;
  height: 20px;
  display: block;
  left: -10px;
  top: -10px;
  position: relative;
  border-radius: 0px 0px 0;
  transform: rotate(45deg);
  border: 1px solid #FFFFFF`

const parcelIcon2 = L.divIcon({
    className: "pin-parcel",
    iconAnchor: [0, 24],
    labelAnchor: [-6, 0],
    popupAnchor: [0, -36],
    html: `<span style="${parcelHtmlstyle2}" />`
})


const parcelHtmlstyle3 = `
  background-color: ${color3};
  width: 20px;
  height: 20px;
  display: block;
  left: -10px;
  top: -10px;
  position: relative;
  border-radius: 0px 0px 0;
  transform: rotate(45deg);
  border: 1px solid #FFFFFF`

const parcelIcon3 = L.divIcon({
    className: "pin-parcel",
    iconAnchor: [0, 24],
    labelAnchor: [-6, 0],
    popupAnchor: [0, -36],
    html: `<span style="${parcelHtmlstyle3}" />`
})


const parcelHtmlstyle4 = `
  background-color: ${color4};
  width: 20px;
  height: 20px;
  display: block;
  left: -10px;
  top: -10px;
  position: relative;
  border-radius: 0px 0px 0;
  transform: rotate(45deg);
  border: 1px solid #FFFFFF`

const parcelIcon4 = L.divIcon({
    className: "pin-parcel",
    iconAnchor: [0, 24],
    labelAnchor: [-6, 0],
    popupAnchor: [0, -36],
    html: `<span style="${parcelHtmlstyle4}" />`
})


const parcelHtmlstyle5 = `
  background-color: ${color5};
  width: 20px;
  height: 20px;
  display: block;
  left: -10px;
  top: -10px;
  position: relative;
  border-radius: 0px 0px 0;
  transform: rotate(45deg);
  border: 1px solid #FFFFFF`

const parcelIcon5 = L.divIcon({
    className: "pin-parcel",
    iconAnchor: [0, 24],
    labelAnchor: [-6, 0],
    popupAnchor: [0, -36],
    html: `<span style="${parcelHtmlstyle5}" />`
})

const parcelHtmlstyle6 = `
  background-color: ${color6};
  width: 20px;
  height: 20px;
  display: block;
  left: -10px;
  top: -10px;
  position: relative;
  border-radius: 0px 0px 0;
  transform: rotate(45deg);
  border: 1px solid #FFFFFF`

const parcelIcon6 = L.divIcon({
    className: "pin-parcel",
    iconAnchor: [0, 24],
    labelAnchor: [-6, 0],
    popupAnchor: [0, -36],
    html: `<span style="${parcelHtmlstyle6}" />`
})

const chargerHtmlstyle = `
  background: url('./images/battery.png');
  width: 20px;
  height: 20px;
  display: block;
  left: -10px;
  top: -10px;
  position: relative;
  `
const chargerIcon = L.divIcon({
    className: "pin-charger",
    iconAnchor: [0, 24],
    labelAnchor: [-6, 0],
    popupAnchor: [0, -36],
    html: `<span style="${chargerHtmlstyle}" />`
})

const officeHtmlstyle = `
  background-color: ${color0};
  width: 44px;
  height: 44px;
  display: block;
  left: -22px;
  top: -22px;
  position: relative;
  border-radius: 44px 44px 0;
  transform: rotate(45deg);
  border: 1px solid #FFFFFF`

  const officeHtmlstyle1 = `
  background-color: ${color1};
  width: 44px;
  height: 44px;
  display: block;
  left: -22px;
  top: -22px;
  position: relative;
  border-radius: 44px 44px 0;
  transform: rotate(45deg);
  border: 1px solid #FFFFFF`

const officeHtmlstyle2 = `
  background-color: ${color2};
  width: 44px;
  height: 44px;
  display: block;
  left: -22px;
  top: -22px;
  position: relative;
  border-radius: 44px 44px 0;
  transform: rotate(45deg);
  border: 1px solid #FFFFFF`

const officeHtmlstyle3 = `
  background-color: ${color3};
  width: 44px;
  height: 44px;
  display: block;
  left: -22px;
  top: -22px;
  position: relative;
  border-radius: 44px 44px 0;
  transform: rotate(45deg);
  border: 1px solid #FFFFFF`

const officeHtmlstyle4 = `
  background-color: ${color4};
  width: 44px;
  height: 44px;
  display: block;
  left: -22px;
  top: -22px;
  position: relative;
  border-radius: 44px 44px 0;
  transform: rotate(45deg);
  border: 1px solid #FFFFFF`

const officeHtmlstyle5 = `
  background-color: ${color5};
  width: 44px;
  height: 44px;
  display: block;
  left: -22px;
  top: -22px;
  position: relative;
  border-radius: 44px 44px 0;
  transform: rotate(45deg);
  border: 1px solid #FFFFFF`

const officeHtmlstyle6  = `
  background-color: ${color6};
  width: 44px;
  height: 44px;
  display: block;
  left: -22px;
  top: -22px;
  position: relative;
  border-radius: 44px 44px 0;
  transform: rotate(45deg);
  border: 1px solid #FFFFFF`

const officeIcon = Array(
  L.divIcon({
    className: "pin-office",
    iconAnchor: [0, 24],
    labelAnchor: [-6, 0],
    popupAnchor: [0, -36],
    html: `<span style="${officeHtmlstyle}" />`
  }),
  L.divIcon({
    className: "pin-office",
    iconAnchor: [0, 24],
    labelAnchor: [-6, 0],
    popupAnchor: [0, -36],
    html: `<span style="${officeHtmlstyle1}" />`
  }),
  L.divIcon({
    className: "pin-office",
    iconAnchor: [0, 24],
    labelAnchor: [-6, 0],
    popupAnchor: [0, -36],
    html: `<span style="${officeHtmlstyle2}" />`
  }),
  L.divIcon({
    className: "pin-office",
    iconAnchor: [0, 24],
    labelAnchor: [-6, 0],
    popupAnchor: [0, -36],
    html: `<span style="${officeHtmlstyle3}" />`
  }),
  L.divIcon({
    className: "pin-office",
    iconAnchor: [0, 24],
    labelAnchor: [-6, 0],
    popupAnchor: [0, -36],
    html: `<span style="${officeHtmlstyle4}" />`
  }),
  L.divIcon({
    className: "pin-office",
    iconAnchor: [0, 24],
    labelAnchor: [-6, 0],
    popupAnchor: [0, -36],
    html: `<span style="${officeHtmlstyle5}" />`
  }),
  L.divIcon({
    className: "pin-office",
    iconAnchor: [0, 24],
    labelAnchor: [-6, 0],
    popupAnchor: [0, -36],
    html: `<span style="${officeHtmlstyle6}" />`
  }),
)
