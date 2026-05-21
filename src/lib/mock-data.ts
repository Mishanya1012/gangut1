export type Profile = {
  id: number;
  nickname: string;
  age: number;
  gender: "Она" | "Он";
  city: string;
  bio: string;
  interests: string[];
  avatar: string;
  online: boolean;
  vip: boolean;
};

export const profiles: Profile[] = [
  {
    id: 123,
    nickname: "Violet_Rayne",
    age: 24,
    gender: "Она",
    city: "Vinewood",
    bio: "Ночные поездки, клубы, семейные RP-сцены и красивые кадры на закате.",
    interests: ["drift", "voice rp", "clubs"],
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
    online: true,
    vip: true
  },
  {
    id: 236,
    nickname: "Marco_Vega",
    age: 29,
    gender: "Он",
    city: "Del Perro",
    bio: "Ищу напарницу для спокойного RP, бизнеса и долгих маршрутов по побережью.",
    interests: ["business", "cars", "events"],
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
    online: true,
    vip: false
  },
  {
    id: 347,
    nickname: "Mia_Cortez",
    age: 22,
    gender: "Она",
    city: "Sandy Shores",
    bio: "Медик, люблю живые диалоги, тусовки и драму без токсичности.",
    interests: ["ems", "family", "photo"],
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
    online: false,
    vip: false
  }
];

export const matches = [
  { id: 1, name: "Violet_Rayne", last: "Го вечером на пирс?", unread: 2 },
  { id: 2, name: "Marco_Vega", last: "Я видел твой Sultan RS у казино.", unread: 0 },
  { id: 3, name: "Mia_Cortez", last: "Спасибо за RP вчера.", unread: 1 }
];

export const visitors = [
  { id: 1, name: "Tony_Starkov", time: "Сегодня, 21:14" },
  { id: 2, name: "Kate_Monroe", time: "Сегодня, 19:42" },
  { id: 3, name: "Rick_Santos", time: "Вчера, 23:08" }
];
