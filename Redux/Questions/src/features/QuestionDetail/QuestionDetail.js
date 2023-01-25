import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Comments from "../Comments/Comments";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #efecec;
`
const QuestionsContainer = styled.div`
    display: flex;
    flex-flow: column;
    padding: 3.75rem 5rem;
    width: 20%;
    box-shadow: 0 0.125rem 0.375rem rgba(0, 0, 0, 0.2);
    border-radius: 0.3125rem;
    background: #fff;
    margin: auto;
`
const Heading = styled.h2``

const QuestionLabel = styled.h4`
    font-weight: 300;
`

const QuestionDetail = (props) => {
    const { id } = useParams();
    if (!id) {

    }
    const QuestionDetail = useSelector(state => {
        let question = state.questions.find((question) => question.id === id);

        return question;
    });

    return (
        <Container>
            <QuestionsContainer>
                <Heading>Title:</Heading>
                <QuestionLabel>{QuestionDetail && QuestionDetail.title}</QuestionLabel>
                <Heading>Body:</Heading>
                <QuestionLabel>{QuestionDetail && QuestionDetail.body}</QuestionLabel>
            </QuestionsContainer>
            {QuestionDetail ? <Comments id={QuestionDetail.id} /> : null}
        </Container>
    );
};

export default QuestionDetail;