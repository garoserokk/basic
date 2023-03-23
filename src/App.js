import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Left from "./component/Left";
import Container from "react-bootstrap/Container";
import ContactList from './component/ContactList';

// 1. 왼쪽에는 연락처 등록 오른쪽에는 모가 있다.
// 2. 리스트에 추가할 수 있다.
// 3. 리스트에 아이템이 몇개 있는지 보인다.
// 4. 사용자가 유저를 이름검색으로 찾을 수 있다.

function App() {
  return (
    <div>
      <h1 className="centering"> phone Book</h1>
      <Container>
        <Row>
          <Col>
            <Left />
          </Col>
          <Col>
            <ContactList/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
