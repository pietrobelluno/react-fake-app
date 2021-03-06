import styled from 'styled-components'

export const CommentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: -20px;

  .comment {
    flex: 1 0 calc(33% - 40px);
    background: #eaecee;
    margin: 20px;
    box-sizing: border-box;
    padding: 10px 30px;
    border-radius: 5px;
    box-shadow: 5px 4px 10px 2px rgba(0,0,0,0.25);
  }
`;



