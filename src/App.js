
import Card from './components/Card'
import NavigationBar from "./components/NavigationBar";
import Item from "./components/Item";
import Uzbegim from "./components/Uzbegim";

import {Container, Row, Col} from 'reactstrap'

function App() {

    return (
        <div>
            <NavigationBar/>

            <Item/>


            <div className="alert alert-primary">
                Lorem ipsum dolor.
            </div>

            <h3 className="text">Lorem ipsum dolor.</h3>

            <img src="logo192.png" alt=""/>

            <p style={{color: "red", fontSize: "30px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                asperiores assumenda dolores, illum ipsam
                labore nihil obcaecati perferendis, porro quaerat quis sunt vel voluptate. Amet impedit maiores odit
                quas quia?</p>

            <br/>
            <hr/>


            <Container>
                <Row>
                    <Col md="4">
                        <Card />
                    </Col>
                    <Col md="4">
                        <Card />
                    </Col>
                    <Col md="4">
                        <Card />
                    </Col>
                </Row>
            </Container>

            {/*<Card></Card>*/}
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    );

}
export default App;