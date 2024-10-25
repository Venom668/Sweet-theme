import QtQuick 2.5

Rectangle {
    id: root
    color: "black"

    property int stage

    onStageChanged: {
        if (stage == 1) {
            introAnimation.running = true
        }
    }

    Item {
        id: content
        anchors.fill: parent
        opacity: 0
        TextMetrics {
            id: units
            text: "M"
            property int gridUnit: boundingRect.height
            property int largeSpacing: units.gridUnit
            property int smallSpacing: Math.max(2, gridUnit/4)
        }
       
        Image {
            id: logo
            property real size: units.gridUnit * 12
            anchors.centerIn: parent
            source: "images/logo.png"
            sourceSize.width: 256
            sourceSize.height: 256

            ParallelAnimation {
                running: true

                ScaleAnimator {
                    target: logo
                    from: 0
                    to: 1
                    duration: 700
                }

                SequentialAnimation {
                    loops: Animation.Infinite

                    OpacityAnimator {
                        target: logo
                        from: 0.75
                        to: 1
                        duration: 1200
                    }
                    OpacityAnimator {
                        target: logo
                        from: 1
                        to: 0.75
                        duration: 1200
                    }
                }
            }
        }

        Image {
            id: busyIndicator
            y: parent.height - (parent.height - logo.y) / 3 - height/2
            anchors.horizontalCenter: parent.horizontalCenter
            source: "images/spinner.png"
            sourceSize.height: units.gridUnit * 3
            sourceSize.width: units.gridUnit * 3
            
            ParallelAnimation{
                running: true

                ScaleAnimator{
                    target: busyIndicator
                    from: 0
                    to: 1
                    duration: 800
                }

                RotationAnimator{
                    target: busyIndicator
                    id: rotationAnimator
                    from: 0
                    to: 360
                    duration: 1600
                    loops: Animation.Infinite
                }
            }
        }

    }

    OpacityAnimator {
        id: introAnimation
        running: false
        target: content
        from: 0
        to: 1
        duration: 1000
        easing.type: Easing.InOutQuad
    }
}
