import React, { FC, useEffect, useState } from "react";
import { imagesArray } from "../../assets/imagesArray";
import { TImagesArray } from "../../types/imgTypes";
import ImgBlock from "./components/ImgBlock/ImgBlock";
import ImgPopup from "./components/ImgPopup/ImgPopup";
import style from "./Gallery.module.scss";

const Gallery: FC = () => {
  const [currentImg, setCurrentImg] = useState<number | any>(null);
  const [imagesList, setImagesList] = useState<TImagesArray[]>(imagesArray);

  const sortImages = (a: TImagesArray, b: TImagesArray): number => {
    if (a.order > b.order) {
      return 1;
    } else {
      return -1;
    }
  };

  const [tookImg, setTookImg] = useState<TImagesArray | any>(null);

  const dragStartHandler = (elem: TImagesArray): void => {
    setTookImg(elem);
  };

  const dragEndHandler = (event: any): void => {};

  const dragOverHandler = (event: any): void => {
    event.preventDefault();
  };

  const dropHandler = (event: any, elem: TImagesArray): void => {
    event.preventDefault();
    setImagesList(
      imagesList.map((c) => {
        if (c.id === elem.id) {
          return { ...c, order: tookImg.order };
        }
        if (c.id === tookImg.id) {
          return { ...c, order: elem.order };
        }
        return c;
      })
    );
    // event.target.style.display = "inline";
  };

  const galleryMaped = imagesList.sort(sortImages).map((elem, index): any => {
    return (
      <ImgBlock
        imagesList={imagesList}
        setImagesList={setImagesList}
        key={index}
        elem={elem}
        order={elem.order}
        setCurrentImg={setCurrentImg}
        dropHandler={dropHandler}
        dragOverHandler={dragOverHandler}
        dragEndHandler={dragEndHandler}
        dragStartHandler={dragStartHandler}
      />
    );
  });

  const prevImg = (): void => {
    if (currentImg) {
      setCurrentImg(currentImg - 1);
    } else setCurrentImg(imagesArray.length - 1);
  };

  const nextImg = (): void => {
    if (currentImg < imagesArray.length - 1) {
      setCurrentImg(currentImg + 1);
    } else {
      setCurrentImg(0);
    }
  };

  const closeImg = (): void => {
    setCurrentImg(null);
  };

  return (
    <div>
      <h1>Галерея изображений</h1>
      {currentImg != null && (
        <ImgPopup
          imagesList={imagesList}
          currentImg={currentImg}
          prevImg={prevImg}
          nextImg={nextImg}
          closeImg={closeImg}
        />
      )}
      <div className={style.all_images}>{galleryMaped}</div>
    </div>
  );
};

export default Gallery;
