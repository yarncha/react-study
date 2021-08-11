import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

function Detail(props) {
    let history = useHistory();
    let {id} = useParams();

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={props.shoes[0].image} width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{props.shoes[0].title}</h4>
                    <p>{props.shoes[0].content}</p>
                    <p>{props.shoes[0].price}</p>
                    <button className="btn btn-danger">주문하기</button>
                    <button onClick={() => { history.goBack() }} className="btn btn-danger">뒤로가기</button>
                </div>
            </div>
        </div>
    )
};

export { Detail }