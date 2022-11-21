import React, { Dispatch, FC, SetStateAction, useState } from "react";
import { TImagesArray } from "../../../../types/imgTypes";
import style from "./ImgBlock.module.scss";

type TImgBlock = {
  elem: TImagesArray;
  order: number;
  imagesList: TImagesArray[];
  dragStartHandler: (elem: TImagesArray) => void;
  dragEndHandler: (event: any) => void;
  dragOverHandler: (event: any) => void;
  dropHandler: (event: any, elem: TImagesArray) => void;

  setImagesList: Dispatch<SetStateAction<TImagesArray[]>>;
  setCurrentImg: Dispatch<SetStateAction<number>>;
};

const ImgBlock: FC<TImgBlock> = ({
  elem,
  order,
  setCurrentImg,
  dragStartHandler,
  dragEndHandler,
  dragOverHandler,
  dropHandler,
}) => {
  return (
    <img
      onDragStart={() => dragStartHandler(elem)}
      onDragLeave={(event) => dragEndHandler(event)}
      onDragEnd={(event) => dragEndHandler(event)}
      onDragOver={(event) => dragOverHandler(event)}
      onDrop={(event) => dropHandler(event, elem)}
      draggable={true}
      className={style.single_img}
      src={require(`../../../../assets/images/${elem.imgName}`)}
      alt={`${order} картинка`}
      onClick={() => setCurrentImg(order - 1)}
    />
  );
};

export default ImgBlock;
