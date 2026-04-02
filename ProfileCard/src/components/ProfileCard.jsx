import "./ProfileCard.css";

export default function ProfileCard({ name, src, age, ispresent, title, bio }) {
  return (
    <div className="profile-card">
      {/* Image + Online Dot */}
      <div className="image-container">
        <img className="avatar" src={src} alt="profile" />
        <span className={ispresent ? "status online" : "status offline"}></span>
      </div>

      <h2 className="name">{name}</h2>
      <p className="age">Age: {age}</p>

      <h3 className="title">{title}</h3>

      <p className={ispresent ? "available" : "not-available"}>
        {ispresent ? "Available" : "Not Available"}
      </p>

      <p className="bio">{bio}</p>

      <div className="social">
        <a href="https://github.com/SamruddhiShetty12">Github</a>
        <a href="mailto:shettysamrudhi12@gmail.com">Email</a>
        <a
          href="https://www.linkedin.com/in/samruddhi-s-shetty-a088332a7/"
          target="_blank"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
