import styled from "@emotion/styled";

export const HomeContainer = styled.div`
  .title {
    margin-bottom: 20px;
  }

  .loader-box {
    min-height: 400px;
  }
`;

export const Body = styled.div`
  width: 100%;
  margin-top: 20px;

  .pagination {
    padding: 30px 0px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

export const Launches = styled.section`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  /* flex-direction: column; */
  gap: 10px;
`;
