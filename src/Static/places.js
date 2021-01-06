import One from '../assests/card1.jpg';
import Two from '../assests/bora.jpg';

const places = [

    {
        title:'green',
        desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrystandard dummy",
        imageUrl:process.env.PUBLIC_URL+ One,
        time:1500
    },
    {
        title:'Bora Bora',
        desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrystandard dummy",
        imageUrl:process.env.PUBLIC_URL+ Two,
        time:1500
    }
];

export default places;
