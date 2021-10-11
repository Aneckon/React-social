import {renderJs} from '../render';
let state = {
  sidebar: {
    sidebarItem: [
      {
        id: 1,
        icon: '',
        name: 'Profile'
      }
    ],
  },
  messages: {
    messagesMessagData: [
      {
        id: 1,
        messagesLeft: 'hi',
      },
      {
        id: 2,
        messagesLeft: 'hi',
      },
      {
        id: 3,
        messagesLeft: 'yo',
      },
      {
        id: 4,
        messagesLeft: 'da',
      },
    ],
    messagesData: [
      {
        id: 1,
        name: 'Andrey',
        img: "https://cdn-icons-png.flaticon.com/512/64/64572.png"
      },
      {
        id: 2,
        name: 'Vika',
        img: "https://cdn-icons-png.flaticon.com/512/64/64572.png"
      },
      {
        id: 3,
        name: 'Artem',
        img: "https://cdn-icons-png.flaticon.com/512/64/64572.png"
      },
    ],
  },
  news: {
    NewsPostData: [
      {
        id: 1,
        name: 'Andrey',
        nameImg: 'https://cdn-icons-png.flaticon.com/512/64/64572.png',
        postImg: 'https://llandscapes-10674.kxcdn.com/wp-content/uploads/2019/07/lighting.jpg.webp',
        postLike: '0',
        postIcon: 'https://cdn-icons-png.flaticon.com/512/64/64572.png'
      },
      {
        id: 2,
        name: 'Vika',
        nameImg: 'https://cdn-icons-png.flaticon.com/512/64/64572.png',
        postImg: 'https://llandscapes-10674.kxcdn.com/wp-content/uploads/2019/07/lighting.jpg.webp',
        postLike: '0',
        postIcon: 'https://cdn-icons-png.flaticon.com/512/64/64572.png'
      },
      {
        id: 3,
        name: 'Artem',
        nameImg: 'https://cdn-icons-png.flaticon.com/512/64/64572.png',
        postImg: 'https://llandscapes-10674.kxcdn.com/wp-content/uploads/2019/07/lighting.jpg.webp',
        postLike: '0',
        postIcon: 'https://cdn-icons-png.flaticon.com/512/64/64572.png'
      },
    ]
  },
  profile: {
    images: [
      {
        id: 1,
        img: "https://prestige.kherson.ua/wp-content/uploads/2017/11/fon.jpg"
      },
    ],
    icon: [
      {
        id: 1,
        icon: "https://cdn-icons-png.flaticon.com/512/64/64572.png"
      },
    ],
    post: [
      {
        id: 1,
        icon: "https://cdn-icons-png.flaticon.com/512/64/64572.png",
        name: 'Andrew',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Vitae reprehenderitLorem ipsum dolor sit amet consectetur adipisicing elit Vitae"
      },
      {
        id: 2,
        icon: "https://cdn-icons-png.flaticon.com/512/64/64572.png",
        name: 'Andrew',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Vitae reprehenderitLorem ipsum dolor sit amet consectetur adipisicing elit Vitae"
      },
      {
        id: 3,
        icon: "https://cdn-icons-png.flaticon.com/512/64/64572.png",
        name: 'Andrew',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Vitae reprehenderitLorem ipsum dolor sit amet consectetur adipisicing elit Vitae"
      },
    ],
  },
}

export let newsPost = (postMessages) => {
  let newsMessages = {
    id: 5,
    icon: "https://cdn-icons-png.flaticon.com/512/64/64572.png",
    name: "Andrew",
    text: postMessages
  };
  state.profile.post.push(newsMessages);
  renderJs(state);
}

export default state;