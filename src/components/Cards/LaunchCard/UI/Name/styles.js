import styled from "styled-components";

export const Container = styled.h3`
  width: 100%;
  margin: 30px 0 0;
  font-size: 14px;
  font-weight: 700;
  text-align: center;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const SkeletonStyle = styled(Container)`
  border-radius: 4px;
`;
