import gravity from '../assets/text/gravity.json';
import iupac from '../assets/text/iupac.json';
import livingbeings from '../assets/text/livingbeings.json';
import plantsAndAnimals from '../assets/text/plantsAndAnimals.json';
import yaaAsantewaa from '../assets/text/yaaAsantewaaWar.json';



export const bookList = [
{
    id:'1',
    title:'Biology 101',
    author: 'Micheal Clarke',
    category:'Biology',
    imgUrl:require('../assets/images/biologyBook.jpg'),
    description:''

},
{
    id:'2',
    title:'Chemistry Fundamentals',
    author: 'James Boris',
    category:'Chemistry',
    imgUrl:require('../assets/images/chemistryBook.jpg'),
    description:''
},
{
    id:'3',
    title:'Physics in Action!',
    author: 'Bernie Vladimir',
    category:'Physics',
    imgUrl:require('../assets/images/physicsBook.jpg'),
    description:''
},
{
    id:'4',
    title:'African History',
    author: 'James Chike',
    category:'History',
    imgUrl:require('../assets/images/historyBook.jpg'),
    description:''
},

]


export const lessons = [
{
    id:'1',
    bookId:'1',
    bookTitle:'Biology 101',
    title:'Living Beings',
    imgUrl:require('../assets/images/life.jpg'),
    text:livingbeings.text,
    images:[],
    videos:[],
    trackingImages:[],
    models:[],
    audio:[]
},
{
    id:'2',
    bookId:'4',
    bookTitle:'African History',
    title:'Yaa Asantewa War',
    imgUrl:require('../assets/images/yaaAsantewaaBG.jpg'),
    text:yaaAsantewaa.text,
    images:[],
    videos:[],
    trackingImages:[],
    models:[],
    audio:[]
},
{
    id:'3',
    bookId:'2',
    bookTitle:'Chemistry Fundamentals',
    title:'IUPAC Classification',
    imgUrl:require('../assets/images/iupac.jpg'),
    text:iupac.text,
    images:[],
    videos:[],
    trackingImages:[],
    models:[],
    audio:[]
},
{
    id:'4',
    bookId:'1',
    bookTitle:'Biology 101',
    title:'Plant and Animal Cells',
    imgUrl:require('../assets/images/cells.jpg'),
    text:plantsAndAnimals.text,
    images:[],
    videos:[],
    trackingImages:[],
    models:[],
    audio:[]
},
{
    id:'5',
    bookId:'3',
    bookTitle:'Physics in Action!',
    title:'Gravity',
    imgUrl:require('../assets/images/gravity.jpg'),
    text:gravity.text,
    images:[],
    videos:[],
    trackingImages:[],
    models:[],
    audio:[]
},
]

export const models = [
    
]