import hospital from '../assets/hospital.png'
import police from '../assets/police.png'
import fire from '../assets/fire.png'
import paramedics from '../assets/paramedics.png'
import rail from '../assets/rail.png'
import blood from '../assets/blood.png'
import policeBadge from '../assets/police-badge.png'
import helpline from '../assets/helpline.png'
import state from '../assets/state.png'
import women from '../assets/women.png'

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

export const speedDial: SpeedDial[] = [
    {
        id: '1',
        name: 'Police',
        dial: 100,
        imgUrl: policeBadge,
        onPress: () => {
            console.log('Police')
        }
    },
    {
        id: '2',
        name: 'Ambulance',
        dial: 102,
        imgUrl: paramedics,
        onPress: () => {
            console.log('Ambulance')
        }
    },
    {
        id: '3',
        name: 'HelpLine',
        dial: 1001,
        imgUrl: helpline,
        onPress: () => {
            console.log('HelpLine')
        }
    },
    {
        id: '4',
        name: 'State Help',
        dial: 606,
        imgUrl: state,
        onPress: () => {
            console.log('State Help')
        }
    },
    {
        id: '5',
        name: 'Fire Dept',
        dial: 101,
        imgUrl: fire,
        onPress: () => {
            console.log('Fire Dept')
        }
    },
    {
        id: '6',
        name: 'Women Help',
        dial: 1091,
        imgUrl: women,
        onPress: () => {
            console.log('Women Help')
        }
    },
]