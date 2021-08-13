import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './detailData.scss';


let Box = styled.div`
    padding : 20px;
`;

let TitleHeader = styled.h4`
    font-size : 25px;
    color : ${props => props.h4Color};
`;

function Detail(props) {
    let history = useHistory();
    let { id } = useParams();

    let target = props.shoes.find(function (shoe) {
        return shoe.id == id;
    });

    return (
        <div className="container">
            <Box>
                <TitleHeader h4Color="pink">Hello</TitleHeader>
                <TitleHeader h4Color="skyblue">Hello</TitleHeader>
            </Box>
            <div className="row">
                <div className="col-md-6">
                    <img src={target.image} width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{target.title}</h4>
                    <p>{target.content}</p>
                    <p>{target.price}</p>
                    <button className="btn btn-danger">주문하기</button>
                    <button onClick={() => { history.goBack() }} className="btn btn-danger">뒤로가기</button>
                </div>
            </div>

            <div className="my-alert">
                <p>재고가 얼마 남지 않았습니다</p>
            </div>
        </div>
    )
};

export { Detail }