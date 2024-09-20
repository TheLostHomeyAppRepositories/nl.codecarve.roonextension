"use strict";

const Homey = require("homey");

const zoneManager = require("../../lib/zone-manager");

class RoonZoneDriver extends Homey.Driver {
  /**
   * onInit is called when the driver is initialized.
   */
  async onInit() {
    this.zones = [];

    this.log("RoonZoneDriver has been initialized");
  }

  /**
   * onPairListDevices is called when a user is adding a device
   * and the 'list_devices' view is called.
   * This should return an array with the data of devices that are available for pairing.
   */
  async onPairListDevices() {
    const zones = zoneManager.getZones();
    return zones.map((zone) => {
      return {
        name: zone.display_name,
        data: {
          id: zone.zone_id,
        },
        store: {},
        settings: {},
      };
    });
  }
}

module.exports = RoonZoneDriver;
