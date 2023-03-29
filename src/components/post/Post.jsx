import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        src="https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
        alt="post img"
        className="postImg"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">lorum ipsunm</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        lorum ipsunm lorum ipsunmlorum ipsunmlorum ipsunmlorum ipsunmlorum
        ipsunmlorum ipsunmlorum ipsunm lorum ipsunm lorum ipsunmlorum
        ipsunmlorum ipsunmlorum ipsunmlorum ipsunmlorum ipsunmlorum ipsunm lorum
        ipsunm lorum ipsunmlorum ipsunmlorum ipsunmlorum ipsunmlorum ipsunmlorum
        ipsunmlorum ipsunm lorum ipsunm lorum ipsunmlorum ipsunmlorum
        ipsunmlorum ipsunmlorum ipsunmlorum ipsunmlorum ipsunm lorum ipsunm
        lorum ipsunmlorum ipsunmlorum ipsunmlorum ipsunmlorum ipsunmlorum
        ipsunmlorum ipsunm lorum ipsunm lorum ipsunmlorum ipsunmlorum
        ipsunmlorum ipsunmlorum ipsunmlorum ipsunmlorum ipsunm
      </p>
    </div>
  );
}
