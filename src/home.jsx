import Post from "./components/page/cart";

const Home = () => {
  return (
    <div className="h-screen">
      <Post
        avatar="../img/Auto Layout Horizontal.png"
        username="lewishamilton"
        time="5h"
        menuIcon="../img/Frame (6).png"
        postImage="../img/Auto Layout Horizontal (1).png"
        commentIcon="../img/Frame (7).png"
        shareIcon="../img/Frame (8).png"
        likes="741,368"
        caption="Parabéns Ayrton, minha inspiração sempre 🇧🇷💫"
        commentsCount="13,384"
        sendIcon="../img/Frame (9).png"
      />
    </div>
  );
};

export default Home;
