import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch,useSelector} from "react-redux";
import { newactions } from "../redux/reducer/slice";

const Right = () => {
  let [Keyword, setKeyword] = useState("");
  let dispatch = useDispatch();
  let { contact } = useSelector((state) => state);

  const SearchByName = (event) => {
    event.preventDefault();

    
    dispatch(newactions.SEARCH_BY_USERNAME({ Keyword }));
  };

  return (
    <Form  onSubmit={SearchByName} className="mt-4">
      <Row>
        <Col lg={10}>
          <Form.Control
            type="text"
            placeholder="이름을 입력해주세요"
            onChange={(event) =>
              
              setKeyword(event.target.value)
              
            }
    
          />
        </Col>
        <Col lg={2}>
          <Button type="submit" >찾기</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Right;
