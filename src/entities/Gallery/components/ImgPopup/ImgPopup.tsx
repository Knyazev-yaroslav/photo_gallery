import React, { Dispatch, FC, SetStateAction, useEffect, useRef } from "react";
import style from "./ImgPopup.module.scss";
import prevSvg from "../../../../assets/images/prev-pagination-arrow.svg";
import nextSvg from "../../../../assets/images/next-pagination-arrow.svg";
import closeSvg from "../../../../assets/images/close_icon.svg";
import { TImagesArray } from "../../../../types/imgTypes";

type TImgPopup = {
  currentImg: number;
  imagesList: TImagesArray[];
  prevImg: () => void;
  nextImg: () => void;
  closeImg: () => void;
};

const ImgPopup: FC<TImgPopup> = ({
  imagesList,
  currentImg,
  prevImg,
  nextImg,
  closeImg,
}) => {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const imgRefCurrent = imgRef.current;
  }, []);

  const downloadImg = async () => {
    const originalImage = `${(imgRef.current as any).currentSrc}`;
    const image = await fetch(originalImage);

    const nameSplit = originalImage.split("/");
    const duplicateName = nameSplit.pop();

    const imageBlog = await image.blob();
    const imageURL = URL.createObjectURL(imageBlog);
    const link = document.createElement("a");
    link.href = imageURL;
    link.download = "" + duplicateName + "";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  return (
    <div className={style.popup} onClick={closeImg}>
      <img src={closeSvg} alt="close SVG" className={style.close_svg} />
      <div
        className={style.img_popup}
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <img
          className={style.gallery_popup_img}
          src={require(`../../../../assets/images/${imagesList[currentImg].imgName}`)}
          alt={`${currentImg} картинка`}
          ref={imgRef}
        />
        <button className={style.btn__prev} type="button" onClick={prevImg}>
          <img src={prevSvg} alt="prev arrow" />
        </button>
        <button className={style.btn__next} type="button" onClick={nextImg}>
          <img src={nextSvg} alt="next arrow" />
        </button>
        <button className={style.btn__download} onClick={() => downloadImg()}>
          Скачать изображение
        </button>
      </div>
    </div>
  );
};

export default ImgPopup;
