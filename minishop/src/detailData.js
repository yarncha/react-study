import React, { useState, useEffect, useContext } from 'react';
import { Nav } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import {CSSTransition} from 'react-transition-group';

import { stockContext } from './App.js';
import './detailData.scss';

let Box = styled.div`
    padding : 20px;
`;

let TitleHeader = styled.h4`
    font-size : 25px;
    text-shadow: -0.5px 0px white, 0px 0.5px grey, 0.5px 0px grey, 0px -0.5px white;
    color : ${props => props.h4Color};
`;

function Info() {
    return (
        <p>재고 : { }</p>
    )
}

function TabContent(props) {
    if (props.tab == 0) {
        return <div>내용0</div>
    } else if (props.tab == 1) {
        return <div>내용1</div>
    } else if (props.tab == 2) {
        return <div>내용2</div>
    }
}

function Detail(props) {
    let [alertVisiblity, setVisiblity] = useState(true);
    let [tab, setTab] = useState(0);
    let history = useHistory();
    let { id } = useParams();
    let stock = useContext(stockContext);

    useEffect(() => {
        let timer = setTimeout(() => {
            setVisiblity(false);
        }, 2000);

        return () => { clearTimeout(timer) }
    }, []);

    let target = props.shoes.find(function (shoe) {
        return shoe.id == id;
    });

    return (
        <div className="container">
            <div>
                <Nav variant="tabs" defaultActiveKey="link-0">
                    <Nav.Item>
                        <Nav.Link eventKey="link-0" onClick={() => { setTab(0) }}>Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1" onClick={() => { setTab(1) }}>Option 2</Nav.Link>
                    </Nav.Item>
                </Nav>
                <TabContent tab={tab}></TabContent>
            </div>

            <Box>
                <TitleHeader h4Color="pink">Shoes</TitleHeader>
                <TitleHeader h4Color="skyblue">Detail Page</TitleHeader>
            </Box>

            {
                alertVisiblity === true
                    ? (<div className="my-alert">
                        <p>재고가 얼마 남지 않았습니다!</p>
                    </div>)
                    : null
            }

            <div className="row">
                <div className="col-md-6">
                    <img src={target.image} alt="shoe" width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{target.title}</h4>
                    <p>{target.content}</p>
                    <p>{target.price}</p>
                    <Info></Info>
                    <button className="btn btn-danger" onClick={() => { props.setStock([9, 10, 11]) }}>주문하기</button>
                    <button className="btn btn-danger" onClick={() => { history.goBack() }}>뒤로가기</button>
                </div>
            </div>
        </div>
    )
}



export { Detail }