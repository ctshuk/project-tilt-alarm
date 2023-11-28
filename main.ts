function alarm () {
    basic.showIcon(IconNames.Angry)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Baddy), music.PlaybackMode.InBackground)
}
radio.onReceivedString(function (receivedString) {
    alarm()
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("thief!")
    alarm()
})
radio.setGroup(1)
