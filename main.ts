let sensorEsq = 0
let sensorDir = 0
// ===== Funções =====
function andarFrente () {
    // motor esquerdo
    pins.digitalWritePin(DigitalPin.P13, 1)
    // motor direito
    pins.digitalWritePin(DigitalPin.P14, 1)
}
function virarEsquerda () {
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
}
function parar () {
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
}
function virarDireita () {
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 0)
}
basic.forever(function () {
    sensorEsq = pins.digitalReadPin(DigitalPin.P1)
    sensorDir = pins.digitalReadPin(DigitalPin.P2)
    // Linha preta = 0 / Branco = 1 (padrão da maioria dos sensores)
    // Ambos no branco → anda pra frente
    // Esquerdo fora da linha → vira para esquerda
    // Direito fora da linha → vira para direita
    // Ambos na linha → parar
    if (sensorEsq == 1 && sensorDir == 1) {
        andarFrente()
    } else if (sensorEsq == 0 && sensorDir == 1) {
        virarEsquerda()
    } else if (sensorEsq == 1 && sensorDir == 0) {
        virarDireita()
    } else {
        parar()
    }
})
