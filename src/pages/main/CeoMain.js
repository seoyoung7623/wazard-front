import LeftMenuCeo from "../../components/LeftMenuCeo";
import Header from "../../components/Header";

const CeoMain = () => {
  return (
    <div>
      <Header />
      <LeftMenuCeo />
      <div className="ceoMainBody"></div>
    </div>
  );
};

export default CeoMain;
