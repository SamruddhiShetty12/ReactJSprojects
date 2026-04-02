import ProfileCard from "./components/ProfileCard";
import "./App.css";

function App() {
  return (
    <>
      {/* Navbar */}
      <div className="navbar">
        <h2>Team Profiles</h2>
      </div>

      {/* Profiles */}
      <div className="container">
        <ProfileCard
          name="Amrutha"
          age={22}
          ispresent={true}
          src="https://i.pinimg.com/736x/2a/7d/4c/2a7d4c4bc1381a476b8b8a85885ac392.jpg"
          title="Software Engineer"
          bio="Builds scalable and efficient web applications using modern technologies."
        />
        <ProfileCard
          name="Divya"
          age={23}
          ispresent={false}
          src="https://img.freepik.com/free-photo/closeup-young-female-professional-making-eye-contact-against-colored-background_662251-651.jpg?semt=ais_incoming&w=740&q=80"
          title="Frontend Developer"
          bio="Specializes in creating responsive and interactive user interfaces."
        />
        <ProfileCard
          name="Sanika"
          age={24}
          ispresent={true}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlcxjUEIepkQ7JQYyuRKIQUf3xC1cLuGryAw&s"
          title="Full Stack Developer"
          bio="Works on both frontend and backend to deliver complete solutions."
        />
        <ProfileCard
          name="Sneha"
          age={21}
          ispresent={false}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwDT-WXnuLupjX6vqGuup4AQ86YyGMR72RXg&s"
          title="UI/UX Designer"
          bio="Designs user-friendly and visually appealing interfaces."
        />
        <ProfileCard
          name="Kavya"
          age={25}
          ispresent={true}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlryoJvfL8yEIX-tIvvHnG1g45XJanw4bM2g&s"
          title="Data Analyst"
          bio="Analyzes data to extract meaningful insights and trends."
        />
        <ProfileCard
          name="Sinchana"
          age={22}
          ispresent={false}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTepsWBRqXAXLEkqODa0rdGqsQH2X2bziy9Vw&s"
          title="Machine Learning Engineer"
          bio="Develops intelligent systems using machine learning algorithms."
        />
        <ProfileCard
          name="Ananya"
          age={23}
          ispresent={true}
          src="https://img.freepik.com/premium-photo/confident-young-woman-professional-suit-posing-formal-portrait-generative-ai_437323-43514.jpg?semt=ais_incoming&w=740&q=80"
          title="DevOps Engineer"
          bio="Manages deployment, CI/CD pipelines, and cloud infrastructure."
        />
        <ProfileCard
          name="Riya"
          age={24}
          ispresent={false}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqGA6E5YsKxBuiJPGpDPaXDe6zaEDznvXF2w&s"
          title="Mobile App Developer"
          bio="Develops mobile applications for Android and iOS platforms."
        />

        <ProfileCard
          name="Suresh"
          age={26}
          ispresent={true}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmk4nHAqyfueywTNO2eFoVMabioNn7bFelUg&s"
          title="Cloud Engineer"
          bio="Works with cloud platforms to build secure and scalable systems."
        />
        <ProfileCard
          name="Swagath"
          age={27}
          ispresent={false}
          src="https://cdn.pixelbin.io/v2/dummy-cloudname/original/pixelbin_blogs/PB_2.0/Apps_New_design_graphics/Add_Suit_on_Photo/Types_of_Suit/Business_Suit..webp"
          title="React Developer"
          bio="Passionate React Developer building responsive and dynamic web applications."
        />
      </div>
    </>
  );
}

export default App;
