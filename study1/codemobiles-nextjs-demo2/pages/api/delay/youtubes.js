import React from "react";

const data = {
  youtubes: [
    {
      id: "E3u2YoGWZ9k",
      title: "Laura in the Kitchen",
      subtitle: "Homemade Sicilian Pizza Recipe ",
      avatar_image:
        "https://yt3.ggpht.com/-kTsKONJu72w/AAAAAAAAAAI/AAAAAAAAAAA/U2wrC4qn3Kw/s100-c-k-no/photo.jpg",
      youtube_image: "http://img.youtube.com/vi/E3u2YoGWZ9k/maxresdefault.jpg",
    },
    {
      id: "F5MqYWrHxYs",
      title: "Scoff",
      subtitle: "Bubble & Squeak | Good Food Good Times",
      avatar_image:
        "https://yt3.ggpht.com/-KfmDZEJ0lyo/AAAAAAAAAAI/AAAAAAAAAAA/9FPAFvPqhWw/s100-c-k-no/photo.jpg",
      youtube_image: "http://img.youtube.com/vi/F5MqYWrHxYs/maxresdefault.jpg",
    },
    {
      id: "gZuDMKXWU_E",
      title: "Munchies",
      subtitle: "How to Make a Perfect Cheeseburger",
      avatar_image:
        "https://yt3.ggpht.com/-VXDa5ce1Zr0/AAAAAAAAAAI/AAAAAAAAAAA/yLyEVhQzQIw/s100-c-k-no/photo.jpg",
      youtube_image: "http://img.youtube.com/vi/gZuDMKXWU_E/maxresdefault.jpg",
    },
    {
      id: "IB9j8e8KWJo",
      title: "OneFood",
      subtitle: "Homemade Chocolate Fudge (Easy, No-Bake Recipe) ",
      avatar_image:
        "https://yt3.ggpht.com/-WCK5XuVQ3Tg/AAAAAAAAAAI/AAAAAAAAAAA/6rg51yleme8/s100-c-k-no/photo.jpg",
      youtube_image: "http://img.youtube.com/vi/IB9j8e8KWJo/maxresdefault.jpg",
    },
    {
      id: "kioZuaBwem4",
      title: "CupcakeJemma",
      subtitle: "The Making of a Burger Cake!",
      avatar_image:
        "https://yt3.ggpht.com/-KlLau29SpRo/AAAAAAAAAAI/AAAAAAAAAAA/RLn1Gl7SBOo/s100-c-k-no/photo.jpg",
      youtube_image: "http://img.youtube.com/vi/kioZuaBwem4/maxresdefault.jpg",
    },
    {
      id: "lclhzwuvxNw",
      title: "Eugenie Kitchen",
      subtitle: "Perfect Egg Rolls Recipe",
      avatar_image:
        "https://yt3.ggpht.com/-Iysp1bLgSuM/AAAAAAAAAAI/AAAAAAAAAAA/V7O0VDWsh5M/s100-c-k-no/photo.jpg",
      youtube_image: "http://img.youtube.com/vi/lclhzwuvxNw/maxresdefault.jpg",
    },
    {
      id: "Np6ewLL86A4",
      title: "CupcakeJemma",
      subtitle: "Buttercream Piping Tips & Techniques",
      avatar_image:
        "https://yt3.ggpht.com/-1IPD1AMyF4w/AAAAAAAAAAI/AAAAAAAAAAA/5h7Nq0rMGSU/s100-c-k-no/photo.jpg",
      youtube_image: "http://img.youtube.com/vi/Np6ewLL86A4/maxresdefault.jpg",
    },
    {
      id: "nWraEuHycig",
      title: "Maromba Burger ft.",
      subtitle: "Nutella Crepe Cake Recipe - Laura Vitale",
      avatar_image:
        "https://yt3.ggpht.com/-TgO3v8JRvHU/AAAAAAAAAAI/AAAAAAAAAAA/xebqn4guYPU/s100-c-k-no/photo.jpg",
      youtube_image: "http://img.youtube.com/vi/nWraEuHycig/maxresdefault.jpg",
    },
    {
      id: "vbJmXjJLS0Q",
      title: "OnePotChefShow",
      subtitle: "Easy Chocolate Brownies | 5 Ingredient Desserts",
      avatar_image:
        "https://yt3.ggpht.com/-3ZwVsvvUTVc/AAAAAAAAAAI/AAAAAAAAAAA/igdRC6bDHhc/s100-c-k-no/photo.jpg",
      youtube_image: "http://img.youtube.com/vi/vbJmXjJLS0Q/maxresdefault.jpg",
    },
    {
      id: "zFG-Z5cNR5I",
      title: "MagicboxEngSto",
      subtitle: "6 NEW Holiday Ice Cream Flavors: Homemade Ice Cream",
      avatar_image:
        "https://yt3.ggpht.com/-Bd5CaBQNrDE/AAAAAAAAAAI/AAAAAAAAAAA/1aJkHROOS1U/s100-c-k-no/photo.jpg",
      youtube_image: "http://img.youtube.com/vi/zFG-Z5cNR5I/maxresdefault.jpg",
    },
    {
      id: "_PD3EQ5doAE",
      title: "Mis Pastelitos",
      subtitle: "MANZANAS NAVIDEÃAS CON CARAMELO Y CHOCOLATE",
      avatar_image:
        "https://yt3.ggpht.com/-KfmDZEJ0lyo/AAAAAAAAAAI/AAAAAAAAAAA/9FPAFvPqhWw/s100-c-k-no/photo.jpg",
      youtube_image: "http://img.youtube.com/vi/_PD3EQ5doAE/maxresdefault.jpg",
    },
  ],
  error: false,
  error_msg: "no",
};

export default (req, res) => {
  setTimeout(() => {
    res.json(data);
  }, 2000);
};
