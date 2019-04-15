const droneHtmlstyle = `
  background-color: black;
  width: 20px;
  height: 20px;
  display: block;
  left: -10px;
  top: -10px;
  position: relative;
  border-radius: 20px 20px 0;
  transform: rotate(45deg);
  border: 1px solid #FFFFFF`

  const parcelHtmlstyle = `
  background-color: orange;
  width: 20px;
  height: 20px;
  display: block;
  left: -10px;
  top: -10px;
  position: relative;
  border-radius: 20px 20px 0;
  transform: rotate(45deg);
  border: 1px solid #FFFFFF`

  const chargerHtmlstyle = `
  background-color: green;
  width: 20px;
  height: 20px;
  display: block;
  left: -10px;
  top: -10px;
  position: relative;
  border-radius: 20px 20px 0;
  transform: rotate(45deg);
  border: 1px solid #FFFFFF`


  const officeHtmlstyle = `
  background-color: yellow;
  width: 44px;
  height: 44px;
  display: block;
  left: -22px;
  top: -22px;
  position: relative;
  border-radius: 44px 44px 0;
  transform: rotate(45deg);
  border: 1px solid #FFFFFF`

    const droneIcon = L.divIcon({
        className: "pin-drone",
        iconAnchor: [0, 24],
        labelAnchor: [-6, 0],
        popupAnchor: [0, -36],
        html: `<span style="${droneHtmlstyle}" />`
    })

    const parcelIcon = L.divIcon({
        className: "pin-parcel",
        iconAnchor: [0, 24],
        labelAnchor: [-6, 0],
        popupAnchor: [0, -36],
        html: `<span style="${parcelHtmlstyle}" />`
    })

    const chargerIcon = L.divIcon({
        className: "pin-charger",
        iconAnchor: [0, 24],
        labelAnchor: [-6, 0],
        popupAnchor: [0, -36],
        html: `<span style="${chargerHtmlstyle}" />`
    })

    const officeIcon = L.divIcon({
        className: "pin-office",
        iconAnchor: [0, 24],
        labelAnchor: [-6, 0],
        popupAnchor: [0, -36],
        html: `<span style="${officeHtmlstyle}" />`
    })
