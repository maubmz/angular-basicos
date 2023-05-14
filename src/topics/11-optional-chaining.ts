
export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Fernando',
}

const passenger2: Passenger = {
    name: 'Melissa',
    children: ['Natalia', 'Elizabeth'],
}

const returnChildrenNumber = (passenger: Passenger) => {
    const howManyChildren = passenger.children?.length || 0;

    console.log( passenger.name , howManyChildren);
    return howManyChildren;
}

returnChildrenNumber( passenger1 );



