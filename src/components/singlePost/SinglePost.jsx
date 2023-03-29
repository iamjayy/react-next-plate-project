import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.unsplash.com/photo-1464454709131-ffd692591ee5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3552&q=80"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lourum ipsum Lourum ipsumLourum
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-regular fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b> testing </b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lourum ipsum Lourum ipsumLourum Lourum ipsum Lourum ipsumLourum Lourum
          ipsum Lourum ipsumLourum Lourum ipsum Lourum ipsumLourum Lourum ipsum
          Lourum ipsumLourum Lourum ipsum Lourum ipsumLourum Lourum ipsum Lourum
          ipsumLourum Lourum ipsum Lourum ipsumLourum Lourum ipsum Lourum
          ipsumLourum Lourum ipsum Lourum ipsumLourum Lourum ipsum Lourum
          ipsumLourum Lourum ipsum Lourum ipsumLourum Lourum ipsum Lourum
          ipsumLourum Lourum ipsum Lourum ipsumLourum Lourum ipsum Lourum
          ipsumLourum Lourum ipsum Lourum ipsumLourum Lourum ipsum Lourum
          ipsumLourum
        </p>
      </div>
    </div>
  );
}
