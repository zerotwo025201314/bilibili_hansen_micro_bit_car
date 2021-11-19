function 前_慢 () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 100)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 100)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CCW, 100)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CCW, 100)
}
function 暂停 () {
    motor.motorStopAll()
}
IR.onPressEvent(RemoteButton.Plus, function () {
    前()
})
function 右转 () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 200)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 200)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CCW, 200)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CW, 200)
}
function 避障 () {
    前()
    if (sonar.ping(
    DigitalPin.P8,
    DigitalPin.P12,
    PingUnit.Centimeters
    ) <= 10) {
        暂停()
        random = randint(0, 1)
        if (random == 0) {
            if (sonar.ping(
            DigitalPin.P8,
            DigitalPin.P12,
            PingUnit.Centimeters
            ) <= 10) {
                左()
            } else {
                前()
            }
        }
        if (random == 1) {
            if (sonar.ping(
            DigitalPin.P8,
            DigitalPin.P12,
            PingUnit.Centimeters
            ) <= 10) {
                右()
            } else {
                前()
            }
        }
    }
}
function 左转 () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 200)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 200)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CW, 200)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CCW, 200)
}
function 前 () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 200)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 200)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CCW, 200)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CCW, 200)
}
function 右转_慢 () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 100)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 100)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CCW, 100)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CW, 100)
}
function 左 () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 200)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 200)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CW, 200)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CW, 200)
}
IR.onPressEvent(RemoteButton.FastBackward, function () {
    左()
})
function 后 () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 200)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 200)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CW, 200)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CW, 200)
}
function 左转_慢 () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 100)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 100)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CW, 100)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CCW, 100)
}
IR.onPressEvent(RemoteButton.Minus, function () {
    后()
})
IR.onPressEvent(RemoteButton.Mode, function () {
    左转()
})
function 右 () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 200)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 200)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CCW, 200)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CCW, 200)
}
function 寻路 () {
    if (sonar.ping(
    DigitalPin.P8,
    DigitalPin.P12,
    PingUnit.Centimeters
    ) <= 5) {
        前_慢()
    } else {
        pins.servoWritePin(AnalogPin.P16, 0)
        basic.pause(1000)
        for (let index = 0; index < 90; index++) {
            pins.servoWritePin(AnalogPin.P16, angle)
            angle += 1
            basic.pause(100)
            if (sonar.ping(
            DigitalPin.P8,
            DigitalPin.P12,
            PingUnit.Centimeters
            ) <= 5) {
                break;
pins.servoWritePin(AnalogPin.P16, 90)
                右转_慢()
                if (sonar.ping(
                DigitalPin.P8,
                DigitalPin.P12,
                PingUnit.Centimeters
                ) <= 5) {
                    暂停()
                    basic.pause(500)
                    前_慢()
                }
            }
        }
        for (let index = 0; index < 90; index++) {
            pins.servoWritePin(AnalogPin.P16, angle)
            angle += 1
            basic.pause(100)
            if (sonar.ping(
            DigitalPin.P8,
            DigitalPin.P12,
            PingUnit.Centimeters
            ) <= 5) {
                break;
pins.servoWritePin(AnalogPin.P16, 90)
                if (sonar.ping(
                DigitalPin.P8,
                DigitalPin.P12,
                PingUnit.Centimeters
                ) <= 5) {
                    暂停()
                    basic.pause(500)
                    前_慢()
                }
            }
        }
    }
}
IR.onPressEvent(RemoteButton.FastForward, function () {
    右()
})
IR.onPressEvent(RemoteButton.Play, function () {
    暂停()
})
IR.onPressEvent(RemoteButton.Return, function () {
    右转()
})
let random = 0
let angle = 0
basic.showIcon(IconNames.Heart)
pins.servoWritePin(AnalogPin.P16, 95)
IR.init(Pins.P14)
angle = 0
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        暂停()
        for (let index = 0; index < 1024; index++) {
            寻路()
            while (input.buttonIsPressed(Button.AB)) {
                break;
            }
        }
    }
    while (input.buttonIsPressed(Button.B)) {
        暂停()
        for (let index = 0; index < 1024; index++) {
            避障()
            while (input.buttonIsPressed(Button.AB)) {
                break;
            }
        }
    }
})
