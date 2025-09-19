import WallDecorationImg from "../assets/img/wall-decoration-img.png";
import KitchenEquipmentImg from "../assets/img/kitchen-equipment-img.png";
import BathroomEquipmentImg from "../assets/img/bathroom-equipment-img.png";
import CleaningEquipmentImg from "../assets/img/cleaning-equipment-img.png";
import BedroomDecorationImg from "../assets/img/bedroom-decoration-img.png";

function useProductCategory() {
  const productCategoryList = [
    {
      id: 1,
      title: "Dekorasi Dinding",
      img: WallDecorationImg,
    },
    {
      id: 2,
      title: "Peralatan Dapur",
      img: KitchenEquipmentImg,
    },
    {
      id: 3,
      title: "Peralatan Kamar Mandi",
      img: BathroomEquipmentImg,
    },
    {
      id: 4,
      title: "Peralatan Kebersihan",
      img: CleaningEquipmentImg,
    },
    {
      id: 5,
      title: "Dekorasi Kamar Tidur",
      img: BedroomDecorationImg,
    },
  ];

  return { productCategoryList };
}

export default useProductCategory;
