function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("room_name");
    window.location=("index.html")
  }