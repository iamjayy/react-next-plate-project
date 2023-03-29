import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img
          src="https://images.unsplash.com/photo-1464454709131-ffd692591ee5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3552&q=80"
          alt="sidebar Img"
          className="sidebarImg"
        />
        <p>
          lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum
          ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum
          lorum ipsum
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">life</li>
          <li className="sidebarListItem">music</li>
          <li className="sidebarListItem">style</li>
          <li className="sidebarListItem">sport</li>
          <li className="sidebarListItem">tech</li>
          <li className="sidebarListItem">cinema</li>
        </ul>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">Follow Us</span>
        <div className="sidebarSocial">
          <i class="sidebarIcon fa-brands fa-facebook"></i>
          <i class="sidebarIcon fa-brands fa-square-twitter"></i>
          <i class="sidebarIcon fa-brands fa-square-pinterest"></i>
          <i class="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  );
}
