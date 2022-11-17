radio.onReceivedString(function (receivedString) {
    if (receivedString == "Door Open") {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 5000, 5000, 255, 255, 5000, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
        basic.showIcon(IconNames.No)
    } else if (receivedString == "Door Closed") {
        basic.showIcon(IconNames.Yes)
    }
})
radio.setGroup(17)
