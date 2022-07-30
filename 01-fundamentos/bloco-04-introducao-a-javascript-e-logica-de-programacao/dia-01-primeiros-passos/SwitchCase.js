let pssStatus = 'approved';

switch (pssStatus){
    case 'approved':
        console.log('Congrats!');
        break;
    case 'reproved':
        console.log('It was not that time, try again!');
        break;
    case 'list':
        console.log('Wait, you will be analyzed');
        break;
    default:
        console.log('Invalid value');
}