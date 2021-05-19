import React, { useState } from "react";
import Draggable from "react-draggable";
import { TitleBar, Window } from "react-desktop";
import styles from "./Resume.module.css";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import { Button } from "react-desktop/macOs";
// import 'react-pdf/dist/Page/AnnotationLayer.css';

//Work around for create react app
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const ResumeView = ({ isHidden, closeHandler }) => {
  let [page, setPage] = useState(1);

  const previousPage = () => {
    setPage(page - 1);
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  return (
    <>
      <Draggable handle={".can-drag"}>
        <Window
          hidden={isHidden}
          padding={"10px"}
          chrome
          height={"600px"}
          width={"500px"}
          horizontalAlignment={"center"}
          background={"white"}
        >
          <TitleBar
            className={"can-drag"}
            title={"ClintonMedberyResume.pdf"}
            controls
            onCloseClick={closeHandler}
          />
          <div className={styles.wrapper}>
            <Document
              file="./ClintonMedberyResume.pdf"
              onLoadError={console.error}
              renderMode="svg"
            >
              <Page pageNumber={page} width={450} />
            </Document>
            <Button
              color="blue"
              margin=".6em"
              onClick={previousPage}
              disabled={page === 1}
            >
              Prev
            </Button>
            <Button
              color="blue"
              margin=".6em"
              onClick={nextPage}
              disabled={page === 2}
            >
              Next
            </Button>
          </div>
        </Window>
      </Draggable>
    </>
  );
};
