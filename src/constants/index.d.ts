declare module '*.png'
declare module '*.jpg'

interface NearByService {
    id: string
    name: string
    imgUrl: ImageSourcePropType
    onPress: () => void
}

interface SpeedDial {
    id: string
    name: string
    dial: number
    imgUrl: ImageSourcePropType
    onPress: () => void
}