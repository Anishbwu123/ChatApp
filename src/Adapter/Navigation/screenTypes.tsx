export enum Screens {
  // ----------------------Auth-----------------
  Splash = "Splash",
  Chatlist='Chatlist',
 ChatScreen='ChatScreen',

 
}
export type ScreenParamList = {
  // -----------Auth--------------
  
  [Screens.Splash]: undefined;
  [Screens.Chatlist]:{userId:string,userName:string,userPic:string};
  [Screens.ChatScreen]:undefined;
  
};
