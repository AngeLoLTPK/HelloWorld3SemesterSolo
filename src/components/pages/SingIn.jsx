import Content from "../layout/singIn/content";
import Sidebar from "../layout/singIn/sidebar";


const SingIn = () => {
  return (
    <div style={{display: "flex", flex: "row", justifyContent: "space-between"}}>   

        <div style={{width: "65%"}}> <Content /> </div>

        <div style={{width: "35%"}}> <Sidebar /> </div>

    </div>

  );
};

export default SingIn