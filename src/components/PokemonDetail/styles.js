import styled from "styled-components";

export const DetailWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 20px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.h2`
  text-transform: uppercase;
  font-size: 18px;
  margin: 0;
`;

export const Image = styled.img`
  width: 96px;
  height: 96px;
  margin-right: auto;
`;

export const SaveButton = styled.button`
  background-color: ${props => props.theme.blue};
  color: white;
  text-transform: uppercase;
  font-size: 13px;
  padding: 7px 14px;
`;
