export interface MenuItem {
    dishName: string;
    description: string;
    course: string;
    price: string;
  }

export type RootStackParamList = {
    SignIn: undefined;
    AddDish: undefined;
    Home: undefined;
    ViewMenu: { menuItems: { dishName: string; description: string; course: string; price: string }[] };
  };
  