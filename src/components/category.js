import React from "react";
import { Col, Row } from "react-bootstrap";

const Category = ({ filterByCategory , allCategory }) => {
  const onFilter = (cat) => {
    filterByCategory(cat);
  };

  return (
    <Row className="my-2 mb-5">
      <Col sm="12" className="d-flex justify-content-center">
        {
          allCategory.length >= 1 ? (allCategory.map((cat) =>{
            return(
              <div>
                <button onClick={() => onFilter(cat)} className="botton mx-2">
                  {cat}
                </button>
              </div>
            )
          })) : <h3>لا يوجد اصناف</h3>
        }
      </Col>
    </Row>
  );
};

export default Category;
