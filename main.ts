/*
The code below is a refactoring of:
- the ElecFreaks 'pxt-PlanetX' library:
  https://github.com/elecfreaks/pxt-PlanetX/blob/master/basic.ts
MIT-license.
*/

namespace PxSwitch {

    let RJPORT = 0

    export function setPort(port: RJPort) {
        RJPORT = port
    }

    export function read(): Switch {
        let pin = Nezha.digitalPin(RJPORT, RJLine.LA)
        pins.setPull(pin, PinPullMode.PullUp)
        let sensor = pins.digitalReadPin(pin)
        return (sensor ? Switch.Released : Switch.Pressed)
    }
}
