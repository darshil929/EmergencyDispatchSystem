import hospital from '../assets/hospital.png'
import police from '../assets/police.png'
import fire from '../assets/fire.png'
import paramedics from '../assets/paramedics.png'
import rail from '../assets/rail.png'
import blood from '../assets/blood.png'

export const nearByService: NearByService[] = [
    {
        id: '1',
        name: 'Hospital',
        imgUrl: hospital,
        onPress: () => {
            console.log('Hospital')
        },
    },
    {
        id: '2',
        name: 'Police Station',
        imgUrl: police,
        onPress: () => {
            console.log('Police Station')
        },
    },
    {
        id: '3',
        name: 'Fire Station',
        imgUrl: fire,
        onPress: () => {
            console.log('Fire Station')
        },
    },
    {
        id: '4',
        name: 'ParaMedics',
        imgUrl: paramedics,
        onPress: () => {
            console.log('ParaMedics')
        },
    },
    {
        id: '5',
        name: 'Railway',
        imgUrl: rail,
        onPress: () => {
            console.log('Railway')
        },
    },
    {
        id: '6',
        name: 'Blood Bank',
        imgUrl: blood,
        onPress: () => {
            console.log('Blood Bank')
        },
    },
];