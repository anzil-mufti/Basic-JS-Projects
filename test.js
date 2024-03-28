const user={
   userName:"Anzil",
   welcomeMessage: function(){
    console.log(`${this.userName} Welcome to the website`);
    console.log(this);
   }
}
user.welcomeMessage()
user.userName="Mufti"
user.welcomeMessage()
console.log(this);
