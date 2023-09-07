import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";

const index = () => {
  const [album, setAlbum] = useState([]);

  useEffect(() => {
    fetchAlbums();
  }, []);

  const fetchAlbums = async () => {
    try {
      let response = await fetch(`https://picsum.photos/v2/list`);
      let responseData = await response.json();
      setAlbum(responseData);
      console.log(responseData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {album.map((item) => {
        return (
          <>
            <Col md={10}>
              <div className="card text-start p-2 my-5 bg-transparent text-white border">
                <img
                  src={item.download_url}
                  width={item.width}
                  height={item.height}
                  className="img-fluid"
                />
                <div className="card-body">
                  <h3 className="card-title mt-3">{item.author}</h3>
                </div>
              </div>
            </Col>
          </>
        );
      })}
    </>
  );
};

export default index;
